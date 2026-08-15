const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const TIMEOUT_MS = 30_000;

const API_KEY = import.meta.env.VITE_GROQ_API_KEY as string | undefined;

export interface GroqMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface GroqResponse {
  content: string;
  error?: string;
}

/**
 * sendGroqMessage — sends a chat completion request to the Groq API.
 * Handles network errors, timeouts, invalid API keys, and rate limits.
 */
export async function sendGroqMessage(
  messages: GroqMessage[],
  onToken?: (chunk: string) => void,
): Promise<GroqResponse> {
  if (!API_KEY) {
    return {
      content: '',
      error: 'Groq API key is not configured. Please add VITE_GROQ_API_KEY to your .env file.',
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages,
        temperature: 0.7,
        max_tokens: 1024,
        stream: true,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      let message = 'Failed to reach the AI service.';
      if (response.status === 401) message = 'Invalid API key. Please check your Groq API key.';
      if (response.status === 429) message = 'Rate limit reached. Please try again shortly.';
      if (response.status >= 500) message = 'The AI service is temporarily unavailable. Please try again.';
      return { content: '', error: message };
    }

    const reader = response.body?.getReader();
    if (!reader) return { content: '', error: 'Unable to read the AI response stream.' };

    const decoder = new TextDecoder();
    let fullContent = '';

    // Stream chunks
    while (true) {
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
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) {
            fullContent += delta;
            onToken?.(delta);
          }
        } catch {
          // Skip malformed JSON chunks
        }
      }
    }

    return { content: fullContent };
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return { content: '', error: 'The request timed out. Please try again.' };
    }
    return { content: '', error: 'Network error. Please check your connection and try again.' };
  } finally {
    clearTimeout(timeoutId);
  }
}