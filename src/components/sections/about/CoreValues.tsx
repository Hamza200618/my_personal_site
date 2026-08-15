import { motion } from 'framer-motion';
import { Book, Layout, Lightbulb, Scale, Target, User } from 'lucide-react';
import { CORE_VALUES } from '@/constants/about';
import type { CoreValue } from '@/types';

const iconMap = {
  target: Target,
  book: Book,
  layout: Layout,
  scale: Scale,
  user: User,
  lightbulb: Lightbulb,
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

/**
 * CoreValues — premium cards describing engineering principles.
 */
export function CoreValues() {
  return (
    <div>
      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-8 text-center text-2xl font-bold tracking-tight text-text-primary md:text-3xl"
      >
        Core Values
      </motion.h3>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {CORE_VALUES.map((value: CoreValue) => {
          const Icon = iconMap[value.icon];
          return (
            <motion.li key={value.title} variants={cardVariants}>
              <article className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="text-base font-semibold text-text-primary">{value.title}</h4>
                <p className="text-sm leading-relaxed text-text-muted">{value.description}</p>
              </article>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}