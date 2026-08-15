import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import type { CardVariant } from '@/types';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'bg-surface border border-border',
  elevated: 'bg-surface border border-border shadow-card',
  outline: 'border border-border bg-transparent',
};

/**
 * Card — reusable surface container with variants.
 */
export function Card({ children, variant = 'default', className, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-xl p-6', variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
}