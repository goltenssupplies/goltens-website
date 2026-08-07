import {
  Award,
  BadgePercent,
  BellRing,
  Building2,
  Container,
  Droplets,
  Factory,
  FireExtinguisher,
  Fuel,
  Globe,
  GraduationCap,
  HardHat,
  Headset,
  HeartPulse,
  Hotel,
  Landmark,
  Lightbulb,
  Plane,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  Truck,
  Warehouse,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Icon lookup for `data/sector-content/*.ts`'s `applications`, `products`,
// and `advantages` — kept out of those files so they stay JSX-free (same
// convention as `SECTOR_ICONS` in `lib/sectors.ts`). Covers every
// application icon this template's examples name (Factory, Hospitals,
// Universities, Government, Commercial Buildings, Warehouses, Oil & Gas,
// Airports, Hotels), Fire Protection's own product-category set, and the
// same 6 icons `DEFAULT_ADVANTAGE_ICONS` below uses, so a sector's own
// `advantages` can reference any of them by name too.
export const SECTOR_CONTENT_ICONS: Record<string, LucideIcon> = {
  Droplets,
  BellRing,
  Siren,
  FireExtinguisher,
  Waves,
  Container,
  SlidersHorizontal,
  Lightbulb,
  ShieldCheck,
  HardHat,
  Factory,
  HeartPulse,
  GraduationCap,
  Landmark,
  Building2,
  Warehouse,
  Fuel,
  Plane,
  Hotel,
  Award,
  BadgePercent,
  Headset,
  Globe,
  Truck,
  Zap,
};

// Same icon set `components/sections/home/WhyChooseUs.tsx` uses for
// `whyChooseUs.items` — the default `SectorAdvantages` falls back to when a
// sector doesn't define its own `advantages`, so the two never drift
// visually.
export const DEFAULT_ADVANTAGE_ICONS: LucideIcon[] = [
  ShieldCheck,
  BadgePercent,
  Truck,
  Award,
  Headset,
  Globe,
];
