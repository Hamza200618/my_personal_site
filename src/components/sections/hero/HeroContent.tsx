import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { HERO_DESCRIPTION, HERO_HEADLINE, HERO_ROLES } from '@/constants/hero';
import { SOCIAL_LINKS } from '@/constants';
import { cn } from '@/utils/cn';
import { HeroButtons } from './HeroButtons';

const headlineContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const headlineLine = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const;

/**
 * HeroContent — left column of the hero.
 * Headline animates line-by-line; elements cascade with stagger.
 */
export function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
      {/* Headline — line by line reveal */}
      <motion.h1
        variants={headlineContainer}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
      >
        {HERO_HEADLINE.map((line, index) => (
          <motion.span
            key={line}
            variants={headlineLine}
            className={cn('block', index === 1 && 'text-gradient')}
          >
            {line}
          </motion.span>
        ))}
      </motion.h1>

      {/* Role subtitle */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.55 }}
        className="text-base font-medium text-text-secondary md:text-lg"
      >
        {HERO_ROLES.map((role, index) => (
          <span key={role}>
            {index > 0 && <span className="mx-2 text-text-muted">•</span>}
            {role}
          </span>
        ))}
      </motion.p>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.7 }}
        className="max-w-xl text-sm leading-relaxed text-text-muted md:text-base"
      >
        {HERO_DESCRIPTION}
      </motion.p>

      {/* CTA buttons */}
      <HeroButtons />

      {/* Social links */}
      <motion.ul
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.85 }}
        className="mt-2 flex items-center gap-3"
        aria-label="Social links"
      >
        {SOCIAL_LINKS.map((social) => {
          const Icon = socialIconMap[social.icon];
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.icon === 'email' ? undefined : '_blank'}
                rel={social.icon === 'email' ? undefined : 'noopener noreferrer'}
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white/5 text-text-secondary backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-text-primary hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </motion.ul>
    </div>
  );
}