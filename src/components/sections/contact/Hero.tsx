import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { CONTACT_HERO } from '@/data/contact';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
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
 * ContactHero — hero banner for the contact section.
 */
export function Hero() {
  return (
    <section aria-label="Contact hero" className="relative overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <Container className="relative z-10 py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tight text-text-primary md:text-5xl"
          >
            {CONTACT_HERO.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base"
          >
            {CONTACT_HERO.subtitle}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}