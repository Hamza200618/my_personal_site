import { motion } from 'framer-motion';
import { Book, Bot, Brain, ChartBar, Check, FileText, Lock, ScanSearch, Search, Sparkles, TrendingUp, Upload } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_FEATURES } from '@/data/exammate';

const iconMap = {
  bot: Bot,
  sparkles: Sparkles,
  brain: Brain,
  file: FileText,
  chart: ChartBar,
  upload: Upload,
  search: Search,
  scan: ScanSearch,
  check: Check,
  book: Book,
  lock: Lock,
  trending: TrendingUp,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

/**
 * Features — feature grid showcasing ExamMate AI capabilities.
 */
export function Features() {
  return (
    <Section aria-label="Key features">
      <Container>
        <SectionTitle title={EXAMMATE_FEATURES.title} subtitle={EXAMMATE_FEATURES.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {EXAMMATE_FEATURES.features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group rounded-xl border border-border bg-white/[0.03] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-text-primary">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}