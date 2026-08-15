import { Link } from 'react-router-dom';
import { BRAND } from '@/constants';

/**
 * Logo — brand mark linking to the home page.
 */
export function Logo() {
  return (
    <Link
      to="/"
      aria-label={`${BRAND.name} — ${BRAND.tagline}`}
      className="inline-flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
        {BRAND.name}
      </span>
      <span className="hidden text-lg font-bold tracking-tight text-text-primary sm:inline">
        {BRAND.name}
        <span className="text-primary">.</span>
      </span>
    </Link>
  );
}