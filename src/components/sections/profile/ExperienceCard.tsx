import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import type { ExperienceEntry } from '@/types';
import { TechnologyBadges } from '@/components/sections/products/TechnologyBadges';

interface ExperienceCardProps {
  experience: ExperienceEntry;
}

/**
 * ExperienceCard — premium timeline card for a professional experience.
 */
export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
    >
      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
          <Briefcase className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-base font-semibold text-text-primary">{experience.role}</h4>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {experience.period}
            </span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-accent">{experience.company}</p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">{experience.description}</p>

          <div className="mt-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              Key Responsibilities
            </p>
            <div className="flex flex-wrap gap-1.5">
              {experience.highlights.map((highlight) => (
                <span key={highlight} className="inline-flex items-center gap-1 rounded-full bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-text-secondary">
                  <CheckCircle2 className="h-3 w-3 text-primary" aria-hidden="true" />
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">
              Technologies
            </p>
            <TechnologyBadges technologies={experience.technologies} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}