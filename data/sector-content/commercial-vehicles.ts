import { commercialVehiclesGuide } from "@/data/sector-content/commercial-vehicles-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Commercial Vehicles & Fleet Solutions' real content — written to the same
 * standard as `fire-protection.ts`: no invented certifications, no named
 * customer projects, no fabricated technical specifications or lead times.
 *
 * This sector renders the commercial vehicle & fleet procurement guide
 * (`equipmentGuide`, see `commercial-vehicles-guide.ts`) in place of the
 * generic About / Industries / Advantages sections, so it carries no
 * `about`, `applications` or `advantages` of its own. Business wording is
 * limited to confirmed capabilities: GOLTENS supplies commercial vehicles
 * according to project, fleet and operating requirements, and can
 * coordinate specialized body builders or qualified contractors when
 * required. Configuration, condition, availability and lead time are
 * confirmed during quotation. `hero` replaces the sector page's hero copy
 * from `data/sectors.ts` with the same conservative procurement wording.
 */
export const commercialVehiclesContent: SectorContent = {
  hero: {
    subtitle_en:
      "GOLTENS supplies commercial vehicles and fleet solutions according to your operational requirements, technical specifications and project or tender needs.",
    subtitle_ar:
      "توفر GOLTENS المركبات التجارية وحلول الأساطيل وفق متطلبات التشغيل لديكم والمواصفات الفنية واحتياجات المشروع أو المناقصة.",
    description_en:
      "Trucks, light vehicles, trailers and specialized municipal vehicles, specified to your operation. Configuration, availability and lead time are confirmed during quotation.",
    description_ar:
      "شاحنات ومركبات خفيفة ومقطورات ومركبات بلدية متخصصة تُحدَّد وفق طبيعة التشغيل لديكم، ويتم تأكيد التكوين والتوافر ومدة التوريد أثناء إعداد عرض السعر.",
  },

  equipmentGuide: commercialVehiclesGuide,

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Use the quotation form on this page. Include the vehicle type and quantity, the operation and route conditions, and your technical specification if available — each vehicle guide lists the details that matter for that vehicle.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "استخدموا نموذج طلب عرض السعر في هذه الصفحة، وأرسلوا نوع المركبة والعدد المطلوب، وطبيعة التشغيل وظروف المسارات، والمواصفات الفنية إن وُجدت. ويوضح كل دليل مركبة البيانات المهمة الخاصة بها.",
    },
    {
      question_en:
        "Are the vehicle guides on this page a list of available models?",
      answer_en:
        "No. The guides are general information to help you define your requirement. GOLTENS supplies commercial vehicles according to project, fleet and operating requirements; the specific configuration, condition, availability and lead time are confirmed during quotation.",
      question_ar: "هل أدلة المركبات في هذه الصفحة قائمة بالموديلات المتوفرة؟",
      answer_ar:
        "لا، الأدلة معلومات عامة تساعدكم على تحديد احتياجكم. توفر GOLTENS المركبات التجارية وفق متطلبات المشروع والأسطول والتشغيل، ويتم تأكيد التكوين والحالة والتوافر ومدة التوريد أثناء إعداد عرض السعر.",
    },
    {
      question_en: "Can GOLTENS arrange specialized bodies and equipment?",
      answer_en:
        "When a vehicle needs a specialized body or mounted equipment, GOLTENS can coordinate specialized body builders or qualified contractors when required. Describe the body or equipment you need in your quotation request.",
      question_ar: "هل يمكن لـGOLTENS ترتيب الهياكل والتجهيزات المتخصصة؟",
      answer_ar:
        "عندما تحتاج المركبة إلى هيكل متخصص أو تجهيزات مركّبة، يمكن لـGOLTENS التنسيق مع مصنّعي الهياكل المتخصصة أو المقاولين المؤهلين عند الحاجة. يُرجى وصف الهيكل أو التجهيزات المطلوبة في طلب عرض السعر.",
    },
    {
      question_en: "Can I request a vehicle that isn't described on this page?",
      answer_en:
        "Yes. Send your requirement and our team will review it against your project, fleet and operating requirements.",
      question_ar: "هل يمكنني طلب مركبة غير مذكورة في هذه الصفحة؟",
      answer_ar:
        "نعم، أرسلوا متطلباتكم وسيراجعها فريقنا وفق متطلبات مشروعكم وأسطولكم وطبيعة التشغيل.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific vehicle and its configuration, including any specialized body, and is confirmed during quotation — it is not the same across all vehicles, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المركبة المطلوبة وتكوينها، بما في ذلك أي هيكل متخصص، ويتم تأكيدها أثناء إعداد عرض السعر؛ فهي تختلف من مركبة لأخرى، لذلك نوضحها دائمًا بشكل صريح بدلًا من تحديد مدة عامة موحدة.",
    },
  ],

  relatedSectorSlugs: [
    "heavy-equipment",
    "industrial-equipment",
    "government-procurement",
    "electrical-energy",
    "global-sourcing",
  ],

  seo: {
    title_en: "Commercial Vehicles & Fleet Supplier Egypt",
    title_ar: "مورد المركبات التجارية والأساطيل في مصر",
    description_en:
      "Commercial vehicle and fleet procurement guide: trucks, vans, pickups, trailers, tankers and specialized municipal vehicles — supplied according to your project, fleet and operating requirements.",
    description_ar:
      "دليل المركبات التجارية وتوريد الأساطيل: شاحنات وفانات وبيك أب ومقطورات وصهاريج ومركبات بلدية متخصصة، وفق متطلبات مشروعكم وأسطولكم وطبيعة التشغيل.",
  },
};
