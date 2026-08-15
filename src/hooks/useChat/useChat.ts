import { useCallback, useEffect, useRef, useState } from 'react';
import { sendGroqMessage, type GroqMessage } from '@/services/assistant/groq';
import { buildPromptContext } from '@/utils/contextBuilder';
import { SYSTEM_PROMPT } from '@/services/assistant/prompt';
import type { ChatMessage } from '@/types';

interface UseChatOptions {
  onError?: (error: string) => void;
}

/**
 * useChat — hook that manages assistant chat state and sends messages to Groq.
 * Builds the system prompt with knowledge context, streams responses, and tracks conversation history.
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

  const contextRef = useRef(buildPromptContext());
  const messagesRef = useRef<ChatMessage[]>([]);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const sendMessage = useCallback(
    async (content: string) => {
      const userMessage: ChatMessage = { role: 'user', content };
      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setError(null);

      const groqMessages: GroqMessage[] = [
        { role: 'system', content: `${SYSTEM_PROMPT}\n\n${contextRef.current}` },
        ...messagesRef.current.map((m) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
        { role: 'user', content },
      ];

      const response = await sendGroqMessage(groqMessages);

      setIsLoading(false);

      if (response.error) {
        setError(response.error);
        onError?.(response.error);
        return;
      }

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.content,
      };
      setMessages((prev) => [...prev, assistantMessage]);
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