# GOLTENS — Product-Centric Knowledge Center: Master Product Map

> **Internal document — not for publication.**
> Generated from repository audit on 2026-11-11 (v4.1).
> Branch: `claude/knowledge-center-content` (commit `7460a6f`).
>
> **No product has been authorized for publication by this task.**

## 1. Executive Summary

The GOLTENS product catalog contains **249 unique product records** across **11 sectors** and **55 distinct category IDs** in the CSV (50 in the current taxonomy, 9 legacy-only).

- **222 registered** products (imported in `data/products/index.ts`, active in the Product Engine)
- **27 legacy-unregistered** records (source files preserved under `data/products/healthcare/`, deliberately removed from active taxonomy — these are NOT all healthcare products; see §4)
- **34 products** have a complete public identity (`hasPublicIdentity()` returns true)
- **188 registered products** lack public identity — product detail pages return 404

**No product is authorized for publication by this mapping task.** Every registered product's `publication_approval` field is set to `pending-user-approval`.

### v4.1 CSV Changes

The CSV now contains **32 columns** (v4 had 29). The following columns were added or modified:

| Column | Change | Purpose |
|---|---|---|
| `proposed_product_type` | **New** | Proposed product type for legacy records only. Empty for registered products. |
| `product_type` | **Modified** | Now empty for legacy records (was populated with proposed values). |
| `recommended_modules_status` | **New** | `active` for registered products, `not-applicable` for legacy. |
| `recommended_modules` | **Modified** | Now empty for legacy records (was `not-applicable — legacy-unregistered`). |
| `related_products_status` | **New** | `verified-related-products`, `none-identified`, or `not-applicable`. |
| `related_products` | **Modified** | Now contains only real product IDs or empty. No sentinel values. |
| `publication_approval` | **Modified** | Clean values only: `pending-user-approval` or `not-applicable`. |

**`proposed_product_type` and `proposed_sector_affinity` are unapproved proposals** for legacy products. They do not represent a final or authorized classification. They are included as structured data to assist future reclassification decisions.

## 2. Verified Inventory Counts

All counts below are verified against the current repository source files as of commit `7460a6f`.

| Metric | Count | Source |
|---|---|---|
| Sectors | 11 | `data/sectors.ts` |
| Categories in current taxonomy | 50 | `data/product-categories.ts` |
| Taxonomy categories with registered products | 46 | Cross-reference: taxonomy × registered products |
| Taxonomy categories without registered products | 4 | Cross-reference: taxonomy − populated |
| Legacy category IDs not in current taxonomy | 9 | Legacy product files; IDs absent from `PRODUCT_CATEGORIES` |
| Distinct category IDs across complete CSV | 55 | 46 populated + 9 legacy-only = 55 |
| Total product records in files | 249 | Brace-depth parsing of all `data/products/<sector>/*.ts` |
| Registered products | 222 | `data/products/index.ts` spread arrays |
| Legacy-unregistered products | 27 | Files not imported in `index.ts` |
| Products with complete public identity | 34 | `hasPublicIdentity()` in `lib/products/public-product.ts` |
| Existing knowledge articles (total) | 11 | `data/knowledge/articles/*.ts` |
|   — Electrical & Energy (product-linked) | 3 | Verified `relatedProductIds` in source |
|   — Fire Protection (sector-level only) | 5 | `relatedSectorIds` only, no `relatedProductIds` |
|   — Government Procurement (OUT OF SCOPE) | 3 | Legal procurement content |
| CSV columns | 32 | v4.1 (v4 had 29) |

### Category-count formula

The current taxonomy defines **50 categories** in `data/product-categories.ts`.

- **46 taxonomy categories** contain at least one registered product.
- **4 taxonomy categories** have no registered products (empty placeholders).
- **9 legacy category IDs** exist only in legacy records and are NOT in the current taxonomy.

The CSV uses **55 distinct category IDs** = 46 populated taxonomy + 9 legacy-only = **55**.

**Taxonomy-only categories (0 registered products):**

- `circulating-oils` — Circulating Oils (lubricants-oils)
- `compressor-oils` — Compressor Oils (lubricants-oils)
- `industrial-machine-cooling-lubricants` — Industrial Machine / Cooling Lubricants (lubricants-oils)
- `transformer-oils` — Transformer Oils (lubricants-oils)

**Legacy category IDs (not in current taxonomy):**

- `cables-breakers-distribution-panels` — 3 products (historical healthcare operational-supply category)
- `catering-kitchen-supplies` — 3 products (historical healthcare operational-supply category)
- `electrical-supplies-equipment` — 3 products (historical healthcare operational-supply category)
- `energy-solutions-supplies` — 3 products (historical healthcare operational-supply category)
- `general-operational-supplies` — 3 products (historical healthcare operational-supply category)
- `industrial-process-chemicals` — 3 products (historical healthcare operational-supply category)
- `maintenance-operations-equipment` — 3 products (historical healthcare operational-supply category)
- `pumps-water-treatment-equipment` — 3 products (historical healthcare operational-supply category)
- `technical-facility-supplies` — 3 products (historical healthcare operational-supply category)

## 3. Historical Count Reconciliation

### Current verified: 249 products / 11 sectors / 50 taxonomy categories

This is the authoritative count from the current repository source code.

### Git-verified historical snapshots

| Commit | Label | Registered | Sectors | Taxonomy Categories |
|---|---|---|---|---|
| `bb70eb0` | Earliest product registry | 169 | 10 | 38 |
| `f4f31e7` | Lubricants restructure | 169 | 11 | 48 |
| `930fb2f` | Branded lubricants added | 174 | 11 | 48 |
| `c0e3073` | Final Mobil batch | 222 | 11 | — |
| `7460a6f` | Current | 222 | 11 | 50 |

**What the Git evidence proves:**

1. The earliest commit (`bb70eb0`) had **169 registered products** across **10 sectors** and **38 taxonomy categories**. The lubricants-oils sector did not yet exist; 5 lubricant products were under `industrial-chemicals/industrial-lubricants-fluids`.
2. The lubricants restructure (`f4f31e7`) moved those 5 products to a new `lubricants-oils` sector and added 11 lubricant categories (total 48), but registered product count remained 169 (5 were moved, not added).
3. Subsequent batches added MOLLUBE and Mobil products: 169 → 174 → 222. The net addition was **53 new lubricant products** (169 non-lubricant baseline already had 5 lubricants under industrial-chemicals → restructured sector now has 58 total).
4. Healthcare was already in its current 18-registered / 27-unregistered state at the earliest commit. The 9 legacy files and their 27 products were already unregistered at `bb70eb0`.

### Previously reported: 178 products / 10 sectors / 41 categories

**Historical count reconciliation: unresolved — insufficient repository evidence.**

The Git history available in this repository begins at `bb70eb0` with 169 registered products, not 178. The 178-count may have been computed by a different method (e.g., including some unregistered records, or from a commit not present in this branch's history). The discrepancy of 9 products (178 − 169) cannot be proven or disproven from the available Git snapshots.

The report will not invent a reconciliation for numbers it cannot prove.

### Previously reported: 249 products / 11 sectors / 51 categories

- **249 total products** matches the current count (222 registered + 27 unregistered = 249) ✓
- **11 sectors** matches ✓
- **51 categories** vs current **50 taxonomy categories**: discrepancy of 1 category. Cannot be conclusively resolved without the exact snapshot used.

## 4. Legacy Record Classification

The 27 unregistered records are stored in 9 files under `data/products/healthcare/`, but their product names reveal they are **NOT healthcare products**. They are operational-supply products spanning multiple domains:

| Legacy Category | Products | Proposed Product Type | Proposed Sector Affinity |
|---|---|---|---|
| `cables-breakers-distribution-panels` | Power & Control Cables, Circuit Breakers (MCB/MCCB), Electrical Distribution Panels | electrical-cable, electrical-distribution, electrical-switchgear | electrical-energy |
| `catering-kitchen-supplies` | Commercial Kitchen Equipment, Meal Distribution Trolleys, Stainless Steel Kitchen Fixtures | commercial-kitchen-equipment, food-service-equipment, food-service-fixture | pending-review |
| `electrical-supplies-equipment` | Electric Motors, Electrical Enclosures & Junction Boxes, Lighting Fixtures & Units | electric-motor, electrical-enclosure, lighting-fixture | electrical-energy, industrial-equipment |
| `energy-solutions-supplies` | Standby Power Generators, Battery Backup & UPS Units, Solar Energy Systems | generator, solar-energy-system, ups-system | electrical-energy |
| `general-operational-supplies` | Industrial Safety & PPE Supplies, General Operational Consumables, Operational Sourcing & Procurement Support | operational-consumable, safety-ppe, service/capability | global-sourcing, industrial-equipment, pending-review |
| `industrial-process-chemicals` | Industrial Water Treatment Chemicals, Boiler & Steam System Chemicals, Corrosion Control Chemicals | boiler-treatment-chemical, corrosion-control-chemical, water-treatment-chemical | industrial-chemicals |
| `maintenance-operations-equipment` | Preventive Maintenance Supplies, Industrial Hand & Power Tools, Material Handling Trolleys & Hoists | maintenance-supply, material-handling-equipment, tool | industrial-equipment |
| `pumps-water-treatment-equipment` | Booster Pump Sets, Water Filtration & Treatment Systems, Submersible Drainage Pumps | pump, water-treatment-system | industrial-equipment |
| `technical-facility-supplies` | HVAC & Ventilation Equipment, General Fit-Out & Finishing Materials, Wayfinding & Facility Signage | finishing-material, hvac-equipment, signage | construction, pending-review |

**Classification status:** All 27 records have `product_type` set to empty (no approved classification). Each has a `proposed_product_type` and `proposed_sector_affinity` in the CSV as structured fields for future reclassification. Where evidence is insufficient, the affinity is `pending-review`.

### Field definitions for legacy proposals

| Field | Scope | Meaning |
|---|---|---|
| `proposed_product_type` | Legacy records only | Proposed product type classification based on product name and function. Not an approved classification. |
| `proposed_sector_affinity` | Legacy records only | Most likely sector for the product based on its actual nature. Not an approved reclassification. |

**Both fields are unapproved proposals**, not final or authorized classifications. They are included as structured data to assist future reclassification decisions.

### `proposed_sector_affinity` values

| Value | Meaning |
|---|---|
| `electrical-energy` | Product nature aligns with electrical/energy sector |
| `industrial-equipment` | Product nature aligns with industrial equipment sector |
| `industrial-chemicals` | Product nature aligns with industrial chemicals sector |
| `construction` | Product nature aligns with construction sector |
| `global-sourcing` | Product nature aligns with global sourcing services |
| `pending-review` | Insufficient evidence to determine sector affinity; requires manual review |

**Naming conflict:** The active product `electric-motors` (fire-protection/fire-pumps) and legacy product `general-purpose-electric-motors` (healthcare legacy/electrical-supplies-equipment) are distinct records and must not be merged.

**These 27 records are excluded from the active knowledge-content plan.** They are not candidates for knowledge profiles unless reinstated to the active registry by an authorized decision.

## 5. Product-Type Distribution

### Registered Products (actual product_type)

| Product Type | Count |
|---|---|
| `actuator` | 1 |
| `aerial-work-platform` | 1 |
| `aggregate` | 1 |
| `air-compressor` | 2 |
| `ambulance` | 1 |
| `asphalt-paver` | 1 |
| `automatic-transfer-switch` | 1 |
| `backhoe-loader` | 1 |
| `biometric-access-control` | 1 |
| `bulldozer` | 1 |
| `cctv-surveillance-system` | 1 |
| `cement` | 1 |
| `clean-agent-suppression-system` | 1 |
| `compressed-air-auxiliary` | 1 |
| `compressed-air-filtration` | 1 |
| `concrete-admixture` | 1 |
| `concrete-block` | 1 |
| `concrete-mixer` | 1 |
| `concrete-pump` | 1 |
| `construction-sealant` | 1 |
| `corrosion-inhibitor` | 1 |
| `crawler-crane` | 1 |
| `delivery-van` | 1 |
| `diesel-engine` | 1 |
| `drainage-product` | 1 |
| `electric-motor` | 1 |
| `electrical-equipment` | 5 |
| `executive-seating-furniture` | 1 |
| `filing-storage-cabinet` | 1 |
| `fire-alarm-control-panel` | 2 |
| `fire-alarm-integrated-system` | 1 |
| `fire-cabinet` | 1 |
| `fire-detector` | 3 |
| `fire-protection-accessory` | 7 |
| `fire-protection-valve` | 5 |
| `fire-pump` | 1 |
| `fire-pump-controller` | 1 |
| `flatbed-trailer` | 1 |
| `forklift` | 1 |
| `fuel-tanker` | 1 |
| `gas-compressor` | 1 |
| `gate-barrier-system` | 1 |
| `gear-oil` | 4 |
| `generator` | 1 |
| `grease` | 25 |
| `heavy-duty-trailer` | 1 |
| `hydraulic-breaker` | 1 |
| `hydraulic-excavator` | 1 |
| `hydraulic-oil` | 1 |
| `industrial-lubricant` | 27 |
| `industrial-pump` | 5 |
| `industrial-valve` | 4 |
| `institutional-furniture` | 1 |
| `jockey-pump` | 1 |
| `light-commercial-vehicle` | 1 |
| `lighting-fixture` | 3 |
| `lowbed-trailer` | 1 |
| `medical-consumable` | 3 |
| `medical-equipment` | 15 |
| `medium-heavy-truck` | 1 |
| `metalworking-fluid` | 1 |
| `mobile-crane` | 1 |
| `modular-office-furniture` | 1 |
| `motor-grader` | 1 |
| `office-partition-system` | 1 |
| `perimeter-security-fence` | 1 |
| `pickup-truck` | 1 |
| `piping-system` | 1 |
| `plumbing-fitting` | 1 |
| `precast-concrete` | 1 |
| `protective-coating` | 3 |
| `public-backup-power-system` | 1 |
| `public-safety-equipment` | 1 |
| `public-solar-power-system` | 1 |
| `public-street-lighting` | 1 |
| `refrigerated-trailer` | 1 |
| `refuse-collection-vehicle` | 1 |
| `reinforcement-steel` | 1 |
| `road-construction-material` | 1 |
| `rust-preventive` | 1 |
| `sanitary-ware` | 1 |
| `service/capability` | 15 |
| `sewer-jetting-vehicle` | 1 |
| `solar-pv-system` | 1 |
| `solar-street-light` | 1 |
| `sprinkler` | 1 |
| `street-sweeper` | 1 |
| `structural-steel` | 1 |
| `suppression-system` | 4 |
| `switchgear-panel` | 3 |
| `tanker-trailer` | 1 |
| `telehandler` | 1 |
| `thermal-insulation` | 1 |
| `traffic-signal-system` | 1 |
| `treatment-chemical` | 5 |
| `ups-system` | 1 |
| `utility-truck` | 1 |
| `vibratory-roller` | 1 |
| `water-tanker` | 1 |
| `waterproofing-membrane` | 1 |
| `wheel-loader` | 1 |
| **Total** | **222** |

### Legacy Products (proposed_product_type — unapproved)

| Proposed Product Type | Count |
|---|---|
| `boiler-treatment-chemical` | 1 |
| `commercial-kitchen-equipment` | 1 |
| `corrosion-control-chemical` | 1 |
| `electric-motor` | 1 |
| `electrical-cable` | 1 |
| `electrical-distribution` | 1 |
| `electrical-enclosure` | 1 |
| `electrical-switchgear` | 1 |
| `finishing-material` | 1 |
| `food-service-equipment` | 1 |
| `food-service-fixture` | 1 |
| `generator` | 1 |
| `hvac-equipment` | 1 |
| `lighting-fixture` | 1 |
| `maintenance-supply` | 1 |
| `material-handling-equipment` | 1 |
| `operational-consumable` | 1 |
| `pump` | 2 |
| `safety-ppe` | 1 |
| `service/capability` | 1 |
| `signage` | 1 |
| `solar-energy-system` | 1 |
| `tool` | 1 |
| `ups-system` | 1 |
| `water-treatment-chemical` | 1 |
| `water-treatment-system` | 1 |
| **Total** | **27** |

## 6. Knowledge Profile Design Principles

Each of the 222 registered products receives a proposed knowledge profile with:

1. **Proposed title** in English and Arabic, derived from the product's actual name.
2. **Search intent** classification specific to the product's sector and function.
3. **Search keyword** in English and Arabic, based on the product name and typical buyer search behavior.
4. **Product-specific modules** selected from the controlled vocabulary below, based on the product's actual technical nature. Two products in the same category may receive different module sets.
5. **Product-specific source requirements** identifying what documentation is needed for that product.
6. **Related products** where a genuine cross-reference relationship exists.

Search keywords and intent classifications are **search-demand-hypothesis** values. No keyword-volume data was consulted.

## 7. Complete Module Dictionary

This section documents **every module ID** used in the CSV's `recommended_modules` column. No module ID appears in the CSV without being defined here.

**Total module IDs used in CSV (registered products only):** 461
**Total module IDs documented:** 461

### Application (4 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `application-method` | Application method and procedure. | Coatings, membranes, chemicals, conductor greases |
| `compatibility` | General compatibility considerations. | Coatings, accessories, admixtures |
| `environmental-conditions` | Environmental conditions for application. | Corrosion inhibitors |
| `equipment-compatibility` | Compatible equipment types. | Treatment chemicals |

### Commercial (4 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `application-and-equipment-compatibility` | Application suitability and equipment compatibility. | Lubricants |
| `mixing-and-compatibility` | Mixing and cross-compatibility guidance. | Lubricants |
| `packaging-and-supply-formats` | Available packaging sizes and supply formats. | Lubricants |
| `product-selection` | Product selection guide for choosing the right variant. | Lubricants |

### Documentation (1 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `technical-data-sheet` | Manufacturer technical data sheet reference. | Lubricants |

### Installation (4 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `installation` | Installation guidelines and procedures. | Various products |
| `installation-and-ventilation` | Installation requirements including ventilation for generators. | Diesel generators |
| `installation-requirements` | Physical, civil, and electrical installation requirements. | Pumps, generators, switchgear |
| `mounting` | Mounting type and requirements. | Sprinklers, lighting, detectors |

### Materials (6 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `material-compatibility` | Material compatibility considerations. | Metalworking fluids, corrosion inhibitors, admixtures |
| `materials` | Construction materials. | Various products |
| `materials-and-construction` | Materials and construction quality. | Medical trolleys, furniture, institutional furniture |
| `materials-and-finish` | Construction materials and surface finish. | Sprinklers, fire cabinets |
| `materials-of-construction` | Materials of construction for wetted and structural parts. | Pumps, valves |
| `sealing-system` | Gas compressor sealing system type and materials. | Gas compressors |

### Operation (38 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `air-treatment-options` | Available air treatment options. | Air compressors |
| `alarm-and-monitoring` | Alarm conditions and monitoring features. | Fire pump controllers |
| `alternator-specifications` | Alternator specifications. | Generators |
| `arc-flash-protection` | Arc flash containment and protection features. | Medium-voltage switchgear |
| `attachments` | Available attachments and quick-coupler. | Excavators, loaders, graders, telehandlers |
| `busbar-configuration` | Busbar arrangement and rating. | Switchgear, distribution panels |
| `cab-and-controls` | Operator cab and controls. | Heavy equipment |
| `cleaning-and-maintenance` | Cleaning and maintenance procedures. | Medical equipment |
| `commissioning` | Testing and commissioning procedures. | Pumps, electrical equipment |
| `commissioning-and-testing` | Commissioning and testing procedures. | Fire pump controllers |
| `control-panel` | Control panel features and specifications. | Generators |
| `control-system` | Compressor control system and automation. | Air compressors, public street lighting |
| `controller` | Controller specifications and functions. | Jockey pumps |
| `controller-function` | Controller function in pump start/stop sequence. | Fire pump controllers |
| `cooling-and-exhaust` | Cooling and exhaust system. | Generators |
| `cooling-system` | Cooling system specifications. | Diesel engines |
| `exhaust-system` | Exhaust system specifications. | Diesel engines |
| `fuel-system` | Fuel system specifications. | Diesel engines, generators |
| `hydraulic-system` | Hydraulic system specifications. | Excavators, refuse vehicles, lowbed trailers |
| `inspection` | Inspection procedures and intervals. | Cranes, aerial platforms |
| `inspection-and-maintenance` | Inspection and maintenance schedule. | Medium-voltage switchgear |
| `maintenance` | Maintenance procedures and schedules. | Various products |
| `mechanical-seals-and-bearings` | Mechanical seal and bearing specifications. | Pumps |
| `noise-level` | Sound pressure/power level. | Air compressors |
| `operating-requirements` | General operating requirements. | Medical equipment |
| `operation-and-maintenance` | Operation and maintenance procedures. | Pumps, valves |
| `outrigger-configuration` | Outrigger type and span. | Cranes |
| `protection-functions` | Protection functions. | Electrical equipment |
| `pump-start-sequences` | Pump start sequence logic. | Fire pump controllers |
| `safety-devices` | Safety devices and relief valves. | Air receivers, gas compressors |
| `spare-parts` | Recommended spare parts list. | Pumps, generators, heavy equipment |
| `switching-functions` | Switching functions and operations. | Switchgear, RMUs |
| `synchronization` | Generator synchronization and paralleling. | Diesel generators |
| `testing` | Testing procedures. | ATS |
| `testing-and-commissioning` | Testing and commissioning procedures. | Switchgear, fire suppression |
| `testing-and-maintenance` | Testing and maintenance schedule. | Fire alarm systems, detectors |
| `troubleshooting` | Common fault diagnosis and troubleshooting. | Pumps |
| `undercarriage` | Undercarriage type and specifications. | Excavators, bulldozers |

### Performance — Actuators (4 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `actuator-type` | Actuator type (electric, pneumatic, hydraulic). | Industrial actuators |
| `control-signal` | Control signal type (4-20mA, digital, on-off). | Industrial actuators |
| `operating-speed` | Actuator operating speed. | Industrial actuators |
| `torque-output` | Rated torque output. | Industrial actuators |

### Performance — Aerial Platforms (7 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `drive-configuration` | Drive type (electric, diesel, hybrid) and drive configuration (2WD/4WD). | Aerial work platforms |
| `gradeability-and-terrain` | Maximum gradeability and terrain suitability (indoor/outdoor). | Aerial work platforms |
| `horizontal-outreach` | Maximum horizontal outreach from center. | Aerial work platforms |
| `platform-capacity` | Rated platform load capacity (persons and tools). | Aerial work platforms |
| `platform-height` | Maximum platform height (working height). | Aerial work platforms |
| `platform-type` | Platform type (scissor lift, boom lift, mast lift, etc.). | Aerial work platforms |
| `working-envelope` | Working envelope diagram (height vs. outreach). | Aerial work platforms |

### Performance — Backhoe Loaders (6 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `backhoe-breakout-force` | Backhoe bucket and dipper breakout forces. | Backhoe loaders |
| `backhoe-bucket-capacity` | Backhoe bucket capacity range. | Backhoe loaders |
| `backhoe-digging-depth` | Maximum backhoe digging depth. | Backhoe loaders |
| `backhoe-reach` | Maximum backhoe reach at ground level. | Backhoe loaders |
| `loader-breakout-force` | Front loader breakout force. | Backhoe loaders |
| `loader-bucket-capacity` | Front loader bucket capacity. | Backhoe loaders |

### Performance — Backup Power (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `automatic-transfer-mechanism` | Automatic transfer switch mechanism and transfer time. | Public backup power systems |
| `control-and-monitoring` | Control panel and remote monitoring capability. | Public backup power systems |
| `generator-or-ups-type` | Generator or UPS type for the backup power application. | Public backup power systems |
| `power-sizing-and-load-analysis` | Load analysis methodology and power sizing. | Public backup power systems |
| `runtime-and-fuel-capacity` | Runtime duration and fuel tank capacity. | Public backup power systems |

### Performance — Chemicals (11 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `chemical-composition` | Active ingredients and chemical composition. | Corrosion inhibitors |
| `chemical-composition-and-grade` | Chemical composition and grade classification. | Treatment chemicals |
| `dosage-and-concentration` | Recommended dosage and concentration levels. | Corrosion inhibitors |
| `dosing-and-application` | Dosing method and application procedure. | Treatment chemicals |
| `film-characteristics` | Protective film type and characteristics. | Rust preventives |
| `inhibitor-type-and-mechanism` | Inhibitor classification and corrosion protection mechanism. | Corrosion inhibitors |
| `monitoring-and-testing` | Methods for monitoring effectiveness and testing. | Corrosion inhibitors |
| `physical-and-chemical-properties` | Physical and chemical properties (density, pH, etc.). | Treatment chemicals |
| `preventive-type` | Type of rust preventive (oil-based, wax-based, VCI, etc.). | Rust preventives |
| `protection-duration` | Expected protection duration under specified conditions. | Rust preventives |
| `removal-method` | Method for removing the protective film. | Rust preventives |

### Performance — Coatings (3 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `coating-type` | Coating chemistry and system type. | Protective coatings, paints, epoxies |
| `dry-film-thickness` | Recommended dry film thickness per coat and total system. | Protective coatings |
| `surface-preparation` | Required surface preparation standard (Sa 2.5, SSPC-SP10, etc.). | Protective coatings |

### Performance — Compressed Air (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `air-connections` | Inlet/outlet connection sizes and types. | Air receivers & dryers |
| `dryer-capacity-and-pressure-dewpoint` | Dryer flow capacity and achievable pressure dewpoint. | Air receivers & dryers |
| `dryer-type` | Air dryer technology (refrigerant, desiccant, membrane). | Air receivers & dryers |
| `receiver-capacity-and-pressure-rating` | Air receiver volume and maximum working pressure. | Air receivers & dryers |
| `receiver-material-and-construction` | Receiver vessel material, construction standard, and design code. | Air receivers & dryers |

### Performance — Compressors (6 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `capacity-and-discharge-pressure` | Gas compressor capacity and discharge pressure. | Gas compressors |
| `compressor-type` | Compressor technology (rotary screw, reciprocating, centrifugal). | Air compressors, gas compressors |
| `free-air-delivery` | Free air delivery (FAD) at rated conditions. | Air compressors |
| `gas-type-and-properties` | Type of gas compressed and its properties (molecular weight, corrosivity). | Gas compressors |
| `operating-pressure` | Operating pressure range for compressed air equipment. | Air compressors, filtration systems |
| `suction-conditions` | Suction pressure, temperature, and gas composition. | Gas compressors |

### Performance — Concrete (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `drum-capacity` | Mixing drum geometric and output capacity. | Concrete mixers |
| `drum-rotation` | Drum rotation direction and speed control. | Concrete mixers |
| `feed-and-discharge` | Feed mechanism and discharge method. | Concrete mixers |
| `mixing-speed` | Drum rotation speed during mixing. | Concrete mixers |
| `water-system` | Water supply and metering system. | Concrete mixers |

### Performance — Construction (28 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `admixture-type` | Admixture classification (plasticizer, retarder, accelerator, etc.). | Concrete admixtures |
| `bar-diameter-range` | Available bar diameter range. | Reinforcement steel |
| `bend-test` | Bend test requirements and results. | Reinforcement steel |
| `block-type-and-dimensions` | Block type and standard dimensions. | Concrete blocks |
| `cement-type-and-grade` | Cement type classification and strength grade. | Cement |
| `compressive-strength` | Compressive strength of blocks. | Concrete blocks |
| `compressive-strength-class` | Compressive strength class designation. | Cement |
| `diameter-range` | Available diameter range. | Piping systems, reinforcement steel |
| `dimensions-and-tolerances` | Section dimensions and manufacturing tolerances. | Structural steel |
| `dimensions-or-packaging` | Product dimensions or packaging specifications. | Construction materials |
| `dosage-range` | Recommended dosage range as percentage of cement weight. | Concrete admixtures |
| `effect-on-concrete` | Effect on concrete workability, setting time, strength. | Concrete admixtures |
| `elongation` | Percentage elongation at break. | Reinforcement steel |
| `fire-rating` | Fire resistance rating. | Thermal insulation boards |
| `insulation-type` | Thermal insulation material type. | Thermal insulation boards |
| `jointing-method` | Pipe jointing method. | Piping systems |
| `material-type-and-grade` | General construction material type and grade. | Construction materials |
| `mechanical-properties` | Mechanical properties (yield, tensile, elongation). | Structural steel |
| `membrane-type` | Waterproofing membrane type and chemistry. | Waterproofing membranes |
| `pipe-material-and-type` | Pipe material (PVC, HDPE, steel, ductile iron, etc.). | Piping systems |
| `section-type-and-profile` | Structural section type (I-beam, H-beam, angle, channel, etc.). | Structural steel |
| `steel-grade` | Steel grade for structural sections. | Structural steel |
| `steel-grade-and-standard` | Steel grade designation and governing standard. | Reinforcement steel |
| `substrate-compatibility` | Compatible substrate types. | Waterproofing membranes |
| `tensile-strength` | Characteristic tensile strength. | Reinforcement steel |
| `thermal-conductivity` | Thermal conductivity value. | Thermal insulation boards |
| `thickness` | Membrane or material thickness. | Waterproofing membranes |
| `yield-strength` | Characteristic yield strength. | Reinforcement steel |

### Performance — Construction/Valves (1 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `pressure-rating` | Pressure rating or class. | Piping, valves |

### Performance — Electrical (11 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `generator-rating-classification` | Classification of generator rating (standby, prime, continuous). | Diesel generators |
| `power-output-and-rating-conditions` | Generator output ratings (ESP, PRP, LTP, COP) and rating conditions. | Diesel generators |
| `power-rating` | Rated power output of UPS or motor. | UPS systems, electric motors |
| `power-requirements` | Power supply requirements. | Security equipment, biometric systems |
| `power-specifications` | General power specifications for electrical equipment. | Electrical equipment |
| `power-supply` | Power supply specifications. | Medical monitors, fire alarm panels |
| `short-circuit-rating` | Rated short-circuit breaking/making capacity. | Low-voltage switchgear, distribution panels |
| `short-circuit-withstand-capacity` | Maximum fault current the equipment can safely withstand. | Medium-voltage switchgear |
| `ups-topology` | UPS architecture type (online double-conversion, line-interactive, etc.). | UPS systems |
| `voltage-and-current-rating` | Voltage and current rating for transfer switches. | Automatic transfer switches |
| `voltage-and-current-ratings` | Rated voltage and current for switchgear or distribution equipment. | Switchgear, distribution panels |

### Performance — Engines (6 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `driven-equipment-coupling` | Coupling type between engine and driven equipment. | Diesel engines |
| `engine-and-drive` | Engine and drive system for cranes. | Cranes |
| `engine-specifications` | Engine power, displacement, speed, and fuel consumption. | Generators, heavy equipment, vehicles |
| `engine-type` | Diesel engine type and configuration. | Diesel engines |
| `governor-and-controls` | Engine governor type and control interface. | Diesel engines |
| `starting-system` | Engine starting method (electric, pneumatic, hydraulic). | Diesel engines |

### Performance — Equipment (21 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `amplitude-and-frequency` | Vibration amplitude and frequency. | Vibratory rollers |
| `blade-type-and-capacity` | Blade type and blade capacity. | Bulldozers |
| `blade-width-and-reach` | Moldboard width and side reach. | Motor graders |
| `boom-length-and-reach` | Main boom and jib lengths and working radius. | Cranes, concrete pumps |
| `breakout-force` | Bucket breakout force. | Wheel loaders |
| `bucket-capacity` | Bucket volume capacity. | Excavators, wheel loaders, backhoe loaders |
| `compaction-width` | Drum or compaction width. | Vibratory rollers |
| `crane-type` | Crane classification (mobile, crawler, tower, etc.). | Cranes |
| `digging-depth-and-reach` | Maximum digging depth and reach. | Excavators |
| `dimensions` | Overall transport or operating dimensions. | Heavy equipment, vehicles |
| `drum-type` | Drum configuration (single, double, padfoot). | Vibratory rollers |
| `lift-capacity` | Rated lifting capacity at load center. | Forklifts |
| `lift-height` | Maximum lift height. | Forklifts |
| `lifting-capacity-and-load-chart` | Maximum lifting capacity and full load chart. | Cranes |
| `mast-type` | Mast type (simplex, duplex, triplex). | Forklifts |
| `operating-weight` | Machine operating weight including standard equipment. | Heavy equipment |
| `paving-width` | Paving width range. | Asphalt pavers |
| `power-source` | Power source type (electric, LPG, diesel). | Forklifts |
| `screed-type` | Screed type and heating method. | Asphalt pavers |
| `transport-dimensions` | Transport length, width, height. | Concrete mixers, asphalt pavers |
| `tyre-type` | Tyre type (pneumatic, solid, cushion). | Forklifts |

### Performance — Filtration (6 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `connection-size` | Filter housing inlet/outlet connection size. | Compressed air filtration systems |
| `element-replacement` | Filter element replacement procedure and interval. | Compressed air filtration systems |
| `filter-type-and-grade` | Filter element type and ISO 8573 purity grade. | Compressed air filtration systems |
| `filtration-efficiency` | Particle removal efficiency at rated conditions. | Compressed air filtration systems |
| `flow-capacity` | Maximum air flow capacity through the filter. | Compressed air filtration systems |
| `pressure-drop` | Pressure drop across filter element at rated flow. | Compressed air filtration systems |

### Performance — Fire Alarm (14 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `communication-protocols` | Supported communication protocols. | Fire alarm panels |
| `detection-type` | Detection principle (smoke, heat, multi-criteria). | Fire detectors |
| `detection-zones` | Detection zone layout and organization. | Fire alarm integrated systems |
| `detector-types` | Types of detectors used in the system. | Fire alarm integrated systems |
| `display-and-interface` | Panel display and user interface. | Fire alarm panels |
| `integration-with-other-systems` | Integration with other building systems (HVAC, access, BMS). | Fire alarm integrated systems |
| `loop-capacity` | Maximum number of addressable loops. | Addressable panels |
| `monitoring-and-communication` | Monitoring station communication and networking. | Fire alarm systems, UPS |
| `notification-devices` | Notification appliances (sounders, strobes, speakers). | Fire alarm integrated systems |
| `panel-type` | Control panel type (conventional, addressable). | Fire alarm panels |
| `sensitivity` | Detection sensitivity and adjustment range. | Fire detectors |
| `system-architecture` | System architecture (conventional, addressable, analog-addressable). | Fire alarm integrated systems |
| `wiring-and-infrastructure` | System wiring requirements and infrastructure. | Fire alarm integrated systems |
| `zone-capacity` | Maximum number of detection zones. | Fire alarm panels |

### Performance — Fire Protection (7 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `cabinet-type` | Fire cabinet type and configuration. | Fire cabinets |
| `components-included` | Components included in the cabinet. | Fire cabinets |
| `coverage-area` | Maximum coverage area per sprinkler/detector. | Sprinklers, detectors |
| `function-in-fire-system` | Function within the fire protection system. | Fire protection accessories |
| `k-factor` | Sprinkler discharge coefficient (K-factor). | Sprinklers |
| `sprinkler-type-and-response` | Sprinkler type (pendant, upright, sidewall) and response time index. | Sprinklers |
| `temperature-rating` | Activation temperature rating and color code. | Sprinklers |

### Performance — Fire Suppression (10 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `agent-properties` | Extinguishing agent physical and chemical properties. | FM200, clean agent systems |
| `detection-and-actuation` | Detection method and actuation mechanism. | Suppression systems, FM200 |
| `discharge-characteristics` | Agent discharge pattern and characteristics. | Suppression systems |
| `discharge-time` | Agent discharge time requirement. | FM200, clean agent systems |
| `environmental-impact` | ODP, GWP, and atmospheric lifetime. | FM200, clean agent systems |
| `protected-hazard-types` | Types of hazards the system is designed to protect. | Suppression systems |
| `room-integrity` | Enclosure integrity requirements for agent retention. | FM200, clean agent systems |
| `suppression-agent-and-mechanism` | Suppression agent type and extinguishing mechanism. | Suppression systems |
| `system-design-basis` | System design criteria and basis of design. | Suppression systems |
| `system-design-concentration` | Design concentration percentage for the protected space. | FM200, clean agent systems |

### Performance — Furniture (21 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `acoustic-rating` | Sound absorption or sound reduction index. | Office partitions and cubicles |
| `cable-management` | Cable management and power integration features. | Modular office furniture systems |
| `cable-routing` | Integrated cable routing capability. | Office partitions and cubicles |
| `desk-dimensions` | Desk surface dimensions and height (fixed or adjustable). | Modular office furniture systems |
| `drawer-configuration` | Number and type of drawers (letter, legal, lateral, vertical). | Filing and storage cabinets |
| `ergonomic-adjustability` | Ergonomic adjustment features (height, tilt, lumbar). | Office furniture systems, executive seating |
| `frame-and-structure` | Frame material, construction, and structural integrity. | Executive and reception furniture |
| `furniture-type` | Furniture type and classification. | Office/institutional furniture |
| `installation-and-modularity` | Installation method and modularity for reconfiguration. | Office furniture systems, partitions |
| `load-capacity-per-drawer` | Maximum load capacity per drawer. | Filing and storage cabinets |
| `locking-mechanism` | Lock type and security features. | Filing and storage cabinets |
| `materials-and-surface-finish` | Materials of construction and surface finish options. | All furniture types |
| `modularity-and-reconfiguration` | Modularity and ease of reconfiguration. | Office partitions and cubicles |
| `panel-dimensions` | Panel width, height, and thickness options. | Office partitions and cubicles |
| `partition-type` | Partition type (floor-to-ceiling, desk-mounted, freestanding). | Office partitions and cubicles |
| `seating-ergonomics` | Seating ergonomic design (backrest, armrest, seat depth, tilt). | Executive and reception furniture |
| `stackability` | Stackability and nesting capability for storage. | Institutional furniture |
| `storage-capacity` | Internal storage volume or file capacity. | Filing and storage cabinets |
| `structural-durability` | Structural durability and load testing results. | Institutional furniture |
| `upholstery-material` | Upholstery material type, grade, and fire rating. | Executive and reception furniture |
| `workstation-configuration` | Workstation layout options and desk configurations. | Modular office furniture systems |

### Performance — General (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `equipment-function` | Primary equipment function and operational scope. | Public safety equipment |
| `operating-conditions` | Rated operating conditions and environmental limits. | Public safety equipment |
| `performance-specifications` | Key performance specifications. | Public safety equipment |
| `specifications` | General specifications. | Various products |
| `technical-specifications` | General technical specifications. | Various products |

### Performance — Hydraulic Breakers (7 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `blow-rate` | Blow frequency (blows per minute). | Hydraulic breakers |
| `carrier-weight-class` | Compatible carrier (excavator) weight class range. | Hydraulic breakers |
| `impact-energy` | Impact energy per blow (joules). | Hydraulic breakers |
| `mounting-bracket-and-pins` | Mounting bracket type and pin dimensions for carrier attachment. | Hydraulic breakers |
| `noise-and-vibration` | Noise level and vibration data for operator exposure assessment. | Hydraulic breakers |
| `operating-pressure-and-flow` | Required hydraulic operating pressure and oil flow rate from the carrier. | Hydraulic breakers |
| `tool-type-and-retention` | Tool (chisel) type, diameter, retention system, and wear indicators. | Hydraulic breakers |

### Performance — Lighting (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `color-temperature` | Correlated color temperature (CCT) in Kelvin. | LED lighting |
| `light-distribution` | Light distribution pattern and uniformity. | Solar street lighting, public street lighting |
| `lumen-output-and-distribution` | Lumen output and light distribution pattern. | Public street lighting |
| `lumen-output-and-efficacy` | Total lumen output and luminous efficacy (lm/W). | LED lighting |
| `luminaire-type` | Luminaire classification and type. | LED lighting, public street lighting |

### Performance — Lubricants (14 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `anti-wear-properties` | Anti-wear additive system and performance. | Hydraulic oils |
| `base-oil-type` | Base oil group (mineral, synthetic, semi-synthetic). | All lubricants and oils |
| `biostability` | Resistance to biological degradation. | Metalworking fluids |
| `conductor-compatibility` | Compatibility with conductor materials (aluminum, copper). | Conductor greases |
| `dilution-ratio` | Recommended dilution ratio with water. | Metalworking fluids |
| `fluid-type` | Metalworking fluid type (neat, soluble, semi-synthetic, synthetic). | Metalworking fluids |
| `gear-oil-classification` | API GL classification or ISO classification. | Gear oils |
| `grease-type-and-base` | Grease base oil type and chemistry. | Greases |
| `hydraulic-fluid-classification` | ISO HM/HV or DIN classification. | Hydraulic oils |
| `nlgi-grade` | NLGI consistency grade for greases. | Greases |
| `performance-characteristics` | General performance properties of the lubricant. | Industrial lubricants |
| `seal-compatibility` | Compatibility with common seal materials. | Hydraulic oils |
| `thickener-system` | Thickener type (lithium, calcium, polyurea, etc.). | Greases |
| `viscosity-grade` | ISO VG or SAE viscosity grade. | All lubricants and oils |

### Performance — Medical (19 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `accessories` | Compatible accessories and consumables. | Medical equipment |
| `alarm-system` | Alarm configuration and priority levels. | Patient monitors, ventilators |
| `bed-type-and-functions` | Bed type and adjustment functions. | Hospital beds |
| `calibration` | Calibration requirements and procedures. | Diagnostic equipment |
| `casters` | Caster specifications. | Medical trolleys |
| `casters-and-braking` | Caster type, size, and braking mechanism. | Hospital beds |
| `chamber-capacity` | Sterilization chamber volume. | Sterilizers, autoclaves |
| `connectivity` | Data output and connectivity options. | Patient monitors |
| `cycle-types` | Available sterilization cycles. | Sterilizers, autoclaves |
| `dimensions-and-adjustments` | Bed dimensions and adjustment ranges. | Hospital beds |
| `flow-rate-and-pressure` | Flow rate and pressure delivery range. | Ventilators, respiratory |
| `mattress-compatibility` | Compatible mattress types and sizes. | Hospital beds |
| `measured-parameters` | Physiological parameters measured. | Patient monitors |
| `monitoring-and-validation` | Process monitoring and validation methods. | Sterilizers |
| `product-composition-and-materials` | Product composition and material specifications. | Medical consumables |
| `side-rails-and-safety` | Side rail type and safety features. | Hospital beds |
| `sterility-and-packaging` | Sterility assurance level and packaging type. | Medical consumables |
| `sterilization-method` | Sterilization method (steam, ETO, plasma, etc.). | Sterilizers, autoclaves |
| `ventilation-modes` | Available ventilation modes. | Ventilators |

### Performance — Mixed (8 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `driver-type` | Driver type for compressor (electric, gas turbine, engine). | Gas compressors |
| `engine-or-motor` | Power source for equipment (engine or electric motor). | Concrete mixers |
| `environmental-rating` | Environmental protection rating. | Security equipment, detectors |
| `environmental-resistance` | Resistance to environmental conditions. | Conductor greases, coatings |
| `hopper-capacity` | Capacity of the receiving hopper. | Concrete pumps, asphalt pavers, street sweepers |
| `load-capacity` | Maximum load/weight capacity. | Medical beds, furniture, cabinets |
| `load-carrying-capacity` | Load carrying or extreme pressure capacity. | Greases, gear oils |
| `operating-temperature-range` | Operating temperature range. | Greases, lubricants |

### Performance — Motors (9 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `efficiency-class` | Energy efficiency class (IE1, IE2, IE3, IE4). | Electric motors |
| `insulation-class` | Winding insulation thermal class (B, F, H). | Electric motors |
| `motor-power` | Motor power rating for compressor drives. | Air compressors |
| `motor-specifications` | Motor power, voltage, speed, efficiency, and protection class. | Fire pumps, jockey pumps |
| `motor-type` | Electric motor type (induction, synchronous, etc.). | Electric motors |
| `mounting-arrangement` | Motor mounting type (B3, B5, B35, etc.). | Electric motors |
| `speed-and-torque` | Rated speed and torque characteristics. | Electric motors, diesel engines |
| `terminal-box` | Terminal box position and cable entry. | Electric motors |
| `voltage-and-frequency` | Rated voltage and frequency for electric motors. | Electric motors |

### Performance — Public Lighting (3 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `electrical-protection` | Electrical protection (earthing, surge, fuse). | Public street lighting systems |
| `energy-efficiency` | Energy efficiency class or rating. | Public street lighting systems |
| `pole-type-and-height` | Pole type, material, and height. | Public street lighting systems |

### Performance — Public Solar (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `battery-storage-capacity` | Battery energy storage capacity (kWh). | Solar power for public facilities |
| `charge-controller` | Charge controller type and rating. | Solar power for public facilities, solar street lighting |
| `energy-yield-estimation` | Expected annual energy yield based on location and orientation. | Solar power for public facilities |
| `grid-connection-or-standalone` | Grid-tied, off-grid, or hybrid configuration. | Solar power for public facilities |
| `pv-array-capacity` | Total PV array capacity (kWp). | Solar power for public facilities |

### Performance — Pumps (13 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `flow-rate-and-pressure-maintenance` | Flow rate and pressure set points for system pressure maintenance. | Jockey pumps |
| `flow-rate-and-total-head` | Rated flow rate and total dynamic head at design point. | Fire pumps, industrial pumps |
| `maximum-horizontal-distance` | Maximum horizontal pumping distance. | Concrete pumps |
| `maximum-pressure` | Maximum concrete pumping pressure. | Concrete pumps |
| `maximum-vertical-distance` | Maximum vertical pumping distance. | Concrete pumps |
| `motor-and-drive-compatibility` | Motor and variable-speed drive compatibility requirements. | Industrial pumps, fire pumps |
| `npsh-requirements` | Net Positive Suction Head required to prevent cavitation. | Fire pumps, industrial pumps |
| `output-capacity` | Concrete output volume per hour. | Concrete pumps |
| `pipeline-diameter` | Diameter of concrete delivery pipeline. | Concrete pumps |
| `pump-curves` | Head-capacity curves, efficiency curves, and NPSH curves. | Fire pumps, industrial pumps |
| `pump-function-in-fire-system` | Role of jockey pump in maintaining system pressure. | Jockey pumps |
| `pump-type` | Type of concrete pump (line pump, boom pump, etc.). | Concrete pumps |
| `pump-type-and-operating-principle` | Type classification (centrifugal, positive displacement) and operating principle. | Fire pumps, industrial pumps |

### Performance — Security (26 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `access-interface-and-protocol` | Communication interface and integration protocol (Wiegand, OSDP, TCP/IP). | Biometric access control systems |
| `anti-climb-features` | Anti-climb and anti-cut features. | Perimeter security fencing |
| `barrier-arm-length` | Maximum barrier arm length. | Gate barrier systems |
| `barrier-type` | Barrier type (arm barrier, bollard, rising gate, etc.). | Gate barrier systems |
| `biometric-modalities` | Supported biometric modalities (fingerprint, facial, iris, etc.). | Biometric access control systems |
| `camera-sensor-and-resolution` | Image sensor type and resolution (megapixels). | CCTV surveillance systems |
| `coating-and-finish` | Protective coating (galvanized, powder-coated, PVC-coated). | Perimeter security fencing |
| `compression-and-bitrate` | Video compression standard and bitrate. | CCTV surveillance systems |
| `drive-mechanism` | Barrier drive mechanism (electromechanical, hydraulic). | Gate barrier systems |
| `false-acceptance-rate` | False Acceptance Rate (FAR) at stated security threshold. | Biometric access control systems |
| `false-rejection-rate` | False Rejection Rate (FRR) at stated convenience threshold. | Biometric access control systems |
| `fence-height` | Standard and available fence heights. | Perimeter security fencing |
| `fence-type-and-material` | Fence type (welded mesh, chain link, palisade, etc.) and material. | Perimeter security fencing |
| `foundation-requirements` | Foundation and footing requirements. | Perimeter security fencing |
| `lens-type-and-focal-length` | Lens type (fixed, varifocal, motorized) and focal length range. | CCTV surveillance systems |
| `liveness-detection` | Anti-spoofing and liveness detection capabilities. | Biometric access control systems |
| `low-light-performance` | Minimum illumination and IR capability. | CCTV surveillance systems |
| `mesh-or-panel-specifications` | Mesh aperture, wire diameter, or panel dimensions. | Perimeter security fencing |
| `network-and-remote-access` | Network connectivity and remote viewing capability. | CCTV surveillance systems |
| `opening-time` | Barrier opening time. | Gate barrier systems |
| `operating-cycle-time` | Full open-close cycle time. | Gate barrier systems |
| `post-type-and-spacing` | Post type, dimensions, and recommended spacing. | Perimeter security fencing |
| `safety-sensors-and-features` | Safety sensors and anti-crush features. | Gate barrier systems |
| `storage-capacity-and-retention` | Recording storage capacity and retention period. | CCTV surveillance systems |
| `user-capacity` | Maximum number of enrolled users/credentials. | Biometric access control systems |
| `vehicle-detection` | Vehicle detection method (loop, radar, camera). | Gate barrier systems |

### Performance — Solar (8 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `dc-wiring-and-combiner-boxes` | DC wiring design and combiner box specifications. | Solar PV systems |
| `energy-storage` | Battery storage system specifications if applicable. | Solar PV systems |
| `grid-connection` | Grid connection requirements and anti-islanding. | Solar PV systems |
| `inverter-type-and-rating` | Inverter type (string, micro, central) and power rating. | Solar PV systems |
| `monitoring-system` | System monitoring and data logging capabilities. | Solar PV systems |
| `mounting-structure` | Mounting system type and structural requirements. | Solar PV systems |
| `solar-panel-specifications` | Solar panel type, wattage, efficiency, and dimensions. | Solar PV systems |
| `system-configuration` | Overall system configuration (grid-tied, off-grid, hybrid). | Solar PV systems |

### Performance — Solar Street Lighting (6 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `autonomy-days` | Number of consecutive days of operation without sunlight. | Solar street lighting |
| `battery-capacity-and-type` | Battery capacity, chemistry, and cycle life. | Solar street lighting |
| `dusk-to-dawn-control` | Automatic dusk-to-dawn switching and dimming control. | Solar street lighting |
| `luminaire-output-and-efficacy` | Luminaire lumen output and efficacy. | Solar street lighting |
| `pole-height-and-mounting` | Pole height and luminaire mounting configuration. | Solar street lighting |
| `solar-panel-rating` | Solar panel wattage and type. | Solar street lighting |

### Performance — Telehandlers (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `attachment-compatibility` | Compatible attachments (forks, bucket, winch, platform) and quick-hitch type. | Telehandlers |
| `lift-height-and-forward-reach` | Maximum lift height and maximum forward reach with rated load. | Telehandlers |
| `load-chart` | Load chart showing capacity at various heights and reaches. | Telehandlers |
| `rated-lift-capacity` | Maximum rated lift capacity at minimum reach. | Telehandlers |
| `stability-and-operating-envelope` | Stability data and safe operating envelope per load chart. | Telehandlers |

### Performance — Traffic Systems (8 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `communication-and-central-control` | Communication protocol and central management capability. | Traffic management signal systems |
| `controller-type` | Traffic signal controller type and standard. | Traffic management signal systems |
| `led-module-specifications` | LED module specifications (intensity, viewing angle, color). | Traffic management signal systems |
| `pedestrian-features` | Pedestrian signal features (push button, countdown, audible). | Traffic management signal systems |
| `phase-and-timing-configuration` | Signal phase plan and timing configuration. | Traffic management signal systems |
| `power-supply-and-backup` | Power supply and battery backup for signal continuity. | Traffic management signal systems |
| `signal-head-type` | Signal head type (LED module, full-ball, arrow, pedestrian). | Traffic management signal systems |
| `vehicle-detection-method` | Vehicle detection method (inductive loop, radar, video). | Traffic management signal systems |

### Performance — Transfer (3 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `control-logic` | Transfer control logic and programmable settings. | Automatic transfer switches |
| `transfer-mechanism` | Transfer switch mechanism type (open, closed, delayed). | Automatic transfer switches |
| `transfer-time` | Transfer time between sources. | UPS systems, ATS |

### Performance — UPS (3 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `battery-type-and-runtime` | Battery technology and backup runtime. | UPS systems |
| `bypass-functions` | Manual and automatic bypass functions. | UPS systems |
| `input-output-specifications` | Input voltage/frequency range and output regulation. | UPS systems |

### Performance — Valves (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `connection-type` | Valve or fitting connection type (flanged, threaded, grooved, etc.). | Fire protection valves |
| `end-connections` | Valve end connection type. | Industrial valves |
| `flow-characteristics` | Valve flow characteristics. | Industrial valves |
| `pressure-class` | Valve pressure class rating. | Industrial valves |
| `valve-type-and-function` | Valve type and operational function. | Fire protection valves, industrial valves |

### Performance — Vehicles (39 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `axle-configuration` | Number and type of axles. | Trailers |
| `bed-dimensions` | Pickup bed dimensions. | Pickup trucks |
| `body-configuration` | Body type and configuration. | Commercial vehicles |
| `body-type-and-compaction` | Refuse body type and compaction mechanism. | Refuse collection vehicles |
| `cab-configuration` | Cab type (single, extended, crew). | Pickup trucks |
| `cargo-volume` | Cargo area volume. | Delivery vans |
| `chassis` | Base chassis specifications. | Special-purpose vehicles |
| `chassis-and-powertrain` | Chassis and powertrain specifications. | Ambulances |
| `compaction-ratio` | Waste compaction ratio. | Refuse collection vehicles |
| `coupling` | Coupling type (kingpin, drawbar, etc.). | Trailers |
| `deck-dimensions` | Flatbed deck length and width. | Flatbed trailers |
| `deck-height` | Deck height for lowbed trailers. | Lowbed trailers |
| `deck-or-body-type` | Deck or body type for general trailers. | Trailers |
| `drivetrain` | Drive configuration (4×2, 4×4, 6×4, etc.). | Trucks, vehicles, telehandlers |
| `engine-options` | Available engine options. | Pickup trucks, vans |
| `filling-and-discharge` | Filling and discharge system for water tankers. | Water tankers |
| `hose-reel` | Hose reel capacity and specifications. | Sewer jetting vehicles |
| `insulation` | Insulation type and thickness for reefer trailers. | Refrigerated trailers |
| `interior-dimensions` | Interior cargo area dimensions. | Refrigerated trailers |
| `jetting-pressure-and-flow` | High-pressure jetting pump specifications. | Sewer jetting vehicles |
| `loading-and-discharge` | Loading and discharge system for tanker trailers. | Tanker trailers |
| `loading-and-discharge-system` | Loading and discharge equipment and method. | Fuel tankers |
| `medical-equipment-integration` | Medical equipment mounting and integration. | Ambulances |
| `patient-compartment` | Patient compartment dimensions and layout. | Ambulances |
| `payload-and-towing-capacity` | Payload and towing capacity. | Pickup trucks |
| `payload-capacity` | Maximum payload capacity. | Trucks, trailers, vans |
| `ramp-type` | Loading ramp type and operation. | Lowbed trailers |
| `refrigeration-unit` | Refrigeration unit model and capacity. | Refrigerated trailers |
| `spray-system` | Water spray/distribution system. | Water tankers |
| `suction-system` | Suction/vacuum system specifications. | Street sweepers, sewer jetting |
| `suspension` | Suspension type for general trailers. | Trailers |
| `suspension-type` | Suspension type. | Flatbed trailers |
| `sweeping-width` | Total sweeping path width. | Street sweepers |
| `tank-capacity` | Tank volume capacity. | Water tankers, sewer jetting vehicles |
| `tank-capacity-and-compartments` | Total capacity and number of tank compartments. | Fuel tankers, tanker trailers |
| `tank-material` | Tank construction material and finish. | Tankers |
| `temperature-range` | Operating temperature range for refrigeration. | Refrigerated trailers |
| `vehicle-class-and-type` | Ambulance classification (Type I, II, III). | Ambulances |
| `water-spray` | Water spray/dust suppression system. | Street sweepers |

### Safety (3 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `safety-data` | Safety and hazard data for lubricants/chemicals. | Lubricants |
| `safety-features` | Built-in safety features. | Vehicles, heavy equipment, forklifts, telehandlers, backhoe loaders |
| `safety-systems` | Safety systems (LMI, anti-two-block, etc.). | Cranes, aerial work platforms |

### Service (19 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `client-responsibilities` | Client responsibilities and obligations. | Global sourcing services |
| `deliverables` | Service deliverables and outputs. | Global sourcing services |
| `documentation` | Documentation management. | Project/logistics sourcing |
| `documentation-and-logistics` | Documentation and logistics management. | Global sourcing services |
| `procurement-workflow` | Procurement workflow management. | Project/logistics sourcing |
| `project-types-supported` | Project types supported by the service. | Project/logistics sourcing |
| `quality-inspection` | Quality inspection services. | Global sourcing services |
| `quality-inspection-coordination` | Quality inspection coordination capability. | OEM/spare parts sourcing |
| `quotation-evaluation` | Quotation evaluation methodology. | Global sourcing services |
| `rfq-process` | Request for quotation process and workflow. | Global sourcing services |
| `shipping-and-logistics` | Shipping and logistics coordination. | Project/logistics sourcing |
| `sourcing-scope` | Scope of sourcing services offered. | Global sourcing services |
| `supplier-coordination` | Multi-supplier coordination capability. | Project/logistics sourcing |
| `supplier-identification` | Supplier identification process. | Bulk/industrial supply sourcing |
| `supplier-identification-and-qualification` | Supplier identification and qualification process. | OEM/spare parts sourcing |
| `supported-equipment-types` | Equipment types supported by the sourcing service. | OEM/spare parts sourcing |
| `supported-product-categories` | Product categories supported. | Bulk/industrial supply sourcing |
| `technical-specification-review` | Technical specification review capability. | OEM/spare parts sourcing |
| `volume-and-packaging` | Volume requirements and packaging options. | Bulk/industrial supply sourcing |

### Standards (5 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `adr-compliance` | ADR (dangerous goods transport) compliance. | Fuel tankers, tanker trailers |
| `applicable-standards` | Applicable international and local standards. | All products |
| `ip-and-ik-rating` | Ingress protection and impact protection rating. | LED lighting, public street lighting |
| `ip-rating` | Ingress protection rating. | Switchgear, distribution panels |
| `type-test-certificates` | Type test certificates per IEC standards. | Medium-voltage switchgear |

### Standards — Medical (1 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `regulatory-documentation` | Regulatory documentation (CE, FDA, ISO 13485). | Healthcare products |

### Storage (2 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `disposal-and-waste` | Disposal and waste management requirements. | Metalworking fluids |
| `storage-and-handling` | Storage conditions and handling requirements. | Chemicals, lubricants, construction materials |

### Universal (3 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `product-overview` | General introduction to the product: what it is, its function, and where it is used. | All physical products |
| `selection-criteria` | Key factors a buyer should consider when selecting this product. | All products |
| `technical-rfq-checklist` | Structured checklist of technical data points required for an RFQ submission. | All physical products |

### Universal — Medical (1 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `intended-use` | Clinical or operational context in which the medical product is intended to be used. | Healthcare products |

### Universal — Services (2 modules)

| Module ID | Definition | Applicable Product Types |
|---|---|---|
| `information-required-for-rfq` | Information the client must provide for a sourcing RFQ. | Global sourcing services |
| `service-overview` | General introduction to a service/capability offering. | Global sourcing service records |

### Module selection logic

1. Start with universal modules (product-overview or service-overview, selection-criteria, technical-rfq-checklist).
2. Add performance/specification modules matching the product's actual technical parameters.
3. Add standards/compliance modules matching the product's regulatory context.
4. Add installation/operation modules matching the product's lifecycle needs.
5. Omit modules where no relevant content could exist for that product type.
6. Two products in the same category may receive different module sets (e.g., `diesel-engines` gets engine modules while `fire-pumps` gets pump modules, even though both are under `fire-pumps` category).
7. Service/capability records use the service-specific module set instead of product modules.
8. Legacy-unregistered records have no recommended modules (`recommended_modules` is empty, `recommended_modules_status` is `not-applicable`).

## 8. Evidence and Source Policy

### Critical distinction: Repository data vs. verified manufacturer documentation

**Repository data indicators** record that data files exist within the project repository. They do NOT constitute independent verification of technical specifications:

| Indicator | Meaning | Does NOT mean |
|---|---|---|
| `specifications-in-data` | Specification data exists in product TS files | Manufacturer datasheet has been verified |
| `catalogues-in-data` | Catalogue data exists in product TS files | Technical catalogue is from a verified manufacturer source |
| `images-in-data` | Product images exist in the repository | Images are from an official manufacturer source |
| `faq-in-data` | FAQ content exists for the product | FAQ content has been technically verified |
| `seo-in-data` | SEO metadata exists for the product | SEO content has been reviewed for accuracy |
| `sourcing-record-in-data` | Sourcing/supplier records exist | Supplier has been qualified or audited |

**Verified technical sources** are traceable manufacturer documents with identifiable source:

- Manufacturer Datasheet (with manufacturer name, document number/version)
- Installation and Operation Manual
- Technical Catalogue (from identified manufacturer)
- Performance Curve (from manufacturer testing)
- Dimensional Drawing
- Material Certificate / Mill Certificate
- Type Test Certificate (per IEC/IEEE standards)
- Safety Data Sheet (SDS/MSDS)
- Applicable Standard Document
- Test Report

### `technical_evidence_state` definitions

| State | Definition |
|---|---|
| `repository-data-with-linked-articles` | Repository data exists AND the product is linked to existing knowledge articles that contain technically authored content. |
| `repository-data-only` | Repository data files exist but no traceable manufacturer documentation has been independently verified. This is the state of **all 222 registered products** except those with linked articles. |
| `no-data` | No repository data exists for this product. |
| `not-applicable` | Legacy-unregistered product; evidence assessment is not applicable. |

### Rules

1. Sources are identified per-product based on product type and sector.
2. No source is marked as available unless it exists in the repository data. Repository data indicators describe data presence, not verification status.
3. Where a manufacturer source cannot be identified, the specific document needed is recorded in `missing_evidence`.
4. No manufacturer names, document numbers, or URLs are invented.
5. Technical claims in future articles must be supported by traceable evidence before publication.

## 9. Readiness Definitions

| Level | Definition |
|---|---|
| `high` | 4+ data fields populated (specifications, catalogues, FAQ, SEO, public identity). Sufficient repository data exists to draft a knowledge profile pending manufacturer source verification. |
| `medium` | 2–3 data fields populated. Partial repository data exists; manufacturer documentation required for verification. |
| `low` | 1 data field populated. Minimal data; substantial manufacturer documentation required. |
| `blocked` | No data fields beyond name, OR legacy-unregistered record. Cannot proceed without data migration or registry reinstatement. |

| Readiness | Count |
|---|---|
| high | 35 |
| medium | 187 |
| low | 0 |
| blocked | 27 |

## 10. Existing Knowledge Article Mapping

### Electrical & Energy (3 articles — product-linked)

- **How to Specify Medium Voltage Switchgear** (`medium-voltage-switchgear-specification-guide`, type: buying-guide) → `relatedProductIds`: [`medium-voltage-switchgear`, `ring-main-units`]
- **Generator Ratings Explained: ESP, PRP, LTP and COP** (`generator-ratings-standby-prime-continuous`, type: technical-guide) → `relatedProductIds`: [`diesel-generators`]
- **How to Specify Low Voltage Distribution Panels** (`low-voltage-distribution-panel-specification`, type: buying-guide) → `relatedProductIds`: [`low-voltage-switchgear`, `distribution-panel-boards`]

### Fire Protection (5 articles — sector-level only)

- **How to Choose Fire Pumps** (`how-to-choose-fire-pumps`, type: article)
- **NFPA Standards Explained** (`nfpa-standards-explained`, type: article)
- **Difference Between FM200 and NOVEC 1230** (`fm200-vs-novec-1230`, type: article)
- **Fire Pump Selection Guide** (`fire-pump-selection-guide`, type: article)
- **Common Fire Protection Mistakes** (`common-fire-protection-mistakes`, type: article)

### Government Procurement (3 articles — OUT OF SCOPE)

- ~~Contracting Methods Under Egypt's Law 182 of 2018~~ (`public-contracting-methods-law-182`)
- ~~Writing Tender Specifications Without Brand Names~~ (`technical-specifications-without-brand-names`)
- ~~Provisional and Final Guarantees in Egyptian Public Tenders~~ (`bid-bond-and-final-guarantee-law-182`)

## 11. Search-Intent Methodology and Limitations

Search intent and keyword values are derived from product name, sector context, and product type. All keywords are **search-demand-hypothesis** values — no keyword-volume data was consulted.

## 12. Pilot Product Status

**Pilot selection: pending user decision.** Candidates based on data completeness and sector diversity:

| # | Product ID | Sector | Type | Rationale |
|---|---|---|---|---|
| 1 | `diesel-generators` | Electrical & Energy | generator | Existing technical guide with `relatedProductIds` link. |
| 2 | `medium-voltage-switchgear` | Electrical & Energy | switchgear-panel | Existing buying guide with `relatedProductIds` link. |
| 3 | `castrol-hyspin-aws-46` | Lubricants & Oils | industrial-lubricant | Public identity complete. Tests lubricant-specific module structure. |
| 4 | `fire-pumps` | Fire Protection | fire-pump | Core fire-protection product with existing sector-level articles. |
| 5 | `electric-hospital-beds` | Healthcare | medical-equipment | Tests medical-equipment module structure with regulatory requirements. |
| 6 | `industrial-raw-materials-sourcing` | Global Sourcing | service/capability | Tests service/capability profile structure. |

## 13. Outstanding Decisions and Evidence Gaps

### Decisions requiring approval

1. **Public identity migration:** 188 of 222 registered products lack `publicName_en/ar` + `publicShortDescription_en/ar`.
2. **Legacy record disposition:** 27 legacy-unregistered records. Will these be reinstated, reclassified, or permanently archived?
3. **Manufacturer documentation sourcing:** No traceable manufacturer datasheets verified for any product.
4. **Publication approval workflow:** Who approves each knowledge profile?
5. **Pilot product selection:** Candidates proposed in §12.

## 14. Validation Results

| Check | Result |
|---|---|
| Total CSV records | 249 |
| CSV columns | 32 |
| Registered records | 222 |
| Legacy-unregistered records | 27 |
| Unique product IDs | 249 |
| Duplicate product IDs | 0 |
| Distinct module IDs in CSV | 461 |
| Module IDs documented in §7 | 461 / 461 |
| Invalid related-product references | 0 |
| CSV–MD count agreement | ✓ |

### v4.1 Sentinel Value Audit

| Check | Result |
|---|---|
| Sentinel values in `related_products` | 0 (expected: 0) ✓ |
| Sentinel values in `recommended_modules` | 0 (expected: 0) ✓ |
| Non-standard values in `publication_approval` | 0 (expected: 0) ✓ |
| Legacy records with non-empty `product_type` | 0 (expected: 0) ✓ |
| Registered records with `proposed_product_type` | 0 (expected: 0) ✓ |

### Status column distributions

**`related_products_status`:**

| Status | Count |
|---|---|
| `none-identified` | 4 |
| `not-applicable` | 27 |
| `verified-related-products` | 218 |

**`recommended_modules_status`:**

| Status | Count |
|---|---|
| `active` | 222 |
| `not-applicable` | 27 |

**`publication_approval`:**

| Value | Count |
|---|---|
| `not-applicable` | 27 |
| `pending-user-approval` | 222 |

### Technical evidence state distribution

| State | Count |
|---|---|
| `not-applicable` | 27 |
| `repository-data-only` | 217 |
| `repository-data-with-linked-articles` | 5 |

### v4 → v4.1 Changes Summary

| Change | v4 | v4.1 |
|---|---|---|
| CSV columns | 29 | 32 |
| Legacy `product_type` | Populated with proposed values | Empty |
| `proposed_product_type` column | Did not exist | New — holds proposed types for legacy records |
| `related_products` sentinels | `none-verified` (4), `not-applicable` (27) | All removed — empty string instead |
| `related_products_status` | Did not exist | New — explains empty/populated state |
| `recommended_modules` for legacy | `not-applicable — legacy-unregistered` | Empty string |
| `recommended_modules_status` | Did not exist | New — `active` or `not-applicable` |
| `publication_approval` | Descriptive text for legacy | Clean: `pending-user-approval` or `not-applicable` |
| Heavy equipment modules | Generic for breakers, AWP, telehandlers, backhoes | Product-specific specialized modules |
| Security modules | Shared generic set for all 5 products | Individual modules per product type |
| Public infrastructure modules | Shared generic set for all 5 products | Individual modules per product type |
| Furniture modules | Shared set with `finish-and-upholstery` for all | Individual modules per product type |

### Confirmed: no unauthorized operations

- No source code or product data was modified.
- No product was restored or published.
- No website page was created.
- No article was created or modified.
- No commit was created.
- No push, merge, or deployment occurred.
- Only the two authorized draft files were modified.

## 15. Authorization Statement

**Publication and implementation have not been authorized.** This task produced two internal mapping documents only. No knowledge profile content has been created. No product page has been published. No changes to the application source code, product data, taxonomy, routes, or deployment have been made.

---

## Appendix: Files Inspected

| File | Purpose |
|---|---|
| `data/sectors.ts` | Sector definitions |
| `data/product-categories.ts` | Category taxonomy |
| `data/products/index.ts` | Product registry and imports |
| `data/products/types.ts` | Product type definitions |
| `lib/products/public-product.ts` | `hasPublicIdentity()` / `toPublicProduct()` |
| `data/knowledge/index.ts` | Knowledge article registry |
| `data/knowledge/articles/electrical-energy.ts` | 3 electrical articles |
| `data/knowledge/articles/fire-protection.ts` | 5 fire protection articles |
| `data/knowledge/articles/government-procurement.ts` | 3 procurement articles |
| `data/products/healthcare/*.ts` (9 legacy files) | 27 unregistered legacy products |
| `data/products/<sector>/*.ts` (41 registered files) | 222 registered products |