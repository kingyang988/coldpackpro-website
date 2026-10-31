const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

function wrapText(text, font, size, maxWidth) {
  if (!text) return [];
  const words = text.replace(/\r\n/g, ' ').replace(/\n/g, ' ').split(/\s+/).filter(Boolean);
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    const testLine = currentLine ? currentLine + ' ' + word : word;
    const testWidth = font.widthOfTextAtSize(testLine, size);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }
      if (font.widthOfTextAtSize(word, size) > maxWidth) {
        let partial = '';
        for (const char of word) {
          if (font.widthOfTextAtSize(partial + char, size) <= maxWidth) {
            partial += char;
          } else {
            lines.push(partial);
            partial = char;
          }
        }
        currentLine = partial;
      } else {
        currentLine = word;
      }
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines;
}

async function generateWhitepaperPdf() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);

  const PAGE_WIDTH = 595.28;
  const PAGE_HEIGHT = 841.89;
  const MARGIN_LEFT = 42;
  const MARGIN_RIGHT = 42;
  const MARGIN_TOP = 42;
  const MARGIN_BOTTOM = 46;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT; // 511.28

  let currentPage = null;
  let currentY = 0;
  const pages = [];

  function addNewPage() {
    currentPage = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pages.push(currentPage);

    // Running top header bar
    currentPage.drawRectangle({
      x: 0,
      y: PAGE_HEIGHT - 28,
      width: PAGE_WIDTH,
      height: 28,
      color: rgb(0.04, 0.08, 0.16)
    });

    currentPage.drawText('COLDPACKPRO · FACTORY TECHNICAL WHITEPAPER', {
      x: MARGIN_LEFT,
      y: PAGE_HEIGHT - 18,
      size: 8,
      font: fontBold,
      color: rgb(0.22, 0.76, 0.98)
    });

    const headerRight = 'https://coldpackpro.com · OEM & EXPORT';
    currentPage.drawText(headerRight, {
      x: PAGE_WIDTH - MARGIN_RIGHT - fontBold.widthOfTextAtSize(headerRight, 8),
      y: PAGE_HEIGHT - 18,
      size: 8,
      font: fontBold,
      color: rgb(0.78, 0.85, 0.94)
    });

    currentY = PAGE_HEIGHT - 48;
    return currentPage;
  }

  function ensureSpace(heightNeeded) {
    if (!currentPage || currentY - heightNeeded < MARGIN_BOTTOM) {
      addNewPage();
    }
  }

  // Initial page
  addNewPage();

  // Document Title Banner
  const titleBoxHeight = 88;
  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: currentY - titleBoxHeight,
    width: CONTENT_WIDTH,
    height: titleBoxHeight,
    color: rgb(0.96, 0.98, 1.0),
    borderColor: rgb(0.72, 0.84, 0.96),
    borderWidth: 1
  });

  currentPage.drawText('TECHNICAL WHITE PAPER & SOURCING GUIDE', {
    x: MARGIN_LEFT + 14,
    y: currentY - 18,
    size: 8.5,
    font: fontBold,
    color: rgb(0.08, 0.42, 0.78)
  });

  const titleLines = wrapText(
    'Beyond Dry Ice & Sweating Gel Packs: The Ultimate Engineering Guide to Sub-Zero Cold-Chain Packaging with -21°C Phase Change Materials',
    fontBold,
    12.5,
    CONTENT_WIDTH - 28
  );
  let titleY = currentY - 36;
  for (const tline of titleLines) {
    currentPage.drawText(tline, {
      x: MARGIN_LEFT + 14,
      y: titleY,
      size: 12.5,
      font: fontBold,
      color: rgb(0.05, 0.1, 0.22)
    });
    titleY -= 17;
  }

  const metaText = 'By ColdPackPro Guangzhou Engineering Group · Export Cold-Chain Packaging · 12 min read';
  currentPage.drawText(metaText, {
    x: MARGIN_LEFT + 14,
    y: currentY - titleBoxHeight + 11,
    size: 8,
    font: fontRegular,
    color: rgb(0.35, 0.45, 0.55)
  });

  currentY -= (titleBoxHeight + 18);

  function addH2(text) {
    // Keep with next paragraph: need space for header + at least 3 body lines
    ensureSpace(60);
    currentY -= 6;
    currentPage.drawRectangle({
      x: MARGIN_LEFT,
      y: currentY - 2,
      width: 4,
      height: 15,
      color: rgb(0.08, 0.42, 0.78)
    });
    currentPage.drawText(text, {
      x: MARGIN_LEFT + 12,
      y: currentY,
      size: 12,
      font: fontBold,
      color: rgb(0.06, 0.12, 0.25)
    });
    currentY -= 18;
  }

  function addH3(text) {
    ensureSpace(45);
    currentY -= 4;
    currentPage.drawText(text, {
      x: MARGIN_LEFT,
      y: currentY,
      size: 10,
      font: fontBold,
      color: rgb(0.12, 0.24, 0.42)
    });
    currentY -= 14;
  }

  function addParagraph(text, isItalic = false) {
    const font = isItalic ? fontItalic : fontRegular;
    const lines = wrapText(text, font, 9, CONTENT_WIDTH);
    for (const line of lines) {
      ensureSpace(13);
      currentPage.drawText(line, {
        x: MARGIN_LEFT,
        y: currentY,
        size: 9,
        font: font,
        color: rgb(0.2, 0.25, 0.3)
      });
      currentY -= 12.5;
    }
    currentY -= 5;
  }

  function addBullet(title, body) {
    const fullText = (title ? title + ' ' : '') + body;
    const lines = wrapText(fullText, fontRegular, 9, CONTENT_WIDTH - 15);
    for (let i = 0; i < lines.length; i++) {
      ensureSpace(13);
      if (i === 0) {
        currentPage.drawText('•', {
          x: MARGIN_LEFT + 2,
          y: currentY,
          size: 10,
          font: fontBold,
          color: rgb(0.08, 0.42, 0.78)
        });
      }
      currentPage.drawText(lines[i], {
        x: MARGIN_LEFT + 15,
        y: currentY,
        size: 9,
        font: fontRegular,
        color: rgb(0.2, 0.25, 0.3)
      });
      currentY -= 12.5;
    }
    currentY -= 4;
  }

  function renderCleanCallout(title, steps) {
    const totalLines = steps.reduce((acc, s) => acc + 1 + wrapText(s.desc, fontRegular, 8.5, CONTENT_WIDTH - 24).length, 0);
    const boxHeight = 26 + totalLines * 12 + steps.length * 6;
    ensureSpace(boxHeight + 10);

    const boxY = currentY - boxHeight;
    currentPage.drawRectangle({
      x: MARGIN_LEFT,
      y: boxY,
      width: CONTENT_WIDTH,
      height: boxHeight,
      color: rgb(0.965, 0.98, 1.0),
      borderColor: rgb(0.75, 0.85, 0.96),
      borderWidth: 0.8
    });

    let textY = currentY - 15;
    currentPage.drawText(title, {
      x: MARGIN_LEFT + 12,
      y: textY,
      size: 10,
      font: fontBold,
      color: rgb(0.06, 0.25, 0.5)
    });
    textY -= 16;

    for (const step of steps) {
      currentPage.drawText(`${step.step}: ${step.title}`, {
        x: MARGIN_LEFT + 12,
        y: textY,
        size: 9,
        font: fontBold,
        color: rgb(0.08, 0.38, 0.72)
      });
      textY -= 12.5;

      const lines = wrapText(step.desc, fontRegular, 8.5, CONTENT_WIDTH - 24);
      for (const l of lines) {
        currentPage.drawText(l, {
          x: MARGIN_LEFT + 12,
          y: textY,
          size: 8.5,
          font: fontRegular,
          color: rgb(0.2, 0.25, 0.32)
        });
        textY -= 11.5;
      }
      textY -= 5;
    }

    currentY = boxY - 12;
  }

  // Precise Table Renderer with per-cell text wrapping
  function renderTable(headers, rows, colWidths) {
    const PADDING_X = 6;
    const PADDING_Y = 5;
    const FONT_SIZE = 7.5;
    const LINE_HEIGHT = 10;

    function drawTableHeader() {
      ensureSpace(28);
      const headerY = currentY - 20;
      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: headerY,
        width: CONTENT_WIDTH,
        height: 20,
        color: rgb(0.06, 0.16, 0.32)
      });

      let curX = MARGIN_LEFT;
      for (let i = 0; i < headers.length; i++) {
        const hText = headers[i];
        currentPage.drawText(hText, {
          x: curX + PADDING_X,
          y: headerY + 6,
          size: FONT_SIZE,
          font: fontBold,
          color: rgb(1, 1, 1)
        });
        curX += colWidths[i];
      }
      currentY = headerY;
    }

    drawTableHeader();

    for (let rIdx = 0; rIdx < rows.length; rIdx++) {
      const row = rows[rIdx];
      const cellLines = [];
      let maxLinesInRow = 1;

      for (let cIdx = 0; cIdx < row.length; cIdx++) {
        const text = String(row[cIdx] || '');
        const maxCellW = colWidths[cIdx] - PADDING_X * 2;
        const font = cIdx === 0 ? fontBold : fontRegular;
        const lines = wrapText(text, font, FONT_SIZE, maxCellW);
        cellLines.push(lines);
        if (lines.length > maxLinesInRow) {
          maxLinesInRow = lines.length;
        }
      }

      const rowHeight = maxLinesInRow * LINE_HEIGHT + PADDING_Y * 2;

      if (currentY - rowHeight < MARGIN_BOTTOM) {
        addNewPage();
        drawTableHeader();
      }

      const rowY = currentY - rowHeight;
      const bgColor = rIdx % 2 === 0 ? rgb(0.97, 0.985, 1.0) : rgb(1, 1, 1);

      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: rowY,
        width: CONTENT_WIDTH,
        height: rowHeight,
        color: bgColor,
        borderColor: rgb(0.84, 0.88, 0.93),
        borderWidth: 0.5
      });

      let curX = MARGIN_LEFT;
      for (let cIdx = 0; cIdx < row.length; cIdx++) {
        const lines = cellLines[cIdx];
        const font = cIdx === 0 ? fontBold : fontRegular;
        const textColor = cIdx === 0 ? rgb(0.08, 0.16, 0.32) : rgb(0.2, 0.25, 0.32);

        let lineY = currentY - PADDING_Y - 7.5;
        for (const line of lines) {
          currentPage.drawText(line, {
            x: curX + PADDING_X,
            y: lineY,
            size: FONT_SIZE,
            font: font,
            color: textColor
          });
          lineY -= LINE_HEIGHT;
        }

        if (cIdx < row.length - 1) {
          currentPage.drawLine({
            start: { x: curX + colWidths[cIdx], y: rowY },
            end: { x: curX + colWidths[cIdx], y: currentY },
            thickness: 0.5,
            color: rgb(0.84, 0.88, 0.93)
          });
        }

        curX += colWidths[cIdx];
      }

      currentY = rowY;
    }

    currentY -= 14;
  }

  // --- CONTENT SECTION 1 ---
  addH2('1. The Three Deadly Failure Modes in Parcel Cold Chains');
  addParagraph(
    'In direct-to-consumer (DTC) premium perishables, pharmaceutical exports, and high-value biological logistics, packaging failure is never merely a melted ice pack—it triggers spoiled inventory, customer chargebacks, regulatory quarantines, and permanently damaged brand trust.'
  );

  addH3('A. The "Sweating Box" Syndrome (Dew-Point Saturation)');
  addParagraph(
    'Standard gel ice packs (PE/Nylon film bags) condense atmospheric moisture continuously onto their exterior whenever parcel air drops below the dew point. Cardboard corrugated boxes soften and collapse by 40-70% when soaked with moisture, crushing payloads and compromising structural thermal insulation.'
  );

  addH3('B. Cabin Decompression and Gel Pack Bursting');
  addParagraph(
    "Standard economy gel pouches rely on three-side heat-sealed film. When air freighters ascend or operate across mountainous corridors, cabin pressure drops from 101.3 kPa to below 75 kPa. Micro-voids of trapped air expand violently (Boyle's Law), bursting uneven weld seams and contaminating high-value payloads with polyacrylate slime."
  );

  addH3('C. The "Thermal Short-Circuit" (Melt Plateaus)');
  addParagraph(
    'Ordinary water melts at 0°C (32°F) with a latent heat of fusion of roughly 334 J/g. While suitable for chilled dairy or produce (2°C to 8°C), 0°C causes catastrophic thaw in frozen wagyu, artisan gelato, or biological reagents. Sub-zero payloads require coolants formulated to phase-change far below 0°C—specifically at -16°C or -21°C.'
  );

  // Failure Modes Comparison Table
  // Total width: 511.28 pt
  const failureHeaders = [
    'Packaging Format',
    'Freeze Point',
    'Primary Risk Vector',
    'Transit Window',
    'Guangzhou Factory Recommendation'
  ];
  const failureColWidths = [105, 60, 115, 75, 156.28];
  const failureRows = [
    [
      'Standard Gel Pack (PE/Nylon)',
      '0°C (32°F)',
      'Punctures, air cargo decompression burst, heavy condensation sweating.',
      '12 - 24 Hours',
      'Domestic ground chilled cargo (2-8°C) only. Never use for export air freight or frozen items.'
    ],
    [
      'Dry Ice (Solid CO2)',
      '-78.5°C (-109°F)',
      'Sublimation voids, Class 9 UN1845 hazmat fees, severe frostbite risk.',
      '24 - 48 Hours',
      'Cryogenic specialty pharma only. Inefficient for DTC food parcels due to surcharges and void spaces.'
    ],
    [
      'ColdPackPro Rigid PCM Brick',
      '-21°C, -16°C, or 0°C',
      'Requires proper upfront blast freezer conditioning (-26°C for -21°C pack).',
      '48 - 72+ Hours',
      'High-value export frozen meats, sashimi, vaccines & overseas air parcel shipping.'
    ],
    [
      'Water-Activated Cooling Sheets',
      '0°C (hydrated)',
      'Requires pre-hydration soaking before blast freezing.',
      '24 - 36 Hours',
      'Lowest inbound freight cost for overseas SME importers (ships completely flat and dry).'
    ]
  ];

  renderTable(failureHeaders, failureRows, failureColWidths);

  // --- CONTENT SECTION 2 ---
  addH2('2. The Dry Ice Trap: Why SMEs Are Paying Thousands in Hidden Freight Penalties');
  addParagraph(
    'For decades, dry ice was considered the default coolant for sub-zero parcel transport. For small-to-medium enterprises and international importers, however, dry ice has become a balance-sheet killer for three reasons:'
  );

  addBullet(
    'Exorbitant Hazmat Surcharges (UN1845):',
    'Dry ice sublimates carbon dioxide gas and is regulated under IATA/DOT as Class 9 Dangerous Goods. Major carriers (FedEx, UPS, DHL) require hazmat declarations and levy surcharges of $25 to $90 per package.'
  );
  addBullet(
    'Volumetric Loss & Sublimation Voids:',
    'Dry ice sublimates directly into gas at a rate of 2.3 to 4.5 kg (5 to 10 lbs) every 24 hours. A 5 kg block leaves a massive empty air void inside the shipper by hour 40, turning into a convective heat chimney that thaws the payload.'
  );
  addBullet(
    'Occupational Safety & Handling Hazards:',
    'At -78.5°C, workers require cryogenic PPE and certified training. In enclosed fulfillment stations, sublimating CO2 poses suffocation risks, requiring calibrated air monitors.'
  );

  // --- CONTENT SECTION 3 ---
  addH2('3. Guangzhou Engineering: Inside the HDPE Rigid Cold Pack Architecture');
  addParagraph(
    'At ColdPackPro, our Guangzhou manufacturing complex engineers heavy-duty blow-molded cold packs that eliminate bulging, sweating, and rupture through rigorous structural innovations:'
  );

  addH3('1. Internal Reinforcing Pillars (Anti-Bulging Geometry)');
  addParagraph(
    'Water and eutectic fluids expand by ~9% during crystallization. Without restraint, flat plastic containers deform into an oval shape, losing contact with payloads. Our molds feature mechanical through-hole pillars and ribbed ties that lock walls flat, maintaining 100% surface conductive cooling contact.'
  );

  addH3('2. Ultrasonic Induction Sealing vs. Screw Caps');
  addParagraph(
    'Threaded caps with silicone gaskets frequently loosen under transit vibration. We utilize automated ultrasonic friction welding and induction-melted HDPE solid plugs. Every pack withstands 2.0-meter drop tests onto solid concrete and hydrostatic pressures exceeding 3.5 bar with zero leakage.'
  );

  // Explicitly ensuring NO "(HDPE 5502 Grade)"
  addH3('3. Food-Grade High-Density Polyethylene');
  addParagraph(
    'We strictly formulate with premium virgin, non-recycled eco-friendly food-grade HDPE material. Engineered for high impact resistance, chemical neutrality, and food-safe contact, this virgin HDPE resin remains tough, odorless, and ductile down to -40°C without micro-cracking or low-temperature brittleness.'
  );

  // --- CONTENT SECTION 4 ---
  addH2('4. The Guangzhou Factory SOP: How to Pre-Condition and Pack for 72-Hour Survival');
  addParagraph(
    'Even the most advanced PCM formulation will fail if conditioned incorrectly. If freezers operate at -15°C, a pack formulated for -21°C will never crystallize fully—the eutectic matrix remains unbonded in a low-latent-heat state.'
  );

  renderCleanCallout('Standard Operating Procedure for 72-Hour Export Packouts:', [
    {
      step: 'Step 1: The -5°C Blast Freezing Rule',
      title: 'Adequate Freezing Temperature Delta',
      desc: 'Ensure blast freezers are set at least 5°C colder than the PCM phase point. For -21°C bricks, condition at -26°C or colder for a minimum of 24 continuous hours before packing.'
    },
    {
      step: 'Step 2: Spaced Rack Airflow Orientation',
      title: 'Prevent Thermal Insulation Bundles',
      desc: 'Never freeze packs stacked tightly in master cartons. Lay them flat on open wire-mesh racks with 25 mm air gaps to enable high-speed convective heat removal.'
    },
    {
      step: 'Step 3: Thermal Buffering Payload Layout',
      title: 'Wrap Payloads with Cold Surrounds',
      desc: 'Position frozen goods centrally and sandwich them between top, bottom, and side PCM bricks to create a uniform conductive cold shield and eliminate dead-air pockets.'
    },
    {
      step: 'Step 4: High-Density EPP Outer Shippers',
      title: 'Maximize Thermal R-Value',
      desc: 'Pair PCM bricks with ColdPackPro high-density EPP (Expanded Polypropylene) insulated shippers (30-40 mm wall thickness) to extend hold times up to 72-96 hours.'
    }
  ]);

  // --- CONTENT SECTION 5 ---
  addH2('5. Total Cost of Ownership (TCO): Inbound Freight & Sourcing Realities for SMEs');
  addParagraph(
    'When evaluating cold-chain packaging, domestic procurement in North America or Europe appears convenient, but local distributors mark up items by 200-350% and carry limited stock. Direct manufacturing partnership with ColdPackPro in Guangzhou delivers transformative unit economics:'
  );

  addBullet(
    'Direct Factory Pricing Advantage:',
    'Save 40% to 65% on per-unit packaging costs compared to US/EU distributors, directly boosting gross margins on perishable shipments.'
  );
  addBullet(
    'Water-Activated Sheets Shipping Efficiency:',
    'Water-activated cooling sheets ship 100% flat and dry. A single 40ft high-cube sea container delivers the equivalent cooling capacity of 20 truckloads of pre-filled gel packs, slashing inbound ocean freight.'
  );
  addBullet(
    'Custom Mold Tooling in 7-10 Days:',
    'Low-cost rapid aluminum mold fabrication allows custom dimensional designs tailored exactly to your shipper cartons, eliminating void space.'
  );

  // --- CONTENT SECTION 6 ---
  addH2('6. How to Partner with ColdPackPro for Custom OEM & Sampling');
  addParagraph(
    'Whether you need off-the-shelf -21°C hard bricks, custom-dimension EPP shippers, or private-label printed cooling sheets, ColdPackPro offers complete end-to-end export manufacturing support:'
  );

  addBullet(
    'Fast Engineering Sampling:',
    'Standard samples dispatched within 48 hours. Custom temperature formulation prototypes provided within 5-7 business days.'
  );
  addBullet(
    'Full Export Compliance Documentation:',
    'Every shipment includes English CNAS Sea & Air Transport Identification Reports, DGM Safe Transport Certificates, Safety Data Sheets (SDS), and technical specifications.'
  );
  addBullet(
    'Global Inquiries & Dedicated Support:',
    'Contact our Guangzhou engineering sales desk directly at info@coldpackpro.com or visit https://coldpackpro.com for fast digital proforma invoices and sample requests.'
  );

  // Closing Engineering Support & Factory Contact Card
  currentY -= 12;
  const contactBoxH = 110;
  ensureSpace(contactBoxH + 10);
  const cBoxY = currentY - contactBoxH;

  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: cBoxY,
    width: CONTENT_WIDTH,
    height: contactBoxH,
    color: rgb(0.04, 0.08, 0.16),
    borderColor: rgb(0.18, 0.5, 0.8),
    borderWidth: 1
  });

  currentPage.drawText('COLDPACKPRO FACTORY ENGINEERING & OEM SUPPORT DESK', {
    x: MARGIN_LEFT + 16,
    y: currentY - 20,
    size: 10,
    font: fontBold,
    color: rgb(0.25, 0.8, 1.0)
  });

  currentPage.drawText('Guangzhou QTOP Cold Chain Sciences Co., Ltd. (Direct Factory Manufacturer)', {
    x: MARGIN_LEFT + 16,
    y: currentY - 34,
    size: 8.5,
    font: fontBold,
    color: rgb(0.9, 0.94, 0.98)
  });

  currentPage.drawText('• Factory Address: No. 18 Tianhe District / Panyu Manufacturing Hub, Guangzhou, Guangdong, China', {
    x: MARGIN_LEFT + 16,
    y: currentY - 50,
    size: 8,
    font: fontRegular,
    color: rgb(0.75, 0.82, 0.9)
  });

  currentPage.drawText('• International Inquiries: info@coldpackpro.com   |   Official Website: https://coldpackpro.com', {
    x: MARGIN_LEFT + 16,
    y: currentY - 64,
    size: 8,
    font: fontRegular,
    color: rgb(0.75, 0.82, 0.9)
  });

  currentPage.drawText('• Rapid Samples: Dispatched within 48 hours   |   Custom Tooling: 7-10 days rapid turnaround', {
    x: MARGIN_LEFT + 16,
    y: currentY - 78,
    size: 8,
    font: fontRegular,
    color: rgb(0.75, 0.82, 0.9)
  });

  currentPage.drawText('• Full Certifications: English CNAS Air Freight Report, CNAS Sea Freight Report, DGM Aviation, SDS', {
    x: MARGIN_LEFT + 16,
    y: currentY - 92,
    size: 8,
    font: fontRegular,
    color: rgb(0.25, 0.8, 1.0)
  });

  currentY = cBoxY - 14;

  // Second pass: Draw running footers on every page with exact page count
  const totalPages = pages.length;
  for (let i = 0; i < totalPages; i++) {
    const page = pages[i];
    page.drawLine({
      start: { x: MARGIN_LEFT, y: 34 },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: 34 },
      thickness: 0.5,
      color: rgb(0.8, 0.85, 0.9)
    });

    page.drawText('Guangzhou QTOP Cold Chain Sciences Co., Ltd. · Export Cold-Chain Packaging Engineering', {
      x: MARGIN_LEFT,
      y: 22,
      size: 7.5,
      font: fontRegular,
      color: rgb(0.4, 0.45, 0.5)
    });

    const pageStr = `Page ${i + 1} of ${totalPages}`;
    page.drawText(pageStr, {
      x: PAGE_WIDTH - MARGIN_RIGHT - fontBold.widthOfTextAtSize(pageStr, 7.5),
      y: 22,
      size: 7.5,
      font: fontBold,
      color: rgb(0.4, 0.45, 0.5)
    });
  }

  const pdfBytes = await doc.save();
  const targetPath = path.join(__dirname, '..', 'assets', 'ColdPackPro-SubZero-PCM-Dry-Ice-Alternative-Technical-Whitepaper.pdf');
  fs.writeFileSync(targetPath, pdfBytes);
  console.log(`Generated Whitepaper PDF (${totalPages} pages, ${pdfBytes.length} bytes) at:`, targetPath);
}

generateWhitepaperPdf().catch(err => {
  console.error('Error generating whitepaper PDF:', err);
  process.exit(1);
});
