"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

// Deterministic scatter — not `Math.random()` — so server and client
// markup always match exactly. Reuses the `.hero-particle` class (and its
// underlying `particle-float` keyframe) already defined in globals.css —
// the mechanism is generic, not actually scoped to the Hero, so this adds
// no new CSS.
const PARTICLE_COUNT = 10;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left: `${(i * 41 + 3) % 100}%`,
  top: `${(i * 29 + 13) % 100}%`,
  size: 2 + (i % 3),
  duration: 22 + (i % 5) * 3,
  delay: (i % 6) * 1.2,
}));

const PEAK_OPACITY = 0.05;

/**
 * A handful of very faint, slowly drifting gold particles for the site's
 * premium white content panels (`obsidian` background) — ambience only,
 * fixed at 5% peak opacity. Skipped under `prefers-reduced-motion`.
 */
export function SectionParticles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {PARTICLES.map((particle, i) => (
        <span
          key={i}
          className="hero-particle bg-gold absolute rounded-full"
          style={
            {
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              "--particle-peak-opacity": PEAK_OPACITY,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
