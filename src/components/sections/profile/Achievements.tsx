import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ACHIEVEMENTS } from '@/data/profile';
import { AchievementCard } from './AchievementCard';

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
 * Achievements — professional achievements grid.
 */
export function Achievements() {
  return (
    <Section aria-label="Achievements">
      <Container>
        <SectionTitle
          title="Achievements"
          subtitle="Milestones that define my professional journey."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div key={achievement.title} variants={itemVariants}>
              <AchievementCard achievement={achievement} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}