"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { useSplash } from "@/components/layout/SplashContext";
import { LogoImage } from "@/components/layout/Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

// Timeline (seconds from mount) — a fast, minimal preloader: the logo
// fades in first, the tagline follows shortly after, while a thin gold
// line fills beneath them over the same overall span. Then the whole
// overlay fades out to reveal the already-loaded Hero underneath.
const LOGO_FADE_DURATION = 0.5;
const TAGLINE_DELAY = 0.35;
const TAGLINE_DURATION = 0.4;
const HOLD_SECONDS = 1.35;
const EXIT_SECONDS = 0.5;

type Phase = "playing" | "exit" | "done";

/**
 * One-time premium preloader that plays before the Hero: a dark graphite
 * (`ink`-token) screen with the actual logo (`LogoImage`'s "dark" variant
 * — transparent background, white/gold ink — the same one used by the
 * Navbar and Footer, so the mark reads identically everywhere on the
 * site), the brand tagline beneath it, and a thin gold line filling
 * left-to-right underneath, over the same overall span. As this overlay
 * fades out, the Hero underneath
 * (already fully loaded) is progressively revealed, which is the "Hero
 * fades in" effect — there's no separate fade-in on the Hero's own side.
 * Skipped entirely under `prefers-reduced-motion` rather than shown in a
 * reduced form, since it's a purely decorative flourish.
 */
export function HeroIntro() {
  const [phase, setPhase] = useState<Phase>("playing");
  const prefersReducedMotion = useReducedMotion();
  const { finishSplash } = useSplash();

  useEffect(() => {
    if (prefersReducedMotion) {
      finishSplash();
      return;
    }

    const toExit = setTimeout(() => setPhase("exit"), HOLD_SECONDS * 1000);
    const toDone = setTimeout(
      () => {
        setPhase("done");
        finishSplash();
      },
      (HOLD_SECONDS + EXIT_SECONDS) * 1000,
    );
    return () => {
      clearTimeout(toExit);
      clearTimeout(toDone);
    };
  }, [prefersReducedMotion, finishSplash]);

  if (prefersReducedMotion || phase === "done") return null;

  const isExiting = phase === "exit";

  return (
    <motion.div
      aria-hidden="true"
      className="bg-ink fixed inset-0 z-[100] flex items-center justify-center"
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: EXIT_SECONDS, ease: "easeInOut" }}
    >
      {/* dir="ltr" once here covers the whole block (logo, tagline, and the
          gold bar's fill direction) — the tagline is fixed Latin text
          regardless of locale, same convention as the Footer's brand
          sign-off. */}
      <div dir="ltr" className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: LOGO_FADE_DURATION, ease: EASE }}
        >
          <LogoImage variant="dark" className="h-14 sm:h-16" />
        </motion.div>

        <motion.p
          className="text-canvas/50 text-xs tracking-[0.2em] sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: TAGLINE_DURATION,
            delay: TAGLINE_DELAY,
            ease: EASE,
          }}
        >
          QUALITY • RELIABILITY • COMPETITIVENESS
        </motion.p>

        {/* Thin gold loading line — fills once, left to right, over the
            preloader's full duration. Reuses the same `hero-progress`
            keyframe as the Hero's own slide-progress bar. */}
        <div className="bg-canvas/15 relative mt-2 h-[2px] w-[140px] overflow-hidden rounded-full">
          <div
            className="bg-accent absolute inset-y-0 start-0 h-full rounded-full shadow-[0_0_8px_rgba(166,128,61,0.7)]"
            style={{
              animationName: "hero-progress",
              animationDuration: `${HOLD_SECONDS}s`,
              animationTimingFunction: "linear",
              animationFillMode: "forwards",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
