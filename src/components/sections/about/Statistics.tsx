import { motion } from 'framer-motion';
import { Award, Book, Box, Globe, Layers, Rocket } from 'lucide-react';
import { STATISTICS } from '@/constants/about';
import { useCountUp } from '@/hooks/useCountUp';
import type { Statistic } from '@/types';

const iconMap = {
  rocket: Rocket,
  globe: Globe,
  layers: Layers,
  award: Award,
  book: Book,
  box: Box,
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

interface StatisticCardProps {
  statistic: Statistic;
}

function StatisticCard({ statistic }: StatisticCardProps) {
  const { ref, value } = useCountUp(statistic.value);
  const Icon = iconMap[statistic.icon];

  return (
    <motion.div variants={cardVariants}>
      <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
          <span ref={ref}>{value}</span>
          {statistic.suffix && <span className="text-primary">{statistic.suffix}</span>}
        </p>
        <p className="text-sm font-medium text-text-muted">{statistic.label}</p>
      </div>
    </motion.div>
  );
}

/**
 * Statistics — animated counters that run once when scrolled into view.
 */
export function Statistics() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6"
    >
      {STATISTICS.map((statistic) => (
        <StatisticCard key={statistic.label} statistic={statistic} />
      ))}
    </motion.div>
  );
}