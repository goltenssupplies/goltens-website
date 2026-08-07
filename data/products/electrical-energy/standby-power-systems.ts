import type { Product } from "@/data/products/types";

/** Electrical & Energy Solutions → Generators & Standby Power category. */
export const electricalStandbyPowerSystems: Product[] = [
  {
    id: "diesel-generators",
    slug: "diesel-generators",
    name_en: "Diesel Generators",
    name_ar: "المولدات الديزل",
    shortDescription_en: "Diesel generator sets for standby and prime power applications.",
    shortDescription_ar: "مجموعات مولدات ديزل لتطبيقات الطاقة الاحتياطية والأساسية.",
    longDescription_en:
      "Diesel generator sets for standby and prime power applications across industrial, commercial, and institutional facilities. We source units matched to your load requirement and required run mode.",
    longDescription_ar:
      "مجموعات مولدات ديزل لتطبيقات الطاقة الاحتياطية والأساسية عبر المنشآت الصناعية والتجارية والمؤسسية. نقوم بتوريد الوحدات المطابقة لمتطلبات الحمل ونمط التشغيل المطلوب لديكم.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    relatedProductSlugs: ["automatic-transfer-switches", "ups-systems"],
    catalogues: [
      { id: "diesel-generators-datasheet", title_en: "Diesel Generators Datasheet", title_ar: "نشرة بيانات المولدات الديزل", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "automatic-transfer-switches",
    slug: "automatic-transfer-switches",
    name_en: "Automatic Transfer Switches",
    name_ar: "مفاتيح التحويل الآلي",
    shortDescription_en: "ATS panels for automatic switchover between mains and standby power.",
    shortDescription_ar: "لوحات تحويل آلي للتبديل التلقائي بين التيار العام والطاقة الاحتياطية.",
    longDescription_en:
      "Automatic transfer switches that detect a mains power failure and switch the load to standby generation without manual intervention. We source panels matched to your generator's rating and switching configuration.",
    longDescription_ar:
      "مفاتيح تحويل آلي تكتشف انقطاع التيار العام وتقوم بتحويل الحمل إلى مصدر الطاقة الاحتياطي دون تدخل يدوي. نقوم بتوريد اللوحات المطابقة لتصنيف مولدكم وتكوين التحويل المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    relatedProductSlugs: ["diesel-generators", "voltage-stabilizers"],
    catalogues: [
      { id: "automatic-transfer-switches-datasheet", title_en: "Automatic Transfer Switches Datasheet", title_ar: "نشرة بيانات مفاتيح التحويل الآلي", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "ups-systems",
    slug: "ups-systems",
    name_en: "Uninterruptible Power Supplies (UPS)",
    name_ar: "أنظمة الطاقة غير المنقطعة (UPS)",
    shortDescription_en: "UPS systems for instant, battery-backed power to critical loads.",
    shortDescription_ar: "أنظمة UPS لتوفير طاقة فورية مدعومة بالبطارية للأحمال الحرجة.",
    longDescription_en:
      "UPS systems that bridge the gap between a mains power loss and standby generator start-up, keeping critical loads powered without interruption. We source units matched to your load's power rating and required backup runtime.",
    longDescription_ar:
      "أنظمة UPS تسد الفجوة الزمنية بين انقطاع التيار العام وبدء تشغيل المولد الاحتياطي، مما يحافظ على تشغيل الأحمال الحرجة دون انقطاع. نقوم بتوريد الوحدات المطابقة لتصنيف قدرة حملكم ومدة النسخ الاحتياطي المطلوبة.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    relatedProductSlugs: ["diesel-generators", "battery-chargers-rectifiers"],
    catalogues: [
      { id: "ups-systems-datasheet", title_en: "UPS Systems Datasheet", title_ar: "نشرة بيانات أنظمة UPS", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "voltage-stabilizers",
    slug: "voltage-stabilizers",
    name_en: "Voltage Stabilizers",
    name_ar: "منظمات الجهد الكهربائي",
    shortDescription_en: "Voltage stabilizers that protect equipment from unstable grid voltage.",
    shortDescription_ar: "منظمات جهد تحمي المعدات من تذبذب الجهد الكهربائي بالشبكة.",
    longDescription_en:
      "Voltage stabilizers that correct fluctuating grid voltage before it reaches sensitive equipment, protecting against both under- and over-voltage conditions. We source units matched to your load's power rating and voltage tolerance.",
    longDescription_ar:
      "منظمات جهد تصحح تذبذب جهد الشبكة قبل وصوله إلى المعدات الحساسة، وتحمي من حالتي انخفاض وارتفاع الجهد. نقوم بتوريد الوحدات المطابقة لتصنيف قدرة حملكم وهامش تحمل الجهد المطلوب.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    relatedProductSlugs: ["automatic-transfer-switches", "battery-chargers-rectifiers"],
    catalogues: [
      { id: "voltage-stabilizers-datasheet", title_en: "Voltage Stabilizers Datasheet", title_ar: "نشرة بيانات منظمات الجهد", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "battery-chargers-rectifiers",
    slug: "battery-chargers-rectifiers",
    name_en: "Battery Chargers & Rectifiers",
    name_ar: "شواحن البطاريات والمقومات",
    shortDescription_en: "Battery chargers and rectifiers for DC standby power and control systems.",
    shortDescription_ar: "شواحن بطاريات ومقومات لأنظمة الطاقة الاحتياطية والتحكم بالتيار المستمر.",
    longDescription_en:
      "Battery chargers and rectifiers that keep standby DC systems — switchgear control, telecom, and emergency lighting battery banks — charged and ready. We source units matched to your battery bank's voltage and capacity.",
    longDescription_ar:
      "شواحن بطاريات ومقومات تحافظ على شحن وجاهزية أنظمة التيار المستمر الاحتياطية — تحكم لوحات التوزيع، الاتصالات، وبطاريات إضاءة الطوارئ. نقوم بتوريد الوحدات المطابقة لجهد وسعة بنك البطاريات لديكم.",
    sectorId: "electrical-energy",
    categoryId: "standby-power-systems",
    relatedProductSlugs: ["ups-systems", "voltage-stabilizers"],
    catalogues: [
      { id: "battery-chargers-rectifiers-datasheet", title_en: "Battery Chargers & Rectifiers Datasheet", title_ar: "نشرة بيانات شواحن البطاريات والمقومات", kind: "datasheet", fileType: "pdf", language: "en", fileUrl: null },
    ],
    images: [],
    availability: "available",
    quoteEnabled: true,
  },
];
