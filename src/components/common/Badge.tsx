import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import type { BadgeVariant } from '@/types';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-primary/15 text-primary border border-primary/30',
  accent: 'bg-accent/15 text-accent border border-accent/30',
  neutral: 'bg-surface text-text-secondary border border-border',
  outline: 'border border-border text-text-secondary',
};

/**
 * Badge — small label for categories, statuses, and tags.
 */
export function Badge({ children, variant = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}