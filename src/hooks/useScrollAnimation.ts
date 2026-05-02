"use client";

import { useEffect, useRef } from "react";
import { useInView, useAnimation, type AnimationControls } from "framer-motion";

interface UseScrollAnimationOptions {
  /** Fraction of element visible before triggering. Default: 0.15 */
  threshold?: number;
  /** Only animate once. Default: true */
  once?: boolean;
}

/**
 * Returns { ref, controls } for Framer Motion scroll-triggered animations.
 * Attach ref to the element, use controls in the `animate` prop.
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {},
): {
  ref: React.RefObject<HTMLDivElement>;
  controls: AnimationControls;
} {
  const { threshold = 0.15, once = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: threshold, once });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [inView, controls, once]);

  return { ref, controls };
}
