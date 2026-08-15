import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Certification } from '@/types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

/**
 * CertificateModal — accessible modal for viewing certificate details.
 */
export function CertificateModal({ certification, onClose }: CertificateModalProps) {
  useEffect(() => {
    if (!certification) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certification, onClose]);

  return (
    <AnimatePresence>
      {certification && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${certification.title} certificate details`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-secondary p-6 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate modal"
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-surface hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="overflow-hidden rounded-xl border border-border">
              <img
                src={certification.image}
                alt={`${certification.title} certificate`}
                className="w-full object-cover"
              />
            </div>

            <div className="mt-5">
              <h3 className="text-lg font-bold text-text-primary">{certification.title}</h3>
              <p className="mt-1 text-sm text-text-secondary">{certification.organization}</p>
              <p className="text-xs text-text-muted">{certification.issuer}</p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {certification.issueDate}
            </div>

            <div className="mt-5">
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                <Award className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                Skills Gained
              </p>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}