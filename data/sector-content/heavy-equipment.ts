import { heavyEquipmentGuide } from "@/data/sector-content/heavy-equipment-guide";
import type { SectorContent } from "@/data/sector-content/types";

/**
 * Heavy Equipment & Machinery's real content — written to the same standard
 * as `fire-protection.ts`: no invented certifications, no named customer
 * projects, no fabricated technical specifications or lead times.
 *
 * This sector renders the equipment procurement & application guide
 * (`equipmentGuide`, see `heavy-equipment-guide.ts`) in place of the generic
 * About / Industries / Advantages sections, so it carries no `about`,
 * `applications` or `advantages` of its own. Business wording is limited to
 * confirmed capabilities: GOLTENS supplies heavy equipment and machinery
 * according to project requirements and specifications, new or used
 * according to the customer's request.
 */
export const heavyEquipmentContent: SectorContent = {
  equipmentGuide: heavyEquipmentGuide,

  faqs: [
    {
      question_en: "How do I request a quotation?",
      answer_en:
        "Use the quotation form on this page. Include the equipment type and quantity, the main tasks and site conditions, and your technical specification if available — each equipment guide lists the details that matter for that machine.",
      question_ar: "كيف يمكنني طلب عرض سعر؟",
      answer_ar:
        "استخدموا نموذج طلب عرض السعر في هذه الصفحة، وأرسلوا نوع المعدة والعدد المطلوب، والمهام الرئيسية وظروف الموقع، والمواصفات الفنية إن وُجدت. ويوضح كل دليل معدة البيانات المهمة الخاصة بها.",
    },
    {
      question_en: "Can GOLTENS supply new or used equipment?",
      answer_en:
        "Yes. Heavy equipment can be sourced new or used according to your request. Please state your preference, and any requirement on age or condition, when you request a quotation.",
      question_ar: "هل توفر GOLTENS معدات جديدة أو مستعملة؟",
      answer_ar:
        "نعم، يمكن توريد المعدات الثقيلة جديدة أو مستعملة حسب طلبكم. يُرجى توضيح ما تفضلونه، وأي اشتراطات تخص سنة الصنع أو الحالة، عند طلب عرض السعر.",
    },
    {
      question_en: "Can I request equipment that isn't described on this page?",
      answer_en:
        "Yes. GOLTENS supplies heavy equipment and machinery according to project requirements and specifications — send your requirement and our team will review it.",
      question_ar: "هل يمكنني طلب معدات غير مذكورة في هذه الصفحة؟",
      answer_ar:
        "نعم، توفر GOLTENS المعدات والآليات الثقيلة وفق متطلبات المشروع والمواصفات الفنية؛ أرسلوا متطلباتكم وسيراجعها فريقنا.",
    },
    {
      question_en:
        "Are the equipment guides on this page a list of available models?",
      answer_en:
        "No. The guides are general information to help you define your requirement. The exact configuration, condition and availability of the equipment are confirmed in each quotation.",
      question_ar: "هل أدلة المعدات في هذه الصفحة قائمة بالموديلات المتوفرة؟",
      answer_ar:
        "لا، الأدلة معلومات عامة تساعدكم على تحديد احتياجكم، ويتم تأكيد تكوين المعدة وحالتها وتوافرها بدقة في كل عرض سعر.",
    },
    {
      question_en: "What is the lead time?",
      answer_en:
        "Lead time depends on the specific equipment, whether it is new or used, and its origin, and is confirmed with every quotation — it is not the same across all items, so we always state it explicitly rather than quote a single blanket figure.",
      question_ar: "ما هي مدة التوريد؟",
      answer_ar:
        "تعتمد مدة التوريد على المعدة المطلوبة، وهل هي جديدة أم مستعملة، وبلد المنشأ، ويتم تأكيدها مع كل عرض سعر؛ فهي تختلف من معدة لأخرى، لذلك نوضحها دائمًا بشكل صريح بدلًا من تحديد مدة عامة موحدة.",
    },
  ],

  relatedSectorSlugs: [
    "commercial-vehicles",
    "construction",
    "industrial-equipment",
    "electrical-energy",
    "global-sourcing",
  ],

  seo: {
    title_en: "Heavy Equipment & Machinery Supplier Egypt",
    title_ar: "مورد المعدات الثقيلة والآليات في مصر",
    description_en:
      "Heavy equipment guide and procurement: excavators, loaders, bulldozers, cranes, forklifts, concrete and compaction equipment — supplied new or used to your project requirements and specifications.",
    description_ar:
      "دليل المعدات الثقيلة وتوريدها: حفارات ولودرات وبلدوزرات وأوناش ورافعات شوكية ومعدات الخرسانة والدك، جديدة أو مستعملة وفق متطلبات مشروعكم ومواصفاته.",
  },
};
