import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { TechnologyGrid } from './TechnologyGrid';

/**
 * TechStack — technology categories section.
 * Shows the tools and frameworks used to build AI-powered products.
 */
export function TechStack() {
  return (
    <Section aria-label="Technology stack" className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle
            title="Technology Stack"
            subtitle="The technologies, frameworks, and tools I use to design, develop, and deploy modern AI-powered applications."
            align="center"
          />
        </motion.div>

        <TechnologyGrid />
      </Container>
    </Section>
  );
}