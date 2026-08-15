import { motion } from 'framer-motion';
import { Award, Bot, Globe, Rocket, Trophy } from 'lucide-react';
import type { Achievement } from '@/types';

const iconMap = {
  trophy: Trophy,
  rocket: Rocket,
  bot: Bot,
  award: Award,
  globe: Globe,
} as const;

interface AchievementCardProps {
  achievement: Achievement;
}

/**
 * AchievementCard — premium card for a professional achievement.
 */
export function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = iconMap[achievement.icon];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h4 className="mt-4 text-base font-semibold text-text-primary">{achievement.title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">{achievement.description}</p>
    </motion.article>
  );
}