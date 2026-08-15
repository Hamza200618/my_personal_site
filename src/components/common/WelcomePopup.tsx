import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, X } from 'lucide-react';

const STORAGE_KEY = 'hamza-welcome-seen';

/**
 * WelcomePopup — first-visit popup that appears after the loading screen.
 * Introduces visitors to Hamza AI. Dismissible via the X button
 * (top-right corner) and shown once per browser session.
 */
export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip if already dismissed this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Show after the initial loading screen completes
    const timer = setTimeout(() => setIsVisible(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem(STORAGE_KEY, '1');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          role="dialog"
          aria-label="Welcome to Hamza AI"
          className="fixed inset-x-4 top-6 z-[90] mx-auto max-w-sm sm:inset-x-auto sm:right-8 sm:top-8"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/95 p-6 pr-11 shadow-card backdrop-blur-xl">
            {/* Close button — top right corner */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close welcome popup"
              className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="text-sm font-semibold leading-snug text-text-primary">
                Short on time? 🤖 Meet Hamza AI.
              </h2>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              Ask about my skills, projects, experience, or ExamMate AI.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}