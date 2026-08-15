import { useEffect, useState } from 'react';

/**
 * useScrollPosition — tracks the current vertical scroll position.
 * Used by the Navbar (transparent → blurred) and BackToTop button.
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}