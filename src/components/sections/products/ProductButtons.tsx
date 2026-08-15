import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ExternalLink, Github } from 'lucide-react';
import type { ProductLink } from '@/types';
import { cn } from '@/utils/cn';

const iconMap = {
  github: Github,
  demo: ExternalLink,
  'case-study': BookOpen,
  'read-more': ArrowRight,
} as const;

interface ProductButtonsProps {
  links: ProductLink[];
}

/**
 * ProductButtons — action buttons for a product card.
 * Renders GitHub, Live Demo, Case Study, and Read More links.
 */
export function ProductButtons({ links }: ProductButtonsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) => {
        const Icon = iconMap[link.type];
        const isInternal = link.href.startsWith('/');

        const className = cn(
          'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-all duration-300',
          'hover:scale-[1.03] active:scale-[0.98]',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
          link.type === 'github' &&
            'border border-border bg-white/[0.03] text-text-secondary hover:border-primary/40 hover:text-text-primary hover:shadow-glow',
          link.type === 'demo' &&
            'bg-primary text-white hover:bg-primary/90 shadow-glow',
          link.type === 'case-study' &&
            'border border-primary/40 text-primary hover:bg-primary/10',
          link.type === 'read-more' &&
            'text-text-muted hover:text-text-primary',
        );

        const content = (
          <>
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {link.label}
          </>
        );

        if (isInternal) {
          return (
            <Link key={link.label} to={link.href} className={className}>
              {content}
            </Link>
          );
        }

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}