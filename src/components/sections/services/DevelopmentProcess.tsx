import { motion } from 'framer-motion';
import { Check, Code, Layout, Pen, RefreshCw, Rocket, Search } from 'lucide-react';
import { WORKFLOW_STEPS } from '@/data/workflow';
import type { WorkflowStep } from '@/types';

const iconMap = {
  search: Search,
  layout: Layout,
  pen: Pen,
  code: Code,
  check: Check,
  rocket: Rocket,
  refresh: RefreshCw,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

interface WorkflowStepProps {
  step: WorkflowStep;
  index: number;
  isLast: boolean;
}

function WorkflowStepItem({ step, index, isLast }: WorkflowStepProps) {
  const Icon = iconMap[step.icon];

  return (
    <motion.li variants={stepVariants} className="relative flex gap-4">
      <div className="relative flex flex-col items-center">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        {!isLast && (
          <span className="mt-2 w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent" aria-hidden="true" />
        )}
      </div>
      <div className="pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Step {index + 1}
        </p>
        <h4 className="mt-1 text-base font-semibold text-text-primary md:text-lg">{step.title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{step.description}</p>
      </div>
    </motion.li>
  );
}

/**
 * DevelopmentProcess — animated step-by-step workflow.
 */
export function DevelopmentProcess() {
  return (
    <div className="mx-auto max-w-2xl">
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-10 text-center text-2xl font-bold tracking-tight text-text-primary md:text-3xl"
      >
        How I Build Software
      </motion.h3>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col"
      >
        {WORKFLOW_STEPS.map((step, index) => (
          <WorkflowStepItem
            key={step.title}
            step={step}
            index={index}
            isLast={index === WORKFLOW_STEPS.length - 1}
          />
        ))}
      </motion.ul>
    </div>
  );
}