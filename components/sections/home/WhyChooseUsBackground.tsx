"use client";

import type { CSSProperties, MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

// Deterministic scatter — not `Math.random()` — so server and client markup
// always match exactly (a `Math.random()` seed here would be a genuine
// hydration-mismatch bug, not just a style nit). "Random-looking" comes
// from two modulus multipliers with no shared factor with 100 or each
// other, not true randomness.
const PARTICLE_COUNT = 18;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left: `${(i * 53) % 100}%`,
  top: `${(i * 31 + 7) % 100}%`,
  size: 2 + (i % 4),
  duration: 16 + (i % 7) * 2,
  delay: (i % 6) * 0.9,
  peakOpacity: 0.25 + (i % 4) * 0.06,
}));

// A small, entirely abstract node-and-line motif — hand-authored
// coordinates, not a map or any traced illustration.
const NODES = [
  { x: 90, y: 90 },
  { x: 260, y: 190 },
  { x: 150, y: 330 },
  { x: 420, y: 260 },
  { x: 340, y: 430 },
  { x: 560, y: 150 },
];
const CONNECTIONS: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 5],
  [3, 4],
];

// How far each depth layer travels at full mouse tilt (px) — the network
// barely moves (background), particles move the most (foreground), giving
// the parallax an actual sense of depth rather than everything sliding as
// one flat plane.
const PARALLAX_RANGE = { glow: 12, network: 8, particles: 18 };

const SPRING = { stiffness: 60, damping: 20, mass: 0.5 };

const GRAIN_FILTER_ID = "why-choose-grain";

/**
 * Fully generated "Why GOLTENS" background — CSS, SVG, and Framer Motion
 * only. No photo, video, WebGL, Three.js, or Canvas anywhere in this file.
 * Layers, back to front: a deep graphite-to-charcoal diagonal gradient; a
 * cinematic radial glow and a thin rotated "volumetric" light beam (gold);
 * a soft, very subtle blue-gray glow on the opposite corner; a radial
 * vignette; a faint abstract node-and-line network; a field of floating
 * gold particles; and a fine film-grain texture on top, generated at
 * runtime by an SVG `feTurbulence` filter (not a downloaded noise image).
 * Every effect is intentionally kept low-opacity — this is ambience behind
 * the section's text, not a focal point competing with it. Mouse position
 * (tracked via `useMotionValue`/`useSpring`, smoothed rather than following
 * the cursor directly) offsets the glow/network/particle layers by
 * different amounts for parallax depth. Every loop is skipped under
 * `prefers-reduced-motion` — the mousemove handler bails out immediately,
 * so the springs simply never move away from center, and the CSS loops are
 * disabled by the same global reduced-motion rule every other animation on
 * this site uses.
 */
export function WhyChooseUsBackground() {
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, SPRING);
  const springY = useSpring(rawY, SPRING);

  const networkX = useTransform(springX, (v) => v * PARALLAX_RANGE.network);
  const networkY = useTransform(springY, (v) => v * PARALLAX_RANGE.network);
  const glowX = useTransform(springX, (v) => v * PARALLAX_RANGE.glow);
  const glowY = useTransform(springY, (v) => v * PARALLAX_RANGE.glow);
  const particlesX = useTransform(springX, (v) => v * PARALLAX_RANGE.particles);
  const particlesY = useTransform(springY, (v) => v * PARALLAX_RANGE.particles);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left) / rect.width - 0.5);
    rawY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Deep graphite-black → charcoal, soft diagonal transition. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0b0d 0%, #12141a 55%, #1a1d24 100%)",
        }}
      />

      {/* Cinematic radial light, centred behind the text column. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 32% 45%, rgba(166,128,61,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Thin rotated "volumetric" gold light beam, slowly breathing. */}
      <motion.div
        className="absolute -inset-y-24 left-[-15%] w-[65%] origin-center"
        style={{
          background:
            "linear-gradient(100deg, transparent 0%, rgba(166,128,61,0.07) 45%, rgba(166,128,61,0.11) 55%, transparent 100%)",
          rotate: -12,
          x: glowX,
          y: glowY,
        }}
        animate={prefersReducedMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 18, ease: "easeInOut", repeat: Infinity }
        }
      />

      {/* Gold accent glow. */}
      <motion.div
        className="bg-accent/15 absolute top-[10%] left-[8%] size-[24rem] rounded-full blur-3xl"
        style={{ x: glowX, y: glowY }}
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.25, 0.45, 0.25], scale: [1, 1.06, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 20, ease: "easeInOut", repeat: Infinity }
        }
      />

      {/* Very subtle blue-gray glow, opposite corner — a cool counterpoint
          to the gold, kept much lower-opacity so it reads as atmosphere
          rather than a second accent colour. */}
      <motion.div
        className="absolute right-[10%] bottom-[10%] size-[26rem] rounded-full blur-3xl"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(111,143,179,0.12) 0%, transparent 70%)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 24, ease: "easeInOut", repeat: Infinity }
        }
      />

      {/* Soft vignette — darkens the corners slightly so the centre (where
          the text sits) reads as the brightest, most in-focus area. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 45%, transparent 55%, rgba(0,0,0,0.38) 100%)",
        }}
      />

      {/* Faint abstract node-and-line network. */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 800 480"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
        style={{ x: networkX, y: networkY }}
      >
        <g className="text-accent/15" stroke="currentColor">
          {CONNECTIONS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              strokeWidth="1"
              strokeDasharray="6 10"
              className="why-choose-connection-line"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}
        </g>
        <g className="text-accent animate-glow-pulse" fill="currentColor">
          {NODES.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r="2.5" opacity="0.35" />
          ))}
        </g>
      </motion.svg>

      {/* Floating gold particles. */}
      <motion.div
        className="absolute inset-0"
        style={{ x: particlesX, y: particlesY }}
      >
        {PARTICLES.map((particle, i) => (
          <span
            key={i}
            className="why-choose-particle bg-accent absolute rounded-full"
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
      </motion.div>

      {/* Fine film grain — generated at runtime by an SVG `feTurbulence`
          filter (defined once, hidden, below) applied to this div via CSS
          `filter: url(#...)`. feTurbulence ignores its input entirely and
          synthesizes noise from scratch, so this is procedural texture, not
          an image asset. Kept at very low opacity with `mix-blend-mode:
          overlay` so it reads as fine surface grain, not visible static. */}
      <svg className="absolute size-0">
        <filter id={GRAIN_FILTER_ID}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={2}
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0"
          />
        </filter>
      </svg>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ filter: `url(#${GRAIN_FILTER_ID})` }}
      />

      {/* Bottom fade into the Footer's solid background colour — the
          Footer that follows this section on the homepage uses `bg-primary`
          flat, so without this the section boundary would read as a hard
          cut rather than one continuous dark surface. */}
      <div className="from-primary/0 to-primary pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b" />
    </div>
  );
}
