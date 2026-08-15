import { motion } from 'framer-motion';

/** Predefined node positions for the abstract neural graph. */
const NODES = [
  { x: 120, y: 60 },
  { x: 40, y: 140 },
  { x: 200, y: 130 },
  { x: 80, y: 240 },
  { x: 240, y: 260 },
  { x: 160, y: 340 },
];

/** Connections between node indexes. */
const EDGES: Array<[number, number]> = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 3],
  [2, 4],
  [3, 5],
  [4, 5],
];

interface NodePoint {
  x: number;
  y: number;
}

/** Draw a smooth bezier edge between two nodes. */
function buildEdgePath(from: NodePoint, to: NodePoint): string {
  const midX = (from.x + to.x) / 2;
  return `M ${from.x} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x} ${to.y}`;
}

/**
 * HeroIllustration — abstract AI neural-network visualization.
 * A minimal floating geometric system: nodes, connecting edges,
 * a pulsing core, and orbiting rings. Pure SVG + Framer Motion.
 * Lazy-friendly: rendered only when mounted.
 */
export function HeroIllustration() {
  return (
    <div
      role="img"
      aria-label="Abstract AI neural network visualization"
      className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
    >
      {/* Glow behind the illustration */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/25 to-accent/25 blur-3xl" />

      <motion.svg
        viewBox="0 0 280 400"
        className="relative h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="node-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Pulsing core */}
        <motion.circle
          cx="140"
          cy="200"
          r="46"
          fill="url(#core-glow)"
          animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Orbiting rings */}
        <motion.ellipse
          cx="140"
          cy="200"
          rx="130"
          ry="48"
          fill="none"
          stroke="rgba(96,165,250,0.18)"
          strokeWidth="1"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '140px 200px' }}
        />
        <motion.ellipse
          cx="140"
          cy="200"
          rx="96"
          ry="36"
          fill="none"
          stroke="rgba(124,58,237,0.18)"
          strokeWidth="1"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '140px 200px' }}
        />

        {/* Edges */}
        {EDGES.map(([from, to], index) => (
          <motion.path
            key={`edge-${index}`}
            d={buildEdgePath(NODES[from], NODES[to])}
            fill="none"
            stroke="url(#node-gradient)"
            strokeWidth="1"
            strokeOpacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3 + index * 0.12, ease: 'easeOut' }}
          />
        ))}

        {/* Nodes */}
        {NODES.map((node, index) => (
          <motion.g
            key={`node-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
          >
            <circle cx={node.x} cy={node.y} r="6" fill="#0F172A" stroke="url(#node-gradient)" strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r="2" fill="#60A5FA" />
          </motion.g>
        ))}

        {/* Floating core orb */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <circle cx="140" cy="200" r="18" fill="url(#node-gradient)" />
          <circle cx="140" cy="200" r="18" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <circle cx="140" cy="200" r="6" fill="rgba(255,255,255,0.85)" />
        </motion.g>
      </motion.svg>
    </div>
  );
}