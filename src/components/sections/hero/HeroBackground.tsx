import { motion } from 'framer-motion';

/**
 * HeroBackground — deep dark gradient with subtle animated elements.
 * Composed of:
 *  - Base gradient
 *  - Two soft glowing blur circles (slow drift)
 *  - A faint animated grid pattern
 *  - A subtle radial vignette
 * Pure CSS + Framer Motion only — no heavy canvas or particles.
 */
export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0b1220] to-background" />

      {/* Soft glow — top-left (blue) */}
      <motion.div
        className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/20 blur-[120px]"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Soft glow — bottom-right (accent) */}
      <motion.div
        className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[130px]"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
        }}
        animate={{ backgroundPosition: ['0px 0px', '0px 56px'] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {/* Radial vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(15,23,42,0.6)_100%)]" />
    </div>
  );
}