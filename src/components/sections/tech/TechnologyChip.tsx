import { motion } from 'framer-motion';

interface TechnologyChipProps {
  label: string;
}

/**
 * TechnologyChip — premium badge for a single technology.
 * Animated hover with subtle lift and glow.
 */
export function TechnologyChip({ label }: TechnologyChipProps) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.05 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="inline-flex items-center rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm transition-colors duration-200 hover:border-primary/40 hover:text-text-primary hover:shadow-glow"
    >
      {label}
    </motion.span>
  );
}