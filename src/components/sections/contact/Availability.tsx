import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Globe2, Workflow } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { AVAILABILITY } from '@/data/contact';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

/**
 * Availability — availability status card.
 */
export function Availability() {
  return (
    <Section aria-label="Availability">
      <Container>
        <SectionTitle
          title="Availability"
          subtitle="Current availability and preferred working arrangements."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-2xl rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-primary/5 p-8 backdrop-blur-sm"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            <h4 className="text-lg font-semibold text-text-primary">{AVAILABILITY.status}</h4>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-white/[0.02] p-4">
              <Workflow className="h-4 w-4 text-primary" aria-hidden="true" />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Preferred Work</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {AVAILABILITY.preferredWork.map((work) => (
                  <span key={work} className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    {work}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-border bg-white/[0.02] p-4">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Response Time</p>
              <p className="mt-1.5 text-sm font-medium text-text-secondary">{AVAILABILITY.responseTime}</p>
            </div>

            <div className="rounded-lg border border-border bg-white/[0.02] p-4">
              <Globe2 className="h-4 w-4 text-primary" aria-hidden="true" />
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-text-muted">Timezone</p>
              <p className="mt-1.5 text-sm font-medium text-text-secondary">{AVAILABILITY.timezone}</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex items-center gap-2 text-xs text-text-muted">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            Currently accepting new projects and collaborations.
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}