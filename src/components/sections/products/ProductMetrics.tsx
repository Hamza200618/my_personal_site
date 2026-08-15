import type { ProductMetric } from '@/types';

interface ProductMetricsProps {
  metrics: ProductMetric[];
}

/**
 * ProductMetrics — compact metric grid for a product.
 * Shows modules, pages, AI features, ML models, DB tables, and more.
 */
export function ProductMetrics({ metrics }: ProductMetricsProps) {
  return (
    <dl className="grid grid-cols-3 gap-2">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-lg border border-border bg-white/[0.02] px-3 py-2 text-center"
        >
          <dt className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
            {metric.label}
          </dt>
          <dd className="mt-0.5 text-sm font-bold text-text-primary">
            {metric.value}
            {metric.suffix && <span className="text-primary">{metric.suffix}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}