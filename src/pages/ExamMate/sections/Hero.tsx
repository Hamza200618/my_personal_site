import { motion } from 'framer-motion';
import { Github, ArrowDown } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { EXAMMATE_HERO } from '@/data/exammate';

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
 * Hero — ExamMate AI product hero.
 */
export function Hero() {
  return (
    <section aria-label="ExamMate AI hero" className="relative overflow-hidden">
      {/* Background glow */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <Container className="relative z-10 py-20 md:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-semibold uppercase tracking-widest text-primary"
          >
            Flagship Product
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-4xl font-bold tracking-tight text-text-primary md:text-6xl"
          >
            {EXAMMATE_HERO.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-3 text-lg font-medium text-text-secondary md:text-xl"
          >
            {EXAMMATE_HERO.subtitle}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-muted md:text-base"
          >
            {EXAMMATE_HERO.description}
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {EXAMMATE_HERO.buttons.map((button) => (
              <motion.a
                key={button.label}
                variants={itemVariants}
                href={button.href}
                {...(button.type === 'github' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {button.type === 'github' ? (
                  <Button variant="secondary" size="lg">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    {button.label}
                  </Button>
                ) : (
                  <Button variant="outline" size="lg">
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    {button.label}
                  </Button>
                )}
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 overflow-hidden rounded-xl border border-border shadow-card"
          >
            <img
              src={EXAMMATE_HERO.image}
              alt="ExamMate AI dashboard screenshot"
              loading="lazy"
              className="w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}