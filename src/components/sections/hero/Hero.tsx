import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { HeroIllustration } from './HeroIllustration';
import { ScrollIndicator } from './ScrollIndicator';

/**
 * Hero — the landing section of the home page.
 * Desktop: content left, illustration right.
 * Tablet/Mobile: stacked vertically, centered.
 * Includes animated background and a scroll indicator at the bottom.
 */
export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative z-10 flex flex-1 items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          {/* Left — content */}
          <HeroContent />

          {/* Right — illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator pinned to the bottom */}
      <div className="relative z-10 flex justify-center pb-8">
        <ScrollIndicator />
      </div>
    </section>
  );
}