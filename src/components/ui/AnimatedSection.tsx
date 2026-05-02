"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import type { SlideDirection } from "@/lib/motion";
import { getSectionVariant } from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: SlideDirection;
  className?: string;
  delay?: number;
  /** Override threshold for triggering (0–1) */
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps any content in a Framer Motion scroll-triggered animation.
 * Direction alternates per section: left → right → left → ...
 */
export function AnimatedSection({
  children,
  direction = "up",
  className,
  delay = 0,
  threshold = 0.15,
  as = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  const variants = getSectionVariant(direction);

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
