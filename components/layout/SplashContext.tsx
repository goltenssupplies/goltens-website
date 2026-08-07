"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { usePathname } from "@/i18n/navigation";

interface SplashContextValue {
  /** True while the home page's one-time splash should keep the Navbar hidden. */
  isSplashActive: boolean;
  /** Called by the splash once it has fully finished (or immediately, if it never plays). */
  finishSplash: () => void;
}

const SplashContext = createContext<SplashContextValue>({
  isSplashActive: false,
  finishSplash: () => {},
});

/**
 * Coordinates the home page's splash screen with the Navbar so the header
 * stays hidden until the splash reports itself finished, rather than
 * relying on z-index/opacity layering alone. Only the home route ever
 * mounts a splash, so every other route reports `isSplashActive: false`
 * immediately and the Navbar is unaffected.
 */
export function SplashProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [finished, setFinished] = useState(false);

  const value = useMemo<SplashContextValue>(
    () => ({
      isSplashActive: isHome && !finished,
      finishSplash: () => setFinished(true),
    }),
    [isHome, finished],
  );

  return (
    <SplashContext.Provider value={value}>{children}</SplashContext.Provider>
  );
}

export function useSplash() {
  return useContext(SplashContext);
}
