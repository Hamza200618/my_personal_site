import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { BACK_TO_TOP_THRESHOLD } from '@/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { scrollToTop } from '@/utils/scroll';

/**
 * BackToTop — floating button that appears after scrolling past a threshold.
 * Smooth-scrolls back to the top on click.
 */
export function BackToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > BACK_TO_TOP_THRESHOLD;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-glow transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}