"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Brands", href: "#brands" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out ${
        scrolled
          ? "border-slate-900/10 bg-white/80 py-3 shadow-sm backdrop-blur-md"
          : "border-white/10 bg-slate-950/10 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="rounded-sm leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span
            className={`text-xl font-semibold tracking-tight transition-colors duration-500 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            GOLTENS
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative rounded-sm py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span
                className={`text-sm font-medium tracking-wide transition-colors duration-300 group-hover:text-blue-600 ${
                  scrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {item.name}
              </span>
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-blue-600 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:block"
        >
          Request a Quote
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`rounded-md p-1 transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-0 z-40 h-screen bg-white md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
                closed: {},
              }}
              className="flex h-full flex-col items-center justify-center gap-8 px-6"
            >
              {LINKS.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 16 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-2xl font-medium text-slate-900 transition-colors hover:text-blue-600"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 16 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-4 rounded-full bg-blue-600 px-8 py-3 text-center text-base font-medium text-white"
              >
                Request a Quote
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
