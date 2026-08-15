import { memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { Bot, Copy, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { ChatMessage } from '@/types';

interface MessageProps {
  message: ChatMessage;
}

/**
 * Message — renders a single chat message with markdown support.
 * Memoized for performance.
 */
export const Message = memo(function Message({ message }: MessageProps) {
  const isUser = message.role === 'user';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
    } catch {
      // Clipboard API not available
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn('flex w-full gap-3', isUser ? 'flex-row-reverse' : 'flex-row')}
    >
      {/* Avatar */}
      <span
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
          isUser ? 'bg-surface text-text-secondary' : 'bg-gradient-to-br from-primary to-accent text-white',
        )}
      >
        {isUser ? <User className="h-4 w-4" aria-hidden="true" /> : <Bot className="h-4 w-4" aria-hidden="true" />}
      </span>

      {/* Message bubble */}
      <div
        className={cn(
          'max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed',
          isUser
            ? 'rounded-tr-sm bg-primary text-white'
            : 'rounded-tl-sm border border-border bg-white/[0.05] text-text-primary',
        )}
      >
        <ReactMarkdown
          components={{
            a: (props) => (
              <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2" />
            ),
            p: (props) => <p className="mb-1 last:mb-0" {...props} />,
            ul: (props) => <ul className="mb-1 ml-4 list-disc space-y-0.5 last:mb-0" {...props} />,
            ol: (props) => <ol className="mb-1 ml-4 list-decimal space-y-0.5 last:mb-0" {...props} />,
            strong: (props) => <strong className="font-semibold" {...props} />,
          }}
        >
          {message.content}
        </ReactMarkdown>

        {/* Copy button for assistant messages */}
        {!isUser && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy message"
            className="mt-1.5 inline-flex items-center gap-1 text-[10px] text-text-muted transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Copy className="h-3 w-3" aria-hidden="true" />
            Copy
          </button>
        )}
      </div>
    </motion.div>
  );
});