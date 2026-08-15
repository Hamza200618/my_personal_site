import { motion } from 'framer-motion';
import { Bot, Brain, Briefcase, Database, Globe, GraduationCap, MessageSquare, Server, Sparkles, Users, Workflow } from 'lucide-react';
import type { Service } from '@/types';
import { TechnologyChip } from '@/components/sections/tech/TechnologyChip';
import { cn } from '@/utils/cn';

const iconMap = {
  bot: Bot,
  message: MessageSquare,
  globe: Globe,
  users: Users,
  workflow: Workflow,
  brain: Brain,
  graduation: GraduationCap,
  briefcase: Briefcase,
  api: Server,
  database: Database,
  sparkles: Sparkles,
} as const;

interface ServiceCardProps {
  service: Service;
}

/**
 * ServiceCard — premium card for a service offering.
 * Featured services render larger with a gradient border.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'group flex h-full flex-col gap-4 rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow',
        service.featured
          ? 'border-primary/40 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-8 hover:border-primary/60 md:p-10'
          : '',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        {service.featured && (
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
            Featured
          </span>
        )}
      </div>

      <div>
        <h4 className="text-lg font-semibold text-text-primary">{service.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">{service.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {service.technologies.map((tech) => (
          <TechnologyChip key={tech} label={tech} />
        ))}
      </div>

      <div className="mt-auto border-t border-border pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          Use Cases
        </p>
        <ul className="space-y-1.5">
          {service.useCases.map((useCase) => (
            <li key={useCase} className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {useCase}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}