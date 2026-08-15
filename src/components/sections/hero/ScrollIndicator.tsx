import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * ScrollIndicator — animated bounce indicator that scrolls to the next section.
 * Clicking smooth-scrolls down past the hero.
 */
export function ScrollIndicator() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Scroll to next section"
      className="inline-flex flex-col items-center gap-2 text-text-muted transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.4 }}
    >
      <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </motion.span>
    </motion.button>
  );
}