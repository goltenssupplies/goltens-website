"use client";

import type { CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";

// Deterministic scatter — not `Math.random()` — so server and client
// markup always match exactly. "Random-looking" comes from a modulus
// multiplier with no shared factor with 100, not true randomness. Same
// technique as `WhyChooseUsBackground`, tuned to far fewer, dimmer
// particles here since this layers on top of a photo, not a flat ground.
const PARTICLE_COUNT = 12;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left: `${(i * 37 + 5) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 2 + (i % 3),
  duration: 20 + (i % 5) * 3,
  delay: (i % 6) * 1.1,
  peakOpacity: 0.18 + (i % 3) * 0.05,
}));

// A small, abstract node-and-line motif suggesting a global supply
// network — hand-authored coordinates, not a traced map.
const NODES = [
  { x: 120, y: 80 },
  { x: 340, y: 150 },
  { x: 260, y: 300 },
  { x: 520, y: 220 },
  { x: 620, y: 370 },
  { x: 460, y: 420 },
];
const CONNECTIONS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [3, 5],
];

/**
 * Extremely subtle "global supply network" ambience layered over the
 * Hero's own photo: a handful of slowly drifting/fading gold particles
 * plus a faint dashed node-and-line network, both reusing the exact
 * `particle-float`/`connection-dash` keyframes `WhyChooseUsBackground`
 * already defines (under separate `hero-*` classes so nothing there needs
 * to change). No gradient, vignette, or grain here — the Hero already has
 * its own overlay layers; this is only the particles/network on top.
 * Skipped entirely under `prefers-reduced-motion`.
 */
export function HeroParticles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 800 480"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <g className="text-canvas/[0.12]" stroke="currentColor">
          {CONNECTIONS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              strokeWidth="1"
              strokeDasharray="5 9"
              className="hero-connection-line"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </g>
        <g className="text-accent/60" fill="currentColor">
          {NODES.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r="2" opacity="0.4" />
          ))}
        </g>
      </svg>

      {PARTICLES.map((particle, i) => (
        <span
          key={i}
          className="hero-particle bg-accent absolute rounded-full"
          style={
            {
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              "--particle-peak-opacity": particle.peakOpacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
