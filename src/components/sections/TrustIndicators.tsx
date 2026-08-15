import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Sparkles, Target } from 'lucide-react';
import { TRUST_INDICATORS } from '@/constants/hero';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/common/Container';
import type { TrustIndicator } from '@/types';

const iconMap = {
  cpu: Cpu,
  brain: Brain,
  sparkles: Sparkles,
  code: Code,
  target: Target,
  layers: Sparkles,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

/**
 * TrustIndicators — quick visual proof of expertise.
 * Elegant glass cards with icons, labels, and hover lift.
 */
export function TrustIndicators() {
  return (
    <Section aria-label="Expertise" padded className="pb-16 md:pb-24">
      <Container>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {TRUST_INDICATORS.map((indicator: TrustIndicator) => {
            const Icon = iconMap[indicator.icon];
            return (
              <motion.li key={indicator.label} variants={cardVariants}>
                <article className="group flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-white/[0.03] p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">
                      {indicator.label}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">
                      {indicator.description}
                    </p>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </Section>
  );
}