"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
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

// Absolute last-resort safety net — see the component doc below for why
// this exists. Only ever reached if both the synchronous already-in-view
// check and the IntersectionObserver fail to reveal the content.
const SAFETY_FALLBACK_MS = 1200;

/**
 * Fades and slides content in the moment it scrolls into view. A no-op —
 * plain children in a div — under `prefers-reduced-motion`.
 *
 * Visibility is never gated behind `IntersectionObserver` actually firing:
 * iOS Safari has a known bug where `IntersectionObserver` root-margin
 * calculations can be computed against a stale viewport height right after
 * hydration (its toolbar resizes the visual viewport), so an element that's
 * already on screen at load never crosses the intersection threshold and a
 * `whileInView`-driven reveal gets stuck invisible forever. This previously
 * made the whole `/contact` page render blank on mobile Safari, since every
 * piece of its content sat inside a `Reveal`.
 *
 * Three layers, each one strictly safer than relying on the observer alone:
 * 1. State defaults to visible, so the very first paint (SSR and client)
 *    always shows the content — nothing is ever hidden "by default".
 * 2. `useLayoutEffect` synchronously checks, before the browser paints,
 *    whether the element is already within the viewport. If so, it's left
 *    visible for good and no observer is ever created for it — this is the
 *    exact case the Safari bug hits, so it's made immune rather than fixed.
 * 3. Only elements confirmed to be below the fold get hidden and handed to
 *    an `IntersectionObserver` for the normal scroll-reveal. That observer
 *    is wrapped in try/catch (falls back to visible if unsupported) and
 *    backed by a bounded timeout that forces visibility regardless if
 *    neither fires within `SAFETY_FALLBACK_MS` — the content can be
 *    revealed early or without an animation in a pathological case, but it
 *    can never stay invisible.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 24,
  duration = 0.6,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const node = ref.current;
    if (!node) return;

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < viewportHeight && rect.bottom > 0;
    if (alreadyInView) return;

    setIsVisible(false);

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setIsVisible(true);
    };

    let observer: IntersectionObserver | undefined;
    try {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            reveal();
            observer?.disconnect();
          }
        },
        { rootMargin: "-80px" },
      );
      observer.observe(node);
    } catch {
      // IntersectionObserver unsupported/unavailable — fall through to the
      // safety-net timeout below instead of staying hidden forever.
    }

    const fallback = window.setTimeout(reveal, SAFETY_FALLBACK_MS);

    return () => {
      observer?.disconnect();
      window.clearTimeout(fallback);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
