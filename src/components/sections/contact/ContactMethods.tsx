import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { CONTACT_METHODS } from '@/data/contact';
import { ContactCard } from './ContactCard';

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
 * ContactMethods — grid of contact method cards.
 */
export function ContactMethods() {
  return (
    <Section aria-label="Contact methods">
      <Container>
        <SectionTitle
          title="Contact Methods"
          subtitle="Reach me through any of these channels."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CONTACT_METHODS.map((method) => (
            <motion.div key={method.label} variants={itemVariants}>
              <ContactCard method={method} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}