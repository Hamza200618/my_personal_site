import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  /** Adds vertical padding. */
  padded?: boolean;
  /** Adds a subtle grid background. */
  grid?: boolean;
}

/**
 * Section — semantic <section> wrapper with consistent spacing.
 */
export function Section({
  children,
  padded = true,
  grid = false,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative',
        padded && 'py-16 md:py-24',
        grid && 'bg-grid',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}