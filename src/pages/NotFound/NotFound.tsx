import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Seo } from '@/components/common/Seo';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { Button } from '@/components/common/Button';

/**
 * NotFound — 404 page with a clean, elegant design.
 */
export function NotFound() {
  return (
    <PageWrapper>
      <Seo title="404" description="Page not found." path="/404" />
      <Container padded className="flex min-h-[70vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-gradient text-7xl font-black tracking-tight md:text-9xl">404</p>
          <h1 className="mt-6 text-2xl font-bold text-text-primary md:text-3xl">
            Page not found
          </h1>
          <p className="mx-auto mt-3 max-w-md text-text-secondary">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Link to="/">
              <Button variant="primary" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </PageWrapper>
  );
}