import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ABOUT_HEADER } from '@/constants/about';
import { FounderStory } from './FounderStory';
import { ProfessionalSummary } from './ProfessionalSummary';
import { Statistics } from './Statistics';
import { CoreValues } from './CoreValues';
import { CurrentFocus } from './CurrentFocus';
import { Philosophy } from './Philosophy';

/**
 * About — the complete "About Me" experience.
 * Composes: header, founder story, summary, statistics, values, focus, philosophy.
 */
export function About() {
  return (
    <Section aria-label="About me" className="relative overflow-hidden">
      {/* Subtle background glow for consistency with hero */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionTitle
            title={ABOUT_HEADER.title}
            subtitle={ABOUT_HEADER.subtitle}
            align="center"
          />
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          <FounderStory />
          <ProfessionalSummary />
          <Statistics />
          <CoreValues />
          <CurrentFocus />
          <Philosophy />
        </div>
      </Container>
    </Section>
  );
}