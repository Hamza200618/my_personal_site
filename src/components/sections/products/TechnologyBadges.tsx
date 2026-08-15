import { TechnologyChip } from '@/components/sections/tech/TechnologyChip';

interface TechnologyBadgesProps {
  technologies: readonly string[];
}

/**
 * TechnologyBadges — wraps technology chips for product cards.
 * Reuses the existing TechnologyChip component.
 */
export function TechnologyBadges({ technologies }: TechnologyBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <TechnologyChip key={tech} label={tech} />
      ))}
    </div>
  );
}