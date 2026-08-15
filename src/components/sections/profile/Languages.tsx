import { motion } from 'framer-motion';
import { Languages as LanguagesIcon } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { LANGUAGES } from '@/data/profile';

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
 * Languages — language proficiency with progress indicators.
 */
export function Languages() {
  return (
    <Section aria-label="Languages">
      <Container>
        <SectionTitle
          title="Languages"
          subtitle="Languages I communicate and work in."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto flex max-w-2xl flex-col gap-4"
        >
          {LANGUAGES.map((language) => (
            <motion.div
              key={language.name}
              variants={itemVariants}
              className="rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <LanguagesIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">{language.name}</h4>
                    <p className="text-xs text-text-muted">{language.level}</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">{language.percentage}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${language.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}