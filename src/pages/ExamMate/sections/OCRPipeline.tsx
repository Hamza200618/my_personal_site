import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_OCR_PIPELINE } from '@/data/exammate';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

/**
 * OCRPipeline — visual OCR processing workflow.
 */
export function OCRPipeline() {
  return (
    <Section aria-label="OCR pipeline">
      <Container>
        <SectionTitle title={EXAMMATE_OCR_PIPELINE.title} subtitle={EXAMMATE_OCR_PIPELINE.subtitle} align="center" />
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto flex max-w-2xl flex-col gap-2"
        >
          {EXAMMATE_OCR_PIPELINE.steps.map((step, index) => (
            <motion.li key={step.title} variants={itemVariants}>
              <div className="rounded-xl border border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">{step.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-text-muted">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < EXAMMATE_OCR_PIPELINE.steps.length - 1 && (
                <div className="ml-4 flex justify-center py-1">
                  <ArrowDown className="h-4 w-4 text-accent/50" aria-hidden="true" />
                </div>
              )}
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
}