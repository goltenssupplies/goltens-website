"use client";

import { motion, useReducedMotion } from "framer-motion";

const LOOP_SECONDS = 2;

/**
 * Minimal gold-outline scroll cue, bottom-center, sitting a little clear of
 * the Hero's very bottom edge rather than flush against it. A classic still
 * pill outline with one dot looping slowly down and fading — nothing else
 * moves. Skipped under `prefers-reduced-motion`.
 */
export function HeroScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-24 flex justify-center sm:bottom-28"
    >
      <div className="border-accent/50 flex h-11 w-7 items-start justify-center rounded-full border-2 p-2">
        <motion.span
          className="bg-accent block size-1.5 rounded-full"
          initial={{ opacity: 0, y: 0 }}
          animate={
            prefersReducedMotion
              ? { opacity: 0.6 }
              : { opacity: [0, 1, 0], y: [0, 14, 14] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: LOOP_SECONDS,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        />
      </div>
    </div>
  );
}
