"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Easing } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EXPO_OUT: Easing = [0.16, 1, 0.3, 1];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: EXPO_OUT, delay },
  };
}

export default function HeroV3() {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <section
      id="home"
      className="relative grid min-h-screen bg-[#020617] lg:grid-cols-2"
    >
      {/* Left — message only */}
      <div className="flex flex-col justify-center px-8 py-40 sm:px-14 lg:px-24 lg:py-24">
        <div className="max-w-xl">
          <motion.h1
            {...fadeUp(0)}
            className="text-[clamp(2.75rem,4.5vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-white"
          >
            We solve what others cannot source.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-8 text-lg leading-relaxed text-slate-400"
          >
            Governments, industrial operators and mega-project teams call
            GOLTENS when standard channels fail — global manufacturer
            access, technical depth, and delivery that holds under
            pressure.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-600/30"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#about"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              How We Work
              <span className="relative -bottom-px block h-px w-6 bg-slate-500 transition-all duration-300 group-hover:w-8 group-hover:bg-white" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right — full-height cinematic visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: EXPO_OUT, delay: 0.15 }}
        className="relative hidden overflow-hidden lg:block"
      >
        {/* Ambient fallback — always the base layer, a complete visual on its own */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1120] via-[#020617] to-[#020617]" />
        <motion.div
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-0 h-[560px] w-[560px] translate-x-1/3 rounded-full bg-blue-600/20 blur-[130px]"
        />

        {/**
         * Real photography goes here once available. A single, slow
         * Ken Burns drift keeps it cinematic without needing video.
         * If /images/hero-industrial.jpg is missing, onError removes
         * it and the ambient panel above is a complete visual on its own.
         */}
        {imageAvailable && (
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: 24, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src="/images/hero-industrial.jpg"
              alt=""
              fill
              priority
              sizes="50vw"
              className="object-cover"
              onError={() => setImageAvailable(false)}
            />
          </motion.div>
        )}

        {/* Grading overlay — always on top, whether or not the image loaded */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#020617]/10 via-transparent to-[#020617]/60" />
        <div className="absolute inset-0 bg-[#020617]/15" />
      </motion.div>
    </section>
  );
}
