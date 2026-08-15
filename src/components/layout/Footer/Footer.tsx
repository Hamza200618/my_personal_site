import { Github, Linkedin, Mail } from 'lucide-react';
import { BRAND, SOCIAL_LINKS } from '@/constants';
import { Divider } from '@/components/common/Divider';
import type { SocialLink } from '@/types';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
} as const;

/**
 * Footer — minimal professional footer with branding and social links.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container-page py-10">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-xs font-bold text-white">
              {BRAND.name}
            </span>
            <div className="text-sm">
              <p className="font-semibold text-text-primary">
                {BRAND.fullName}
              </p>
              <p className="text-text-muted">
                {BRAND.role} of {BRAND.company}
              </p>
            </div>
          </div>

          {/* Social links */}
          <ul className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social: SocialLink) => {
              const Icon = iconMap[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.icon === 'email' ? undefined : '_blank'}
                    rel={social.icon === 'email' ? undefined : 'noopener noreferrer'}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <Divider className="my-6" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-text-muted md:flex-row">
          <p>
            © {year} {BRAND.fullName}. All rights reserved.
          </p>
          <p>
            Built with <span className="text-primary">NexusAI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}