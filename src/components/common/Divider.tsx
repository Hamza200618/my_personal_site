import type { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Adds a gradient glow to the divider. */
  gradient?: boolean;
}

/**
 * Divider — horizontal separator with optional gradient accent.
 */
export function Divider({ gradient = false, className, ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        'h-px w-full border-0',
        gradient
          ? 'bg-gradient-to-r from-transparent via-primary/50 to-transparent'
          : 'bg-border',
        className,
      )}
      {...props}
    />
  );
}