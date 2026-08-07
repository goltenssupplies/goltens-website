import {
  BadgeCheck,
  Briefcase,
  Newspaper,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { KnowledgeType } from "@/data/knowledge/types";

// Icon lookup for each `KnowledgeType`'s badge/empty-state — kept out of
// `data/knowledge/*` so those files stay JSX-free, same convention
// `SECTOR_ICONS`/`SECTOR_CONTENT_ICONS` already use.
export const KNOWLEDGE_TYPE_ICONS: Record<KnowledgeType, LucideIcon> = {
  article: Newspaper,
  "technical-guide": Wrench,
  "buying-guide": ShoppingCart,
  "maintenance-guide": Wrench,
  "brand-guide": BadgeCheck,
  "product-comparison": Scale,
  "industry-standard": ShieldCheck,
  video: Video,
  "case-study": Briefcase,
};
