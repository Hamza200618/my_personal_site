import { motion } from 'framer-motion';
import { TECHNOLOGY_CATEGORIES } from '@/data/technologies';
import { CategoryCard } from './CategoryCard';

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
 * TechnologyGrid — responsive grid of technology category cards.
 */
export function TechnologyGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {TECHNOLOGY_CATEGORIES.map((category) => (
        <motion.div key={category.title} variants={cardVariants}>
          <CategoryCard category={category} />
        </motion.div>
      ))}
    </motion.div>
  );
}