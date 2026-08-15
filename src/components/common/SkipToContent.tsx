import { cn } from '@/utils/cn';

/**
 * SkipToContent — keyboard-only skip link for accessibility.
 * Lets screen reader and keyboard users skip to the main content.
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={cn(
        'sr-only',
        'focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200]',
        'focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2.5',
        'focus:text-sm focus:font-semibold focus:text-white',
      )}
    >
      Skip to main content
    </a>
  );
}