"use client";

import type { MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { HeroScrollIndicator } from "@/components/sections/home/HeroScrollIndicator";
import { SOLUTIONS_ENABLED } from "@/lib/feature-flags";

// Cairo skyline at sunset — the Nile, the pyramids on the horizon, and the
// modern downtown skyline (1774x887, a 2:1 panorama). Plain photo, no
// overlaid graphics or text baked into the file itself.
const BACKGROUND_SRC = "/images/categories/golten-vip.png";

// A slow, near-imperceptible breathing zoom — not a rotating slideshow.
// `repeatType: "mirror"` so it eases back down instead of snapping, which
// a hard reset would make visible at this scale. Kept subtle (6%-9%
// overscan, not the much larger overscan a horizontally-shifted crop would
// need) so the zoom never pushes the pyramids or the Cairo Tower out of
// frame on this wide 2:1 panorama.
const ZOOM_SECONDS = 25;
const ZOOM_BASE_SCALE = 1.06;
const ZOOM_PEAK_SCALE = 1.09;
const LOAD_FADE_SECONDS = 1.8;

const EASE = [0.16, 1, 0.3, 1] as const;

// Entrance stagger — brand line and headline first, tagline and paragraph
// following shortly after, the CTA last with its own scale-in. Finishes at
// ~1.1s total.
const HEADLINE_DELAY = 0;
const SUBTITLE_DELAY = HEADLINE_DELAY + 0.3;
const CTA_DELAY = SUBTITLE_DELAY + 0.4;

// Mouse parallax — the background layer (photo + its ambient blobs) drifts
// up to this many px toward the cursor; the text content block below is a
// sibling outside this wrapper, so it never moves. Spring-smoothed rather
// than following the cursor directly, same technique as
// `WhyChooseUsBackground`.
const PARALLAX_RANGE_PX = 10;
const PARALLAX_SPRING = { stiffness: 60, damping: 20, mass: 0.5 };

/**
 * Full-bleed Hero: a single premium background photo (an aerial sunset view
 * of the Nile through Cairo, pyramids on the horizon), not a rotating
 * slideshow — the image itself is the visual focus. Motion layers, back to
 * front: the slow breathing zoom, a subtle mouse-parallax drift on that
 * whole background group, the grid texture, a very light flat wash, a
 * faint vignette, a directional scrim behind the text's own side, then the
 * text block itself — pinned to the inline-start edge (not centered) so
 * the photo stays the dominant element throughout and the text only ever
 * supports it. A single secondary CTA (browse solutions, not a
 * request-a-quote button — see spec) closes the block. Fades/slides in as
 * a staggered sequence (brand line + headline → tagline → paragraph →
 * CTA) rather than one single reveal, and stays completely stable under
 * the mouse parallax above it.
 * Deliberately kept to one decorative layer at a time (no particle field,
 * no extra ambient glow blobs) so the photo itself stays the dominant,
 * premium visual rather than competing effects. Everything here is
 * skipped or held static under `prefers-reduced-motion`.
 */
export function HeroSlideshow() {
  const t = useTranslations("hero");
  const prefersReducedMotion = useReducedMotion();

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, PARALLAX_SPRING);
  const springY = useSpring(rawY, PARALLAX_SPRING);
  const parallaxX = useTransform(springX, (v) => v * PARALLAX_RANGE_PX);
  const parallaxY = useTransform(springY, (v) => v * PARALLAX_RANGE_PX);

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
      className="absolute inset-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mouse-parallax wrapper — offsets the background photo + its
          ambient blobs together, up to ~10px toward the cursor. Nothing
          else (text, particles, watermark, nav) is inside this. */}
      <motion.div
        className="absolute inset-0"
        style={
          prefersReducedMotion ? undefined : { x: parallaxX, y: parallaxY }
        }
      >
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: LOAD_FADE_SECONDS, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ scale: ZOOM_BASE_SCALE }}
            animate={
              prefersReducedMotion
                ? { scale: ZOOM_BASE_SCALE }
                : { scale: [ZOOM_BASE_SCALE, ZOOM_PEAK_SCALE, ZOOM_BASE_SCALE] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: ZOOM_SECONDS,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
            }
          >
            <Image
              src={BACKGROUND_SRC}
              alt=""
              fill
              sizes="100vw"
              priority
              quality={90}
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Grid texture reads at very low opacity — scope currentColor to canvas so color-mix produces light lines against the dark photo, not the inherited dark body text color. Oversized by -inset-6 with a slow drift so the motion never reveals an edge. */}
      <div
        aria-hidden="true"
        className="bg-grid-pattern text-canvas/40 animate-grid-drift pointer-events-none absolute -inset-6"
      />

      {/* Flat wash — the site's established dark navy (`#1B1F26`, the same
          tone the Navbar already uses). Nudged up slightly to 12% (was 8%)
          for a touch more baseline contrast site-wide, still barely-there —
          the directional scrim and the local text-block glow below carry
          the real contrast work, so the photo (the Nile, the skyline, the
          sunset sky, the pyramids) stays bright everywhere the text isn't. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#1B1F26]/12"
      />

      {/* Soft vignette — the faintest corner framing, not a mood-darkener.
          Peak eased down again (0.1, was 0.16, originally 0.24). */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 50% 48%, transparent 55%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Directional scrim — dark at the text's own side, fully faded out
          by ~52% across the frame — well short of the photo's midpoint, so
          the gradient itself is never visible "in the middle of the image"
          per spec, and the far side (roughly the outer half, where the
          Cairo Tower and river bend sit) stays completely clean. Strength
          nudged up (from-/70, via-/24, was /62 and /18) for better text
          contrast without widening the darkened area — same 0%/30%/52%
          stop positions as before. `bg-gradient-to-r` (dark on the left,
          fading right) is the LTR case; `rtl:bg-gradient-to-l` flips it to
          dark-on-the-right for Arabic, tracking the text block below
          automatically since both derive from the same `dir` ancestor. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1B1F26]/70 from-0% via-[#1B1F26]/24 via-30% to-transparent to-52% rtl:bg-gradient-to-l"
      />

      {/* Text block — pinned to the inline-start edge (far right in
          Arabic/RTL, far left in English/LTR) rather than centered, per
          spec: no `mx-auto`, `text-start` instead of `text-center`, plus
          its own `ps-*` inset on top of the Container's own gutter so it
          reads as deliberately placed rather than flush against the
          edge. Narrow (480px cap) so it never dominates the photo — the
          Nile, the pyramids, the skyline stay the dominant visual. No CTA
          here by design (see spec — one goes in elsewhere once the rest of
          the page is built). `top-[42%]` + `-translate-y-1/2` keeps it
          vertically centered around the same mark as before. */}
      <div className="absolute inset-x-0 top-[42%] -translate-y-1/2">
        <Container className="relative">
          <div className="relative max-w-[480px] ps-6 text-start sm:ps-10 lg:ps-16">
            {/* Local text-block glow — an extra, tightly-scoped dark patch
                behind the text only (not the whole photo), on top of the
                directional scrim above. This is the "gradient overlay
                behind the text area only" from spec: it extends a bit past
                the block's own edges (negative inset) so the falloff reads
                as a soft glow rather than a hard-edged box, and fades to
                fully transparent well within the block's own bounds — it
                never reaches the rest of the photo. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-6 sm:-inset-x-10 sm:-inset-y-8"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(13,17,23,0.5) 0%, rgba(13,17,23,0.24) 55%, transparent 78%)",
              }}
            />

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: HEADLINE_DELAY,
                ease: EASE,
              }}
            >
              {/* Brand line — "شركة GOLTENS" / "GOLTENS" — clear and
                  distinctive (gold, semibold) but deliberately smaller than
                  the headline below, which carries the primary weight. A
                  light text-shadow (inline `style`, not a utility class, so
                  the exact soft/subtle blur is guaranteed regardless of
                  Tailwind's arbitrary-value support) keeps it crisp over
                  brighter patches of sky. */}
              <Text
                size="lg"
                className="text-gold text-[18px] leading-[1.3] font-semibold sm:text-[21px] lg:text-[25px]"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
              >
                {t("brandLine")}
              </Text>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: HEADLINE_DELAY + 0.1,
                ease: EASE,
              }}
            >
              {/* Primary headline — "للتوريدات العمومية" / "General
                  Supplies". The strongest element by weight/contrast, but
                  restrained rather than oversized per spec — a calm,
                  confident corporate scale, not a shout. Bumped to extra
                  bold (800, via inline `style` rather than a `font-*`
                  class — guarantees it wins regardless of Tailwind's
                  cascade order against `Heading`'s own `rtl:font-bold`,
                  instead of hoping a later utility class beats an earlier
                  one) for maximum legibility over the photo, plus a
                  moderate text-shadow for extra separation. Comfortable
                  line-height (1.3/1.35, extra under RTL) rather than a
                  tight display value. Letter-spacing tightened at -0.02em
                  for LTR — overriding `Heading`'s usual
                  `rtl:tracking-normal` — but eased to -0.01em under RTL,
                  since tight tracking works against Arabic's connected
                  letterforms. */}
              <Heading
                level={1}
                size={1}
                tone="inverse"
                className="mt-1 line-clamp-2 text-[26px] leading-[1.3] tracking-[-0.02em] sm:text-[34px] lg:text-[42px] rtl:leading-[1.35] rtl:tracking-[-0.01em]"
                style={{
                  fontWeight: 800,
                  textShadow: "0 2px 14px rgba(0,0,0,0.55)",
                }}
              >
                {t("headline")}
              </Heading>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: SUBTITLE_DELAY,
                ease: EASE,
              }}
            >
              {/* Tagline — gold, medium weight, its own tier distinct from
                  both the bold white headline above and the muted
                  paragraph below. Same light text-shadow treatment as the
                  brand line. */}
              <Text
                size="md"
                className="text-gold mt-3 line-clamp-2 text-[15px] leading-[1.5] font-medium sm:text-[17px] lg:text-[19px]"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.55)" }}
              >
                {t("subheadline")}
              </Text>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: SUBTITLE_DELAY + 0.1,
                ease: EASE,
              }}
            >
              {/* Short description, same 480px measure as the block itself
                  — never spans a large area of the photo. Opacity raised
                  (92%, was 78%) and size nudged up (15/16/18px, was
                  14/15/17px) for higher contrast and easier reading — still
                  visibly a step down from the headline/tagline above, just
                  no longer faint. */}
              <Text
                size="sm"
                tone="inverse"
                className="mt-3 text-[15px] leading-[1.6] tracking-normal opacity-92 sm:text-[16px] lg:text-[18px]"
                style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
              >
                {t("paragraph")}
              </Text>
            </motion.div>

            {SOLUTIONS_ENABLED && (
              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 10, scale: 0.94 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: CTA_DELAY, ease: EASE }}
              >
                {/* Single secondary CTA — "browse solutions", not a
                    request-a-quote button (the Hero's job right now is
                    introducing GOLTENS, not asking for a quote — that CTA
                    lands elsewhere once the rest of the page is built).
                    Design unchanged: `variant="secondary"`'s default styling
                    (light border, dark text) is tuned for the site's
                    light-background sections — overridden here for a
                    transparent button with a thin light border that reads
                    correctly against this dark photo. Hover state only (the
                    resting look is unchanged): a gold-gradient fill, a soft
                    gold glow, and a 3px lift over 300ms. Only addition: the
                    label itself gets the same light text-shadow as the rest
                    of the block, wrapped in its own `span` so nothing else
                    about the button's markup/props changes.

                    On a temporary hold (`lib/feature-flags.ts`) — this whole
                    block is omitted while `SOLUTIONS_ENABLED` is `false`,
                    rather than deleted, so restoring it later is a one-line
                    flip. */}
                <Button
                  href="/solutions"
                  variant="secondary"
                  size="md"
                  className="border-canvas/40 text-canvas hover:from-gold hover:to-accent hover:text-ink mt-5 duration-300 hover:-translate-y-[3px] hover:border-transparent hover:bg-gradient-to-r hover:shadow-[0_10px_28px_rgba(212,160,23,0.35)]"
                >
                  <span style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
                    {t("secondaryCta")}
                  </span>
                </Button>
              </motion.div>
            )}
          </div>
        </Container>
      </div>

      <HeroScrollIndicator />
    </div>
  );
}
