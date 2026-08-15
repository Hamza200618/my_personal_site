import { useCallback, useEffect, useRef, useState } from 'react';
import { sendChatMessage, type ChatMessagePayload } from '@/services/assistant/groq';
import type { ChatMessage } from '@/types';

interface UseChatOptions {
  onError?: (error: string) => void;
}

/**
 * useChat — hook that manages assistant chat state and sends messages
 * through the serverless /api/chat endpoint. The system prompt and
 * knowledge context are injected server-side; the client only sends
 * user/assistant messages.
 */
export function useChat({ onError }: UseChatOptions = {}) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I am Hamza AI, the intelligent assistant representing Syed Hamza Kamal. Ask me about my projects, skills, or how we can work together.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const messagesRef = useRef<ChatMessage[]>([]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed) return;

      const userMessage: ChatMessage = { role: 'user', content: trimmed };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      const payload: ChatMessagePayload[] = [
        ...messagesRef.current.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        { role: 'user', content: trimmed },
      ];

      const response = await sendChatMessage(payload);

      setIsLoading(false);

      if (response.error) {
        setError(response.error);
        onError?.(response.error);
        return;
      }

      if (response.content) {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: response.content },
        ]);
      }
    },
    [onError],
  );

  const clearConversation = useCallback(() => {
    setMessages([
      {
        role: 'assistant',
        content: 'Hello! I am Hamza AI. Ask me anything about Syed Hamza Kamal, NexusAI, or my portfolio.',
      },
    ]);
  }, []);

  return {
    messages,
    input,
    setInput,
    isLoading,
    error,
    sendMessage,
    clearConversation,
  };
}