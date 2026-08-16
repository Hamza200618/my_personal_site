import { SYSTEM_PROMPT } from './lib/systemPrompt.js';
import { buildPromptContext } from './lib/buildContext.js';

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = process.env.GROQ_MODEL ?? 'llama-3.3-70b-versatile';
const TIMEOUT_MS = 28_000;
const MAX_MESSAGES = 24;
const MAX_CONTENT_LENGTH = 4000;
const MAX_BODY_BYTES = 256_000;

/**
 * Read and parse the request body, with a size guard.
 */
function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;

    req.on('data', (chunk) => {
      const buf = Buffer.from(chunk);
      size += buf.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error('PAYLOAD_TOO_LARGE'));
        req.destroy();
        return;
      }
      chunks.push(buf);
    });

    req.on('end', () => {
      if (chunks.length === 0) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf-8')));
      } catch {
        reject(new Error('INVALID_JSON'));
      }
    });

    req.on('error', (error) => reject(error));
  });
}

/**
 * Validate + sanitize messages from the client.
 * - Only 'user' and 'assistant' roles are allowed (system prompts are built
 *   server-side and can never be supplied by the client).
 * - Content must be a string and is capped in length and count.
 */
function sanitizeMessages(input) {
  if (!Array.isArray(input) || input.length === 0) return null;

  const messages = [];
  const slice = input.slice(0, MAX_MESSAGES);

  for (const item of slice) {
    if (typeof item !== 'object' || item === null) return null;
    const { role, content } = item;
    if (role !== 'user' && role !== 'assistant') return null;
    if (typeof content !== 'string') return null;
    const trimmed = content.trim();
    if (!trimmed) continue;
    messages.push({ role, content: trimmed.slice(0, MAX_CONTENT_LENGTH) });
  }

  return messages.length > 0 ? messages : null;
}

function writeJson(res, status, payload) {
  if (res.writableEnded) return;
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

function errorFromGroqStatus(status) {
  if (status === 401 || status === 403) {
    return { status: 500, message: 'The AI service is not configured correctly on the server.' };
  }
  if (status === 429) {
    return { status: 429, message: 'Rate limit reached. Please try again shortly.' };
  }
  if (status >= 500) {
    return { status: 502, message: 'The AI service is temporarily unavailable. Please try again.' };
  }
  return { status: 502, message: 'Failed to reach the AI service.' };
}

/**
 * POST /api/chat — Vercel serverless function.
 *
 * The frontend sends  { messages: [{ role: 'user' | 'assistant', content }] }.
 * This function:
 *  1. Validates + sanitizes the messages.
 *  2. Builds the Hamza AI system prompt with the knowledge-base context.
 *  3. Streams the Groq response back to the client as SSE.
 *
 * GROQ_API_KEY is read from server-side env only and never reaches the browser.
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    writeJson(res, 405, { error: 'Method not allowed. Use POST.' });
    return;
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch (error) {
    if (error instanceof Error && error.message === 'PAYLOAD_TOO_LARGE') {
      writeJson(res, 413, { error: 'Request body too large.' });
    } else {
      writeJson(res, 400, { error: 'Invalid JSON body.' });
    }
    return;
  }

  const input =
    typeof body === 'object' && body !== null ? (body.messages ?? undefined) : undefined;
  const messages = sanitizeMessages(input);
  if (!messages) {
    writeJson(res, 400, {
      error: 'Messages must be a non-empty array of user/assistant messages.',
    });
    return;
  }

  if (!process.env.GROQ_API_KEY) {
    writeJson(res, 500, { error: 'The AI service is not configured on the server.' });
    return;
  }

  // Build the system prompt + knowledge context entirely on the server.
  let systemMessage;
  try {
    systemMessage = `${SYSTEM_PROMPT}\n\n${buildPromptContext()}`;
  } catch {
    writeJson(res, 500, { error: 'The knowledge base could not be loaded.' });
    return;
  }

  const groqMessages = [
    { role: 'system', content: systemMessage },
    ...messages,
  ];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
  const abortOnClose = () => controller.abort();
  req.on('close', abortOnClose);

  let upstream;
  try {
    upstream = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: groqMessages,
        temperature: 0.7,
        max_tokens: 1024,
        stream: true,
      }),
      signal: controller.signal,
    });
  } catch {
    clearTimeout(timeoutId);
    req.removeListener('close', abortOnClose);
    writeJson(res, 502, { error: 'Network error reaching the AI service. Please try again.' });
    return;
  }

  // Non-OK upstream: map to a safe, generic client message. Never relay upstream error bodies.
  if (!upstream.ok) {
    clearTimeout(timeoutId);
    req.removeListener('close', abortOnClose);
    const mapped = errorFromGroqStatus(upstream.status);
    writeJson(res, mapped.status, { error: mapped.message });
    return;
  }

  // Stream the OpenAI-compatible SSE chunks straight through to the client.
  const stream = upstream.body;
  if (!stream) {
    clearTimeout(timeoutId);
    req.removeListener('close', abortOnClose);
    writeJson(res, 502, { error: 'Unable to stream the AI response.' });
    return;
  }

  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
  });
  res.flushHeaders();

  const reader = stream.getReader();
  const decoder = new TextDecoder();

  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      const text = decoder.decode(value, { stream: true });
      if (text && !res.writableEnded) {
        res.write(text);
      }
    }
  } catch {
    // Client disconnected or upstream read error — stop quietly.
  } finally {
    clearTimeout(timeoutId);
    req.removeListener('close', abortOnClose);
    reader.releaseLock();
    if (!res.writableEnded) {
      res.end();
    }
  }
}

/** Keep the function pinned to the Node.js runtime (no Edge). */
export const config = {
  runtime: 'nodejs',
};