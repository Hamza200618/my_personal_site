import { motion } from 'framer-motion';
import { Brain, ChartBar, Database, FileText, Layout, Lock, Server, Sparkles } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_ARCHITECTURE } from '@/data/exammate';

const iconMap = {
  layout: Layout,
  server: Server,
  lock: Lock,
  brain: Brain,
  database: Database,
  sparkles: Sparkles,
  file: FileText,
  chart: ChartBar,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
 * Architecture — system architecture visualization for ExamMate AI.
 */
export function Architecture() {
  return (
    <Section id="architecture" aria-label="System architecture">
      <Container>
        <SectionTitle title={EXAMMATE_ARCHITECTURE.title} subtitle={EXAMMATE_ARCHITECTURE.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {EXAMMATE_ARCHITECTURE.layers.map((layer) => {
            const Icon = iconMap[layer.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={layer.title}
                variants={itemVariants}
                className="group rounded-xl border border-border bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-text-primary">{layer.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{layer.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}