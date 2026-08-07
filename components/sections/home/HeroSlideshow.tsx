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
import {
  Factory,
  GraduationCap,
  HardHat,
  HeartPulse,
  Landmark,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Reveal } from "@/components/ui/Reveal";
import { Stack } from "@/components/ui/Stack";
import { Text } from "@/components/ui/Text";
import { Link } from "@/i18n/navigation";
import { HeroParticles } from "@/components/sections/home/HeroParticles";
import { HeroScrollIndicator } from "@/components/sections/home/HeroScrollIndicator";

// Icon per sector, in the same order as `hero.trustBar` below — which is
// itself the same 5-of-6 order as `industries.items` (omitting Facility
// Management & Maintenance, which isn't separately highlighted in the
// Hero), so the two sections read as one consistent sequence rather than
// a re-shuffled repeat.
const TRUST_ICONS = [Landmark, Factory, HardHat, HeartPulse, GraduationCap];

const BACKGROUND_SRC = "/images/hero/hero-premium.webp";

// A slow, near-imperceptible breathing zoom — not a rotating slideshow.
// `repeatType: "mirror"` so it eases back down instead of snapping, which
// a hard reset would make visible at this scale. `ZOOM_BASE_SCALE` isn't
// just a starting point — the photo is also shifted right by
// `COMPOSITION_SHIFT_X` (see below) to give the globe more separation
// from the text, and shifting a `cover`-fit image without revealing an
// empty edge requires overscanning it first, which is what the extra 25%
// base scale provides. Verified empirically (rendered crop previews at
// several shift amounts) that this keeps Egypt and all connection lines
// fully in frame.
const ZOOM_SECONDS = 25;
const ZOOM_BASE_SCALE = 1.25;
const ZOOM_PEAK_SCALE = 1.29;
const COMPOSITION_SHIFT_X = "10%";
const LOAD_FADE_SECONDS = 1.8;

const EASE = [0.16, 1, 0.3, 1] as const;

// Entrance stagger — eyebrow first, headline 150ms later, subtitle 200ms
// after the headline starts, the CTA last with its own scale-in. Finishes
// at ~1.2s total, per spec.
const EYEBROW_DELAY = 0;
const HEADLINE_DELAY = 0.15;
const SUBTITLE_DELAY = HEADLINE_DELAY + 0.2;
const CTA_DELAY = 0.6;

// Mouse parallax — the background layer (photo + its ambient blobs) drifts
// up to this many px toward the cursor; the text content block below is a
// sibling outside this wrapper, so it never moves. Spring-smoothed rather
// than following the cursor directly, same technique as
// `WhyChooseUsBackground`.
const PARALLAX_RANGE_PX = 10;
const PARALLAX_SPRING = { stiffness: 60, damping: 20, mass: 0.5 };

interface TrustItem {
  slug: string;
  title: string;
  subtitle: string;
}

/**
 * Full-bleed Hero: a single premium background photo (a night-time
 * logistics/port scene blended with a glowing globe centered on Egypt),
 * not a rotating slideshow — the image itself is the visual focus. Motion
 * layers, back to front: the slow breathing zoom + two drifting light
 * blobs (unchanged), a subtle mouse-parallax drift on that whole
 * background group, the grid texture, a flat dark wash, a soft vignette,
 * a faint particle/network ambience (`HeroParticles`), the corner
 * watermark, then the centered text block — which fades/slides in as a
 * staggered sequence (eyebrow → headline → subtitle → CTA) rather than
 * one single reveal, and stays completely stable under the mouse
 * parallax above it. A scroll cue sits above the bottom sector-nav row.
 * Everything here is skipped or held static under `prefers-reduced-motion`.
 */
export function HeroSlideshow() {
  const t = useTranslations("hero");
  const trustItems = t.raw("trustBar") as TrustItem[];
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
            initial={{ scale: ZOOM_BASE_SCALE, x: COMPOSITION_SHIFT_X }}
            animate={
              prefersReducedMotion
                ? { scale: ZOOM_BASE_SCALE, x: COMPOSITION_SHIFT_X }
                : {
                    scale: [ZOOM_BASE_SCALE, ZOOM_PEAK_SCALE, ZOOM_BASE_SCALE],
                    x: COMPOSITION_SHIFT_X,
                  }
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
              className="object-cover"
              style={{ objectPosition: "50% 50%" }}
            />
          </motion.div>

          {/* Two soft, low-opacity gold blobs that drift very slowly — an
              ambient "floating light" read, not new light sources. Roughly
              positioned over the photo's own warehouse lights (start side)
              and globe glow (end side) so they read as an extension of the
              image rather than an overlay competing with it. */}
          {!prefersReducedMotion && (
            <>
              <motion.div
                aria-hidden="true"
                className="bg-accent/25 pointer-events-none absolute start-[8%] top-[55%] size-[28rem] rounded-full blur-3xl"
                animate={{
                  x: [0, 24, 0],
                  y: [0, -18, 0],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{
                  duration: 18,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <motion.div
                aria-hidden="true"
                className="bg-accent/20 pointer-events-none absolute end-[6%] top-[30%] size-[32rem] rounded-full blur-3xl"
                animate={{
                  x: [0, -20, 0],
                  y: [0, 22, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 22,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </>
          )}
        </motion.div>
      </motion.div>

      {/* Grid texture reads at very low opacity — scope currentColor to canvas so color-mix produces light lines against the dark photo, not the inherited dark body text color. Oversized by -inset-6 with a slow drift so the motion never reveals an edge. */}
      <div
        aria-hidden="true"
        className="bg-grid-pattern text-canvas/40 animate-grid-drift pointer-events-none absolute -inset-6"
      />

      {/* Flat, subtle dark wash — a single overlay rather than the old
          directional gradient, since there's no longer a "far side" that
          needs to stay clear to show off a rotating photo. Just enough to
          keep the text legible; the photo stays the dominant visual.
          45% -> 48% (a ~7% relative increase) for a touch more readability. */}
      <div
        aria-hidden="true"
        className="bg-ink/48 pointer-events-none absolute inset-0"
      />

      {/* Soft vignette — darkens the four corners slightly so the eye
          settles toward the centered text block instead of the frame
          edges. Additive to the flat wash above, not a replacement. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 75% at 50% 48%, transparent 55%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <HeroParticles />

      {/* Centered content block — absolutely positioned so it's fully
          independent of the Section's own flex alignment (`items-start`,
          used by nothing else now that this no longer relies on normal
          document flow). `top-[45%]` + `-translate-y-1/2` centers the
          block's own height around the 45% mark, per spec ("slightly
          above the vertical center") rather than true 50%. */}
      <div className="absolute inset-x-0 top-[45%] -translate-y-1/2">
        <Container className="relative">
          {/* Shifted ~12% left of center (desktop/wide screens only) so the
              text block visually balances against the globe, which sits
              toward the photo's physical right regardless of locale/reading
              direction — a physical `-translate-x`, not a logical
              start/end shift. Left as centered on mobile/tablet, where the
              composition doesn't need the same counterweight and the extra
              room isn't there to give up. */}
          <div className="relative mx-auto max-w-[760px] text-center lg:-translate-x-[12%]">
            {/* Extra, localized contrast on top of the flat overlay above —
                a soft radial dark falloff centered on the text block only,
                not the whole Hero. Extends past the block's own edges
                (negative inset) so the falloff reads as a soft glow rather
                than a hard-edged box. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-12 -inset-y-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(30,29,27,0.55) 0%, rgba(30,29,27,0.25) 55%, transparent 80%)",
              }}
            />
            {/* Warm gold glow specifically behind the headline — additive
                to the dark falloff above, not a replacement for it. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[18%] -z-10 h-64 -translate-y-1/2"
              style={{
                background:
                  "radial-gradient(ellipse 55% 100% at 50% 50%, rgba(212,160,23,0.16) 0%, transparent 75%)",
              }}
            />

            <div className="relative">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: EYEBROW_DELAY,
                  ease: EASE,
                }}
              >
                {/* Bespoke label (not the shared `Eyebrow`, whose fixed
                    accent-colored text-sm doesn't match this section's own
                    16px/600/gold spec) — kept scoped to the Hero so the
                    shared component's other call sites are untouched. */}
                <Stack
                  direction="row"
                  gap="sm"
                  align="center"
                  className="justify-center"
                >
                  <span
                    aria-hidden="true"
                    className="bg-gold h-px w-8 shrink-0"
                  />
                  <Text
                    as="span"
                    className="text-gold text-base font-semibold tracking-wide"
                  >
                    {t("label")}
                  </Text>
                </Stack>
              </motion.div>

              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: HEADLINE_DELAY,
                  ease: EASE,
                }}
              >
                {/* Reduced ~22% from the previous 38/54/72px scale (now
                    30/42/56px) for a more restrained, executive read —
                    still capped at 4 lines as a safety net (`line-clamp-4`
                    — the headline is often two lines via an explicit "\n"
                    in the translation string, rendered as <br />s below)
                    rather than a hard requirement, since the exact line
                    count still depends on the translated string's length
                    at a given viewport. Letter-spacing is tightened to
                    -0.02em in both directions here — overriding, for this
                    one headline only, `Heading`'s usual
                    `rtl:tracking-normal` (Arabic body copy elsewhere stays
                    untightened; this is a deliberate display-type
                    exception at hero scale). */}
                <Heading
                  level={1}
                  size={1}
                  tone="inverse"
                  className="mt-10 line-clamp-4 text-[30px] leading-[1.15] font-bold tracking-[-0.02em] sm:text-[42px] lg:text-[56px] rtl:tracking-[-0.02em]"
                >
                  {t("headline")
                    .split("\n")
                    .map((line, index) => (
                      <span key={line}>
                        {index > 0 && <br />}
                        {line}
                      </span>
                    ))}
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
                {/* Narrowed from 650px to 560px and the copy itself
                    shortened to 3-4 short lines (see `hero.paragraph`) for
                    a tighter, more deliberate executive read — own
                    max-width (narrower than the 760px block) and slightly
                    reduced opacity for a softer visual hierarchy under the
                    headline. */}
                <Text
                  size="lg"
                  tone="inverse"
                  className="mx-auto mt-8 max-w-[560px] text-[16px] leading-[1.9] tracking-normal opacity-85 sm:text-[17px] lg:text-[19px]"
                >
                  {t("paragraph")}
                </Text>
              </motion.div>

              <motion.div
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 12, scale: 0.92 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: CTA_DELAY, ease: EASE }}
              >
                <Stack
                  direction="row"
                  gap="sm"
                  wrap
                  justify="center"
                  className="mt-14"
                >
                  {/* Primary — the site's single dedicated contact page,
                      rather than a same-page section, since the homepage
                      no longer has its own contact section. */}
                  <Button href="/contact" variant="accent" size="lg">
                    {t("primaryCta")}
                  </Button>
                  {/* Secondary — `variant="secondary"`'s default styling
                      (light border, dark text) is tuned for the site's
                      light-background sections — overridden here for a
                      transparent button with a thin light border that
                      reads correctly against this dark photo. Hover state
                      only (the resting look is unchanged): a gold-gradient
                      fill, a soft gold glow, and a 3px lift over 300ms. */}
                  <Button
                    href="/solutions"
                    variant="secondary"
                    size="lg"
                    className="border-canvas/40 text-canvas hover:from-gold hover:to-accent hover:text-ink duration-300 hover:-translate-y-[3px] hover:border-transparent hover:bg-gradient-to-r hover:shadow-[0_10px_32px_rgba(212,160,23,0.4)]"
                  >
                    {t("secondaryCta")}
                  </Button>
                </Stack>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom-pinned sector navigation, anchored to the very bottom of
          the Hero. The gold "time remaining" progress bar that used to sit
          above it is gone along with the slide rotation it tracked. */}
      <div className="absolute inset-x-0 bottom-0 w-full">
        <Container>
          {/* Sector navigation — full width, evenly spread. Plain text +
              icon only: no card, no background, no border, no shadow, so
              the photo stays the dominant visual and this reads as
              navigation rather than content. Each item deep-links to its
              own matching card in "Industries We Serve" (via the shared
              `slug`, kept independent of array order on purpose — safer
              than assuming the two lists always stay in sync), not just
              the top of that section, so clicking "Healthcare" actually
              lands on the Healthcare card.
              Fades in on its own delayed Reveal, after the
              headline/paragraph have already settled. */}
          <Reveal delay={0.35} duration={0.7} className="w-full pb-5">
            <nav
              aria-label={t("label")}
              className="flex w-full flex-wrap items-center justify-between gap-x-8 gap-y-3"
            >
              {trustItems.map((item, index) => {
                const Icon = TRUST_ICONS[index];
                return (
                  <Link
                    key={item.title}
                    href={`#industries-${item.slug}`}
                    className="group text-canvas hover:text-canvas/90 relative inline-flex shrink-0 items-center gap-2 py-1 text-sm font-medium transition-colors"
                  >
                    <Icon
                      aria-hidden="true"
                      className="text-accent size-5 shrink-0"
                    />
                    {item.title}
                    <span
                      aria-hidden="true"
                      className="bg-accent absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    />
                  </Link>
                );
              })}
            </nav>
          </Reveal>
        </Container>
      </div>

      <HeroScrollIndicator />
    </div>
  );
}
