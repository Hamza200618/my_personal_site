import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_WORKFLOW } from '@/data/exammate';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

/**
 * Workflow — animated application workflow.
 */
export function Workflow() {
  return (
    <Section aria-label="Application workflow" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[300px] w-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      <Container className="relative z-10">
        <SectionTitle title={EXAMMATE_WORKFLOW.title} subtitle={EXAMMATE_WORKFLOW.subtitle} align="center" />
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto flex max-w-2xl flex-col gap-2"
        >
          {EXAMMATE_WORKFLOW.steps.map((step, index) => (
            <motion.li key={step.title} variants={itemVariants}>
              <div className="rounded-xl border border-border bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{step.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-text-muted">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < EXAMMATE_WORKFLOW.steps.length - 1 && (
                <div className="ml-4 flex justify-center py-1">
                  <ArrowDown className="h-4 w-4 text-primary/50" aria-hidden="true" />
                </div>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
}