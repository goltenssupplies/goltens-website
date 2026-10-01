import type { Product } from "@/data/products/types";

/**
 * MOLLUBE Batch M2 (Metalworking Lubricants) — 4 MOLLUBE metalworking
 * products added to the existing `metalworking-fluids-category` (already
 * populated by the generic "Metalworking Fluids" product in
 * `lubricants-oils.ts`, left untouched). Every description, feature,
 * application, and technical value below is taken directly from the single
 * approved source for this batch, re-verified against the actual file
 * immediately before implementation:
 *  - "MOLLUBE Metalworking lubricants 2025.pdf", p.3-5 — MOL-PROCUT MW,
 *    MOL-PROCUT SYM, MOL-PROCUT SY 500, MOL-MET Series
 * No discrepancy was found between this re-verification and the previously
 * supplied extraction.
 *
 * Source terminology notes (preserved, not silently corrected):
 *  - MOL-PROCUT SY 500's description reads verbatim "does not contain
 *    water-soluble coolant and mineral oil" — an unusual claim for a
 *    fully-synthetic grinding fluid, preserved exactly as printed rather
 *    than reworded; only the sentence fragment ("A specially formulated
 *    for...") is bridged to name the product as its subject.
 *  - MOL-PROCUT SY 500's application list includes the source's own
 *    fragment "Sawing Cutting, Grinding, Steel pipe" verbatim, not
 *    expanded or corrected into full sentences.
 *  - MOL-MET Series' application list preserves "Planning" exactly as
 *    printed (likely intended as "Planing", not corrected here).
 *  - MOL-MET Series' technical table has two value columns with NO grade
 *    name printed in the source for either one — only their Kinematic
 *    Viscosity @ 40°C values (22 and 32) distinguish them. No grade name
 *    ("MOL-MET 22"/"MOL-MET 32" or similar) is invented anywhere below;
 *    the product is represented as a single "MOL-MET Series" with two
 *    described viscosity values, per explicit instruction.
 *
 * GOLTENS is supplying these products, not representing MOLLUBE as an
 * authorized distributor/agent/partner — every product uses neutral
 * "available for supply" / "request a quote" language only. Fields with
 * no source value (packaging, approvals/standards beyond the cited test
 * methods, manufacturer claims) are omitted rather than invented.
 */

export const mollubeBatchM2Metalworking: Product[] = [
  {
    id: "mollube-mol-procut-mw",
    slug: "mollube-mol-procut-mw",
    name_en: "MOLLUBE MOL-PROCUT MW",
    name_ar: "MOLLUBE MOL-PROCUT MW",
    shortDescription_en:
      "MOLLUBE MOL-PROCUT MW — high-performance, water-soluble mineral emulsion metalworking fluid for ferrous and non-ferrous machining.",
    shortDescription_ar:
      "MOLLUBE MOL-PROCUT MW — سائل تشغيل معدني مستحلب معدني عالي الأداء وقابل للذوبان في الماء، للتشغيل على المعادن الحديدية وغير الحديدية.",
    longDescription_en:
      "MOL-PROCUT MW is MOLLUBE's high-performance, water-soluble metalworking fluid with advanced additives for excellent lubricity, corrosion protection, tool life, and surface finish, suitable for ferrous and non-ferrous machining in demanding industrial applications. Available for supply through GOLTENS, matched to your machining process.",
    longDescription_ar:
      "MOL-PROCUT MW هو سائل تشغيل معدني عالي الأداء وقابل للذوبان في الماء من MOLLUBE، يحتوي على إضافات متقدمة لتحسين خصائص التزييت والحماية من التآكل وعمر الأداة وجودة السطح، ومناسب للتشغيل على المعادن الحديدية وغير الحديدية في التطبيقات الصناعية الصعبة. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    publicName_en: "Water-Soluble Mineral Emulsion Metalworking Fluid",
    publicName_ar: "سائل تشغيل معدني مستحلب معدني قابل للذوبان في الماء",
    publicShortDescription_en:
      "High-performance, water-soluble mineral emulsion metalworking fluid for ferrous and non-ferrous machining.",
    publicShortDescription_ar:
      "سائل تشغيل معدني مستحلب معدني عالي الأداء وقابل للذوبان في الماء، للتشغيل على المعادن الحديدية وغير الحديدية.",
    publicLongDescription_en:
      "A high-performance, water-soluble metalworking fluid with advanced additives for excellent lubricity, corrosion protection, tool life, and surface finish, suitable for ferrous and non-ferrous machining in demanding industrial applications. Available for supply through GOLTENS, matched to your machining process.",
    publicLongDescription_ar:
      "سائل تشغيل معدني عالي الأداء وقابل للذوبان في الماء، يحتوي على إضافات متقدمة لتحسين خصائص التزييت والحماية من التآكل وعمر الأداة وجودة السطح، ومناسب للتشغيل على المعادن الحديدية وغير الحديدية في التطبيقات الصناعية الصعبة. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-PROCUT MW",
      sourceDocument: "MOLLUBE Metalworking lubricants 2025.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "metalworking-fluids-category",
    features_en: [
      "Good emulsion stability and long coolant life",
      "Suitable for a wide range of materials and operations",
      "Very high ratio of tramp oil rejection",
      "Low foaming in soft and hard water",
    ],
    features_ar: [
      "ثبات ممتاز للمستحلب وعمر تبريد طويل",
      "مناسب لمجموعة واسعة من المواد والعمليات",
      "نسبة عالية جدًا لرفض الزيت الطارئ (tramp oil)",
      "رغوة منخفضة في المياه اللينة والعسرة",
    ],
    applications_en: [
      "Most metal cutting operations",
      "Ferrous and non-ferrous materials",
      "Multipurpose coolant applications",
    ],
    applications_ar: [
      "معظم عمليات القطع المعدني",
      "المواد الحديدية وغير الحديدية",
      "تطبيقات التبريد متعددة الأغراض",
    ],
    specifications: [
      {
        label_en: "Forging",
        label_ar: "التطريق",
        value: "3-5%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "Grinding",
        label_ar: "الطحن",
        value: "2-3%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "Cutting",
        label_ar: "القطع",
        value: "3-5%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "Broaching",
        label_ar: "البروشة",
        value: "10-12%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "Rolling",
        label_ar: "الدرفلة",
        value: "5%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Amber fluid (neat); milky (5% emulsion)",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Density @ 15°C (ASTM D 1298)",
        label_ar: "الكثافة عند 15°م (ASTM D 1298)",
        value: "0.89 g/cm³",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Mineral Oil Content",
        label_ar: "محتوى الزيت المعدني",
        value: "80%",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "pH @ 5% (DIN 51369)",
        label_ar: "الرقم الهيدروجيني عند 5% (DIN 51369)",
        value: "8.5-8.9",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Refractometer Coefficient",
        label_ar: "معامل الريفراكتومتر",
        value: "1.00",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Corrosion Protection, 15°dH, 5% (DIN 51360/2)",
        label_ar: "الحماية من التآكل، 15°dH، 5% (DIN 51360/2)",
        value: "0-0",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "metalworking-fluids",
      "mollube-mol-procut-sym",
      "mollube-mol-procut-sy-500",
      "mollube-mol-met",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-procut-mw-datasheet",
        title_en: "Water-Soluble Mineral Emulsion Metalworking Fluid Datasheet",
        title_ar:
          "نشرة بيانات سائل تشغيل معدني مستحلب معدني قابل للذوبان في الماء",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Water-Soluble Mineral Emulsion Metalworking Fluid Supplier Egypt",
      title_ar:
        "مورد سائل تشغيل معدني مستحلب معدني قابل للذوبان في الماء في مصر",
      description_en:
        "GOLTENS supplies water-soluble mineral emulsion metalworking fluid, available for supply and matched to your machining process. Request a quote.",
      description_ar:
        "توفر GOLTENS سائل تشغيل معدني مستحلب معدني قابل للذوبان في الماء، متوفر للتوريد ومطابق لعملية التشغيل لديكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-procut-sym",
    slug: "mollube-mol-procut-sym",
    name_en: "MOLLUBE MOL-PROCUT SYM",
    name_ar: "MOLLUBE MOL-PROCUT SYM",
    shortDescription_en:
      "MOLLUBE MOL-PROCUT SYM — water-miscible semi-synthetic metalworking oil for CNC machining of cast iron, steel, aluminum, and non-ferrous metals.",
    shortDescription_ar:
      "MOLLUBE MOL-PROCUT SYM — زيت تشغيل معدني شبه اصطناعي قابل للامتزاج بالماء، لتشغيل CNC للحديد الزهر والصلب والألمنيوم والمعادن غير الحديدية.",
    longDescription_en:
      "MOL-PROCUT SYM is MOLLUBE's high-performance semi-synthetic oil, water-miscible and anti-corrosive, with excellent biological stability and resistance to bacterial and fungal attacks. It offers outstanding lubricity, maintains a stable emulsion even under tough working conditions, and has strong detergency for cleaning machine tools, forming an odorless solution when mixed with water. Available for supply through GOLTENS, matched to your machining process.",
    longDescription_ar:
      "MOL-PROCUT SYM هو زيت شبه اصطناعي عالي الأداء من MOLLUBE، قابل للامتزاج بالماء ومضاد للتآكل، ويتميز بثبات بيولوجي ممتاز ومقاومة للبكتيريا والفطريات. يوفر تزييتًا متميزًا، ويحافظ على استقرار المستحلب حتى في ظروف العمل الصعبة، ويتمتع بقدرة تنظيف قوية لماكينات التشغيل، ويشكّل محلولًا عديم الرائحة عند خلطه بالماء. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    publicName_en: "Semi-Synthetic Water-Miscible Metalworking Fluid",
    publicName_ar: "سائل تشغيل معدني شبه اصطناعي قابل للامتزاج بالماء",
    publicShortDescription_en:
      "Water-miscible semi-synthetic metalworking oil for CNC machining of cast iron, steel, aluminum, and non-ferrous metals.",
    publicShortDescription_ar:
      "زيت تشغيل معدني شبه اصطناعي قابل للامتزاج بالماء، لتشغيل CNC للحديد الزهر والصلب والألمنيوم والمعادن غير الحديدية.",
    publicLongDescription_en:
      "A high-performance semi-synthetic oil, water-miscible and anti-corrosive, with excellent biological stability and resistance to bacterial and fungal attacks. It offers outstanding lubricity, maintains a stable emulsion even under tough working conditions, and has strong detergency for cleaning machine tools, forming an odorless solution when mixed with water. Available for supply through GOLTENS, matched to your machining process.",
    publicLongDescription_ar:
      "زيت شبه اصطناعي عالي الأداء، قابل للامتزاج بالماء ومضاد للتآكل، ويتميز بثبات بيولوجي ممتاز ومقاومة للبكتيريا والفطريات. يوفر تزييتًا متميزًا، ويحافظ على استقرار المستحلب حتى في ظروف العمل الصعبة، ويتمتع بقدرة تنظيف قوية لماكينات التشغيل، ويشكّل محلولًا عديم الرائحة عند خلطه بالماء. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-PROCUT SYM",
      sourceDocument: "MOLLUBE Metalworking lubricants 2025.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "metalworking-fluids-category",
    features_en: [
      "High detergency formula",
      "Outstanding protection against rust",
      "Good cooling properties",
      "Prevents bacterial and fungal formation",
      "Suitable for use in hard water",
      "Provides a very stable solution",
    ],
    features_ar: [
      "تركيبة عالية التنظيف",
      "حماية متميزة ضد الصدأ",
      "خصائص تبريد جيدة",
      "يمنع تكوّن البكتيريا والفطريات",
      "مناسب للاستخدام في المياه العسرة",
      "يوفر محلولًا ثابتًا جدًا",
    ],
    applications_en: [
      "Metalworking processes",
      "CNC machining of cast iron, steel, aluminum, and other non-ferrous metals",
    ],
    applications_ar: [
      "عمليات التشغيل المعدني",
      "تشغيل CNC للحديد الزهر والصلب والألمنيوم والمعادن غير الحديدية الأخرى",
    ],
    specifications: [
      {
        label_en: "Grinding",
        label_ar: "الطحن",
        value: "3-5%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "General-Purpose Machining",
        label_ar: "التشغيل العام",
        value: "4-6%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "Cutting of Difficult Metals",
        label_ar: "قطع المعادن الصعبة",
        value: "6-8%",
        group_en: "Concentration by Process",
        group_ar: "التركيز حسب عملية التشغيل",
      },
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Light brown, clear",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Density @ 20°C (ASTM D 1298)",
        label_ar: "الكثافة عند 20°م (ASTM D 1298)",
        value: "1.02 g/cm³",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Mineral Oil Content",
        label_ar: "محتوى الزيت المعدني",
        value: "20%",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "pH @ 5% (DIN 51369)",
        label_ar: "الرقم الهيدروجيني عند 5% (DIN 51369)",
        value: "9.2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Refractometer Coefficient @ 20°C",
        label_ar: "معامل الريفراكتومتر عند 20°م",
        value: "1.8",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Foaming Test (500 ppm water @ 5% emulsion)",
        label_ar: "اختبار الرغوة (500 جزء بالمليون ماء عند استحلاب 5%)",
        value: "No",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "metalworking-fluids",
      "mollube-mol-procut-mw",
      "mollube-mol-procut-sy-500",
      "mollube-mol-met",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-procut-sym-datasheet",
        title_en: "Semi-Synthetic Water-Miscible Metalworking Fluid Datasheet",
        title_ar:
          "نشرة بيانات سائل تشغيل معدني شبه اصطناعي قابل للامتزاج بالماء",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Semi-Synthetic Water-Miscible Metalworking Fluid Supplier Egypt",
      title_ar: "مورد سائل تشغيل معدني شبه اصطناعي قابل للامتزاج بالماء في مصر",
      description_en:
        "GOLTENS supplies semi-synthetic water-miscible metalworking fluid, available for supply and matched to your machining process. Request a quote.",
      description_ar:
        "توفر GOLTENS سائل تشغيل معدني شبه اصطناعي قابل للامتزاج بالماء، متوفر للتوريد ومطابق لعملية التشغيل لديكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-procut-sy-500",
    slug: "mollube-mol-procut-sy-500",
    name_en: "MOLLUBE MOL-PROCUT SY 500",
    name_ar: "MOLLUBE MOL-PROCUT SY 500",
    shortDescription_en:
      "MOLLUBE MOL-PROCUT SY 500 — fully synthetic metalworking fluid for medium and hard-water grinding operations.",
    shortDescription_ar:
      "MOLLUBE MOL-PROCUT SY 500 — سائل تشغيل معدني اصطناعي بالكامل لعمليات الطحن في المياه متوسطة وعالية العسر.",
    longDescription_en:
      "MOL-PROCUT SY 500 is specially formulated for use in medium and hard-water grinding operations. It is fully synthetic and does not contain water-soluble coolant and mineral oil. Available for supply through GOLTENS, matched to your machining process.",
    longDescription_ar:
      "MOL-PROCUT SY 500 مُصمم خصيصًا للاستخدام في عمليات الطحن بالمياه متوسطة وعالية العسر. وهو منتج اصطناعي بالكامل ولا يحتوي على سائل تبريد قابل للذوبان في الماء أو زيت معدني. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    publicName_en: "Synthetic Metalworking Fluid — Grinding Applications",
    publicName_ar: "سائل تشغيل معدني اصطناعي — لعمليات الطحن",
    publicShortDescription_en:
      "Fully synthetic metalworking fluid for medium and hard-water grinding operations.",
    publicShortDescription_ar:
      "سائل تشغيل معدني اصطناعي بالكامل لعمليات الطحن في المياه متوسطة وعالية العسر.",
    publicLongDescription_en:
      "Specially formulated for use in medium and hard-water grinding operations. Fully synthetic and does not contain water-soluble coolant and mineral oil. Available for supply through GOLTENS, matched to your machining process.",
    publicLongDescription_ar:
      "مُصمم خصيصًا للاستخدام في عمليات الطحن بالمياه متوسطة وعالية العسر. وهو منتج اصطناعي بالكامل ولا يحتوي على سائل تبريد قابل للذوبان في الماء أو زيت معدني. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-PROCUT SY 500",
      sourceDocument: "MOLLUBE Metalworking lubricants 2025.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "metalworking-fluids-category",
    features_en: [
      "Exceptionally good wetting properties",
      "High grinding performance",
      "Clean and glossy surface finish",
      "Long-term pH stability",
      "Excellent corrosion protection",
    ],
    features_ar: [
      "خصائص ترطيب ممتازة",
      "أداء طحن عالٍ",
      "جودة سطح نظيفة ولامعة",
      "ثبات طويل الأمد للرقم الهيدروجيني",
      "حماية ممتازة من التآكل",
    ],
    applications_en: [
      "Metalworking processes",
      "Grinding operations on steel and cast iron",
      "Sawing Cutting, Grinding, Steel pipe",
    ],
    applications_ar: [
      "عمليات التشغيل المعدني",
      "عمليات الطحن على الصلب والحديد الزهر",
      "النشر والقطع والطحن وأنابيب الصلب",
    ],
    specifications: [
      {
        label_en: "Dilution",
        label_ar: "التخفيف",
        value: "3-5% with water",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Bright and clear",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Density @ 15°C (ASTM D 4052)",
        label_ar: "الكثافة عند 15°م (ASTM D 4052)",
        value: "1.1 g/cm³",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Mineral Oil Content",
        label_ar: "محتوى الزيت المعدني",
        value: "Zero",
        group_en: "Composition",
        group_ar: "التركيب",
      },
      {
        label_en: "pH @ 5% (DIN 51369)",
        label_ar: "الرقم الهيدروجيني عند 5% (DIN 51369)",
        value: "9.2",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Refractometer Coefficient @ 20°C",
        label_ar: "معامل الريفراكتومتر عند 20°م",
        value: "1.4",
        group_en: "Performance",
        group_ar: "الأداء",
      },
      {
        label_en: "Corrosion (IP 287)",
        label_ar: "التآكل (IP 287)",
        value: "PASS",
        group_en: "Performance",
        group_ar: "الأداء",
      },
    ],
    relatedProductSlugs: [
      "metalworking-fluids",
      "mollube-mol-procut-mw",
      "mollube-mol-procut-sym",
      "mollube-mol-met",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-procut-sy-500-datasheet",
        title_en:
          "Synthetic Metalworking Fluid — Grinding Applications Datasheet",
        title_ar: "نشرة بيانات سائل تشغيل معدني اصطناعي — لعمليات الطحن",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Synthetic Metalworking Fluid — Grinding Applications Supplier Egypt",
      title_ar: "مورد سائل تشغيل معدني اصطناعي — لعمليات الطحن في مصر",
      description_en:
        "GOLTENS supplies synthetic metalworking fluid for grinding applications, available for supply and matched to your machining process. Request a quote.",
      description_ar:
        "توفر GOLTENS سائل تشغيل معدني اصطناعي لعمليات الطحن، متوفر للتوريد ومطابق لعملية التشغيل لديكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-met",
    slug: "mollube-mol-met",
    name_en: "MOLLUBE MOL-MET Series",
    name_ar: "MOLLUBE MOL-MET Series",
    shortDescription_en:
      "MOLLUBE MOL-MET Series — chlorine-free, extra-high-performance neat cutting oil for severe machining of difficult-to-machine steels.",
    shortDescription_ar:
      "سلسلة MOLLUBE MOL-MET — زيت قطع صافٍ خالٍ من الكلور وعالي الأداء، لعمليات التشغيل الصعبة على الفولاذ صعب التشغيل.",
    longDescription_en:
      "MOL-MET Series is MOLLUBE's extra-high-performance neat cutting oil, chlorine-free and intended for severe cutting operations, especially on difficult-to-machine steels. It delivers superior surface finish, extended tool life, and control of built-up edge; its light, transparent color provides a clear view of the tool and work piece, and it is formulated to prevent the formation of oil mist in the vicinity of the tools. Two viscosity values are available: 22 cSt and 32 cSt at 40°C. Available for supply through GOLTENS, matched to your machining process.",
    longDescription_ar:
      "سلسلة MOL-MET هي زيت قطع صافٍ عالي الأداء من MOLLUBE، خالٍ من الكلور ومخصص لعمليات القطع الصعبة، خاصة على الفولاذ صعب التشغيل. يوفر جودة سطح متميزة وعمر أداة أطول وتحكمًا في تكوّن الحافة المتراكمة (built-up edge)؛ ويوفر لونه الفاتح الشفاف رؤية واضحة للأداة وقطعة العمل، وهو مصمم لمنع تكوّن ضباب الزيت في محيط الأدوات. تتوفر قيمتا لزوجة: 22 سنتيستوك و32 سنتيستوك عند 40°م. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    publicName_en: "Chlorine-Free Neat Cutting Oil — Extra-High Performance",
    publicName_ar: "زيت قطع صافٍ خالٍ من الكلور — أداء فائق",
    publicShortDescription_en:
      "Chlorine-free, extra-high-performance neat cutting oil for severe machining of difficult-to-machine steels.",
    publicShortDescription_ar:
      "زيت قطع صافٍ خالٍ من الكلور وعالي الأداء، لعمليات التشغيل الصعبة على الفولاذ صعب التشغيل.",
    publicLongDescription_en:
      "An extra-high-performance neat cutting oil, chlorine-free and intended for severe cutting operations, especially on difficult-to-machine steels. It delivers superior surface finish, extended tool life, and control of built-up edge; its light, transparent color provides a clear view of the tool and work piece, and it is formulated to prevent the formation of oil mist in the vicinity of the tools. Two viscosity values are available: 22 cSt and 32 cSt at 40°C. Available for supply through GOLTENS, matched to your machining process.",
    publicLongDescription_ar:
      "زيت قطع صافٍ عالي الأداء، خالٍ من الكلور ومخصص لعمليات القطع الصعبة، خاصة على الفولاذ صعب التشغيل. يوفر جودة سطح متميزة وعمر أداة أطول وتحكمًا في تكوّن الحافة المتراكمة (built-up edge)؛ ويوفر لونه الفاتح الشفاف رؤية واضحة للأداة وقطعة العمل، وهو مصمم لمنع تكوّن ضباب الزيت في محيط الأدوات. تتوفر قيمتا لزوجة: 22 سنتيستوك و32 سنتيستوك عند 40°م. متوفر للتوريد من خلال GOLTENS، مطابقًا لعملية التشغيل لديكم.",
    sourcing: {
      manufacturer: "MOLLUBE",
      originalProductName_en: "MOLLUBE MOL-MET Series",
      sourceDocument: "MOLLUBE Metalworking lubricants 2025.pdf",
    },
    sectorId: "lubricants-oils",
    categoryId: "metalworking-fluids-category",
    features_en: [
      "Longer tool life and less downtime for tool change",
      "Improved surface finish, closer tolerances, and reduced built-up edge",
      "Higher feed rates possible for reduced operating costs",
      "Broad multi-purpose capability for severe machining operations on difficult steels",
      "Light transparent color provides a clear view of the tool and work piece",
      "Anti-mist formulation improves workplace safety",
    ],
    features_ar: [
      "عمر أداة أطول وتوقف أقل عند تغيير الأداة",
      "جودة سطح محسّنة وتفاوتات أدق وتقليل تكوّن الحافة المتراكمة",
      "معدلات تغذية أعلى لخفض تكاليف التشغيل",
      "قدرة متعددة الأغراض لعمليات التشغيل الصعبة على الفولاذ صعب التشغيل",
      "لون فاتح شفاف يوفر رؤية واضحة للأداة وقطعة العمل",
      "تركيبة مضادة للضباب تحسّن سلامة مكان العمل",
    ],
    applications_en: [
      "Tapping",
      "Threading",
      "Milling",
      "Gear shaving",
      "Shaping",
      "Broaching",
      "Planning",
      "Parting-off",
      "Automatic lathe operations",
      "Drilling and deep-hole drilling (less than 20 mm diameter)",
    ],
    applications_ar: [
      "القلوظة (Tapping)",
      "التسنين (Threading)",
      "التفريز (Milling)",
      "حلاقة التروس (Gear shaving)",
      "التشكيل (Shaping)",
      "البروشة (Broaching)",
      "Planning (كما وردت في المصدر)",
      "القطع الجانبي (Parting-off)",
      "عمليات المخرطة الأوتوماتيكية",
      "الحفر والحفر العميق (أقل من 20 مم قطرًا)",
    ],
    specifications: [
      {
        label_en: "Kinematic Viscosity @ 40°C",
        label_ar: "اللزوجة الحركية عند 40°م",
        value: "22 cSt",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Kinematic Viscosity @ 100°C",
        label_ar: "اللزوجة الحركية عند 100°م",
        value: "3 cSt",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Flash Point (COC, ASTM D 92)",
        label_ar: "نقطة الوميض (COC، ASTM D 92)",
        value: "160°C",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Specific Gravity @ 15°C (ASTM D 1298)",
        label_ar: "الكثافة النوعية عند 15°م (ASTM D 1298)",
        value: "0.87",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Sulfur, Active",
        label_ar: "الكبريت الفعّال",
        value: "1.6",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Anti-Mist Package",
        label_ar: "حزمة مضادة للضباب",
        value: "Present",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Friction Modifier",
        label_ar: "معدّل الاحتكاك",
        value: "Present",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Chlorine",
        label_ar: "الكلور",
        value: "Nil",
        group_en: "Available Viscosity: 22 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 22 سنتيستوك عند 40°م",
      },
      {
        label_en: "Kinematic Viscosity @ 40°C",
        label_ar: "اللزوجة الحركية عند 40°م",
        value: "32 cSt",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
      {
        label_en: "Kinematic Viscosity @ 100°C",
        label_ar: "اللزوجة الحركية عند 100°م",
        value: "5 cSt",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
      {
        label_en: "Flash Point (COC, ASTM D 92)",
        label_ar: "نقطة الوميض (COC، ASTM D 92)",
        value: "200°C",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
      {
        label_en: "Specific Gravity @ 15°C (ASTM D 1298)",
        label_ar: "الكثافة النوعية عند 15°م (ASTM D 1298)",
        value: "0.9",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
      {
        label_en: "Sulfur, Active",
        label_ar: "الكبريت الفعّال",
        value: "1.6",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
      {
        label_en: "Anti-Mist Package",
        label_ar: "حزمة مضادة للضباب",
        value: "Present",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
      {
        label_en: "Friction Modifier",
        label_ar: "معدّل الاحتكاك",
        value: "Present",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
      {
        label_en: "Chlorine",
        label_ar: "الكلور",
        value: "Nil",
        group_en: "Available Viscosity: 32 cSt @ 40°C",
        group_ar: "اللزوجة المتوفرة: 32 سنتيستوك عند 40°م",
      },
    ],
    relatedProductSlugs: [
      "metalworking-fluids",
      "mollube-mol-procut-mw",
      "mollube-mol-procut-sym",
      "mollube-mol-procut-sy-500",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-met-datasheet",
        title_en:
          "Chlorine-Free Neat Cutting Oil — Extra-High Performance Datasheet",
        title_ar: "نشرة بيانات زيت قطع صافٍ خالٍ من الكلور — أداء فائق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "Chlorine-Free Neat Cutting Oil — Extra-High Performance Supplier Egypt",
      title_ar: "مورد زيت قطع صافٍ خالٍ من الكلور — أداء فائق في مصر",
      description_en:
        "GOLTENS supplies chlorine-free, extra-high-performance neat cutting oil, available for supply and matched to your machining process. Request a quote.",
      description_ar:
        "توفر GOLTENS زيت قطع صافٍ خالٍ من الكلور وعالي الأداء، متوفر للتوريد ومطابق لعملية التشغيل لديكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
