import type { Product } from "@/data/products/types";

/** Fire Protection → Accessories category. */
export const fireProtectionAccessories: Product[] = [
  {
    id: "hydrants",
    slug: "hydrants",
    name_en: "Hydrants",
    name_ar: "حنفيات الحريق",
    shortDescription_en:
      "Above-ground and underground fire hydrants for site fire water networks.",
    shortDescription_ar:
      "حنفيات حريق أرضية وتحت أرضية لشبكات مياه الحريق بالموقع.",
    longDescription_en:
      "Fire hydrants provide a fixed water supply point across a site's fire water network for both fire brigade use and hose reel connections. We source above-ground and underground types matched to your site layout and connection standard.",
    longDescription_ar:
      "توفر حنفيات الحريق نقطة تزويد ثابتة بالمياه ضمن شبكة مياه الحريق بالموقع، لاستخدام رجال الإطفاء وتوصيلات بكرات الخراطيم. نقوم بتوريد الأنواع الأرضية وتحت الأرضية مطابقة لمخطط موقعكم ومعيار التوصيل المعتمد.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    relatedProductSlugs: ["landing-valves", "fire-hoses"],
    relatedBrandSlugs: ["naffco", "victaulic"],
    catalogues: [
      {
        id: "hydrants-datasheet",
        title_en: "Hydrants Datasheet",
        title_ar: "نشرة بيانات حنفيات الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/hydrants.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "landing-valves",
    slug: "landing-valves",
    name_en: "Landing Valves",
    name_ar: "صمامات الإنزال (لاندنج)",
    shortDescription_en:
      "Landing valves for wet and dry riser fire-fighting connections.",
    shortDescription_ar:
      "صمامات إنزال لتوصيلات الأعمدة الصاعدة الرطبة والجافة لمكافحة الحريق.",
    longDescription_en:
      "Landing valves provide the fire brigade connection point on each floor of a wet or dry riser system, allowing hoses to be connected directly to the building's fire water supply. We source them matched to your riser type and floor count.",
    longDescription_ar:
      "توفر صمامات الإنزال نقطة توصيل رجال الإطفاء في كل طابق من نظام العمود الصاعد الرطب أو الجاف، مما يتيح توصيل الخراطيم مباشرة بإمداد مياه الحريق بالمبنى. نقوم بتوريدها مطابقة لنوع العمود الصاعد وعدد الطوابق لديكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    relatedProductSlugs: ["hydrants", "fire-hoses", "alarm-valves"],
    relatedBrandSlugs: ["naffco", "victaulic"],
    catalogues: [
      {
        id: "landing-valves-datasheet",
        title_en: "Landing Valves Datasheet",
        title_ar: "نشرة بيانات صمامات الإنزال",
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
    id: "fire-hose-reels",
    slug: "fire-hose-reels",
    name_en: "Fire Hose Reels",
    name_ar: "بكرات خراطيم الحريق",
    shortDescription_en:
      "Fixed hose reels for first-response fire fighting inside buildings.",
    shortDescription_ar:
      "بكرات خراطيم ثابتة للاستجابة الأولى لمكافحة الحريق داخل المباني.",
    longDescription_en:
      "Hose reels give building occupants a fixed, ready-to-use water supply for first-response fire fighting before the fire brigade arrives. We source reels matched to your cabinet layout and hose length requirement.",
    longDescription_ar:
      "توفر بكرات الخراطيم لشاغلي المبنى إمدادًا ثابتًا وجاهزًا للمياه للاستجابة الأولى لمكافحة الحريق قبل وصول رجال الإطفاء. نقوم بتوريد البكرات مطابقة لتخطيط الخزانة لديكم ومتطلبات طول الخرطوم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    relatedProductSlugs: ["fire-cabinets", "fire-hoses"],
    relatedBrandSlugs: ["naffco"],
    catalogues: [
      {
        id: "fire-hose-reels-datasheet",
        title_en: "Fire Hose Reels Datasheet",
        title_ar: "نشرة بيانات بكرات خراطيم الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-hose-reels.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fire-hoses",
    slug: "fire-hoses",
    name_en: "Fire Hoses",
    name_ar: "خراطيم الحريق",
    shortDescription_en:
      "Fire-fighting hoses sourced to your required length, diameter, and pressure rating.",
    shortDescription_ar:
      "خراطيم مكافحة حريق يتم توريدها وفق الطول والقطر وتصنيف الضغط المطلوب.",
    longDescription_en:
      "Fire hoses connect hydrants, landing valves, and hose reels to the point of use. We source them to your required length, diameter, and pressure rating, matched to your fire brigade or reel system's coupling standard.",
    longDescription_ar:
      "تربط خراطيم الحريق الحنفيات وصمامات الإنزال وبكرات الخراطيم بنقطة الاستخدام. نقوم بتوريدها وفق الطول والقطر وتصنيف الضغط المطلوب، ومطابقة لمعيار التوصيل الخاص بنظام رجال الإطفاء أو البكرات لديكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    relatedProductSlugs: ["fire-hose-reels", "hydrants", "landing-valves"],
    relatedBrandSlugs: ["naffco"],
    catalogues: [
      {
        id: "fire-hoses-datasheet",
        title_en: "Fire Hoses Datasheet",
        title_ar: "نشرة بيانات خراطيم الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-hoses.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "fire-extinguishers",
    slug: "fire-extinguishers",
    name_en: "Fire Extinguishers",
    name_ar: "طفايات الحريق",
    shortDescription_en:
      "Certified portable extinguishers for every facility type and fire class.",
    shortDescription_ar:
      "طفايات حريق محمولة ومعتمدة لجميع أنواع المنشآت وفئات الحريق.",
    longDescription_en:
      "Portable fire extinguishers are the most immediate first-response tool available to occupants. We source certified extinguishers across fire classes — water, foam, CO2, dry powder, and wet chemical — matched to the hazards present in your facility.",
    longDescription_ar:
      "تُعد طفايات الحريق المحمولة أسرع أداة استجابة أولى متاحة لشاغلي المنشأة. نقوم بتوريد طفايات معتمدة عبر فئات الحريق المختلفة — مياه، رغوة، ثاني أكسيد الكربون، مسحوق جاف، وكيميائي رطب — مطابقة للمخاطر الموجودة في منشأتكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    relatedProductSlugs: ["fire-cabinets"],
    relatedBrandSlugs: ["kidde", "naffco"],
    catalogues: [
      {
        id: "fire-extinguishers-datasheet",
        title_en: "Fire Extinguishers Datasheet",
        title_ar: "نشرة بيانات طفايات الحريق",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/fire-extinguishers.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "emergency-lighting",
    slug: "emergency-lighting",
    name_en: "Emergency Lighting",
    name_ar: "إضاءة الطوارئ",
    shortDescription_en:
      "Emergency and exit lighting for safe evacuation during a power outage.",
    shortDescription_ar:
      "إضاءة طوارئ ومخارج لإخلاء آمن عند انقطاع التيار الكهربائي.",
    longDescription_en:
      "Emergency lighting activates automatically on power loss, keeping escape routes visible during evacuation. We source fittings matched to your building's escape route layout and required duration.",
    longDescription_ar:
      "تعمل إضاءة الطوارئ تلقائيًا عند انقطاع التيار الكهربائي، مما يحافظ على وضوح مسارات الهروب أثناء الإخلاء. نقوم بتوريد الوحدات مطابقة لمخطط مسارات الهروب في مبناكم والمدة المطلوبة.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    relatedProductSlugs: ["exit-signs"],
    catalogues: [
      {
        id: "emergency-lighting-datasheet",
        title_en: "Emergency Lighting Datasheet",
        title_ar: "نشرة بيانات إضاءة الطوارئ",
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
    id: "exit-signs",
    slug: "exit-signs",
    name_en: "Exit Signs",
    name_ar: "لافتات الخروج",
    shortDescription_en:
      "Illuminated exit signage for clear evacuation route guidance.",
    shortDescription_ar: "لافتات خروج مضيئة لتوجيه واضح لمسارات الإخلاء.",
    longDescription_en:
      "Illuminated exit signs guide occupants toward the nearest safe exit, staying visible under emergency lighting conditions. We source signage matched to your building's evacuation plan.",
    longDescription_ar:
      "توجه لافتات الخروج المضيئة شاغلي المبنى نحو أقرب مخرج آمن، وتظل مرئية في ظروف إضاءة الطوارئ. نقوم بتوريد اللافتات مطابقة لخطة الإخلاء في مبناكم.",
    sectorId: "fire-protection",
    categoryId: "accessories",
    relatedProductSlugs: ["emergency-lighting"],
    catalogues: [
      {
        id: "exit-signs-datasheet",
        title_en: "Exit Signs Datasheet",
        title_ar: "نشرة بيانات لافتات الخروج",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/fire-protection/exit-signs.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
