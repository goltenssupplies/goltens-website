# GOLTENS — Product-Centric Knowledge Center: Master Product Map

> **Internal document — not for publication.**
> Generated from repository audit on 2026-11-10.
> Branch: `claude/knowledge-center-content`

## 1. Executive Summary

The GOLTENS product catalog contains **249 unique product records** across **11 sectors**.

- **222 registered** products (imported in `data/products/index.ts`, active in the Product Engine)
- **27 unregistered** products (source files preserved under `data/products/healthcare/`, deliberately removed from active taxonomy)
- **34 products** have a complete public identity and are eligible for public product pages
- **188 registered products** lack public identity — product detail pages return 404 via `hasPublicIdentity()` filter

## 2. Verified Counts

| Metric | Count |
|---|---|
| Sectors (`data/sectors.ts`) | 11 |
| Categories (`data/product-categories.ts`) | 50 |
| Categories with registered products | 46 |
| Taxonomy-only categories (0 products) | 4 |
| Unregistered healthcare legacy categories | 9 |
| Total product records in files | 249 |
| Registered products | 222 |
| Unregistered products (healthcare legacy) | 27 |
| Products with public identity | 34 |
| Existing knowledge articles | 11 |
|   — Electrical & Energy (product-linked, reusable) | 3 |
|   — Fire Protection (sector-level, pre-existing) | 5 |
|   — Government Procurement (OUT OF SCOPE) | 3 |

## 3. Count Reconciliation

### Current verified: 249 products / 11 sectors / 50 categories

This is the authoritative count from the current repository source code.

### Previously reported: 178 products / 10 sectors / 41 categories

This count predates the **Lubricants & Oils** sector (sector #11). Reconciliation:

| Factor | Explanation |
|---|---|
| 10 → 11 sectors | Lubricants & Oils sector added |
| 41 → 50 categories | +13 lubricant categories, −4 categories consolidated or removed during healthcare reorganization |
| 178 → 222 registered | +58 lubricant products, −14 healthcare products moved from 5-per-category to 3-per-category during sector reorganization into Hospital Equipment & Medical Supplies (originally 45 products across 15 categories → now 18 across 6 active + 27 unregistered across 9 legacy) |

**Arithmetic check:** 178 original + 58 lubricants − 14 healthcare reduction = 222 registered ✓

### Older audit: 249 products / 11 sectors / 51 categories

| Factor | Explanation |
|---|---|
| 249 total products | Matches current total (222 registered + 27 unregistered = 249) — this audit counted all product records in files, not only registered ones ✓ |
| 11 sectors | Lubricants sector was already present ✓ |
| 51 → 50 categories | One category removed or consolidated since that audit (likely during healthcare reorganization) |

## 4. Product Classification and Publication Status

### By publication status

| Status | Count | Description |
|---|---|---|
| Public | 34 | Has `publicName_en/ar` + `publicShortDescription_en/ar` — product page renders |
| Registered, not public | 188 | In Product Engine, missing public identity — page 404s |
| Unregistered | 27 | Source file preserved, not imported — no route exists |

### By product type

| Product Type | Count |
|---|---|
| chemical | 10 |
| component | 7 |
| equipment | 47 |
| equipment/furniture | 5 |
| equipment/security | 5 |
| equipment/vehicle | 31 |
| lubricant | 33 |
| lubricant/grease | 25 |
| material | 15 |
| medical-consumable | 3 |
| medical-equipment | 15 |
| service/capability | 15 |
| system | 11 |

## 5. Detailed Map by Sector and Category

### Commercial Vehicles & Fleet Solutions — المركبات التجارية وحلول الأساطيل

**16 products** across 3 categories — 0 public, 16 not public

#### Specialized & Municipal Vehicles — المركبات المتخصصة والبلدية (6 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `ambulances` | Ambulances | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `fuel-tankers` | Fuel Tankers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `refuse-collection-vehicles` | Refuse Collection Vehicles | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `sewer-cleaning-vehicles` | Sewer Cleaning & Jetting Vehicles | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `street-sweeping-vehicles` | Street Sweeping Vehicles | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `water-tankers` | Water Tankers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |

#### Trailers — المقطورات (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `flatbed-trailers` | Flatbed Trailers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `heavy-duty-trailers` | Heavy Duty Trailers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `lowbed-trailers` | Lowbed Trailers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `refrigerated-trailers` | Refrigerated Trailers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `tanker-trailers` | Tanker Trailers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |

#### Trucks & Light Vehicles — الشاحنات والمركبات الخفيفة (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `delivery-cargo-vans` | Delivery & Cargo Vans | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `light-commercial-vehicles` | Light Commercial Vehicles | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `medium-heavy-trucks` | Medium & Heavy Trucks | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `pickup-trucks` | Pickup Trucks | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `utility-trucks` | Utility Trucks | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |

### Construction & Infrastructure Materials — مواد البناء والبنية التحتية

**15 products** across 3 categories — 0 public, 15 not public

#### Cement & Concrete Materials — الأسمنت ومواد الخرسانة (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `concrete-admixtures` | Concrete Admixtures & Additives | material | registered-not-public | name, specs, catalogues, images | medium |
| `concrete-blocks-bricks` | Concrete Blocks & Bricks | material | registered-not-public | name, specs, catalogues, images | medium |
| `portland-cement` | Portland Cement | material | registered-not-public | name, specs, catalogues, images | medium |
| `precast-concrete-products` | Precast Concrete Products | material | registered-not-public | name, specs, catalogues, images | medium |
| `ready-mix-aggregates` | Aggregates & Sand | material | registered-not-public | name, specs, catalogues, images | medium |

#### Site & Infrastructure Materials — مواد الموقع والبنية التحتية (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `manhole-covers-drainage` | Manhole Covers & Drainage Products | material | registered-not-public | name, specs, catalogues, images | medium |
| `piping-systems-pvc-hdpe` | Piping Systems (PVC, HDPE, GRP) | material | registered-not-public | name, specs, catalogues, images | medium |
| `plumbing-fittings-valves` | Plumbing Fittings | material | registered-not-public | name, specs, catalogues, images | medium |
| `road-construction-materials` | Road Construction Materials | material | registered-not-public | name, specs, catalogues, images | medium |
| `sanitary-ware-fittings` | Sanitary Ware & Bathroom Fittings | material | registered-not-public | name, specs, catalogues, images | medium |

#### Structural & Waterproofing Materials — المواد الإنشائية والعزل المائي (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `construction-sealants` | Construction Sealants & Expansion Joints | material | registered-not-public | name, specs, catalogues, images | medium |
| `reinforcement-steel-rebar` | Reinforcement Steel (Rebar) | material | registered-not-public | name, specs, catalogues, images | medium |
| `structural-steel-sections` | Structural Steel Sections | material | registered-not-public | name, specs, catalogues, images | medium |
| `thermal-insulation-boards` | Thermal Insulation Boards | material | registered-not-public | name, specs, catalogues, images | medium |
| `waterproofing-membranes` | Waterproofing Membranes | material | registered-not-public | name, specs, catalogues, images | medium |

### Electrical & Energy Solutions — حلول الكهرباء والطاقة

**15 products** across 3 categories — 0 public, 15 not public

#### Lighting & Solar Energy — الإنارة والطاقة الشمسية (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `battery-energy-storage-systems` | Battery Energy Storage Systems | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `explosion-proof-lighting` | Explosion-Proof Lighting | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `high-mast-lighting` | High Mast Lighting | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `led-industrial-lighting` | LED Industrial Lighting Fixtures | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `solar-pv-systems` | Solar PV Panels & Inverters | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Generators & Standby Power — المولدات وأنظمة الطاقة الاحتياطية (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `automatic-transfer-switches` | Automatic Transfer Switches | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `battery-chargers-rectifiers` | Battery Chargers & Rectifiers | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `diesel-generators` | Diesel Generators | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `ups-systems` | Uninterruptible Power Supplies (UPS) | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `voltage-stabilizers` | Voltage Stabilizers | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Switchgear & Distribution — لوحات التوزيع والمفاتيح الكهربائية (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `busbar-trunking-systems` | Busbar Trunking Systems | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `distribution-panel-boards` | Distribution Boards & Panel Boards | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `low-voltage-switchgear` | Low Voltage Switchgear | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `medium-voltage-switchgear` | Medium Voltage Switchgear | equipment | registered-not-public | name, specs, faq, catalogues, seo, images | high |
| `ring-main-units` | Ring Main Units (RMU) | equipment | registered-not-public | name, specs, catalogues, images | medium |

### Fire Protection Equipment — معدات مكافحة الحريق

**30 products** across 8 categories — 0 public, 30 not public

#### Accessories — الملحقات (7 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `emergency-lighting` | Emergency Lighting | component | registered-not-public | name, specs, catalogues, images | medium |
| `exit-signs` | Exit Signs | component | registered-not-public | name, specs, catalogues, images | medium |
| `fire-extinguishers` | Fire Extinguishers | component | registered-not-public | name, specs, catalogues, images | medium |
| `fire-hose-reels` | Fire Hose Reels | component | registered-not-public | name, specs, catalogues, images | medium |
| `fire-hoses` | Fire Hoses | component | registered-not-public | name, specs, catalogues, images | medium |
| `hydrants` | Hydrants | component | registered-not-public | name, specs, catalogues, images | medium |
| `landing-valves` | Landing Valves | component | registered-not-public | name, specs, catalogues, images | medium |

#### Cabinets — الخزائن (1 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `fire-cabinets` | Fire Cabinets | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Fire Alarm — إنذار الحريق (6 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `addressable-panels` | Addressable Panels | system | registered-not-public | name, specs, catalogues, images | medium |
| `beam-detectors` | Beam Detectors | system | registered-not-public | name, specs, catalogues, images | medium |
| `conventional-panels` | Conventional Panels | system | registered-not-public | name, specs, catalogues, images | medium |
| `fire-alarm-systems` | Fire Alarm Systems | system | registered-not-public | name, specs, catalogues, images | medium |
| `heat-detectors` | Heat Detectors | system | registered-not-public | name, specs, catalogues, images | medium |
| `smoke-detectors` | Smoke Detectors | system | registered-not-public | name, specs, catalogues, images | medium |

#### Fire Pumps — مضخات الحريق (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `diesel-engines` | Diesel Engines | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `electric-motors` | Electric Motors | equipment | registered-not-public | name, specs, catalogues, seo, images | medium |
| `fire-pump-controllers` | Fire Pump Controllers | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `fire-pumps` | Fire Pumps | equipment | registered-not-public | name, specs, faq, catalogues, images | medium |
| `jockey-pumps` | Jockey Pumps | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### FM200 — FM200 (1 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `fm200` | FM200 | system | registered-not-public | name, specs, faq, catalogues, images | medium |

#### Sprinklers — رشاشات الإخماد (1 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `sprinklers` | Sprinklers | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Suppression Systems — أنظمة الإخماد (4 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `co2-systems` | CO2 Systems | system | registered-not-public | name, specs, catalogues, images | medium |
| `foam-systems` | Foam Systems | system | registered-not-public | name, specs, catalogues, images | medium |
| `gas-suppression` | Gas Suppression | system | registered-not-public | name, specs, catalogues, images | medium |
| `novec-1230` | NOVEC 1230 | system | registered-not-public | name, specs, catalogues, images | medium |

#### Valves — الصمامات (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `alarm-valves` | Alarm Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `butterfly-valves` | Butterfly Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `check-valves` | Check Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `gate-valves` | Gate Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `os-y-valves` | OS&Y Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |

### Global Sourcing & Hard-to-Source Procurement — التوريد العالمي والأصناف صعبة التوفير

**15 products** across 3 categories — 0 public, 15 not public

#### Bulk Materials & Industrial Supply — المواد بالجملة والتوريد الصناعي (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `bulk-commodity-sourcing` | Bulk Commodity Sourcing | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `industrial-raw-materials-sourcing` | Industrial Raw Materials | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `packaging-materials-sourcing` | Packaging Materials | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `project-specific-procurement` | Project-Specific Procurement | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `specialty-equipment-on-request` | Specialty Equipment on Request | service/capability | registered-not-public | name, specs, catalogues, images | medium |

#### Project Sourcing & Logistics — توريد المشاريع واللوجستيات (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `certification-compliance-sourcing` | Certification & Compliance-Driven Sourcing | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `custom-sourcing-requests` | Custom Sourcing Requests | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `emergency-urgent-procurement` | Emergency & Urgent Procurement | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `export-import-logistics-support` | Export & Import Logistics Support | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `turnkey-equipment-packages` | Turnkey Equipment Packages | service/capability | registered-not-public | name, specs, catalogues, images | medium |

#### Spare Parts & OEM Sourcing — قطع الغيار والتوريد الأصلي (OEM) (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `custom-manufactured-components` | Custom-Manufactured Components | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `non-standard-hard-to-find-items` | Non-Standard & Hard-to-Find Items | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `obsolete-parts-sourcing` | Obsolete & Discontinued Parts Sourcing | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `oem-replacement-parts` | OEM Replacement Parts | service/capability | registered-not-public | name, specs, catalogues, images | medium |
| `spare-parts-all-categories` | Spare Parts (All Categories) | service/capability | registered-not-public | name, specs, catalogues, images | medium |

### Government & Public-Sector Procurement — التوريدات الحكومية والعامة

**15 products** across 3 categories — 0 public, 15 not public

#### Office & Institutional Furniture — أثاث مكتبي ومؤسسي (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `executive-reception-furniture` | Executive & Reception Furniture | equipment/furniture | registered-not-public | name, specs, catalogues, images | medium |
| `filing-storage-cabinets` | Filing & Storage Cabinets | equipment/furniture | registered-not-public | name, specs, catalogues, images | medium |
| `institutional-furniture` | Institutional Furniture | equipment/furniture | registered-not-public | name, specs, catalogues, images | medium |
| `office-furniture-systems` | Office Furniture Systems | equipment/furniture | registered-not-public | name, specs, catalogues, images | medium |
| `office-partitions-cubicles` | Office Partitions & Cubicles | equipment/furniture | registered-not-public | name, specs, catalogues, images | medium |

#### Public Lighting & Power — الإنارة العامة والطاقة (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `public-backup-power-systems` | Backup Power Systems for Public Facilities | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `solar-power-public-facilities` | Solar Power Systems for Public Facilities | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `solar-street-lighting` | Solar Street Lighting | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `street-public-lighting-systems` | Street & Public Lighting Systems | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `traffic-management-signal-systems` | Traffic Management & Signal Systems | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Security & Public Safety — الأمن والسلامة العامة (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `access-control-biometric-systems` | Access Control & Biometric Systems | equipment/security | registered-not-public | name, specs, catalogues, images | medium |
| `cctv-surveillance-systems` | CCTV & Surveillance Systems | equipment/security | registered-not-public | name, specs, catalogues, images | medium |
| `gate-barrier-systems` | Gate & Barrier Systems | equipment/security | registered-not-public | name, specs, catalogues, images | medium |
| `perimeter-security-fencing` | Perimeter Security & Fencing | equipment/security | registered-not-public | name, specs, catalogues, images | medium |
| `public-safety-response-equipment` | Public Safety & Emergency Response Equipment | equipment/security | registered-not-public | name, specs, catalogues, images | medium |

### Heavy Equipment & Machinery — المعدات الثقيلة

**15 products** across 3 categories — 0 public, 15 not public

#### Concrete & Compaction Equipment — معدات الخرسانة والدك (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `asphalt-pavers` | Asphalt Pavers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `concrete-mixers` | Concrete Mixers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `concrete-pumps` | Concrete Pumps | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `hydraulic-breakers` | Hydraulic Breakers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `vibratory-rollers` | Vibratory Rollers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |

#### Cranes & Lifting Equipment — الأوناش ومعدات الرفع (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `aerial-work-platforms` | Aerial Work Platforms | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `crawler-cranes` | Crawler Cranes | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `forklifts` | Forklifts | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `mobile-cranes` | Mobile Cranes | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `telehandlers` | Telehandlers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |

#### Earthmoving Equipment — معدات نقل التراب (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `backhoe-loaders` | Backhoe Loaders | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `bulldozers` | Bulldozers | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `hydraulic-excavators` | Hydraulic Excavators | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `motor-graders` | Motor Graders | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |
| `wheel-loaders` | Wheel Loaders | equipment/vehicle | registered-not-public | name, specs, catalogues, images | medium |

### Hospital Equipment & Medical Supplies — تجهيزات المستشفيات والمستلزمات الطبية

**18 products** across 6 categories — 0 public, 18 not public

#### Hospital Beds & Patient Handling — أسرّة المستشفيات ونقل المرضى (3 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `electric-hospital-beds` | Electric Hospital Beds | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `icu-beds` | ICU Beds | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `manual-hospital-beds-stretchers` | Manual Hospital Beds & Stretchers | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Medical Furniture, Trolleys & Carts — الأثاث الطبي والعربات (3 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `bedside-cabinets` | Bedside Cabinets | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `examination-beds-couches` | Examination Beds & Couches | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `medical-emergency-trolleys` | Medical & Emergency Trolleys | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Patient Monitoring & Diagnostic Equipment — أجهزة المراقبة والتشخيص (3 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `ecg-machines` | ECG Machines | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `patient-monitors` | Patient Monitors | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `pulse-oximeters` | Pulse Oximeters | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Respiratory & Emergency Equipment — أجهزة التنفس والطوارئ (3 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `emergency-resuscitation-carts` | Emergency & Resuscitation Carts | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `medical-suction-units` | Medical Suction Units | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `oxygen-concentrators` | Oxygen Concentrators | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Sterilization & Operating Room Equipment — معدات التعقيم وغرف العمليات (3 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `autoclaves-sterilizers` | Autoclaves & Sterilizers | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `operating-tables` | Operating Tables | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |
| `surgical-lighting` | Surgical Lighting | medical-equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Surgical Supplies — المستلزمات الجراحية (3 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `surgical-drapes-masks` | Surgical Drapes & Masks | medical-consumable | registered-not-public | name, specs, catalogues, images | medium |
| `surgical-gowns` | Surgical Gowns | medical-consumable | registered-not-public | name, specs, catalogues, images | medium |
| `surgical-sutures` | Surgical Sutures | medical-consumable | registered-not-public | name, specs, catalogues, images | medium |

### Industrial & Laboratory Chemicals — الكيماويات الصناعية والمعملية

**10 products** across 2 categories — 0 public, 10 not public

#### Corrosion Protection & Coatings — الحماية من التآكل والطلاءات (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `anti-corrosion-coatings` | Anti-Corrosion Coatings | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `corrosion-inhibitors` | Corrosion Inhibitors | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `industrial-epoxy-coatings` | Industrial Epoxy Coatings | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `industrial-protective-paints` | Industrial Protective Paints | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `rust-preventives` | Rust Preventives | chemical | registered-not-public | name, specs, catalogues, images | medium |

#### Water & Wastewater Treatment Chemicals — كيماويات معالجة المياه والصرف الصحي (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `boiler-water-chemicals` | Boiler Water Chemicals | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `cooling-tower-chemicals` | Cooling Tower Chemicals | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `flocculants-coagulants` | Flocculants & Coagulants | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `ph-adjustment-chemicals` | pH Adjustment Chemicals | chemical | registered-not-public | name, specs, catalogues, images | medium |
| `wastewater-treatment-chemicals` | Wastewater Treatment Chemicals | chemical | registered-not-public | name, specs, catalogues, images | medium |

### Industrial Equipment & Pumps — المعدات الصناعية والمضخات

**15 products** across 3 categories — 0 public, 15 not public

#### Air Compressors & Systems — ضواغط الهواء وأنظمتها (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `air-receivers-dryers` | Air Receivers & Air Dryers | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `compressed-air-filtration-systems` | Compressed Air Filtration Systems | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `gas-compressors` | Gas Compressors | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `reciprocating-compressors` | Reciprocating Compressors | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `rotary-screw-compressors` | Rotary Screw Compressors | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Valves & Actuators — الصمامات ومحركات التشغيل (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `control-valves` | Control Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `electric-actuators` | Electric Valve Actuators | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `industrial-ball-valves` | Industrial Ball Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `industrial-gate-valves` | Industrial Gate Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `pressure-relief-valves` | Pressure Relief Valves | equipment | registered-not-public | name, specs, catalogues, images | medium |

#### Centrifugal & Process Pumps — مضخات الطرد المركزي والعمليات (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `centrifugal-pumps` | Centrifugal Pumps | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `end-suction-pumps` | End Suction Pumps | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `self-priming-pumps` | Self-Priming Pumps | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `submersible-pumps` | Submersible Pumps | equipment | registered-not-public | name, specs, catalogues, images | medium |
| `vertical-turbine-pumps` | Vertical Turbine Pumps | equipment | registered-not-public | name, specs, catalogues, images | medium |

### Lubricants & Oils — الزيوت ومواد التشحيم الصناعية

**58 products** across 9 categories — 34 public, 24 not public

#### Engine Oils — زيوت المحركات (10 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `mollube-4t-super` | MOLLUBE 4T Super | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-dynamic-1` | MOLLUBE Dynamic 1 | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-dynamic-plus` | MOLLUBE Dynamic Plus | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-dynamic-x3` | MOLLUBE Dynamic X3 | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-dynamic-x4` | MOLLUBE Dynamic X4 | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-dynamic-x5` | MOLLUBE Dynamic X5 | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-dynamic-x7` | MOLLUBE Dynamic X7 | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-platinum-mega` | MOLLUBE Platinium Mega | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-platinum-super` | MOLLUBE Platinium Super | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-platinum-ultra` | MOLLUBE Platinium Ultra | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |

#### Gear Oils — زيوت التروس (6 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `gear-oils` | Gear Oils | lubricant | registered-not-public | name, specs, catalogues, images | medium |
| `mobilgear-600-xp-220` | Extreme-Pressure Industrial Gear Oil — ISO VG 220 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-gear` | CLP Extreme-Pressure Industrial Gear Oil — ISO ... | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-gear-automotive` | API GL-5 Automotive Gear Lubricant — SAE 90/140... | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-glo-pg` | Synthetic Polyglycol Industrial Gear Oil — ISO ... | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-glo-sy` | Synthetic PAO Industrial Gear Oil — ISO VG 46-3200 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |

#### Greases — الشحوم (19 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `industrial-greases` | Industrial Greases | lubricant/grease | registered-not-public | name, specs, catalogues, images | medium |
| `mobil-polyrex-ep-2` | Polyurea Multi-Purpose Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mobil-shc-polyrex-em` | Mobil SHC Polyrex EM | lubricant/grease | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mobilgrease-xtc` | Lithium Complex Coupling Grease — NLGI 1 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mobilux-ep-2-moly` | Molybdenum-Enhanced EP Lithium Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-proguard-lcx2` | Lithium Calcium Complex Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-csx` | Calcium Sulfonate Complex EP Grease — 222/462 cSt | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-hb-mp3` | Lithium Multi-Purpose Grease — NLGI 3 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-ht-bo` | High-Temperature Multi-Purpose Grease — Water-R... | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-inor-sy` | Synthetic PAO Soap-Free Low-Temperature Grease | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-lx-220` | Mineral Lithium Complex Grease — 220 cSt | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-lxsy` | Synthetic Lithium Complex EP Grease — 100/220/4... | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-m-bx` | Barium Complex Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-m-pu` | Mineral Polyurea High-Temperature Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-mo-lx` | Molybdenum-Enhanced Lithium Complex Grease — NL... | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-mp2` | Lithium Multi-Purpose Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-sy-pu` | Synthetic Polyurea Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-proguard-xmo-180` | Metal Complex Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `shell-gadus-s5-v220-2` | Synthetic Lithium Complex Grease — NLGI 2 | lubricant/grease | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |

#### Hydraulic Oils — الزيوت الهيدروليكية (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `castrol-hyspin-aws-46` | Anti-Wear Hydraulic Oil — ISO VG 46 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `hydraulic-fluids` | Hydraulic Fluids | lubricant | registered-not-public | name, specs, catalogues, images | medium |
| `mobil-dte-10-excel-series` | Mobil DTE 10 Excel Series | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mobil-dte-24` | Anti-Wear Hydraulic Oil — ISO VG 32 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-prohydro-hlp` | Anti-Wear Hydraulic Oil — ISO VG 32/46/68 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |

#### Metalworking Fluids — سوائل التشغيل المعدني (5 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `metalworking-fluids` | Metalworking Fluids | lubricant | registered-not-public | name, specs, catalogues, images | medium |
| `mollube-mol-met` | Chlorine-Free Neat Cutting Oil — Extra-High Per... | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-procut-mw` | Water-Soluble Mineral Emulsion Metalworking Fluid | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-procut-sy-500` | Synthetic Metalworking Fluid — Grinding Applica... | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-procut-sym` | Semi-Synthetic Water-Miscible Metalworking Fluid | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |

#### Overhead Conductor Greases — شحوم موصلات خطوط النقل الهوائية (6 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `mollube-mol-proguard-ohc` | MOL PROGUARD OHC | lubricant/grease | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-mol-proguard-ohc-8000` | MOL PROGUARD OHC 8000 | lubricant/grease | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-mol-proguard-ohc-9000` | MOL PROGUARD OHC 9000 | lubricant/grease | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-mol-proguard-ohc-li` | MOL PROGUARD OHC LI | lubricant/grease | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-mol-proguard-ohc-m` | MOL PROGUARD OHC M | lubricant/grease | registered-not-public | name, specs, catalogues, seo, images | medium |
| `mollube-mol-proguard-ohc-plus` | MOL PROGUARD OHC PLUS | lubricant/grease | registered-not-public | name, specs, catalogues, seo, images | medium |

#### Refrigeration Oils — زيوت التبريد (4 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `mollube-mol-freez-e` | Synthetic POE Refrigeration Oil — ISO VG 22-370 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-freez-m` | Mineral Refrigeration Oil — ISO VG 32-68 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-freez-pao` | Synthetic PAO Refrigeration Oil — ISO VG 150/220 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |
| `mollube-mol-freez-ultra-68` | Semi-Synthetic Ammonia Refrigeration Oil — ISO ... | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |

#### Specialty Industrial Lubricants — زيوت التشحيم الصناعية المتخصصة (2 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `industrial-lubricating-oils` | Industrial Lubricating Oils | lubricant | registered-not-public | name, specs, catalogues, images | medium |
| `mobil-dte-fm-series` | Mobil DTE FM Series | lubricant | registered-not-public | name, specs, catalogues, seo, images | medium |

#### Turbine Oils — زيوت التوربينات (1 products)

| Product ID | Name (EN) | Type | Status | Data | Readiness |
|---|---|---|---|---|---|
| `mobil-dte-800-series` | Turbine Oil — ISO VG 32/46 | lubricant | public | name, specs, catalogues, seo, images, public-identity, sourcing-record | high |

**Taxonomy-only categories (0 products):**
- Circulating Oils (`circulating-oils`)
- Compressor Oils (`compressor-oils`)
- Industrial Machine / Cooling Lubricants (`industrial-machine-cooling-lubricants`)
- Transformer Oils (`transformer-oils`)

### Unregistered Products (Healthcare Legacy)

**27 products** in 9 categories — deliberately removed from active taxonomy.

- `cables-breakers-distribution-panels`: 3 products
- `catering-kitchen-supplies`: 3 products
- `electrical-supplies-equipment`: 3 products
- `energy-solutions-supplies`: 3 products
- `general-operational-supplies`: 3 products
- `industrial-process-chemicals`: 3 products
- `maintenance-operations-equipment`: 3 products
- `pumps-water-treatment-equipment`: 3 products
- `technical-facility-supplies`: 3 products

## 6. Existing Knowledge Articles

### Electrical & Energy (3 articles — reusable for product profiles)

These articles contain technically verified content linked to specific products:

- **How to Specify Medium Voltage Switchgear** (`medium-voltage-switchgear-specification-guide`, type: buying-guide) → products: `medium-voltage-switchgear`, `ring-main-units`
- **Generator Ratings Explained: ESP, PRP, LTP and COP** (`generator-ratings-standby-prime-continuous`, type: technical-guide) → products: `diesel-generators`
- **How to Specify Low Voltage Distribution Panels** (`low-voltage-distribution-panel-specification`, type: buying-guide) → products: `low-voltage-switchgear`, `distribution-panel-boards`

**Reuse potential:** Technical specifications, IEC standards references, and selection criteria can seed the corresponding product knowledge profiles.

### Fire Protection (5 articles — sector-level, partial reuse)

- **How to Choose Fire Pumps** (`how-to-choose-fire-pumps`, type: article)
- **NFPA Standards Explained** (`nfpa-standards-explained`, type: article)
- **Difference Between FM200 and NOVEC 1230** (`fm200-vs-novec-1230`, type: article)
- **Fire Pump Selection Guide** (`fire-pump-selection-guide`, type: article)
- **Common Fire Protection Mistakes** (`common-fire-protection-mistakes`, type: article)

**Reuse potential:** Pump selection criteria, NFPA references, suppression agent comparisons can be extracted into individual product profiles.

### Government Procurement (3 articles — OUT OF SCOPE)

- ~~Contracting Methods Under Egypt's Law 182 of 2018~~ (`public-contracting-methods-law-182`) — legal procurement content, not product knowledge
- ~~Writing Tender Specifications Without Brand Names~~ (`technical-specifications-without-brand-names`) — legal procurement content, not product knowledge
- ~~Provisional and Final Guarantees in Egyptian Public Tenders~~ (`bid-bond-and-final-guarantee-law-182`) — legal procurement content, not product knowledge

**Action:** Do not delete. Do not publish as product knowledge. Do not convert to product profiles.

## 7. Evidence Gaps and Missing Data

### Critical gaps

1. **Public identity migration:** 188 of 222 registered products lack `publicName_en/ar` + `publicShortDescription_en/ar`. Knowledge profiles are blocked until migration.
2. **Manufacturer datasheets:** Knowledge profiles require authoritative technical data. Not all products have `catalogues` populated.
3. **Technical specifications:** Depth varies — lubricants have detailed specs; many other sectors have minimal or placeholder specifications.
4. **Product images:** Many products lack dedicated images, falling back to sector-level hero images.

### Per-sector readiness

| Sector | Products | High | Medium | Low | Minimal |
|---|---|---|---|---|---|
| Commercial Vehicles & Fleet Solutions | 16 | 0 | 16 | 0 | 0 |
| Construction & Infrastructure Materials | 15 | 0 | 15 | 0 | 0 |
| Electrical & Energy Solutions | 15 | 1 | 14 | 0 | 0 |
| Fire Protection Equipment | 30 | 0 | 30 | 0 | 0 |
| Global Sourcing & Hard-to-Source Procurement | 15 | 0 | 15 | 0 | 0 |
| Government & Public-Sector Procurement | 15 | 0 | 15 | 0 | 0 |
| Heavy Equipment & Machinery | 15 | 0 | 15 | 0 | 0 |
| Hospital Equipment & Medical Supplies | 18 | 0 | 18 | 0 | 0 |
| Industrial & Laboratory Chemicals | 10 | 0 | 10 | 0 | 0 |
| Industrial Equipment & Pumps | 15 | 0 | 15 | 0 | 0 |
| Lubricants & Oils | 58 | 34 | 24 | 0 | 0 |

## 8. Recommended Pilot Products

Select one product from each of 5–6 diverse sectors and types to validate the knowledge profile architecture:

| # | Product ID | Sector | Type | Rationale |
|---|---|---|---|---|
| 1 | `diesel-generators` | Electrical & Energy | equipment | Existing technical guide links directly. Generator ratings content is reusable. High search volume. |
| 2 | `medium-voltage-switchgear` | Electrical & Energy | equipment | Existing buying guide with IEC 62271-200 content. Different technical profile from generators. |
| 3 | `mobil-dte-24` | Lubricants & Oils | lubricant | Public identity complete. Tests viscosity-grade/compatibility module structure unique to lubricants. |
| 4 | `electric-motor-driven-fire-pump` | Fire Protection | equipment | Core product with existing article content. Tests NFPA/standards-heavy module structure. |
| 5 | `electric-hospital-beds` | Healthcare | medical-equipment | Tests regulatory/intended-use module structure unique to medical products. |
| 6 | `industrial-raw-materials-sourcing` | Global Sourcing | service/capability | Tests service/capability profile structure, distinct from physical products. |

## 9. Risks, Exclusions, and Unresolved Decisions

### Risks

1. **Manufacturer neutrality:** 188 products still carry internal manufacturer names in `name_en/name_ar`. Knowledge profiles must use `publicName_en/ar` only.
2. **Technical accuracy:** Profiles require authoritative technical data. Writing without verified sources risks inventing specifications — explicitly prohibited.
3. **Scale:** 222 products × individual knowledge profiles = significant content volume. Phased rollout recommended.
4. **Bilingual parity:** Arabic and English must have equivalent technical meaning. Requires Arabic-fluent technical review.

### Exclusions

- **Law 182/2018 content:** All government procurement law articles are OUT OF SCOPE.
- **Unregistered healthcare products:** 27 legacy products not candidates for knowledge profiles unless reinstated.
- **Taxonomy-only categories:** 4 categories have 0 products — no knowledge profiles possible until products are registered.

### Unresolved Decisions

1. **Public identity migration timeline:** When will the remaining 188 products receive `publicName_en/ar`?
2. **Datasheet sourcing:** Who provides manufacturer datasheets for technical verification?
3. **Publication approval workflow:** Who approves each knowledge profile?
4. **Healthcare legacy reinstatement:** Will the 9 unregistered categories (27 products) be reinstated?
5. **Global Sourcing treatment:** These are sourcing capabilities, not physical products. Service/capability profile structure needs validation.

---

## Files Inspected

| File | Purpose |
|---|---|
| `data/sectors.ts` | Sector definitions (11 sectors) |
| `data/product-categories.ts` | Category taxonomy (50 categories) |
| `data/products/index.ts` | Product registry and imports |
| `data/products/types.ts` | Product type definitions |
| `lib/products/public-product.ts` | `hasPublicIdentity()` / `toPublicProduct()` |
| `data/knowledge/index.ts` | Knowledge article registry |
| `data/knowledge/types.ts` | Knowledge item type definitions |
| `data/knowledge/articles/electrical-energy.ts` | 3 electrical articles (PR #16) |
| `data/knowledge/articles/fire-protection.ts` | 5 fire protection articles |
| `data/knowledge/articles/government-procurement.ts` | 3 procurement articles (OUT OF SCOPE) |
| `data/products/<sector>/*.ts` | 59 product data files across 11 sector directories |