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
//
// `biasOutward` pushes a raw 0–100 position away from the 50% midpoint so
// particles concentrate toward the section's edges rather than scattering
// evenly across the calm centre band.
function biasOutward(value: number) {
  const offset = value - 50;
  const magnitude = Math.pow(Math.abs(offset) / 50, 0.55);
  return 50 + Math.sign(offset) * magnitude * 50;
}

const PARTICLE_COUNT = 7;
const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  left: `${biasOutward((i * 53) % 100)}%`,
  top: `${biasOutward((i * 31 + 7) % 100)}%`,
  size: 2 + (i % 2),
  duration: 20 + (i % 5) * 2,
  delay: (i % 4) * 1.3,
  peakOpacity: 0.12 + (i % 3) * 0.03,
}));

// Two soft ring clusters — the only remaining "technical form" — evoke a
// precision instrument/gauge in the most abstract way possible (plain
// concentric circles plus a handful of cardinal ticks, no teeth, no
// needles, no labels). Rounded to 2 decimals: `Math.cos`/`Math.sin` are
// only spec-guaranteed to be *approximately* correct, not bit-identical
// across engines — Node's V8 (SSR) and the browser's V8 (hydration) can
// disagree in the last digit, which becomes a real hydration mismatch once
// serialized into an SVG attribute.
function polar(r: number, angleRad: number): [number, number] {
  const x = Math.round(r * Math.cos(angleRad) * 100) / 100;
  const y = Math.round(r * Math.sin(angleRad) * 100) / 100;
  return [x, y];
}

function buildCardinalTicks(r: number, count: number, tickLen: number) {
  const step = (Math.PI * 2) / count;
  return Array.from({ length: count }, (_, i) => {
    const angle = i * step;
    const [x1, y1] = polar(r - tickLen, angle);
    const [x2, y2] = polar(r, angle);
    return { x1, y1, x2, y2 };
  });
}

// Both clusters sit in the viewBox's outer thirds (x < 200 or x > 600),
// mostly cropped off-canvas, so the centre band behind the heading and the
// six advantages (roughly x:260-540, y:150-330) stays completely clear.
const RING_LEFT = { cx: -30, cy: 250, radii: [150, 118] };
const RING_RIGHT = { cx: 830, cy: 210, radii: [175, 140, 108] };
const RING_RIGHT_TICKS = buildCardinalTicks(RING_RIGHT.radii[0], 4, 14);

const STEEL_LINE = "rgba(148,163,184,0.07)";

// How far each depth layer travels at full mouse tilt (px) — kept small so
// the whole effect reads as ambient drift, not parallax you can feel.
const PARALLAX_RANGE = { glow: 10, rings: 5, particles: 12 };

const SPRING = { stiffness: 60, damping: 20, mass: 0.5 };

const GRAIN_FILTER_ID = "why-choose-grain";

/**
 * Fully generated "Why GOLTENS" background — CSS, SVG, and Framer Motion
 * only. No photo, video, WebGL, Three.js, or Canvas anywhere in this file,
 * and nothing marine/port/ship-related — this is a general-supplies /
 * industrial-procurement company, not a marine one.
 *
 * Deliberately minimal: a deep navy/charcoal base, the site's existing
 * blueprint-grid texture (`.bg-grid-pattern`) at very low opacity and
 * softened with a CSS blur so it reads as embedded texture rather than
 * drawn linework, two soft/blurred concentric-ring clusters in the outer
 * thirds (the only remaining "technical form" — no gears, no pipes, no
 * dense linework), a single slow-breathing diagonal gold accent line, and a
 * handful of edge-biased particles. Earlier iterations of this background
 * used visible gear/bearing/pipe SVG line-art; that read as "engineering
 * blueprint pasted behind text" rather than "premium corporate site", so
 * this version trades shape count for restraint — every remaining stroke
 * is low-opacity and blurred so it blends into the gradient instead of
 * sitting on top of it. The CENTRE — where the heading and the six
 * advantages sit — stays calm and dark via an inverse vignette (darkens
 * the middle, clears toward the edges) with no bright glow behind it.
 *
 * The ring clusters are hidden below the `sm` breakpoint (`hidden
 * sm:block`) — mobile keeps the gradient, blueprint grid, corner glows,
 * centre darkening, and sparse particles, simplified further still. Every
 * animated layer is slow and low-amplitude and is skipped entirely under
 * `prefers-reduced-motion`, matching every other animation on this site.
 */
export function WhyChooseUsBackground() {
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, SPRING);
  const springY = useSpring(rawY, SPRING);

  const ringsX = useTransform(springX, (v) => v * PARALLAX_RANGE.rings);
  const ringsY = useTransform(springY, (v) => v * PARALLAX_RANGE.rings);
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
      {/* Deep graphite-black → charcoal-navy, soft diagonal transition. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0b0d 0%, #10131a 55%, #171b23 100%)",
        }}
      />

      {/* Blueprint-grid texture — the same `.bg-grid-pattern` used on the
          Hero/Contact/Footer/etc, so this reads as one visual system rather
          than a one-off. Kept extremely faint, blurred so the lines soften
          into the gradient instead of reading as drawn strokes, and masked
          so it's only present toward the edges. */}
      <div
        className="bg-grid-pattern animate-grid-drift text-canvas/[0.025] pointer-events-none absolute -inset-8"
        style={{
          filter: "blur(1.5px)",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 46%, transparent 35%, black 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 46%, transparent 35%, black 90%)",
        }}
      />

      {/* A single slow, soft diagonal light — gold, low-opacity, blurred —
          the section's one deliberate "technical" accent line rather than a
          field of them. */}
      <motion.div
        className="absolute -inset-y-24 left-[10%] w-[45%] origin-center"
        style={{
          background:
            "linear-gradient(100deg, transparent 0%, rgba(166,128,61,0.05) 50%, transparent 100%)",
          rotate: -8,
          filter: "blur(2px)",
          x: glowX,
          y: glowY,
        }}
        animate={
          prefersReducedMotion ? undefined : { opacity: [0.4, 0.85, 0.4] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 26, ease: "easeInOut", repeat: Infinity }
        }
      />

      {/* Gold accent glow, anchored on the left edge (vertically centred
          rather than a pure corner) so it lights that side without
          reaching the centre. */}
      <motion.div
        className="bg-accent/10 absolute top-[32%] left-[-12%] size-[22rem] rounded-full blur-3xl"
        style={{ x: glowX, y: glowY }}
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.2, 0.38, 0.2], scale: [1, 1.05, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 22, ease: "easeInOut", repeat: Infinity }
        }
      />

      {/* Steel-blue glow, right edge — a cooler, more present counterpoint
          to the gold, kept soft rather than a second bright accent. */}
      <motion.div
        className="absolute top-[52%] right-[-12%] size-[24rem] rounded-full blur-3xl"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(111,143,179,0.12) 0%, transparent 70%)",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.25, 0.42, 0.25], scale: [1, 1.04, 1] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 26, ease: "easeInOut", repeat: Infinity }
        }
      />

      {/* Centre-darkening radial — the inverse of a normal vignette. It
          deepens the middle (where the heading and the six advantages sit)
          and fades to transparent toward the edges, instead of darkening
          the edges and brightening the centre. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 65% at 50% 46%, rgba(0,0,0,0.42) 0%, transparent 68%)",
        }}
      />

      {/* Two soft, blurred ring clusters — the section's only remaining
          "technical form". Hidden below `sm`: at phone scale they'd either
          be invisible or read as clutter, and the gradient/grid/glows above
          already carry the premium feel there. */}
      <div className="absolute inset-0 hidden sm:block">
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 800 480"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 size-full"
          style={{ x: ringsX, y: ringsY, filter: "blur(0.75px)" }}
        >
          <g
            transform={`translate(${RING_LEFT.cx} ${RING_LEFT.cy})`}
            fill="none"
            stroke={STEEL_LINE}
          >
            {RING_LEFT.radii.map((r) => (
              <circle key={r} r={r} strokeWidth="1" />
            ))}
          </g>

          <g
            transform={`translate(${RING_RIGHT.cx} ${RING_RIGHT.cy})`}
            fill="none"
            stroke={STEEL_LINE}
          >
            {RING_RIGHT.radii.map((r) => (
              <circle key={r} r={r} strokeWidth="1" />
            ))}
            <g className="text-accent/10" stroke="currentColor">
              {RING_RIGHT_TICKS.map((t, i) => (
                <line
                  key={i}
                  x1={t.x1}
                  y1={t.y1}
                  x2={t.x2}
                  y2={t.y2}
                  strokeWidth="1"
                />
              ))}
            </g>
          </g>
        </motion.svg>
      </div>

      {/* A handful of edge-biased particles — micro highlights, not a
          field of dust. */}
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
