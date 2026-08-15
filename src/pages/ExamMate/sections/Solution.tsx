import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_SOLUTION } from '@/data/exammate';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

/**
 * Solution — how ExamMate AI solves each problem.
 */
export function Solution() {
  return (
    <Section aria-label="Solution" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute right-0 top-1/3 h-[300px] w-[400px] rounded-full bg-emerald-500/5 blur-[120px]" />
      </div>
      <Container className="relative z-10">
        <SectionTitle title={EXAMMATE_SOLUTION.title} subtitle={EXAMMATE_SOLUTION.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {EXAMMATE_SOLUTION.points.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-emerald-500/30"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />
              <h3 className="mt-3 text-base font-semibold text-text-primary">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}