import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_GALLERY } from '@/data/exammate';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
 * Gallery — ExamMate AI screenshots in device mockups.
 */
export function Gallery() {
  return (
    <Section aria-label="Gallery">
      <Container>
        <SectionTitle title={EXAMMATE_GALLERY.title} subtitle={EXAMMATE_GALLERY.subtitle} align="center" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {EXAMMATE_GALLERY.images.map((image) => (
            <motion.div
              key={image.alt}
              variants={itemVariants}
              className="group overflow-hidden rounded-xl border border-border bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-primary/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{image.device}</p>
                <p className="mt-1 text-sm text-text-secondary">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}