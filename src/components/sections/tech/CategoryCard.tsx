import { motion } from 'framer-motion';
import { Cloud, Cpu, Database, Layout, Server, Wrench } from 'lucide-react';
import type { TechnologyCategory } from '@/types';
import { TechnologyChip } from './TechnologyChip';

const iconMap = {
  cpu: Cpu,
  server: Server,
  layout: Layout,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
} as const;

interface CategoryCardProps {
  category: TechnologyCategory;
}

/**
 * CategoryCard — glass card for a technology category.
 * Contains icon, title, description, and technology chips.
 */
export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = iconMap[category.icon];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h4 className="text-base font-semibold text-text-primary">{category.title}</h4>
          <p className="mt-0.5 text-xs leading-relaxed text-text-muted">{category.description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.technologies.map((tech) => (
          <TechnologyChip key={tech} label={tech} />
        ))}
      </div>
    </motion.article>
  );
}