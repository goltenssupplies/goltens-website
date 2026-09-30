import type { Product } from "@/data/products/types";

/**
 * MOLLUBE Batch M2 (Overhead Conductor Greases) — 6 MOLLUBE protective
 * greases for overhead electrical conductors, registered under the new
 * `overhead-conductor-greases` category (see `data/product-categories.ts`
 * and the approved Data Model Review for the taxonomy rationale — this is
 * deliberately NOT the `greases` category, which remains untouched at 16
 * products).
 *
 * Source of truth: "MOLLUBE overhead Conductors grease.pdf" ONLY, p.3-7.
 * The OHC section of the separate "MOLLUBE GREASE 2024.pdf" (with its
 * "Non melt" dropping-point framing, "Brown or Red" ambiguous color, and
 * "PROGUARD OHC LI M" product name that has no counterpart in this
 * dedicated source) is explicitly NOT used here, per the approved review.
 *
 * All 6 are represented as separate Single Products, not a family: the
 * source frames each as its own distinctly-named product generation
 * ("the first product," "the next step," "the advanced upgrade,"
 * "premium-tier," "cold-applied," "the latest innovation"), each with a
 * complete standalone spec table — not one stem name with shared,
 * numbered grade variants the way e.g. PROGUARD LXSY or CSX are.
 *
 * Per-product conductor-type wording and standards claims are preserved
 * exactly as printed for each product individually and are NOT
 * homogenized across the 6 — see the approved review for why OHC M's
 * wording is genuinely vaguer, and why OHC PLUS/8000/9000 carry no
 * textual standards claim despite IEC/BSI/GB logos appearing on their
 * pages (logo-only evidence is never converted into a textual claim).
 *
 * No ambient "Temperature Range" is stated in this source for any of the
 * 6 products — every temperature figure below is an explicit test
 * condition (oil-separation duration/temperature, low-temperature
 * adhesion test), not an operating range, and is labeled accordingly.
 * The one exception is OHC 9000's own explicit prose claim of
 * withstanding "extreme operating temperatures up to 250°C," included
 * because the source states it directly.
 *
 * GOLTENS is supplying these products, not representing MOLLUBE as an
 * authorized distributor/agent/partner/manufacturer — every product uses
 * neutral "available for supply" / "request a quote" language only.
 * Applications describe corrosion protection for the conductor's outer
 * surface, never bearing/mechanical/electrical-equipment lubrication and
 * never conductor manufacturing.
 */

export const mollubeBatchM2Ohc: Product[] = [
  {
    id: "mollube-mol-proguard-ohc-li",
    slug: "mollube-mol-proguard-ohc-li",
    name_en: "MOL PROGUARD OHC LI",
    name_ar: "MOL PROGUARD OHC LI",
    shortDescription_en:
      "MOL PROGUARD OHC LI — lithium-technology protective grease for aluminium, aluminium alloy, and steel bare overhead conductors.",
    shortDescription_ar:
      "MOL PROGUARD OHC LI — شحم حماية بتقنية الليثيوم لموصلات الألومنيوم والألومنيوم المركب والفولاذ العاري الهوائية.",
    longDescription_en:
      "MOL PROGUARD OHC LI is MOLLUBE's protective grease for aluminium, aluminium alloy, and steel bare conductors, formulated with premium lithium grease technology and high-quality base oils. Enhanced with antioxidants, corrosion inhibitors, and water-resistant additives, it protects against atmospheric corrosion during both service and storage. Available for supply through GOLTENS, matched to your project's requirements.",
    longDescription_ar:
      "MOL PROGUARD OHC LI هو شحم حماية من MOLLUBE لموصلات الألومنيوم والألومنيوم المركب والفولاذ العاري، مصنّع بتقنية شحم الليثيوم الممتازة وزيوت أساسية عالية الجودة. معزز بمضادات الأكسدة ومثبطات التآكل وإضافات مقاومة للماء، ويحمي من التآكل الجوي أثناء الخدمة والتخزين على حد سواء. متوفر للتوريد من خلال GOLTENS، مطابقًا لمتطلبات مشروعكم.",
    sectorId: "lubricants-oils",
    categoryId: "overhead-conductor-greases",
    applications_en: [
      "Corrosion protection for aluminium conductors",
      "Corrosion protection for aluminium alloy conductors",
      "Corrosion protection for steel bare conductors",
    ],
    applications_ar: [
      "الحماية من التآكل لموصلات الألومنيوم",
      "الحماية من التآكل لموصلات الألومنيوم المركب",
      "الحماية من التآكل لموصلات الفولاذ العاري",
    ],
    specifications: [
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Golden Yellow",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Texture",
        label_ar: "الملمس",
        value: "Smooth",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Base Oil",
        label_ar: "الزيت الأساسي",
        value: "Mineral Oil",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "NLGI Grade",
        label_ar: "درجة NLGI",
        value: "2",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Base Oil Viscosity @ 40°C",
        label_ar: "لزوجة الزيت الأساسي عند 40°م",
        value: "150 cSt",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Worked Penetration",
        label_ar: "الاختراق المعالج",
        value: "290 (1/10 mm)",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Dropping Point",
        label_ar: "نقطة السقوط",
        value: "240°C",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 100°C, 1h",
        label_ar: "انفصال الزيت عند 100°م، لمدة ساعة",
        value: "0.1%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Washout Test",
        label_ar: "اختبار الغسيل",
        value: "0-0",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Standard",
        label_ar: "المعيار",
        value: "IEC 61394",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-proguard-ohc-m",
      "mollube-mol-proguard-ohc",
      "mollube-mol-proguard-ohc-plus",
      "mollube-mol-proguard-ohc-8000",
      "mollube-mol-proguard-ohc-9000",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-proguard-ohc-li-datasheet",
        title_en: "MOL PROGUARD OHC LI Datasheet",
        title_ar: "نشرة بيانات MOL PROGUARD OHC LI",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOL PROGUARD OHC LI Overhead Conductor Grease Supplier Egypt",
      title_ar: "مورد شحم موصلات هوائية MOL PROGUARD OHC LI في مصر",
      description_en:
        "GOLTENS supplies MOL PROGUARD OHC LI protective grease for overhead conductors, available for supply and matched to your project's requirements. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم الحماية MOL PROGUARD OHC LI للموصلات الهوائية، متوفر للتوريد ومطابق لمتطلبات مشروعكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-proguard-ohc-m",
    slug: "mollube-mol-proguard-ohc-m",
    name_en: "MOL PROGUARD OHC M",
    name_ar: "MOL PROGUARD OHC M",
    shortDescription_en:
      "MOL PROGUARD OHC M — non-organic thickener protective grease for overhead bare conductors, formulated for non-melting, high-temperature-resistant performance.",
    shortDescription_ar:
      "MOL PROGUARD OHC M — شحم حماية بمادة سميكة غير عضوية للموصلات الهوائية العارية، مصمم لأداء مقاوم لدرجات الحرارة العالية وغير قابل للذوبان.",
    longDescription_en:
      "MOL PROGUARD OHC M was developed as the next step in the evolution of MOLLUBE's overhead conductor grease line, introducing a non-organic thickener technology that delivers non-melting performance and excellent stability under severe operating conditions. Specially engineered for overhead bare conductors, it forms an adherent, water-resistant film that prevents corrosion and minimizes oil migration. Available for supply through GOLTENS, matched to your project's requirements.",
    longDescription_ar:
      "طُوّر MOL PROGUARD OHC M كخطوة تالية في تطور خط شحوم الموصلات الهوائية من MOLLUBE، مقدّمًا تقنية مادة سميكة غير عضوية توفر أداءً غير قابل للذوبان وثباتًا ممتازًا في ظروف التشغيل القاسية. مصمم خصيصًا للموصلات الهوائية العارية، ويشكّل طبقة لاصقة ومقاومة للماء تمنع التآكل وتقلل من هجرة الزيت. متوفر للتوريد من خلال GOLTENS، مطابقًا لمتطلبات مشروعكم.",
    sectorId: "lubricants-oils",
    categoryId: "overhead-conductor-greases",
    // Conductor wording intentionally limited to the source's own text for
    // this product ("overhead bare conductors") — NOT expanded to the
    // aluminium/aluminium alloy/steel breakdown used for sibling products,
    // which this product's own page never states.
    applications_en: ["Overhead bare conductors"],
    applications_ar: ["الموصلات الهوائية العارية"],
    specifications: [
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Light Brown",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Texture",
        label_ar: "الملمس",
        value: "Smooth",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Base Oil",
        label_ar: "الزيت الأساسي",
        value: "Mineral Oil",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "NLGI Grade",
        label_ar: "درجة NLGI",
        value: "2",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Thickener",
        label_ar: "المادة السميكة",
        value: "Non-organic thickener technology",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Oil Separation @ 150°C, 1h",
        label_ar: "انفصال الزيت عند 150°م، لمدة ساعة",
        value: "0.06%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Low-Temperature Adhesion (-20°C, 1h)",
        label_ar: "الالتصاق في درجة الحرارة المنخفضة (-20°م، ساعة)",
        value: "No cracking",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Corrosion Test / Series",
        label_ar: "اختبار / سلسلة التآكل",
        value: "9",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Classification",
        label_ar: "التصنيف",
        value: "Class 20A120",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "IEC 61394; BS EN 50326:2002",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-proguard-ohc-li",
      "mollube-mol-proguard-ohc",
      "mollube-mol-proguard-ohc-plus",
      "mollube-mol-proguard-ohc-8000",
      "mollube-mol-proguard-ohc-9000",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-proguard-ohc-m-datasheet",
        title_en: "MOL PROGUARD OHC M Datasheet",
        title_ar: "نشرة بيانات MOL PROGUARD OHC M",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOL PROGUARD OHC M Overhead Conductor Grease Supplier Egypt",
      title_ar: "مورد شحم موصلات هوائية MOL PROGUARD OHC M في مصر",
      description_en:
        "GOLTENS supplies MOL PROGUARD OHC M protective grease for overhead bare conductors, available for supply and matched to your project's requirements. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم الحماية MOL PROGUARD OHC M للموصلات الهوائية العارية، متوفر للتوريد ومطابق لمتطلبات مشروعكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-proguard-ohc",
    slug: "mollube-mol-proguard-ohc",
    name_en: "MOL PROGUARD OHC",
    name_ar: "MOL PROGUARD OHC",
    shortDescription_en:
      "MOL PROGUARD OHC — advanced-upgrade protective grease for aluminum, aluminum alloy, and steel bare conductors and fittings.",
    shortDescription_ar:
      "MOL PROGUARD OHC — شحم حماية بتركيبة متطورة لموصلات وتجهيزات الألومنيوم والألومنيوم المركب والفولاذ العاري.",
    longDescription_en:
      "MOL PROGUARD OHC represents the advanced upgrade of MOLLUBE's overhead conductor grease line, developed with a higher-performance formulation and a stronger additive package. Engineered for aluminum, aluminum alloy, and steel bare conductors and fittings, it provides exceptional protection and reliable lubrication in harsh outdoor environments, with excellent adhesion, high water resistance, and outstanding corrosion protection. Available for supply through GOLTENS, matched to your project's requirements.",
    longDescription_ar:
      "يمثّل MOL PROGUARD OHC التطور المتقدم لخط شحوم الموصلات الهوائية من MOLLUBE، طُوّر بتركيبة أعلى أداءً وحزمة إضافات أقوى. مصمم لموصلات وتجهيزات الألومنيوم والألومنيوم المركب والفولاذ العاري، ويوفر حماية استثنائية وتزييتًا موثوقًا في البيئات الخارجية القاسية، مع التصاق ممتاز ومقاومة عالية للماء وحماية متميزة من التآكل. متوفر للتوريد من خلال GOLTENS، مطابقًا لمتطلبات مشروعكم.",
    sectorId: "lubricants-oils",
    categoryId: "overhead-conductor-greases",
    applications_en: [
      "Aluminum conductors",
      "Aluminum alloy conductors",
      "Steel bare conductors and fittings",
    ],
    applications_ar: [
      "موصلات الألومنيوم",
      "موصلات الألومنيوم المركب",
      "الموصلات والتجهيزات من الفولاذ العاري",
    ],
    specifications: [
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Brown",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Texture",
        label_ar: "الملمس",
        value: "Smooth",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Base Oil",
        label_ar: "الزيت الأساسي",
        value: "Mineral Oil",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "NLGI Grade",
        label_ar: "درجة NLGI",
        value: "2",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Oil Separation @ 150°C, 1h",
        label_ar: "انفصال الزيت عند 150°م، لمدة ساعة",
        value: "0.03%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 150°C, 4h",
        label_ar: "انفصال الزيت عند 150°م، لمدة 4 ساعات",
        value: "0.05%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Low-Temperature Adhesion (-20°C, 1h)",
        label_ar: "الالتصاق في درجة الحرارة المنخفضة (-20°م، ساعة)",
        value: "No cracking",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Number",
        label_ar: "رقم الحمض/القاعدة",
        value: "1.2 mgKOH/g",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Rate of Change of Coning Degree (Aging Test)",
        label_ar: "معدل تغيّر درجة التخروط (اختبار الشيخوخة)",
        value: "10%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Value After Aging Test",
        label_ar: "قيمة الحمض/القاعدة بعد اختبار الشيخوخة",
        value: "2.1 mgKOH/g",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Corrosion Test / Series",
        label_ar: "اختبار / سلسلة التآكل",
        value: "9",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Classification",
        label_ar: "التصنيف",
        value: "Class 20A150",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Standards",
        label_ar: "المعايير",
        value: "IEC 61394; BS EN 50326:2002; GB/T 36292-2018",
        group_en: "Standards",
        group_ar: "المعايير",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-proguard-ohc-li",
      "mollube-mol-proguard-ohc-m",
      "mollube-mol-proguard-ohc-plus",
      "mollube-mol-proguard-ohc-8000",
      "mollube-mol-proguard-ohc-9000",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-proguard-ohc-datasheet",
        title_en: "MOL PROGUARD OHC Datasheet",
        title_ar: "نشرة بيانات MOL PROGUARD OHC",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en: "MOL PROGUARD OHC Overhead Conductor Grease Supplier Egypt",
      title_ar: "مورد شحم موصلات هوائية MOL PROGUARD OHC في مصر",
      description_en:
        "GOLTENS supplies MOL PROGUARD OHC protective grease for overhead conductors and fittings, available for supply and matched to your project's requirements. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم الحماية MOL PROGUARD OHC للموصلات والتجهيزات الهوائية، متوفر للتوريد ومطابق لمتطلبات مشروعكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-proguard-ohc-plus",
    slug: "mollube-mol-proguard-ohc-plus",
    name_en: "MOL PROGUARD OHC PLUS",
    name_ar: "MOL PROGUARD OHC PLUS",
    shortDescription_en:
      "MOL PROGUARD OHC PLUS — premium-tier protective grease for aluminum, aluminum-alloy, and steel bare conductors and fittings in coastal, high-humidity, and industrially polluted environments.",
    shortDescription_ar:
      "MOL PROGUARD OHC PLUS — شحم حماية من الفئة الممتازة لموصلات وتجهيزات الألومنيوم والألومنيوم المركب والفولاذ العاري في البيئات الساحلية وعالية الرطوبة والملوثة صناعيًا.",
    longDescription_en:
      "MOL PROGUARD OHC PLUS is a premium-tier protective grease, created after four years of dedicated development to deliver the highest standard of overhead conductor protection. Engineered for aluminum, aluminum-alloy, and steel bare conductors and fittings, it is designed to perform in coastal, high-humidity, and industrially polluted environments, providing exceptional corrosion protection during both service and storage, with excellent low-temperature working stability. Available for supply through GOLTENS, matched to your project's requirements.",
    longDescription_ar:
      "MOL PROGUARD OHC PLUS هو شحم حماية من الفئة الممتازة، طُوّر على مدى أربع سنوات من التطوير المتخصص لتقديم أعلى مستوى من حماية الموصلات الهوائية. مصمم لموصلات وتجهيزات الألومنيوم والألومنيوم المركب والفولاذ العاري، ومصمم للعمل في البيئات الساحلية وعالية الرطوبة والملوثة صناعيًا، ويوفر حماية استثنائية من التآكل أثناء الخدمة والتخزين، مع ثبات ممتاز في التشغيل بدرجات الحرارة المنخفضة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمتطلبات مشروعكم.",
    sectorId: "lubricants-oils",
    categoryId: "overhead-conductor-greases",
    applications_en: [
      "Aluminum conductors",
      "Aluminum-alloy conductors",
      "Steel bare conductors and fittings",
      "Coastal, high-humidity, and industrially polluted environments",
    ],
    applications_ar: [
      "موصلات الألومنيوم",
      "موصلات الألومنيوم المركب",
      "الموصلات والتجهيزات من الفولاذ العاري",
      "البيئات الساحلية وعالية الرطوبة والملوثة صناعيًا",
    ],
    // Base Oil and Thickener are NOT stated for this product in the
    // source and are intentionally omitted rather than inferred from
    // sibling products.
    specifications: [
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Brown",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Texture",
        label_ar: "الملمس",
        value: "Smooth",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "NLGI Grade",
        label_ar: "درجة NLGI",
        value: "2-3",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Oil Separation @ 180°C, 1h",
        label_ar: "انفصال الزيت عند 180°م، لمدة ساعة",
        value: "0.03%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 180°C, 4h",
        label_ar: "انفصال الزيت عند 180°م، لمدة 4 ساعات",
        value: "0.07%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 180°C, 24h",
        label_ar: "انفصال الزيت عند 180°م، لمدة 24 ساعة",
        value: "0.50%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Low-Temperature Adhesion (-40°C, 1h)",
        label_ar: "الالتصاق في درجة الحرارة المنخفضة (-40°م، ساعة)",
        value: "No cracking",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Number",
        label_ar: "رقم الحمض/القاعدة",
        value: "1.4",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Rate of Change of Coning Degree (Aging Test)",
        label_ar: "معدل تغيّر درجة التخروط (اختبار الشيخوخة)",
        value: "11%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Value After Aging Test",
        label_ar: "قيمة الحمض/القاعدة بعد اختبار الشيخوخة",
        value: "2.1",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Corrosion Test / Series",
        label_ar: "اختبار / سلسلة التآكل",
        value: "9",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Classification",
        label_ar: "التصنيف",
        value: "Class 40A180",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-proguard-ohc-li",
      "mollube-mol-proguard-ohc-m",
      "mollube-mol-proguard-ohc",
      "mollube-mol-proguard-ohc-8000",
      "mollube-mol-proguard-ohc-9000",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-proguard-ohc-plus-datasheet",
        title_en: "MOL PROGUARD OHC PLUS Datasheet",
        title_ar: "نشرة بيانات MOL PROGUARD OHC PLUS",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "MOL PROGUARD OHC PLUS Overhead Conductor Grease Supplier Egypt",
      title_ar: "مورد شحم موصلات هوائية MOL PROGUARD OHC PLUS في مصر",
      description_en:
        "GOLTENS supplies MOL PROGUARD OHC PLUS premium protective grease for overhead conductors and fittings, available for supply and matched to your project's requirements. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم الحماية الممتاز MOL PROGUARD OHC PLUS للموصلات والتجهيزات الهوائية، متوفر للتوريد ومطابق لمتطلبات مشروعكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-proguard-ohc-8000",
    slug: "mollube-mol-proguard-ohc-8000",
    name_en: "MOL PROGUARD OHC 8000",
    name_ar: "MOL PROGUARD OHC 8000",
    shortDescription_en:
      "MOL PROGUARD OHC 8000 — cold-applied, high-performance anti-corrosion protective grease for steel, galvanized steel, aluminum, and aluminum alloy conductors.",
    shortDescription_ar:
      "MOL PROGUARD OHC 8000 — شحم حماية عالي الأداء مضاد للتآكل يُطبّق باردًا، لموصلات الفولاذ والفولاذ المجلفن والألومنيوم والألومنيوم المركب.",
    longDescription_en:
      "MOL PROGUARD OHC 8000 is a high-performance, cold-applied anti-corrosion grease engineered to deliver superior long-term protection for overhead transmission line conductors, formulated with a specialized thickener system and a carefully selected additive package including advanced corrosion inhibitors, rust preventives, and antioxidants. It provides exceptional protection for steel, galvanized steel, aluminum, and aluminum alloy conductors, offering outstanding colloid stability and minimal oil separation. Available for supply through GOLTENS, matched to your project's requirements.",
    longDescription_ar:
      "MOL PROGUARD OHC 8000 هو شحم مضاد للتآكل عالي الأداء يُطبّق باردًا، صُمم لتوفير حماية متفوقة طويلة الأمد لموصلات خطوط النقل الهوائية، ومصنّع بنظام مادة سميكة متخصص وحزمة إضافات مختارة بعناية تشمل مثبطات تآكل متقدمة ومواد مانعة للصدأ ومضادات أكسدة. يوفر حماية استثنائية لموصلات الفولاذ والفولاذ المجلفن والألومنيوم والألومنيوم المركب، مع ثبات غروي متميز وانفصال زيت ضئيل. متوفر للتوريد من خلال GOLTENS، مطابقًا لمتطلبات مشروعكم.",
    sectorId: "lubricants-oils",
    categoryId: "overhead-conductor-greases",
    // "bare" is not used in the source for this product — conductor
    // wording preserved exactly as printed, not aligned to sibling
    // products' phrasing.
    applications_en: [
      "Steel conductors",
      "Galvanized steel conductors",
      "Aluminum conductors",
      "Aluminum alloy conductors",
    ],
    applications_ar: [
      "موصلات الفولاذ",
      "موصلات الفولاذ المجلفن",
      "موصلات الألومنيوم",
      "موصلات الألومنيوم المركب",
    ],
    specifications: [
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Brown",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Texture",
        label_ar: "الملمس",
        value: "Smooth",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Base Oil",
        label_ar: "الزيت الأساسي",
        value: "Mineral Oil",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "NLGI Grade",
        label_ar: "درجة NLGI",
        value: "3",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Oil Separation @ 225°C, 1h",
        label_ar: "انفصال الزيت عند 225°م، لمدة ساعة",
        value: "0.06%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 225°C, 4h",
        label_ar: "انفصال الزيت عند 225°م، لمدة 4 ساعات",
        value: "0.09%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 225°C, 24h",
        label_ar: "انفصال الزيت عند 225°م، لمدة 24 ساعة",
        value: "0.20%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Low-Temperature Adhesion (-40°C, 1h)",
        label_ar: "الالتصاق في درجة الحرارة المنخفضة (-40°م، ساعة)",
        value: "No cracking",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Number",
        label_ar: "رقم الحمض/القاعدة",
        value: "1.1",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Rate of Change of Coning Degree (Aging Test)",
        label_ar: "معدل تغيّر درجة التخروط (اختبار الشيخوخة)",
        value: "10%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Value After Aging Test",
        label_ar: "قيمة الحمض/القاعدة بعد اختبار الشيخوخة",
        value: "2",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Corrosion Test / Series",
        label_ar: "اختبار / سلسلة التآكل",
        value: "9",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Classification",
        label_ar: "التصنيف",
        value: "Class 40A225",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-proguard-ohc-li",
      "mollube-mol-proguard-ohc-m",
      "mollube-mol-proguard-ohc",
      "mollube-mol-proguard-ohc-plus",
      "mollube-mol-proguard-ohc-9000",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-proguard-ohc-8000-datasheet",
        title_en: "MOL PROGUARD OHC 8000 Datasheet",
        title_ar: "نشرة بيانات MOL PROGUARD OHC 8000",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "MOL PROGUARD OHC 8000 Overhead Conductor Grease Supplier Egypt",
      title_ar: "مورد شحم موصلات هوائية MOL PROGUARD OHC 8000 في مصر",
      description_en:
        "GOLTENS supplies MOL PROGUARD OHC 8000 cold-applied anti-corrosion grease for overhead transmission line conductors, available for supply and matched to your project's requirements. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم MOL PROGUARD OHC 8000 المضاد للتآكل والذي يُطبّق باردًا لموصلات خطوط النقل الهوائية، متوفر للتوريد ومطابق لمتطلبات مشروعكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "mollube-mol-proguard-ohc-9000",
    slug: "mollube-mol-proguard-ohc-9000",
    name_en: "MOL PROGUARD OHC 9000",
    name_ar: "MOL PROGUARD OHC 9000",
    shortDescription_en:
      "MOL PROGUARD OHC 9000 — cold-applied, high-performance anti-corrosion protective grease for steel, galvanized steel, and aluminum cables, rated to withstand extreme operating temperatures up to 250°C.",
    shortDescription_ar:
      "MOL PROGUARD OHC 9000 — شحم حماية عالي الأداء مضاد للتآكل يُطبّق باردًا، لكابلات الفولاذ والفولاذ المجلفن والألومنيوم، ويتحمّل درجات حرارة تشغيل قصوى تصل إلى 250°م.",
    longDescription_en:
      "MOL PROGUARD OHC 9000 is the latest innovation in MOLLUBE's overhead conductor grease line — a high-performance, cold-applied anti-corrosion grease engineered to deliver exceptional defense against rust and wear for steel, galvanized steel, and aluminum cables. Formulated with an advanced thickener system and a robust additive package including potent corrosion inhibitors and antioxidants, it is capable of withstanding extreme operating temperatures up to 250°C while maintaining low-temperature flexibility. Available for supply through GOLTENS, matched to your project's requirements.",
    longDescription_ar:
      "MOL PROGUARD OHC 9000 هو أحدث ابتكار في خط شحوم الموصلات الهوائية من MOLLUBE — شحم مضاد للتآكل عالي الأداء يُطبّق باردًا، صُمم لتوفير دفاع استثنائي ضد الصدأ والتآكل لكابلات الفولاذ والفولاذ المجلفن والألومنيوم. مصنّع بنظام مادة سميكة متطور وحزمة إضافات قوية تشمل مثبطات تآكل فعّالة ومضادات أكسدة، وقادر على تحمّل درجات حرارة تشغيل قصوى تصل إلى 250°م مع الحفاظ على المرونة في درجات الحرارة المنخفضة. متوفر للتوريد من خلال GOLTENS، مطابقًا لمتطلبات مشروعكم.",
    sectorId: "lubricants-oils",
    categoryId: "overhead-conductor-greases",
    // "cables" preserved exactly as printed for this product (not silently
    // changed to "conductors"); "aluminum alloy" is NOT stated for this
    // product's own text and is intentionally omitted.
    applications_en: [
      "Steel cables",
      "Galvanized steel cables",
      "Aluminum cables",
    ],
    applications_ar: [
      "كابلات الفولاذ",
      "كابلات الفولاذ المجلفن",
      "كابلات الألومنيوم",
    ],
    specifications: [
      {
        label_en: "Appearance",
        label_ar: "المظهر",
        value: "Brown",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Texture",
        label_ar: "الملمس",
        value: "Smooth",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Base Oil",
        label_ar: "الزيت الأساسي",
        value: "Mineral Oil",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "NLGI Grade",
        label_ar: "درجة NLGI",
        value: "3",
        group_en: "Physical Properties",
        group_ar: "الخصائص الفيزيائية",
      },
      {
        label_en: "Withstands Extreme Operating Temperatures Up To",
        label_ar: "يتحمّل درجات حرارة تشغيل قصوى تصل إلى",
        value: "250°C",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 250°C, 1h",
        label_ar: "انفصال الزيت عند 250°م، لمدة ساعة",
        value: "0.07%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 250°C, 4h",
        label_ar: "انفصال الزيت عند 250°م، لمدة 4 ساعات",
        value: "0.15%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Oil Separation @ 250°C, 24h",
        label_ar: "انفصال الزيت عند 250°م، لمدة 24 ساعة",
        value: "0.20%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Low-Temperature Adhesion (-40°C, 1h)",
        label_ar: "الالتصاق في درجة الحرارة المنخفضة (-40°م، ساعة)",
        value: "No cracking",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Number",
        label_ar: "رقم الحمض/القاعدة",
        value: "1.1",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Rate of Change of Coning Degree (Aging Test)",
        label_ar: "معدل تغيّر درجة التخروط (اختبار الشيخوخة)",
        value: "10%",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Acid/Base Value After Aging Test",
        label_ar: "قيمة الحمض/القاعدة بعد اختبار الشيخوخة",
        value: "2",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Corrosion Test / Series",
        label_ar: "اختبار / سلسلة التآكل",
        value: "9",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
      {
        label_en: "Classification",
        label_ar: "التصنيف",
        value: "Class 40A250",
        group_en: "Performance / Test Data",
        group_ar: "بيانات الأداء والاختبار",
      },
    ],
    relatedProductSlugs: [
      "mollube-mol-proguard-ohc-li",
      "mollube-mol-proguard-ohc-m",
      "mollube-mol-proguard-ohc",
      "mollube-mol-proguard-ohc-plus",
      "mollube-mol-proguard-ohc-8000",
    ],
    relatedBrandSlugs: ["mollube"],
    catalogues: [
      {
        id: "mollube-mol-proguard-ohc-9000-datasheet",
        title_en: "MOL PROGUARD OHC 9000 Datasheet",
        title_ar: "نشرة بيانات MOL PROGUARD OHC 9000",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [],
    seo: {
      title_en:
        "MOL PROGUARD OHC 9000 Overhead Conductor Grease Supplier Egypt",
      title_ar: "مورد شحم موصلات هوائية MOL PROGUARD OHC 9000 في مصر",
      description_en:
        "GOLTENS supplies MOL PROGUARD OHC 9000 cold-applied anti-corrosion grease for overhead transmission line cables, available for supply and matched to your project's requirements. Request a quote.",
      description_ar:
        "توفر GOLTENS شحم MOL PROGUARD OHC 9000 المضاد للتآكل والذي يُطبّق باردًا لكابلات خطوط النقل الهوائية، متوفر للتوريد ومطابق لمتطلبات مشروعكم. اطلب عرض سعر.",
    },
    availability: "available",
    quoteEnabled: true,
  },
];
