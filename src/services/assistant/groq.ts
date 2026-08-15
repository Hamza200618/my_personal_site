const CHAT_ENDPOINT = '/api/chat';
const TIMEOUT_MS = 30_000;

export interface ChatMessagePayload {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatResponse {
  content: string;
  error?: string;
}

interface StreamChunk {
  choices?: Array<{ delta?: { content?: string } }>;
}

/**
 * sendChatMessage — sends a chat request through the serverless `/api/chat`
 * endpoint. The Groq API key never touches the browser: all API traffic
 * flows react → /api/chat → Vercel function → Groq.
 */
export async function sendChatMessage(
  messages: ChatMessagePayload[],
  onToken?: (chunk: string) => void,
): Promise<ChatResponse> {
  if (!Array.isArray(messages) || messages.length === 0) {
    return { content: '', error: 'Please type a message first.' };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  let response: Response;
  try {
    response = await fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
      signal: controller.signal,
    });
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { content: '', error: 'The request timed out. Please try again.' };
    }
    return { content: '', error: 'Network error. Please check your connection and try again.' };
  }
  clearTimeout(timeoutId);

  if (!response.ok) {
    let message = 'The AI service could not process your request.';
    try {
      const data = (await response.json()) as { error?: unknown };
      if (typeof data.error === 'string' && data.error) {
        message = data.error;
      }
    } catch {
      // Fall back to the generic message.
    }
    return { content: '', error: message };
  }

  const reader = response.body?.getReader();
  if (!reader) return { content: '', error: 'Unable to read the AI response stream.' };

  const decoder = new TextDecoder();
  let fullContent = '';

  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data: ')) continue;
        const data = trimmed.slice(6);
        if (data === '[DONE]') continue;

        try {
          const parsed = JSON.parse(data) as StreamChunk;
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            fullContent += delta;
            onToken?.(delta);
          }
        } catch {
          // Skip malformed JSON chunks.
        }
      }
    }
  } catch {
    // Connection dropped mid-stream — return whatever we have.
  } finally {
    reader.releaseLock();
  }

  return { content: fullContent };
}