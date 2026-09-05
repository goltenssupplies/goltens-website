"use client";

import { useId, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { IconButton } from "@/components/ui/IconButton";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface MobileNavItem {
  label: string;
  href: Parameters<typeof Link>[0]["href"];
}

export interface MobileNavigationProps {
  navItems: MobileNavItem[];
  /** Accessible label for the toggle button when the panel is closed, e.g. "Open menu". */
  openLabel: string;
  /** Accessible label for the toggle button when the panel is open, e.g. "Close menu". */
  closeLabel: string;
  /** Extra content below the links, e.g. LanguageSwitcher + a CTA Button. */
  actions?: ReactNode;
  /** Color override for the toggle button, e.g. light text while the navbar is transparent over a dark hero. */
  triggerClassName?: string;
  className?: string;
}

/**
 * Hamburger toggle + full-width panel that expands directly below the
 * navbar. Expands downward rather than sliding in from a screen edge so it
 * needs no `rtl:` handling for direction of travel.
 */
export function MobileNavigation({
  navItems,
  openLabel,
  closeLabel,
  actions,
  triggerClassName,
  className,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={cn("lg:hidden", className)}>
      <IconButton
        icon={isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        aria-label={isOpen ? closeLabel : openLabel}
        aria-expanded={isOpen}
        aria-controls={panelId}
        variant="ghost"
        className={triggerClassName}
        onClick={() => setIsOpen((open) => !open)}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="border-border absolute inset-x-0 top-full overflow-hidden border-b bg-white shadow-[0_4px_20px_rgba(30,29,27,0.06)]"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-sm px-3 py-2.5 text-base font-medium transition-colors",
                      isActive
                        ? "bg-stone text-[#C89B3C]"
                        : "text-ink hover:bg-stone",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              {actions && (
                <div className="border-border mt-2 flex flex-col gap-3 border-t pt-4">
                  {actions}
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
