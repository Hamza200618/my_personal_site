import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Adds vertical padding. */
  padded?: boolean;
  /** Constrains width to the page container. */
  constrained?: boolean;
}

/**
 * Container — reusable layout wrapper.
 * Provides consistent horizontal padding and optional vertical rhythm.
 */
export function Container({
  children,
  className,
  padded = false,
  constrained = true,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        constrained && 'container-page',
        padded && 'py-16 md:py-24',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}