"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

/**
 * Background video playlist. These files are not yet part of the
 * repository — add real footage at these paths under /public/videos.
 * Until then, onVideoError() below hides the video layer and the
 * hero falls back cleanly to the aurora/gradient background alone.
 */
const HERO_VIDEOS = [
  "/videos/hero-industrial.mp4",
  "/videos/hero-logistics.mp4",
  "/videos/hero-facility.mp4",
];

const STATS: {
  label: string;
  display: string;
  animate: { target: number; suffix: string } | null;
}[] = [
  { label: "Products Delivered", display: "500+", animate: { target: 500, suffix: "+" } },
  { label: "Global Brands", display: "50+", animate: { target: 50, suffix: "+" } },
  { label: "Quality Assurance", display: "100%", animate: { target: 100, suffix: "%" } },
  { label: "Support", display: "24/7", animate: null },
];

const SUPPLIER_REGIONS = ["Europe", "China", "UAE", "Egypt"];

const PROCUREMENT_STATUS = [
  { icon: ShieldCheck, label: "Quality Assurance", value: 98 },
  { icon: Truck, label: "Logistics", value: 95 },
  { icon: ClipboardCheck, label: "Tender Supply", value: 92 },
];

const TRUSTED_BRANDS = ["HP", "Dell", "Cisco", "Grundfos", "ABB", "Schneider Electric"];

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EXPO_OUT } },
};

const dashboardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EXPO_OUT, delay: 0.2 } },
};

function AnimatedStat({
  display,
  target,
}: {
  display: string;
  target: { target: number; suffix: string } | null;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView || !target) return;
    const controls = animate(0, target.target, {
      duration: 1.6,
      ease: EXPO_OUT,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <p ref={ref} className="text-3xl font-bold text-white sm:text-4xl">
      {target ? `${value}${target.suffix}` : display}
    </p>
  );
}

function ProgressRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof ShieldCheck;
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-300">
          <Icon className="h-4 w-4 text-blue-400" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="font-mono text-xs text-slate-400">{value}%</span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: EXPO_OUT }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoAvailable, setVideoAvailable] = useState(true);

  const handleVideoEnded = () => {
    setActiveVideo((current) => (current + 1) % HERO_VIDEOS.length);
  };

  const handleVideoError = () => {
    setVideoAvailable(false);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#020617] pt-40 pb-16"
    >
      {/* Layer 1 — video background */}
      {videoAvailable && (
        <div aria-hidden className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.video
              key={HERO_VIDEOS[activeVideo]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: EXPO_OUT }}
              className="h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEnded}
              onError={handleVideoError}
            >
              <source src={HERO_VIDEOS[activeVideo]} type="video/mp4" />
            </motion.video>
          </AnimatePresence>

          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#020617]/80 to-[#020617]" />
          <div className="absolute inset-0 bg-[#020617]/40" />
        </div>
      )}

      {/* Layer 2 — aurora, grid, noise, glow */}
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          initial={{ opacity: 0.35, scale: 1 }}
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 h-[560px] w-[560px] rounded-full bg-blue-600/30 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.25, scale: 1 }}
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-1/4 -right-40 h-[480px] w-[480px] rounded-full bg-sky-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-3xl"
        />

        {/* Animated grid */}
        <motion.div
          initial={{ opacity: 0.06 }}
          animate={{ opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Layer 3 — content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 lg:px-12">
        <div className="grid flex-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column */}
          <motion.div variants={containerVariants} initial="hidden" animate="show">
            <motion.div
              variants={itemVariants}
              initial="hidden"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-300">
                Government &amp; Industrial Procurement
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              initial="hidden"
              className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[5rem]"
            >
              Strategic Procurement
              <br />
              For Governments,
              <br />
              Industries &amp;
              <br />
              <span className="text-blue-400">Mega Projects</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              initial="hidden"
              className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300"
            >
              From industrial machinery and pumps to electrical systems, IT
              infrastructure and fire safety — we deliver complete, compliant
              procurement for government entities, contractors and industrial
              facilities across Egypt and the region.
            </motion.p>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                Explore Products
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4"
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <AnimatedStat display={stat.display} target={stat.animate} />
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — glass dashboard */}
          <motion.div
            variants={dashboardVariants}
            initial="hidden"
            animate="show"
            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-2xl sm:p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Globe2 className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-semibold">Global Operations</span>
              </div>

              <div className="flex items-center gap-2">
                <motion.span
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                />
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                  Live
                </span>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                Global Supplier Network
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {SUPPLIER_REGIONS.map((region) => (
                  <div
                    key={region}
                    className="flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.03] px-3 py-2.5"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span className="text-sm text-slate-200">{region}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                Procurement Status
              </p>

              <div className="mt-5 space-y-5">
                {PROCUREMENT_STATUS.map((row) => (
                  <ProgressRow
                    key={row.label}
                    icon={row.icon}
                    label={row.label}
                    value={row.value}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom — trusted by */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="show"
          className="mt-24 border-t border-white/10 pt-10"
        >
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Trusted by leading brands &amp; institutions
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUSTED_BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-sm font-semibold tracking-wide text-slate-500 transition-colors duration-300 hover:text-slate-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: EXPO_OUT }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
            Scroll
          </span>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
