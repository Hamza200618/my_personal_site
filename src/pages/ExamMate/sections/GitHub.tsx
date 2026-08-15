import { motion } from 'framer-motion';
import { CheckCircle2, Github } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Button } from '@/components/common/Button';
import { EXAMMATE_GITHUB } from '@/data/exammate';

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
 * GitHub — open source repository showcase.
 */
export function GitHub() {
  return (
    <Section aria-label="Open source">
      <Container>
        <SectionTitle title={EXAMMATE_GITHUB.title} subtitle={EXAMMATE_GITHUB.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-2xl rounded-xl border border-border bg-white/[0.03] p-8 backdrop-blur-sm"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Github className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">{EXAMMATE_GITHUB.repoName}</h3>
              <p className="text-sm text-text-muted">Public repository</p>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-4 text-sm leading-relaxed text-text-secondary">
            {EXAMMATE_GITHUB.description}
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-6 space-y-2">
            {EXAMMATE_GITHUB.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-8">
            <a href={EXAMMATE_GITHUB.repoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg" className="group">
                <Github className="h-4 w-4" aria-hidden="true" />
                View on GitHub
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}