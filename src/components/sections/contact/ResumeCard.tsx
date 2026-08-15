import { motion } from 'framer-motion';
import { Calendar, Download, FileText } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/common/Button';
import { RESUME_INFO } from '@/data/contact';

/**
 * ResumeCard — premium glass card for downloading the resume.
 */
export function ResumeCard() {
  return (
    <Section aria-label="Resume download">
      <Container>
        <SectionTitle
          title="Resume"
          subtitle="Download my professional resume to learn more about my experience."
          align="center"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl rounded-xl border border-border bg-gradient-to-br from-primary/5 via-transparent to-accent/5 p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
              <FileText className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h4 className="text-lg font-semibold text-text-primary">Professional Resume</h4>
              <p className="mt-1 flex items-center gap-1.5 text-xs text-text-muted">
                <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                Last updated: {RESUME_INFO.lastUpdated}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-text-secondary">
            A comprehensive overview of my professional experience, education, certifications, and technical skills.
          </p>

          <div className="mt-6">
            <a href={RESUME_INFO.url} download={RESUME_INFO.fileName}>
              <Button variant="primary" size="lg" className="group">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}