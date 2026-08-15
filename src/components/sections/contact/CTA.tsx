import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/common/Button';
import { CONTACT_CTA } from '@/data/contact';

/**
 * CTA — closing call-to-action for the contact section.
 */
export function CTA() {
  return (
    <Section aria-label="Call to action" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-[130px]" />
      </div>
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-text-primary md:text-4xl">
            {CONTACT_CTA.title}
          </h2>
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            {CONTACT_CTA.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:syedhamzakamal48@gmail.com">
              <Button variant="primary" size="lg" className="group">
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                {CONTACT_CTA.primaryButton}
              </Button>
            </a>
            <Link to="/products">
              <Button variant="outline" size="lg" className="group">
                {CONTACT_CTA.secondaryButton}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}