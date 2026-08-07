import {
  Building2,
  Droplets,
  Factory,
  Flame,
  FlaskConical,
  Forklift,
  Fuel,
  Globe,
  GraduationCap,
  HardHat,
  HeartPulse,
  Hotel,
  Landmark,
  Plane,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Shared fallback for sectors without a dedicated photo yet — same
// convention as `lib/products.ts`'s `FALLBACK_IMAGES`. Swapping a real photo
// in later only means setting `image` on the sector in `data/sectors.ts`.
const FALLBACK_IMAGE = "/images/hero/hero-premium.webp";

export function getSectorImage(image: string | null): string {
  return image ?? FALLBACK_IMAGE;
}

// Lucide icon lookup, keyed by the `icon` string stored on each sector in
// `data/sectors.ts` — keeps the data file JSX-free and CMS-friendly. Also
// used by `SectorCard`/`SectorGrid` when reused for Project Solutions
// (`data/solutions/*.ts`'s own `icon` field draws from this same map).
export const SECTOR_ICONS: Record<string, LucideIcon> = {
  Landmark,
  Wrench,
  Flame,
  Zap,
  Forklift,
  Truck,
  HeartPulse,
  FlaskConical,
  HardHat,
  Globe,
  GraduationCap,
  Plane,
  Hotel,
  Factory,
  Building2,
  Fuel,
  Droplets,
};
