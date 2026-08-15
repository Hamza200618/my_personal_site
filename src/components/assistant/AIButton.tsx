import { motion } from 'framer-motion';
import { Bot, X } from 'lucide-react';

interface AIButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * AIButton — floating button that toggles the Hamza AI chat window.
 * Desktop: bottom-right. Mobile: bottom-center.
 */
export function AIButton({ isOpen, onClick }: AIButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Close Hamza AI chat' : 'Open Hamza AI chat'}
      aria-expanded={isOpen}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-glow transition-shadow hover:shadow-glow-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:bottom-6 sm:right-6"
    >
      {isOpen ? (
        <X className="h-6 w-6" aria-hidden="true" />
      ) : (
        <Bot className="h-6 w-6" aria-hidden="true" />
      )}
    </motion.button>
  );
}