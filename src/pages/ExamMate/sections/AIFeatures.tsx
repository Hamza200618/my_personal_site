import { motion } from 'framer-motion';
import { Brain, Check, Cpu, MessageSquare, Pen, ScanSearch, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_AI_FEATURES } from '@/data/exammate';

const iconMap = {
  sparkles: Sparkles,
  cpu: Cpu,
  message: MessageSquare,
  scan: ScanSearch,
  pen: Pen,
  brain: Brain,
  check: Check,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
 * AIFeatures — the intelligence powering ExamMate AI.
 */
export function AIFeatures() {
  return (
    <Section aria-label="AI features" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[130px]" />
      </div>
      <Container className="relative z-10">
        <SectionTitle title={EXAMMATE_AI_FEATURES.title} subtitle={EXAMMATE_AI_FEATURES.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EXAMMATE_AI_FEATURES.features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-accent"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-text-primary">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}