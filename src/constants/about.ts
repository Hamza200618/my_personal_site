import type { CoreValue, FocusArea, Statistic, TimelineItem } from '@/types';

/** About section header. */
export const ABOUT_HEADER = {
  title: 'About Me',
  subtitle: 'Building AI-powered software through curiosity, engineering, and continuous learning.',
} as const;

/** Founder story — professional narrative, not a resume repeat. */
export const FOUNDER_STORY = [
  'My journey into software began with a simple question: how do the apps I use every day actually work? That curiosity led me to programming, where I discovered that code is more than syntax — it is a way to think, to solve, and to create. What started as a fascination quickly became a discipline.',
  'As I moved deeper into development, I found myself drawn to the intersection of artificial intelligence and full-stack engineering. I wanted to build systems that not only function but think — applications that learn, adapt, and deliver real value. This passion shaped my education in Cloud Computing and my hands-on work building AI-powered products.',
  'That drive is what led me to co-found NexusAI. I believe the most meaningful technology is built by people who understand both the engineering and the human problem behind it. NexusAI is my way of turning that belief into products — intelligent software designed to solve real problems, not just demonstrate what is possible.',
  'Today, I build with purpose: AI applications, machine learning systems, and full-stack platforms that are practical, scalable, and genuinely useful. Every project is an opportunity to learn something new, push the boundaries of what I can build, and create software that makes a difference.',
] as const;

/** Professional summary card data. */
export const PROFESSIONAL_SUMMARY = {
  role: 'AI & Full Stack Developer',
  position: 'Co-Founder @ NexusAI',
  education: 'BS Cloud Computing',
  diploma: 'ACCPAI – Aptech',
  languages: ['English', 'Urdu'],
  location: 'Karachi, Pakistan',
} as const;

/** Animated statistics. */
export const STATISTICS: Statistic[] = [
  { value: 15, suffix: '+', label: 'AI Projects', icon: 'rocket' },
  { value: 20, suffix: '+', label: 'Web Applications', icon: 'globe' },
  { value: 12, suffix: '+', label: 'Technologies', icon: 'layers' },
  { value: 8, suffix: '+', label: 'Certificates', icon: 'award' },
  { value: 4, suffix: '+', label: 'Years Learning', icon: 'book' },
  { value: 3, suffix: '+', label: 'Products Built', icon: 'box' },
] as const;

/** Core values. */
export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Problem Solving',
    description: 'Breaking complex challenges into clear, actionable solutions.',
    icon: 'target',
  },
  {
    title: 'Continuous Learning',
    description: 'Every project is a chance to master something new.',
    icon: 'book',
  },
  {
    title: 'Clean Architecture',
    description: 'Code that is readable, maintainable, and built to last.',
    icon: 'layout',
  },
  {
    title: 'Scalable Systems',
    description: 'Designing software that grows with the people using it.',
    icon: 'scale',
  },
  {
    title: 'User Experience',
    description: 'Technology should feel intuitive, not intimidating.',
    icon: 'user',
  },
  {
    title: 'Innovation',
    description: 'Pushing beyond the obvious to build what is next.',
    icon: 'lightbulb',
  },
] as const;

/** Career timeline milestones. */
export const TIMELINE: TimelineItem[] = [
  {
    title: 'Started Programming',
    period: '2021',
    description: 'Wrote my first lines of code and discovered a passion for building software.',
    icon: 'code',
  },
  {
    title: 'Aptech Diploma',
    period: '2022',
    description: 'Completed ACCPAI at Aptech, building a strong foundation in software engineering.',
    icon: 'graduation',
  },
  {
    title: 'University',
    period: '2023',
    description: 'Began BS Cloud Computing, diving into distributed systems and modern infrastructure.',
    icon: 'university',
  },
  {
    title: 'Project Exhibition',
    period: '2023',
    description: 'Showcased innovative projects and earned recognition for technical excellence.',
    icon: 'trophy',
  },
  {
    title: 'ExamMate AI',
    period: '2024',
    description: 'Built an AI-powered exam preparation platform, my first major AI product.',
    icon: 'brain',
  },
  {
    title: 'Co-Founded NexusAI',
    period: '2025',
    description: 'Launched NexusAI to build intelligent products that solve real problems.',
    icon: 'rocket',
  },
] as const;

/** Current focus areas. */
export const FOCUS_AREAS: FocusArea[] = [
  { label: 'Artificial Intelligence', icon: 'cpu' },
  { label: 'Machine Learning', icon: 'brain' },
  { label: 'LLM Integration', icon: 'sparkles' },
  { label: 'OCR', icon: 'scan' },
  { label: 'Full Stack Development', icon: 'code' },
  { label: 'Cloud Computing', icon: 'cloud' },
] as const;

/** Personal philosophy quote. */
export const PHILOSOPHY =
  'I build software the way I learn — one problem at a time, with curiosity as the engine and impact as the destination.';