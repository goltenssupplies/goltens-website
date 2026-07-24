"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Brands", href: "#brands" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-lg backdrop-blur border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="#home" className="leading-tight">
          <h1
            className={`text-2xl font-black tracking-wide ${
              scrolled ? "text-blue-700" : "text-white"
            }`}
          >
            GOLTENS
          </h1>

          <p
            className={`text-xs tracking-[3px] uppercase ${
              scrolled ? "text-slate-500" : "text-slate-300"
            }`}
          >
            General Supplies
          </p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium transition hover:text-blue-600 ${
                scrolled ? "text-slate-700" : "text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 md:block"
        >
          Request a Quote
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className={scrolled ? "text-slate-700 md:hidden" : "text-white md:hidden"}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col p-6">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-slate-700 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mt-4 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}