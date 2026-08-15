import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageWrapperProps {
  children: ReactNode;
}

/**
 * PageWrapper — wraps page content with a subtle fade-in transition.
 * Uses Framer Motion for smooth, performant page entrances.
 */
export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}