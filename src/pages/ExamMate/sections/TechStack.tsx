import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { TechnologyBadges } from '@/components/sections/products/TechnologyBadges';
import { EXAMMATE_TECH_STACK } from '@/data/exammate';

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
 * TechStack — categorized technologies powering ExamMate AI.
 */
export function TechStack() {
  return (
    <Section aria-label="Technology stack">
      <Container>
        <SectionTitle title={EXAMMATE_TECH_STACK.title} subtitle={EXAMMATE_TECH_STACK.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EXAMMATE_TECH_STACK.categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>
              <TechnologyBadges technologies={category.technologies} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}