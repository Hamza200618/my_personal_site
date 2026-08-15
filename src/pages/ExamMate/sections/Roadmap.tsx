import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_ROADMAP } from '@/data/exammate';

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
 * Roadmap — future features timeline.
 */
export function Roadmap() {
  return (
    <Section aria-label="Future roadmap" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>
      <Container className="relative z-10">
        <SectionTitle title={EXAMMATE_ROADMAP.title} subtitle={EXAMMATE_ROADMAP.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {EXAMMATE_ROADMAP.items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-accent"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Rocket className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  {item.period}
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-text-primary">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}