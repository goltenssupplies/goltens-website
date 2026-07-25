"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import KeystoneMark from "./KeystoneMark";

const LINKS = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Contact", href: "/#contact" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-canvas/90 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-[120px]">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
        >
          <KeystoneMark className="h-5 w-5 text-ink" />
          <span className="text-lg font-bold tracking-tight text-ink">GOLTENS</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-sm text-sm font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden h-11 items-center justify-center rounded-md bg-blue px-6 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue lg:inline-flex"
        >
          Start a Conversation
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-sm p-1 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-canvas transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
        }`}
      >
        <nav className="flex min-h-0 flex-col gap-1 px-6 py-6">
          {LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-ink"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-12 items-center justify-center rounded-md bg-blue text-base font-medium text-canvas"
          >
            Start a Conversation
          </Link>
        </nav>
      </div>
    </header>
  );
}
