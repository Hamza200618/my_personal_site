import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { useChat } from '@/hooks/useChat/useChat';
import { ChatHeader } from './ChatHeader';
import { Message } from './Message';
import { TypingIndicator } from './TypingIndicator';
import { SuggestionChips } from './SuggestionChips';
import { ChatInput } from './ChatInput';
import { ChatFooter } from './ChatFooter';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * ChatWindow — the Hamza AI chat window.
 * Composes header, messages, typing indicator, suggestions, input, and footer.
 */
export function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const { messages, isLoading, error, sendMessage, clearConversation } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          role="dialog"
          aria-label="Hamza AI chat window"
          className="fixed bottom-20 right-4 z-[95] flex h-[520px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-secondary/95 shadow-card backdrop-blur-xl sm:bottom-24 sm:right-6 sm:w-96"
        >
          <ChatHeader onClear={clearConversation} />

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <Message key={`${message.role}-${index}`} message={message} />
            ))}

            {isLoading && <TypingIndicator />}

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400" role="alert">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="flex-1">{error}</span>
                <button
                  type="button"
                  onClick={() => sendMessage(messages[messages.length - 1]?.content ?? '')}
                  aria-label="Retry"
                  className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-red-300 transition-colors hover:bg-red-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                >
                  <RefreshCw className="h-3 w-3" aria-hidden="true" />
                  Retry
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          <div className="border-t border-border px-3 py-2">
            <SuggestionChips onSelect={sendMessage} />
          </div>

          <ChatInput onSend={sendMessage} disabled={isLoading} />
          <ChatFooter />
        </motion.div>
      )}
    </AnimatePresence>
  );
}