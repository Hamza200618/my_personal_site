import { motion } from 'framer-motion';
import { Brain, Cloud, Code, Cpu, Globe, GraduationCap, Layout, Wrench } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { INTERESTS } from '@/data/profile';
import type { Interest } from '@/types';

const iconMap = {
  cpu: Cpu,
  brain: Brain,
  cloud: Cloud,
  layout: Layout,
  code: Code,
  graduation: GraduationCap,
  wrench: Wrench,
  globe: Globe,
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

/**
 * Interests — professional interests as interactive chips.
 */
export function Interests() {
  return (
    <Section aria-label="Professional interests">
      <Container>
        <SectionTitle
          title="Professional Interests"
          subtitle="Areas I'm passionate about exploring and building in."
          align="center"
        />
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {INTERESTS.map((interest: Interest) => {
            const Icon = iconMap[interest.icon];
            return (
              <motion.li key={interest.label} variants={itemVariants}>
                <span className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-text-secondary backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-text-primary hover:shadow-glow">
                  <Icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  {interest.label}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}