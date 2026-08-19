import type { Product } from "@/data/products/types";

/** Commercial Vehicles & Fleet Solutions → Trucks & Light Vehicles category. */
export const commercialTrucksLightVehicles: Product[] = [
  {
    id: "light-commercial-vehicles",
    slug: "light-commercial-vehicles",
    name_en: "Light Commercial Vehicles",
    name_ar: "المركبات التجارية الخفيفة",
    shortDescription_en:
      "Light commercial vehicles for last-mile delivery and light-duty fleet work.",
    shortDescription_ar:
      "مركبات تجارية خفيفة للتوصيل والأعمال الخفيفة للأسطول.",
    longDescription_en:
      "Light commercial vehicles for last-mile delivery, service calls, and light-duty fleet operations. We source vehicles matched to your payload requirement and body configuration.",
    longDescription_ar:
      "مركبات تجارية خفيفة للتوصيل بالمرحلة الأخيرة وأعمال الصيانة الميدانية والعمليات الخفيفة للأسطول. نقوم بتوريد المركبات المطابقة لمتطلبات الحمولة وتكوين الهيكل لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trucks-light-vehicles",
    relatedProductSlugs: ["pickup-trucks", "delivery-cargo-vans"],
    catalogues: [
      {
        id: "light-commercial-vehicles-datasheet",
        title_en: "Light Commercial Vehicles Datasheet",
        title_ar: "نشرة بيانات المركبات التجارية الخفيفة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: [
      "/images/products/commercial-vehicles/light-commercial-vehicles.webp",
    ],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "medium-heavy-trucks",
    slug: "medium-heavy-trucks",
    name_en: "Medium & Heavy Trucks",
    name_ar: "الشاحنات المتوسطة والثقيلة",
    shortDescription_en:
      "Medium and heavy trucks for bulk transport and heavy-duty fleet operations.",
    shortDescription_ar:
      "شاحنات متوسطة وثقيلة لنقل البضائع الثقيلة وعمليات الأسطول الشاقة.",
    longDescription_en:
      "Medium and heavy trucks for bulk transport, construction logistics, and heavy-duty fleet operations. We source vehicles matched to your gross vehicle weight and body or chassis requirement.",
    longDescription_ar:
      "شاحنات متوسطة وثقيلة لنقل البضائع الثقيلة ولوجستيات الإنشاءات وعمليات الأسطول الشاقة. نقوم بتوريد المركبات المطابقة للوزن الإجمالي وتكوين الهيكل أو الشاسيه لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trucks-light-vehicles",
    relatedProductSlugs: ["light-commercial-vehicles", "utility-trucks"],
    catalogues: [
      {
        id: "medium-heavy-trucks-datasheet",
        title_en: "Medium & Heavy Trucks Datasheet",
        title_ar: "نشرة بيانات الشاحنات المتوسطة والثقيلة",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/medium-heavy-trucks.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "pickup-trucks",
    slug: "pickup-trucks",
    name_en: "Pickup Trucks",
    name_ar: "شاحنات البيك أب",
    shortDescription_en:
      "Pickup trucks for field operations, site work, and light-load transport.",
    shortDescription_ar:
      "شاحنات بيك أب لعمليات الميدان وأعمال المواقع ونقل الأحمال الخفيفة.",
    longDescription_en:
      "Pickup trucks for field operations, site supervision, and light-load transport across industrial and government fleets. We source vehicles matched to your payload and drivetrain requirement.",
    longDescription_ar:
      "شاحنات بيك أب لعمليات الميدان والإشراف على المواقع ونقل الأحمال الخفيفة عبر الأساطيل الصناعية والحكومية. نقوم بتوريد المركبات المطابقة لمتطلبات الحمولة ونظام الدفع لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trucks-light-vehicles",
    relatedProductSlugs: ["light-commercial-vehicles", "utility-trucks"],
    catalogues: [
      {
        id: "pickup-trucks-datasheet",
        title_en: "Pickup Trucks Datasheet",
        title_ar: "نشرة بيانات شاحنات البيك أب",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/pickup-trucks.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "delivery-cargo-vans",
    slug: "delivery-cargo-vans",
    name_en: "Delivery & Cargo Vans",
    name_ar: "شاحنات وسيارات التوصيل",
    shortDescription_en:
      "Cargo vans for enclosed goods delivery and mobile service operations.",
    shortDescription_ar:
      "شاحنات نقل بضائع مغلقة للتوصيل وعمليات الخدمة المتنقلة.",
    longDescription_en:
      "Cargo vans for enclosed goods delivery, courier operations, and mobile service work. We source vehicles matched to your required cargo volume and fitout requirement.",
    longDescription_ar:
      "شاحنات نقل بضائع مغلقة للتوصيل وعمليات البريد السريع وأعمال الخدمة المتنقلة. نقوم بتوريد المركبات المطابقة لحجم البضائع المطلوب ومتطلبات التجهيز الداخلي لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trucks-light-vehicles",
    relatedProductSlugs: ["light-commercial-vehicles", "pickup-trucks"],
    catalogues: [
      {
        id: "delivery-cargo-vans-datasheet",
        title_en: "Delivery & Cargo Vans Datasheet",
        title_ar: "نشرة بيانات شاحنات وسيارات التوصيل",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/delivery-cargo-vans.webp"],
    availability: "available",
    quoteEnabled: true,
  },
  {
    id: "utility-trucks",
    slug: "utility-trucks",
    name_en: "Utility Trucks",
    name_ar: "الشاحنات متعددة الاستخدامات",
    shortDescription_en:
      "Utility trucks fitted for maintenance, service, and multi-purpose fleet work.",
    shortDescription_ar:
      "شاحنات متعددة الاستخدامات مجهزة لأعمال الصيانة والخدمة والاستخدامات المتنوعة للأسطول.",
    longDescription_en:
      "Utility trucks fitted with service bodies for maintenance crews, field service, and multi-purpose fleet operations. We source vehicles matched to your fitout and equipment-carrying requirement.",
    longDescription_ar:
      "شاحنات متعددة الاستخدامات مجهزة بهياكل خدمة لطواقم الصيانة والخدمة الميدانية والعمليات المتنوعة للأسطول. نقوم بتوريد المركبات المطابقة للتجهيز الداخلي ومتطلبات حمل المعدات لديكم.",
    sectorId: "commercial-vehicles",
    categoryId: "trucks-light-vehicles",
    relatedProductSlugs: ["medium-heavy-trucks", "pickup-trucks"],
    catalogues: [
      {
        id: "utility-trucks-datasheet",
        title_en: "Utility Trucks Datasheet",
        title_ar: "نشرة بيانات الشاحنات متعددة الاستخدامات",
        kind: "datasheet",
        fileType: "pdf",
        language: "en",
        fileUrl: null,
      },
    ],
    images: ["/images/products/commercial-vehicles/utility-trucks.webp"],
    availability: "available",
    quoteEnabled: true,
  },
];
