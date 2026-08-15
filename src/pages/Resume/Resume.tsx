import { PagePlaceholder } from '@/components/common/PagePlaceholder';

/**
 * Resume — resume page.
 * Phase 1: elegant title only. Resume content arrives in later phases.
 */
export function Resume() {
  return (
    <PagePlaceholder
      title="Resume"
      description="Experience, skills, and professional journey."
      path="/resume"
    />
  );
}