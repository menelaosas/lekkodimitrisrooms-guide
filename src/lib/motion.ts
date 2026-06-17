import type { Variants } from "framer-motion";

// ─── Shared spring transition ─────────────────────────────────────────────────

export const springTransition = {
  type: "spring",
  stiffness: 60,
  damping: 20,
  mass: 0.8,
} as const;

export const easeTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
} as const;

// ─── Scroll reveal variants ───────────────────────────────────────────────────

/** Fade up from below default for most sections */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: easeTransition },
};

/** Slide in from the left */
export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: easeTransition },
};

/** Slide in from the right */
export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: easeTransition },
};

/** Stagger children with fade up */
export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Child item for stagger containers */
export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/** Subtle scale + fade for cards */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Section direction helper ─────────────────────────────────────────────────
// Alternates sections: left / right / left / right...

export type SlideDirection = "left" | "right" | "up";

export function getSectionVariant(direction: SlideDirection): Variants {
  switch (direction) {
    case "left":
      return slideLeftVariants;
    case "right":
      return slideRightVariants;
    default:
      return fadeUpVariants;
  }
}
