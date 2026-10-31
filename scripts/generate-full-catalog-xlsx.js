const path = require('path');
const fs = require('fs');
const ExcelJS = require('exceljs');
const sharp = require('sharp');

async function createWatermarkImageBuffer() {
  try {
    const svg = `
      <svg width="600" height="350" xmlns="http://www.w3.org/2000/svg">
        <text x="50" y="180" font-family="Arial, Helvetica, sans-serif" font-weight="900" font-size="32" fill="#0284C7" fill-opacity="0.10" transform="rotate(-30 300 175)" letter-spacing="3">
          COLDPACKPRO.COM
        </text>
        <text x="80" y="215" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="13" fill="#0369A1" fill-opacity="0.08" transform="rotate(-30 300 175)" letter-spacing="2">
          OFFICIAL EXPORT CATALOG · WATERMARKED
        </text>
      </svg>
    `;
    return await sharp(Buffer.from(svg)).png().toBuffer();
  } catch (err) {
    console.warn('[Watermark] Failed to render SVG watermark buffer:', err.message);
    return null;
  }
}

async function generateFullCatalogXlsx() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'ColdPackPro (coldpackpro.com) - Guangzhou Qtop Cold Chain Sciences Co.,Ltd.';
  workbook.lastModifiedBy = 'ColdPackPro (coldpackpro.com)';
  workbook.company = 'Guangzhou Qtop Cold Chain Sciences Co.,Ltd. · coldpackpro.com';
  workbook.title = 'ColdPackPro Official Export Product Catalog 2026 - Watermarked';
  workbook.subject = 'Watermarked Specification Spreadsheet · coldpackpro.com';
  workbook.keywords = 'coldpackpro.com, watermarked catalog, cold chain packaging, export catalog, coolers, ice packs, PCM bricks';
  workbook.category = 'Cold Chain Packaging Specifications';
  workbook.created = new Date();
  workbook.modified = new Date();

  // Create tiled watermark background image for sheets
  let watermarkImageId = null;
  try {
    const watermarkBuf = await createWatermarkImageBuffer();
    if (watermarkBuf) {
      watermarkImageId = workbook.addImage({
        buffer: watermarkBuf,
        extension: 'png'
      });
    }
  } catch (wmErr) {
    console.warn('[Watermark] addImage error:', wmErr.message);
  }

  const BASE_URL = 'https://coldpackpro.com/catalog';

  // Common styling palettes
  const NAVY_HEADER_FILL = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF0A192F' }
  };
  const BLUE_SUBHEADER_FILL = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF0F3A66' }
  };
  const ACCENT_BAR_FILL = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF0284C7' }
  };
  const ZEBRA_LIGHT_FILL = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFF8FAFC' }
  };
  const WHITE_FILL = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFFFFFFF' }
  };
  const HIGHLIGHT_ROW_FILL = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFF0F9FF' }
  };

  const THIN_BORDER = {
    top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
    left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
    bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
    right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
  };

  const HEADER_FONT = {
    name: 'Calibri',
    size: 11,
    bold: true,
    color: { argb: 'FFFFFFFF' }
  };

  const BLUE_LINK_FONT = {
    name: 'Calibri',
    size: 11,
    bold: true,
    color: { argb: 'FF0066CC' }, // Professional bright hyperlink blue
    underline: true
  };

  const REGULAR_FONT = {
    name: 'Calibri',
    size: 10,
    color: { argb: 'FF1E293B' }
  };

  const MUTED_FONT = {
    name: 'Calibri',
    size: 9.5,
    color: { argb: 'FF64748B' }
  };

  // Complete catalog database of products
  const products = [
    // --- 1.1 Medical Coolers ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-6L',
      id: 'product-model-hp-6l',
      capacity: '6 Liters',
      extDim: '320 × 230 × 240 mm',
      intDim: '260 × 170 × 160 mm',
      weight: '1.8 kg',
      hold: '24 – 36h (with PCMs)',
      temp: '2°C to 8°C / Frozen',
      material: 'PU Rigid Foam + Food-Grade PP Shell',
      app: 'UN2814 medical & vaccine transport, compact clinical blood samples, insulin tubes.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-12L',
      id: 'product-model-hp-12l',
      capacity: '12 Liters',
      extDim: '390 × 280 × 290 mm',
      intDim: '320 × 210 × 210 mm',
      weight: '2.6 kg',
      hold: '36 – 48h',
      temp: '2°C to 8°C',
      material: 'PU Foam + Heavy-Duty HDPE Shell',
      app: 'Hospital branch distribution, diagnostic kits, pathology transfer & lab reagents.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-17L',
      id: 'product-model-hp-17l',
      capacity: '17 Liters',
      extDim: '440 × 310 × 320 mm',
      intDim: '360 × 240 × 240 mm',
      weight: '3.2 kg',
      hold: '48 – 60h',
      temp: '2°C to 8°C / -20°C',
      material: 'Closed-Cell PU Core + Airtight Seal',
      app: 'Medical courier distribution, blood plasma, biological specimen transport.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-20L',
      id: 'product-model-hp-20l',
      capacity: '20 Liters',
      extDim: '470 × 330 × 340 mm',
      intDim: '390 × 260 × 260 mm',
      weight: '3.8 kg',
      hold: '48 – 60h',
      temp: '2°C to 8°C',
      material: 'PU Foam + Food-Contact LLDPE / PP',
      app: 'Hospital pharmacy dispatch, regional health station deliveries, biologics.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-33L',
      id: 'product-model-hp-33l',
      capacity: '33 Liters',
      extDim: '540 × 370 × 370 mm',
      intDim: '460 × 300 × 290 mm',
      weight: '5.1 kg',
      hold: '60 – 72h',
      temp: '2°C to 8°C / -25°C',
      material: 'High-Density PU + Stainless Latches',
      app: 'Medium bulk bio-pharma logistics, multi-day clinical shipments, plasma.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-35L',
      id: 'product-model-hp-35l',
      capacity: '35 Liters',
      extDim: '560 × 380 × 385 mm',
      intDim: '475 × 310 × 300 mm',
      weight: '5.5 kg',
      hold: '72 – 84h',
      temp: '2°C to 8°C Strict',
      material: 'PU Core + Real-time Temp Sensor Port',
      app: 'Partitioned vaccine box, laboratory transfer, pharmaceutical air freight.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-50L',
      id: 'product-model-hp-50l',
      capacity: '50 Liters',
      extDim: '640 × 420 × 420 mm',
      intDim: '540 × 340 × 330 mm',
      weight: '7.2 kg',
      hold: '72 – 96h',
      temp: '2°C to 8°C / -18°C',
      material: 'Thick PU Core + Dual Silicone Gaskets',
      app: 'Bulk biopharmaceutical inter-city distribution, hospital cold room buffer.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.1 Medical & Vaccine Cold Chain',
      model: 'HP-65L',
      id: 'product-model-hp-65l',
      capacity: '65 Liters',
      extDim: '710 × 450 × 440 mm',
      intDim: '600 × 370 × 350 mm',
      weight: '9.0 kg',
      hold: '96 – 120h',
      temp: '2°C to 8°C / -20°C',
      material: 'Molded PU Shell + Stack Guides',
      app: 'Stackable vehicle transit, bulk medicine, blood center dispatch, vaccines.'
    },

    // --- 1.2 Fresh Delivery ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.2 Commercial Fresh Delivery',
      model: 'HP-8L',
      id: 'product-model-hp-8l',
      capacity: '8 Liters',
      extDim: '340 × 240 × 260 mm',
      intDim: '280 × 180 × 180 mm',
      weight: '1.9 kg',
      hold: '4 – 8h transit',
      temp: 'Chilled / Fresh',
      material: 'Lightweight PP / PU Composite',
      app: 'Scooter rear rack, courier fresh delivery, chocolates, small bakery parcels.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.2 Commercial Fresh Delivery',
      model: 'HP-14L',
      id: 'product-model-hp-14l',
      capacity: '14 Liters',
      extDim: '410 × 290 × 300 mm',
      intDim: '340 × 220 × 220 mm',
      weight: '2.7 kg',
      hold: '6 – 10h transit',
      temp: 'Chilled / Fresh',
      material: 'High-Impact Polypropylene + PU',
      app: 'Meal delivery couriers with shoulder strap, chilled retail beef cuts, fresh milk.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.2 Commercial Fresh Delivery',
      model: 'HP-28L',
      id: 'product-model-hp-28l',
      capacity: '28 Liters',
      extDim: '500 × 350 × 360 mm',
      intDim: '420 × 280 × 270 mm',
      weight: '4.2 kg',
      hold: '8 – 12h transit',
      temp: 'Chilled / Frozen',
      material: 'PU Rigid Core + Ergonomic Handles',
      app: 'Catering banquet deliveries, fresh grocery logistics, restaurant restocking.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.2 Commercial Fresh Delivery',
      model: 'HP-66L',
      id: 'product-model-hp-66l',
      capacity: '66 Liters',
      extDim: '690 × 440 × 430 mm',
      intDim: '580 × 360 × 340 mm',
      weight: '8.5 kg',
      hold: '12 – 24h transit',
      temp: 'Chilled / Frozen',
      material: 'Heavy-Duty Polyethylene + PU',
      app: 'Supermarket delivery vans, central kitchen batch shipments, bulk fresh poultry.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.2 Commercial Fresh Delivery',
      model: 'HP-80L',
      id: 'product-model-hp-80l',
      capacity: '80 Liters',
      extDim: '760 × 470 × 460 mm',
      intDim: '640 × 390 × 360 mm',
      weight: '10.5 kg',
      hold: '24h transit',
      temp: 'Chilled / Frozen',
      material: 'Rigid PU Insulation + Steel Latches',
      app: 'Commercial refrigerated truck transit, inter-branch food distribution.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.2 Commercial Fresh Delivery',
      model: 'HP-88L',
      id: 'product-model-hp-88l',
      capacity: '88 Liters',
      extDim: '800 × 490 × 470 mm',
      intDim: '680 × 400 × 370 mm',
      weight: '11.8 kg',
      hold: '24 – 36h transit',
      temp: 'Chilled / Frozen',
      material: 'Double-Walled Shell + Cam Latches',
      app: 'High-capacity catering, food festival distribution, meat & seafood wholesale.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.2 Commercial Fresh Delivery',
      model: 'HP-100L',
      id: 'product-model-hp-100l',
      capacity: '100 Liters',
      extDim: '850 × 520 × 500 mm',
      intDim: '720 × 430 × 390 mm',
      weight: '13.2 kg',
      hold: '36h transit',
      temp: 'Chilled / Frozen',
      material: 'PU Core + Skid Runners on Base',
      app: 'Large commercial distribution, grocery hypermarket transfers, pallet staging.'
    },

    // --- 1.3 Marine Fishery ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.3 Marine Fishery & Heavy Containers',
      model: 'HP-300L',
      id: 'product-model-hp-300l',
      capacity: '300 Liters',
      extDim: '1050 × 720 × 740 mm',
      intDim: '930 × 600 × 600 mm',
      weight: '26 kg',
      hold: '120h+ (Ice hold)',
      temp: 'Deep Chilled / Ice',
      material: 'Double-Walled LLDPE + PU Core',
      app: 'Seafood coastal transport, dockside wholesale, commercial trawler storage.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.3 Marine Fishery & Heavy Containers',
      model: 'HP-630L',
      id: 'product-model-hp-630l',
      capacity: '630 Liters',
      extDim: '1230 × 1030 × 850 mm',
      intDim: '1110 × 910 × 690 mm',
      weight: '45 kg',
      hold: '144h+ (Ice hold)',
      temp: 'Deep Chilled / Ice',
      material: 'Rotomolded LLDPE + High-Density PU',
      app: 'Large seafood harvest, processing plants, refrigerated container truck loads.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.3 Marine Fishery & Heavy Containers',
      model: 'HP-660L',
      id: 'product-model-hp-660l',
      capacity: '660 Liters',
      extDim: '1250 × 1040 × 880 mm',
      intDim: '1120 × 920 × 710 mm',
      weight: '48 kg',
      hold: '144h+ (Ice hold)',
      temp: 'Deep Chilled / Ice',
      material: 'Impact-Resistant LLDPE Shell',
      app: '4-way forklift base, seafood distribution center, aquaculture processing.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.3 Marine Fishery & Heavy Containers',
      model: 'HP-800L',
      id: 'product-model-hp-800l',
      capacity: '800 Liters',
      extDim: '1450 × 1050 × 920 mm',
      intDim: '1310 × 920 × 740 mm',
      weight: '58 kg',
      hold: '168h+ (7 Days)',
      temp: 'Deep Chilled / Ice',
      material: 'Heavy-Duty Marine Polyethylene',
      app: 'Commercial tuna, salmon logistics, seafood harvest, deep sea processing.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.3 Marine Fishery & Heavy Containers',
      model: 'HP-1000L',
      id: 'product-model-hp-1000l',
      capacity: '1,000 Liters',
      extDim: '1550 × 1150 × 1020 mm',
      intDim: '1400 × 1000 × 820 mm',
      weight: '72 kg',
      hold: '168h+ (7 Days)',
      temp: 'Deep Chilled / Ice',
      material: 'Full PU Core + Extra Thick Walls (70mm)',
      app: 'Industrial aquaculture, maritime bulk cold-chain freight, forklift pockets.'
    },

    // --- 1.4 Stackable ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.4 Interlocking Stackable Series',
      model: 'HP-65L (Stackable)',
      id: 'product-model-hp-65l--stackable-',
      capacity: '65 Liters',
      extDim: '710 × 455 × 445 mm',
      intDim: '600 × 370 × 350 mm',
      weight: '9.2 kg',
      hold: '96h transit',
      temp: 'Chilled / Frozen',
      material: 'Interlocking PU Molded Shell',
      app: 'Warehouse pallet racking, multi-tier truck bed loading, commercial freight.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.4 Interlocking Stackable Series',
      model: 'HP-110L (Stackable)',
      id: 'product-model-hp-110l--stackable-',
      capacity: '110 Liters',
      extDim: '880 × 540 × 520 mm',
      intDim: '750 × 440 × 410 mm',
      weight: '14.5 kg',
      hold: '120h transit',
      temp: 'Chilled / Frozen',
      material: 'Heavy-Duty Interlocking PU Body',
      app: 'Industrial pallet-compatible stacking, bulk intermodal transport.'
    },

    // --- 1.5 Hotel Stainless & Foodservice ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.5 Hotel 304 Stainless Foodservice',
      model: 'HP-16L (SS)',
      id: 'product-model-hp-16l--stainless-',
      capacity: '16 Liters',
      extDim: '360 × 360 × 380 mm',
      intDim: '280 dia × 280 mm',
      weight: '4.1 kg',
      hold: '8 – 12h hold',
      temp: 'Hot / Cold Dual Use',
      material: '304 Food-Grade Stainless Steel + PU',
      app: 'Hotel banquet hot soup, cold sauces, restaurant kitchen insulated urn.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.5 Hotel 304 Stainless Foodservice',
      model: 'HP-20L (SS)',
      id: 'product-model-hp-20l--stainless-',
      capacity: '20 Liters',
      extDim: '380 × 380 × 420 mm',
      intDim: '300 dia × 310 mm',
      weight: '4.8 kg',
      hold: '8 – 12h hold',
      temp: 'Hot / Cold Dual Use',
      material: '304 Food-Grade Stainless Steel + PU',
      app: 'Commercial catering, beverage distribution, buffet service station.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.5 Hotel 304 Stainless Foodservice',
      model: 'HP-30L (SS)',
      id: 'product-model-hp-30l--stainless-',
      capacity: '30 Liters',
      extDim: '420 × 420 × 470 mm',
      intDim: '340 dia × 360 mm',
      weight: '6.2 kg',
      hold: '8 – 12h hold',
      temp: 'Hot / Cold Dual Use',
      material: '304 Food-Grade Stainless Steel + PU',
      app: 'Airline kitchen, event catering, central kitchen transfer, hotel banquet.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.5 Hotel 304 Stainless Foodservice',
      model: 'HP-50L (SS)',
      id: 'product-model-hp-50l--stainless-',
      capacity: '50 Liters',
      extDim: '480 × 480 × 560 mm',
      intDim: '390 dia × 440 mm',
      weight: '9.8 kg',
      hold: '10 – 14h hold',
      temp: 'Hot / Cold Dual Use',
      material: '304 Heavy Stainless Shell + Thick PU',
      app: 'Institutional foodservice, university campus cafeteria, hospital kitchens.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.5 Hotel 304 Stainless Foodservice',
      model: 'HP-90L',
      id: 'product-model-hp-90l',
      capacity: '90 Liters',
      extDim: '790 × 490 × 480 mm',
      intDim: '670 × 400 × 370 mm',
      weight: '12.5 kg',
      hold: '12 – 16h hold',
      temp: 'Chilled / Warm',
      material: 'Food-Grade Molded Shell + Gasket',
      app: 'Standard Gastronorm (GN) food pan compatible insulated transport crate.'
    },

    // --- 1.6 Outdoor Recreation ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.6 Outdoor Recreation & Catering',
      model: 'HP-9L',
      id: 'product-model-hp-9l',
      capacity: '9 Liters',
      extDim: '350 × 245 × 270 mm',
      intDim: '290 × 190 × 190 mm',
      weight: '2.1 kg',
      hold: '24h',
      temp: '0°C ~ 8°C',
      material: 'Rigid PE/PU Shell',
      app: 'Compact outdoor food, canned beverage, road trip vehicle storage.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.6 Outdoor Recreation & Catering',
      model: 'HP-22L',
      id: 'product-model-hp-22l',
      capacity: '22 Liters',
      extDim: '470 × 330 × 350 mm',
      intDim: '395 × 260 × 260 mm',
      weight: '3.9 kg',
      hold: '48h',
      temp: '0°C ~ 8°C',
      material: 'Impact-Resistant PU Shell',
      app: 'Outdoor dining, cold beer, camping meals, weekend BBQ cooler.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.6 Outdoor Recreation & Catering',
      model: 'HP-32L',
      id: 'product-model-hp-32l',
      capacity: '32 Liters',
      extDim: '540 × 375 × 380 mm',
      intDim: '450 × 300 × 280 mm',
      weight: '5.4 kg',
      hold: '72h',
      temp: 'Chilled / Ice',
      material: 'Thick PU Core + Cam Latches',
      app: 'Family camping, picnic cookouts, weekend yachting and fishing.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.6 Outdoor Recreation & Catering',
      model: 'HP-52L',
      id: 'product-model-hp-52l',
      capacity: '52 Liters',
      extDim: '650 × 430 × 430 mm',
      intDim: '550 × 340 × 330 mm',
      weight: '7.8 kg',
      hold: '96h',
      temp: 'Chilled / Ice',
      material: 'Molded PU Shell + Drain Plug',
      app: 'Large outdoor catering, corporate banquets, sports tournaments.'
    },

    // --- 1.7 Specialty Cold Chain ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.7 Specialty Cold Chain Equipment',
      model: 'HWBD-10',
      id: 'product-model-hwbd-10',
      capacity: '10 Liters',
      extDim: '310 × 220 × 230 mm',
      intDim: '270 × 180 × 190 mm',
      weight: '0.75 kg',
      hold: '6 – 8h',
      temp: 'Chilled / Frozen',
      material: 'TPU Coated 840D Nylon + Closed-Cell Foam',
      app: 'Leak-proof insulated soft cooler bag, blood transfer, courier messenger bag.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.7 Specialty Cold Chain Equipment',
      model: 'HP-320L Dry Ice Cooler Box',
      id: 'product-model-hp-320l',
      capacity: '320 Liters',
      extDim: '1150 × 780 × 900 mm',
      intDim: '980 × 610 × 540 mm',
      weight: '42 kg',
      hold: '168h+ (-78.5°C hold)',
      temp: '-78.5°C Ultra-Low',
      material: 'Extra-Thick Cryogenic PU (100mm)',
      app: 'Solid dry ice storage, sublimated CO2 gas venting valve, cell therapy export.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.7 Specialty Cold Chain Equipment',
      model: '304 Stainless-Steel 5-Compartment Meal Tray',
      id: 'product-model-304-five-compartment-meal-tray',
      capacity: '5 Compartments',
      extDim: '280 × 220 × 45 mm',
      intDim: 'Multi-section depth 35mm',
      weight: '0.45 kg',
      hold: 'Thermal retain match',
      temp: 'Hot Food Service',
      material: 'Electropolished Food-Grade 304 SS',
      app: 'Hospital patient meals, airline crew catering, school lunch insulated trays.'
    },

    // --- 1.8 Rotomolded Heavy-Duty Coolers ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.8 Rotomolded Heavy-Duty Coolers',
      model: 'HP-22A',
      id: 'product-model-hp-22a',
      capacity: '22 Liters',
      extDim: '510 × 360 × 370 mm',
      intDim: '395 × 255 × 260 mm',
      weight: '6.8 kg',
      hold: '72h ~ 96h',
      temp: 'Chilled / Frozen',
      material: 'Rotomolded LLDPE + 50mm PU Foam',
      app: 'Heavy field clinical deployment, rugged blood transport, tough transit.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.8 Rotomolded Heavy-Duty Coolers',
      model: 'HP-31A',
      id: 'product-model-hp-31a',
      capacity: '31 Liters',
      extDim: '580 × 400 × 410 mm',
      intDim: '450 × 280 × 290 mm',
      weight: '8.5 kg',
      hold: '96h ~ 120h',
      temp: 'Chilled / Frozen',
      material: 'Rotomolded LLDPE + 55mm PU Foam',
      app: 'Industrial marine expeditions, deep subzero cargo, vaccine field campaigns.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.8 Rotomolded Heavy-Duty Coolers',
      model: 'HP-52B',
      id: 'product-model-hp-52b',
      capacity: '52 Liters',
      extDim: '690 × 460 × 450 mm',
      intDim: '540 × 340 × 330 mm',
      weight: '12.2 kg',
      hold: '120h+ (5 Days)',
      temp: 'Chilled / Frozen',
      material: 'Rotomolded LLDPE + 65mm PU Foam',
      app: 'Flagship commercial rotomolded cooler, long-range pharma transport, offshore.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.8 Rotomolded Heavy-Duty Coolers',
      model: 'HP-70A',
      id: 'product-model-hp-70a',
      capacity: '70 Liters',
      extDim: '790 × 490 × 480 mm',
      intDim: '640 × 360 × 350 mm',
      weight: '15.0 kg',
      hold: '120h ~ 144h',
      temp: 'Chilled / Frozen',
      material: 'Rotomolded LLDPE + 70mm PU Foam',
      app: 'Extra-rugged field expeditions, bulk clinical plasma, remote site catering.'
    },

    // --- 1.9 Trolley Wheeled Coolers ---
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.9 Trolley & Outdoor Mobile Coolers',
      model: 'HP-28LG',
      id: 'product-model-hp-28lg',
      capacity: '28 Liters',
      extDim: '440 × 315 × 410 mm',
      intDim: '350 × 230 × 340 mm',
      weight: '3.8 kg',
      hold: 'Hot 12h | Cold 36~48h',
      temp: 'Hot / Chilled / Frozen',
      material: 'Outer PE + Inner PP + PU Insulation',
      app: 'Compact mobile trolley; Blue (custom colors available w/ MOQ); *Duration depends on cargo, pre-cooling, coolant ratio & ambient temp.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.9 Trolley & Outdoor Mobile Coolers',
      model: 'HP-38LG',
      id: 'product-model-hp-38lg',
      capacity: '38 Liters',
      extDim: '480 × 300 × 460 mm',
      intDim: '400 × 250 × 380 mm',
      weight: '4.9 kg',
      hold: 'Hot 12h | Cold 36~48h',
      temp: 'Hot / Chilled / Frozen',
      material: 'Outer PE + Inner PP + PU Insulation',
      app: 'Standard mobile station; Blue (custom colors available w/ MOQ); *Duration depends on cargo, pre-cooling, coolant ratio & ambient temp.'
    },
    {
      series: 'Series 01: Commercial Cooler Boxes',
      subseries: '1.9 Trolley & Outdoor Mobile Coolers',
      model: 'HP-65LG',
      id: 'product-model-hp-65lg',
      capacity: '65 Liters',
      extDim: '490 × 450 × 510 mm',
      intDim: '420 × 350 × 420 mm',
      weight: '7.4 kg',
      hold: 'Hot 12h | Cold 36~48h',
      temp: 'Hot / Chilled / Frozen',
      material: 'Outer PE + Inner PP + PU Insulation',
      app: 'Heavy field operations; Blue (custom colors available w/ MOQ); *Duration depends on cargo, pre-cooling, coolant ratio & ambient temp.'
    },

    // --- Series 02: PCM Rigid Bricks (Complete 37 Factory Models: #1-18 In-Stock, #19-37 Custom) ---
    // Part 1: Standard In-Stock Models (#1–18)
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-2100 High-Capacity Cold Slab (#01)',
      id: 'product-model-xlh-2100',
      capacity: '2000 ml (±15 ml)',
      extDim: '415 × 275 × 30 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '2.40 kg (±15 g)',
      hold: '0°C to -20°C / +2°C to +8°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Refrigerated export freight, multi-day pharmaceutical containers, large shipper wall lining.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-2000 Sub-Zero Phase Slab (#02)',
      id: 'product-model-xlh-2000',
      capacity: '2000 ml (±15 ml)',
      extDim: '435 × 280 × 30 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '2.00 kg (±15 g)',
      hold: '+2°C~8°C, -10°C, -25°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Deep-freeze bio-reagents, international vaccine air shipments, non-hazardous dry ice replacement.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-1980 Extended Cold Wall (#03)',
      id: 'product-model-xlh-1980',
      capacity: '1980 ml (±15 g)',
      extDim: '480 × 290 × 25 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '1.80 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C CRT (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Controlled room temperature (CRT) oncology drugs, ambient thermal buffer, pallet box liner.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-1850 High-Thickness Thermal Brick (#04)',
      id: 'product-model-xlh-1850',
      capacity: '1850 ml (±15 ml)',
      extDim: '300 × 160 × 45 mm',
      intDim: 'Thick 45mm Core',
      weight: '1.80 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C CRT (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Thick-body 45mm high thermal mass core, hospital specimen transport, compact insulated shipper boxes.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-1800 Large Format Cold Plate (#05)',
      id: 'product-model-xlh-1800',
      capacity: '1850 ml (±15 ml)',
      extDim: '480 × 290 × 25 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '1.80 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C CRT (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Perimeter 360° cold jacket for pallet shippers, clinical vaccine shippers, fresh bio-logistics.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-1600 Commercial Cold Plate (#06)',
      id: 'product-model-xlh-1600',
      capacity: '2200 ml (±15 ml)',
      extDim: '335 × 260 × 30 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '1.60 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Commercial fresh food export, cold storage transport boxes, pathology diagnostic kits.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-1200 Universal Thermal Brick (#07)',
      id: 'product-model-xlh-1200',
      capacity: '1200 ml (±15 g)',
      extDim: '256 × 230 × 20 mm',
      intDim: 'Slim Flat Profile',
      weight: '1.20 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Universal medical cooler boxes, fresh seafood distribution, pharmaceutical courier transit.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-1050 Deep Block Cooler Brick (#08)',
      id: 'product-model-xlh-1050',
      capacity: '1050 ml (±15 ml)',
      extDim: '220 × 175 × 50 mm',
      intDim: 'Deep 50mm Thermal Block',
      weight: '1.09 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Deep 50mm thermal mass block, vaccine distribution boxes, high-durability cold retention.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-1000 Standard Cold Brick (#09)',
      id: 'product-model-xlh-1000',
      capacity: '1000 ml (±15 ml)',
      extDim: '240 × 190 × 38 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '1.00 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Standard export cold chain packaging, pharmacy distribution, fresh produce parcel cold preservation.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-900 Flat Profiler Plate (#10)',
      id: 'product-model-xlh-900',
      capacity: '900 ml (±15 ml)',
      extDim: '305 × 215 × 20 mm',
      intDim: 'Slim 20mm Profile',
      weight: '1.00 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Slim 20mm flat profile, lid and floor cold jacket, sensitive biological testing sample shippers.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-850 Slimline Medical Plate (#11)',
      id: 'product-model-xlh-850',
      capacity: '850 ml (±15 ml)',
      extDim: '297 × 185 × 20 mm',
      intDim: 'A4 Format Slab',
      weight: '0.85 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'A4-proportional thin slab, clinical reagent courier boxes, express pharmaceutical shipments.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-800 Compact Cold Brick (#12)',
      id: 'product-model-xlh-800',
      capacity: '800 ml (±15 ml)',
      extDim: '215 × 160 × 30 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '0.92 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Portable vaccine transport bags, blood collection boxes, insulated delivery coolers.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-700 Mid-Size Thermal Brick (#13)',
      id: 'product-model-xlh-700',
      capacity: '700 ml (±15 ml)',
      extDim: '215 × 145 × 25 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '0.70 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Universal medical cold packs, laboratory specimen transport, temperature-controlled drug parcels.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-650 Elongated Narrow Brick (#14)',
      id: 'product-model-xlh-650',
      capacity: '650 ml (±15 ml)',
      extDim: '220 × 100 × 50 mm',
      intDim: 'Narrow Channel Profile',
      weight: '0.65 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Narrow-channel side buffer, bottle and vial separator, insulated backpack cold retention.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-560 Low-Profile Cold Slab (#15)',
      id: 'product-model-xlh-560',
      capacity: '560 ml (±15 ml)',
      extDim: '220 × 160 × 20 mm',
      intDim: 'Low Profile 20mm',
      weight: '0.56 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Ultra-thin specimen mailers, flat insulin transport pouches, biotechnology courier mailers.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-400 Standard Courier Brick (#16)',
      id: 'product-model-xlh-400',
      capacity: '400 ml (±15 ml)',
      extDim: '160 × 95 × 35 mm',
      intDim: 'Rigid Blow-Molded HDPE',
      weight: '0.40 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Express diagnostic parcel cooling, pharmacy home delivery, antibody and vaccine transport.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-200 Mini Slim Brick (#17)',
      id: 'product-model-xlh-200',
      capacity: '200 ml (±15 ml)',
      extDim: '160 × 95 × 20 mm',
      intDim: 'Compact Slim Slab',
      weight: '0.20 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Small blood tube parcels, individual test kits, compact personal cooler packs.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 1: Standard In-Stock (#1–18)',
      model: 'XLH-110 Micro Pocket Brick (#18)',
      id: 'product-model-xlh-110',
      capacity: '110 ml (±15 ml)',
      extDim: '130 × 90 × 20 mm',
      intDim: 'Micro Pocket Profile',
      weight: '0.15 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'In-Stock Ready · Fast Dispatch',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Pocket travel cases, eye drop medication cooling, portable insulin pen cases.'
    },

    // Part 2: Custom & Made-to-Order Models (#19–37)
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-4 Hole Ice Cup Holder (#19)',
      id: 'product-model-xlh-4-hole',
      capacity: '1800 ml (±15 g)',
      extDim: '205 × 205 × 105 mm',
      intDim: '4-Cavity Cup Holder Mold',
      weight: '1.80 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Specialized 4-tube cup holder block, cold beverage & blood vial carrier, laboratory benchtop cooling.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-1600Wave Contour Brick (#20)',
      id: 'product-model-xlh-1600wave',
      capacity: '1600 ml (±15 ml)',
      extDim: '197 × 160 × 85 mm',
      intDim: 'Contoured Wave Profile',
      weight: '1.60 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Contoured wave profile for cylindrical beverage cans, wine bottles & pharmaceutical vial cradles.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C3X3 9-Grid Compartment Tray (#21)',
      id: 'product-model-xlh-c3x3',
      capacity: '1800 ml (±15 ml)',
      extDim: '270 × 270 × 35 mm',
      intDim: '3×3 Matrix Partition',
      weight: '1.80 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: '3×3 matrix grid separator, anti-collision secure positioning for vaccine bottles and reagent flasks.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C3X5 Tray 15-Grid Pallet Crate (#22)',
      id: 'product-model-xlh-c3x5-tray',
      capacity: '2500 ml (±15 ml)',
      extDim: '445 × 270 × 30 mm',
      intDim: '3×5 Grid Base Tray',
      weight: '2.50 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: '3×5 multi-vial base tray, commercial laboratory batch processing, automated conveyor cooling.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C100-1 Round Disc Cooler (#23)',
      id: 'product-model-xlh-c100-1',
      capacity: '100 ml (±15 ml)',
      extDim: 'Ø90 × 30 mm (Circular Disc)',
      intDim: 'Round Base Disc',
      weight: '0.10 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Circular cup bottom cooler, laboratory shaker flask stabilizer, mini bottle base chiller.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C100-2 Round Disc Cooler Type 2 (#24)',
      id: 'product-model-xlh-c100-2',
      capacity: '100 ml (±15 ml)',
      extDim: 'Ø90 × 30 mm (Circular Disc)',
      intDim: 'Round Base Disc Type 2',
      weight: '0.10 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Circular base thermal buffer, diagnostic canister bottom cooler, centrifuge tube tray.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C110-1 Compact Precision Brick (#25)',
      id: 'product-model-xlh-c110-1',
      capacity: '110 ml (±15 ml)',
      extDim: '114 × 105 × 16 mm',
      intDim: 'Square Micro Core',
      weight: '0.11 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Mini square cold block, portable cooler dividers, micro-sample courier packages.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C200-1S Slim Wall Brick (#26)',
      id: 'product-model-xlh-c200-1s',
      capacity: '200 ml (±15 ml)',
      extDim: '170 × 90 × 20 mm',
      intDim: 'Slimline 20mm Profile',
      weight: '0.20 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Slimline 20mm profile, side lining for small vaccine boxes, custom pharmaceutical courier pouches.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C300-1 Medical Inlay Brick (#27)',
      id: 'product-model-xlh-c300-1',
      capacity: '300 ml (±15 ml)',
      extDim: '165 × 90 × 30 mm',
      intDim: 'Precision Medical Core',
      weight: '0.30 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Diagnostic kit buffer, clinical trial specimen transit, compact cooler perimeter lining.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C400-1 Dual-Temp Flat Slab (#28)',
      id: 'product-model-xlh-c400-1',
      capacity: '400 ml (±15 ml)',
      extDim: '160 × 130 × 20 mm',
      intDim: 'Grey Dual-Temp Core',
      weight: '0.40 kg (±15 g)',
      hold: '+2°C~8°C, 0°C~24°C (Optional)',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Thin grey medical slab, hospital pharmacy distribution, biological courier parcels.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C400-1S High-Profile Brick (#29)',
      id: 'product-model-xlh-c400-1s',
      capacity: '400 ml (±15 ml)',
      extDim: '160 × 95 × 35 mm',
      intDim: 'Thick 35mm Thermal Core',
      weight: '0.40 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Thick 35mm thermal mass block, high ambient temperature protection, vaccine cold box lining.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C400-2S Elongated Flat Brick (#30)',
      id: 'product-model-xlh-c400-2s',
      capacity: '400 ml (±15 ml)',
      extDim: '230 × 130 × 20 mm',
      intDim: 'Extended 230mm Profile',
      weight: '0.40 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Extended 230mm length, side wall protection for biological specimen coolers, cold buffer lining.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C500-1S Standard Medical Brick (#31)',
      id: 'product-model-xlh-c500-1s',
      capacity: '500 ml (±15 ml)',
      extDim: '215 × 145 × 25 mm',
      intDim: 'Medical Wall Core',
      weight: '0.50 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Standard vaccine cooler brick, laboratory transport cases, blood bank distribution boxes.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C500-2S Deep-Block Brick (#32)',
      id: 'product-model-xlh-c500-2s',
      capacity: '500 ml (±15 ml)',
      extDim: '165 × 140 × 30 mm',
      intDim: 'Square Block Format',
      weight: '0.50 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Square format block, center thermal core for insulated crates, cold chain export parcels.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C600-1S Square Thermal Slab (#33)',
      id: 'product-model-xlh-c600-1s',
      capacity: '600 ml (±15 ml)',
      extDim: '155 × 155 × 35 mm',
      intDim: '155x155mm Base Slab',
      weight: '0.60 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Square 155x155mm base format, container floor and lid cold shield, clinical reagents mailers.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C1100-1 Large Thin Cold Wall (#34)',
      id: 'product-model-xlh-c1100-1',
      capacity: '1100 ml (±15 ml)',
      extDim: '290 × 235 × 22 mm',
      intDim: 'Broad Cold Wall Slab',
      weight: '1.10 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Broad 290x235mm surface, large cold wall coverage, pharmaceutical pallet boxes and master shippers.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C1200-1S Deep Channel Slab (#35)',
      id: 'product-model-xlh-c1200-1s',
      capacity: '1200 ml (±15 ml)',
      extDim: '320 × 175 × 40 mm',
      intDim: '40mm Thick Deep Channel',
      weight: '1.20 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'High thermal capacity 40mm thick wall, bulk vaccine shipping crates, refrigerated air cargo liners.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C1400-1 Heavy Cold Wall (#36)',
      id: 'product-model-xlh-c1400-1',
      capacity: '1400 ml (±15 ml)',
      extDim: '280 × 200 × 30 mm',
      intDim: 'Heavy-Duty Cold Plate',
      weight: '1.40 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Heavy commercial cold plate, multi-day biological specimens, export meat and seafood transport.'
    },
    {
      series: 'Series 02: PCM Rigid Ice Bricks',
      subseries: 'Part 2: Custom Made-to-Order (#19–37)',
      model: 'XLH-C2000-1 Oval Profile Heavy Slab (#37)',
      id: 'product-model-xlh-c2000-1',
      capacity: '2000 ml (±15 ml)',
      extDim: '435 × 245 × 30 mm',
      intDim: 'Custom Oval Profile Slab',
      weight: '2.00 kg (±15 g)',
      hold: '+2°C to +8°C Cold Chain',
      temp: 'Custom Made-to-Order (MOQ Applies)',
      material: 'Food-Grade Rigid HDPE + High-Molecular PCM',
      app: 'Custom oval-contour 2000g slab, large cooler box wall lining, international intermodal air freight.'
    },

    // --- Series 03: Gel Ice Packs ---
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-150 Food-Grade PE Chilled Gel Pack',
      id: 'product-model-xld-150',
      capacity: '150 Grams',
      extDim: '200 × 80 mm',
      intDim: 'Thickness: 12 mm',
      weight: '150 g',
      hold: 'Default 2–8°C Chilled (Sub-zero on inquiry)',
      temp: '2°C ~ 8°C',
      material: 'Food-Grade PE Film (Direct Contact Safe)',
      app: 'Default 2–8°C chilled coolant. Safe for direct food contact, biotech samples & meal kits.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-250C 0°C Chilled Fresh Gel Pack',
      id: 'product-model-xld-250c',
      capacity: '250 Grams',
      extDim: '170 × 105 mm',
      intDim: 'Thickness: 18 mm',
      weight: '250 g',
      hold: '0°C Chilled (Hold 24–36 Hours)',
      temp: '0°C Chilled',
      material: 'Nylon / PE Composite Film',
      app: '80 pcs/ctn. Requires freezer <-10°C for >=15h. Fresh steaks, farm produce.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-500C 0°C Chilled Heavy Gel Pack',
      id: 'product-model-xld-500c',
      capacity: '500 Grams',
      extDim: '215 × 135 mm',
      intDim: 'Thickness: 24 mm',
      weight: '500 g',
      hold: '0°C Chilled (Hold 24–36 Hours)',
      temp: '0°C Chilled',
      material: 'Nylon / PE Composite Film',
      app: '40 pcs/ctn. Requires freezer <-10°C for >=15h. Chilled salmon, seafood freight.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-250D10Y -10°C Subzero Frozen Ice Pack',
      id: 'product-model-xld-250d10y',
      capacity: '250 Grams',
      extDim: '170 × 105 mm',
      intDim: 'Thickness: 18 mm',
      weight: '250 g',
      hold: '-10°C Frozen (Hold 24–36 Hours)',
      temp: '-10°C Frozen',
      material: 'Nylon / PE Composite Film',
      app: '80 pcs/ctn. Requires freezer <-20°C for >=15h. Frozen pastries, meats & dairy.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-500D10Y -10°C Subzero Frozen Heavy Pack',
      id: 'product-model-xld-500d10y',
      capacity: '500 Grams',
      extDim: '215 × 135 mm',
      intDim: 'Thickness: 24 mm',
      weight: '500 g',
      hold: '-10°C Frozen (Hold 24–36 Hours)',
      temp: '-10°C Frozen',
      material: 'Nylon / PE Composite Film',
      app: '40 pcs/ctn. Requires freezer <-20°C for >=15h. Wholesale frozen seafood shippers.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-250D25Y -25°C Deep Frozen Ice Pack',
      id: 'product-model-xld-250d25y',
      capacity: '250 Grams',
      extDim: '170 × 105 mm',
      intDim: 'Thickness: 18 mm',
      weight: '250 g',
      hold: '-25°C Deep Frozen (Hold 24–36 Hours)',
      temp: '-25°C Deep Freeze',
      material: 'Nylon / PE Composite Film',
      app: '80 pcs/ctn. Requires deep freezer <-35°C for >=15h. Ice cream, biological tissue.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-500D25Y -25°C Deep Frozen Heavy Pack',
      id: 'product-model-xld-500d25y',
      capacity: '500 Grams',
      extDim: '215 × 135 mm',
      intDim: 'Thickness: 24 mm',
      weight: '500 g',
      hold: '-25°C Deep Frozen (Hold 24–36 Hours)',
      temp: '-25°C Deep Freeze',
      material: 'Nylon / PE Composite Film',
      app: '40 pcs/ctn. Requires deep freezer <-35°C for >=15h. Deep-frozen vaccine crates.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'NWIP-250 Anti-Condensation Non-Woven Pouch',
      id: 'product-model-nwip-250',
      capacity: '250 Grams',
      extDim: '200 × 120 mm',
      intDim: 'Thickness: 18 mm',
      weight: '250 g',
      hold: '2°C ~ 8°C Anti-Condensation',
      temp: '2°C ~ 8°C',
      material: 'Non-Woven Outer Layer + PE Barrier Film',
      app: '50 pcs/ctn. Anti-condensation non-woven surface minimizes water droplet accumulation.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-300 Medium Commercial Fresh Pouch',
      id: 'product-model-xld-300',
      capacity: '300 Grams',
      extDim: '130 × 190 mm',
      intDim: 'Thickness: 20 mm',
      weight: '300 g',
      hold: '2°C ~ 8°C (Sub-zero on inquiry)',
      temp: '2°C ~ 8°C',
      material: 'High-Barrier PA/PE Co-extrusion Film',
      app: 'E-commerce meal kits, direct-to-consumer farm baskets, chilled desserts.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-400 Pharma Diagnostic Chilled Pouch',
      id: 'product-model-xld-400',
      capacity: '400 Grams',
      extDim: '150 × 205 mm',
      intDim: 'Thickness: 22 mm',
      weight: '400 g',
      hold: '2°C ~ 8°C (Sub-zero on inquiry)',
      temp: '2°C ~ 8°C',
      material: 'High-Barrier PA/PE Co-extrusion Film',
      app: '35 pcs/ctn. Diagnostic reagents, blood tubes, vaccines & pharma shipping.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-500 Meat & Seafood Bulk Chilled Pouch',
      id: 'product-model-xld-500',
      capacity: '500 Grams',
      extDim: '220 × 170 mm',
      intDim: 'Thickness: 25 mm',
      weight: '500 g',
      hold: '2°C ~ 8°C (Sub-zero on inquiry)',
      temp: '2°C ~ 8°C',
      material: 'Heavy PA/PE Co-extrusion Film',
      app: '30 pcs/ctn. Wholesale seafood cartons, chilled meat & poultry freight.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'XLD-1000 Master Carton Thermal Buffer Pouch',
      id: 'product-model-xld-1000',
      capacity: '1000 Grams',
      extDim: '200 × 300 mm',
      intDim: 'Thickness: 28 mm',
      weight: '1000 g',
      hold: '2°C ~ 8°C (Sub-zero on inquiry)',
      temp: '2°C ~ 8°C',
      material: 'Reinforced Puncture-Proof Co-extruded Film',
      app: '15 pcs/ctn. Master carton thermal buffers & heavy freight shippers.'
    },
    {
      series: 'Series 03: Gel Ice Packs',
      subseries: 'Flexible Multi-Layer Cooling Pouches',
      model: 'ZHB-1300 Heavy Composite Thermal Anchor Pack',
      id: 'product-model-zhb-1300',
      capacity: '1240 Grams',
      extDim: '385 × 200 × 28 mm',
      intDim: 'Thickness: 28 mm',
      weight: '1240 g',
      hold: '2°C ~ 8°C (Sub-zero on inquiry)',
      temp: '2°C ~ 8°C',
      material: 'Reinforced Heavy Composite Shell',
      app: '10 pcs/ctn. Heavy cold cargo containers, multi-day cold chain logistics.'
    },

    // --- Series 04: Water-Activated Sheets (Self-Absorbing Ice Pack Series #1–24) ---
    // Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-35 Micro Pocket Cell',
      id: 'product-model-zxd-35',
      capacity: '1 Single Cell',
      extDim: '72 × 65 mm',
      intDim: 'Submerge 3–5 min in water',
      weight: 'Dry: ~4g / Hydrated: ~35g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Submerge in water 3–5 min to swell into gel cell. Compact vials & small boxes.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-100 Express Narrow Strip',
      id: 'product-model-zxd-100',
      capacity: 'Narrow Strip',
      extDim: '145 × 65 mm',
      intDim: 'Submerge 3–5 min in water',
      weight: 'Dry: ~8g / Hydrated: ~100g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Parcel express mailers & compact chilled food wraps.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-180 Courier Fresh Sheet',
      id: 'product-model-zxd-180',
      capacity: 'Fresh Sheet',
      extDim: '130 × 95 mm',
      intDim: 'Submerge 3–5 min in water',
      weight: 'Dry: ~12g / Hydrated: ~180g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Direct wrap for gourmet chocolates, dairy and fresh pastries.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-250 Fresh Food Standard Sheet',
      id: 'product-model-zxd-250',
      capacity: 'Standard Sheet',
      extDim: '130 × 115 mm',
      intDim: 'Submerge 3–5 min in water',
      weight: 'Dry: ~16g / Hydrated: ~250g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Chilled beef steaks, poultry cuts and farm basket delivery.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-400 Commercial Produce Sheet',
      id: 'product-model-zxd-400',
      capacity: 'Medium Sheet',
      extDim: '160 × 130 mm',
      intDim: 'Submerge 3–5 min in water',
      weight: 'Dry: ~25g / Hydrated: ~400g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Commercial seafood cartons and wholesale dairy shippers.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-420 (12 cells)',
      id: 'product-model-zxd-420--12-cells-',
      capacity: '12 Cells',
      extDim: '290 × 195 mm',
      intDim: '12-Cell Flexible Matrix Grid',
      weight: 'Dry: ~26g / Hydrated: ~420g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '12-cell flexible grid sheet. Wraps easily around seafood cartons, beverage bottles & cold boxes.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-850 (24 cells)',
      id: 'product-model-zxd-850--24-cells-',
      capacity: '24 Cells',
      extDim: '390 × 290 mm',
      intDim: '24-Cell Full Matrix Grid',
      weight: 'Dry: ~45g / Hydrated: ~850g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '24-cell full matrix sheet. Complete perimeter lining for oyster crates and salmon boxes.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-1200 (12 cells)-1',
      id: 'product-model-zxd-1200--12-cells--1',
      capacity: '12 Cells',
      extDim: '390 × 290 mm',
      intDim: '12 Heavy-Cell Matrix Grid',
      weight: 'Dry: ~65g / Hydrated: ~1200g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '12 heavy cells grid sheet. High-capacity thermal hold for intermodal freight crates.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 1: Self-Absorbing Ice Pack Pre-Cut Sheets & Strips (#1–9 · ZXD Series)',
      model: 'ZXD-1620 (9 cells)',
      id: 'product-model-zxd-1620--9-cells-',
      capacity: '9 Cells',
      extDim: '390 × 290 mm',
      intDim: '9 Jumbo-Cell Matrix Grid',
      weight: 'Dry: ~85g / Hydrated: ~1620g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '9 jumbo cells grid sheet. High-mass thermal ballast for large chilled freight containers.'
    },

    // Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-1600 (9 cells)',
      id: 'product-model-zxd-1600--9-cells-',
      capacity: '9 Cells',
      extDim: '389 × 270 mm',
      intDim: '9 Large-Cell Grid Format',
      weight: 'Dry: ~85g / Hydrated: ~1600g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '9 large cells sheet. Heavy cargo chilled preservation and bulk freight lining.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-1200 (12 cells)-2',
      id: 'product-model-zxd-1200--12-cells--2',
      capacity: '12 Cells',
      extDim: '380 × 280 mm',
      intDim: '12-Cell Matrix Format',
      weight: 'Dry: ~65g / Hydrated: ~1200g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '12 cells format. Heavy airline air-cargo and refrigerated road distribution.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-380 (6 cells)',
      id: 'product-model-zxd-380--6-cells-',
      capacity: '6 Cells',
      extDim: '195 × 285 mm',
      intDim: '6-Cell Grid Format',
      weight: 'Dry: ~22g / Hydrated: ~380g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '6 cells format. Medium parcel shipping boxes & fresh meat wrap liners.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-800 (24 cells)',
      id: 'product-model-zxd-800--24-cells-',
      capacity: '24 Cells',
      extDim: '380 × 280 mm',
      intDim: '24-Cell High-Flexibility Grid',
      weight: 'Dry: ~42g / Hydrated: ~800g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '24 cells format. High flexibility wrapping for irregular cargoes and odd-shaped cartons.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-300 (9 cells)',
      id: 'product-model-zxd-300--9-cells-',
      capacity: '9 Cells',
      extDim: '190 × 210 mm',
      intDim: '9-Cell Compact Grid Format',
      weight: 'Dry: ~18g / Hydrated: ~300g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '9 cells format. Compact cold chain meal kit packaging and fresh fruit cartons.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-130 (4 cells)',
      id: 'product-model-zxd-130--4-cells-',
      capacity: '4 Cells',
      extDim: '130 × 130 mm',
      intDim: '4-Cell Square Format',
      weight: 'Dry: ~10g / Hydrated: ~130g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '4 cells square format. Laboratory specimen vials & luxury chocolate mailers.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-200 (6 cells)',
      id: 'product-model-zxd-200--6-cells-',
      capacity: '6 Cells',
      extDim: '140 × 200 mm',
      intDim: '6-Cell Rectangular Format',
      weight: 'Dry: ~14g / Hydrated: ~200g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '6 cells format. Chilled meat slices & direct-to-consumer farm baskets.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 2: Self-Absorbing Multi-Cell Formats (#10–17 · ZXD Series)',
      model: 'ZXD-270 (8 cells)',
      id: 'product-model-zxd-270--8-cells-',
      capacity: '8 Cells',
      extDim: '280 × 130 mm',
      intDim: '8-Cell Long Strip Perimeter Format',
      weight: 'Dry: ~16g / Hydrated: ~270g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '8 cells rectangular format. Long strip lining for box perimeters and carton corners.'
    },

    // Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)',
      model: 'SCX-100',
      id: 'product-model-scx-100',
      capacity: '1 Single Cell',
      extDim: '95 × 95 mm',
      intDim: 'Single-Cell Composite Pouch',
      weight: 'Dry: ~8g / Hydrated: ~100g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Single-cell square pouch for compact express shipping.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)',
      model: 'SCX-180',
      id: 'product-model-scx-180',
      capacity: 'Compact Cell',
      extDim: '95 × 120 mm',
      intDim: 'Compact Diagnostic Pouch Format',
      weight: 'Dry: ~12g / Hydrated: ~180g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Diagnostic reagents, blood tubes & cold mailers.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)',
      model: 'SCX-250',
      id: 'product-model-scx-250',
      capacity: 'Medium Cell',
      extDim: '95 × 150 mm',
      intDim: 'Fresh Food Pouch Format',
      weight: 'Dry: ~16g / Hydrated: ~250g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Gourmet meats, dairy, fresh bakery shipments.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)',
      model: 'SCX-400',
      id: 'product-model-scx-400',
      capacity: 'Large Cell',
      extDim: '110 × 180 mm',
      intDim: 'Large Seafood Pouch Format',
      weight: 'Dry: ~25g / Hydrated: ~400g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: 'Default 2–8°C chilled coolant. Chilled seafood, oysters & fresh catering boxes.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)',
      model: 'SCX-300 (3 cells)',
      id: 'product-model-scx-300--3-cells-',
      capacity: '3 Cells',
      extDim: '95 × 285 mm',
      intDim: '3-Cell Linear Strip Layout',
      weight: 'Dry: ~18g / Hydrated: ~300g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '3 cells linear strip. Wine bottles, beverage wraps, cylindrical cold shielding.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)',
      model: 'SCX-600 (6 cells)',
      id: 'product-model-scx-600--6-cells-',
      capacity: '6 Cells',
      extDim: '190 × 285 mm',
      intDim: '6-Cell Matrix Blanket Layout',
      weight: 'Dry: ~36g / Hydrated: ~600g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '6 cells matrix blanket. Multi-layer cold blanket for cooler box bottom and top.'
    },
    {
      series: 'Series 04: Water-Activated Sheets',
      subseries: 'Group 3: Self-Absorbing Composite Thermal Formats (#18–24 · SCX Series)',
      model: 'SCX-900 (9 cells)',
      id: 'product-model-scx-900--9-cells-',
      capacity: '9 Cells',
      extDim: '285 × 285 mm',
      intDim: '9-Cell Square Blanket Layout',
      weight: 'Dry: ~54g / Hydrated: ~900g',
      hold: '2°C ~ 8°C Chilled',
      temp: 'Chilled (2°C ~ 8°C)',
      material: 'Food-Grade Nylon/PE Composite Film & Non-Woven Fabric',
      app: '9 cells square blanket. Heavy commercial produce, meat distribution shippers.'
    },

    // --- Series 05: Water-Injection Ice Packs (#1–5 · ZSD Series) ---
    {
      series: 'Series 05: Water-Injection Ice Packs',
      subseries: 'Water-Injection Self-Sealing Pouches (#1–5 · ZSD Series)',
      model: 'ZSD-100',
      id: 'product-model-zsd-100',
      capacity: '100 ml',
      extDim: '130 × 97 mm',
      intDim: 'One-Way Auto-Sealing Inlet Valve',
      weight: '100g filled (Dry Pre-Loaded Coolant)',
      hold: '2°C ~ 8°C / 0°C (Freezable)',
      temp: 'Chilled / Frozen',
      material: 'Eco-Friendly PE Film / PE film',
      app: 'Pre-filled dry SAP coolant. Tap water injects through one-way valve; solidifies into gel in 60s.'
    },
    {
      series: 'Series 05: Water-Injection Ice Packs',
      subseries: 'Water-Injection Self-Sealing Pouches (#1–5 · ZSD Series)',
      model: 'ZSD-200',
      id: 'product-model-zsd-200',
      capacity: '200 ml',
      extDim: '148 × 99 mm',
      intDim: 'One-Way Auto-Sealing Inlet Valve',
      weight: '200g filled (Dry Pre-Loaded Coolant)',
      hold: '2°C ~ 8°C / 0°C (Freezable)',
      temp: 'Chilled / Frozen',
      material: 'Eco-Friendly PE Film / PE film',
      app: 'Pre-filled dry SAP coolant. Auto-sealing one-way inlet; leak-proof seal without heat sealing.'
    },
    {
      series: 'Series 05: Water-Injection Ice Packs',
      subseries: 'Water-Injection Self-Sealing Pouches (#1–5 · ZSD Series)',
      model: 'ZSD-300',
      id: 'product-model-zsd-300',
      capacity: '300 ml',
      extDim: '179 × 113 mm',
      intDim: 'One-Way Auto-Sealing Inlet Valve',
      weight: '300g filled (Dry Pre-Loaded Coolant)',
      hold: '2°C ~ 8°C / 0°C (Freezable)',
      temp: 'Chilled / Frozen',
      material: 'Eco-Friendly PE Film / PE film',
      app: 'Pre-filled dry SAP coolant. Medium fresh produce, fresh poultry and seafood courier.'
    },
    {
      series: 'Series 05: Water-Injection Ice Packs',
      subseries: 'Water-Injection Self-Sealing Pouches (#1–5 · ZSD Series)',
      model: 'ZSD-400',
      id: 'product-model-zsd-400',
      capacity: '400 ml',
      extDim: '190 × 119 mm',
      intDim: 'One-Way Auto-Sealing Inlet Valve',
      weight: '400g filled (Dry Pre-Loaded Coolant)',
      hold: '2°C ~ 8°C / 0°C (Freezable)',
      temp: 'Chilled / Frozen',
      material: 'Eco-Friendly PE Film / PE film',
      app: 'Pre-filled dry SAP coolant. Heavy-duty puncture-resistant PE film for long transit.'
    },
    {
      series: 'Series 05: Water-Injection Ice Packs',
      subseries: 'Water-Injection Self-Sealing Pouches (#1–5 · ZSD Series)',
      model: 'ZSD-600',
      id: 'product-model-zsd-600',
      capacity: '600 ml',
      extDim: '229 × 129 mm',
      intDim: 'One-Way Auto-Sealing Inlet Valve',
      weight: '600g filled (Dry Pre-Loaded Coolant)',
      hold: '2°C ~ 8°C / 0°C (Freezable)',
      temp: 'Chilled / Frozen',
      material: 'Eco-Friendly PE Film / PE film',
      app: 'Pre-filled dry SAP coolant. High thermal mass buffer for bulk shipping cartons.'
    },

    // --- Series 06: Instant Cold Packs ---
    {
      series: 'Series 06: Instant Cold Packs',
      subseries: 'Endothermic Rapid Reaction (<3s)',
      model: 'SLD-160 Rapid Cooling Instant Pack',
      id: 'product-model-sld-160-rapid-cooling-instant-pack',
      capacity: '160 Grams',
      extDim: '120 × 195 mm',
      intDim: 'Internal Endothermic Fluid Sachet',
      weight: '160 g',
      hold: 'Instant drop in 3 seconds (30–60 min hold)',
      temp: 'Instant 0°C',
      material: 'Medical-Grade PE Film (Single-Use, Non-Toxic)',
      app: 'Single-use; do not reuse. Key Features: Crush to Activate, Rapid Cooling. Clinical sample rescue, sports trauma, emergency fever therapy.'
    },

    // --- Series 06: EPP Foam Boxes ---
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-8L',
      id: 'product-model-epp-8l',
      capacity: '8 Liters',
      extDim: '370 × 270 × 155 mm',
      intDim: '330 × 230 × 120 mm',
      weight: '0.12 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 20mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: Bare Box.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-9L',
      id: 'product-model-epp-9l',
      capacity: '9 Liters',
      extDim: '325 × 225 × 270 mm',
      intDim: '275 × 150 × 215 mm',
      weight: '0.15 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 25mm, Density Ratio: 15, Color: Blue lid+Orange body)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-15L',
      id: 'product-model-epp-15l',
      capacity: '15 Liters',
      extDim: '367 × 306 × 280 mm',
      intDim: '304 × 244 × 195 mm',
      weight: '0.25 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey/Pink/Yellow)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-16L',
      id: 'product-model-epp-16l',
      capacity: '16 Liters',
      extDim: '475 × 267 × 210 mm',
      intDim: '420 × 210 × 165 mm',
      weight: '0.18 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 25mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-18L',
      id: 'product-model-epp-18l',
      capacity: '18 Liters',
      extDim: '390 × 262 × 310 mm',
      intDim: '330 × 210 × 260 mm',
      weight: '0.68 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 26-30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-27L (Bare Box)',
      id: 'product-model-epp-27l-bare',
      capacity: '27 Liters',
      extDim: '685 × 470 × 180 mm',
      intDim: '605 × 405 × 113 mm',
      weight: '1.45 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: Bare Box.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-27L (Clear Lid)',
      id: 'product-model-epp-27l-pink',
      capacity: '27 Liters',
      extDim: '587 × 380 × 266 mm',
      intDim: '507 × 301 × 205 mm',
      weight: '1.45 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 40mm, Density Ratio: 15, Color: Pink)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: Clear Lid.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-31L (With Food Pan)',
      id: 'product-model-epp-31l-pan',
      capacity: '31 Liters',
      extDim: '587 × 380 × 266 mm',
      intDim: '527 × 320 × 185 mm',
      weight: '1.35 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey/Blue)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Food Pan.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-31L (Clear Lid)',
      id: 'product-model-epp-31l-pink',
      capacity: '31 Liters',
      extDim: '587 × 380 × 266 mm',
      intDim: '527 × 320 × 185 mm',
      weight: '1.35 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Pink)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: Clear Lid.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-34L',
      id: 'product-model-epp-34l',
      capacity: '34 Liters',
      extDim: '600 × 400 × 255 mm',
      intDim: '540 × 340 × 185 mm',
      weight: '1.35 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-37L',
      id: 'product-model-epp-37l',
      capacity: '37 Liters',
      extDim: '515 × 390 × 330 mm',
      intDim: '455 × 330 × 266 mm',
      weight: '1.35 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30-35mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: Bare Box.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-43L',
      id: 'product-model-epp-43l',
      capacity: '43 Liters',
      extDim: '490 × 380 × 395 mm',
      intDim: '433 × 420 × 340 mm',
      weight: '1.42 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-45L',
      id: 'product-model-epp-45l',
      capacity: '45 Liters',
      extDim: '690 × 470 × 240 mm',
      intDim: '610 × 405 × 170 mm',
      weight: '1.69 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: Bare Box.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-62L',
      id: 'product-model-epp-62l',
      capacity: '62 Liters',
      extDim: '555 × 445 × 395 mm',
      intDim: '495 × 385 × 330 mm',
      weight: '1.76 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-65L',
      id: 'product-model-epp-65l',
      capacity: '65 Liters',
      extDim: '687 × 470 × 330 mm',
      intDim: '610 × 410 × 260 mm',
      weight: '2.02 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: Bare Box.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-78L',
      id: 'product-model-epp-78l',
      capacity: '78 Liters',
      extDim: '620 × 510 × 425 mm',
      intDim: '540 × 430 × 338 mm',
      weight: '2.84 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 40mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-81L',
      id: 'product-model-epp-81l',
      capacity: '81 Liters',
      extDim: '660 × 520 × 380 mm',
      intDim: '596 × 456 × 315 mm',
      weight: '2.34 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Blue/Pink/Yellow)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-102L',
      id: 'product-model-epp-102l',
      capacity: '102 Liters',
      extDim: '710 × 610 × 380 mm',
      intDim: '640 × 535 × 300 mm',
      weight: '3.02 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 40mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-108L',
      id: 'product-model-epp-108l',
      capacity: '108 Liters',
      extDim: '660 × 520 × 480 mm',
      intDim: '600 × 460 × 410 mm',
      weight: '2.72 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 30mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-137L',
      id: 'product-model-epp-137l',
      capacity: '137 Liters',
      extDim: '720 × 610 × 480 mm',
      intDim: '635 × 530 × 400 mm',
      weight: '3.73 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 40mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    },
    {
      series: 'Series 06: EPP High-Density Foam Boxes',
      subseries: 'Lightweight Circular Shippers',
      model: 'EPP-172L',
      id: 'product-model-epp-172l',
      capacity: '172 Liters',
      extDim: '710 × 610 × 580 mm',
      intDim: '640 × 535 × 500 mm',
      weight: '3.85 kg',
      hold: '6-8 hours (Cold / Insulated)',
      temp: 'Chilled / Frozen / Heat Insulation',
      material: 'EPP Foam (Wall: 40mm, Density Ratio: 15, Color: Grey)',
      app: 'Fresh food delivery / camping / picnic / fast food delivery. Configuration: With Handle & Hinge.'
    }
  ];

  // Helper to determine primary product category for Column 1
  function getProductCategory(p) {
    if (p.series) {
      if (p.series.includes('PCM Rigid Ice Bricks')) {
        return 'PCM Rigid Ice Bricks';
      }
      if (p.series.includes('Commercial Cooler Boxes')) {
        return 'Cooler Boxes';
      }
      if (p.series.includes('Gel Ice Packs')) {
        return 'Gel Ice Packs';
      }
      if (p.series.includes('Water-Activated Sheets')) {
        return 'Water-Activated Sheets';
      }
      if (p.series.includes('Water-Injection Ice Packs')) {
        return 'Water-Injection Ice Packs';
      }
      if (p.series.includes('Instant Cold Packs')) {
        return 'Instant Cold Packs';
      }
      if (p.series.includes('EPP High-Density Foam Boxes') || p.series.includes('EPP')) {
        return 'EPP Foam Boxes';
      }
    }
    const s = ((p.series || '') + ' ' + (p.subseries || '') + ' ' + (p.model || '')).toLowerCase();
    if (s.includes('pcm') || s.includes('phase change') || s.includes('xlh') || s.includes('xld')) {
      return 'PCM Rigid Ice Bricks';
    }
    if (s.includes('water-injection') || s.includes('zsd')) {
      return 'Water-Injection Ice Packs';
    }
    if (s.includes('water-activated') || s.includes('honeycomb') || s.includes('zxd') || s.includes('scx') || s.includes('self-absorbing')) {
      return 'Water-Activated Sheets';
    }
    if (s.includes('gel ice') || s.includes('cooling pouch')) {
      return 'Gel Ice Packs';
    }
    if (s.includes('instant') || s.includes('endothermic') || s.includes('sld')) {
      return 'Instant Cold Packs';
    }
    if (s.includes('epp') || s.includes('foam box') || s.includes('circular shipper')) {
      return 'EPP Foam Boxes';
    }
    if (s.includes('cooler box') || s.includes('rotomolded') || s.includes('trolley')) {
      return 'Cooler Boxes';
    }
    if (s.includes('oem') || s.includes('tooling') || s.includes('lab')) {
      return 'OEM / ODM Tooling & Services';
    }
    return 'Cooler Boxes';
  }

  // Helper function to build a styled table on any worksheet
  function buildProductSheet(worksheet, sheetTitle, sheetSubtitle, productList) {
    worksheet.views = [{ showGridLines: true }];

    // Apply tiled background watermark image (coldpackpro.com) if available
    if (watermarkImageId !== null) {
      try {
        worksheet.addBackgroundImage(watermarkImageId);
      } catch (e) {
        console.warn('[Watermark] Notice: addBackgroundImage failed on sheet:', e.message);
      }
    }

    // Page setup for direct printing: Landscape A4, fitting horizontally on 1 page width
    worksheet.properties.pageSetUpPr = { fitToPage: true };
    worksheet.pageSetup = {
      orientation: 'landscape',
      paperSize: 9, // A4
      fitToPage: true,
      fitToWidth: 1, // Fit all 10 columns within 1 page width!
      fitToHeight: 0, // Unconstrained height so rows flow smoothly across multiple pages
      margins: {
        left: 0.3,
        right: 0.3,
        top: 0.6,
        bottom: 0.6,
        header: 0.25,
        footer: 0.25
      },
      showGridLines: true,
      horizontalCentered: true,
      printTitlesRow: '6:6' // Table headers repeat on every printed page
    };

    // Header & Footer for multi-page printing with visible coldpackpro.com watermark
    worksheet.headerFooter = {
      differentFirst: false,
      differentOddEven: false,
      oddHeader: `&L&K808080Guangzhou Qtop Cold Chain Sciences Co.,Ltd.&C&B&K0284C7coldpackpro.com [OFFICIAL CATALOG WATERMARK]&R&K808080Official Product Catalog 2026 — ${sheetTitle}`,
      oddFooter: `&L&K0284C7WATERMARKED COPY: coldpackpro.com&C&K808080Page &P of &N&R&K808080CONFIDENTIAL & PROPRIETARY`,
      evenHeader: `&L&K808080Guangzhou Qtop Cold Chain Sciences Co.,Ltd.&C&B&K0284C7coldpackpro.com [OFFICIAL CATALOG WATERMARK]&R&K808080Official Product Catalog 2026 — ${sheetTitle}`,
      evenFooter: `&L&K0284C7WATERMARKED COPY: coldpackpro.com&C&K808080Page &P of &N&R&K808080CONFIDENTIAL & PROPRIETARY`
    };

    // Company Title Row
    worksheet.mergeCells('A1:J1');
    const titleCell = worksheet.getCell('A1');
    titleCell.value = 'Guangzhou Qtop Cold Chain Sciences Co.,Ltd. · OFFICIAL B2B PRODUCT CATALOG 2026';
    titleCell.font = { name: 'Calibri', size: 14, bold: true, color: { argb: 'FFFFFFFF' } };
    titleCell.fill = NAVY_HEADER_FILL;
    titleCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    worksheet.getRow(1).height = 36;
    for (let c = 1; c <= 10; c++) {
      const cell = worksheet.getRow(1).getCell(c);
      cell.fill = NAVY_HEADER_FILL;
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }

    // Subtitle & Interactive Navigation Notice
    worksheet.mergeCells('A2:J2');
    const subtitleCell = worksheet.getCell('A2');
    subtitleCell.value = `${sheetTitle} — ${sheetSubtitle}`;
    subtitleCell.font = { name: 'Calibri', size: 10.5, bold: true, color: { argb: 'FFFFFFFF' } };
    subtitleCell.fill = BLUE_SUBHEADER_FILL;
    subtitleCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    worksheet.getRow(2).height = 42;
    for (let c = 1; c <= 10; c++) {
      const cell = worksheet.getRow(2).getCell(c);
      cell.fill = BLUE_SUBHEADER_FILL;
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }

    // Dedicated Watermark & Copyright Safeguard Banner (Requested: coldpackpro.com watermark protection)
    worksheet.mergeCells('A3:J3');
    const watermarkCell = worksheet.getCell('A3');
    watermarkCell.value = '🛡️ WATERMARK & SECURITY NOTICE: Official Export Catalog issued by coldpackpro.com · Confidential & Proprietary · Genuine Factory Export Documentation · Unauthorized Copying Prohibited';
    watermarkCell.font = { name: 'Calibri', size: 9.5, bold: true, color: { argb: 'FF0284C7' } };
    watermarkCell.fill = HIGHLIGHT_ROW_FILL;
    watermarkCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    worksheet.getRow(3).height = 28;
    for (let c = 1; c <= 10; c++) {
      const cell = worksheet.getRow(3).getCell(c);
      cell.fill = HIGHLIGHT_ROW_FILL;
      cell.border = THIN_BORDER;
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }

    // Customer Instruction Notice (Horizontally centered & auto wrapped)
    worksheet.mergeCells('A4:J4');
    const noticeCell = worksheet.getCell('A4');
    noticeCell.value = '👉 INSTRUCTION: Click on any Product Model Title below (highlighted in bold blue with underline) to directly jump to its online specification sheet on ColdPackPro.com.';
    noticeCell.font = { name: 'Calibri', size: 10, italic: true, bold: true, color: { argb: 'FF0369A1' } };
    noticeCell.fill = WHITE_FILL;
    noticeCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    worksheet.getRow(4).height = 36;
    for (let c = 1; c <= 10; c++) {
      const cell = worksheet.getRow(4).getCell(c);
      cell.fill = WHITE_FILL;
      cell.border = THIN_BORDER;
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }

    // Contact Quick Bar (Horizontally centered & auto wrapped)
    worksheet.mergeCells('A5:J5');
    const contactCell = worksheet.getCell('A5');
    contactCell.value = 'Factory: Guangzhou Qtop Cold Chain Sciences Co.,Ltd.  |  Contact: Mr. Yang  |  WhatsApp / Mobile: +86 13925109703  |  Email: info@coldpackpro.com  |  Online Portal: https://coldpackpro.com/catalog';
    contactCell.font = { name: 'Calibri', size: 9.5, color: { argb: 'FF475569' } };
    contactCell.fill = ZEBRA_LIGHT_FILL;
    contactCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    worksheet.getRow(5).height = 34;
    for (let c = 1; c <= 10; c++) {
      const cell = worksheet.getRow(5).getCell(c);
      cell.fill = ZEBRA_LIGHT_FILL;
      cell.border = THIN_BORDER;
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }

    // Table Column Headers
    const headers = [
      'Category',
      'Product Model Title (Clickable Hyperlink)',
      'Usable Capacity',
      'External Dimensions (L×W×H)',
      'Internal Dimensions (L×W×H)',
      'Tare / Net Weight',
      'Thermal Hold Time',
      'Operating Temp Zone',
      'Material / Formulation Architecture',
      'Recommended Payload & Cold-Chain Applications'
    ];

    const headerRow = worksheet.addRow(headers);
    headerRow.height = 32;
    headerRow.eachCell((cell) => {
      cell.fill = ACCENT_BAR_FILL;
      cell.font = HEADER_FONT;
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      cell.border = THIN_BORDER;
    });

    // Add Data Rows (Attachments 3 & 4: all cells centered, wrapText: true, no bottom clipping)
    productList.forEach((p, idx) => {
      const isZebra = idx % 2 === 1;
      const rowFill = isZebra ? ZEBRA_LIGHT_FILL : WHITE_FILL;
      const targetUrl = `${BASE_URL}#${p.id}`;

      const row = worksheet.addRow([
        getProductCategory(p),
        p.model, // Will be set to hyperlink object below
        p.capacity,
        p.extDim,
        p.intDim,
        p.weight,
        p.hold,
        p.temp,
        p.material,
        p.app
      ]);

      // Dynamic row height ensuring all wrapped text is completely visible without bottom clipping
      const maxTextLen = Math.max(
        (p.app || '').length,
        (p.material || '').length,
        (p.model || '').length * 1.5,
        (p.temp || '').length * 2
      );
      if (maxTextLen > 110) {
        row.height = 70;
      } else if (maxTextLen > 70) {
        row.height = 56;
      } else if (maxTextLen > 40) {
        row.height = 44;
      } else {
        row.height = 34;
      }

      // Apply standard cell styles with wrapText: true and centered alignment across all columns
      for (let c = 1; c <= 10; c++) {
        const cell = row.getCell(c);
        cell.border = THIN_BORDER;
        cell.fill = rowFill;
        cell.font = REGULAR_FONT;
        cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      }

      // Category Column Center & Bold
      row.getCell(1).font = { ...REGULAR_FONT, bold: true, color: { argb: 'FF334155' } };

      // MODEL TITLE COLUMN (Column 2): SPECIFIC HYPERLINK WITH BLUE FONT & UNDERLINE & CENTERED & wrapText
      const modelCell = row.getCell(2);
      modelCell.value = {
        text: p.model,
        hyperlink: targetUrl,
        tooltip: `Click to view ${p.model} specification sheet on ColdPackPro Online Catalog`
      };
      modelCell.font = BLUE_LINK_FONT;
      modelCell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    });

    // Attachment 4 & 5 & 6: Last row in every table with company details and watermark security notice
    worksheet.addRow([]);
    const footerText =
      'GUANGZHOU QTOP COLD CHAIN SCIENCES CO.,LTD\n' +
      'Unit 101, No. 4, Lane 4, South of Dening Road, Caohe, Qiaonan Street, Panyu District, Guangzhou, China\n' +
      '🌐 coldpackpro.com · ✉ info@coldpackpro.com\n' +
      '☎ +86-20-39211361 · Atten: Mr. Yang · WhatsApp / WeChat: +86 13925109703\n' +
      '🔒 [SECURITY WATERMARK: Issued by coldpackpro.com · Confidential & Proprietary · Genuine Factory Export Documentation]';

    const footerRow = worksheet.addRow([footerText]);
    footerRow.height = 118;
    worksheet.mergeCells(`A${footerRow.number}:J${footerRow.number}`);
    for (let c = 1; c <= 10; c++) {
      const footCell = footerRow.getCell(c);
      footCell.fill = ZEBRA_LIGHT_FILL;
      footCell.border = THIN_BORDER;
      footCell.font = { name: 'Calibri', size: 9.5, color: { argb: 'FF1E293B' } };
      footCell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true, indent: 1 };
    }

    // Column widths adjustment (generous printable layout)
    worksheet.getColumn(1).width = 18; // Category (e.g. Cooler Boxes)
    worksheet.getColumn(2).width = 24; // Product Model Title
    worksheet.getColumn(3).width = 15; // Capacity
    worksheet.getColumn(4).width = 22; // Ext Dim
    worksheet.getColumn(5).width = 22; // Int Dim
    worksheet.getColumn(6).width = 15; // Tare Weight
    worksheet.getColumn(7).width = 18; // Thermal Hold
    worksheet.getColumn(8).width = 20; // Temp Zone
    worksheet.getColumn(9).width = 32; // Material
    worksheet.getColumn(10).width = 46; // Applications
  }

  // =========================================================================
  // SHEET 1: MASTER CATALOG (ALL PRODUCTS & SPECIFICATIONS)
  // =========================================================================
  const masterSheet = workbook.addWorksheet('Master Product Catalog', {
    properties: { tabColor: { argb: 'FF0284C7' } }
  });
  buildProductSheet(
    masterSheet,
    'Complete B2B Product Line: Coolers, Gel Ice Packs, PCM Bricks, Hydration Sheets, Water-Injection Pouches, Instant Packs, EPP Shippers',
    'Direct Manufacturer Sourcing · ISO 9001:2015 · CNAS Air & Sea Transport Safety Certified',
    products
  );

  // =========================================================================
  // SHEET 2: COMMERCIAL COOLER BOXES (33+ MODELS)
  // =========================================================================
  const coolerSheet = workbook.addWorksheet('Cooler Boxes (33+ Models)', {
    properties: { tabColor: { argb: 'FF0369A1' } }
  });
  const coolerProducts = products.filter(p => p.series.includes('Cooler Boxes'));
  buildProductSheet(
    coolerSheet,
    'Commercial Cooler Boxes & Heavy-Duty Insulated Shippers (6L to 1,000L)',
    'Medical, Food Delivery, Marine Fishery, Interlocking Stackable, Hotel 304 Stainless & Rotomolded Field Coolers',
    coolerProducts
  );

  // =========================================================================
  // SHEET 3: PCM RIGID PHASE CHANGE BRICKS
  // =========================================================================
  const pcmSheet = workbook.addWorksheet('PCM Rigid Ice Bricks', {
    properties: { tabColor: { argb: 'FF0891B2' } }
  });
  const pcmProducts = products.filter(p => p.series.includes('PCM Rigid Ice Bricks'));
  buildProductSheet(
    pcmSheet,
    'Phase Change Material (PCM) Rigid Ice Bricks (200g to 1600g)',
    'Engineered Eutectic Plateaus (-21°C, -16°C, +5°C) · Non-Hazardous Dry Ice Alternative',
    pcmProducts
  );

  // =========================================================================
  // SHEET 4: GEL ICE PACKS
  // =========================================================================
  const gelSheet = workbook.addWorksheet('Gel Ice Packs', {
    properties: { tabColor: { argb: 'FF2563EB' } }
  });
  const gelProducts = products.filter(p => p.series.includes('Gel Ice Packs'));
  buildProductSheet(
    gelSheet,
    'High-Efficiency Gel Ice Packs (100g to 1000g Multi-Layer Pouches)',
    'Food-Grade Non-Toxic Sodium Polyacrylate (SAP) · Multi-Track Puncture-Resistant PA/PE Film',
    gelProducts
  );

  // =========================================================================
  // SHEET 5: WATER-ACTIVATED SHEETS (SELF-ABSORBING ZXD & SCX SERIES #1–24)
  // =========================================================================
  const waterSheet = workbook.addWorksheet('Water-Activated Sheets', {
    properties: { tabColor: { argb: 'FF059669' } }
  });
  const waterProducts = products.filter(p => p.series.includes('Water-Activated Sheets'));
  buildProductSheet(
    waterSheet,
    'Water-Activated Flexible Cold Sheets (Self-Absorbing ZXD & SCX Series #1–24)',
    'Pre-Cut Sheets, Strips, Multi-Cell Grids & Composite Blankets · Submerge 3–5 Mins in Water · Slashes 95% Shipping Volume',
    waterProducts
  );

  // =========================================================================
  // SHEET 6: WATER-INJECTION ICE PACKS (ZSD SERIES #1–5)
  // =========================================================================
  const waterInjectionSheet = workbook.addWorksheet('Water-Injection Ice Packs', {
    properties: { tabColor: { argb: 'FF0284C7' } }
  });
  const waterInjectionProducts = products.filter(p => p.series.includes('Water-Injection Ice Packs'));
  buildProductSheet(
    waterInjectionSheet,
    'Water-Injection Ice Pack Series: Self-Sealing Pouches (#1–5 · ZSD Series)',
    'Pre-Filled Dry SAP Coolant Powder · Auto-Sealing One-Way Inlet Valve · Gels within 60s Without Heat Sealers',
    waterInjectionProducts
  );

  // =========================================================================
  // SHEET 7: INSTANT COLD PACKS
  // =========================================================================
  const instantSheet = workbook.addWorksheet('Instant Cold Packs', {
    properties: { tabColor: { argb: 'FFDC2626' } }
  });
  const instantProducts = products.filter(p => p.series.includes('Instant Cold Packs'));
  buildProductSheet(
    instantSheet,
    'Instant Cold Packs (Endothermic Rapid Reaction <3s)',
    'Single-Use Emergency Cooling Without Pre-Freezing · Immediate 0°C Cold Shock for Trauma & Field Backup',
    instantProducts
  );

  // =========================================================================
  // SHEET 8: EPP FOAM BOXES
  // =========================================================================
  const eppSheet = workbook.addWorksheet('EPP Foam Boxes', {
    properties: { tabColor: { argb: 'FF7C3AED' } }
  });
  const eppProducts = products.filter(p => p.series.includes('EPP High-Density Foam Boxes') || p.series.includes('EPP'));
  buildProductSheet(
    eppSheet,
    'EPP High-Density Foam Boxes (Lightweight Circular Shippers 8L to 172L)',
    'Expanded Polypropylene (Wall 20–40mm, Density Ratio 15) · Commercial Reusable Circular Shippers',
    eppProducts
  );

  // =========================================================================
  // SHEET 9: TEMPERATURE MATRIX & FACTORY SOURCING
  // =========================================================================
  const matrixSheet = workbook.addWorksheet('Temp Matrix & Sourcing Info', {
    properties: { tabColor: { argb: 'FF0D9488' } }
  });
  matrixSheet.views = [{ showGridLines: true }];

  // Apply tiled background watermark image (coldpackpro.com) if available
  if (watermarkImageId !== null) {
    try {
      matrixSheet.addBackgroundImage(watermarkImageId);
    } catch (e) {
      console.warn('[Watermark] MatrixSheet addBackgroundImage failed:', e.message);
    }
  }

  // Page setup for direct printing: Landscape A4, fitting horizontally on 1 page width
  matrixSheet.properties.pageSetUpPr = { fitToPage: true };
  matrixSheet.pageSetup = {
    orientation: 'landscape',
    paperSize: 9,
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 0,
    margins: { left: 0.3, right: 0.3, top: 0.6, bottom: 0.6, header: 0.25, footer: 0.25 },
    showGridLines: true,
    horizontalCentered: true
  };

  // Header & Footer for multi-page printing with visible watermark:
  matrixSheet.headerFooter = {
    differentFirst: false,
    differentOddEven: false,
    oddHeader: '&L&K808080Guangzhou Qtop Cold Chain Sciences Co.,Ltd.&C&B&K0284C7coldpackpro.com [OFFICIAL CATALOG WATERMARK]&R&K808080Cold-Chain Selection Matrix & Sourcing Guide',
    oddFooter: '&L&K0284C7WATERMARKED COPY: coldpackpro.com&C&K808080Page &P of &N&R&K808080CONFIDENTIAL & PROPRIETARY',
    evenHeader: '&L&K808080Guangzhou Qtop Cold Chain Sciences Co.,Ltd.&C&B&K0284C7coldpackpro.com [OFFICIAL CATALOG WATERMARK]&R&K808080Cold-Chain Selection Matrix & Sourcing Guide',
    evenFooter: '&L&K0284C7WATERMARKED COPY: coldpackpro.com&C&K808080Page &P of &N&R&K808080CONFIDENTIAL & PROPRIETARY'
  };

  // Header Banner
  matrixSheet.mergeCells('A1:F1');
  const mTitle = matrixSheet.getCell('A1');
  mTitle.value = 'Guangzhou Qtop Cold Chain Sciences Co.,Ltd. · COLD-CHAIN SELECTION MATRIX & SOURCING GUIDE';
  mTitle.font = { name: 'Calibri', size: 13, bold: true, color: { argb: 'FFFFFFFF' } };
  mTitle.fill = NAVY_HEADER_FILL;
  mTitle.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  matrixSheet.getRow(1).height = 36;
  for (let c = 1; c <= 6; c++) {
    const cell = matrixSheet.getRow(1).getCell(c);
    cell.fill = NAVY_HEADER_FILL;
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  }

  matrixSheet.mergeCells('A2:F2');
  const mSub = matrixSheet.getCell('A2');
  mSub.value = 'Target Temperature Threshold Matrix & Validated Packaging Combinations';
  mSub.font = { name: 'Calibri', size: 10.5, bold: true, color: { argb: 'FFFFFFFF' } };
  mSub.fill = BLUE_SUBHEADER_FILL;
  mSub.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  matrixSheet.getRow(2).height = 38;
  for (let c = 1; c <= 6; c++) {
    const cell = matrixSheet.getRow(2).getCell(c);
    cell.fill = BLUE_SUBHEADER_FILL;
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  }

  // Dedicated Watermark Security Banner
  matrixSheet.mergeCells('A3:F3');
  const mWm = matrixSheet.getCell('A3');
  mWm.value = '🛡️ WATERMARK & SECURITY NOTICE: coldpackpro.com · Official Digital Selection Matrix · Confidential & Proprietary · Genuine Factory Export Documentation';
  mWm.font = { name: 'Calibri', size: 9.5, bold: true, color: { argb: 'FF0284C7' } };
  mWm.fill = HIGHLIGHT_ROW_FILL;
  mWm.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  matrixSheet.getRow(3).height = 28;
  for (let c = 1; c <= 6; c++) {
    const cell = matrixSheet.getRow(3).getCell(c);
    cell.fill = HIGHLIGHT_ROW_FILL;
    cell.border = THIN_BORDER;
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  }

  const matrixHeaders = [
    'Target Temperature Zone',
    'Recommended Passive Container',
    'Recommended Coolant / PCM',
    'Phase Point Plateau',
    'Thermal Hold Duration',
    'Primary Cargo Payloads & Regulations'
  ];
  const mHeaderRow = matrixSheet.addRow(matrixHeaders);
  mHeaderRow.height = 32;
  mHeaderRow.eachCell(cell => {
    cell.fill = ACCENT_BAR_FILL;
    cell.font = HEADER_FONT;
    cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    cell.border = THIN_BORDER;
  });

  const matrixData = [
    [
      'Ultra-Low Cryogenic (-78°C / Dry Ice Alt)',
      'HP-320L Dry Ice Cooler Box',
      'XLD-600 / Sub-Zero PCM Bricks',
      '-78.5°C to -21°C',
      '72 – 120 Hours',
      'Cryogenic biologics, clinical trial specimens, dry-ice elimination for DTC air freight without UN1845 dangerous goods surcharge.'
    ],
    [
      'Deep Frozen (-21°C to -15°C)',
      'EPP-85L / HP Heavy Coolers (HP-65L to HP-100L)',
      'XLD-600 / XLH-1200 (-21°C Bricks)',
      '-21°C Plateau',
      '48 – 96 Hours',
      'Frozen wagyu, sashimi tuna, ice cream, biologics, export seafood cargo and clinical cold-chain freight.'
    ],
    [
      'Strict Chilled (2°C to 8°C Pharma)',
      'HP-6L to HP-65L Medical Coolers / EPP-35L',
      'XLH-500 (+4°C Anti-Freeze Bricks)',
      '+4°C Plateau',
      '36 – 72 Hours',
      'Vaccines, insulin, diagnostic reagents, blood plasma, lab samples (UN2814 & IATA DGR non-restricted).'
    ],
    [
      'Controlled Room Temp (15°C to 25°C)',
      'EPP Insulated Shippers (18L – 60L)',
      'CRT Phase Change Buffers (+22°C)',
      '+20°C to +22°C',
      '48 – 72 Hours',
      'Monoclonal antibodies, temperature-sensitive oral tablets, clinical diagnostics, premium cosmetics.'
    ],
    [
      'Last-Mile Fresh Grocery & Catering',
      'HP-8L to HP-100L Delivery Coolers / HWBD-10',
      'XLD-250 to XLD-500 Gel Packs / ZXD-420 Sheets',
      '0°C / -10°C Formulations',
      '12 – 24 Hours',
      'Urban fresh groceries, restaurant banquet transfers, bakery, meal kits, scooter courier logistics.'
    ]
  ];

  matrixData.forEach((rowValues, idx) => {
    const r = matrixSheet.addRow(rowValues);
    r.height = 58; // Generous height ensuring all cargo notes wrap with zero obstruction
    const isZebra = idx % 2 === 1;
    for (let c = 1; c <= 6; c++) {
      const cell = r.getCell(c);
      cell.fill = isZebra ? ZEBRA_LIGHT_FILL : WHITE_FILL;
      cell.border = THIN_BORDER;
      cell.font = REGULAR_FONT;
      cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
    r.getCell(1).font = { ...REGULAR_FONT, bold: true, color: { argb: 'FF0369A1' } };
  });

  // Attachment 1: Factory directory section deleted; Attachment 4 & 5 & 6: 5-line left-aligned footer with watermark notice
  matrixSheet.addRow([]);
  const mFooterText =
    'GUANGZHOU QTOP COLD CHAIN SCIENCES CO.,LTD\n' +
    'Unit 101, No. 4, Lane 4, South of Dening Road, Caohe, Qiaonan Street, Panyu District, Guangzhou, China\n' +
    '🌐 coldpackpro.com · ✉ info@coldpackpro.com\n' +
    '☎ +86-20-39211361 · Atten: Mr. Yang · WhatsApp / WeChat: +86 13925109703\n' +
    '🔒 [SECURITY WATERMARK: Issued by coldpackpro.com · Selection Matrix & Sourcing Guide · Genuine Factory Export Documentation]';

  const mFooterRow = matrixSheet.addRow([mFooterText]);
  mFooterRow.height = 118;
  matrixSheet.mergeCells(`A${mFooterRow.number}:F${mFooterRow.number}`);
  for (let c = 1; c <= 6; c++) {
    const mFootCell = mFooterRow.getCell(c);
    mFootCell.fill = ZEBRA_LIGHT_FILL;
    mFootCell.border = THIN_BORDER;
    mFootCell.font = { name: 'Calibri', size: 9.5, color: { argb: 'FF1E293B' } };
    mFootCell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true, indent: 1 };
  }

  matrixSheet.getColumn(1).width = 28;
  matrixSheet.getColumn(2).width = 28;
  matrixSheet.getColumn(3).width = 28;
  matrixSheet.getColumn(4).width = 20;
  matrixSheet.getColumn(5).width = 18;
  matrixSheet.getColumn(6).width = 48;

  // Save to target locations
  const targetDir = path.join(__dirname, '..', 'assets');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const outputPath = path.join(targetDir, 'ColdPackPro-Full-Product-Catalog.xlsx');
  await workbook.xlsx.writeFile(outputPath);
  console.log(`Successfully generated full XLSX catalog at: ${outputPath}`);
  return outputPath;
}

if (require.main === module) {
  generateFullCatalogXlsx()
    .then(p => {
      console.log('Catalog generation complete:', p);
      process.exit(0);
    })
    .catch(err => {
      console.error('Error generating catalog:', err);
      process.exit(1);
    });
}

module.exports = { generateFullCatalogXlsx };
