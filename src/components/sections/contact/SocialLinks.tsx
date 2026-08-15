import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe2, Linkedin, Mail } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { Section } from '@/components/layout/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { PROFESSIONAL_LINKS } from '@/data/contact';
import type { ProfessionalLink } from '@/types';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  globe: Globe2,
} as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

interface SocialLinkCardProps {
  link: ProfessionalLink;
}

function SocialLinkCard({ link }: SocialLinkCardProps) {
  const Icon = iconMap[link.icon];

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex h-full flex-col gap-3 rounded-xl border border-border bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <ArrowUpRight className="h-4 w-4 text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
      </div>
      <div>
        <h4 className="text-sm font-semibold text-text-primary">{link.label}</h4>
        <p className="mt-1 text-xs leading-relaxed text-text-muted">{link.description}</p>
      </div>
      <span className="mt-auto text-xs font-medium text-primary">Visit →</span>
    </motion.a>
  );
}

/**
 * SocialLinks — professional social and networking links.
 */
export function SocialLinks() {
  return (
    <Section aria-label="Social and professional links">
      <Container>
        <SectionTitle
          title="Connect With Me"
          subtitle="Explore my professional network and online presence."
          align="center"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {PROFESSIONAL_LINKS.map((link) => (
            <motion.div key={link.label} variants={itemVariants}>
              <SocialLinkCard link={link} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}