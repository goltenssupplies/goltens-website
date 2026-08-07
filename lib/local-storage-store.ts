export interface LocalStorageStore<T> {
  getSnapshot: () => T;
  getServerSnapshot: () => T;
  subscribe: (listener: () => void) => () => void;
  setValue: (updater: T | ((current: T) => T)) => void;
}

/**
 * A tiny external store synced to `localStorage`, built for
 * `useSyncExternalStore`. Reading is lazy and cached — `localStorage` is
 * parsed at most once, on the first client read — so `getSnapshot` returns
 * a stable reference across renders until `setValue` actually changes it,
 * which `useSyncExternalStore` requires to avoid re-render loops.
 * `getServerSnapshot` always returns `defaultValue`, so server-rendered
 * HTML and the client's pre-hydration paint always agree; React itself
 * then re-renders with the real client value right after hydration. This
 * is the standard fix for "browser-only state that must agree with SSR on
 * first paint" — no `useEffect` + `setState` hydration dance, which
 * `eslint-plugin-react-hooks`' `set-state-in-effect` rule (correctly)
 * flags as cascading-render-prone.
 */
export function createLocalStorageStore<T>(
  key: string,
  defaultValue: T,
): LocalStorageStore<T> {
  let value: T = defaultValue;
  let hydrated = false;
  const listeners = new Set<() => void>();

  function ensureHydrated() {
    if (hydrated || typeof window === "undefined") return;
    hydrated = true;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) value = JSON.parse(raw) as T;
    } catch {
      // Corrupted or unavailable storage — keep the default, not fatal.
    }
  }

  function getSnapshot(): T {
    ensureHydrated();
    return value;
  }

  function getServerSnapshot(): T {
    return defaultValue;
  }

  function subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  function setValue(updater: T | ((current: T) => T)): void {
    ensureHydrated();
    value =
      typeof updater === "function"
        ? (updater as (current: T) => T)(value)
        : updater;
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // Storage full/unavailable — the in-memory value still updates.
      }
    }
    listeners.forEach((listener) => listener());
  }

  return { getSnapshot, getServerSnapshot, subscribe, setValue };
}
