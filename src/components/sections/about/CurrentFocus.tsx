import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Cpu, Scan, Sparkles } from 'lucide-react';
import { FOCUS_AREAS } from '@/constants/about';
import type { FocusArea } from '@/types';

const iconMap = {
  cpu: Cpu,
  brain: Brain,
  sparkles: Sparkles,
  scan: Scan,
  code: Code,
  cloud: Cloud,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

/**
 * CurrentFocus — premium chips showing areas of active work.
 */
export function CurrentFocus() {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-8 text-center text-2xl font-bold tracking-tight text-text-primary md:text-3xl"
      >
        Current Focus
      </motion.h3>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {FOCUS_AREAS.map((area: FocusArea) => {
          const Icon = iconMap[area.icon];
          return (
            <motion.li key={area.label} variants={chipVariants}>
              <span className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-text-primary hover:shadow-glow">
                <Icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                {area.label}
              </span>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}