/**
 * scrollToTop — smooth-scrolls the window to the top.
 * Respects the user's reduced-motion preference via CSS scroll-behavior.
 */
export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}