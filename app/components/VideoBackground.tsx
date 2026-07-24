"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_VIDEOS } from "@/lib/videos";

const ROTATE_INTERVAL_MS = 13_500;
const CROSSFADE_DURATION_MS = 1_400;
const PLAYBACK_RATE = 0.55;

function Overlay() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#020617]/75 to-[#020617]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/30 to-[#020617]/70" />
      <div className="absolute inset-0 bg-[#020617]/25" />
    </>
  );
}

export default function VideoBackground() {
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [slotSrc, setSlotSrc] = useState<[string, string]>(() => [
    HERO_VIDEOS[0] ?? "",
    HERO_VIDEOS[1] ?? HERO_VIDEOS[0] ?? "",
  ]);
  const playlistIndexRef = useRef(HERO_VIDEOS.length > 1 ? 1 : 0);
  const videoRefs = useRef<[HTMLVideoElement | null, HTMLVideoElement | null]>([null, null]);

  useEffect(() => {
    if (HERO_VIDEOS.length < 2) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveSlot((current) => {
        const next: 0 | 1 = current === 0 ? 1 : 0;

        playlistIndexRef.current = (playlistIndexRef.current + 1) % HERO_VIDEOS.length;
        const upcoming = HERO_VIDEOS[playlistIndexRef.current];

        setSlotSrc((prev) => {
          const updated: [string, string] = [prev[0], prev[1]];
          updated[current] = upcoming;
          return updated;
        });

        return next;
      });
    }, ROTATE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  const handleLoadedMetadata = (slot: 0 | 1) => () => {
    const el = videoRefs.current[slot];
    if (el) el.playbackRate = PLAYBACK_RATE;
  };

  if (HERO_VIDEOS.length === 0) return null;

  if (HERO_VIDEOS.length === 1) {
    return (
      <div aria-hidden className="absolute inset-0 z-0">
        <video
          ref={(el) => {
            videoRefs.current[0] = el;
          }}
          src={HERO_VIDEOS[0]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata(0)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Overlay />
      </div>
    );
  }

  return (
    <div aria-hidden className="absolute inset-0 z-0">
      {([0, 1] as const).map((slot) => (
        <video
          key={slot}
          ref={(el) => {
            videoRefs.current[slot] = el;
          }}
          src={slotSrc[slot]}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata(slot)}
          className="absolute inset-0 h-full w-full object-cover transition-opacity ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            opacity: activeSlot === slot ? 1 : 0,
            transitionDuration: `${CROSSFADE_DURATION_MS}ms`,
          }}
        />
      ))}

      <Overlay />
    </div>
  );
}
