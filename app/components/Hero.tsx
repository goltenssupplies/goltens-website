"use client";

import { ArrowRight, Droplets, Factory, Flame, Server, Zap } from "lucide-react";

const STATS = [
  { value: "500+", label: "Products" },
  { value: "50+", label: "Global Brands" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Quality Assurance" },
];

const CARDS = [
  {
    icon: Factory,
    title: "Industrial Equipment",
    desc: "Machinery, motors & spare parts",
  },
  {
    icon: Droplets,
    title: "Pumps & Valves",
    desc: "Centrifugal & submersible systems",
  },
  {
    icon: Zap,
    title: "Electrical Supplies",
    desc: "Panels, cables & breakers",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Servers, networking & storage",
  },
  {
    icon: Flame,
    title: "Fire Fighting",
    desc: "Safety & suppression systems",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#020617] to-[#0f172a] px-6 pt-32 pb-20"
    >
      {/* Animated glow effects */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600/30 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        {/* Left column */}
        <div>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Strategic Procurement
            <br />
            <span className="text-blue-400">For Government &</span>
            <br />
            Industrial Projects
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
            GOLTENS GENERAL SUPPLIES delivers complete procurement solutions
            for government entities, hospitals, universities, contractors and
            industrial facilities across Egypt.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
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
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — card illustration */}
        <div className="grid grid-cols-2 gap-5">
          {CARDS.map((card, index) => {
            const Icon = card.icon;
            const isLast = index === CARDS.length - 1;
            return (
              <div
                key={card.title}
                className={`rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10 ${
                  index % 2 === 1 ? "sm:translate-y-6" : ""
                } ${isLast ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
