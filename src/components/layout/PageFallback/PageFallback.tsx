import { Loader } from '@/components/layout/Loader/Loader';

/**
 * PageFallback — Suspense fallback shown while lazy pages load.
 */
export function PageFallback() {
  return <Loader />;
}