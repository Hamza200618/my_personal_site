import { motion } from 'framer-motion';
import { Brain, Cpu, Database, Pen, ScanSearch } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_CHALLENGES } from '@/data/exammate';

const iconMap = {
  scan: ScanSearch,
  brain: Brain,
  pen: Pen,
  cpu: Cpu,
  database: Database,
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
 * Challenges — engineering challenges solved during development.
 */
export function Challenges() {
  return (
    <Section aria-label="Engineering challenges">
      <Container>
        <SectionTitle title={EXAMMATE_CHALLENGES.title} subtitle={EXAMMATE_CHALLENGES.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EXAMMATE_CHALLENGES.challenges.map((challenge) => {
            const Icon = iconMap[challenge.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={challenge.title}
                variants={itemVariants}
                className="group rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-glow"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-text-primary">{challenge.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{challenge.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}