import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { FAQS } from '@/data/contact';
import { cn } from '@/utils/cn';

/**
 * FAQ — accordion of frequently asked questions.
 */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section aria-label="Frequently asked questions">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about working with me."
          align="center"
        />
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-border bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span className="text-sm font-medium text-text-primary">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 shrink-0 text-text-muted transition-transform duration-300',
                        isOpen && 'rotate-180 text-primary',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}