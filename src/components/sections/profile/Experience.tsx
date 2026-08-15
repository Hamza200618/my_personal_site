import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXPERIENCE } from '@/data/profile';
import { ExperienceCard } from './ExperienceCard';

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
 * Experience — professional experience timeline cards.
 */
export function Experience() {
  return (
    <Section aria-label="Professional experience">
      <Container>
        <SectionTitle
          title="Professional Experience"
          subtitle="Building AI-powered products and full-stack solutions."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto flex max-w-3xl flex-col gap-4"
        >
          {EXPERIENCE.map((experience) => (
            <motion.div key={`${experience.role}-${experience.company}`} variants={itemVariants}>
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}