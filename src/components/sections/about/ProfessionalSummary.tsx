import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Briefcase, Building2, GraduationCap, Award, Languages, MapPin } from 'lucide-react';
import { PROFESSIONAL_SUMMARY } from '@/constants/about';
import { GlassCard } from '@/components/common/GlassCard';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

interface SummaryRowProps {
  icon: ReactNode;
  label: string;
  value: string;
}

function SummaryRow({ icon, label, value }: SummaryRowProps) {
  return (
    <motion.div variants={itemVariants} className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-text-muted">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-text-primary">{value}</p>
      </div>
    </motion.div>
  );
}

/**
 * ProfessionalSummary — glass card with key professional details.
 */
export function ProfessionalSummary() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-2xl"
    >
      <GlassCard className="p-8 md:p-10">
        <motion.div
          variants={itemVariants}
          className="mb-8 flex items-center gap-4"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
            <Briefcase className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xl font-bold text-text-primary md:text-2xl">Professional Summary</h3>
            <p className="text-sm text-text-muted">At a glance</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <SummaryRow
            icon={<Briefcase className="h-4 w-4" aria-hidden="true" />}
            label="Role"
            value={PROFESSIONAL_SUMMARY.role}
          />
          <SummaryRow
            icon={<Building2 className="h-4 w-4" aria-hidden="true" />}
            label="Current Position"
            value={PROFESSIONAL_SUMMARY.position}
          />
          <SummaryRow
            icon={<GraduationCap className="h-4 w-4" aria-hidden="true" />}
            label="Education"
            value={PROFESSIONAL_SUMMARY.education}
          />
          <SummaryRow
            icon={<Award className="h-4 w-4" aria-hidden="true" />}
            label="Diploma"
            value={PROFESSIONAL_SUMMARY.diploma}
          />
          <SummaryRow
            icon={<Languages className="h-4 w-4" aria-hidden="true" />}
            label="Languages"
            value={PROFESSIONAL_SUMMARY.languages.join(' · ')}
          />
          <SummaryRow
            icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
            label="Location"
            value={PROFESSIONAL_SUMMARY.location}
          />
        </div>
      </GlassCard>
    </motion.div>
  );
}