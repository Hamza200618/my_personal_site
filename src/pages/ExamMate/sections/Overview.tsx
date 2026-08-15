import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_OVERVIEW } from '@/data/exammate';

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
 * Overview — purpose, audience, core idea, and value proposition.
 */
export function Overview() {
  return (
    <Section aria-label="Overview">
      <Container>
        <SectionTitle title={EXAMMATE_OVERVIEW.title} subtitle={EXAMMATE_OVERVIEW.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Purpose</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{EXAMMATE_OVERVIEW.purpose}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Audience</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{EXAMMATE_OVERVIEW.audience}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Core Idea</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{EXAMMATE_OVERVIEW.coreIdea}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10 p-6 backdrop-blur-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Value Proposition</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">{EXAMMATE_OVERVIEW.valueProposition}</p>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}