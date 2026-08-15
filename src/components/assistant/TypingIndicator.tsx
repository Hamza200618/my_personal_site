import { motion } from 'framer-motion';

/**
 * TypingIndicator — animated three-dot loading indicator for the assistant.
 */
export function TypingIndicator() {
  return (
    <div className="flex items-center gap-3" role="status" aria-label="Hamza AI is typing">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white">
        <span className="text-xs font-bold">AI</span>
      </span>
      <div className="flex items-center gap-1 rounded-xl rounded-tl-sm border border-border bg-white/[0.05] px-4 py-3">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.15 }}
            className="h-1.5 w-1.5 rounded-full bg-primary"
          />
        ))}
      </div>
    </div>
  );
}