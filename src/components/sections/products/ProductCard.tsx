import { motion } from 'framer-motion';
import type { Product, ProductStatus } from '@/types';
import { cn } from '@/utils/cn';
import { ProductButtons } from './ProductButtons';
import { ProductMetrics } from './ProductMetrics';
import { TechnologyBadges } from './TechnologyBadges';

const statusStyles: Record<ProductStatus, string> = {
  production: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  completed: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  development: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  research: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
};

const statusLabels: Record<ProductStatus, string> = {
  production: 'Production Ready',
  completed: 'Completed',
  development: 'In Development',
  research: 'Research',
};

interface ProductCardProps {
  product: Product;
}

/**
 * ProductCard — premium showcase card for a product.
 * Includes image, title, summary, problem/solution, tech, features, metrics, and buttons.
 */
export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border">
        <img
          src={product.image}
          alt={`${product.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={cn(
            'absolute right-3 top-3 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm',
            statusStyles[product.status],
          )}
        >
          {statusLabels[product.status]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h4 className="text-lg font-semibold text-text-primary">{product.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{product.summary}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white/[0.02] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Problem</p>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">{product.problem}</p>
          </div>
          <div className="rounded-lg border border-border bg-white/[0.02] p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Solution</p>
            <p className="mt-1 text-xs leading-relaxed text-text-secondary">{product.solution}</p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Technology</p>
          <TechnologyBadges technologies={product.technologies} />
        </div>

        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Key Features</p>
          <div className="flex flex-wrap gap-1.5">
            {product.features.map((feature) => (
              <span
                key={feature}
                className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <ProductMetrics metrics={product.metrics} />

        <div className="mt-auto border-t border-border pt-4">
          <ProductButtons links={product.links} />
        </div>
      </div>
    </motion.article>
  );
}