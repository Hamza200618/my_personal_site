import { motion } from 'framer-motion';
import type { ProductCategory } from '@/types';
import { cn } from '@/utils/cn';

const FILTERS: Array<{ value: ProductCategory; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'ai', label: 'AI' },
  { value: 'web', label: 'Web' },
  { value: 'crm', label: 'CRM' },
  { value: 'education', label: 'Education' },
  { value: 'portfolio', label: 'Portfolio' },
];

interface FilterBarProps {
  active: ProductCategory;
  onChange: (category: ProductCategory) => void;
}

/**
 * FilterBar — animated filter chips for the products grid.
 */
export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter products by category"
      className="mb-10 flex flex-wrap items-center justify-center gap-2"
    >
      {FILTERS.map((filter) => {
        const isActive = active === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.value)}
            className={cn(
              'relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
              isActive
                ? 'text-white'
                : 'text-text-muted hover:text-text-primary',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}