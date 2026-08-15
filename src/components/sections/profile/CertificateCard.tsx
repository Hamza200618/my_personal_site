import { motion } from 'framer-motion';
import { Award, Eye } from 'lucide-react';
import type { Certification } from '@/types';

interface CertificateCardProps {
  certification: Certification;
  onView: (certification: Certification) => void;
}

/**
 * CertificateCard — premium card for a certification with preview modal trigger.
 */
export function CertificateCard({ certification, onView }: CertificateCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white/[0.03] backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-white/[0.06] hover:shadow-glow"
    >
      {/* Certificate preview */}
      <button
        type="button"
        onClick={() => onView(certification)}
        aria-label={`View ${certification.title} certificate`}
        className="relative aspect-[4/3] overflow-hidden border-b border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <img
          src={certification.image}
          alt={`${certification.title} certificate`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            Preview
          </span>
        </span>
      </button>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Award className="h-4 w-4" aria-hidden="true" />
        </span>
        <h4 className="text-sm font-semibold text-text-primary">{certification.title}</h4>
        <p className="text-xs text-text-muted">{certification.organization}</p>
        <p className="text-[11px] text-text-muted">{certification.issuer}</p>
        <p className="mt-auto pt-2 text-[11px] font-medium uppercase tracking-wider text-primary">
          {certification.issueDate}
        </p>
      </div>
    </motion.article>
  );
}