import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_LESSONS } from '@/data/exammate';

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
 * Lessons — professional reflection on engineering growth.
 */
export function Lessons() {
  return (
    <Section aria-label="Lessons learned">
      <Container>
        <SectionTitle title={EXAMMATE_LESSONS.title} subtitle={EXAMMATE_LESSONS.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {EXAMMATE_LESSONS.lessons.map((lesson) => (
            <motion.div
              key={lesson.title}
              variants={itemVariants}
              className="group rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                <Lightbulb className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-text-primary">{lesson.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{lesson.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}