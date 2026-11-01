/**
 * ColdPackPro - Cooler Box Product Catalog Engine
 * Comprehensive B2B Product Line based on Official Catalog Specification
 * Features:
 * - 8 Cold-Chain Application Series & 33+ Models
 * - Interactive Series Filtering, Live Search & Spec Modals
 * - Image Upload & Dropzone Management with Local Persistence
 * - Application Matrix & Packaging Validation Guidelines
 */

const COOLER_CATALOG_DATA = {
  brand: "Coldpackpro Cold Chain Technology",
  title: "Cooler Box Product Catalog",
  subtitle: "Professional Insulated Solutions for Food, Seafood, Healthcare, Catering, and Temperature-Controlled Logistics",
  
  principles: [
    { num: "01", title: "Temperature Range", desc: "Define the required payload temperature before selecting the cooler, cold pack, or phase-change material." },
    { num: "02", title: "Holding Time", desc: "Consider ambient temperature, route duration, loading pattern, cold-storage material, and opening frequency." },
    { num: "03", title: "Usable Capacity", desc: "Select a capacity that accommodates the product payload while leaving necessary space for thermal-control PCM packs." },
    { num: "04", title: "Handling Requirements", desc: "Evaluate stacking loads, vehicle loading, ergonomic carrying, wheeled movement, hygiene cleaning, and repeated heavy use." },
    { num: "05", title: "Compliance & Regulations", desc: "For medical, vaccine, biological, or dangerous-goods transport, verify applicable packaging, UN2814/IATA/IMDG validation before shipment." }
  ],

  advantages: [
    { title: "Durable Insulated Shell", desc: "Heavy-duty rigid-plastic and integrated molded construction for harsh industrial transit." },
    { title: "Wide Capacity Matrix", desc: "From compact 6L medical carriers up to 1,000L high-volume commercial seafood containers." },
    { title: "Multi-Temperature Media", desc: "Engineered for water gel packs, sub-zero PCMs (-18°C, -25°C, -55°C), and cryogenic dry-ice systems." },
    { title: "Sanitary & Easy Cleaning", desc: "Food-contact and pharmaceutical-grade interior surfaces with seamless anti-stain washability." },
    { title: "Impact & Wear Resistant", desc: "Drop-tested corner structures, corrosion-resistant latches, and UV-stabilized resins." },
    { title: "Warehouse Stackability", desc: "Engineered interlocking lid and base profiles for safe palletizing and truck bed loading." },
    { title: "Certified Logistics Safe", desc: "Meets IMDG Code (Sea) & IATA DGR (Air) non-restricted cargo safety criteria worldwide." }
  ],

  seriesList: [
    {
      id: "medical",
      categoryName: "Medical & Healthcare",
      seriesTitle: "Medical, Pharmaceutical & Vaccine Transport Series",
      tagline: "Controlled Transport for Temperature-Sensitive Healthcare Products",
      badge: "UN2814 / 2~8°C",
      badgeColor: "emerald",
      heroSlot: "img-06",
      heroSlotLabel: "IMAGE 06: Medical cooler box in pharmaceutical cold-chain logistics setting",
      desc: "Intended for vaccines, pharmaceutical products, medical supplies, biological specimens, and clinical trial supplies. Stated temperature range, holding time, and regulatory packaging configuration must be verified against validated documentation.",
      models: [
        { name: "HP-6L", capacity: "6 Liters", app: "UN2814 medical and vaccine transport; compact clinical shipments", extDim: "320 × 230 × 240 mm", intDim: "260 × 170 × 160 mm", weight: "1.8 kg", temp: "2°C to 8°C / Frozen", hold: "24–36 hrs (with PCMs)", material: "PU Rigid Foam + Food-Grade PP", imgSlot: "img-07a", slotLabel: "IMAGE 07a: HP-6L Front 3/4 View" },
        { name: "HP-12L", capacity: "12 Liters", app: "UN2814 medical and vaccine transport; hospital branch distribution", extDim: "390 × 280 × 290 mm", intDim: "320 × 210 × 210 mm", weight: "2.6 kg", temp: "2°C to 8°C", hold: "36–48 hrs", material: "PU Foam + HDPE Shell", imgSlot: "img-07b", slotLabel: "IMAGE 07b: HP-12L Front 3/4 View" },
        { name: "HP-17L", capacity: "17 Liters", app: "UN2814 medical and vaccine transport; blood plasma and specimens", extDim: "440 × 310 × 320 mm", intDim: "360 × 240 × 240 mm", weight: "3.2 kg", temp: "2°C to 8°C / -20°C", hold: "48 hrs", material: "PU Closed-Cell Core", imgSlot: "img-07c", slotLabel: "IMAGE 07c: HP-17L Front 3/4 View" },
        { name: "HP-20L", capacity: "20 Liters", app: "UN2814 medical and vaccine transport; regional health station deliveries", extDim: "470 × 330 × 340 mm", intDim: "390 × 260 × 260 mm", weight: "3.8 kg", temp: "2°C to 8°C", hold: "48–60 hrs", material: "PU Foam + LLDPE / PP", imgSlot: "img-07d", slotLabel: "IMAGE 07d: HP-20L Front 3/4 View" },
        { name: "HP-33L", capacity: "33 Liters", app: "UN2814 medical and vaccine transport; medium bulk bio-pharma logistics", extDim: "540 × 370 × 370 mm", intDim: "460 × 300 × 290 mm", weight: "5.1 kg", temp: "2°C to 8°C / -25°C", hold: "48–72 hrs", material: "High-Density PU + Heavy Latches", imgSlot: "img-07e", slotLabel: "IMAGE 07e: HP-33L Front 3/4 View" },
        { name: "HP-35L", capacity: "35 Liters", app: "2–8°C vaccine box and biological-specimen transfer box with partition racks", extDim: "560 × 380 × 385 mm", intDim: "475 × 310 × 300 mm", weight: "5.5 kg", temp: "2°C to 8°C Strict", hold: "60–72 hrs", material: "PU Insulation + Real-time Temp Sensor Port", imgSlot: "img-07f", slotLabel: "IMAGE 07f: HP-35L Front 3/4 View" },
        { name: "HP-50L", capacity: "50 Liters", app: "Chilled storage and preservation of food and pharmaceuticals; vaccine cold-chain", extDim: "640 × 420 × 420 mm", intDim: "540 × 340 × 330 mm", weight: "7.2 kg", temp: "2°C to 8°C / -18°C", hold: "72 hrs", material: "PU Insulation + Dual Gaskets", imgSlot: "img-07g", slotLabel: "IMAGE 07g: HP-50L Front 3/4 View" },
        { name: "HP-65L", capacity: "65 Liters", app: "UN2814 medical and vaccine transport; stackable configuration for vehicle transit", extDim: "710 × 450 × 440 mm", intDim: "600 × 370 × 350 mm", weight: "9.0 kg", temp: "2°C to 8°C / -20°C", hold: "72–96 hrs", material: "Molded PU Shell + Stack Guides", imgSlot: "img-07h", slotLabel: "IMAGE 07h: HP-65L Front 3/4 View" }
      ],
      openBoxSlot: "img-08",
      openBoxSlotLabel: "IMAGE 08: Open-box configuration with PCM cold packs & healthcare payloads",
      techNote: "Medical Transport Warning: Complete cold-chain performance depends on the integrated pack-out system, preconditioning temperature, route ambient profiles, and door-opening frequency. Always validate complete configurations before clinical deployment."
    },

    {
      id: "marine",
      categoryName: "Seafood & Marine Logistics",
      seriesTitle: "Marine Series — Seafood & Fresh-Product Transport Cooler Boxes",
      tagline: "High-Volume Thermal Protection for Fishery, Aquaculture and Bulk Produce",
      badge: "Heavy-Duty / 300L–1000L",
      badgeColor: "cyan",
      heroSlot: "img-09",
      heroSlotLabel: "IMAGE 09: Large marine cooler boxes used for seafood handling and dockside transit",
      desc: "Designed for seafood, fishery products, fresh fish, live catch, agricultural harvests, and large-scale refrigerated distribution. Built with thick foam walls, recessed fast-drain valves, and forklift-compatible bases.",
      models: [
        { name: "HP-300L", capacity: "300 Liters", app: "Seafood and fresh-product coastal transport & market wholesale", extDim: "1050 × 720 × 740 mm", intDim: "930 × 600 × 600 mm", weight: "26 kg", drain: "Fast-flow 2-inch drain outlet", stack: "2-tier stackable loaded", material: "Double-walled LLDPE + PU Core", imgSlot: "img-10a", slotLabel: "IMAGE 10a: HP-300L Seafood Cooler" },
        { name: "HP-630L", capacity: "630 Liters", app: "Large-volume seafood harvest, processing plants & refrigerated truck loads", extDim: "1230 × 1030 × 850 mm", intDim: "1110 × 910 × 690 mm", weight: "45 kg", drain: "Dual threaded drain plugs", stack: "3-tier stackable with guide lugs", material: "Rotomolded LLDPE + High-Density PU", imgSlot: "img-10b", slotLabel: "IMAGE 10b: HP-630L Seafood Cooler" },
        { name: "HP-660L", capacity: "660 Liters", app: "Large-volume seafood and fresh-food distribution center container", extDim: "1250 × 1040 × 880 mm", intDim: "1120 × 920 × 710 mm", weight: "48 kg", drain: "Dual side drain + Rubber gasket seal", stack: "4-way forklift & pallet jack base", material: "Impact-Resistant LLDPE Shell", imgSlot: "img-10c", slotLabel: "IMAGE 10c: HP-660L Seafood Cooler" },
        { name: "HP-800L", capacity: "800 Liters", app: "Commercial seafood, tuna, salmon logistics and aquaculture processing", extDim: "1450 × 1050 × 920 mm", intDim: "1310 × 920 × 740 mm", weight: "58 kg", drain: "Deep sump drain with stopper", stack: "Heavy-duty stacking feet", material: "Heavy-duty Marine Polyethylene", imgSlot: "img-10d", slotLabel: "IMAGE 10d: HP-800L Seafood Cooler" },
        { name: "HP-1000L", capacity: "1,000 Liters", app: "High-volume bulk seafood, fresh produce, cold-chain maritime container", extDim: "1550 × 1150 × 1020 mm", intDim: "1400 × 1000 × 820 mm", weight: "72 kg", drain: "Central threaded drainage port", stack: "Reinforced forklift pockets", material: "Full PU Core + Extra Thick Walls (70mm)", imgSlot: "img-10e", slotLabel: "IMAGE 10e: HP-1000L Bulk Seafood Cooler" }
      ],
      detailSlots: [
        { slot: "img-11", label: "IMAGE 11: Interior loading view with crushed ice, gel bricks & fresh seafood catch" },
        { slot: "img-12", label: "IMAGE 12: Detail view of heavy-duty tie-down latches, silicone gasket & recessed drain valve" }
      ]
    },

    {
      id: "delivery",
      categoryName: "Food Delivery & Logistics",
      seriesTitle: "Commercial Fresh-Food Delivery Series",
      tagline: "Insulated Cooler Boxes for Last-Mile Delivery, Meal Transit & Groceries",
      badge: "Commercial / 8L–100L",
      badgeColor: "blue",
      heroSlot: "img-13",
      heroSlotLabel: "IMAGE 13: Food-delivery electric vehicle & commercial fresh-food distribution scene",
      desc: "Engineered for restaurant deliveries, catering meal couriers, supermarket grocery distribution, meal prep kitchens, and short- to medium-distance commercial food logistics.",
      models: [
        { name: "HP-8L", capacity: "8 Liters", app: "Compact meal and fresh-food courier delivery; scooter rear rack", extDim: "340 × 240 × 260 mm", intDim: "280 × 180 × 180 mm", weight: "1.9 kg", hold: "4–8 hrs transit", material: "Lightweight PP/PU Composite", imgSlot: "img-14a", slotLabel: "IMAGE 14a: HP-8L Delivery Box" },
        { name: "HP-14L", capacity: "14 Liters", app: "Meal delivery and urban food distribution with shoulder strap", extDim: "410 × 290 × 300 mm", intDim: "340 × 220 × 220 mm", weight: "2.7 kg", hold: "6–10 hrs transit", material: "High-Impact Polypropylene", imgSlot: "img-14b", slotLabel: "IMAGE 14b: HP-14L Delivery Box" },
        { name: "HP-28L", capacity: "28 Liters", app: "Catering banquet deliveries and commercial fresh grocery transit", extDim: "500 × 350 × 360 mm", intDim: "420 × 280 × 270 mm", weight: "4.2 kg", hold: "8–12 hrs transit", material: "PU Rigid Core + Ergonomic Handles", imgSlot: "img-14c", slotLabel: "IMAGE 14c: HP-28L Delivery Box" },
        { name: "HP-66L", capacity: "66 Liters", app: "Large-volume food distribution, bakery transit, bulk fresh meat", extDim: "690 × 440 × 430 mm", intDim: "580 × 360 × 340 mm", weight: "8.5 kg", hold: "12–24 hrs transit", material: "Heavy-Duty Food-Grade Polyethylene", imgSlot: "img-14d", slotLabel: "IMAGE 14d: HP-66L Delivery Box" },
        { name: "HP-80L", capacity: "80 Liters", app: "Commercial fresh-food truck transit and central kitchen transfers", extDim: "760 × 470 × 460 mm", intDim: "640 × 390 × 360 mm", weight: "10.5 kg", hold: "24 hrs transit", material: "Rigid PU Insulation + Steel Latches", imgSlot: "img-14e", slotLabel: "IMAGE 14e: HP-80L Delivery Box" },
        { name: "HP-88L", capacity: "88 Liters", app: "High-capacity meal delivery, event catering & food wholesale logistics", extDim: "800 × 490 × 470 mm", intDim: "680 × 400 × 370 mm", weight: "11.8 kg", hold: "24–36 hrs transit", material: "Double-Walled Shell + Cam Latches", imgSlot: "img-14f", slotLabel: "IMAGE 14f: HP-88L Delivery Box" },
        { name: "HP-100L", capacity: "100 Liters", app: "Large-volume commercial food distribution, supermarket inter-branch transfers", extDim: "850 × 520 × 500 mm", intDim: "720 × 430 × 390 mm", weight: "13.2 kg", hold: "36 hrs transit", material: "PU Core + Skid Runners on Base", imgSlot: "img-14g", slotLabel: "IMAGE 14g: HP-100L Delivery Box" }
      ]
    },

    {
      id: "stackable",
      categoryName: "Warehouse & Stacking",
      seriesTitle: "Integrated-Molded Stackable Series",
      tagline: "Stackable Insulated Cooler Boxes for High-Density Logistics & Storage",
      badge: "Interlocking Lids / 65L & 110L",
      badgeColor: "amber",
      heroSlot: "img-16",
      heroSlotLabel: "IMAGE 16: Multiple stackable cooler boxes interlocked in a warehouse and delivery truck",
      desc: "Specially developed for repeated commercial handling, automated warehousing, and cross-docking operations. Interlocking lid and base channels prevent cargo sliding during bumpy road transit.",
      models: [
        { name: "HP-65L (Stackable)", capacity: "65 Liters", app: "Food, pharmaceutical, medical, and general cold-chain stacking", extDim: "710 × 455 × 445 mm", intDim: "600 × 370 × 350 mm", weight: "9.2 kg", feature: "Interlocking stacking rim; 5-tier rated", material: "Molded Polyethylene + Polyurethane", imgSlot: "img-17a", slotLabel: "IMAGE 17a: HP-65L Stacked & Unstacked Views" },
        { name: "HP-110L (Stackable)", capacity: "110 Liters", app: "Larger-volume food, meat, dairy & commercial cold-chain stacking", extDim: "880 × 540 × 520 mm", intDim: "750 × 440 × 410 mm", weight: "14.5 kg", feature: "Integrated stacking guides + Pallet-compatible", material: "Rigid Polyurethane 55mm Wall", imgSlot: "img-17b", slotLabel: "IMAGE 17b: HP-110L Stacked & Unstacked Views" }
      ],
      detailSlots: [
        { slot: "img-18", label: "IMAGE 18: Close-up of interlocking stacking guides, lid sealing gasket & reinforced base structure" }
      ]
    },

    {
      id: "hotel",
      categoryName: "Hotel & Foodservice",
      seriesTitle: "Hotel & Restaurant Insulated Container Series",
      tagline: "Professional Hot & Cold Foodservice Containers for Commercial Kitchens",
      badge: "304 Stainless Steel / 16L–90L",
      badgeColor: "violet",
      heroSlot: "img-19",
      heroSlotLabel: "IMAGE 19: Hotel banqueting kitchen and restaurant catering distribution scene",
      desc: "Designed for hotels, restaurants, catering companies, central kitchens, airline meal logistics, and institutional cafeterias. Includes 304 food-grade stainless-steel lined insulated vats and heavy cooler boxes.",
      models: [
        { name: "HP-16L (Stainless)", capacity: "16 Liters", type: "304 Stainless-Steel Insulated Food Container", app: "Restaurant, soup, sauce & catering hot/cold foodservice", extDim: "360 × 360 × 380 mm", intDim: "280 dia × 280 mm", weight: "4.1 kg", material: "304 Stainless Steel Inner + PU Core", imgSlot: "img-20a", slotLabel: "IMAGE 20a: HP-16L Stainless Insulated Container" },
        { name: "HP-20L (Stainless)", capacity: "20 Liters", type: "304 Stainless-Steel Insulated Food Container", app: "Restaurant and catering foodservice; buffet soup stations", extDim: "380 × 380 × 420 mm", intDim: "300 dia × 310 mm", weight: "4.8 kg", material: "304 Stainless Steel Inner + Insulated Lid", imgSlot: "img-20b", slotLabel: "IMAGE 20b: HP-20L Stainless Insulated Container" },
        { name: "HP-30L (Stainless)", capacity: "30 Liters", type: "304 Stainless-Steel Insulated Food Container", app: "Commercial kitchen prep, hotel room service & buffet supplies", extDim: "420 × 420 × 470 mm", intDim: "340 dia × 360 mm", weight: "6.2 kg", material: "304 Stainless Steel + Heavy Toggle Latches", imgSlot: "img-20c", slotLabel: "IMAGE 20c: HP-30L Stainless Insulated Container" },
        { name: "HP-50L (Stainless)", capacity: "50 Liters", type: "304 Stainless-Steel Insulated Food Container", app: "Hotel, hospital, university cafeteria and institutional foodservice", extDim: "480 × 480 × 560 mm", intDim: "390 dia × 440 mm", weight: "9.8 kg", material: "Full 304 Stainless Liner + Silicone Hermetic Seal", imgSlot: "img-20e", slotLabel: "IMAGE 20e: HP-50L Stainless Insulated Container" },
        { name: "HP-90L", capacity: "90 Liters", type: "Heavy-Duty Foodservice Insulated Cooler Box", app: "Large-volume prepared-food handling, event banquet logistics", extDim: "790 × 490 × 480 mm", intDim: "670 × 400 × 370 mm", weight: "12.5 kg", material: "Food-Grade PE Shell + PU Core (Gastronorm Pan Compatible)", imgSlot: "img-20f", slotLabel: "IMAGE 20f: HP-90L Foodservice Cooler Box" }
      ],
      detailSlots: [
        { slot: "img-21", label: "IMAGE 21: Foodservice application with GN pans, prepared hot meals & buffet containers" }
      ]
    },

    {
      id: "outdoor",
      categoryName: "Outdoor & Catering",
      seriesTitle: "Outdoor Catering Series",
      tagline: "Rugged Outdoor Beverage, Ice & Food Cooler Boxes for Leisure and Events",
      badge: "Outdoor / 9L–52L",
      badgeColor: "teal",
      heroSlot: "img-22",
      heroSlotLabel: "IMAGE 22: Outdoor picnic and catering event scene with beverage cooler boxes",
      desc: "Designed for outdoor dining, picnics, glamping, sporting events, beach parties, family gatherings, commercial beverage promotions, and mobile chilling.",
      models: [
        { name: "HP-9L", capacity: "9 Liters", app: "Compact outdoor food, canned beverage and personal road trip storage", extDim: "350 × 245 × 270 mm", intDim: "290 × 190 × 190 mm", weight: "2.1 kg", hold: "24 hrs ice retention", material: "Food-Grade PP / PU Foam Core", imgSlot: "img-23a", slotLabel: "IMAGE 23a: HP-9L Outdoor Cooler" },
        { name: "HP-22L", capacity: "22 Liters", app: "Outdoor dining, cold beer/wine, camping meals and BBQ storage", extDim: "470 × 330 × 350 mm", intDim: "395 × 260 × 260 mm", weight: "3.9 kg", hold: "48 hrs ice retention", material: "Rotomolded LLDPE + Stainless Steel Lock Clamps", imgSlot: "img-23b", slotLabel: "IMAGE 23b: HP-22L Outdoor Cooler" },
        { name: "HP-32L", capacity: "32 Liters", app: "Family camping, picnic cookouts, weekend yachting and fishing cooling", extDim: "540 × 375 × 380 mm", intDim: "450 × 300 × 280 mm", weight: "5.4 kg", hold: "72 hrs ice retention", material: "Heavy-Duty Polyurethane + Cup Holders on Lid", imgSlot: "img-23c", slotLabel: "IMAGE 23c: HP-32L Outdoor Cooler" },
        { name: "HP-52L", capacity: "52 Liters", app: "Large-capacity outdoor catering, corporate banquets and beverage cooling", extDim: "650 × 430 × 430 mm", intDim: "550 × 340 × 330 mm", weight: "7.8 kg", hold: "96 hrs ice retention", material: "Extra Thick PU Foam + Threaded Drain Plug", imgSlot: "img-23d", slotLabel: "IMAGE 23d: HP-52L Outdoor Cooler" }
      ],
      detailSlots: [
        { slot: "img-24", label: "IMAGE 24: Interior view packed with beverages, ice bricks & picnic gourmet containers" }
      ]
    },

    {
      id: "cooler-bag",
      categoryName: "Constant-Temp Cooler Bag",
      seriesTitle: "Constant-Temperature Cooler Bag Series",
      tagline: "HWBD-10 Portable Precision Thermal Carrier for Healthcare & Chilled Goods",
      badge: "Nominal 5°C / 2~8°C",
      badgeColor: "indigo",
      heroSlot: "img-25",
      heroSlotLabel: "IMAGE 25: HWBD-10 constant-temperature cooler bag — front, side, and interior views",
      desc: "Portable constant-temperature soft carrier for medical samples, vaccines, insulin, biological specimens, and express food deliveries requiring certified 2–8°C chilled stability.",
      models: [
        {
          name: "HWBD-10",
          capacity: "10 Liters Usable",
          type: "Constant-Temperature Precision Cooler Bag",
          targetTemp: "5°C Nominal Target (Chilled Range 2°C – 8°C)",
          extDim: "360 × 260 × 280 mm",
          intDim: "300 × 200 × 210 mm",
          weight: "1.45 kg (Empty) / Approx. 3.2 kg (with full PCM pack-out)",
          hold: "24–36 hrs at 35°C ambient",
          outerMaterial: "Waterproof 900D Oxford Fabric + High-Density Thermal Insulation",
          pcmMaterial: "+5°C Phase Change Material (PCM) Gel Cassettes (Included)",
          app: "Small-volume pharma transit, vaccines, biological specimen transfer, express cold delivery",
          imgSlot: "img-25b",
          slotLabel: "IMAGE 25b: HWBD-10 Technical Product Sheet"
        }
      ],
      detailSlots: [
        { slot: "img-26", label: "IMAGE 26: HWBD-10 internal configuration and 24-hour temperature holding curve chart" }
      ]
    },

    {
      id: "specialty",
      categoryName: "Specialty & Dry Ice",
      seriesTitle: "Specialty Series — Dry-Ice Storage & Foodservice Trays",
      tagline: "Specialized Ultra-Low Temperature & Institutional Meal Portioning Solutions",
      badge: "Cryogenic / 304 Stainless",
      badgeColor: "rose",
      heroSlot: "img-27",
      heroSlotLabel: "IMAGE 27: HP-320L Dry Ice Cooler Box with reinforced pressure-relief silicone seal",
      desc: "Engineered for specialized operational criteria: cryogenic dry-ice preservation (-78.5°C) and institutional 5-compartment heated meal portioning trays.",
      models: [
        {
          name: "HP-320L",
          capacity: "320 Liters Cryogenic Payload",
          type: "Dry-Ice Storage and Transport Cooler Box",
          altName: "HP-320L Cooler Box for Dry-Ice Storage and Transport",
          extDim: "1080 × 740 × 960 mm",
          intDim: "920 × 580 × 640 mm",
          weight: "38 kg",
          app: "Dry-ice storage and transport; ultra-low temperature cryogenic logistics, bio-banking",
          safety: "Dry ice sublimates into CO2 gas. Must be operated in well-ventilated environments with pressure relief valve.",
          material: "Ultra-thick 80mm Cryogenic Polyurethane Core + Low-temp Impact Polyethylene",
          imgSlot: "img-28",
          slotLabel: "IMAGE 28: HP-320L Interior and dry-ice block loading configuration"
        },
        {
          name: "304 Five-Compartment Meal Tray",
          capacity: "5 Standard Portion Compartments",
          type: "304 Stainless-Steel Five-Compartment Heated-Food Tray",
          altName: "Thickened Five-Compartment Stainless-Steel Meal Tray with Plastic Frame",
          extDim: "380 × 280 × 55 mm",
          weight: "0.85 kg",
          grade: "Food-Grade 304 (18/8) Stainless Steel",
          structure: "Thickened deep stainless tray encased in thermal insulated plastic outer frame",
          app: "Hospital meals, school cafeterias, restaurant catering, institutional meal distribution",
          imgSlot: "img-29",
          slotLabel: "IMAGE 29: Stainless-Steel Five-Compartment Meal Tray Top & Side Views"
        }
      ],
      detailSlots: [
        { slot: "img-30", label: "IMAGE 30: 5-compartment tray in a modern hospital cafeteria and institutional catering setting" }
      ]
    }
  ],

  matrix: [
    { app: "Vaccines, pharmaceuticals & medical supplies", series: "Medical & Vaccine Series", models: "HP-6L, HP-12L, HP-17L, HP-20L, HP-33L, HP-35L, HP-50L, HP-65L", range: "2°C to 8°C / -20°C" },
    { app: "Biological specimen clinical transfer", series: "Medical & Vaccine Series", models: "HP-35L, HP-17L, HP-20L and validated medical models", range: "2°C to 8°C Strict" },
    { app: "Seafood, catch & fishery products", series: "Marine Series", models: "HP-300L, HP-630L, HP-660L, HP-800L, HP-1000L", range: "0°C to 4°C / Frozen" },
    { app: "Commercial fresh-food & grocery distribution", series: "Commercial Fresh-Food Delivery Series", models: "HP-8L, HP-14L, HP-28L, HP-66L, HP-80L, HP-88L, HP-100L", range: "Ambient / Chilled / Frozen" },
    { app: "Warehouse racking & vehicle interlocking stacking", series: "Stackable Integrated-Molded Series", models: "HP-65L, HP-110L", range: "Multi-Temp Compatible" },
    { app: "Hotel, restaurant & central kitchen foodservice", series: "Hotel & Restaurant Series", models: "HP-16L, HP-20L, HP-30L, HP-50L, HP-90L", range: "Hot (65°C+) or Cold (2–8°C)" },
    { app: "Outdoor dining, camping & beverage cooling", series: "Outdoor Catering Series", models: "HP-9L, HP-22L, HP-32L, HP-52L", range: "Chilled Beverages & Food" },
    { app: "Portable constant-temperature precision courier", series: "Cooler Bag Series", models: "HWBD-10", range: "2°C to 8°C (Nominal 5°C)" },
    { app: "Dry-ice ultra-low cryogenic storage & transport", series: "Specialty Series", models: "HP-320L Dry Ice Cooler Box", range: "-78.5°C Ultra-Low" },
    { app: "Meal portioning, hygiene & institutional foodservice", series: "Specialty Series", models: "304 Stainless-Steel 5-Compartment Meal Tray", range: "Hot / Ambient Portioning" }
  ]
};

// ============================================================================
// PERSISTENT MULTI-TIER IMAGE STORAGE ENGINE
// Architecture: Memory Cache (Instant) <-> IndexedDB (Unlimited Quota) <-> Server Disk (/api/catalog-images)
// Prevents browser 5MB localStorage QuotaExceededError and permanently retains all uploaded photos on server disk
// ============================================================================
const IDB_NAME = "ColdPackPro_CatalogDB";
const IDB_STORE = "catalog_photos";
const STORAGE_KEY = "coldpackpro_cooler_box_photos";
const memoryImages = {};
const serverCatalogImages = {};

// 1. Synchronous fast pre-load from localStorage if available
try {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    Object.assign(memoryImages, parsed);
  }
} catch (e) {}

// 2. High-capacity IndexedDB connection (zero 5MB limit, hundreds of MBs available)
function openCatalogIDB() {
  return new Promise((resolve) => {
    if (!window.indexedDB) return resolve(null);
    try {
      const req = indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

async function idbGet(key) {
  const db = await openCatalogIDB();
  if (!db) return null;
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, "readonly");
      const store = tx.objectStore(IDB_STORE);
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

async function idbSet(key, value) {
  const db = await openCatalogIDB();
  if (!db) return;
  try {
    const tx = db.transaction(IDB_STORE, "readwrite");
    const store = tx.objectStore(IDB_STORE);
    store.put(value, key);
  } catch (e) {}
}

async function idbDelete(key) {
  const db = await openCatalogIDB();
  if (!db) return;
  try {
    const tx = db.transaction(IDB_STORE, "readwrite");
    const store = tx.objectStore(IDB_STORE);
    store.delete(key);
  } catch (e) {}
}

async function idbGetAll() {
  const db = await openCatalogIDB();
  if (!db) return {};
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(IDB_STORE, "readonly");
      const store = tx.objectStore(IDB_STORE);
      const req = store.getAllKeys();
      req.onsuccess = () => {
        const keys = req.result || [];
        if (keys.length === 0) return resolve({});
        const res = {};
        let pending = keys.length;
        keys.forEach((k) => {
          const getReq = store.get(k);
          getReq.onsuccess = () => {
            if (getReq.result) res[k] = getReq.result;
            pending--;
            if (pending === 0) resolve(res);
          };
          getReq.onerror = () => {
            pending--;
            if (pending === 0) resolve(res);
          };
        });
      };
      req.onerror = () => resolve({});
    } catch (e) {
      resolve({});
    }
  });
}

async function idbClear() {
  const db = await openCatalogIDB();
  if (!db) return;
  try {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).clear();
  } catch (e) {}
}

function getStoredImages() {
  const result = {};

  // 1. Base layer: Server-persisted catalog images from disk (/api/catalog-images)
  for (const [k, v] of Object.entries(serverCatalogImages)) {
    if (v && typeof v === "string") {
      result[k] = v;
    }
  }

  // 2. High-capacity IndexedDB & in-memory session images (includes freshly uploaded photos)
  for (const [k, v] of Object.entries(memoryImages)) {
    if (v && typeof v === "string") {
      result[k] = v;
    }
  }

  // 3. LocalStorage overlay (user current session instant cache)
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const stored = JSON.parse(raw);
      if (stored && typeof stored === "object") {
        for (const [k, v] of Object.entries(stored)) {
          if (v && typeof v === "string") {
            result[k] = v;
          }
        }
      }
    }
  } catch (e) {}

  return result;
}

function saveStoredImage(slotId, dataUrl) {
  if (!slotId || !dataUrl) return;

  // 1. Keep immediately in memory for instant visual feedback
  memoryImages[slotId] = dataUrl;

  // 2. Save directly into high-capacity IndexedDB (Massive quota: hundreds of MBs available)
  idbSet(slotId, dataUrl);

  // 3. Also try saving into localStorage for instant synchronous recovery
  try {
    let local = {};
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) local = JSON.parse(raw);
    local[slotId] = dataUrl;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(local));
  } catch (e) {
    // Expected when quota exceeds 5MB - server and IndexedDB guarantee permanent persistence
  }

  // 4. CRITICAL: Persist permanently to server filesystem (/images/catalog-uploads/)
  try {
    fetch('/api/catalog-images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotId: slotId, base64Data: dataUrl })
    })
    .then(r => r.json())
    .then(res => {
      if (res && res.success && res.url) {
        serverCatalogImages[slotId] = res.url;
        console.log('[Server Sync] Successfully saved to disk:', slotId, res.url);
      }
    })
    .catch(err => {
      console.warn('[Server Sync Error]', err);
    });
  } catch (e) {}

  updatePhotoCountBadge();
}

function removeStoredImage(slotId) {
  delete memoryImages[slotId];
  delete serverCatalogImages[slotId];
  idbDelete(slotId);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const current = JSON.parse(raw);
      delete current[slotId];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    }
  } catch (e) {}

  // Delete from server disk
  try {
    fetch('/api/catalog-images/' + encodeURIComponent(slotId), { method: 'DELETE' })
      .catch(() => {});
  } catch (e) {}

  renderCoolerCatalog();
  renderAllExtendedCatalogSlots();
  updatePhotoCountBadge();
}

function clearAllUploadedImages() {
  const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";
  const promptMsg = isZh
    ? "Are you sure you want to reset all uploaded product images to default blueprint schematics?"
    : "Are you sure you want to reset all custom uploaded photos back to default industrial vector blueprints?";
  if (confirm(promptMsg)) {
    for (let k in memoryImages) delete memoryImages[k];
    for (let k in serverCatalogImages) delete serverCatalogImages[k];
    idbClear();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}

    // Reset server catalog images
    try {
      fetch('/api/catalog-images/reset', { method: 'POST' }).catch(() => {});
    } catch (e) {}

    renderCoolerCatalog();
    renderAllExtendedCatalogSlots();
    updatePhotoCountBadge();
  }
}

// Background sync & image restoration initialization
async function initCatalogImagePersistence() {
  // Step 1: Immediately restore from localStorage if available
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const localData = JSON.parse(raw);
      if (localData && typeof localData === "object") {
        for (const [k, v] of Object.entries(localData)) {
          if (v && typeof v === "string") {
            memoryImages[k] = v;
          }
        }
      }
    }
  } catch (e) {}

  // Step 2: Restore from IndexedDB (e.g. large images that exceeded 5MB localStorage)
  try {
    const idbData = await idbGetAll();
    if (idbData && typeof idbData === "object") {
      for (const [k, v] of Object.entries(idbData)) {
        if (v && typeof v === "string") {
          memoryImages[k] = v;
        }
      }
    }
  } catch (e) {}

  // Step 3: Load image mappings from the static JSON file
try {
  const res = await fetch('/catalog-images.json', { cache: 'no-store' });
  if (res.ok) {
    const data = await res.json();
    if (data && typeof data === 'object' && !Array.isArray(data)) {
      for (const [k, v] of Object.entries(data)) {
        if (typeof v === 'string') {
          serverCatalogImages[k] = v;
          if (!memoryImages[k]) {
            memoryImages[k] = v;
          }
        }
      }
    }
  }
} catch (err) {
  console.warn('Failed to load catalog image mappings:', err);
}

  // Step 4: Full re-render so all restored photos display instantly on screen
  renderCoolerCatalog();
  renderAllExtendedCatalogSlots();
  updatePhotoCountBadge();
}
window.initCatalogImagePersistence = initCatalogImagePersistence;

function updatePhotoCountBadge() {
  const countElem = document.getElementById("uploadedPhotoCount");
  if (!countElem) return;
  const data = getStoredImages();
  const count = Object.keys(data).length;
  countElem.textContent = `${count} Custom Photos Active`;
}

// Trigger native file upload dialog reliably
function triggerUpload(slotId) {
  let input = document.getElementById('fileInput_' + slotId);
  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.id = 'fileInput_' + slotId;
    input.accept = 'image/*';
    input.style.display = 'none';
    input.onchange = function() { handleImageFile(this, slotId); };
    document.body.appendChild(input);
  }
  input.value = '';
  input.click();
}
window.triggerUpload = triggerUpload;

// Map slot ID or category label to singular category display name (e.g. "Cooler Box", "EPP Foam Box", etc.)
function getCategorySingularName(slotId, label = '') {
  const isZh = typeof getCatalogLang === 'function' && getCatalogLang() === 'zh';
  if (!slotId) return 'Cooler Box';
  const idLower = String(slotId).toLowerCase().trim();

  // 0. Trolley Mobile Refrigerated Series
  if (idLower.includes('trolley')) {
    return 'Trolley Cooler Box';
  }

  // 1. All standard cooler box catalog slots (img-01 through img-32, img-10b, img-11, etc.)
  // Strictly Cooler Box category regardless of whatever packing materials are mentioned in the label text
  if (/^img-\d+/i.test(idLower) || idLower.includes('cooler') || idLower.includes('rotomold') || idLower.includes('box')) {
    return 'Cooler Box';
  }

  // 2. Specific prefix matching on slotId
  if (idLower.startsWith('img-epp') || idLower.includes('epp')) {
    return 'EPP Foam Box';
  }
  if (idLower.startsWith('img-pcm') || idLower.includes('pcm') || idLower.includes('rigid') || idLower.includes('brick')) {
    return 'Rigid PCM Brick';
  }
  if (idLower.startsWith('img-water') || idLower.includes('water-activated') || idLower.includes('cs24') || idLower.includes('cs12') || idLower.includes('cs4')) {
    return 'Water-Activated Cooling Sheet';
  }
  if (idLower.startsWith('img-instant') || idLower.includes('instant') || idLower.includes('sld')) {
    return 'Instant Cold Pack';
  }
  if (idLower.startsWith('img-selfabsorb') || idLower.includes('selfabsorb') || idLower.includes('zxd') || idLower.includes('scx')) {
    return 'Self-Absorbing Ice Pack';
  }
  if (idLower.startsWith('img-waterinject') || idLower.includes('waterinject') || idLower.includes('zsd') || idLower.includes('wip')) {
    return 'Water-Injection Ice Pack';
  }
  if (idLower.startsWith('img-gel') || idLower.includes('gel') || idLower.includes('xld') || idLower.includes('nwip') || idLower.includes('zhb')) {
    return 'Gel Ice Pack';
  }

  // 3. Fallback: inspect label only with precise category keywords (not general descriptive words)
  const labelLower = String(label).toLowerCase();
  if (labelLower.includes('epp foam') || labelLower.includes('epp-')) {
    return 'EPP Foam Box';
  }
  if (labelLower.includes('rigid pcm') || labelLower.includes('pcm enthalpy') || labelLower.includes('pcm brick')) {
    return 'Rigid PCM Brick';
  }
  if (labelLower.includes('water-activated') || labelLower.includes('cooling sheet')) {
    return 'Water-Activated Cooling Sheet';
  }
  if (labelLower.includes('instant cold pack')) {
    return 'Instant Cold Pack';
  }
  if (labelLower.includes('gel ice pack') || labelLower.includes('sap multi-layer')) {
    return 'Gel Ice Pack';
  }

  // Default fallback for any remaining catalog item
  return 'Cooler Box';
}
window.getCategorySingularName = getCategorySingularName;

// Generate SVG vector silhouette placeholder for each slot with adaptive styling & height
function getVectorPlaceholder(slotId, label, isLarge = false) {
  const stored = getStoredImages()[slotId];
  // Increased height: Large master slot = 340px-420px; Medium spec/accessory/product slot = 270px-300px
  const heightClass = isLarge ? "h-80 sm:h-[420px] min-h-[320px]" : "h-64 sm:h-[290px] min-h-[250px]";
  const categoryTitle = getCategorySingularName(slotId, label);

  if (stored) {
    return `
      <div class="relative w-full ${heightClass} group overflow-hidden rounded-2xl bg-[#050A14] border border-cyan-500/40 shadow-inner flex items-center justify-center p-3 sm:p-4">
        <!-- Auto-scaled, horizontally & vertically centered, maximizing container cleanly -->
        <img src="${stored}" alt="${label}" class="max-w-full max-h-full w-auto h-auto object-contain mx-auto my-auto block transition-transform duration-300 group-hover:scale-[1.02]" onerror="this.onerror=null; console.warn('Image slot load fallback:', '${slotId}'); this.src='/assets/catalog-images/5.custom-cold-chain-rigid-series-family.jpg';" />
        
        <!-- Slot Badge Overlay (Singular Category Name) -->
        <div class="absolute top-3 left-3 z-10 text-[10px] font-sans font-bold text-cyan-300 tracking-wide px-2.5 py-0.5 rounded-md bg-slate-950/85 border border-cyan-500/40 backdrop-blur-sm shadow">
          ${categoryTitle}
        </div>

        <!-- Management Overlay on Hover -->
        <div class="absolute inset-0 bg-slate-950/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 text-center backdrop-blur-[2px]">
          <div class="flex items-center gap-2">
            <button type="button" onclick="triggerUpload('${slotId}')" class="cursor-pointer text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-lg shadow-md transition flex items-center gap-1">
              <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
              <span>Replace Photo</span>
            </button>
            <button type="button" onclick="removeStoredImage('${slotId}')" class="cursor-pointer text-xs font-semibold bg-slate-800 hover:bg-red-600/80 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 transition">
              Reset
            </button>
          </div>
        </div>
        <input type="file" id="fileInput_${slotId}" accept="image/*" class="sr-only" style="display:none" onchange="handleImageFile(this, '${slotId}')" />
      </div>
    `;
  }

  // Determine vector icon based on slotId
  const idLower = slotId.toLowerCase();
  let iconSvg = '';
  
  if (idLower.includes('epp')) {
    // EPP foam box crate icon
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect x="14" y="24" width="72" height="48" rx="6" fill="#0A1E2B" stroke="currentColor" stroke-width="2.5"/>
        <path d="M12 24 C12 18, 18 14, 26 14 H74 C82 14, 88 18, 88 24 Z" fill="#082838" stroke="currentColor" stroke-width="2.5"/>
        <line x1="12" y1="24" x2="88" y2="24" stroke="currentColor" stroke-width="3"/>
        <circle cx="28" cy="38" r="2.5" fill="#34D399" opacity="0.7"/>
        <circle cx="50" cy="38" r="2.5" fill="#34D399" opacity="0.7"/>
        <circle cx="72" cy="38" r="2.5" fill="#34D399" opacity="0.7"/>
        <circle cx="39" cy="52" r="2.5" fill="#34D399" opacity="0.7"/>
        <circle cx="61" cy="52" r="2.5" fill="#34D399" opacity="0.7"/>
        <path d="M36 60 H64" stroke="#34D399" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
      </svg>
    `;
  } else if (idLower.includes('pcm') || idLower.includes('brick') || idLower.includes('xlh')) {
    // Rigid PCM brick icon with internal cooling ribs
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect x="18" y="16" width="64" height="48" rx="5" fill="#0E223D" stroke="currentColor" stroke-width="2.5"/>
        <line x1="32" y1="24" x2="32" y2="56" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <line x1="44" y1="24" x2="44" y2="56" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <line x1="56" y1="24" x2="56" y2="56" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <line x1="68" y1="24" x2="68" y2="56" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <rect x="42" y="10" width="16" height="7" rx="2" fill="#38BDF8"/>
      </svg>
    `;
  } else if (idLower.includes('waterinject') || idLower.includes('zsd') || idLower.includes('wip')) {
    // Water-injection self-sealing pouch with one-way inlet funnel valve
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect x="22" y="20" width="56" height="48" rx="5" fill="#0C2038" stroke="currentColor" stroke-width="2.5"/>
        <line x1="22" y1="26" x2="78" y2="26" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2 2"/>
        <line x1="22" y1="62" x2="78" y2="62" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2 2"/>
        <path d="M42 20 V10 H58 V20" stroke="#38BDF8" stroke-width="2.5" fill="#0E2D52"/>
        <path d="M50 12 V18 M46 15 L50 18 L54 15" stroke="#34D399" stroke-width="2" stroke-linecap="round"/>
        <circle cx="50" cy="44" r="10" fill="#0284C7" opacity="0.6"/>
        <path d="M50 38 V50 M44 44 H56" stroke="#E0F2FE" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
  } else if (idLower.includes('selfabsorb') || idLower.includes('zxd') || idLower.includes('scx') || idLower.includes('water') || idLower.includes('sheet') || idLower.includes('cs')) {
    // Water-activated cooling sheet grid
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect x="15" y="14" width="70" height="52" rx="4" fill="#072033" stroke="currentColor" stroke-width="2"/>
        <rect x="20" y="19" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="36" y="19" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="52" y="19" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="68" y="19" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="20" y="34" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="36" y="34" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="52" y="34" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="68" y="34" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="20" y="49" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="36" y="49" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="52" y="49" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
        <rect x="68" y="49" width="12" height="12" rx="2" fill="#0284C7" stroke="#38BDF8"/>
      </svg>
    `;
  } else if (idLower.includes('instant') || idLower.includes('sld') || idLower.includes('icp')) {
    // Instant cold pack pouch with crush bubble
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <path d="M22 14 H78 L72 66 H28 Z" fill="#0F1C36" stroke="currentColor" stroke-width="2.5"/>
        <line x1="22" y1="18" x2="78" y2="18" stroke="#38BDF8" stroke-width="2"/>
        <line x1="28" y1="62" x2="72" y2="62" stroke="#38BDF8" stroke-width="2"/>
        <circle cx="50" cy="40" r="14" fill="#0284C7" stroke="#67E8F9" stroke-dasharray="3 3"/>
        <path d="M46 36 L54 44 M54 36 L46 44" stroke="#FFFFFF" stroke-width="2"/>
      </svg>
    `;
  } else if (idLower.includes('gel') || idLower.includes('xld') || idLower.includes('nwip') || idLower.includes('zhb') || idLower.includes('gp')) {
    // Flexible gel ice pack pouch
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect x="20" y="16" width="60" height="48" rx="6" fill="#0C233B" stroke="currentColor" stroke-width="2.5"/>
        <line x1="20" y1="22" x2="80" y2="22" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2 2"/>
        <line x1="20" y1="58" x2="80" y2="58" stroke="#38BDF8" stroke-width="2" stroke-dasharray="2 2"/>
        <circle cx="50" cy="40" r="9" fill="#0284C7" opacity="0.6"/>
        <path d="M50 34 V46 M44 40 H56 M46 36 L54 44 M54 36 L46 44" stroke="#E0F2FE" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `;
  } else if (idLower.includes('trolley')) {
    // Trolley mobile cooler with telescopic pull rod and all-terrain wheels
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <!-- Telescopic Handle -->
        <path d="M42 6 V22 M58 6 V22 M38 6 H62" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Main Cooler Body -->
        <rect x="20" y="22" width="60" height="42" rx="6" fill="#0C2038" stroke="currentColor" stroke-width="2.5"/>
        <!-- Cooler Lid -->
        <rect x="18" y="20" width="64" height="9" rx="3" fill="#0E2D52" stroke="currentColor" stroke-width="2"/>
        <rect x="46" y="26" width="8" height="6" rx="1.5" fill="#38BDF8"/>
        <!-- All-Terrain Wheels -->
        <circle cx="28" cy="65" r="5.5" fill="#1E293B" stroke="#38BDF8" stroke-width="2.5"/>
        <circle cx="28" cy="65" r="2" fill="#38BDF8"/>
        <circle cx="72" cy="65" r="5.5" fill="#1E293B" stroke="#38BDF8" stroke-width="2.5"/>
        <circle cx="72" cy="65" r="2" fill="#38BDF8"/>
      </svg>
    `;
  } else {
    // Default Cooler box
    iconSvg = `
      <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <rect x="15" y="24" width="70" height="48" rx="8" fill="url(#boxGrad-${slotId})" stroke="currentColor" stroke-width="2.5"/>
        <path d="M12 24 C12 18, 20 14, 28 14 H72 C80 14, 88 18, 88 24 Z" fill="#0A1629" stroke="currentColor" stroke-width="2.5"/>
        <line x1="12" y1="24" x2="88" y2="24" stroke="currentColor" stroke-width="3"/>
        <rect x="30" y="22" width="8" height="12" rx="2" fill="#38BDF8"/>
        <rect x="62" y="22" width="8" height="12" rx="2" fill="#38BDF8"/>
        <path d="M40 14 V7 C40 4, 60 4, 60 7 V14" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
        <defs>
          <linearGradient id="boxGrad-${slotId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0F243E"/>
            <stop offset="100%" stop-color="#08101E"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  }

  // High-tech Apple-style industrial vector graphic with strictly fixed dimensions
  return `
    <div class="relative w-full ${heightClass} rounded-2xl bg-gradient-to-b from-[#0C1527] via-[#080E1A] to-[#050912] border border-cyan-500/20 p-4 sm:p-5 flex flex-col items-center justify-center text-center overflow-hidden group hover:border-cyan-400/50 transition">
      <!-- Grid backdrop -->
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      <!-- Tech Product Graphic -->
      <div class="relative z-10 w-24 sm:w-28 h-18 sm:h-20 mb-2 text-cyan-400/70 group-hover:text-cyan-300 transition-transform group-hover:scale-105 flex items-center justify-center">
        ${iconSvg}
      </div>

      <!-- Slot Tag (Singular Category Name) -->
      <div class="relative z-10 text-[11px] font-sans font-bold text-cyan-400 tracking-wide px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-500/30">
        ${categoryTitle}
      </div>
      <p class="relative z-10 text-xs text-slate-400 max-w-[280px] mt-1.5 line-clamp-2">${label}</p>
      
      <!-- Upload trigger -->
      <button type="button" onclick="triggerUpload('${slotId}')" class="relative z-10 mt-3 inline-flex items-center gap-1.5 rounded-full bg-slate-800/90 hover:bg-blue-600 px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-md border border-slate-700 hover:border-blue-400 cursor-pointer transition">
        <svg class="h-3.5 w-3.5 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
        <span>Upload Photo (Auto-fit &amp; Center)</span>
      </button>
      <input type="file" id="fileInput_${slotId}" accept="image/*" class="sr-only" style="display:none" onchange="handleImageFile(this, '${slotId}')" />
    </div>
  `;
}

// Build smart inquiry link that redirects to Inquiry Now with auto-populated parameters
function getInquiryHref(series, model) {
  const params = new URLSearchParams({
    inquiry: '1',
    category: series.categoryName ? series.categoryName.toLowerCase().replace(/\s+/g, '-') : 'cold-chain',
    series: series.seriesTitle || '',
    model: model.name || '',
    capacity: model.capacity || model.volume || model.weight || '',
    extDim: model.extDim || model.dimensions || '',
    intDim: model.intDim || '',
    weight: model.weight || model.tare || '',
    hold: model.hold || model.feature || model.temp || '',
    material: model.material || ''
  });
  return `/?${params.toString()}#inquiry-form`;
}

// Handle client-side file upload with automatic Canvas downsampling & high-speed display
function handleImageFile(input, slotId) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      const rawData = e.target.result;
      const img = new Image();
      img.onload = function() {
        try {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 1000;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;
          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round(height * (MAX_WIDTH / width));
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round(width * (MAX_HEIGHT / height));
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          const compressed = canvas.toDataURL("image/jpeg", 0.82);
          saveStoredImage(slotId, compressed);
        } catch (err) {
          saveStoredImage(slotId, rawData);
        }
        renderCoolerCatalog();
        renderAllExtendedCatalogSlots();
        updatePhotoCountBadge();
        const toast = document.getElementById("catalogToast");
        if (toast) {
          const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";
          toast.innerHTML = `<span class="inline-block h-2 w-2 rounded-full bg-emerald-400"></span> ${'Photo permanently saved to server & storage'}: <strong>${getCategorySingularName(slotId)}</strong>`;
          toast.classList.remove("translate-y-20", "opacity-0");
          setTimeout(() => toast.classList.add("translate-y-20", "opacity-0"), 3500);
        }
      };
      img.onerror = function() {
        saveStoredImage(slotId, rawData);
        renderCoolerCatalog();
        renderAllExtendedCatalogSlots();
        updatePhotoCountBadge();
      };
      img.src = rawData;
    };
    reader.readAsDataURL(file);
    input.value = '';
  }
}

// Series Metadata Dictionary for Cooler Box Catalog (English-only)
const SERIES_ZH_META = {};

// ADVANTAGES_ZH removed for English-only export

// Render clickable badge link for a specific model in Master Reference Table and Selection Matrix
function renderModelBadgeLink(modelName, elementId, seriesId) {
  const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";
  const title = `Click to view ${modelName} specs & photo`;
  return `<a href="#${elementId}" onclick="jumpToCatalogProduct('${elementId}', 'cooler-box-catalog'); if (event && event.preventDefault) event.preventDefault();" title="${title}" class="inline-flex items-center gap-1 font-mono font-bold text-xs text-cyan-300 hover:text-white bg-slate-900/90 hover:bg-cyan-950 border border-slate-700/80 hover:border-cyan-400 px-2 py-0.5 rounded-md transition shadow-xs mr-1.5 my-0.5 cursor-pointer group">
    <span>${modelName}</span>
    <svg class="h-2.5 w-2.5 text-cyan-400/70 group-hover:text-cyan-300 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
  </a>`;
}

// Helper to convert comma-separated models string into clickable badge links
function renderMatrixModels(modelsStr) {
  if (!modelsStr) return "";
  const known = [
    { text: "HP-320L Dry Ice Cooler Box", id: "product-model-hp-320l", label: "HP-320L" },
    { text: "304 Stainless-Steel 5-Compartment Meal Tray", id: "product-model-304-five-compartment-meal-tray", label: "304 Meal Tray" },
    { text: "HP-110L", id: "product-model-hp-110l--stackable-", label: "HP-110L" },
    { text: "HP-1000L", id: "product-model-hp-1000l", label: "HP-1000L" },
    { text: "HP-800L", id: "product-model-hp-800l", label: "HP-800L" },
    { text: "HP-660L", id: "product-model-hp-660l", label: "HP-660L" },
    { text: "HP-630L", id: "product-model-hp-630l", label: "HP-630L" },
    { text: "HP-300L", id: "product-model-hp-300l", label: "HP-300L" },
    { text: "HP-100L", id: "product-model-hp-100l", label: "HP-100L" },
    { text: "HP-90L", id: "product-model-hp-90l", label: "HP-90L" },
    { text: "HP-88L", id: "product-model-hp-88l", label: "HP-88L" },
    { text: "HP-80L", id: "product-model-hp-80l", label: "HP-80L" },
    { text: "HP-66L", id: "product-model-hp-66l", label: "HP-66L" },
    { text: "HP-65L", id: "product-model-hp-65l", label: "HP-65L" },
    { text: "HP-52L", id: "product-model-hp-52l", label: "HP-52L" },
    { text: "HP-50L", id: "product-model-hp-50l", label: "HP-50L" },
    { text: "HP-35L", id: "product-model-hp-35l", label: "HP-35L" },
    { text: "HP-33L", id: "product-model-hp-33l", label: "HP-33L" },
    { text: "HP-32L", id: "product-model-hp-32l", label: "HP-32L" },
    { text: "HP-30L", id: "product-model-hp-30l", label: "HP-30L" },
    { text: "HP-28L", id: "product-model-hp-28l", label: "HP-28L" },
    { text: "HP-22L", id: "product-model-hp-22l", label: "HP-22L" },
    { text: "HP-20L", id: "product-model-hp-20l", label: "HP-20L" },
    { text: "HP-17L", id: "product-model-hp-17l", label: "HP-17L" },
    { text: "HP-16L", id: "product-model-hp-16l--stainless-", label: "HP-16L" },
    { text: "HP-14L", id: "product-model-hp-14l", label: "HP-14L" },
    { text: "HP-12L", id: "product-model-hp-12l", label: "HP-12L" },
    { text: "HP-9L", id: "product-model-hp-9l", label: "HP-9L" },
    { text: "HP-8L", id: "product-model-hp-8l", label: "HP-8L" },
    { text: "HP-6L", id: "product-model-hp-6l", label: "HP-6L" },
    { text: "HWBD-10", id: "product-model-hwbd-10", label: "HWBD-10" }
  ];

  let result = modelsStr;
  known.forEach(k => {
    const re = new RegExp(`\\b${k.text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'g');
    result = result.replace(re, `###LINK_${k.id}###`);
  });
  known.forEach(k => {
    const placeholder = `###LINK_${k.id}###`;
    while (result.includes(placeholder)) {
      result = result.replace(placeholder, renderModelBadgeLink(k.label || k.text, k.id, ''));
    }
  });
  return result;
}

// Render Master Cooler Box Catalog
function renderCoolerCatalog(filterId = "all", searchQuery = "") {
  const container = document.getElementById("coolerCatalogMount");
  if (!container) return;

  const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";

  // Mount Hero Image Slot (IMAGE 01)
  const heroContainer = document.getElementById("heroImageSlotContainer");
  if (heroContainer) {
    heroContainer.innerHTML = getVectorPlaceholder("img-01", "IMAGE 01: Hero cooler box presentation on studio background", true);
  }

  const q = searchQuery.toLowerCase().trim();
  const seriesFiltered = COOLER_CATALOG_DATA.seriesList.filter(s => {
    if (filterId !== "all" && s.id !== filterId) return false;
    if (!q) return true;
    const zhMeta = SERIES_ZH_META[s.id] || {};
    const matchSeries = s.seriesTitle.toLowerCase().includes(q) || 
      s.tagline.toLowerCase().includes(q) || 
      s.categoryName.toLowerCase().includes(q) ||
      (zhMeta.categoryName && zhMeta.categoryName.toLowerCase().includes(q)) ||
      (zhMeta.seriesTitle && zhMeta.seriesTitle.toLowerCase().includes(q));
    const matchModels = s.models.some(m => m.name.toLowerCase().includes(q) || (m.app && m.app.toLowerCase().includes(q)));
    return matchSeries || matchModels;
  });

  const advantagesList = COOLER_CATALOG_DATA.advantages;

  let html = `
    <!-- Top Catalog Bar: Stats + Search + Image Manager -->
    <div class="mb-10 rounded-2xl border border-slate-800 bg-gradient-to-r from-[#0B1323] via-[#080E1A] to-[#0A101C] p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2">
          <span class="rounded-full bg-cyan-500/20 border border-cyan-400/40 px-3 py-0.5 text-xs font-bold text-cyan-300">
            ${"33+ Production Models"}
          </span>
          <span id="uploadedPhotoCount" class="text-xs font-mono text-slate-400">
            ${"0 Custom Photos Active"}
          </span>
        </div>
        <div class="text-sm font-semibold text-white mt-1">
          ${"Organized by European &amp; American Cold-Chain Procurement Standards"}
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
        <!-- Live Model Search -->
        <div class="relative flex-1 md:w-64">
          <input 
            type="text" 
            id="coolerSearchInput"
            value="${searchQuery}"
            placeholder="${'Search HP-35L, UN2814, 660L...'}"
            oninput="handleCoolerSearch(this.value)"
            class="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2 pl-9 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
          />
          <svg class="absolute left-3 top-2.5 h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>

        <!-- Reset photos -->
        <button onclick="clearAllUploadedImages()" class="rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition" title="${'Reset custom uploaded images'}">
          ${"↺ Reset Photos"}
        </button>
      </div>
    </div>

    <!-- Section 01 & 02: Core Product Advantages & Gallery Preview -->
    <div class="mb-14 rounded-3xl border border-slate-800 bg-[#080D18] p-6 sm:p-8 shadow-xl">
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
            ${"Section 01 · Manufacturing Advantage"}
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-white mt-1">
            ${"Reliable Temperature Protection Across the Cold Chain"}
          </h3>
          <p class="text-xs text-slate-400 mt-1 max-w-2xl">
            ${"Practical cold-chain requirements: thermal protection, structural durability, hygiene, easy cleaning, secure latching, transport efficiency, and repeated professional use."}
          </p>
        </div>
      </div>

      <!-- 7 Core Advantages Cards -->
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        ${advantagesList.map(adv => `
          <div class="rounded-2xl border border-slate-800/80 bg-[#0B1220] p-4">
            <div class="flex items-center gap-2 text-cyan-400 mb-1.5">
              <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <h4 class="text-xs font-bold text-white">${adv.title}</h4>
            </div>
            <p class="text-[11px] text-slate-400 leading-relaxed">${adv.desc}</p>
          </div>
        `).join("")}
      </div>

    </div>

    <!-- Section 02: Master Portfolio Table at a Glance -->
    <div class="mb-14 rounded-3xl border border-slate-800 bg-[#080D18] p-6 sm:p-8 shadow-xl overflow-hidden">
      <div class="border-b border-slate-800 pb-4 mb-4">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400">
          ${"Section 02 · Master Reference Table"}
        </span>
        <h3 class="text-xl font-black text-white mt-1">
          ${"Product Portfolio at a Glance"}
        </h3>
        <p class="text-xs text-slate-400 mt-1">
          ${"Click any model number to jump directly to its complete specifications, photos, and thermal holding metrics:"}
        </p>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-900 text-cyan-300 uppercase font-bold border-b border-slate-800">
            <tr>
              <th class="p-3.5">${"Application Category"}</th>
              <th class="p-3.5">${"Product Series"}</th>
              <th class="p-3.5">${"Production Models (Click to Jump)"}</th>
              <th class="p-3.5 text-right">${"Quick Jump"}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80 text-slate-300">
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Medical, Pharmaceutical &amp; Vaccine Transport"}</td>
              <td class="p-3.5 text-cyan-400">${"Medical &amp; Vaccine Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HP-6L", "product-model-hp-6l", "medical")}
                  ${renderModelBadgeLink("HP-12L", "product-model-hp-12l", "medical")}
                  ${renderModelBadgeLink("HP-17L", "product-model-hp-17l", "medical")}
                  ${renderModelBadgeLink("HP-20L", "product-model-hp-20l", "medical")}
                  ${renderModelBadgeLink("HP-33L", "product-model-hp-33l", "medical")}
                  ${renderModelBadgeLink("HP-35L", "product-model-hp-35l", "medical")}
                  ${renderModelBadgeLink("HP-50L", "product-model-hp-50l", "medical")}
                  ${renderModelBadgeLink("HP-65L", "product-model-hp-65l", "medical")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-medical" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Seafood &amp; Fresh-Product Transport"}</td>
              <td class="p-3.5 text-cyan-400">${"Marine Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HP-300L", "product-model-hp-300l", "marine")}
                  ${renderModelBadgeLink("HP-630L", "product-model-hp-630l", "marine")}
                  ${renderModelBadgeLink("HP-660L", "product-model-hp-660l", "marine")}
                  ${renderModelBadgeLink("HP-800L", "product-model-hp-800l", "marine")}
                  ${renderModelBadgeLink("HP-1000L", "product-model-hp-1000l", "marine")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-marine" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Commercial Food Delivery &amp; Distribution"}</td>
              <td class="p-3.5 text-cyan-400">${"Commercial Fresh-Food Delivery Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HP-8L", "product-model-hp-8l", "delivery")}
                  ${renderModelBadgeLink("HP-14L", "product-model-hp-14l", "delivery")}
                  ${renderModelBadgeLink("HP-28L", "product-model-hp-28l", "delivery")}
                  ${renderModelBadgeLink("HP-66L", "product-model-hp-66l", "delivery")}
                  ${renderModelBadgeLink("HP-80L", "product-model-hp-80l", "delivery")}
                  ${renderModelBadgeLink("HP-88L", "product-model-hp-88l", "delivery")}
                  ${renderModelBadgeLink("HP-100L", "product-model-hp-100l", "delivery")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-delivery" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Integrated-Molded Stackable Cooler Boxes"}</td>
              <td class="p-3.5 text-cyan-400">${"Stackable Integrated-Molded Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HP-65L", "product-model-hp-65l--stackable-", "stackable")}
                  ${renderModelBadgeLink("HP-110L", "product-model-hp-110l--stackable-", "stackable")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-stackable" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Hotel &amp; Restaurant Foodservice"}</td>
              <td class="p-3.5 text-cyan-400">${"Hotel &amp; Restaurant Insulated Container Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HP-16L", "product-model-hp-16l--stainless-", "hotel")}
                  ${renderModelBadgeLink("HP-20L", "product-model-hp-20l--stainless-", "hotel")}
                  ${renderModelBadgeLink("HP-30L", "product-model-hp-30l--stainless-", "hotel")}
                  ${renderModelBadgeLink("HP-50L", "product-model-hp-50l--stainless-", "hotel")}
                  ${renderModelBadgeLink("HP-90L", "product-model-hp-90l", "hotel")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-hotel" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Outdoor Catering, Beverages &amp; Food Storage"}</td>
              <td class="p-3.5 text-cyan-400">${"Outdoor Catering Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HP-9L", "product-model-hp-9l", "outdoor")}
                  ${renderModelBadgeLink("HP-22L", "product-model-hp-22l", "outdoor")}
                  ${renderModelBadgeLink("HP-32L", "product-model-hp-32l", "outdoor")}
                  ${renderModelBadgeLink("HP-52L", "product-model-hp-52l", "outdoor")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-outdoor" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Constant-Temperature Precision Cooler Bag"}</td>
              <td class="p-3.5 text-cyan-400">${"Cooler Bag Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HWBD-10", "product-model-hwbd-10", "cooler-bag")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-cooler-bag" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
            <tr class="hover:bg-slate-900/50">
              <td class="p-3.5 font-semibold text-white">${"Dry-Ice &amp; Specialty Products"}</td>
              <td class="p-3.5 text-cyan-400">${"Specialty Series"}</td>
              <td class="p-3.5">
                <div class="flex flex-wrap items-center">
                  ${renderModelBadgeLink("HP-320L (Dry Ice)", "product-model-hp-320l", "specialty")}
                  ${renderModelBadgeLink("304 Heated Meal Tray", "product-model-304-five-compartment-meal-tray", "specialty")}
                </div>
              </td>
              <td class="p-3.5 text-right"><a href="#series-specialty" class="text-cyan-400 hover:underline font-bold">${"View Series ↓"}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Application Category Filter Pills -->
    <div class="no-print flex overflow-x-auto pb-4 gap-2 text-xs">
      <button onclick="setCoolerFilter('all')" class="filter-pill ${filterId === 'all' ? 'active-pill' : 'inactive-pill'}">
        ${"All 8 Applications (33+ Models)"}
      </button>
      ${COOLER_CATALOG_DATA.seriesList.map(s => {
        const zhMeta = SERIES_ZH_META[s.id] || {};
        const catName = isZh && zhMeta.categoryName ? zhMeta.categoryName : s.categoryName;
        return `
          <button onclick="setCoolerFilter('${s.id}')" class="filter-pill ${filterId === s.id ? 'active-pill' : 'inactive-pill'}">
            ${catName}
          </button>
        `;
      }).join("")}
    </div>
  `;

  // Render Series Cards
  if (seriesFiltered.length === 0) {
    html += `
      <div class="rounded-2xl border border-slate-800 bg-[#0A101C] p-12 text-center text-slate-400">
        <p class="text-base font-bold text-white">${`No cooler box model matched "${searchQuery}"`}</p>
        <p class="text-xs mt-1">${"Try searching by model number (e.g., HP-12L, HP-660L) or application (seafood, vaccine, delivery)."}</p>
        <button onclick="setCoolerFilter('all'); document.getElementById('coolerSearchInput').value='';" class="mt-4 rounded-xl bg-cyan-600 px-4 py-2 text-xs font-bold text-white hover:bg-cyan-500">
          ${"Clear Search Filter"}
        </button>
      </div>
    `;
  } else {
    seriesFiltered.forEach((series, sIdx) => {
      const zhMeta = SERIES_ZH_META[series.id] || {};
      const sCatName = isZh && zhMeta.categoryName ? zhMeta.categoryName : series.categoryName;
      const sTitle = isZh && zhMeta.seriesTitle ? zhMeta.seriesTitle : series.seriesTitle;
      const sTagline = isZh && zhMeta.tagline ? zhMeta.tagline : series.tagline;
      const sDesc = isZh && zhMeta.desc ? zhMeta.desc : series.desc;

      html += `
        <article id="series-${series.id}" class="mb-14 rounded-3xl border border-slate-800/90 bg-[#080D18] p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          <!-- Category Header -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div>
              <div class="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-3.5 py-1 text-xs font-bold text-cyan-300">
                <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Category 0${sIdx + 1} · ${sCatName}</span>
              </div>
              <h3 class="mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-white">${sTitle}</h3>
              <p class="text-xs sm:text-sm text-cyan-400/90 font-medium mt-1">${sTagline}</p>
              <p class="text-xs text-slate-400 mt-2 max-w-3xl leading-relaxed">${sDesc}</p>
            </div>

            <div class="shrink-0 flex flex-wrap items-center gap-2.5">
              <span class="rounded-xl bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs font-mono font-bold text-slate-200">
                ${series.models.length} ${"Validated Models"}
              </span>
              <a href="/request-quote?category=Cooler+Boxes&series=${encodeURIComponent(series.seriesTitle)}" class="rounded-xl border border-slate-700 bg-slate-900/90 hover:border-cyan-400 hover:text-white px-3.5 py-1.5 text-xs font-bold text-slate-300 transition flex items-center gap-1.5">
                <svg class="h-3.5 w-3.5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                <span>${"Request PI Quote"}</span>
              </a>
              <button onclick="openSpecModal('${series.id}')" class="rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-1.5 text-xs font-bold text-white shadow-md transition flex items-center gap-1.5">
                <span>${"View Full Spec Table"}</span>
                <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <!-- Hero Image Slot for this Category -->
          <div class="mb-8">
            ${getVectorPlaceholder(series.heroSlot, series.heroSlotLabel, true)}
          </div>

          <!-- Models Grid -->
          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            ${series.models.map(m => `
              <div id="product-model-${m.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}" data-model-name="${m.name}" data-model-cap="${m.capacity}" class="rounded-2xl border border-slate-800 bg-[#0B1220] p-4 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-[#0E1729] transition group shadow-sm" style="scroll-margin-top: 100px;">
                <div>
                  <!-- Model Image Placeholder -->
                  <div class="mb-3 overflow-hidden rounded-xl bg-slate-950">
                    ${getVectorPlaceholder(m.imgSlot, m.slotLabel, false)}
                  </div>

                  <!-- Model Info -->
                  <div class="flex items-center justify-between gap-2 mb-1.5">
                    <span class="text-base font-black text-white group-hover:text-cyan-300 transition">${m.name}</span>
                    <span class="rounded-full bg-cyan-950 border border-cyan-500/30 px-2 py-0.5 text-[10px] font-bold text-cyan-300">${m.capacity}</span>
                  </div>

                  <p class="text-[11px] text-slate-400 mb-3 line-clamp-2 leading-relaxed">${m.app}</p>

                  <!-- Technical Spec Badges -->
                  <div class="space-y-1 text-[11px] border-t border-slate-800/80 pt-2.5">
                    <div class="flex justify-between text-slate-400">
                      <span>${"External Dim:"}</span>
                      <strong class="text-slate-200 font-mono">${m.extDim}</strong>
                    </div>
                    ${m.intDim ? `
                    <div class="flex justify-between text-slate-400">
                      <span>${"Internal Dim:"}</span>
                      <strong class="text-slate-200 font-mono">${m.intDim}</strong>
                    </div>` : ''}
                    <div class="flex justify-between text-slate-400">
                      <span>${"Net Weight:"}</span>
                      <strong class="text-slate-200 font-mono">${m.weight}</strong>
                    </div>
                    ${m.hold ? `
                    <div class="flex justify-between text-slate-400">
                      <span>${"Holding Time:"}</span>
                      <strong class="text-emerald-400 font-mono">${m.hold}</strong>
                    </div>` : ''}
                  </div>
                </div>

                <!-- Action Buttons: Inquiry Now + Optional PI -->
                <div class="mt-4 pt-3 border-t border-slate-800 flex flex-col gap-2">
                  <a href="${getInquiryHref(series, m)}" class="w-full text-center rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 hover:brightness-110 py-2 text-xs font-bold text-white shadow-md transition flex items-center justify-center gap-1.5">
                    <svg class="h-3.5 w-3.5 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span>${"Inquiry Now"}</span>
                  </a>
                  <div class="flex items-center justify-between px-1 text-[11px] text-slate-400">
                    <span class="text-slate-400">${"MOQ 50-100 pcs"}</span>
                    <a href="/request-quote?model=${encodeURIComponent(m.name)}" class="text-slate-400 hover:text-cyan-300 hover:underline transition">
                      ${"Or Request Proforma Invoice (PI) →"}
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Extra Detail / Loading Views Slots -->
          ${series.detailSlots ? `
            <div class="mt-8 pt-6 border-t border-slate-800">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                ${"Interior &amp; Operational Configurations"}
              </h4>
              <div class="grid gap-4 sm:grid-cols-2">
                ${series.detailSlots.map(ds => `
                  <div>${getVectorPlaceholder(ds.slot, ds.label, false)}</div>
                `).join("")}
              </div>
            </div>
          ` : ''}

          <!-- Medical Tech Note (if applicable) -->
          ${series.techNote ? `
            <div class="mt-6 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
              <svg class="h-4 w-4 text-amber-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span>${series.techNote}</span>
            </div>
          ` : ''}

        </article>
      `;
    });
  }

  container.innerHTML = html;
  updatePhotoCountBadge();
}

// Handle real-time search input
let searchDebounceTimer = null;
function handleCoolerSearch(val) {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    const activePill = document.querySelector(".filter-pill.active-pill");
    const filterId = activePill ? activePill.getAttribute("data-filter") || "all" : "all";
    renderCoolerCatalog(filterId, val);
  }, 250);
}

function setCoolerFilter(filterId) {
  const searchInput = document.getElementById("coolerSearchInput");
  const q = searchInput ? searchInput.value : "";
  renderCoolerCatalog(filterId, q);
}

// Modal for Full Specification Table of a Series
function openSpecModal(seriesId) {
  const series = COOLER_CATALOG_DATA.seriesList.find(s => s.id === seriesId);
  if (!series) return;

  const modal = document.getElementById("coolerSpecModal");
  const modalContent = document.getElementById("coolerSpecModalContent");
  if (!modal || !modalContent) return;

  const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";
  const zhMeta = SERIES_ZH_META[series.id] || {};
  const sCatName = isZh && zhMeta.categoryName ? zhMeta.categoryName : series.categoryName;
  const sTitle = isZh && zhMeta.seriesTitle ? zhMeta.seriesTitle : series.seriesTitle;

  let tableRows = series.models.map(m => `
    <tr class="hover:bg-slate-800/40 border-b border-slate-800">
      <td class="p-3 font-bold text-white font-mono">${m.name}</td>
      <td class="p-3 text-cyan-400 font-semibold">${m.capacity}</td>
      <td class="p-3 text-slate-300 text-xs">${m.app}</td>
      <td class="p-3 text-slate-400 font-mono text-xs">${m.extDim}</td>
      <td class="p-3 text-slate-400 font-mono text-xs">${m.intDim || '—'}</td>
      <td class="p-3 text-slate-400 font-mono text-xs">${m.weight}</td>
      <td class="p-3 text-emerald-400 font-mono text-xs">${m.hold || m.temp || ('Standard')}</td>
      <td class="p-3 text-right">
        <a href="${getInquiryHref(series, m)}" class="inline-flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-500 px-3 py-1.5 text-xs font-bold text-white shadow transition">
          <svg class="h-3 w-3 text-cyan-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <span>${'Inquiry Now'}</span>
        </a>
      </td>
    </tr>
  `).join("");

  modalContent.innerHTML = `
    <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
      <div>
        <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">${sCatName}</span>
        <h3 class="text-lg font-black text-white">${sTitle} — ${'Technical Specification Sheet'}</h3>
      </div>
      <button onclick="closeSpecModal()" class="rounded-lg bg-slate-800 p-2 text-slate-400 hover:text-white transition">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="overflow-x-auto max-h-[65vh]">
      <table class="w-full text-left text-xs">
        <thead class="bg-slate-900 text-cyan-300 uppercase font-bold text-[11px] sticky top-0">
          <tr>
            <th class="p-3">${'Model'}</th>
            <th class="p-3">${'Nominal Capacity'}</th>
            <th class="p-3">${'Recommended Application'}</th>
            <th class="p-3">${'External Dim'}</th>
            <th class="p-3">${'Internal Dim'}</th>
            <th class="p-3">${'Net Weight'}</th>
            <th class="p-3">${'Thermal Spec'}</th>
            <th class="p-3 text-right">${'Action'}</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    </div>

    <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
      <span>${'Coldpackpro Factory QA · Tolerance ±2mm, Weight ±3%'}</span>
      <button onclick="closeSpecModal()" class="rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-1.5 font-semibold text-white">
        ${'Close Sheet'}
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeSpecModal() {
  const modal = document.getElementById("coolerSpecModal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Extended Catalog Data Models with Model Numbers, Dimensions & Parameters
const extendedCatalogData = {
  epp: {
    hero: { slotId: "img-epp-hero", label: "EPP FOAM BOX SERIES: Master Showcase & Ultra-Lightweight Cellular Structure" },
    specs: { slotId: "img-epp-specs", label: "EPP THERMAL RETENTION CURVE & WALL THICKNESS SPECS (λ ≤ 0.035 W/m·K)" },
    acc: { slotId: "img-epp-acc", label: "EPP MODULAR ACCESSORIES: Interlocking Lids, Internal Dividers & Strap Channels" },
    models: [
      {
        itemNo: 1,
        modelNo: "EPP-8L",
        name: "EPP-8L",
        slotId: "img-epp-8l",
        capacity: "8 Liters",
        extDim: "370 × 270 × 155 mm",
        intDim: "330 × 230 × 120 mm",
        tare: "0.12 kg",
        wall: "20 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "Bare Box",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 2,
        modelNo: "EPP-9L",
        name: "EPP-9L",
        slotId: "img-epp-9l",
        capacity: "9 Liters",
        extDim: "325 × 225 × 270 mm",
        intDim: "275 × 150 × 215 mm",
        tare: "0.15 kg",
        wall: "25 mm",
        density: "Density Ratio: 15",
        color: "Blue lid + Orange body",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 3,
        modelNo: "EPP-15L",
        name: "EPP-15L",
        slotId: "img-epp-15l",
        capacity: "15 Liters",
        extDim: "367 × 306 × 280 mm",
        intDim: "304 × 244 × 195 mm",
        tare: "0.25 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey / Pink / Yellow",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 4,
        modelNo: "EPP-16L",
        name: "EPP-16L",
        slotId: "img-epp-16l",
        capacity: "16 Liters",
        extDim: "475 × 267 × 210 mm",
        intDim: "420 × 210 × 165 mm",
        tare: "0.18 kg",
        wall: "25 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 5,
        modelNo: "EPP-18L",
        name: "EPP-18L",
        slotId: "img-epp-18l",
        capacity: "18 Liters",
        extDim: "390 × 262 × 310 mm",
        intDim: "330 × 210 × 260 mm",
        tare: "0.68 kg",
        wall: "26-30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 6,
        modelNo: "EPP-27L",
        name: "EPP-27L (Bare Box)",
        slotId: "img-epp-27l-bare",
        capacity: "27 Liters",
        extDim: "685 × 470 × 180 mm",
        intDim: "605 × 405 × 113 mm",
        tare: "1.45 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "Bare Box",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 7,
        modelNo: "EPP-27L",
        name: "EPP-27L (Clear Lid)",
        slotId: "img-epp-27l-pink",
        capacity: "27 Liters",
        extDim: "587 × 380 × 266 mm",
        intDim: "507 × 301 × 205 mm",
        tare: "1.45 kg",
        wall: "40 mm",
        density: "Density Ratio: 15",
        color: "Pink",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "Clear Lid",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 8,
        modelNo: "EPP-31L",
        name: "EPP-31L (With Food Pan)",
        slotId: "img-epp-31l-pan",
        capacity: "31 Liters",
        extDim: "587 × 380 × 266 mm",
        intDim: "527 × 320 × 185 mm",
        tare: "1.35 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey / Blue",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Food Pan",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 9,
        modelNo: "EPP-31L",
        name: "EPP-31L (Clear Lid)",
        slotId: "img-epp-31l-pink",
        capacity: "31 Liters",
        extDim: "587 × 380 × 266 mm",
        intDim: "527 × 320 × 185 mm",
        tare: "1.35 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Pink",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "Clear Lid",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 10,
        modelNo: "EPP-34L",
        name: "EPP-34L",
        slotId: "img-epp-34l",
        capacity: "34 Liters",
        extDim: "600 × 400 × 255 mm",
        intDim: "540 × 340 × 185 mm",
        tare: "1.35 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 11,
        modelNo: "EPP-37L",
        name: "EPP-37L",
        slotId: "img-epp-37l",
        capacity: "37 Liters",
        extDim: "515 × 390 × 330 mm",
        intDim: "455 × 330 × 266 mm",
        tare: "1.35 kg",
        wall: "30-35 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "Bare Box",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 12,
        modelNo: "EPP-43L",
        name: "EPP-43L",
        slotId: "img-epp-43l",
        capacity: "43 Liters",
        extDim: "490 × 380 × 395 mm",
        intDim: "433 × 420 × 340 mm",
        tare: "1.42 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 13,
        modelNo: "EPP-45L",
        name: "EPP-45L",
        slotId: "img-epp-45l",
        capacity: "45 Liters",
        extDim: "690 × 470 × 240 mm",
        intDim: "610 × 405 × 170 mm",
        tare: "1.69 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "Bare Box",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 14,
        modelNo: "EPP-62L",
        name: "EPP-62L",
        slotId: "img-epp-62l",
        capacity: "62 Liters",
        extDim: "555 × 445 × 395 mm",
        intDim: "495 × 385 × 330 mm",
        tare: "1.76 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 15,
        modelNo: "EPP-65L",
        name: "EPP-65L",
        slotId: "img-epp-65l",
        capacity: "65 Liters",
        extDim: "687 × 470 × 330 mm",
        intDim: "610 × 410 × 260 mm",
        tare: "2.02 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "Bare Box",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 16,
        modelNo: "EPP-78L",
        name: "EPP-78L",
        slotId: "img-epp-78l",
        capacity: "78 Liters",
        extDim: "620 × 510 × 425 mm",
        intDim: "540 × 430 × 338 mm",
        tare: "2.84 kg",
        wall: "40 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 17,
        modelNo: "EPP-81L",
        name: "EPP-81L",
        slotId: "img-epp-81l",
        capacity: "81 Liters",
        extDim: "660 × 520 × 380 mm",
        intDim: "596 × 456 × 315 mm",
        tare: "2.34 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Blue / Pink / Yellow",
        hold: "Keep cold/insulated for 6-8 hours (depends on ambient temperature and other factors)",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 18,
        modelNo: "EPP-102L",
        name: "EPP-102L",
        slotId: "img-epp-102l",
        capacity: "102 Liters",
        extDim: "710 × 610 × 380 mm",
        intDim: "640 × 535 × 300 mm",
        tare: "3.02 kg",
        wall: "40 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 19,
        modelNo: "EPP-108L",
        name: "EPP-108L",
        slotId: "img-epp-108l",
        capacity: "108 Liters",
        extDim: "660 × 520 × 480 mm",
        intDim: "600 × 460 × 410 mm",
        tare: "2.72 kg",
        wall: "30 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 20,
        modelNo: "EPP-137L",
        name: "EPP-137L",
        slotId: "img-epp-137l",
        capacity: "137 Liters",
        extDim: "720 × 610 × 480 mm",
        intDim: "635 × 530 × 400 mm",
        tare: "3.73 kg",
        wall: "40 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      },
      {
        itemNo: 21,
        modelNo: "EPP-172L",
        name: "EPP-172L",
        slotId: "img-epp-172l",
        capacity: "172 Liters",
        extDim: "710 × 610 × 580 mm",
        intDim: "640 × 535 × 500 mm",
        tare: "3.85 kg",
        wall: "40 mm",
        density: "Density Ratio: 15",
        color: "Grey",
        hold: "Keep cold/insulated for 6-8 hours",
        config: "With Handle & Hinge",
        app: "Fresh food delivery / camping / picnic / fast food delivery",
        custom: "Please contact us for other colors and dimensions."
      }
    ]
  },
  pcm: {
    hero: { slotId: "img-pcm-hero", label: "RIGID PCM BRICKS: High-Density Ultrasonic-Sealed HDPE Master Product Display" },
    specs: { slotId: "img-pcm-specs", label: "PCM ENTHALPY SPECS: Temperature Plateau Curves (-25°C, -21°C, -16°C, +2~+8°C)" },
    acc: { slotId: "img-pcm-acc", label: "PCM ACCESSORIES: Quick-Freeze Airflow Spacers, Wall Clips & Shipping Buffers" },
    models: [
      // ================= PART 1: IN-STOCK STANDARD MODELS (#1 - #18) =================
      {
        itemNo: 1,
        name: "XLH-2100 High-Capacity Cold Slab",
        modelNo: "XLH-2100",
        slotId: "img-pcm-xlh2100",
        capacity: "2000 ml (±15 ml)",
        extDim: "415 × 275 × 30 mm",
        tare: "2400 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "0°C to -20°C / +2°C to +8°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Refrigerated export freight, multi-day pharmaceutical containers, large shipper wall lining",
        categoryType: "instock"
      },
      {
        itemNo: 2,
        name: "XLH-2000 Sub-Zero Phase Slab",
        modelNo: "XLH-2000",
        slotId: "img-pcm-xlh2000",
        capacity: "2000 ml (±15 ml)",
        extDim: "435 × 280 × 30 mm",
        tare: "2000 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White / Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, -10°C, -25°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Deep-freeze bio-reagents, international vaccine air shipments, non-hazardous dry ice replacement",
        categoryType: "instock"
      },
      {
        itemNo: 3,
        name: "XLH-1980 Extended Cold Wall",
        modelNo: "XLH-1980",
        slotId: "img-pcm-xlh1980",
        capacity: "1980 ml (±15 g)",
        extDim: "480 × 290 × 25 mm",
        tare: "1800 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Green",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C CRT (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Controlled room temperature (CRT) oncology drugs, ambient thermal buffer, pallet box liner",
        categoryType: "instock"
      },
      {
        itemNo: 4,
        name: "XLH-1850 High-Thickness Thermal Brick",
        modelNo: "XLH-1850",
        slotId: "img-pcm-xlh1850",
        capacity: "1850 ml (±15 ml)",
        extDim: "300 × 160 × 45 mm",
        tare: "1800 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C CRT (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Thick-body 45mm high thermal mass core, hospital specimen transport, compact insulated shipper boxes",
        categoryType: "instock"
      },
      {
        itemNo: 5,
        name: "XLH-1800 Large Format Cold Plate",
        modelNo: "XLH-1800",
        slotId: "img-pcm-xlh1800",
        capacity: "1850 ml (±15 ml)",
        extDim: "480 × 290 × 25 mm",
        tare: "1800 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Green",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C CRT (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Perimeter 360° cold jacket for pallet shippers, clinical vaccine shippers, fresh bio-logistics",
        categoryType: "instock"
      },
      {
        itemNo: 6,
        name: "XLH-1600 Commercial Cold Plate",
        modelNo: "XLH-1600",
        slotId: "img-pcm-xlh1600",
        capacity: "2200 ml (±15 ml)",
        extDim: "335 × 260 × 30 mm",
        tare: "1600 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Commercial fresh food export, cold storage transport boxes, pathology diagnostic kits",
        categoryType: "instock"
      },
      {
        itemNo: 7,
        name: "XLH-1200 Universal Thermal Brick",
        modelNo: "XLH-1200",
        slotId: "img-pcm-xlh1200",
        capacity: "1200 ml (±15 g)",
        extDim: "256 × 230 × 20 mm",
        tare: "1200 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Universal medical cooler boxes, fresh seafood distribution, pharmaceutical courier transit",
        categoryType: "instock"
      },
      {
        itemNo: 8,
        name: "XLH-1050 Deep Block Cooler Brick",
        modelNo: "XLH-1050",
        slotId: "img-pcm-xlh1050",
        capacity: "1050 ml (±15 ml)",
        extDim: "220 × 175 × 50 mm",
        tare: "1090 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Deep 50mm thermal mass block, vaccine distribution boxes, high-durability cold retention",
        categoryType: "instock"
      },
      {
        itemNo: 9,
        name: "XLH-1000 Standard Cold Brick",
        modelNo: "XLH-1000",
        slotId: "img-pcm-xlh1000",
        capacity: "1000 ml (±15 ml)",
        extDim: "240 × 190 × 38 mm",
        tare: "1000 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Standard export cold chain packaging, pharmacy distribution, fresh produce parcel cold preservation",
        categoryType: "instock"
      },
      {
        itemNo: 10,
        name: "XLH-900 Flat Profiler Plate",
        modelNo: "XLH-900",
        slotId: "img-pcm-xlh900",
        capacity: "900 ml (±15 ml)",
        extDim: "305 × 215 × 20 mm",
        tare: "1000 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Slim 20mm flat profile, lid and floor cold jacket, sensitive biological testing sample shippers",
        categoryType: "instock"
      },
      {
        itemNo: 11,
        name: "XLH-850 Slimline Medical Plate",
        modelNo: "XLH-850",
        slotId: "img-pcm-xlh850",
        capacity: "850 ml (±15 ml)",
        extDim: "297 × 185 × 20 mm",
        tare: "850 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White / Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "A4-proportional thin slab, clinical reagent courier boxes, express pharmaceutical shipments",
        categoryType: "instock"
      },
      {
        itemNo: 12,
        name: "XLH-800 Compact Cold Brick",
        modelNo: "XLH-800",
        slotId: "img-pcm-xlh800",
        capacity: "800 ml (±15 ml)",
        extDim: "215 × 160 × 30 mm",
        tare: "920 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Portable vaccine transport bags, blood collection boxes, insulated delivery coolers",
        categoryType: "instock"
      },
      {
        itemNo: 13,
        name: "XLH-700 Mid-Size Thermal Brick",
        modelNo: "XLH-700",
        slotId: "img-pcm-xlh700",
        capacity: "700 ml (±15 ml)",
        extDim: "215 × 145 × 25 mm",
        tare: "700 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White (Customizable)",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Universal medical cold packs, laboratory specimen transport, temperature-controlled drug parcels",
        categoryType: "instock"
      },
      {
        itemNo: 14,
        name: "XLH-650 Elongated Narrow Brick",
        modelNo: "XLH-650",
        slotId: "img-pcm-xlh650",
        capacity: "650 ml (±15 ml)",
        extDim: "220 × 100 × 50 mm",
        tare: "650 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White (Customizable)",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Narrow-channel side buffer, bottle and vial separator, insulated backpack cold retention",
        categoryType: "instock"
      },
      {
        itemNo: 15,
        name: "XLH-560 Low-Profile Cold Slab",
        modelNo: "XLH-560",
        slotId: "img-pcm-xlh560",
        capacity: "560 ml (±15 ml)",
        extDim: "220 × 160 × 20 mm",
        tare: "560 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White (Customizable)",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Ultra-thin specimen mailers, flat insulin transport pouches, biotechnology courier mailers",
        categoryType: "instock"
      },
      {
        itemNo: 16,
        name: "XLH-400 Standard Courier Brick",
        modelNo: "XLH-400",
        slotId: "img-pcm-xlh400",
        capacity: "400 ml (±15 ml)",
        extDim: "160 × 95 × 35 mm",
        tare: "400 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White (Customizable)",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Express diagnostic parcel cooling, pharmacy home delivery, antibody and vaccine transport",
        categoryType: "instock"
      },
      {
        itemNo: 17,
        name: "XLH-200 Mini Slim Brick",
        modelNo: "XLH-200",
        slotId: "img-pcm-xlh200",
        capacity: "200 ml (±15 ml)",
        extDim: "160 × 95 × 20 mm",
        tare: "200 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Small blood tube parcels, individual test kits, compact personal cooler packs",
        categoryType: "instock"
      },
      {
        itemNo: 18,
        name: "XLH-110 Micro Pocket Brick",
        modelNo: "XLH-110",
        slotId: "img-pcm-xlh110",
        capacity: "110 ml (±15 ml)",
        extDim: "130 × 90 × 20 mm",
        tare: "150 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "In-Stock Ready · Fast Dispatch",
        app: "Pocket travel cases, eye drop medication cooling, portable insulin pen cases",
        categoryType: "instock"
      },

      // ================= PART 2: CUSTOM & MADE-TO-ORDER MODELS (#19 - #37) =================
      {
        itemNo: 19,
        name: "XLH-4 Hole (Ice Cup Holder)",
        modelNo: "XLH-4 Hole",
        slotId: "img-pcm-xlh4hole",
        capacity: "1800 ml (±15 g)",
        extDim: "205 × 205 × 105 mm",
        tare: "1800 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Specialized 4-tube cup holder block, cold beverage & blood vial carrier, laboratory benchtop cooling",
        categoryType: "custom"
      },
      {
        itemNo: 20,
        name: "XLH-1600Wave Contour Brick",
        modelNo: "XLH-1600Wave",
        slotId: "img-pcm-xlh1600wave",
        capacity: "1600 ml (±15 ml)",
        extDim: "197 × 160 × 85 mm",
        tare: "1600 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Brown",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Contoured wave profile for cylindrical beverage cans, wine bottles & pharmaceutical vial cradles",
        categoryType: "custom"
      },
      {
        itemNo: 21,
        name: "XLH-C3X3 (9-Grid Compartment Tray)",
        modelNo: "XLH-C3X3 (9 grid)",
        slotId: "img-pcm-xlhc3x3",
        capacity: "1800 ml (±15 ml)",
        extDim: "270 × 270 × 35 mm",
        tare: "1800 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "3×3 matrix grid separator, anti-collision secure positioning for vaccine bottles and reagent flasks",
        categoryType: "custom"
      },
      {
        itemNo: 22,
        name: "XLH-C3X5 Tray (15-Grid Pallet Crate)",
        modelNo: "XLH-C3X5 Tray",
        slotId: "img-pcm-xlhc3x5",
        capacity: "2500 ml (±15 ml)",
        extDim: "445 × 270 × 30 mm",
        tare: "2500 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "3×5 multi-vial base tray, commercial laboratory batch processing, automated conveyor cooling",
        categoryType: "custom"
      },
      {
        itemNo: 23,
        name: "XLH-C100-1 Round Disc Cooler",
        modelNo: "XLH-C100-1",
        slotId: "img-pcm-xlhc100-1",
        capacity: "100 ml (±15 ml)",
        extDim: "Ø90 × 30 mm (Circular Disc)",
        tare: "100 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Brown",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Circular cup bottom cooler, laboratory shaker flask stabilizer, mini bottle base chiller",
        categoryType: "custom"
      },
      {
        itemNo: 24,
        name: "XLH-C100-2 Round Disc Cooler (Type 2)",
        modelNo: "XLH-C100-2",
        slotId: "img-pcm-xlhc100-2",
        capacity: "100 ml (±15 ml)",
        extDim: "Ø90 × 30 mm (Circular Disc)",
        tare: "100 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Brown",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Circular base thermal buffer, diagnostic canister bottom cooler, centrifuge tube tray",
        categoryType: "custom"
      },
      {
        itemNo: 25,
        name: "XLH-C110-1 Compact Precision Brick",
        modelNo: "XLH-C110-1",
        slotId: "img-pcm-xlhc110-1",
        capacity: "110 ml (±15 ml)",
        extDim: "114 × 105 × 16 mm",
        tare: "110 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Mini square cold block, portable cooler dividers, micro-sample courier packages",
        categoryType: "custom"
      },
      {
        itemNo: 26,
        name: "XLH-C200-1S Slim Wall Brick",
        modelNo: "XLH-C200-1S",
        slotId: "img-pcm-xlhc200-1s",
        capacity: "200 ml (±15 ml)",
        extDim: "170 × 90 × 20 mm",
        tare: "200 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Slimline 20mm profile, side lining for small vaccine boxes, custom pharmaceutical courier pouches",
        categoryType: "custom"
      },
      {
        itemNo: 27,
        name: "XLH-C300-1 Medical Inlay Brick",
        modelNo: "XLH-C300-1",
        slotId: "img-pcm-xlhc300-1",
        capacity: "300 ml (±15 ml)",
        extDim: "165 × 90 × 30 mm",
        tare: "300 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Diagnostic kit buffer, clinical trial specimen transit, compact cooler perimeter lining",
        categoryType: "custom"
      },
      {
        itemNo: 28,
        name: "XLH-C400-1 Dual-Temp Flat Slab",
        modelNo: "XLH-C400-1",
        slotId: "img-pcm-xlhc400-1",
        capacity: "400 ml (±15 ml)",
        extDim: "160 × 130 × 20 mm",
        tare: "400 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Grey",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C~8°C, 0°C~24°C (Optional)",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Thin grey medical slab, hospital pharmacy distribution, biological courier parcels",
        categoryType: "custom"
      },
      {
        itemNo: 29,
        name: "XLH-C400-1S High-Profile Brick",
        modelNo: "XLH-C400-1S",
        slotId: "img-pcm-xlhc400-1s",
        capacity: "400 ml (±15 ml)",
        extDim: "160 × 95 × 35 mm",
        tare: "400 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Thick 35mm thermal mass block, high ambient temperature protection, vaccine cold box lining",
        categoryType: "custom"
      },
      {
        itemNo: 30,
        name: "XLH-C400-2S Elongated Flat Brick",
        modelNo: "XLH-C400-2S",
        slotId: "img-pcm-xlhc400-2s",
        capacity: "400 ml (±15 ml)",
        extDim: "230 × 130 × 20 mm",
        tare: "400 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Extended 230mm length, side wall protection for biological specimen coolers, cold buffer lining",
        categoryType: "custom"
      },
      {
        itemNo: 31,
        name: "XLH-C500-1S Standard Medical Brick",
        modelNo: "XLH-C500-1S",
        slotId: "img-pcm-xlhc500-1s",
        capacity: "500 ml (±15 ml)",
        extDim: "215 × 145 × 25 mm",
        tare: "500 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Standard vaccine cooler brick, laboratory transport cases, blood bank distribution boxes",
        categoryType: "custom"
      },
      {
        itemNo: 32,
        name: "XLH-C500-2S Deep-Block Brick",
        modelNo: "XLH-C500-2S",
        slotId: "img-pcm-xlhc500-2s",
        capacity: "500 ml (±15 ml)",
        extDim: "165 × 140 × 30 mm",
        tare: "500 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Square format block, center thermal core for insulated crates, cold chain export parcels",
        categoryType: "custom"
      },
      {
        itemNo: 33,
        name: "XLH-C600-1S Square Thermal Slab",
        modelNo: "XLH-C600-1S",
        slotId: "img-pcm-xlhc600-1s",
        capacity: "600 ml (±15 ml)",
        extDim: "155 × 155 × 35 mm",
        tare: "600 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Square 155x155mm base format, container floor and lid cold shield, clinical reagents mailers",
        categoryType: "custom"
      },
      {
        itemNo: 34,
        name: "XLH-C1100-1 Large Thin Cold Wall",
        modelNo: "XLH-C1100-1",
        slotId: "img-pcm-xlhc1100-1",
        capacity: "1100 ml (±15 ml)",
        extDim: "290 × 235 × 22 mm",
        tare: "1100 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Broad 290x235mm surface, large cold wall coverage, pharmaceutical pallet boxes and master shippers",
        categoryType: "custom"
      },
      {
        itemNo: 35,
        name: "XLH-C1200-1S Deep Channel Slab",
        modelNo: "XLH-C1200-1S",
        slotId: "img-pcm-xlhc1200-1s",
        capacity: "1200 ml (±15 ml)",
        extDim: "320 × 175 × 40 mm",
        tare: "1200 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "White",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "High thermal capacity 40mm thick wall, bulk vaccine shipping crates, refrigerated air cargo liners",
        categoryType: "custom"
      },
      {
        itemNo: 36,
        name: "XLH-C1400-1 Heavy Cold Wall",
        modelNo: "XLH-C1400-1",
        slotId: "img-pcm-xlhc1400-1",
        capacity: "1400 ml (±15 ml)",
        extDim: "280 × 200 × 30 mm",
        tare: "1400 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Heavy commercial cold plate, multi-day biological specimens, export meat and seafood transport",
        categoryType: "custom"
      },
      {
        itemNo: 37,
        name: "XLH-C2000-1 (Oval Profile Heavy Slab)",
        modelNo: "XLH-C2000-1 (oval)",
        slotId: "img-pcm-xlhc2000-1",
        capacity: "2000 ml (±15 ml)",
        extDim: "435 × 245 × 30 mm",
        tare: "2000 g (±15 g)",
        shell: "Rigid HDPE",
        coolant: "High-Molecular Polymer PCM",
        color: "Blue",
        logo: "Custom silk-screen private logo available",
        hold: "+2°C to +8°C Cold Chain",
        stockStatus: "Custom Made-to-Order (MOQ Applies)",
        app: "Custom oval-contour 2000g slab, large cooler box wall lining, international intermodal air freight",
        categoryType: "custom"
      }
    ]
  },
  water: {
    hero: { slotId: "img-water-hero", label: "WATER-ACTIVATED COOLING SHEETS: Ultra-Thin Dry State vs Hydrated Swollen Cells" },
    specs: { slotId: "img-water-specs", label: "WATER ABSORPTION PARAMETERS: 20x Hydration Expansion & Zero Condensation Bleed" },
    acc: { slotId: "img-water-acc", label: "PACKAGING ACCESSORIES: Continuous Perforated Roll Dispenser & Pre-Cut Inlays" },
    models: [
      {
        name: "CS-24C Full Sheet (24-Cell)",
        slotId: "img-water-cs24",
        capacity: "24 Individual Cells",
        extDim: "380 × 280 mm Sheet",
        intDim: "Cell size: 60 × 65 mm",
        tare: "Dry: 35g / Hydrated: ~700g",
        hold: "0°C to -18°C (Freeze 8h)",
        app: "Wrapping around fresh salmon, meats & bulk boxes"
      },
      {
        name: "CS-12C Half Sheet (12-Cell)",
        slotId: "img-water-cs12",
        capacity: "12 Individual Cells",
        extDim: "280 × 190 mm Sheet",
        intDim: "Cell size: 60 × 65 mm",
        tare: "Dry: 18g / Hydrated: ~350g",
        hold: "0°C to -18°C (Freeze 6h)",
        app: "Fresh fruit baskets, chocolates & pastry boxes"
      },
      {
        name: "CS-4C Narrow Strip (4-Cell)",
        slotId: "img-water-cs4",
        capacity: "4 Flexible Cells",
        extDim: "280 × 70 mm Strip",
        intDim: "Cell size: 60 × 65 mm",
        tare: "Dry: 6g / Hydrated: ~120g",
        hold: "Chilled express mailers",
        app: "Bottle sleeve wrap, wine shipping & mini pouches"
      },
      {
        name: "CS-ROLL Continuous Jumbo Roll",
        slotId: "img-water-roll",
        capacity: "High-Volume Packaging",
        extDim: "400 mm Width × 100 m Length",
        intDim: "Perforated every 140 mm",
        tare: "Dry roll weight: 5.5 kg",
        hold: "Custom cutting by line operators",
        app: "Automated e-commerce fresh food packing lines"
      }
    ]
  },
  instant: {
    hero: { slotId: "img-instant-hero", label: "INSTANT COLD PACKS: Crush-and-Shake Endothermic Chemical Activation Display" },
    specs: { slotId: "img-instant-specs", label: "TEMPERATURE DROP SPECS: Drops to 0°C in <3 Seconds; Sustained 30-60 min Hold" },
    acc: { slotId: "img-instant-acc", label: "PACKAGING ACCESSORIES: Non-Woven Thermal Sleeves & First-Aid Trauma Inlays" },
    models: [
      {
        modelNo: "SLD-160",
        name: "SLD-160 Instant Cooling Cold Pack (Crush to Activate)",
        slotId: "img-sld-160",
        capacity: "160g",
        extDim: "120 × 195 mm",
        intDim: "Internal Endothermic Fluid Sachet",
        tare: "160 g",
        hold: "Drops to 0°C in <3s; Chilled Hold 30–60 min",
        shell: "Medical-Grade PE Film (Single-Use, Non-Toxic)",
        app: "Single-use; do not reuse. Key Features: Crush to Activate, Rapid Cooling. Clinical sample rescue, sports trauma, emergency fever therapy."
      }
    ]
  },
  gel: {
    hero: { slotId: "img-gel-hero", label: "GEL ICE PACKS: High-Density Non-Toxic Food-Grade SAP Multi-Layer Pouches" },
    specs: { slotId: "img-gel-specs", label: "THERMAL FORMULATION MATRIX: 0°C, -10°C, and -25°C Latent Thermal Curves" },
    acc: { slotId: "img-gel-acc", label: "PACKAGING ACCESSORIES: Partition Cartons, PE Liners & Temp Indicator Labels" },
    models: [
      {
        itemNo: 1,
        categoryType: 'courier',
        modelNo: "XLD-150",
        name: "XLD-150 Food-Grade PE Chilled Gel Pack",
        slotId: "img-xld-150",
        capacity: "150g",
        extDim: "200 × 80 mm",
        intDim: "Thickness: 12 mm",
        tare: "150 g",
        shell: "Food-Grade PE Film (Direct Food Contact Safe)",
        coolant: "Non-Toxic Phase Change Coolant",
        color: "Translucent Milky White",
        hold: "2°C ~ 8°C (Sub-zero upon request)",
        app: "Default 2–8°C chilled coolant. Sub-zero temperatures available via inquiry (info@coldpackpro.com). Non-toxic, safe for direct food contact.",
        stockStatus: true
      },
      {
        itemNo: 2,
        categoryType: 'courier',
        modelNo: "XLD-250C",
        name: "XLD-250C 0°C Chilled Fresh Gel Pack",
        slotId: "img-xld-250c",
        capacity: "250g",
        extDim: "170 × 105 mm",
        intDim: "Thickness: 18 mm",
        tare: "250 g",
        shell: "Nylon / PE Composite Film",
        coolant: "0°C Eutectic Chilled Formulation",
        color: "Glossy Translucent White",
        hold: "0°C Chilled (Hold 24–36 Hours)",
        freezerReq: "Freezer below -10°C for >=15 hours to freeze solid",
        app: "0°C chilled ice pack, 24–36h thermal hold (dependent on cooler box performance). Requires freezer below -10°C for >=15h to freeze solid. Nylon/PE composite.",
        stockStatus: true
      },
      {
        itemNo: 3,
        categoryType: 'courier',
        modelNo: "XLD-500C",
        name: "XLD-500C 0°C Chilled Heavy Gel Pack",
        slotId: "img-xld-500c",
        capacity: "500g",
        extDim: "215 × 135 mm",
        intDim: "Thickness: 24 mm",
        tare: "500 g",
        shell: "Nylon / PE Composite Film",
        coolant: "0°C Eutectic Chilled Formulation",
        color: "Heavy Gauge Translucent",
        hold: "0°C Chilled (Hold 24–36 Hours)",
        freezerReq: "Freezer below -10°C for >=15 hours to freeze solid",
        app: "0°C chilled ice pack, 24–36h thermal hold (dependent on cooler box performance). Requires freezer below -10°C for >=15h to freeze solid. Nylon/PE composite.",
        stockStatus: true
      },
      {
        itemNo: 4,
        categoryType: 'courier',
        modelNo: "XLD-250D10Y",
        name: "XLD-250D10Y -10°C Subzero Frozen Ice Pack",
        slotId: "img-xld-250d10y",
        capacity: "250g",
        extDim: "170 × 105 mm",
        intDim: "Thickness: 18 mm",
        tare: "250 g",
        shell: "Nylon / PE Composite Film",
        coolant: "-10°C Subzero Frozen Phase Formulation",
        color: "Translucent White / Blue Tone",
        hold: "-10°C Frozen (Hold 24–36 Hours)",
        freezerReq: "Freezer below -20°C for >=15 hours to freeze solid",
        app: "-10°C subzero frozen ice pack, 24–36h thermal hold (dependent on cooler box). Requires freezer below -20°C for >=15h to freeze solid. Nylon/PE composite.",
        stockStatus: true
      },
      {
        itemNo: 5,
        categoryType: 'courier',
        modelNo: "XLD-500D10Y",
        name: "XLD-500D10Y -10°C Subzero Frozen Heavy Pack",
        slotId: "img-xld-500d10y",
        capacity: "500g",
        extDim: "215 × 135 mm",
        intDim: "Thickness: 24 mm",
        tare: "500 g",
        shell: "Nylon / PE Composite Film",
        coolant: "-10°C Subzero Frozen Phase Formulation",
        color: "Heavy Gauge Translucent",
        hold: "-10°C Frozen (Hold 24–36 Hours)",
        freezerReq: "Freezer below -20°C for >=15 hours to freeze solid",
        app: "-10°C frozen ice pack, 24–36h thermal hold (dependent on cooler box). Requires freezer below -20°C for >=15h to freeze solid. Nylon/PE composite.",
        stockStatus: true
      },
      {
        itemNo: 6,
        categoryType: 'courier',
        modelNo: "XLD-250D25Y",
        name: "XLD-250D25Y -25°C Deep Frozen Ice Pack",
        slotId: "img-xld-250d25y",
        capacity: "250g",
        extDim: "170 × 105 mm",
        intDim: "Thickness: 18 mm",
        tare: "250 g",
        shell: "Nylon / PE Composite Film",
        coolant: "-25°C Deep Frozen Cryogenic Formulation",
        color: "Heavy Translucent Composite",
        hold: "-25°C Deep Frozen (Hold 24–36 Hours)",
        freezerReq: "Deep freezer below -35°C for >=15 hours to freeze solid",
        app: "-25°C deep freeze ice pack, 24–36h thermal hold (dependent on cooler box). Requires deep freezer below -35°C for >=15h to freeze solid. Nylon/PE composite.",
        stockStatus: true
      },
      {
        itemNo: 7,
        categoryType: 'courier',
        modelNo: "XLD-500D25Y",
        name: "XLD-500D25Y -25°C Deep Frozen Heavy Pack",
        slotId: "img-xld-500d25y",
        capacity: "500g",
        extDim: "215 × 135 mm",
        intDim: "Thickness: 24 mm",
        tare: "500 g",
        shell: "Nylon / PE Composite Film",
        coolant: "-25°C Deep Frozen Cryogenic Formulation",
        color: "Heavy Gauge Translucent",
        hold: "-25°C Deep Frozen (Hold 24–36 Hours)",
        freezerReq: "Deep freezer below -35°C for >=15 hours to freeze solid",
        app: "-25°C deep freeze ice pack, 24–36h thermal hold (dependent on cooler box). Requires deep freezer below -35°C for >=15h to freeze solid. Nylon/PE composite.",
        stockStatus: true
      },
      {
        itemNo: 8,
        categoryType: 'courier',
        modelNo: "NWIP-250",
        name: "NWIP-250 Anti-Condensation Non-Woven Pouch",
        slotId: "img-nwip-250",
        capacity: "250g",
        extDim: "200 × 120 mm",
        intDim: "Thickness: 18 mm",
        tare: "250 g",
        shell: "Hydrophilic Non-Woven Outer Layer + PE Barrier",
        coolant: "Food-Grade SAP Polymer Gel",
        color: "Soft White Non-Woven Texture",
        hold: "Chilled 2°C ~ 8°C Anti-Condensation",
        app: "Non-woven fabric outer surface layer specifically engineered to reduce surface moisture condensation and droplet formation during cold shipping.",
        stockStatus: true
      },
      {
        itemNo: 9,
        categoryType: 'courier',
        modelNo: "XLD-300",
        name: "XLD-300 Medium Commercial Fresh Pouch",
        slotId: "img-xld-300",
        capacity: "300g",
        extDim: "130 × 190 mm",
        intDim: "Thickness: 20 mm",
        tare: "300 g",
        shell: "High-Barrier PA/PE Co-extrusion Film",
        coolant: "Non-Toxic Phase Change Coolant",
        color: "Translucent White",
        hold: "2°C ~ 8°C (Sub-zero upon request)",
        app: "Default 2–8°C chilled phase change coolant. Sub-zero temperatures available via inquiry info@coldpackpro.com. Meal kits, deli cuts, pastry transit.",
        stockStatus: true
      },
      {
        itemNo: 10,
        categoryType: 'courier',
        modelNo: "XLD-400",
        name: "XLD-400 Pharma Diagnostic Chilled Pouch",
        slotId: "img-xld-400",
        capacity: "400g",
        extDim: "150 × 205 mm",
        intDim: "Thickness: 22 mm",
        tare: "400 g",
        shell: "High-Barrier PA/PE Co-extrusion Film",
        coolant: "Non-Toxic Phase Change Coolant",
        color: "Translucent White",
        hold: "2°C ~ 8°C (Sub-zero upon request)",
        app: "Default 2–8°C chilled phase change coolant. Sub-zero temperatures available via inquiry info@coldpackpro.com. Diagnostic reagents, biologics, premium fresh food.",
        stockStatus: true
      },
      {
        itemNo: 11,
        categoryType: 'bulk',
        modelNo: "XLD-500",
        name: "XLD-500 Meat & Seafood Bulk Chilled Pouch",
        slotId: "img-xld-500",
        capacity: "500g",
        extDim: "220 × 170 mm",
        intDim: "Thickness: 25 mm",
        tare: "500 g",
        shell: "Heavy PA/PE Co-extrusion Film",
        coolant: "Non-Toxic Phase Change Coolant",
        color: "Translucent White",
        hold: "2°C ~ 8°C (Sub-zero upon request)",
        app: "Default 2–8°C chilled phase change coolant. Sub-zero temperatures available via inquiry info@coldpackpro.com. Seafood freight, chilled poultry, beef crates.",
        stockStatus: true
      },
      {
        itemNo: 12,
        categoryType: 'bulk',
        modelNo: "XLD-1000",
        name: "XLD-1000 Master Carton Thermal Buffer Pouch",
        slotId: "img-xld-1000",
        capacity: "1000g",
        extDim: "200 × 300 mm",
        intDim: "Thickness: 28 mm",
        tare: "1000 g",
        shell: "Reinforced Puncture-Proof Co-extruded Film",
        coolant: "Non-Toxic Phase Change Coolant",
        color: "Max-Barrier Translucent White",
        hold: "2°C ~ 8°C (Sub-zero upon request)",
        app: "Default 2–8°C chilled phase change coolant. Sub-zero temperatures available via inquiry info@coldpackpro.com. Large shipping boxes, master pallets, wholesale logistics.",
        stockStatus: true
      },
      {
        itemNo: 13,
        categoryType: 'bulk',
        modelNo: "ZHB-1300",
        name: "ZHB-1300 Heavy Composite Thermal Anchor Pack",
        slotId: "img-zhb-1300",
        capacity: "1240g",
        extDim: "385 × 200 × 28 mm",
        intDim: "Thickness: 28 mm",
        tare: "1240 g",
        shell: "Reinforced Heavy Shell Composite",
        coolant: "Non-Toxic Phase Change Coolant",
        color: "Max-Barrier Translucent White",
        hold: "2°C ~ 8°C (Sub-zero upon request)",
        app: "Default 2–8°C chilled phase change coolant. Sub-zero temperatures available via inquiry info@coldpackpro.com. Heavy cold containers, multi-day transit thermal shielding.",
        stockStatus: true
      }
    ]
  },
  selfAbsorbing: {
    group1: {
      slotId: "img-selfabsorb-group1",
      tag: "GROUP 1 · PRE-CUT SHEETS & STRIPS (#1–9)",
      title: "Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)",
      desc: "Hydrates automatically in clean water for 3–5 minutes. Material: Food-grade Nylon/PE composite film & non-woven fabric. Default 2–8°C chilled coolant.",
      models: [
        { itemNo: 1, modelNo: "ZXD-35", name: "ZXD-35 Micro Pocket Cell", cells: "1 Single Cell", extDim: "72 × 65 mm", tare: "~35g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Submerge in water 3–5 min to swell into gel cell. Compact vials & small boxes." },
        { itemNo: 2, modelNo: "ZXD-100", name: "ZXD-100 Express Narrow Strip", cells: "Narrow Strip", extDim: "145 × 65 mm", tare: "~100g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Parcel express mailers & compact chilled food wraps." },
        { itemNo: 3, modelNo: "ZXD-180", name: "ZXD-180 Courier Fresh Sheet", cells: "Fresh Sheet", extDim: "130 × 95 mm", tare: "~180g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Direct wrap for gourmet chocolates, dairy and fresh pastries." },
        { itemNo: 4, modelNo: "ZXD-250", name: "ZXD-250 Fresh Food Standard Sheet", cells: "Standard Sheet", extDim: "130 × 115 mm", tare: "~250g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Chilled beef steaks, poultry cuts and farm basket delivery." },
        { itemNo: 5, modelNo: "ZXD-400", name: "ZXD-400 Commercial Produce Sheet", cells: "Medium Sheet", extDim: "160 × 130 mm", tare: "~400g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Commercial seafood cartons and wholesale dairy shippers." },
        { itemNo: 6, modelNo: "ZXD-420 (12 cells)", name: "ZXD-420 12-Cell Flexible Grid Sheet", cells: "12 Cells", extDim: "290 × 195 mm", tare: "~420g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "12-cell flexible grid sheet. Wraps easily around seafood cartons, beverage bottles & cold boxes." },
        { itemNo: 7, modelNo: "ZXD-850 (24 cells)", name: "ZXD-850 24-Cell Full Matrix Sheet", cells: "24 Cells", extDim: "390 × 290 mm", tare: "~850g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "24-cell full matrix sheet. Complete perimeter lining for oyster crates and salmon boxes." },
        { itemNo: 8, modelNo: "ZXD-1200 (12 cells)-1", name: "ZXD-1200 12-Cell Heavy Master Sheet Type-1", cells: "12 Cells", extDim: "390 × 290 mm", tare: "~1200g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "12 heavy cells grid sheet. High-capacity thermal hold for intermodal freight crates." },
        { itemNo: 9, modelNo: "ZXD-1620 (9 cells)", name: "ZXD-1620 9-Cell Jumbo Thermal Sheet", cells: "9 Cells", extDim: "390 × 290 mm", tare: "~1620g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "9 jumbo cells grid sheet. High-mass thermal ballast for large chilled freight containers." }
      ]
    },
    group2: {
      slotId: "img-selfabsorb-group2",
      tag: "GROUP 2 · MULTI-CELL FORMATS (#10–17)",
      title: "Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)",
      desc: "Hydrates in clean water for 3–5 minutes. Material: Food-grade Nylon/PE composite film & non-woven fabric. Default 2–8°C chilled coolant.",
      models: [
        { itemNo: 10, modelNo: "ZXD-1600 (9 cells)", name: "ZXD-1600 9-Cell Large Format Sheet", cells: "9 Cells", extDim: "389 × 270 mm", tare: "~1600g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "9 large cells sheet. Heavy cargo chilled preservation and bulk freight lining." },
        { itemNo: 11, modelNo: "ZXD-1200 (12 cells)-2", name: "ZXD-1200 12-Cell Heavy Master Sheet Type-2", cells: "12 Cells", extDim: "380 × 280 mm", tare: "~1200g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "12 cells format. Heavy airline air-cargo and refrigerated road distribution." },
        { itemNo: 12, modelNo: "ZXD-380 (6 cells)", name: "ZXD-380 6-Cell Mid-Sized Grid Sheet", cells: "6 Cells", extDim: "195 × 285 mm", tare: "~380g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "6 cells format. Medium parcel shipping boxes & fresh meat wrap liners." },
        { itemNo: 13, modelNo: "ZXD-800 (24 cells)", name: "ZXD-800 24-Cell High-Flexibility Sheet", cells: "24 Cells", extDim: "380 × 280 mm", tare: "~800g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "24 cells format. High flexibility wrapping for irregular cargoes and odd-shaped cartons." },
        { itemNo: 14, modelNo: "ZXD-300 (9 cells)", name: "ZXD-300 9-Cell Compact Grid Sheet", cells: "9 Cells", extDim: "190 × 210 mm", tare: "~300g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "9 cells format. Compact cold chain meal kit packaging and fresh fruit cartons." },
        { itemNo: 15, modelNo: "ZXD-130 (4 cells)", name: "ZXD-130 4-Cell Square Express Sheet", cells: "4 Cells", extDim: "130 × 130 mm", tare: "~130g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "4 cells square format. Laboratory specimen vials & luxury chocolate mailers." },
        { itemNo: 16, modelNo: "ZXD-200 (6 cells)", name: "ZXD-200 6-Cell Rectangular Sheet", cells: "6 Cells", extDim: "140 × 200 mm", tare: "~200g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "6 cells format. Chilled meat slices & direct-to-consumer farm baskets." },
        { itemNo: 17, modelNo: "ZXD-270 (8 cells)", name: "ZXD-270 8-Cell Perimeter Strip Sheet", cells: "8 Cells", extDim: "280 × 130 mm", tare: "~270g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "8 cells rectangular format. Long strip lining for box perimeters and carton corners." }
      ]
    },
    group3: {
      slotId: "img-selfabsorb-group3",
      tag: "GROUP 3 · COMPOSITE BLANKETS (#18–24)",
      title: "Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)",
      desc: "Material: Food-grade Nylon/PE composite film & non-woven fabric. Default 2–8°C chilled coolant.",
      models: [
        { itemNo: 18, modelNo: "SCX-100", name: "SCX-100 Composite Pocket Sheet", cells: "1 Single Cell", extDim: "95 × 95 mm", tare: "~100g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Single-cell square pouch for compact express shipping." },
        { itemNo: 19, modelNo: "SCX-180", name: "SCX-180 Composite Diagnostic Pouch", cells: "Compact Cell", extDim: "95 × 120 mm", tare: "~180g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Diagnostic reagents, blood tubes & cold mailers." },
        { itemNo: 20, modelNo: "SCX-250", name: "SCX-250 Composite Fresh Food Pouch", cells: "Medium Cell", extDim: "95 × 150 mm", tare: "~250g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Gourmet meats, dairy, fresh bakery shipments." },
        { itemNo: 21, modelNo: "SCX-400", name: "SCX-400 Composite Seafood Pouch", cells: "Large Cell", extDim: "110 × 180 mm", tare: "~400g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "Default 2–8°C chilled coolant. Chilled seafood, oysters & fresh catering boxes." },
        { itemNo: 22, modelNo: "SCX-300 (3 cells)", name: "SCX-300 3-Cell Composite Linear Strip", cells: "3 Cells", extDim: "95 × 285 mm", tare: "~300g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "3 cells linear strip. Wine bottles, beverage wraps, cylindrical cold shielding." },
        { itemNo: 23, modelNo: "SCX-600 (6 cells)", name: "SCX-600 6-Cell Composite Thermal Blanket", cells: "6 Cells", extDim: "190 × 285 mm", tare: "~600g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "6 cells matrix blanket. Multi-layer cold blanket for cooler box bottom and top." },
        { itemNo: 24, modelNo: "SCX-900 (9 cells)", name: "SCX-900 9-Cell Composite Heavy Blanket", cells: "9 Cells", extDim: "285 × 285 mm", tare: "~900g", hold: "2°C ~ 8°C Chilled", shell: "Food-Grade Nylon/PE Composite & Non-Woven", app: "9 cells square blanket. Heavy commercial produce, meat distribution shippers." }
      ]
    }
  },
  waterInjection: {
    group1: {
      slotId: "img-waterinject-group1",
      tag: "WATER-INJECTION · SELF-SEALING POUCHES (#1–5)",
      title: "Water-Injection Ice Pack Series: Self-Sealing Pouches (#1–5 · ZSD Series)",
      desc: "Flat shipment pre-loaded with dry coolant powder. Auto-sealing one-way inlet valve; auto-gels within 60s without heat-sealer tools. Material: Eco-friendly PE film / PE film.",
      models: [
        { itemNo: 1, modelNo: "ZSD-100", name: "ZSD-100 Self-Sealing Water-Injection Bag", capacity: "100 ml", extDim: "130 × 97 mm", tare: "100g filled", hold: "2°C ~ 8°C / 0°C (Freezable)", shell: "Eco-Friendly PE Film / PE film", app: "Pre-filled dry SAP coolant. Tap water injects through one-way valve; solidifies into gel in 60s." },
        { itemNo: 2, modelNo: "ZSD-200", name: "ZSD-200 Standard Express Water-Injection Pouch", capacity: "200 ml", extDim: "148 × 99 mm", tare: "200g filled", hold: "2°C ~ 8°C / 0°C (Freezable)", shell: "Eco-Friendly PE Film / PE film", app: "Pre-filled dry SAP coolant. Auto-sealing one-way inlet; leak-proof seal without heat sealing." },
        { itemNo: 3, modelNo: "ZSD-300", name: "ZSD-300 Medium Commercial Fresh Produce Pouch", capacity: "300 ml", extDim: "179 × 113 mm", tare: "300g filled", hold: "2°C ~ 8°C / 0°C (Freezable)", shell: "Eco-Friendly PE Film / PE film", app: "Pre-filled dry SAP coolant. Medium fresh produce, fresh poultry and seafood courier." },
        { itemNo: 4, modelNo: "ZSD-400", name: "ZSD-400 Large Fishery & Meat Transit Pack", capacity: "400 ml", extDim: "190 × 119 mm", tare: "400g filled", hold: "2°C ~ 8°C / 0°C (Freezable)", shell: "Eco-Friendly PE Film / PE film", app: "Pre-filled dry SAP coolant. Heavy-duty puncture-resistant PE film for long transit." },
        { itemNo: 5, modelNo: "ZSD-600", name: "ZSD-600 Master Heavy Freight Buffer Pouch", capacity: "600 ml", extDim: "229 × 129 mm", tare: "600g filled", hold: "2°C ~ 8°C / 0°C (Freezable)", shell: "Eco-Friendly PE Film / PE film", app: "Pre-filled dry SAP coolant. High thermal mass buffer for bulk shipping cartons." }
      ]
    }
  },
  instantCooling: {
    group1: {
      slotId: "img-instant-group1",
      tag: "INSTANT COOLING · CRUSH TO ACTIVATE (#1)",
      title: "Instant Cooling Ice Pack Series (#1 · SLD Series)",
      desc: "Medical-grade PE film, single-use, crush to activate with instant sub-zero/chilled temperature drop.",
      models: [
        { itemNo: 1, modelNo: "SLD-160", name: "SLD-160 Rapid Cooling Instant Pack", capacity: "160g", extDim: "120 × 195 mm", tare: "160 g", hold: "Instant cooling drop in 3 seconds", shell: "Medical-Grade PE Film", app: "Single-use; do not reuse. Key Features: Crush to Activate, Rapid Cooling." }
      ]
    }
  }
};

// Render extended product models card with dedicated upload slot and full parameters
function renderExtendedModelCard(model, categoryName) {
  const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";
  const inquiryLink = `/?inquiry=1&category=${encodeURIComponent(categoryName)}&model=${encodeURIComponent(model.modelNo || model.name)}&dim=${encodeURIComponent(model.extDim)}&weight=${encodeURIComponent(model.tare || model.capacity)}&hold=${encodeURIComponent(model.hold)}#inquiry-form`;
  
  const isCustom = model.categoryType === 'custom';
  const badgeColor = isCustom 
    ? 'bg-amber-950/80 text-amber-300 border-amber-500/30' 
    : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30';
  const statusLabel = isCustom
    ? ('Custom MOQ')
    : ('In-Stock Ready');

  return `
    <div id="product-model-${(model.modelNo || model.name).toLowerCase().replace(/[^a-z0-9]/g, '-')}" data-model-name="${model.modelNo || model.name}" data-model-cap="${model.capacity || model.tare || ''}" class="flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#0B1220] p-4 sm:p-5 shadow-lg hover:border-cyan-500/40 transition">
      <!-- Product Slot Header -->
      <div class="mb-3 flex items-start justify-between gap-2">
        <div>
          <div class="flex items-center gap-1.5 flex-wrap mb-1">
            <span class="rounded-md bg-cyan-950/80 px-2 py-0.5 font-sans text-[10px] font-bold text-cyan-400 border border-cyan-500/30">
              ${getCategorySingularName(model.slotId, categoryName)}
            </span>
            ${model.stockStatus ? `
            <span class="rounded-md px-2 py-0.5 font-sans text-[10px] font-bold border ${badgeColor}">
              ${statusLabel}
            </span>` : ''}
            ${model.itemNo ? `<span class="text-[10px] font-mono text-slate-500 font-bold">#${String(model.itemNo).padStart(2, '0')}</span>` : ''}
          </div>
          <h4 class="font-bold text-white text-sm tracking-tight leading-snug">${model.name}</h4>
        </div>
        <span class="text-xs font-mono font-bold text-cyan-300 shrink-0 text-right">${model.capacity || model.tare || ''}</span>
      </div>

      <!-- Dedicated Product Image Upload Slot (Auto-Scaling & Centered) -->
      <div class="w-full mb-3">
        ${getVectorPlaceholder(model.slotId, `${model.name} (${model.extDim})`, false)}
      </div>

      <!-- Specifications Parameter Matrix -->
      <div class="mt-1 space-y-1.5 rounded-xl border border-slate-800/80 bg-slate-950/60 p-3 text-xs font-mono text-slate-300">
        <div class="flex justify-between">
          <span class="text-slate-500">${"External Dim:"}</span>
          <span class="text-white font-bold">${model.extDim}</span>
        </div>
        ${model.capacity ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Capacity:"}</span>
          <span class="text-slate-200">${model.capacity}</span>
        </div>` : ''}
        ${model.tare ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Weight / Tare:"}</span>
          <span class="text-cyan-300 font-bold">${model.tare}</span>
        </div>` : ''}
        ${model.shell ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Shell Material:"}</span>
          <span class="text-slate-300">${model.shell}</span>
        </div>` : ''}
        ${model.coolant ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Coolant Core:"}</span>
          <span class="text-slate-300">${model.coolant}</span>
        </div>` : ''}
        ${model.color ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Standard Color:"}</span>
          <span class="text-slate-300 font-sans">${model.color}</span>
        </div>` : ''}
        ${model.density ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Density:"}</span>
          <span class="text-emerald-400 font-semibold">${model.density}</span>
        </div>` : ''}
        ${model.intDim ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Internal Dim:"}</span>
          <span class="text-slate-300">${model.intDim}</span>
        </div>` : ''}
        ${model.wall ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Wall Thickness:"}</span>
          <span class="text-slate-300 font-sans">${model.wall}</span>
        </div>` : ''}
        ${model.config ? `
        <div class="flex justify-between">
          <span class="text-slate-500">${"Configuration:"}</span>
          <span class="text-cyan-300 font-semibold font-sans">${model.config}</span>
        </div>` : ''}
        <div class="flex justify-between">
          <span class="text-slate-500">${"Temp Range:"}</span>
          <span class="text-emerald-400 font-semibold text-right">${model.hold}</span>
        </div>
      </div>

      <!-- Application description & Logo capability -->
      <div class="mt-2.5 text-[11px] text-slate-400 space-y-1">
        <p class="line-clamp-2">
          <span class="text-slate-500 font-semibold">${"Application:"}</span> ${model.app}
        </p>
        ${model.custom ? `
        <p class="text-[10px] text-slate-400">
          <span class="text-slate-500 font-semibold">${"Custom:"}</span> ${model.custom}
        </p>` : ''}
        ${(!model.slotId || !model.slotId.toLowerCase().includes('epp')) ? `
        <p class="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
          <span class="text-cyan-400">●</span> ${"Custom silk-screen private logo available"}
        </p>` : ''}
      </div>

      <!-- Action Button -->
      <div class="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <span class="text-[11px] text-slate-500 font-medium">${"Factory Direct"}</span>
        <a href="${inquiryLink}" class="inline-flex items-center gap-1 rounded-lg bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 border border-cyan-500/30 transition">
          <span>${"Inquiry Model"}</span>
          <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  `;
}

// Global filter state for PCM series
window.currentPcmFilter = 'all';

function renderPcmModelsGrid(filterType = 'all') {
  const mount = document.getElementById("pcmModelsMount");
  if (!mount) return;
  window.currentPcmFilter = filterType;
  const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";

  // Synchronize tab button visual styling
  ['pcmTabAll', 'pcmTabInStock', 'pcmTabCustom'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = 'px-4 py-2 rounded-xl transition text-xs font-semibold text-slate-400 hover:text-white cursor-pointer';
  });
  const activeBtnId = filterType === 'all' ? 'pcmTabAll' : (filterType === 'instock' ? 'pcmTabInStock' : 'pcmTabCustom');
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) {
    activeBtn.className = 'px-4 py-2 rounded-xl transition text-xs font-black bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20 cursor-pointer';
  }

  const allModels = extendedCatalogData.pcm.models;
  const inStockModels = allModels.filter(m => m.categoryType === 'instock');
  const customModels = allModels.filter(m => m.categoryType === 'custom');

  let html = '';

  if (filterType === 'all' || filterType === 'instock') {
    html += `
      <div class="col-span-full rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/60 via-[#0B1528] to-[#09101D] p-5 sm:p-6 shadow-xl mb-2">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-cyan-500/20 pb-4">
          <div class="flex items-center gap-3">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-slate-950 shadow-sm">1</span>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-white font-display">
                ${'Part 1: Standard In-Stock Models (#1–18 · Zero Mold Required · Fast Dispatch)'}
              </h4>
              <p class="text-[11px] text-cyan-300 font-mono mt-0.5">
                ${'Standard Inventory Ready · Rapid Factory Dispatch'}
              </p>
            </div>
          </div>
          <span class="rounded-full bg-emerald-950/90 border border-emerald-500/40 px-3.5 py-1 text-xs font-mono font-bold text-emerald-300 shadow-sm">
            ${'18 In-Stock Models'}
          </span>
        </div>
        <p class="mt-3 text-xs text-slate-300 leading-relaxed">
          ${'Notice: The following items #1–18 are standard in-stock inventory models. Zero tooling or mold costs required; private silk-screen logos available with rapid factory dispatch.'}
        </p>
      </div>
      ${inStockModels.map(m => renderExtendedModelCard(m, "PCM Rigid Brick")).join('')}
    `;
  }

  if (filterType === 'all' || filterType === 'custom') {
    html += `
      <div class="col-span-full rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/50 via-[#15121D] to-[#0E101A] p-5 sm:p-6 shadow-xl ${filterType === 'all' ? 'mt-10 mb-2' : 'mb-2'}">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4">
          <div class="flex items-center gap-3">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-xs font-black text-slate-950 shadow-sm">2</span>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-white font-display">
                ${'Part 2: Custom & Made-to-Order Models (#19–37 · Subject to MOQ)'}
              </h4>
              <p class="text-[11px] text-amber-300 font-mono mt-0.5">
                ${'Custom Engineered Specifications · Tooling & Chemistry Customization'}
              </p>
            </div>
          </div>
          <span class="rounded-full bg-amber-950/90 border border-amber-500/40 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 shadow-sm">
            ${'19 Custom Models'}
          </span>
        </div>
        <p class="mt-3 text-xs text-slate-300 leading-relaxed">
          ${'Notice: The following items #19–37 are specialized custom-engineered products without standard off-the-shelf inventory. Minimum Order Quantity (MOQ) applies. Please click "Inquiry Model" for custom engineering drawings, quotes, and production lead times.'}
        </p>
      </div>
      ${customModels.map(m => renderExtendedModelCard(m, "PCM Rigid Brick")).join('')}
    `;
  }

  mount.innerHTML = html;
}

window.filterPcmModels = function(type) {
  renderPcmModelsGrid(type);
};

// Global filter state for Gel, Self-Absorbing, and Water-Injection series
window.currentGelFilter = 'all';

// Helper to render Master Image Box + Sequential Models Information Table for Self-Absorbing & Water-Injection groups
function renderMasterGroupSection(group, categoryTitle, isZh) {
  return `
    <div class="col-span-full rounded-3xl border border-slate-800 bg-[#0B1220] p-5 sm:p-7 shadow-2xl mb-8">
      <!-- Group Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-5">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <span class="rounded bg-cyan-950 px-2.5 py-0.5 text-[11px] font-mono font-bold text-cyan-300 border border-cyan-500/30">
              ${group.tag || 'TECHNICAL SPECIFICATIONS'}
            </span>
            <span class="text-xs font-mono text-emerald-400 font-bold">${group.models.length} ${'Sequential Models'}</span>
          </div>
          <h4 class="text-base sm:text-lg font-bold text-white font-display">${group.title}</h4>
          <p class="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">${group.desc}</p>
        </div>
      </div>

      <!-- 1 Master Photo Upload Slot (Prominent Showcase Box) -->
      <div class="mb-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold text-cyan-300 font-mono tracking-wide uppercase">
            [${'Group Master Showcase Slot · Click to Upload'}]
          </span>
          <span class="text-[11px] text-slate-400 font-mono">
            ${'Auto-fit, centering & persistent upload'}
          </span>
        </div>
        ${getVectorPlaceholder(group.slotId, group.title, true)}
      </div>

      <!-- Models Sequential Information (Desktop Table & Mobile Cards) -->
      <div class="mt-6">
        <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h5 class="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
            ${'Sequential Specifications Matrix (Models listed in order):'}
          </h5>
          <span class="text-[11px] font-mono text-slate-400">${'Factory Direct Sourcing · OEM Silk-Screen Logo'}</span>
        </div>

        <!-- Desktop High-Density Table View -->
        <div class="hidden md:block overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/80 shadow-inner">
          <table class="w-full text-left text-xs text-slate-300 border-collapse">
            <thead>
              <tr class="border-b border-slate-800 bg-[#070D18] text-[11px] font-mono font-bold text-cyan-300 uppercase">
                <th class="py-3 px-3.5 w-12 text-center">#</th>
                <th class="py-3 px-3.5">${'Model Code / Name'}</th>
                <th class="py-3 px-3.5">${'Format / Cells'}</th>
                <th class="py-3 px-3.5">${'Dimensions'}</th>
                <th class="py-3 px-3.5">${'Weight (Dry / Active)'}</th>
                <th class="py-3 px-3.5">${'Material & Architecture'}</th>
                <th class="py-3 px-3.5">${'Recommended Application'}</th>
                <th class="py-3 px-3.5 text-right w-24">${'Action'}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60 font-sans">
              ${group.models.map((m, idx) => {
                const inquiryLink = `/?inquiry=1&category=${encodeURIComponent(categoryTitle)}&model=${encodeURIComponent(m.modelNo || m.name)}&dim=${encodeURIComponent(m.extDim || '')}&weight=${encodeURIComponent(m.hydrated || m.tare || '')}#inquiry-form`;
                const modelCodeId = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, '-');
                return `
                  <tr id="product-model-${modelCodeId}" data-model-name="${m.modelNo || m.name}" class="hover:bg-cyan-950/40 transition group scroll-mt-28">
                    <td class="py-3 px-3.5 text-center font-mono font-bold text-slate-500 group-hover:text-cyan-400">
                      #${String(m.itemNo || (idx + 1)).padStart(2, '0')}
                    </td>
                    <td class="py-3 px-3.5 font-bold text-white whitespace-nowrap">
                      <div class="text-xs font-mono text-cyan-300 font-bold">${m.modelNo}</div>
                      <div class="text-[11px] text-slate-400 font-normal mt-0.5">${m.name}</div>
                    </td>
                    <td class="py-3 px-3.5 font-mono text-slate-300 whitespace-nowrap">${m.cells || m.capacity || '—'}</td>
                    <td class="py-3 px-3.5 font-mono text-white whitespace-nowrap font-medium">${m.extDim}</td>
                    <td class="py-3 px-3.5 font-mono whitespace-nowrap">
                      <span class="text-cyan-300 font-bold">${m.hydrated || m.tare || ''}</span>
                      ${m.dry ? `<span class="text-slate-500 text-[10px] block font-mono">(${'Dry:'} ${m.dry})</span>` : ''}
                    </td>
                    <td class="py-3 px-3.5 text-[11px] text-slate-300 max-w-[190px]">${m.shell || m.coolant || ''}</td>
                    <td class="py-3 px-3.5 text-[11px] text-slate-400 max-w-[210px]">${m.app}</td>
                    <td class="py-3 px-3.5 text-right whitespace-nowrap">
                      <a href="${inquiryLink}" class="inline-flex items-center gap-1 rounded-lg bg-cyan-400/10 px-2.5 py-1 text-[11px] font-bold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 border border-cyan-500/30 transition">
                        <span>${'Inquiry'}</span>
                        <svg class="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
                      </a>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Mobile Responsive Cards View -->
        <div class="md:hidden space-y-3">
          ${group.models.map((m, idx) => {
            const inquiryLink = `/?inquiry=1&category=${encodeURIComponent(categoryTitle)}&model=${encodeURIComponent(m.modelNo || m.name)}&dim=${encodeURIComponent(m.extDim || '')}&weight=${encodeURIComponent(m.hydrated || m.tare || '')}#inquiry-form`;
            const modelCodeId = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, '-');
            return `
              <div id="product-model-m-${modelCodeId}" data-model-name="${m.modelNo || m.name}" class="rounded-xl border border-slate-800 bg-slate-950/70 p-3.5 space-y-2 scroll-mt-28">
                <div class="flex items-center justify-between gap-2">
                  <div class="flex items-center gap-2">
                    <span class="font-mono text-xs font-bold text-cyan-400">#${String(m.itemNo || (idx + 1)).padStart(2, '0')}</span>
                    <span class="font-mono font-bold text-white text-xs">${m.modelNo}</span>
                  </div>
                  <span class="font-mono text-xs font-bold text-cyan-300">${m.hydrated || m.tare || ''}</span>
                </div>
                <div class="text-xs text-slate-300 font-medium">${m.name}</div>
                <div class="grid grid-cols-2 gap-1.5 text-[11px] font-mono text-slate-400 border-t border-slate-800/60 pt-2">
                  <div>${'Dim:'} <span class="text-white">${m.extDim}</span></div>
                  <div>${'Format:'} <span class="text-slate-200">${m.cells || m.capacity || '—'}</span></div>
                </div>
                <div class="text-[11px] text-slate-400">${m.app}</div>
                <div class="pt-1.5 flex justify-end">
                  <a href="${inquiryLink}" class="inline-flex items-center gap-1 rounded-lg bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 border border-cyan-500/30 transition">
                    <span>${'Inquiry Model'}</span>
                    <svg class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderGelModelsGrid(filterType = 'all') {
  const mount = document.getElementById("gelModelsMount");
  if (!mount) return;
  window.currentGelFilter = filterType;
  const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";

  // Synchronize tab button visual styling
  ['gelTabAll', 'gelTabGel', 'gelTabSelf', 'gelTabWater', 'gelTabInstant'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = 'px-4 py-2 rounded-xl transition text-xs font-semibold text-slate-400 hover:text-white cursor-pointer';
  });
  const activeBtnId = filterType === 'all' ? 'gelTabAll' : (filterType === 'gel' ? 'gelTabGel' : (filterType === 'self' ? 'gelTabSelf' : (filterType === 'water' ? 'gelTabWater' : 'gelTabInstant')));
  const activeBtn = document.getElementById(activeBtnId);
  if (activeBtn) {
    activeBtn.className = 'px-4 py-2 rounded-xl transition text-xs font-black bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20 cursor-pointer';
  }

  let html = '';

  // ================= (I) GEL ICE PACKS SERIES (MODELS #1–13) =================
  if (filterType === 'all' || filterType === 'gel') {
    const gelModels = extendedCatalogData.gel.models;
    html += `
      <div class="col-span-full rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/60 via-[#0B1528] to-[#09101D] p-5 sm:p-6 shadow-xl mb-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-400 text-xs font-black text-slate-950 shadow-sm">1</span>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-white font-display">
                ${'(I) Gel Ice Packs Series Standard Models (#1–13)'}
              </h4>
            </div>
          </div>
          <span class="rounded-full bg-cyan-950/90 border border-cyan-500/40 px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 shadow-sm">
            ${'13 Production Models'}
          </span>
        </div>
      </div>

      <!-- 13 Dedicated Model Cards with 13 Image Upload Boxes -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12">
        ${gelModels.map(m => renderExtendedModelCard(m, "Gel Ice Pack")).join('')}
      </div>
    `;
  }

  // ================= (II) SELF-ABSORBING ICE PACK SERIES (MODELS #1–24) =================
  if (filterType === 'all' || filterType === 'self') {
    html += `
      <div class="col-span-full rounded-2xl border border-sky-500/30 bg-gradient-to-r from-sky-950/60 via-[#0B1528] to-[#0A101C] p-5 sm:p-6 shadow-xl mb-6 ${filterType === 'all' ? 'mt-8' : ''}">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-sky-400 text-xs font-black text-slate-950 shadow-sm">2</span>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-white font-display">
                ${'(II) Self-Absorbing Ice Pack Series (#1–24)'}
              </h4>
              <p class="text-[11px] text-sky-300 font-mono mt-0.5">
                ${'Dry flat state saves 90% freight · Hydrates in clean water in 3–5 min · 2–8°C chilled coolant'}
              </p>
            </div>
          </div>
          <span class="rounded-full bg-sky-950/90 border border-sky-500/40 px-3.5 py-1 text-xs font-mono font-bold text-sky-300 shadow-sm">
            ${'24 Production Models'}
          </span>
        </div>
      </div>

      <!-- Group 1: Models #1 to #9 (1 Master Photo + Ordered Specifications) -->
      ${renderMasterGroupSection(extendedCatalogData.selfAbsorbing.group1, "Self-Absorbing Ice Pack", isZh)}

      <!-- Group 2: Models #10 to #17 (1 Master Photo + Ordered Specifications) -->
      ${renderMasterGroupSection(extendedCatalogData.selfAbsorbing.group2, "Self-Absorbing Ice Pack", isZh)}

      <!-- Group 3: Models #18 to #24 (1 Master Photo + Ordered Specifications) -->
      ${renderMasterGroupSection(extendedCatalogData.selfAbsorbing.group3, "Self-Absorbing Ice Pack", isZh)}
    `;
  }

  // ================= (III) WATER-INJECTION ICE PACK SERIES (MODELS #1–5) =================
  if (filterType === 'all' || filterType === 'water') {
    html += `
      <div class="col-span-full rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-950/50 via-[#0B1822] to-[#0A101C] p-5 sm:p-6 shadow-xl mb-6 ${filterType === 'all' ? 'mt-8' : ''}">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-xs font-black text-slate-950 shadow-sm">3</span>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-white font-display">
                ${'(III) Water-Injection Ice Pack Series (#1–5)'}
              </h4>
              <p class="text-[11px] text-emerald-300 font-mono mt-0.5">
                ${'Flat shipment with pre-loaded dry SAP · One-way inlet valve · 60s auto-gelling without sealers'}
              </p>
            </div>
          </div>
          <span class="rounded-full bg-emerald-950/90 border border-emerald-500/40 px-3.5 py-1 text-xs font-mono font-bold text-emerald-300 shadow-sm">
            ${'5 Production Models'}
          </span>
        </div>
      </div>

      <!-- Water-Injection Group: Models #1 to #5 (1 Master Photo + Ordered Specifications) -->
      ${renderMasterGroupSection(extendedCatalogData.waterInjection.group1, "Water-Injection Ice Pack", isZh)}
    `;
  }

  // ================= (IV) INSTANT COOLING ICE PACK SERIES (MODEL #1 · SLD-160) =================
  if (filterType === 'all' || filterType === 'instant') {
    html += `
      <div class="col-span-full rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/50 via-[#130E24] to-[#0A101C] p-5 sm:p-6 shadow-xl mb-6 ${filterType === 'all' ? 'mt-8' : ''}">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400 text-xs font-black text-slate-950 shadow-sm">4</span>
            <div>
              <h4 class="text-base sm:text-lg font-bold text-white font-display">
                ${'(IV) Instant Cooling Ice Pack Series (SLD-160)'}
              </h4>
              <p class="text-[11px] text-purple-300 font-mono mt-0.5">
                ${'Medical-grade PE film · Single-use, do not reuse · Crush to activate · Rapid cooling in seconds'}
              </p>
            </div>
          </div>
          <span class="rounded-full bg-purple-950/90 border border-purple-500/40 px-3.5 py-1 text-xs font-mono font-bold text-purple-300 shadow-sm">
            ${'1 Production Model'}
          </span>
        </div>
      </div>

      <!-- Instant Cooling Group: Model #1 (1 Master Photo + Ordered Specifications) -->
      ${renderMasterGroupSection(extendedCatalogData.instantCooling.group1, "Instant Cooling Ice Pack", isZh)}
    `;
  }

  mount.innerHTML = html;
}

window.filterGelModels = function(type) {
  renderGelModelsGrid(type);
};

// Render Master Upload Slots & Product Models for all extended catalog sections
function renderAllExtendedCatalogSlots() {
  // 1. EPP Foam Boxes
  const eppHero = document.getElementById("eppHeroSlotMount");
  if (eppHero) eppHero.innerHTML = getVectorPlaceholder(extendedCatalogData.epp.hero.slotId, extendedCatalogData.epp.hero.label, true);
  const eppSpecs = document.getElementById("eppSpecsSlotMount");
  if (eppSpecs) eppSpecs.innerHTML = getVectorPlaceholder(extendedCatalogData.epp.specs.slotId, extendedCatalogData.epp.specs.label, false);
  const eppAcc = document.getElementById("eppAccSlotMount");
  if (eppAcc) eppAcc.innerHTML = getVectorPlaceholder(extendedCatalogData.epp.acc.slotId, extendedCatalogData.epp.acc.label, false);
  const eppModels = document.getElementById("eppModelsMount");
  if (eppModels) {
    eppModels.innerHTML = extendedCatalogData.epp.models.map(m => renderExtendedModelCard(m, "EPP Foam Box")).join('');
  }

  // 2. PCM Rigid Bricks
  const pcmHero = document.getElementById("pcmHeroSlotMount");
  if (pcmHero) pcmHero.innerHTML = getVectorPlaceholder(extendedCatalogData.pcm.hero.slotId, extendedCatalogData.pcm.hero.label, true);
  const pcmSpecs = document.getElementById("pcmSpecsSlotMount");
  if (pcmSpecs) pcmSpecs.innerHTML = getVectorPlaceholder(extendedCatalogData.pcm.specs.slotId, extendedCatalogData.pcm.specs.label, false);
  const pcmAcc = document.getElementById("pcmAccSlotMount");
  if (pcmAcc) pcmAcc.innerHTML = getVectorPlaceholder(extendedCatalogData.pcm.acc.slotId, extendedCatalogData.pcm.acc.label, false);
  renderPcmModelsGrid(window.currentPcmFilter || 'all');

  // 3. Water-Activated Cooling Sheets
  const waterHero = document.getElementById("waterHeroSlotMount");
  if (waterHero) waterHero.innerHTML = getVectorPlaceholder(extendedCatalogData.water.hero.slotId, extendedCatalogData.water.hero.label, true);
  const waterSpecs = document.getElementById("waterSpecsSlotMount");
  if (waterSpecs) waterSpecs.innerHTML = getVectorPlaceholder(extendedCatalogData.water.specs.slotId, extendedCatalogData.water.specs.label, false);
  const waterAcc = document.getElementById("waterAccSlotMount");
  if (waterAcc) waterAcc.innerHTML = getVectorPlaceholder(extendedCatalogData.water.acc.slotId, extendedCatalogData.water.acc.label, false);
  const waterModels = document.getElementById("waterModelsMount");
  if (waterModels) {
    waterModels.innerHTML = extendedCatalogData.water.models.map(m => renderExtendedModelCard(m, "Water-Activated Cooling Sheet")).join('');
  }

  // 4. Instant Cold Packs
  const instantHero = document.getElementById("instantHeroSlotMount");
  if (instantHero) instantHero.innerHTML = getVectorPlaceholder(extendedCatalogData.instant.hero.slotId, extendedCatalogData.instant.hero.label, true);
  const instantSpecs = document.getElementById("instantSpecsSlotMount");
  if (instantSpecs) instantSpecs.innerHTML = getVectorPlaceholder(extendedCatalogData.instant.specs.slotId, extendedCatalogData.instant.specs.label, false);
  const instantAcc = document.getElementById("instantAccSlotMount");
  if (instantAcc) instantAcc.innerHTML = getVectorPlaceholder(extendedCatalogData.instant.acc.slotId, extendedCatalogData.instant.acc.label, false);
  const instantModels = document.getElementById("instantModelsMount");
  if (instantModels) {
    instantModels.innerHTML = extendedCatalogData.instant.models.map(m => renderExtendedModelCard(m, "Instant Cold Pack")).join('');
  }

  // 5. Gel Ice Packs, Self-Absorbing & Water-Injection Lineups
  renderGelModelsGrid(window.currentGelFilter || 'all');

  // 6. Trolley & Outdoor Mobile Refrigerated Series (Dedicated Upload Slots)
  const trolleyHP28 = document.getElementById("trolleyHP28LGSlotMount");
  if (trolleyHP28) trolleyHP28.innerHTML = getVectorPlaceholder("img-trolley-hp28lg", "HP-28LG (440 × 315 × 410 mm)", false);
  const trolleyHP38 = document.getElementById("trolleyHP38LGSlotMount");
  if (trolleyHP38) trolleyHP38.innerHTML = getVectorPlaceholder("img-trolley-hp38lg", "HP-38LG (480 × 300 × 460 mm)", false);
  const trolleyHP65 = document.getElementById("trolleyHP65LGSlotMount");
  if (trolleyHP65) trolleyHP65.innerHTML = getVectorPlaceholder("img-trolley-hp65lg", "HP-65LG (490 × 450 × 510 mm)", false);
}

// Global window exposure
window.getVectorPlaceholder = getVectorPlaceholder;
window.handleImageFile = handleImageFile;
window.removeStoredImage = removeStoredImage;
window.clearAllUploadedImages = clearAllUploadedImages;
window.renderCoolerCatalog = renderCoolerCatalog;
window.renderAllExtendedCatalogSlots = renderAllExtendedCatalogSlots;
window.renderPcmModelsGrid = renderPcmModelsGrid;
window.renderGelModelsGrid = renderGelModelsGrid;

// Auto-initialize when DOM ready
document.addEventListener("DOMContentLoaded", () => {
  const initialLang = getCatalogLang();
  setCatalogLanguage(initialLang);
  updatePhotoCountBadge();
  initCatalogQuickSearch();
  initCatalogImagePersistence();
});

// Also trigger persistence loader immediately in case script runs after DOM ready
if (document.readyState === "complete" || document.readyState === "interactive") {
  initCatalogImagePersistence();
}

// ============================================================================
// HIGH-PRECISION QUICK SEARCH & BILINGUAL CATALOG NAVIGATION ENGINE
// ============================================================================

let CATALOG_SEARCH_INDEX = [];

function buildCatalogSearchIndex() {
  const index = [];

  // 1. Cooler Box Series
  if (typeof COOLER_CATALOG_DATA !== "undefined" && COOLER_CATALOG_DATA.seriesList) {
    COOLER_CATALOG_DATA.seriesList.forEach(series => {
      series.models.forEach(m => {
        const idSafe = "product-model-" + m.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
        index.push({
          id: idSafe,
          name: m.name,
          capacity: m.capacity,
          seriesId: series.id,
          seriesTitle: series.name || series.id,
          categoryEn: "Cooler Box",
          categoryZh: "Cooler Boxes",
          categoryKey: "cooler-boxes",
          dim: m.extDim || "",
          weight: m.weight || "",
          hold: m.hold || "",
          app: m.app || "",
          sectionId: "cooler-box-catalog"
        });
      });
    });
  }

  // 2. Trolley Series (HP-28LG, HP-38LG, HP-65LG)
  const trolleyList = [
    { name: "HP-28LG Trolley Mobile Cooler Box", code: "img-trolley-hp28lg", cap: "28 Liters", dim: "440 × 315 × 410 mm" },
    { name: "HP-38LG Trolley Mobile Cooler Box", code: "img-trolley-hp38lg", cap: "38 Liters", dim: "480 × 300 × 460 mm" },
    { name: "HP-65LG Trolley Heavy-Duty Cooler Box", code: "img-trolley-hp65lg", cap: "65 Liters", dim: "490 × 450 × 510 mm" }
  ];
  trolleyList.forEach(tm => {
    index.push({
      id: tm.code,
      name: tm.name,
      capacity: tm.cap,
      categoryEn: "Trolley Cooler",
      categoryZh: "Trolley Cooler Boxes",
      categoryKey: "cooler-boxes",
      dim: tm.dim,
      weight: "",
      hold: "Telescopic Handle + Wheels",
      app: "Mobile transport / Outdoor distribution",
      sectionId: "trolley"
    });
  });

  // 3. Extended Categories (EPP, PCM, Gel, Self-Absorbing, Water-Injection, Instant)
  if (typeof extendedCatalogData !== "undefined") {
    // 3a. EPP Foam Boxes
    if (extendedCatalogData.epp && extendedCatalogData.epp.models) {
      extendedCatalogData.epp.models.forEach(m => {
        const idCode = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, "-");
        index.push({
          id: "product-model-" + idCode,
          name: m.name,
          capacity: m.capacity || m.tare || "",
          categoryEn: "EPP Foam Box",
          categoryZh: "EPP Foam Boxes",
          categoryKey: "epp",
          dim: m.extDim || "",
          weight: m.tare || "",
          hold: m.hold || "",
          app: m.app || "",
          sectionId: "epp"
        });
      });
    }

    // 3b. PCM Rigid Bricks
    if (extendedCatalogData.pcm && extendedCatalogData.pcm.models) {
      extendedCatalogData.pcm.models.forEach(m => {
        const idCode = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, "-");
        index.push({
          id: "product-model-" + idCode,
          name: m.name,
          capacity: m.capacity || m.tare || "",
          categoryEn: "PCM Rigid Brick",
          categoryZh: "PCM Ice Bricks",
          categoryKey: "pcm",
          dim: m.extDim || "",
          weight: m.tare || "",
          hold: m.hold || "",
          app: m.app || "",
          sectionId: "pcm"
        });
      });
    }

    // 3c. Gel Ice Packs (#1–13)
    if (extendedCatalogData.gel && extendedCatalogData.gel.models) {
      extendedCatalogData.gel.models.forEach(m => {
        const idCode = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, "-");
        index.push({
          id: "product-model-" + idCode,
          name: m.name,
          capacity: m.capacity || m.tare || "",
          categoryEn: "Gel Ice Pack",
          categoryZh: "Gel Ice Packs",
          categoryKey: "gel-packs",
          dim: m.extDim || "",
          weight: m.tare || "",
          hold: m.hold || "",
          app: m.app || "",
          sectionId: "gel-packs"
        });
      });
    }

    // 3d. Self-Absorbing Ice Packs (ZXD & SCX Series)
    if (extendedCatalogData.selfAbsorbing) {
      ['group1', 'group2', 'group3'].forEach(gKey => {
        const grp = extendedCatalogData.selfAbsorbing[gKey];
        if (grp && grp.models) {
          grp.models.forEach(m => {
            const idCode = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, "-");
            index.push({
              id: "product-model-" + idCode,
              name: `${m.modelNo} (${m.name})`,
              capacity: m.cells || m.hydrated || m.capacity || "",
              categoryEn: "Self-Absorbing Sheet",
              categoryZh: "Water-Activated Sheets",
              categoryKey: "gel-packs",
              dim: m.extDim || "",
              weight: m.hydrated || m.dry || "",
              hold: "",
              app: m.app || "",
              sectionId: "gel-packs"
            });
          });
        }
      });
    }

    // 3e. Water-Injection Ice Packs (ZSD Series)
    if (extendedCatalogData.waterInjection && extendedCatalogData.waterInjection.group1) {
      extendedCatalogData.waterInjection.group1.models.forEach(m => {
        const idCode = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, "-");
        index.push({
          id: "product-model-" + idCode,
          name: `${m.modelNo} (${m.name})`,
          capacity: m.capacity || m.hydrated || "",
          categoryEn: "Water-Injection Pack",
          categoryZh: "Water-Injection Packs",
          categoryKey: "gel-packs",
          dim: m.extDim || "",
          weight: m.hydrated || "",
          hold: "",
          app: m.app || "",
          sectionId: "gel-packs"
        });
      });
    }

    // 3f. Instant Cooling Ice Packs (SLD Series)
    if (extendedCatalogData.instantCooling && extendedCatalogData.instantCooling.group1) {
      extendedCatalogData.instantCooling.group1.models.forEach(m => {
        const idCode = (m.modelNo || m.name).toLowerCase().replace(/[^a-z0-9]/g, "-");
        index.push({
          id: "product-model-" + idCode,
          name: `${m.modelNo} (${m.name})`,
          capacity: m.capacity || m.tare || "",
          categoryEn: "Instant Cold Pack",
          categoryZh: "Instant Cold Packs",
          categoryKey: "gel-packs",
          dim: m.extDim || "",
          weight: m.tare || "",
          hold: m.hold || "",
          app: m.app || "",
          sectionId: "gel-packs"
        });
      });
    }
  }

  CATALOG_SEARCH_INDEX = index;
}

// Accurate fuzzy scoring algorithm
function scoreCatalogProduct(p, query) {
  const qRaw = query.trim().toLowerCase();
  if (!qRaw) return 0;
  const qClean = qRaw.replace(/[^a-z0-9]/g, "");
  if (!qClean) return 0;

  const nameClean = (p.name || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const capClean = (p.capacity || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const nameRaw = (p.name || "").toLowerCase();
  const capRaw = (p.capacity || "").toLowerCase();
  const appRaw = (p.app || "").toLowerCase();
  const catEn = (p.categoryEn || "").toLowerCase();
  const catZh = (p.categoryZh || "").toLowerCase();

  let score = 0;

  // 1. Exact clean match
  if (nameClean === qClean) {
    score += 500;
  }
  // 2. Exact match with trailing "l" (e.g. user typed "hp-300", model is "hp-300l")
  else if (nameClean === qClean + "l" || nameClean === qClean + "tl") {
    score += 450;
  }
  // 3. Name starts with query
  else if (nameClean.startsWith(qClean)) {
    score += 350;
  }
  // 4. Name contains query
  else if (nameClean.includes(qClean)) {
    score += 250;
  }

  // 5. Numerical accuracy: check extracted numbers
  const qNums = qRaw.match(/\d+/g);
  const pNums = nameRaw.match(/\d+/g);
  if (qNums && pNums) {
    const qMainNum = qNums[0];
    const pMainNum = pNums[0];
    if (qMainNum === pMainNum) {
      score += 200; // Same core model number! (e.g. 300 === 300, not 30)
    }
  }

  // 6. Capacity matching
  if (capClean === qClean || capClean.startsWith(qClean)) {
    score += 220;
  } else if (capClean.includes(qClean)) {
    score += 140;
  }

  // 7. Substring matches
  if (nameRaw.includes(qRaw)) score += 80;
  if (capRaw.includes(qRaw)) score += 60;
  if (appRaw.includes(qRaw)) score += 30;
  if (catEn.includes(qRaw) || catZh.includes(qRaw)) score += 20;

  return score;
}

// Language helpers
function getCatalogLang() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramLang = urlParams.get("lang");
    if (paramLang === "zh" || paramLang === "en") {
      try { localStorage.setItem("coldpackpro_lang", paramLang); } catch(e) {}
      return paramLang;
    }
    const stored = localStorage.getItem("coldpackpro_lang");
    if (stored === "zh" || stored === "en") return stored;
  } catch(e) {}
  const htmlLang = document.documentElement.lang;
  if (htmlLang && htmlLang.startsWith("zh")) return "zh";
  return "en";
}

function setCatalogLanguage(lang) {
  const targetLang = (lang === "zh" || lang === "en") ? lang : "en";
  try {
    localStorage.setItem("coldpackpro_lang", targetLang);
  } catch(e) {}
  document.documentElement.lang = targetLang;

  if (typeof applyCatalogLanguage === "function") {
    applyCatalogLanguage(targetLang);
  }

  updateCatalogLangUI(targetLang);

  const activePill = document.querySelector(".filter-pill.active-pill");
  const filterId = activePill ? activePill.getAttribute("data-filter") || "all" : "all";
  const searchInput = document.getElementById("coolerSearchInput");
  const q = searchInput ? searchInput.value : "";
  renderCoolerCatalog(filterId, q);

  if (typeof renderAllExtendedCatalogSlots === "function") {
    renderAllExtendedCatalogSlots();
  }

  // Refresh isolated category indicator and bottom switcher texts
  if (typeof window.switchCatalogCategory === "function" && typeof window.getCurrentCatalogCategory === "function") {
    window.switchCatalogCategory(window.getCurrentCatalogCategory(), false);
  }
}

function updateCatalogLangUI(lang) {
  const isZh = lang === "zh";
  const btnZh = document.getElementById("catalog-lang-btn-zh");
  const btnEn = document.getElementById("catalog-lang-btn-en");
  const searchInput = document.getElementById("quickSearchInput");
  const clearBtn = document.getElementById("quickSearchClearBtn");

  if (btnZh && btnEn) {
    if (isZh) {
      btnZh.className = "rounded-full px-2.5 py-1 text-[11px] font-bold transition flex items-center gap-1 bg-cyan-950 border border-cyan-500/40 text-cyan-300 shadow-sm";
      btnEn.className = "rounded-full px-2.5 py-1 text-[11px] font-semibold transition text-slate-400 hover:text-white";
    } else {
      btnEn.className = "rounded-full px-2.5 py-1 text-[11px] font-bold transition flex items-center gap-1 bg-cyan-950 border border-cyan-500/40 text-cyan-300 shadow-sm";
      btnZh.className = "rounded-full px-2.5 py-1 text-[11px] font-semibold transition text-slate-400 hover:text-white";
    }
  }

  if (searchInput) {
    searchInput.placeholder = "Search model or capacity (e.g. HP-300, 65L)...";
    searchInput.title = "Search model or capacity to locate product";
  }

  if (clearBtn) {
    clearBtn.title = "Clear search";
  }

  // If popover is currently visible, re-render results
  if (searchInput && searchInput.value.trim()) {
    handleQuickSearchInput(searchInput.value);
  }
}

// Live search input handler
function handleQuickSearchInput(val) {
  const popover = document.getElementById("quickSearchResultsPopover");
  const clearBtn = document.getElementById("quickSearchClearBtn");
  if (!popover) return;

  const query = (val || "").trim();
  if (clearBtn) {
    clearBtn.classList.toggle("hidden", query.length === 0);
    clearBtn.classList.toggle("flex", query.length > 0);
  }

  if (!query) {
    popover.classList.add("hidden");
    popover.innerHTML = "";
    return;
  }

  if (CATALOG_SEARCH_INDEX.length === 0) {
    buildCatalogSearchIndex();
  }

  const isZh = getCatalogLang() === "zh";

  // Score & sort all products
  const scored = CATALOG_SEARCH_INDEX
    .map(p => ({ product: p, score: scoreCatalogProduct(p, query) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length === 0) {
    popover.innerHTML = `
      <div class="px-4 py-5 text-center bg-[#0C1425] rounded-xl border border-slate-700/80 shadow-md">
        <div class="text-xs font-semibold text-slate-200">
          ${`No model found for <span class="font-bold text-cyan-300">"${query}"</span>`}
        </div>
        <div class="mt-1.5 text-[11px] text-slate-400">
          ${"Try searching model code like 250, HP-300, XLD, XLH, or capacity like 65L, 500g"}
        </div>
      </div>
    `;
    popover.classList.remove("hidden");
    return;
  }

  const topItems = scored.slice(0, 7);

  let html = `
    <div class="flex items-center justify-between border-b border-cyan-500/30 bg-[#070E1B] px-3.5 py-2.5 rounded-t-xl mb-2">
      <div class="flex items-center gap-2">
        <span class="inline-flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
        <span class="text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
          ${'MATCHING PRODUCTS (CLICK TO JUMP)'}
        </span>
      </div>
      <span class="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/40">
        ${scored.length} ${'Matches'}
      </span>
    </div>
    <div class="space-y-1.5">
  `;

  topItems.forEach((item, idx) => {
    const p = item.product;
    const catLabel = isZh ? p.categoryZh : p.categoryEn;
    const isTop = idx === 0;

    let badgeClass = 'bg-cyan-950 text-cyan-300 border-cyan-500/40';
    if (p.categoryKey === 'gel-packs') {
      badgeClass = 'bg-cyan-950 text-cyan-300 border-cyan-400/50';
    } else if (p.categoryKey === 'pcm') {
      badgeClass = 'bg-blue-950 text-blue-300 border-blue-400/50';
    } else if (p.categoryKey === 'epp') {
      badgeClass = 'bg-emerald-950 text-emerald-300 border-emerald-400/50';
    } else if (p.categoryKey === 'cooler-boxes') {
      badgeClass = 'bg-indigo-950 text-indigo-300 border-indigo-400/50';
    }

    html += `
      <div
        onclick="jumpToCatalogProduct('${p.id}', '${p.sectionId}', '${p.categoryKey || ''}')"
        class="group flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 transition-all duration-200 bg-[#121B2F] hover:bg-[#1B2845] border border-slate-700/80 hover:border-cyan-400 shadow-sm hover:shadow-cyan-500/20 ${isTop ? 'ring-1 ring-cyan-400/40' : ''}"
      >
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2 flex-wrap mb-1">
            <span class="truncate text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
              ${p.name}
            </span>
            <span class="rounded-md px-2 py-0.5 text-[9px] font-bold border shrink-0 ${badgeClass}">
              ${catLabel}
            </span>
          </div>
          <div class="flex items-center gap-2 text-[11px] font-mono">
            <span class="text-amber-400 font-bold bg-amber-950/80 px-1.5 py-0.2 rounded border border-amber-500/30">
              ${p.capacity}
            </span>
            ${p.dim ? `<span class="truncate text-slate-300 font-medium">• ${p.dim}</span>` : ''}
          </div>
        </div>
        <div class="shrink-0 flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-200">
          <svg class="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  popover.innerHTML = html;
  popover.classList.remove("hidden");
}

// Navigate and highlight targeted product with multi-tier category routing
function jumpToCatalogProduct(elementId, sectionId, categoryKey) {
  const popover = document.getElementById("quickSearchResultsPopover");
  if (popover) popover.classList.add("hidden");

  // Determine category key
  let catKey = categoryKey;
  if (!catKey) {
    const idLower = (elementId || "").toLowerCase();
    if (sectionId === 'epp' || idLower.includes('epp')) {
      catKey = 'epp';
    } else if (sectionId === 'pcm' || idLower.includes('pcm') || idLower.includes('xlh')) {
      catKey = 'pcm';
    } else if (sectionId === 'gel-packs' || idLower.includes('xld') || idLower.includes('nwip') || idLower.includes('zhb') || idLower.includes('zxd') || idLower.includes('scx') || idLower.includes('zsd') || idLower.includes('sld') || idLower.includes('gel')) {
      catKey = 'gel-packs';
    } else if (sectionId === 'trolley' || sectionId === 'cooler-box-catalog') {
      catKey = 'cooler-boxes';
    } else {
      catKey = 'cooler-boxes';
    }
  }

  // 1. Switch active category view in category-navigator so the section is visible
  if (typeof window.switchCatalogCategory === 'function') {
    window.switchCatalogCategory(catKey, false);
  }

  // 2. Reset filters inside category to 'all' so the card is rendered and not filtered out
  if (catKey === 'gel-packs' && typeof window.filterGelModels === 'function') {
    window.filterGelModels('all');
  }
  if (catKey === 'pcm' && typeof window.filterPcmModels === 'function') {
    window.filterPcmModels('all');
  }
  if (catKey === 'cooler-boxes' && typeof window.setCoolerFilter === 'function') {
    window.setCoolerFilter('all');
  }

  // 3. Perform smooth scrolling with fallback lookup
  function executeScroll() {
    let targetEl = document.getElementById(elementId);
    if (!targetEl) {
      const cleanCode = elementId.replace(/^product-model-/, '').toLowerCase();
      targetEl = document.getElementById("product-model-m-" + cleanCode) ||
                 document.querySelector(`[id="${elementId}"]`) ||
                 document.querySelector(`[id*="${cleanCode}"]`) ||
                 document.querySelector(`[data-model-name*="${cleanCode}" i]`) ||
                 document.querySelector(`[data-model-code*="${cleanCode}" i]`);
    }

    if (!targetEl && sectionId) {
      targetEl = document.getElementById(sectionId);
    }

    if (targetEl) {
      const headerOffset = 95;
      const elementPos = targetEl.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });

      // Highlight target element with high-visibility cyan ring and glow
      targetEl.classList.add("transition-all", "duration-500");
      targetEl.style.outline = "3px solid #22d3ee";
      targetEl.style.outlineOffset = "4px";
      targetEl.style.boxShadow = "0 0 35px rgba(6, 182, 212, 0.7), 0 0 15px rgba(34, 211, 238, 0.9)";

      setTimeout(() => {
        targetEl.style.outline = "";
        targetEl.style.outlineOffset = "";
        targetEl.style.boxShadow = "";
      }, 3500);

      // Toast notification feedback
      const isZh = typeof getCatalogLang === "function" && getCatalogLang() === "zh";
      const foundItem = typeof CATALOG_SEARCH_INDEX !== "undefined" ? CATALOG_SEARCH_INDEX.find(p => p.id === elementId) : null;
      const label = foundItem ? `${foundItem.name} (${foundItem.capacity || ''})` : elementId.replace("product-model-", "").toUpperCase();
      showCatalogToast(`✓ Located model details: ${label}`);

      if (history.pushState) {
        history.pushState(null, null, "#" + elementId);
      }
    }
  }

  // Double RAF + timeout ensures layout has unhidden before scrolling
  requestAnimationFrame(() => {
    setTimeout(executeScroll, 120);
  });
}

// Toast notification helper
function showCatalogToast(msg) {
  const toast = document.getElementById("catalogToast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("opacity-0", "translate-y-20", "pointer-events-none");
  toast.classList.add("opacity-100", "translate-y-0");

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-20", "pointer-events-none");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 2800);
}

// Clear search input
function clearQuickSearch() {
  const input = document.getElementById("quickSearchInput");
  const popover = document.getElementById("quickSearchResultsPopover");
  const clearBtn = document.getElementById("quickSearchClearBtn");
  if (input) {
    input.value = "";
    input.focus();
  }
  if (popover) {
    popover.classList.add("hidden");
    popover.innerHTML = "";
  }
  if (clearBtn) {
    clearBtn.classList.add("hidden");
    clearBtn.classList.remove("flex");
  }
}

// Set up listeners for search input & keyboard navigation
function initCatalogQuickSearch() {
  buildCatalogSearchIndex();

  const input = document.getElementById("quickSearchInput");
  const popover = document.getElementById("quickSearchResultsPopover");

  if (!input) return;

  // Real-time input search
  input.addEventListener("input", (e) => {
    handleQuickSearchInput(e.target.value);
  });

  // Enter key jumps to top match immediately
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;

      const scored = CATALOG_SEARCH_INDEX
        .map(p => ({ product: p, score: scoreCatalogProduct(p, val) }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);

      if (scored.length > 0) {
        const top = scored[0].product;
        jumpToCatalogProduct(top.id, top.sectionId, top.categoryKey);
      }
    } else if (e.key === "Escape") {
      if (popover) popover.classList.add("hidden");
    }
  });

  // Close popover when clicking outside
  document.addEventListener("click", (e) => {
    const container = document.getElementById("quickSearchContainer");
    if (container && !container.contains(e.target)) {
      if (popover) popover.classList.add("hidden");
    }
  });

  // Focus re-opens if query exists
  input.addEventListener("focus", () => {
    if (input.value.trim()) {
      handleQuickSearchInput(input.value);
    }
  });

  // Initialize language UI
  updateCatalogLangUI(getCatalogLang());
}

// Global window exposure
window.setCatalogLanguage = setCatalogLanguage;
window.handleQuickSearchInput = handleQuickSearchInput;
window.jumpToCatalogProduct = jumpToCatalogProduct;
window.jumpToModel = function(modelId) {
  const targetId = modelId && modelId.startsWith("product-model-") ? modelId : ("product-model-" + modelId);
  jumpToCatalogProduct(targetId, "cooler-box-catalog");
};
window.clearQuickSearch = clearQuickSearch;
window.initCatalogQuickSearch = initCatalogQuickSearch;
window.renderModelBadgeLink = renderModelBadgeLink;

// Handle deep-linked model hash on initial page load (e.g. #product-model-hp-6l) and hashchange
function handleHashDeepLink() {
  if (!window.location.hash) return;
  const hash = window.location.hash.substring(1).toLowerCase();
  if (hash.startsWith("product-model-") || hash.startsWith("hp-") || hash.startsWith("xld-") || hash.startsWith("xlh-") || hash.startsWith("epp-") || hash.startsWith("gp-") || hash.startsWith("cs-") || hash.startsWith("icp-")) {
    let targetId = hash;
    if (!targetId.startsWith("product-model-")) {
      targetId = "product-model-" + targetId;
    }
    const found = typeof CATALOG_SEARCH_INDEX !== "undefined" ? CATALOG_SEARCH_INDEX.find(p => p.id === targetId || p.id.includes(targetId.replace("product-model-", ""))) : null;
    const secId = found ? found.sectionId : "cooler-box-catalog";
    setTimeout(() => {
      jumpToCatalogProduct(targetId, secId);
    }, 150);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(handleHashDeepLink, 400);
});

window.addEventListener("hashchange", handleHashDeepLink);
