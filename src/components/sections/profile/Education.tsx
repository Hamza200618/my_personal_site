import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EDUCATION } from '@/data/profile';
import { EducationCard } from './EducationCard';

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
 * Education — education history cards.
 */
export function Education() {
  return (
    <Section aria-label="Education">
      <Container>
        <SectionTitle
          title="Education"
          subtitle="Academic journey in computer science and cloud computing."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {EDUCATION.map((education) => (
            <motion.div key={`${education.degree}-${education.institution}`} variants={itemVariants}>
              <EducationCard education={education} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}