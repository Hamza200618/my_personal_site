import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: ReactNode;
}

/**
 * SectionTitle — consistent heading block for page sections.
 * Composed of an eyebrow, title, and optional subtitle.
 */
export function SectionTitle({
  title,
  subtitle,
  align = 'left',
  className,
  children,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}