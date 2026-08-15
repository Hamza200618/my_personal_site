import { motion } from 'framer-motion';
import { Brain, CheckCircle2, Cpu, GitBranch, Rocket } from 'lucide-react';
import type { Product } from '@/types';
import { ProductButtons } from './ProductButtons';
import { ProductMetrics } from './ProductMetrics';
import { TechnologyBadges } from './TechnologyBadges';

interface HeroProductProps {
  product: Product;
}

/**
 * HeroProduct — large premium showcase card for the hero product.
 * Feels like a startup homepage: image, summary, problem/solution,
 * AI capabilities, architecture, roadmap, metrics, and buttons.
 */
export function HeroProduct({ product }: HeroProductProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 backdrop-blur-sm"
    >
      {/* Image */}
      <div className="relative aspect-[21/9] overflow-hidden border-b border-border">
        <img
          src={product.image}
          alt={`${product.title} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <span className="absolute right-4 top-4 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-sm">
          Production Ready
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-2">
        {/* Left column */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Hero Product</p>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-text-primary md:text-3xl">
              {product.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
              {product.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-white/[0.02] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Problem</p>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">{product.problem}</p>
            </div>
            <div className="rounded-lg border border-border bg-white/[0.02] p-4">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">Solution</p>
              <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">{product.solution}</p>
            </div>
          </div>

          {/* AI Capabilities */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              <Brain className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              AI Capabilities
            </p>
            <ul className="space-y-2">
              {product.aiCapabilities?.map((capability) => (
                <li key={capability} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {capability}
                </li>
              ))}
            </ul>
          </div>

          <ProductButtons links={product.links} />
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Architecture */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              <GitBranch className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Architecture
            </p>
            <ul className="space-y-2">
              {product.architecture?.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Roadmap */}
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              <Rocket className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              Roadmap
            </p>
            <ul className="space-y-2">
              {product.roadmap?.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Technology Stack</p>
            <TechnologyBadges technologies={product.technologies} />
          </div>

          {/* Metrics */}
          <ProductMetrics metrics={product.metrics} />
        </div>
      </div>
    </motion.article>
  );
}