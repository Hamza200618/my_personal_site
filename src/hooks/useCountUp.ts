import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { useInView } from 'framer-motion';

/**
 * useCountUp — animates a number from 0 to the target value
 * when the element enters the viewport. Runs only once.
 */
export function useCountUp(target: number, duration = 1600): { ref: RefObject<HTMLSpanElement | null>; value: number } {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic for a natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return { ref, value };
}