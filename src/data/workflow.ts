import type { WorkflowStep } from '@/types';

/** Development process — how I build software. */
export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    title: 'Research',
    description: 'Understanding the problem, the users, and the domain before writing any code.',
    icon: 'search',
  },
  {
    title: 'Architecture',
    description: 'Designing a clean, scalable system structure that will stand the test of time.',
    icon: 'layout',
  },
  {
    title: 'Design',
    description: 'Crafting interfaces and experiences that feel intuitive and premium.',
    icon: 'pen',
  },
  {
    title: 'Development',
    description: 'Building the product with clean code, modern tools, and careful attention to detail.',
    icon: 'code',
  },
  {
    title: 'Testing',
    description: 'Verifying everything works — edge cases, performance, and real-world usage.',
    icon: 'check',
  },
  {
    title: 'Deployment',
    description: 'Shipping to production with reliable infrastructure and monitoring.',
    icon: 'rocket',
  },
  {
    title: 'Continuous Improvement',
    description: 'Iterating based on feedback, data, and new opportunities to make it better.',
    icon: 'refresh',
  },
];