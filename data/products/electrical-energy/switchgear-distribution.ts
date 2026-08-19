import type { Product } from "@/data/products/types";

/** Electrical & Energy Solutions → Switchgear & Distribution category. */
export const electricalSwitchgearDistribution: Product[] = [
  {
    id: "low-voltage-switchgear",
    slug: "low-voltage-switchgear",
    name_en: "Low Voltage Switchgear",
    name_ar: "لوحات التوزيع الكهربائية منخفضة الجهد",
    shortDescription_en:
      "LV switchgear and distribution panels for building and facility electrical systems.",
    shortDescription_ar:
      "لوحات توزيع كهربائية منخفضة الجهد للأنظمة الكهربائية بالمباني والمنشآت.",
    longDescription_en:
      "Low voltage switchgear and distribution panels for building and facility electrical systems. We source panels matched to your load schedule, breaker configuration, and enclosure rating.",
    longDescription_ar:
      "لوحات توزيع ولوحات تحكم كهربائية منخفضة الجهد للأنظمة الكهربائية بالمباني والمنشآت. نقوم بتوريد اللوحات المطابقة لجدول الأحمال وتكوين القواطع وتصنيف الهيكل لديكم.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    relatedProductSlugs: [
      "medium-voltage-switchgear",
      "distribution-panel-boards",
    ],
    catalogues: [
      {
        id: "low-voltage-switchgear-datasheet",
        title_en: "Low Voltage Switchgear Datasheet",
        title_ar: "نشرة بيانات لوحات التوزيع منخفضة الجهد",
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
    id: "medium-voltage-switchgear",
    slug: "medium-voltage-switchgear",
    name_en: "Medium Voltage Switchgear",
    name_ar: "لوحات التوزيع الكهربائية متوسطة الجهد",
    shortDescription_en:
      "MV switchgear for primary distribution and substation applications.",
    shortDescription_ar:
      "لوحات توزيع كهربائية متوسطة الجهد لتطبيقات التوزيع الرئيسي والمحطات الفرعية.",
    longDescription_en:
      "Medium voltage switchgear for primary distribution, substation, and industrial power feeder applications. We source panels matched to your voltage class and fault-level requirement.",
    longDescription_ar:
      "لوحات توزيع كهربائية متوسطة الجهد لتطبيقات التوزيع الرئيسي والمحطات الفرعية ومغذيات الطاقة الصناعية. نقوم بتوريد اللوحات المطابقة لفئة الجهد ومستوى العطل المطلوب لديكم.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    relatedProductSlugs: ["low-voltage-switchgear", "ring-main-units"],
    catalogues: [
      {
        id: "medium-voltage-switchgear-datasheet",
        title_en: "Medium Voltage Switchgear Datasheet",
        title_ar: "نشرة بيانات لوحات التوزيع متوسطة الجهد",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/electrical-energy/medium-voltage-switchgear.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "distribution-panel-boards",
    slug: "distribution-panel-boards",
    name_en: "Distribution Boards & Panel Boards",
    name_ar: "لوحات وصناديق التوزيع",
    shortDescription_en:
      "Distribution boards for final circuit protection and load distribution.",
    shortDescription_ar: "لوحات توزيع لحماية الدوائر النهائية وتوزيع الأحمال.",
    longDescription_en:
      "Distribution boards and panel boards for final circuit protection and load distribution across building floors and zones. We source boards matched to your circuit count and breaker type.",
    longDescription_ar:
      "لوحات توزيع وصناديق توزيع لحماية الدوائر النهائية وتوزيع الأحمال عبر طوابق ومناطق المبنى. نقوم بتوريد اللوحات المطابقة لعدد الدوائر ونوع القواطع لديكم.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    relatedProductSlugs: ["low-voltage-switchgear", "busbar-trunking-systems"],
    catalogues: [
      {
        id: "distribution-panel-boards-datasheet",
        title_en: "Distribution Boards Datasheet",
        title_ar: "نشرة بيانات لوحات وصناديق التوزيع",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/electrical-energy/distribution-panel-boards.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ring-main-units",
    slug: "ring-main-units",
    name_en: "Ring Main Units (RMU)",
    name_ar: "وحدات الحلقة الرئيسية (RMU)",
    shortDescription_en:
      "Ring main units for medium voltage ring distribution networks.",
    shortDescription_ar:
      "وحدات حلقة رئيسية لشبكات التوزيع الحلقية متوسطة الجهد.",
    longDescription_en:
      "Ring main units for medium voltage ring distribution networks, providing switching and protection at each distribution point. We source units matched to your network's voltage class and switching configuration.",
    longDescription_ar:
      "وحدات حلقة رئيسية لشبكات التوزيع الحلقية متوسطة الجهد، توفر التحويل والحماية عند كل نقطة توزيع. نقوم بتوريد الوحدات المطابقة لفئة جهد شبكتكم وتكوين التحويل المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    relatedProductSlugs: [
      "medium-voltage-switchgear",
      "busbar-trunking-systems",
    ],
    catalogues: [
      {
        id: "ring-main-units-datasheet",
        title_en: "Ring Main Units Datasheet",
        title_ar: "نشرة بيانات وحدات الحلقة الرئيسية",
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
    id: "busbar-trunking-systems",
    slug: "busbar-trunking-systems",
    name_en: "Busbar Trunking Systems",
    name_ar: "أنظمة القضبان الناقلة (Busbar)",
    shortDescription_en:
      "Busbar trunking for high-current power distribution across large facilities.",
    shortDescription_ar:
      "أنظمة قضبان ناقلة لتوزيع الطاقة عالية التيار عبر المنشآت الكبيرة.",
    longDescription_en:
      "Busbar trunking systems for high-current power distribution across large industrial and commercial facilities, offering a flexible alternative to cable runs. We source systems matched to your current rating and tap-off requirement.",
    longDescription_ar:
      "أنظمة قضبان ناقلة لتوزيع الطاقة عالية التيار عبر المنشآت الصناعية والتجارية الكبيرة، وتوفر بديلاً مرنًا لمسارات الكابلات. نقوم بتوريد الأنظمة المطابقة لتصنيف التيار ومتطلبات نقاط التفريع لديكم.",
    sectorId: "electrical-energy",
    categoryId: "switchgear-distribution",
    relatedProductSlugs: ["distribution-panel-boards", "ring-main-units"],
    catalogues: [
      {
        id: "busbar-trunking-systems-datasheet",
        title_en: "Busbar Trunking Systems Datasheet",
        title_ar: "نشرة بيانات أنظمة القضبان الناقلة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/electrical-energy/busbar-trunking-systems.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
