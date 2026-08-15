import { motion } from 'framer-motion';
import { BRAND } from '@/constants';

/**
 * Loader — elegant full-screen loading screen shown on initial app load.
 */
export function Loader() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col items-center gap-6"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-white">
          {BRAND.name}
        </span>

        <div className="h-1 w-32 overflow-hidden rounded-full bg-surface">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-primary to-accent"
          />
        </div>
      </motion.div>
    </div>
  );
}