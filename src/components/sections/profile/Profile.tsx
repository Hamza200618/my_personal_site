import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Experience } from './Experience';
import { Education } from './Education';
import { Certifications } from './Certifications';
import { Achievements } from './Achievements';
import { Languages } from './Languages';
import { Interests } from './Interests';
import { Timeline } from './Timeline';

/**
 * Profile — professional profile section.
 * Composes: Experience → Education → Certifications → Achievements → Languages → Interests → Timeline.
 */
export function Profile() {
  return (
    <Section aria-label="Professional profile" className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[400px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <SectionTitle
          title="Professional Profile"
          subtitle="A modern executive profile — experience, education, certifications, and more."
          align="center"
        />

        <div className="space-y-20 md:space-y-28">
          <Experience />
          <Education />
          <Certifications />
          <Achievements />
          <Languages />
          <Interests />
          <Timeline />
        </div>
      </Container>
    </Section>
  );
}