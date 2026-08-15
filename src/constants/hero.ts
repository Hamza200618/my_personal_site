import type { TrustIndicator } from '@/types';

/** Hero headline — split into lines for line-by-line animation. */
export const HERO_HEADLINE = [
  'Building AI-Powered Software',
  'That Solves Real Problems',
] as const;

/** Subtitle roles displayed under the headline. */
export const HERO_ROLES = [
  'AI & Full-Stack Developer',
  'Co-Founder @ NexusAI',
  'Cloud Computing Student',
] as const;

/** Professional introduction — concise, focused on AI & full-stack. */
export const HERO_DESCRIPTION =
  'I design and build intelligent full-stack applications that combine AI, machine learning, and modern cloud infrastructure — turning ambitious ideas into products people actually use.';

/** Trust indicator cards — quick visual proof of expertise. */
export const TRUST_INDICATORS: TrustIndicator[] = [
  {
    label: 'AI Applications',
    description: 'Practical AI systems that solve real problems.',
    icon: 'cpu',
  },
  {
    label: 'Machine Learning',
    description: 'Models trained and deployed for production.',
    icon: 'brain',
  },
  {
    label: 'LLM Integration',
    description: 'Seamlessly wiring large language models into products.',
    icon: 'sparkles',
  },
  {
    label: 'Full Stack Development',
    description: 'End-to-end apps from database to interface.',
    icon: 'code',
  },
  {
    label: 'Problem Solving',
    description: 'Breaking hard problems into elegant solutions.',
    icon: 'target',
  },
] as const;