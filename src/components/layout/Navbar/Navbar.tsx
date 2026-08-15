import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { cn } from '@/utils/cn';
import { Logo } from './Logo';
import { MobileDrawer } from './MobileDrawer';

/**
 * Navbar — sticky navigation with transparent → blurred transition.
 * Includes desktop links and an animated mobile drawer.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    setIsScrolled(scrollY > 24);
  }, [scrollY]);

  // Close the mobile drawer on route change.
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-page flex h-16 items-center justify-between md:h-20"
      >
        <Logo />

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-muted hover:text-text-primary',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-primary transition-colors hover:bg-surface md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && <MobileDrawer onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}