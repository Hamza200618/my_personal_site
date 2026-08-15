import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Adds a subtle hover lift effect. */
  hoverable?: boolean;
}

/**
 * GlassCard — frosted-glass surface with backdrop blur.
 * Ideal for overlays, hero sections, and premium surfaces.
 */
export function GlassCard({ children, hoverable = false, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-white/5 backdrop-blur-md',
        hoverable && 'transition-transform duration-300 hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}