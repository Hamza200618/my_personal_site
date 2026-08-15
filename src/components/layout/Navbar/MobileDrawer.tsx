import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@/constants';
import { cn } from '@/utils/cn';

interface MobileDrawerProps {
  onClose: () => void;
}

/**
 * MobileDrawer — animated full-screen navigation drawer for mobile.
 * Rendered inside an AnimatePresence parent for enter/exit transitions.
 */
export function MobileDrawer({ onClose }: MobileDrawerProps) {
  return (
    <motion.div
      id="mobile-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl md:hidden"
    >
      <nav aria-label="Mobile navigation" className="container-page py-8">
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
            >
              <NavLink
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'block rounded-lg px-4 py-3 text-lg font-medium transition-colors',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary',
                  )
                }
              >
                {item.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}