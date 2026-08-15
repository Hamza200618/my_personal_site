import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { CERTIFICATIONS } from '@/data/profile';
import type { Certification } from '@/types';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';

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
 * Certifications — certification cards with preview modal.
 */
export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <Section aria-label="Certifications">
      <Container>
        <SectionTitle
          title="Certifications"
          subtitle="Professional certifications from recognized organizations."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CERTIFICATIONS.map((certification) => (
            <motion.div key={certification.title} variants={itemVariants}>
              <CertificateCard certification={certification} onView={setSelected} />
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <CertificateModal certification={selected} onClose={() => setSelected(null)} />
    </Section>
  );
}