import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { PHILOSOPHY } from '@/constants/about';

/**
 * Philosophy — premium quote block with the personal engineering philosophy.
 */
export function Philosophy() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative mx-auto max-w-3xl"
    >
      <div className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-transparent to-accent/10 p-8 text-center backdrop-blur-sm md:p-12">
        <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-glow">
          <Quote className="h-4 w-4" aria-hidden="true" />
        </span>
        <blockquote>
          <p className="text-lg font-medium leading-relaxed text-text-primary md:text-2xl">
            "{PHILOSOPHY}"
          </p>
        </blockquote>
        <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wider text-text-muted">
          — My Philosophy
        </figcaption>
      </div>
    </motion.figure>
  );
}