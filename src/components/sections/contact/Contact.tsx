import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { Hero } from './Hero';
import { ContactMethods } from './ContactMethods';
import { ContactForm } from './ContactForm';
import { Availability } from './Availability';
import { FAQ } from './FAQ';
import { SocialLinks } from './SocialLinks';
import { ResumeCard } from './ResumeCard';
import { CTA } from './CTA';

/**
 * Contact — premium contact & networking hub.
 * Composes: Hero → Contact Methods → Contact Form → Availability → FAQ → Social Links → Resume → CTA.
 */
export function Contact() {
  return (
    <Section aria-label="Contact" className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[400px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="space-y-20 md:space-y-28">
          <Hero />
          <ContactMethods />
          <ContactForm />
          <Availability />
          <FAQ />
          <SocialLinks />
          <ResumeCard />
          <CTA />
        </div>
      </Container>
    </Section>
  );
}