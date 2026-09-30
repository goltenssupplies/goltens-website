import type { Product } from "@/data/products/types";

/**
 * MOLLUBE Batch M3 (Engine Oils) — 10 MOLLUBE automotive/truck engine oil
 * products added to the existing `engine-oils` category (previously
 * taxonomy-only, 0 products). Every description, grade list, and approval
 * value below is taken directly from the two approved sources, per the
 * approved Data Model Review and Final Decision Check:
 *  - "Mollube Engine Oil & Grease .pdf", p.2-5
 *  - "MOLLUBE Catalog Engine oil and Greases for Truck 2026.pdf", p.2-4
 *    (duplicates the same Platinum/Dynamic/ATF/4T Super content as the
 *    shorter PDF — both sources agree on every value used here, so no
 *    cross-source conflict exists for this batch, unlike ROLSFER BLUE 3
 *    or HLP).
 *
 * Explicitly excluded from this batch, per approval: MOLLUBE ATF (taxonomy
 * decision — deferred rather than force-fit into `specialty-industrial-
 * lubricants`, which is named and populated as an industrial category,
 * not an automotive-fluid one).
 *
 * Each named line is represented as ONE Single Product — every approval
 * (API/ACEA/OEM) is stated once per line, covering all of that line's SAE
 * grades, never varying by individual grade in the source. Grades are
 * listed as a single "Available Grades" value, not split into separate
 * products or grade-grouped specifications.
 *
 * Source terminology preserved, not silently corrected: both source PDFs
 * consistently spell this line "PLATINIUM" (not "Platinum") throughout —
 * used ~4+ times, not a one-off typo — so "Platinium" is preserved in the
 * product names below rather than normalized.
 *
 * GOLTENS is supplying these products, not representing MOLLUBE as an
 * authorized distributor/agent/partner/manufacturer/OEM representative —
 * every product uses neutral "available for supply" / "request a quote"
 * language only. No approval or OEM relationship is stated beyond exactly
 * what the source prints; no base-oil chemistry is invented (e.g.
 * Platinium Super's "specially refined paraffinic base oil" is not
 * relabeled "mineral").
 */

const API_EN = "API Classification";
const API_AR = "تصنيف API";
const ACEA_EN = "ACEA Classification";
const ACEA_AR = "تصنيف ACEA";
const APPROVALS_EN = "OEM Approvals / Meets Requirements";
const APPROVALS_AR = "اعتمادات الجهات المصنّعة / المتطلبات المستوفاة";
const BASE_OIL_EN = "Base Oil";
const BASE_OIL_AR = "الزيت الأساسي";
const GRADES_EN = "Available Grades";
const GRADES_AR = "الدرجات المتوفرة";

export const mollubeBatchM3EngineOils: Product[] = [
  {
    id: "mollube-platinum-ultra",
    slug: "mollube-platinum-ultra",
    name_en: "MOLLUBE Platinium Ultra",
    name_ar: "MOLLUBE Platinium Ultra",
    shortDescription_en:
      "MOLLUBE Platinium Ultra — fully synthetic motor oil for gasoline engines, grades 0W20/5W20/0W30/5W30/5W40, API SP-SN.",
    shortDescription_ar:
      "MOLLUBE Platinium Ultra — زيت محرك اصطناعي بالكامل لمحركات البنزين، بدرجات 0W20/5W20/0W30/5W30/5W40، API SP-SN.",
    longDescription_en:
      "Platinium Ultra Series is MOLLUBE's fully synthetic motor oil, developed to meet the safe driving and long usage requirements of new and modern technology gasoline engines under extreme operating conditions. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "سلسلة Platinium Ultra هي زيت محرك اصطناعي بالكامل من MOLLUBE، طُوّر لتلبية متطلبات القيادة الآمنة والاستخدام الطويل لمحركات البنزين الحديثة ذات التقنية المتطورة تحت ظروف التشغيل القاسية. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "Gasoline engines, including new and modern-technology engines under extreme operating conditions",
    ],
    applications_ar: [
      "محركات البنزين، بما في ذلك المحركات الحديثة ذات التقنية المتطورة تحت ظروف التشغيل القاسية",
    ],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "0W20 / 5W20 / 0W30 / 5W30 / 5W40",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "SP-SN",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "A3/B3, B4",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Fully synthetic",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: APPROVALS_EN,
        label_ar: APPROVALS_AR,
        value: "MB 229.1; VW 505.00/500.00; RN 710",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["mollube-platinum-mega", "mollube-platinum-super"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-platinum-ultra-datasheet",
        title_en: "MOLLUBE Platinium Ultra Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Platinium Ultra",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Platinium Ultra Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك MOLLUBE Platinium Ultra في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Platinium Ultra fully synthetic gasoline engine oil (API SP-SN), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك MOLLUBE Platinium Ultra الاصطناعي بالكامل لمحركات البنزين (API SP-SN)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-platinum-mega",
    slug: "mollube-platinum-mega",
    name_en: "MOLLUBE Platinium Mega",
    name_ar: "MOLLUBE Platinium Mega",
    shortDescription_en:
      "MOLLUBE Platinium Mega — fully synthetic-based engine oil for gasoline engines, grades 10W40/15W40, API SN.",
    shortDescription_ar:
      "MOLLUBE Platinium Mega — زيت محرك اصطناعي بالأساس لمحركات البنزين، بدرجتي 10W40/15W40، API SN.",
    longDescription_en:
      "Platinium Mega Series is MOLLUBE's fully synthetic-based engine oil, formulated with a unique combination of high-quality base oils and advanced additive technology to meet the latest requirements of gasoline engines. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "سلسلة Platinium Mega هي زيت محرك اصطناعي بالأساس من MOLLUBE، مصنّع بمزيج فريد من الزيوت الأساسية عالية الجودة وتقنية الإضافات المتقدمة لتلبية أحدث متطلبات محركات البنزين. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "Gasoline engines, meeting the latest performance requirements",
    ],
    applications_ar: ["محركات البنزين، بما يلبي أحدث متطلبات الأداء"],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "10W40 / 15W40",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "SN",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "A3/B3, B4",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Fully synthetic-based, high-quality base oils",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: APPROVALS_EN,
        label_ar: APPROVALS_AR,
        value: "MB 229.1; VW 505.00/500.00",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["mollube-platinum-ultra", "mollube-platinum-super"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-platinum-mega-datasheet",
        title_en: "MOLLUBE Platinium Mega Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Platinium Mega",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Platinium Mega Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك MOLLUBE Platinium Mega في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Platinium Mega fully synthetic-based gasoline engine oil (API SN), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك MOLLUBE Platinium Mega الاصطناعي بالأساس لمحركات البنزين (API SN)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-platinum-super",
    slug: "mollube-platinum-super",
    name_en: "MOLLUBE Platinium Super",
    name_ar: "MOLLUBE Platinium Super",
    shortDescription_en:
      "MOLLUBE Platinium Super — engine oil from specially refined paraffinic base oil, grades 15W50/20W50, API SN.",
    shortDescription_ar:
      "MOLLUBE Platinium Super — زيت محرك من زيت أساسي بارافيني مكرر خصيصًا، بدرجتي 15W50/20W50، API SN.",
    longDescription_en:
      "Platinium Super Series is MOLLUBE's engine oil formulated from specially refined paraffinic base oil with modern friction modifier, detergent-dispersant, anti-corrosion, anti-wear, and other protective properties. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "سلسلة Platinium Super هي زيت محرك من MOLLUBE مصنّع من زيت أساسي بارافيني مكرر خصيصًا، مع معدّل احتكاك ومواد منظّفة ومشتتة حديثة، وخصائص مضادة للتآكل والتآكل الميكانيكي وخصائص حماية أخرى. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    // "Gasoline engines" reflects this product's placement under the
    // source's own "MOLLUBE PLATINUM SERIES" section heading (alongside
    // Ultra/Mega, both explicitly gasoline) — no diesel claim appears
    // anywhere for this product.
    applications_en: ["Gasoline engines"],
    applications_ar: ["محركات البنزين"],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "15W50 / 20W50",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "SN",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "A3/B3, B4",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Specially refined paraffinic base oil",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "Additive Properties",
        label_ar: "خصائص الإضافات",
        value:
          "Friction modifier, detergent-dispersant, anti-corrosion, anti-wear",
        group_en: "Composition",
        group_ar: "التركيب",
      },
    ],
    relatedProductSlugs: ["mollube-platinum-ultra", "mollube-platinum-mega"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-platinum-super-datasheet",
        title_en: "MOLLUBE Platinium Super Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Platinium Super",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Platinium Super Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك MOLLUBE Platinium Super في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Platinium Super gasoline engine oil (API SN), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك MOLLUBE Platinium Super لمحركات البنزين (API SN)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-dynamic-1",
    slug: "mollube-dynamic-1",
    name_en: "MOLLUBE Dynamic 1",
    name_ar: "MOLLUBE Dynamic 1",
    shortDescription_en:
      "MOLLUBE Dynamic 1 — fully synthetic heavy-duty diesel engine oil, grades 0W40/5W40/10W40, API CK-4/CI-4 PLUS.",
    shortDescription_ar:
      "MOLLUBE Dynamic 1 — زيت محرك ديزل اصطناعي بالكامل للاستخدام الشاق، بدرجات 0W40/5W40/10W40، API CK-4/CI-4 PLUS.",
    longDescription_en:
      "Dynamic 1 Series is MOLLUBE's high-performance, fully synthetic diesel engine oil, designed for heavy-duty vehicles and equipment, providing exceptional protection under various conditions including highway, urban, off-highway, and marine applications. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "سلسلة Dynamic 1 هي زيت محرك ديزل اصطناعي بالكامل وعالي الأداء من MOLLUBE، مصمم للمركبات والمعدات الشاقة، ويوفر حماية استثنائية تحت ظروف متنوعة بما في ذلك التطبيقات على الطرق السريعة والحضرية وخارج الطرق والبحرية. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "Heavy-duty vehicles and equipment",
      "Highway, urban, off-highway, and marine applications",
    ],
    applications_ar: [
      "المركبات والمعدات الشاقة",
      "التطبيقات على الطرق السريعة والحضرية وخارج الطرق والبحرية",
    ],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "0W40 / 5W40 / 10W40",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "CK-4/CI-4 PLUS",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "E9/E7-08, A3/B4-08",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Fully synthetic",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: APPROVALS_EN,
        label_ar: APPROVALS_AR,
        value:
          "MAN M3277; MB 228.31; MB 228.31/228.51; Renault RLD-3; Renault Trucks RLD-2; MAN 3275; MTU TYPE 2.1; VOLVO VDS3; VOLVO VDS-4.5; Mack EOS-4.5; Caterpillar ECF-3; Cummins CES 20078; DEUTZ DQC-III; Caterpillar ECF-2; MACK EO-M PLUS; Detroit Diesel DFS 93K222",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["mollube-dynamic-x7", "mollube-dynamic-x5"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-dynamic-1-datasheet",
        title_en: "MOLLUBE Dynamic 1 Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Dynamic 1",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Dynamic 1 Diesel Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك ديزل MOLLUBE Dynamic 1 في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Dynamic 1 fully synthetic heavy-duty diesel engine oil (API CK-4/CI-4 PLUS), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك الديزل MOLLUBE Dynamic 1 الاصطناعي بالكامل للاستخدام الشاق (API CK-4/CI-4 PLUS)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-dynamic-x7",
    slug: "mollube-dynamic-x7",
    name_en: "MOLLUBE Dynamic X7",
    name_ar: "MOLLUBE Dynamic X7",
    shortDescription_en:
      "MOLLUBE Dynamic X7 — fully synthetic diesel heavy-duty oil, grade 10W40, API CK-4/CI-4/SN, for low or high sulfur diesel fuel.",
    shortDescription_ar:
      "MOLLUBE Dynamic X7 — زيت ديزل اصطناعي بالكامل للاستخدام الشاق، درجة 10W40، API CK-4/CI-4/SN، لوقود الديزل منخفض أو مرتفع الكبريت.",
    longDescription_en:
      "Dynamic X7 is a fully synthetic diesel heavy-duty oil produced with synthetic technology, for use in vehicles using low or high sulfur content diesel fuel. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "Dynamic X7 هو زيت ديزل اصطناعي بالكامل للاستخدام الشاق، مُنتَج بتقنية اصطناعية، للاستخدام في المركبات التي تستخدم وقود ديزل منخفض أو مرتفع محتوى الكبريت. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: ["Vehicles using low or high sulfur content diesel fuel"],
    applications_ar: [
      "المركبات التي تستخدم وقود ديزل منخفض أو مرتفع محتوى الكبريت",
    ],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "10W40",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "CK-4/CI-4/SN",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "E7-08, A3/B4-08",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Fully synthetic",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: APPROVALS_EN,
        label_ar: APPROVALS_AR,
        value:
          "MB 228.31; MAN M3575; MTU TYPE 2.1; VOLVO VDS3; VOLVO VDS-4.5; DEUTZ DQC-III; Renault RLD-3; Cummins CES 20086; Caterpillar ECF-3; Detroit Diesel DFS 93K222",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["mollube-dynamic-1", "mollube-dynamic-x5"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-dynamic-x7-datasheet",
        title_en: "MOLLUBE Dynamic X7 Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Dynamic X7",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Dynamic X7 Diesel Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك ديزل MOLLUBE Dynamic X7 في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Dynamic X7 fully synthetic diesel heavy-duty oil (API CK-4/CI-4/SN), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت الديزل MOLLUBE Dynamic X7 الاصطناعي بالكامل للاستخدام الشاق (API CK-4/CI-4/SN)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-dynamic-x5",
    slug: "mollube-dynamic-x5",
    name_en: "MOLLUBE Dynamic X5",
    name_ar: "MOLLUBE Dynamic X5",
    shortDescription_en:
      "MOLLUBE Dynamic X5 — semi-synthetic multi-grade diesel engine oil, grades 10W40/15W40, API CI-4/SL.",
    shortDescription_ar:
      "MOLLUBE Dynamic X5 — زيت محرك ديزل شبه اصطناعي متعدد الدرجات، بدرجتي 10W40/15W40، API CI-4/SL.",
    longDescription_en:
      "Dynamic X5 Series is MOLLUBE's multi-grade engine oil, formulated with semi-synthetic base oils and modern additives to provide outstanding protection in diesel engines against wear, corrosion, and oxidation. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "سلسلة Dynamic X5 هي زيت محرك متعدد الدرجات من MOLLUBE، مصنّع من زيوت أساسية شبه اصطناعية وإضافات حديثة لتوفير حماية متميزة لمحركات الديزل ضد التآكل والصدأ والأكسدة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "Diesel engines — protection against wear, corrosion, and oxidation",
    ],
    applications_ar: ["محركات الديزل — الحماية من التآكل والصدأ والأكسدة"],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "10W40 / 15W40",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "CI-4/SL",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "E7-08, A3/B4-08",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Semi-synthetic",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: APPROVALS_EN,
        label_ar: APPROVALS_AR,
        value: "MB 228.3; MAN 3275; MTU TYPE 2; VOLVO VDS3; DEUTZ DQC-III",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["mollube-dynamic-1", "mollube-dynamic-x7"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-dynamic-x5-datasheet",
        title_en: "MOLLUBE Dynamic X5 Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Dynamic X5",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Dynamic X5 Diesel Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك ديزل MOLLUBE Dynamic X5 في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Dynamic X5 semi-synthetic diesel engine oil (API CI-4/SL), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك الديزل MOLLUBE Dynamic X5 شبه الاصطناعي (API CI-4/SL)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-dynamic-x4",
    slug: "mollube-dynamic-x4",
    name_en: "MOLLUBE Dynamic X4",
    name_ar: "MOLLUBE Dynamic X4",
    shortDescription_en:
      "MOLLUBE Dynamic X4 — semi-synthetic diesel engine oil, grade 20W50, API CI-4.",
    shortDescription_ar:
      "MOLLUBE Dynamic X4 — زيت محرك ديزل شبه اصطناعي، درجة 20W50، API CI-4.",
    longDescription_en:
      "Dynamic X4 is MOLLUBE's semi-synthetic engine oil, formulated with modern additives to provide outstanding protection in diesel engines against wear, corrosion, and oxidation. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "Dynamic X4 هو زيت محرك شبه اصطناعي من MOLLUBE، مصنّع بإضافات حديثة لتوفير حماية متميزة لمحركات الديزل ضد التآكل والصدأ والأكسدة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "Diesel engines — protection against wear, corrosion, and oxidation",
    ],
    applications_ar: ["محركات الديزل — الحماية من التآكل والصدأ والأكسدة"],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "20W50",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "CI-4",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "E7/E5/E3/B4/B3/A3",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Semi-synthetic",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: APPROVALS_EN,
        label_ar: APPROVALS_AR,
        value:
          "MB 228.3; MAN 3275; MTU TYPE 2; VOLVO VDS-3; RENAULT RVI/RLD-2; MACK EO-M PLUS",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["mollube-dynamic-plus", "mollube-dynamic-x3"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-dynamic-x4-datasheet",
        title_en: "MOLLUBE Dynamic X4 Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Dynamic X4",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Dynamic X4 Diesel Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك ديزل MOLLUBE Dynamic X4 في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Dynamic X4 semi-synthetic diesel engine oil (API CI-4), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك الديزل MOLLUBE Dynamic X4 شبه الاصطناعي (API CI-4)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-dynamic-plus",
    slug: "mollube-dynamic-plus",
    name_en: "MOLLUBE Dynamic Plus",
    name_ar: "MOLLUBE Dynamic Plus",
    shortDescription_en:
      "MOLLUBE Dynamic Plus — multi-grade diesel engine oil from premium mineral base oils, grade 20W50, API CH-4/CG-4.",
    shortDescription_ar:
      "MOLLUBE Dynamic Plus — زيت محرك ديزل متعدد الدرجات من زيوت أساسية معدنية ممتازة، درجة 20W50، API CH-4/CG-4.",
    longDescription_en:
      "Dynamic Plus is MOLLUBE's multi-grade engine oil, formulated with premium mineral base oils and modern additives to provide outstanding protection in diesel engines against wear, corrosion, and oxidation. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "Dynamic Plus هو زيت محرك متعدد الدرجات من MOLLUBE، مصنّع من زيوت أساسية معدنية ممتازة وإضافات حديثة لتوفير حماية متميزة لمحركات الديزل ضد التآكل والصدأ والأكسدة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "Diesel engines — protection against wear, corrosion, and oxidation",
    ],
    applications_ar: ["محركات الديزل — الحماية من التآكل والصدأ والأكسدة"],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "20W50",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "CH-4/CG-4",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "E5/E3/B4/B3/A3",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Premium mineral base oils",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: APPROVALS_EN,
        label_ar: APPROVALS_AR,
        value:
          "MB 228.3; MAN 3275; MTU TYPE 2; VOLVO VDS-3; RENAULT RVI/RLD-2; MACK EO-M PLUS",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: ["mollube-dynamic-x4", "mollube-dynamic-x3"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-dynamic-plus-datasheet",
        title_en: "MOLLUBE Dynamic Plus Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Dynamic Plus",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Dynamic Plus Diesel Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك ديزل MOLLUBE Dynamic Plus في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Dynamic Plus multi-grade diesel engine oil (API CH-4/CG-4), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك الديزل MOLLUBE Dynamic Plus متعدد الدرجات (API CH-4/CG-4)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-dynamic-x3",
    slug: "mollube-dynamic-x3",
    name_en: "MOLLUBE Dynamic X3",
    name_ar: "MOLLUBE Dynamic X3",
    shortDescription_en:
      "MOLLUBE Dynamic X3 — mono-grade diesel engine oil from premium mineral base oils, grade 50, API CF/CG/SF.",
    shortDescription_ar:
      "MOLLUBE Dynamic X3 — زيت محرك ديزل أحادي الدرجة من زيوت أساسية معدنية ممتازة، درجة 50، API CF/CG/SF.",
    longDescription_en:
      "Dynamic X3 is MOLLUBE's mono-grade engine oil, formulated with premium mineral base oils and modern additives to provide outstanding protection in diesel engines against wear, corrosion, and oxidation. Available for supply through GOLTENS, matched to your vehicle manufacturer's specification.",
    longDescription_ar:
      "Dynamic X3 هو زيت محرك أحادي الدرجة من MOLLUBE، مصنّع من زيوت أساسية معدنية ممتازة وإضافات حديثة لتوفير حماية متميزة لمحركات الديزل ضد التآكل والصدأ والأكسدة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات الجهة المصنّعة لمركبتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "Diesel engines — protection against wear, corrosion, and oxidation",
    ],
    applications_ar: ["محركات الديزل — الحماية من التآكل والصدأ والأكسدة"],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "50 (mono-grade)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "CF/CG/SF",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: ACEA_EN,
        label_ar: ACEA_AR,
        value: "E3/B3/A3",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Premium mineral base oils",
        group_en: "Composition",
        group_ar: "التركيب",
      },
    ],
    relatedProductSlugs: ["mollube-dynamic-plus", "mollube-dynamic-x4"],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-dynamic-x3-datasheet",
        title_en: "MOLLUBE Dynamic X3 Datasheet",
        title_ar: "نشرة بيانات MOLLUBE Dynamic X3",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE Dynamic X3 Diesel Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك ديزل MOLLUBE Dynamic X3 في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE Dynamic X3 mono-grade diesel engine oil (API CF/CG/SF), available for supply and matched to your vehicle specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك الديزل MOLLUBE Dynamic X3 أحادي الدرجة (API CF/CG/SF)، متوفر للتوريد ومطابق لمواصفات مركبتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-4t-super",
    slug: "mollube-4t-super",
    name_en: "MOLLUBE 4T Super",
    name_ar: "MOLLUBE 4T Super",
    shortDescription_en:
      "MOLLUBE 4T Super — 4T (four-stroke) multi-grade engine oil from premium mineral base oils, grade 20W50, API SL/CF.",
    shortDescription_ar:
      "MOLLUBE 4T Super — زيت محرك رباعي الأشواط (4T) متعدد الدرجات من زيوت أساسية معدنية ممتازة، درجة 20W50، API SL/CF.",
    longDescription_en:
      "MOLLUBE 4T Super is MOLLUBE's 4T (four-stroke) multi-grade engine oil, formulated with premium mineral base oils and modern additives to provide outstanding protection in diesel and gasoline engines against wear, corrosion, and oxidation. Available for supply through GOLTENS, matched to your equipment specification.",
    longDescription_ar:
      "MOLLUBE 4T Super هو زيت محرك رباعي الأشواط (4T) متعدد الدرجات من MOLLUBE، مصنّع من زيوت أساسية معدنية ممتازة وإضافات حديثة لتوفير حماية متميزة لمحركات الديزل والبنزين ضد التآكل والصدأ والأكسدة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمواصفات معداتكم.",
    sectorId: "lubricants-oils",
    categoryId: "engine-oils",
    applications_en: [
      "4T (four-stroke) diesel and gasoline engines — protection against wear, corrosion, and oxidation",
    ],
    applications_ar: [
      "محركات الديزل والبنزين رباعية الأشواط (4T) — الحماية من التآكل والصدأ والأكسدة",
    ],
    specifications: [
      {
        label_en: GRADES_EN,
        label_ar: GRADES_AR,
        value: "20W50",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: API_EN,
        label_ar: API_AR,
        value: "SL/CF",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: BASE_OIL_EN,
        label_ar: BASE_OIL_AR,
        value: "Premium mineral base oils",
        group_en: "Composition",
        group_ar: "التركيب",
      },
    ],
    relatedProductSlugs: [],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-4t-super-datasheet",
        title_en: "MOLLUBE 4T Super Datasheet",
        title_ar: "نشرة بيانات MOLLUBE 4T Super",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOLLUBE 4T Super Engine Oil Supplier Egypt",
      title_ar: "مورد زيت محرك MOLLUBE 4T Super في مصر",
      description_en:
        "GOLTENS supplies MOLLUBE 4T Super four-stroke multi-grade engine oil (API SL/CF), available for supply and matched to your equipment specification. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت محرك MOLLUBE 4T Super رباعي الأشواط متعدد الدرجات (API SL/CF)، متوفر للتوريد ومطابق لمواصفات معداتكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
