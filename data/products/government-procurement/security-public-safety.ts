import type { Product } from "@/data/products/types";

/** Government Procurement → Security & Public Safety category. */
export const governmentSecurityPublicSafety: Product[] = [
  {
    id: "cctv-surveillance-systems",
    slug: "cctv-surveillance-systems",
    name_en: "CCTV & Surveillance Systems",
    name_ar: "أنظمة الكاميرات والمراقبة",
    shortDescription_en: "CCTV cameras and video management systems for government facilities and public sites.",
    shortDescription_ar: "كاميرات مراقبة وأنظمة إدارة الفيديو للمنشآت الحكومية والمواقع العامة.",
    longDescription_en:
      "CCTV cameras, recorders, and video management systems for government buildings, public facilities, and municipal sites. We source systems matched to your coverage area and monitoring requirements.",
    longDescription_ar:
      "كاميرات مراقبة وأجهزة تسجيل وأنظمة إدارة فيديو للمباني الحكومية والمنشآت العامة والمواقع البلدية. نقوم بتوريد الأنظمة المطابقة لمساحة التغطية ومتطلبات المراقبة لديكم.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    relatedProductSlugs: ["access-control-biometric-systems", "perimeter-security-fencing"],
    catalogues: [
      { id: "cctv-surveillance-systems-datasheet", title_en: "CCTV & Surveillance Systems Datasheet", title_ar: "نشرة بيانات أنظمة الكاميرات والمراقبة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "access-control-biometric-systems",
    slug: "access-control-biometric-systems",
    name_en: "Access Control & Biometric Systems",
    name_ar: "أنظمة التحكم في الدخول والبصمة الحيوية",
    shortDescription_en: "Card, PIN, and biometric access control systems for government buildings.",
    shortDescription_ar: "أنظمة تحكم في الدخول بالبطاقة والرقم السري والبصمة الحيوية للمباني الحكومية.",
    longDescription_en:
      "Access control systems — card readers, PIN keypads, and biometric terminals — for government buildings and restricted-access facilities. We source systems matched to your entry points and access-level requirements.",
    longDescription_ar:
      "أنظمة تحكم في الدخول — قارئات بطاقات ولوحات رقم سري وأجهزة بصمة حيوية — للمباني الحكومية والمنشآت ذات الدخول المقيد. نقوم بتوريد الأنظمة المطابقة لنقاط الدخول ومستويات الصلاحية لديكم.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    relatedProductSlugs: ["cctv-surveillance-systems", "gate-barrier-systems"],
    catalogues: [
      { id: "access-control-biometric-systems-datasheet", title_en: "Access Control & Biometric Systems Datasheet", title_ar: "نشرة بيانات أنظمة التحكم في الدخول والبصمة", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "perimeter-security-fencing",
    slug: "perimeter-security-fencing",
    name_en: "Perimeter Security & Fencing",
    name_ar: "أسوار وأنظمة التأمين المحيطي",
    shortDescription_en: "Perimeter fencing and intrusion detection for government and public-sector sites.",
    shortDescription_ar: "أسوار محيطية وأنظمة كشف تسلل للمواقع الحكومية والقطاع العام.",
    longDescription_en:
      "Perimeter fencing and intrusion detection systems for government sites, utility installations, and public facilities. We source solutions matched to your site boundary and threat profile.",
    longDescription_ar:
      "أسوار محيطية وأنظمة كشف تسلل للمواقع الحكومية ومنشآت المرافق والمنشآت العامة. نقوم بتوريد الحلول المطابقة لحدود موقعكم ومستوى المخاطر المحتملة.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    relatedProductSlugs: ["gate-barrier-systems", "cctv-surveillance-systems"],
    catalogues: [
      { id: "perimeter-security-fencing-datasheet", title_en: "Perimeter Security & Fencing Datasheet", title_ar: "نشرة بيانات أنظمة التأمين المحيطي", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "gate-barrier-systems",
    slug: "gate-barrier-systems",
    name_en: "Gate & Barrier Systems",
    name_ar: "أنظمة البوابات والحواجز",
    shortDescription_en: "Automated gates and vehicle barriers for government and public facility entrances.",
    shortDescription_ar: "بوابات أوتوماتيكية وحواجز مركبات لمداخل المنشآت الحكومية والعامة.",
    longDescription_en:
      "Automated swing and sliding gates, boom barriers, and bollards for government facility and public site vehicle entrances. We source systems matched to your traffic volume and vehicle type.",
    longDescription_ar:
      "بوابات أوتوماتيكية منزلقة ومفصلية، وحواجز رافعة، وأعمدة تأمين لمداخل المركبات في المنشآت الحكومية والمواقع العامة. نقوم بتوريد الأنظمة المطابقة لحجم الحركة المرورية ونوع المركبات لديكم.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    relatedProductSlugs: ["perimeter-security-fencing", "access-control-biometric-systems"],
    catalogues: [
      { id: "gate-barrier-systems-datasheet", title_en: "Gate & Barrier Systems Datasheet", title_ar: "نشرة بيانات أنظمة البوابات والحواجز", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "public-safety-response-equipment",
    slug: "public-safety-response-equipment",
    name_en: "Public Safety & Emergency Response Equipment",
    name_ar: "معدات السلامة العامة والاستجابة للطوارئ",
    shortDescription_en: "Equipment for public safety agencies and municipal emergency response teams.",
    shortDescription_ar: "معدات لجهات السلامة العامة وفرق الاستجابة للطوارئ البلدية.",
    longDescription_en:
      "Equipment for public safety agencies and municipal emergency response teams, sourced to the operational requirements of the department requesting it.",
    longDescription_ar:
      "معدات لجهات السلامة العامة وفرق الاستجابة للطوارئ البلدية، يتم توريدها وفق المتطلبات التشغيلية للإدارة الطالبة.",
    sectorId: "government-procurement",
    categoryId: "security-public-safety",
    relatedProductSlugs: ["cctv-surveillance-systems", "gate-barrier-systems"],
    catalogues: [
      { id: "public-safety-response-equipment-datasheet", title_en: "Public Safety & Emergency Response Equipment Datasheet", title_ar: "نشرة بيانات معدات السلامة العامة والاستجابة للطوارئ", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
