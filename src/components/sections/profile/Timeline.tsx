import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { JOURNEY_TIMELINE } from '@/data/profile';

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
 * Timeline — career journey timeline with scroll-triggered reveal.
 */
export function Timeline() {
  return (
    <Section aria-label="Career journey" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[130px]" />
      </div>
      <Container className="relative z-10">
        <SectionTitle
          title="Career Journey"
          subtitle="A timeline of milestones from matriculation to co-founding NexusAI."
          align="center"
        />
        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto flex max-w-2xl flex-col gap-3"
        >
          {JOURNEY_TIMELINE.map((milestone, index) => (
            <motion.li key={`${milestone.year}-${milestone.title}`} variants={itemVariants}>
              <div className="flex items-start gap-4">
                {/* Icon node */}
                <div className="relative flex flex-col items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {index < JOURNEY_TIMELINE.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent" aria-hidden="true" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-bold text-primary">
                      {milestone.year}
                    </span>
                    <h4 className="text-sm font-semibold text-text-primary">{milestone.title}</h4>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{milestone.description}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  );
}