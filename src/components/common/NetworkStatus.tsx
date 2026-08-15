import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WifiOff } from 'lucide-react';

/**
 * NetworkStatus — shows a banner when the user goes offline.
 * Returns to normal state automatically when back online.
 */
export function NetworkStatus() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    setIsOffline(!navigator.onLine);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          role="status"
          aria-live="polite"
          className="fixed inset-x-0 top-0 z-[200] flex items-center justify-center gap-2 bg-amber-500/90 px-4 py-2 text-sm font-medium text-black"
        >
          <WifiOff className="h-4 w-4" aria-hidden="true" />
          You are offline. Some features may not work.
        </motion.div>
      )}
    </AnimatePresence>
  );
}