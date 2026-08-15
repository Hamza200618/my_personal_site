import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Divider } from '@/components/common/Divider';
import { SERVICES } from '@/data/services';
import { ServiceCard } from './ServiceCard';
import { DevelopmentProcess } from './DevelopmentProcess';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

/**
 * Services — "What I Build" section.
 * Composes service cards with a featured highlight and the development process.
 */
export function Services() {
  return (
    <Section aria-label="What I build" className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-0 top-1/3 h-[400px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle
            title="What I Build"
            subtitle="Helping businesses, startups, and organizations transform ideas into intelligent digital products."
            align="center"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        <Divider gradient className="my-20 md:my-28" />

        <DevelopmentProcess />
      </Container>
    </Section>
  );
}