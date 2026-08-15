import { motion } from 'framer-motion';
import { FOUNDER_STORY } from '@/constants/about';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

/**
 * FounderStory — professional narrative of the journey into AI and founding NexusAI.
 */
export function FounderStory() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-3xl"
    >
      <motion.h3
        variants={paragraphVariants}
        className="mb-6 text-2xl font-bold tracking-tight text-text-primary md:text-3xl"
      >
        The Journey
      </motion.h3>
      <div className="space-y-5">
        {FOUNDER_STORY.map((paragraph) => (
          <motion.p
            key={paragraph.slice(0, 24)}
            variants={paragraphVariants}
            className="text-base leading-relaxed text-text-secondary md:text-lg"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
}