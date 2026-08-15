import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import type { EducationEntry } from '@/types';
import { cn } from '@/utils/cn';

const statusStyles = {
  completed: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  'in-progress': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  expected: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
} as const;

const statusLabels = {
  completed: 'Completed',
  'in-progress': 'In Progress',
  expected: 'Expected',
} as const;

interface EducationCardProps {
  education: EducationEntry;
}

/**
 * EducationCard — premium card for an education entry.
 */
export function EducationCard({ education }: EducationCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
          <GraduationCap className="h-5 w-5" aria-hidden="true" />
        </span>
        <span
          className={cn(
            'rounded-full border px-3 py-1 text-xs font-semibold',
            statusStyles[education.status],
          )}
        >
          {statusLabels[education.status]}
        </span>
      </div>

      <h4 className="mt-4 text-base font-semibold text-text-primary">{education.degree}</h4>
      <p className="mt-0.5 text-sm font-medium text-accent">{education.field}</p>
      <p className="mt-2 text-sm text-text-secondary">{education.institution}</p>
      <p className="mt-1 text-xs text-text-muted">{education.period}</p>
    </motion.article>
  );
}