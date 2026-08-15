import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EXAMMATE_VIDEO } from '@/data/exammate';

/**
 * Video — embedded demo video.
 */
export function Video() {
  return (
    <Section aria-label="Demo video">
      <Container>
        <SectionTitle title={EXAMMATE_VIDEO.title} subtitle={EXAMMATE_VIDEO.subtitle} align="center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border shadow-card"
        >
          <div className="relative aspect-video">
            <video
              src={EXAMMATE_VIDEO.videoSrc}
              poster={EXAMMATE_VIDEO.poster}
              controls
              preload="metadata"
              playsInline
              className="absolute inset-0 h-full w-full bg-black"
              aria-label="ExamMate AI demo video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}