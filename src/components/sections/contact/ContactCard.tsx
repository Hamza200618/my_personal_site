import { motion } from 'framer-motion';
import { ArrowUpRight, Building, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import type { ContactMethod } from '@/types';

const iconMap = {
  mail: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
  'map-pin': MapPin,
  building: Building,
} as const;

interface ContactCardProps {
  method: ContactMethod;
}

/**
 * ContactCard — premium card for a contact method.
 */
export function ContactCard({ method }: ContactCardProps) {
  const Icon = iconMap[method.icon];

  return (
    <motion.a
      href={method.href}
      target={method.href.startsWith('http') ? '_blank' : undefined}
      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
        <h4 className="text-sm font-semibold text-text-primary">{method.label}</h4>
        <p className="mt-1 break-all text-xs text-text-muted">{method.value}</p>
      </div>
    </motion.a>
  );
}