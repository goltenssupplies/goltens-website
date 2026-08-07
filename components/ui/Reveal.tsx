"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds, e.g. index * 0.08 for a card grid. */
  delay?: number;
  /** Distance the content travels in, in pixels. */
  distance?: number;
  /** Animation duration in seconds. Defaults to 0.6. */
  duration?: number;
}

/**
 * Fades and slides content in the moment it scrolls into view. Animates
 * once per element (`viewport.once`) and is a no-op — plain children in a
 * div — under `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  duration = 0.6,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
