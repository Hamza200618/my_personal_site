import type { NavItem, SocialLink } from '@/types';

/** Personal branding — single source of truth. */
export const BRAND = {
  name: 'SK',
  fullName: 'SK',
  tagline: 'AI & Full-Stack Developer',
  company: 'NexusAI',
  role: 'Co-Founder',
} as const;

/** Navigation items — shared between desktop navbar and mobile drawer. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
];

/** Social links rendered in the footer. */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:hello@nexusai.dev',
    icon: 'email',
  },
];

/** Site-wide SEO defaults. */
export const SEO_DEFAULTS = {
  title: 'SK',
  titleTemplate: '%s | SK — AI & Full-Stack Developer',
  description: 'AI & Full-Stack Developer and Co-Founder of NexusAI. Building intelligent, scalable digital experiences.',
  siteUrl: 'https://nexusai.dev',
  locale: 'en_US',
  type: 'website',
  author: 'SK',
  /** OpenGraph placeholders — replace when real assets exist. */
  og: {
    defaultImage: '/og/og-default.jpg',
  },
  /** Twitter placeholders — replace when real assets exist. */
  twitter: {
    handle: '@nexusai',
    cardType: 'summary_large_image',
  },
} as const;

/** Loader duration before revealing the app (ms). */
export const LOADER_DURATION = 1200;

/** Scroll threshold for showing the back-to-top button (px). */
export const BACK_TO_TOP_THRESHOLD = 480;