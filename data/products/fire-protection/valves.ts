import type { Product } from "@/data/products/types";

/** Fire Protection → Valves category. */
export const fireProtectionValves: Product[] = [
  {
    id: "butterfly-valves",
    slug: "butterfly-valves",
    name_en: "Butterfly Valves",
    name_ar: "الصمامات الفراشية",
    shortDescription_en:
      "Indicating and non-indicating butterfly valves for fire protection piping.",
    shortDescription_ar:
      "صمامات فراشية بمؤشر وبدون مؤشر لخطوط أنابيب مكافحة الحريق.",
    longDescription_en:
      "Butterfly valves provide compact, quarter-turn isolation across fire protection piping. We source indicating types (with a visible open/closed position, often tamper-switch monitored) and non-indicating types, sized to your line diameter.",
    longDescription_ar:
      "توفر الصمامات الفراشية عزلًا مدمجًا بربع دورة عبر خطوط أنابيب مكافحة الحريق. نقوم بتوريد الأنواع ذات المؤشر (بمؤشر مرئي لحالة الفتح/الإغلاق، وغالبًا مزودة بمفتاح مراقبة العبث) والأنواع بدون مؤشر، وفق قطر الخط لديكم.",
    sectorId: "fire-protection",
    categoryId: "valves",
    relatedProductSlugs: [
      "gate-valves",
      "check-valves",
      "alarm-valves",
      "os-y-valves",
    ],
    relatedBrandSlugs: ["victaulic", "naffco"],
    catalogues: [
      {
        id: "butterfly-valves-datasheet",
        title_en: "Butterfly Valves Datasheet",
        title_ar: "نشرة بيانات الصمامات الفراشية",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/butterfly-valves.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "gate-valves",
    slug: "gate-valves",
    name_en: "Gate Valves",
    name_ar: "صمامات البوابة",
    shortDescription_en: "Gate valves for fire protection isolation points.",
    shortDescription_ar: "صمامات بوابة لنقاط العزل في أنظمة مكافحة الحريق.",
    longDescription_en:
      "Gate valves provide full-bore isolation at key points across a fire protection network. We source them to your required diameter and pressure rating, matched to your system's piping specification.",
    longDescription_ar:
      "توفر صمامات البوابة عزلًا كامل الفتحة عند النقاط الرئيسية في شبكة مكافحة الحريق. نقوم بتوريدها وفق القطر وتصنيف الضغط المطلوبين، مطابقة لمواصفات أنابيب نظامكم.",
    sectorId: "fire-protection",
    categoryId: "valves",
    relatedProductSlugs: ["butterfly-valves", "check-valves", "os-y-valves"],
    relatedBrandSlugs: ["victaulic"],
    catalogues: [
      {
        id: "gate-valves-datasheet",
        title_en: "Gate Valves Datasheet",
        title_ar: "نشرة بيانات صمامات البوابة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/gate-valves.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "check-valves",
    slug: "check-valves",
    name_en: "Check Valves",
    name_ar: "صمامات عدم الرجوع",
    shortDescription_en:
      "Check valves preventing backflow across fire protection systems.",
    shortDescription_ar:
      "صمامات عدم رجوع لمنع التدفق العكسي في أنظمة مكافحة الحريق.",
    longDescription_en:
      "Check valves allow flow in one direction only, protecting pumps and piping from backflow across a fire protection system. We source them to your required diameter and connection type.",
    longDescription_ar:
      "تسمح صمامات عدم الرجوع بالتدفق في اتجاه واحد فقط، مما يحمي المضخات والأنابيب من التدفق العكسي في نظام مكافحة الحريق. نقوم بتوريدها وفق القطر ونوع التوصيل المطلوبين.",
    sectorId: "fire-protection",
    categoryId: "valves",
    relatedProductSlugs: ["gate-valves", "butterfly-valves", "alarm-valves"],
    relatedBrandSlugs: ["victaulic"],
    catalogues: [
      {
        id: "check-valves-datasheet",
        title_en: "Check Valves Datasheet",
        title_ar: "نشرة بيانات صمامات عدم الرجوع",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "alarm-valves",
    slug: "alarm-valves",
    name_en: "Alarm Valves",
    name_ar: "صمامات الإنذار",
    shortDescription_en:
      "Wet and dry alarm check valves that trigger a local alarm on sprinkler system flow.",
    shortDescription_ar:
      "صمامات إنذار رطبة وجافة تُصدر إنذارًا محليًا عند تدفق نظام الرش التلقائي.",
    longDescription_en:
      "An alarm valve sits at the base of a sprinkler riser and triggers a local water-motor alarm the moment water flows — a wet system's or dry system's first line of local notification. We source wet and dry types matched to your riser configuration.",
    longDescription_ar:
      "يُركَّب صمام الإنذار عند قاعدة العمود الصاعد لنظام الرش التلقائي، ويُصدر إنذارًا محليًا بمحرك مائي بمجرد تدفق المياه — وهو خط الإبلاغ المحلي الأول في الأنظمة الرطبة والجافة. نقوم بتوريد الأنواع الرطبة والجافة مطابقة لتكوين العمود الصاعد لديكم.",
    sectorId: "fire-protection",
    categoryId: "valves",
    relatedProductSlugs: ["sprinklers", "check-valves", "os-y-valves"],
    relatedBrandSlugs: ["tyco", "victaulic"],
    relatedArticleSlugs: ["nfpa-standards-explained"],
    catalogues: [
      {
        id: "alarm-valves-datasheet",
        title_en: "Alarm Valves Datasheet",
        title_ar: "نشرة بيانات صمامات الإنذار",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "os-y-valves",
    slug: "os-y-valves",
    name_en: "OS&Y Valves",
    name_ar: "صمامات OS&Y",
    shortDescription_en:
      "Outside stem and yoke gate valves for visible open/closed system control.",
    shortDescription_ar:
      "صمامات بوابة بساق وقيد خارجي (OS&Y) لتوفير مؤشر مرئي لحالة الفتح/الإغلاق.",
    longDescription_en:
      "OS&Y (outside stem and yoke) valves make a system's open/closed status visible at a glance from the stem position — a common requirement at fire protection system control points. We source them to your required diameter and connection type.",
    longDescription_ar:
      "توفر صمامات OS&Y (بساق وقيد خارجي) مؤشرًا مرئيًا لحالة النظام (مفتوح/مغلق) من خلال موضع الساق — وهو متطلب شائع عند نقاط التحكم في أنظمة مكافحة الحريق. نقوم بتوريدها وفق القطر ونوع التوصيل المطلوبين.",
    sectorId: "fire-protection",
    categoryId: "valves",
    relatedProductSlugs: ["gate-valves", "butterfly-valves", "alarm-valves"],
    relatedBrandSlugs: ["victaulic", "naffco"],
    catalogues: [
      {
        id: "os-y-valves-datasheet",
        title_en: "OS&Y Valves Datasheet",
        title_ar: "نشرة بيانات صمامات OS&Y",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/os-y-valves.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
