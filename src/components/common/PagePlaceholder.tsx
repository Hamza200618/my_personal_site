import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Seo } from '@/components/common/Seo';
import { PageWrapper } from '@/components/layout/PageWrapper';

interface PagePlaceholderProps {
  title: string;
  description?: string;
  path: string;
}

/**
 * PagePlaceholder — elegant title-only page for Phase 1.
 * Real content will replace this in later phases.
 */
export function PagePlaceholder({ title, description, path }: PagePlaceholderProps) {
  return (
    <PageWrapper>
      <Seo title={title} description={description} path={path} />
      <Container padded className="flex min-h-[70vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary md:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </Container>
    </PageWrapper>
  );
}