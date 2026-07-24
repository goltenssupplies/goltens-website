"use client";

import { motion, type Easing } from "framer-motion";
import { ArrowRight, MapPin, Radar, Ship } from "lucide-react";
import VideoBackground from "./VideoBackground";

const HEADLINE_LINES = [
  "Strategic Procurement",
  "For Governments,",
  "Industries &",
  "Mega Projects.",
];

const NETWORK_NODES = [
  { label: "Europe", x: 60, y: 40 },
  { label: "China", x: 150, y: 55 },
  { label: "UAE", x: 140, y: 150 },
];
const HQ_NODE = { label: "Egypt · HQ", x: 55, y: 145 };

const TENDER_STAGES = ["Sourcing", "Bidding", "Awarded", "Delivery"];
const CURRENT_STAGE_INDEX = 2;

const TRUSTED_BRANDS = ["HP", "Dell", "Cisco", "Grundfos", "ABB", "Schneider Electric"];

const EXPO_OUT: Easing = [0.16, 1, 0.3, 1];

const QUALITY_SCORE = 98;
const DIAL_RADIUS = 34;
const DIAL_CIRCUMFERENCE = 2 * Math.PI * DIAL_RADIUS;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#020617] pt-36 pb-14"
    >
      {/* Layer 1 — cinematic video */}
      <VideoBackground />

      {/* Layer 2 — aurora, key light, grid, noise */}
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <motion.div
          initial={{ opacity: 0.4, scale: 1 }}
          animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.12, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-[8%] h-[620px] w-[620px] -translate-y-1/4 rounded-full bg-blue-600/25 blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0.2, scale: 1 }}
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.15, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-[6%] h-[440px] w-[440px] rounded-full bg-sky-500/15 blur-[100px]"
        />

        <motion.div
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,black,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Layer 3 — content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 lg:px-16">
        <div className="grid flex-1 items-start gap-x-12 gap-y-16 lg:grid-cols-[1fr_380px]">
          {/* Headline column */}
          <div className="max-w-4xl pt-4">
            {/* ① Brand identity — GOLTENS wordmark */}
            <div>
              <h1 className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: EXPO_OUT }}
                  className="block text-[clamp(3.25rem,8vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
                >
                  GOLTENS
                </motion.span>
              </h1>

              {/* ② Brand descriptor */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EXPO_OUT, delay: 0.45 }}
                className="mt-2 text-sm font-medium uppercase tracking-[0.35em] text-slate-300 sm:text-base"
              >
                General Supplies
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EXPO_OUT, delay: 0.6 }}
                className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500"
              >
                Global Procurement · Industrial Solutions · Strategic Sourcing
              </motion.p>
            </div>

            {/* ③ Supporting headline */}
            <p className="mt-12 text-[clamp(2.75rem,7.5vw,6.75rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-white">
              {HEADLINE_LINES.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "115%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 1,
                      ease: EXPO_OUT,
                      delay: 0.85 + index * 0.12,
                    }}
                    className={`block ${index === HEADLINE_LINES.length - 1 ? "text-blue-400" : ""}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </p>

            {/* ④ Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EXPO_OUT, delay: 1.55 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300"
            >
              From industrial machinery and pumps to electrical systems, IT
              infrastructure and fire safety — complete, compliant
              procurement for government entities and industrial facilities
              across Egypt and the region.
            </motion.p>

            {/* ⑤ CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EXPO_OUT, delay: 1.75 }}
              className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4"
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
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
              >
                Explore Capabilities
                <span className="relative -bottom-px block h-px w-6 bg-slate-500 transition-all duration-300 group-hover:w-8 group-hover:bg-white" />
              </a>
            </motion.div>
          </div>

          {/* Operations Panel — desktop only */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EXPO_OUT, delay: 0.7 }}
            className="hidden lg:mt-6 lg:block lg:w-[380px] lg:justify-self-end"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-200">
                  <Radar className="h-4 w-4 text-blue-400" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em]">
                    Operations
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <motion.span
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400">
                    Live
                  </span>
                </div>
              </div>

              {/* Global network radar */}
              <div className="relative mt-6 aspect-square w-full">
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <circle cx={HQ_NODE.x} cy={HQ_NODE.y} r={30} fill="none" stroke="white" strokeOpacity={0.06} />
                  <circle cx={HQ_NODE.x} cy={HQ_NODE.y} r={55} fill="none" stroke="white" strokeOpacity={0.05} />
                  <circle cx={HQ_NODE.x} cy={HQ_NODE.y} r={80} fill="none" stroke="white" strokeOpacity={0.04} />

                  {NETWORK_NODES.map((node, index) => (
                    <motion.line
                      key={node.label}
                      x1={HQ_NODE.x}
                      y1={HQ_NODE.y}
                      x2={node.x}
                      y2={node.y}
                      stroke="#60A5FA"
                      strokeWidth={1}
                      initial={{ opacity: 0.15 }}
                      animate={{ opacity: [0.15, 0.5, 0.15] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.8,
                      }}
                    />
                  ))}

                  {NETWORK_NODES.map((node) => (
                    <circle key={node.label} cx={node.x} cy={node.y} r={3} fill="#60A5FA" />
                  ))}

                  <motion.circle
                    cx={HQ_NODE.x}
                    cy={HQ_NODE.y}
                    r={4}
                    fill="#93C5FD"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>

                {NETWORK_NODES.map((node) => (
                  <span
                    key={node.label}
                    className="absolute text-[10px] font-medium text-slate-400"
                    style={{
                      left: `${(node.x / 200) * 100}%`,
                      top: `${(node.y / 200) * 100}%`,
                      transform: "translate(8px, -6px)",
                    }}
                  >
                    {node.label}
                  </span>
                ))}

                <span
                  className="absolute flex items-center gap-1 text-[10px] font-medium text-blue-300"
                  style={{
                    left: `${(HQ_NODE.x / 200) * 100}%`,
                    top: `${(HQ_NODE.y / 200) * 100}%`,
                    transform: "translate(9px, 2px)",
                  }}
                >
                  <MapPin className="h-2.5 w-2.5" />
                  {HQ_NODE.label}
                </span>
              </div>

              {/* Tender pipeline */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Tender Pipeline
                </p>
                <div className="mt-4 flex items-center">
                  {TENDER_STAGES.map((stage, index) => (
                    <div key={stage} className="flex flex-1 items-center last:flex-none">
                      <div className="flex flex-col items-center gap-1.5">
                        <span
                          className={`h-2 w-2 rounded-full ${
                            index <= CURRENT_STAGE_INDEX ? "bg-blue-400" : "bg-white/15"
                          }`}
                        />
                        <span className="text-[9px] font-medium whitespace-nowrap text-slate-500">
                          {stage}
                        </span>
                      </div>
                      {index < TENDER_STAGES.length - 1 && (
                        <span
                          className={`mx-1.5 h-px flex-1 ${
                            index < CURRENT_STAGE_INDEX ? "bg-blue-400/60" : "bg-white/10"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality dial + shipment status */}
              <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <svg width={80} height={80} viewBox="0 0 80 80" className="-rotate-90">
                    <circle cx={40} cy={40} r={DIAL_RADIUS} fill="none" stroke="white" strokeOpacity={0.08} strokeWidth={4} />
                    <motion.circle
                      cx={40}
                      cy={40}
                      r={DIAL_RADIUS}
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeDasharray={DIAL_CIRCUMFERENCE}
                      initial={{ strokeDashoffset: DIAL_CIRCUMFERENCE }}
                      whileInView={{
                        strokeDashoffset:
                          DIAL_CIRCUMFERENCE * (1 - QUALITY_SCORE / 100),
                      }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 1.4, ease: EXPO_OUT, delay: 0.2 }}
                    />
                  </svg>
                  <div className="-ml-[64px] flex flex-col items-center">
                    <span className="font-mono text-lg font-semibold text-white">
                      {QUALITY_SCORE}
                    </span>
                    <span className="text-[9px] text-slate-500">% Quality</span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Ship className="h-3.5 w-3.5 text-blue-400" />
                    <span className="font-mono text-[10px] tracking-wide">GT-2291</span>
                  </div>
                  <p className="mt-1 truncate text-[11px] text-slate-500">
                    In Transit · Alexandria Port
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EXPO_OUT, delay: 2.0 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <p className="text-center font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
            Trusted by leading brands &amp; institutions
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {TRUSTED_BRANDS.map((brand) => (
              <span
                key={brand}
                className="text-sm font-semibold tracking-wide text-slate-600 transition-colors duration-300 hover:text-slate-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue — thin light line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EXPO_OUT, delay: 2.3 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600">
            Scroll
          </span>
          <div className="relative h-10 w-px overflow-hidden bg-white/10">
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
