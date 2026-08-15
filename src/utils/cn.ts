/**
 * cn — combines class names, filtering out falsy values.
 * Lightweight replacement for clsx + tailwind-merge to keep deps minimal.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}