const fs = require('fs');
const path = require('path');
const { PDFDocument, StandardFonts, rgb, PDFString } = require('pdf-lib');
const sharp = require('sharp');

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

// Generate tailored 100% model-accurate industrial CAD / blueprint visual SVG
function createModelSvg(m) {
  const cat = m.category || 'medical';
  const name = m.name || '';
  const cap = m.capacity || '';
  const extDim = m.extDim || m.dimensions || '';
  const temp = m.temp || '';

  let accent = '#0284C7';
  let catBadge = '#0369A1';
  let graphic = '';

  if (cat === 'medical') {
    accent = '#0284C7';
    catBadge = '#0369A1';
    const isLarge = name.includes('33L') || name.includes('35L') || name.includes('50L') || name.includes('65L');
    if (isLarge) {
      graphic = `
        <rect x="28" y="44" width="124" height="58" rx="6" fill="#132B45" stroke="#38BDF8" stroke-width="2"/>
        <rect x="24" y="34" width="132" height="12" rx="3" fill="#0C1D30" stroke="#38BDF8" stroke-width="2"/>
        <rect x="46" y="42" width="8" height="14" rx="2" fill="#38BDF8"/>
        <rect x="126" y="42" width="8" height="14" rx="2" fill="#38BDF8"/>
        <line x1="20" y1="60" x2="28" y2="60" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <line x1="152" y1="60" x2="160" y2="60" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
        <circle cx="68" cy="74" r="9" fill="#064E3B" stroke="#10B981" stroke-width="1.5"/>
        <path d="M68 69 V79 M63 74 H73" stroke="#34D399" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="90" y="66" width="36" height="16" rx="2" fill="#031525" stroke="#0284C7"/>
        <text x="108" y="78" font-family="monospace" font-size="8" fill="#38BDF8" font-weight="bold" text-anchor="middle">+3.8°C</text>
        <text x="90" y="94" font-family="Helvetica, Arial, sans-serif" font-size="6.5" fill="#94A3B8" text-anchor="middle">BIOPHARMA RATED</text>
      `;
    } else {
      graphic = `
        <rect x="38" y="44" width="104" height="58" rx="5" fill="#132B45" stroke="#38BDF8" stroke-width="2"/>
        <path d="M34 44 L40 34 L140 34 L146 44 Z" fill="#0C1D30" stroke="#38BDF8" stroke-width="2"/>
        <path d="M74 34 C74 24, 106 24, 106 34" stroke="#38BDF8" stroke-width="3" fill="none" stroke-linecap="round"/>
        <circle cx="66" cy="73" r="10" fill="#064E3B" stroke="#10B981" stroke-width="1.5"/>
        <path d="M66 67 V79 M60 73 H72" stroke="#34D399" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="88" y="65" width="38" height="16" rx="2" fill="#031525" stroke="#0284C7"/>
        <text x="107" y="77" font-family="monospace" font-size="8" fill="#38BDF8" font-weight="bold" text-anchor="middle">+4.0°C</text>
        <text x="90" y="94" font-family="Helvetica, Arial, sans-serif" font-size="6.5" fill="#94A3B8" text-anchor="middle">2~8°C VALIDATED</text>
      `;
    }
  } else if (cat === 'delivery') {
    accent = '#F59E0B';
    catBadge = '#D97706';
    graphic = `
      <rect x="35" y="42" width="110" height="60" rx="5" fill="#1A2836" stroke="#F59E0B" stroke-width="2"/>
      <rect x="30" y="32" width="120" height="12" rx="3" fill="#0F1722" stroke="#F59E0B" stroke-width="2"/>
      <rect x="35" y="58" width="110" height="6" fill="#F59E0B" opacity="0.85"/>
      <rect x="85" y="40" width="10" height="16" rx="2" fill="#FCD34D"/>
      <circle cx="28" cy="65" r="4" fill="none" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="152" cy="65" r="4" fill="none" stroke="#F59E0B" stroke-width="2"/>
      <text x="90" y="84" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#FDE68A" font-weight="bold" text-anchor="middle">FLEET TRANSIT</text>
    `;
  } else if (cat === 'marine') {
    accent = '#06B6D4';
    catBadge = '#0891B2';
    graphic = `
      <rect x="25" y="44" width="130" height="52" rx="4" fill="#0E283E" stroke="#06B6D4" stroke-width="2.5"/>
      <rect x="20" y="34" width="140" height="12" rx="3" fill="#091A29" stroke="#06B6D4" stroke-width="2.5"/>
      <rect x="42" y="96" width="28" height="9" rx="1.5" fill="#040D17" stroke="#06B6D4" stroke-width="1.5"/>
      <rect x="110" y="96" width="28" height="9" rx="1.5" fill="#040D17" stroke="#06B6D4" stroke-width="1.5"/>
      <circle cx="145" cy="83" r="5" fill="#0891B2" stroke="#A5F3FC" stroke-width="1.5"/>
      <line x1="45" y1="42" x2="45" y2="58" stroke="#06B6D4" stroke-width="3"/>
      <line x1="135" y1="42" x2="135" y2="58" stroke="#06B6D4" stroke-width="3"/>
      <text x="90" y="72" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#67E8F9" font-weight="bold" text-anchor="middle">HEAVY ROTOMOLDED</text>
    `;
  } else if (cat === 'stackable') {
    accent = '#EAB308';
    catBadge = '#CA8A04';
    graphic = `
      <rect x="35" y="44" width="110" height="54" rx="4" fill="#1C2D42" stroke="#EAB308" stroke-width="2"/>
      <path d="M30 44 L38 34 L142 34 L150 44 Z" fill="#131E2C" stroke="#EAB308" stroke-width="2"/>
      <rect x="50" y="30" width="16" height="5" fill="#EAB308"/>
      <rect x="114" y="30" width="16" height="5" fill="#EAB308"/>
      <rect x="50" y="97" width="16" height="4" fill="#EAB308"/>
      <rect x="114" y="97" width="16" height="4" fill="#EAB308"/>
      <text x="90" y="73" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#FDE047" font-weight="bold" text-anchor="middle">5-TIER INTERLOCK</text>
    `;
  } else if (cat === 'hotel') {
    accent = '#A855F7';
    catBadge = '#7E22CE';
    if (name.includes('90L')) {
      graphic = `
        <rect x="25" y="42" width="130" height="56" rx="4" fill="#1E1B4B" stroke="#A855F7" stroke-width="2"/>
        <text x="90" y="74" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#D8B4FE" font-weight="bold" text-anchor="middle">GASTRONORM 1/1</text>
      `;
    } else {
      graphic = `
        <ellipse cx="90" cy="40" rx="40" ry="11" fill="#334155" stroke="#CBD5E1" stroke-width="2"/>
        <path d="M50 40 V86 C50 96, 130 96, 130 86 V40" fill="#1E293B" stroke="#CBD5E1" stroke-width="2"/>
        <ellipse cx="90" cy="86" rx="40" ry="11" fill="none" stroke="#94A3B8" stroke-width="1.5"/>
        <ellipse cx="90" cy="44" rx="42" ry="12" fill="none" stroke="#38BDF8" stroke-width="2"/>
        <rect x="44" y="49" width="6" height="14" rx="2" fill="#E2E8F0"/>
        <rect x="130" y="49" width="6" height="14" rx="2" fill="#E2E8F0"/>
        <text x="90" y="69" font-family="Helvetica, Arial, sans-serif" font-size="7.5" fill="#E2E8F0" font-weight="bold" text-anchor="middle">304 STAINLESS</text>
        <text x="90" y="80" font-family="Helvetica, Arial, sans-serif" font-size="6.5" fill="#38BDF8" text-anchor="middle">HOT / COLD DUAL</text>
      `;
    }
  } else if (cat === 'outdoor') {
    accent = '#14B8A6';
    catBadge = '#0F766E';
    graphic = `
      <rect x="35" y="44" width="110" height="56" rx="5" fill="#113038" stroke="#14B8A6" stroke-width="2"/>
      <rect x="30" y="34" width="120" height="12" rx="3" fill="#0A1E24" stroke="#14B8A6" stroke-width="2"/>
      <circle cx="55" cy="40" r="5" fill="#042F2E" stroke="#2DD4BF" stroke-width="1.5"/>
      <circle cx="125" cy="40" r="5" fill="#042F2E" stroke="#2DD4BF" stroke-width="1.5"/>
      <path d="M52 44 V60 M128 44 V60" stroke="#14B8A6" stroke-width="3" stroke-linecap="round"/>
      <text x="90" y="74" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#5EEAD4" font-weight="bold" text-anchor="middle">RUGGED OUTDOOR</text>
    `;
  } else if (cat === 'epp') {
    accent = '#64748B';
    catBadge = '#475569';
    graphic = `
      <rect x="32" y="44" width="116" height="54" rx="4" fill="#1E293B" stroke="#64748B" stroke-width="2.5"/>
      <rect x="28" y="34" width="124" height="12" rx="3" fill="#0F172A" stroke="#64748B" stroke-width="2.5"/>
      <circle cx="48" cy="54" r="2" fill="#94A3B8" opacity="0.6"/>
      <circle cx="70" cy="54" r="2" fill="#94A3B8" opacity="0.6"/>
      <circle cx="92" cy="54" r="2" fill="#94A3B8" opacity="0.6"/>
      <circle cx="114" cy="54" r="2" fill="#94A3B8" opacity="0.6"/>
      <circle cx="132" cy="54" r="2" fill="#94A3B8" opacity="0.6"/>
      <rect x="36" y="66" width="14" height="6" rx="2" fill="#0F172A"/>
      <rect x="130" y="66" width="14" height="6" rx="2" fill="#0F172A"/>
      <text x="90" y="75" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#CBD5E1" font-weight="bold" text-anchor="middle">EPP 55g/L FOAM</text>
      <text x="90" y="86" font-family="Helvetica, Arial, sans-serif" font-size="6.5" fill="#38BDF8" text-anchor="middle">-75% TARE WEIGHT</text>
    `;
  } else if (cat === 'pcm') {
    accent = '#0284C7';
    catBadge = '#0369A1';
    graphic = `
      <rect x="36" y="38" width="108" height="62" rx="5" fill="#073055" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="62" cy="68" r="5" fill="#0C4A6E" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="90" cy="68" r="5" fill="#0C4A6E" stroke="#38BDF8" stroke-width="2"/>
      <circle cx="118" cy="68" r="5" fill="#0C4A6E" stroke="#38BDF8" stroke-width="2"/>
      <line x1="50" y1="44" x2="50" y2="92" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <line x1="76" y1="44" x2="76" y2="92" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <line x1="104" y1="44" x2="104" y2="92" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <line x1="130" y1="44" x2="130" y2="92" stroke="#0284C7" stroke-width="2" stroke-linecap="round"/>
      <rect x="54" y="46" width="72" height="16" rx="3" fill="#0C4A6E" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="90" y="58" font-family="Helvetica, Arial, sans-serif" font-size="8.5" fill="#E0F2FE" font-weight="bold" text-anchor="middle">${temp || '-21°C SUBZERO'}</text>
    `;
  } else if (cat === 'water') {
    accent = '#0284C7';
    catBadge = '#0369A1';
    graphic = `
      <rect x="30" y="36" width="120" height="66" rx="4" fill="#072338" stroke="#0284C7" stroke-width="2"/>
      <rect x="36" y="42" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="66" y="42" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="96" y="42" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="126" y="42" width="18" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="36" y="62" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="66" y="62" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="96" y="62" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="126" y="62" width="18" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="36" y="82" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="66" y="82" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="96" y="82" width="24" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <rect x="126" y="82" width="18" height="16" rx="2" fill="#0369A1" stroke="#38BDF8"/>
      <text x="90" y="67" font-family="Helvetica, Arial, sans-serif" font-size="8" fill="#ffffff" font-weight="bold" text-anchor="middle">SOAK &amp; FREEZE</text>
    `;
  } else if (cat === 'instant') {
    accent = '#EC4899';
    catBadge = '#DB2777';
    graphic = `
      <path d="M40 38 H140 L132 96 H48 Z" fill="#1E1E38" stroke="#EC4899" stroke-width="2"/>
      <line x1="40" y1="42" x2="140" y2="42" stroke="#EC4899" stroke-width="2"/>
      <line x1="48" y1="92" x2="132" y2="92" stroke="#EC4899" stroke-width="2"/>
      <circle cx="90" cy="66" r="13" fill="#831843" stroke="#F472B6" stroke-width="2" stroke-dasharray="3 3"/>
      <path d="M85 62 L95 70 M95 62 L85 70" stroke="#ffffff" stroke-width="2.5"/>
      <text x="90" y="85" font-family="Helvetica, Arial, sans-serif" font-size="7.5" fill="#FBCFE8" font-weight="bold" text-anchor="middle">&lt;3s RAPID REACTION</text>
    `;
  } else if (cat === 'gel') {
    accent = '#0284C7';
    catBadge = '#0369A1';
    graphic = `
      <rect x="40" y="38" width="100" height="62" rx="7" fill="#0C2E4E" stroke="#38BDF8" stroke-width="2"/>
      <rect x="43" y="41" width="94" height="56" rx="5" fill="none" stroke="#0284C7" stroke-width="1.5" stroke-dasharray="3 2"/>
      <circle cx="90" cy="68" r="13" fill="#0369A1" opacity="0.6"/>
      <path d="M90 59 V77 M81 68 H99 M84 62 L96 74 M96 62 L84 74" stroke="#E0F2FE" stroke-width="1.5" stroke-linecap="round"/>
      <text x="90" y="71" font-family="Helvetica, Arial, sans-serif" font-size="7.5" fill="#ffffff" font-weight="bold" text-anchor="middle">SAP GEL</text>
      <text x="90" y="83" font-family="Helvetica, Arial, sans-serif" font-size="6.5" fill="#BAE6FD" text-anchor="middle">FOOD GRADE</text>
    `;
  }

  return `<svg width="180" height="135" xmlns="http://www.w3.org/2000/svg">
    <rect width="180" height="135" rx="6" fill="#081220" stroke="${accent}" stroke-width="1.5"/>
    <rect x="8" y="7" width="65" height="18" rx="3" fill="${catBadge}"/>
    <text x="40" y="19" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="9" fill="#ffffff" text-anchor="middle">${name}</text>
    <text x="172" y="19" font-family="Helvetica, Arial, sans-serif" font-weight="bold" font-size="8.5" fill="#38BDF8" text-anchor="end">${cap}</text>
    ${graphic}
    <rect x="8" y="114" width="164" height="15" rx="3" fill="#060C17"/>
    <text x="90" y="125" font-family="Helvetica, Arial, sans-serif" font-size="7" fill="#94A3B8" text-anchor="middle">${extDim}</text>
  </svg>`;
}

async function generateFullCatalogPdf() {
  const doc = await PDFDocument.create();
  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await doc.embedFont(StandardFonts.HelveticaOblique);

  // Load and embed section hero images
  const images = {};
  async function safeEmbedJpg(relPath, key) {
    try {
      const fullPath = path.join(__dirname, '..', relPath);
      if (fs.existsSync(fullPath)) {
        const bytes = fs.readFileSync(fullPath);
        images[key] = await doc.embedJpg(bytes);
      }
    } catch (e) {
      console.warn(`Could not embed JPG ${relPath}:`, e.message);
    }
  }

  // Embed authentic factory & category photographs for all 7 series
  await safeEmbedJpg('assets/catalog-images/1.cold-chain-packaging-factory-guangzhou-china.jpg', 'factory');
  await safeEmbedJpg('assets/catalog-images/2.custom-cold-chain-packaging-oem-manufacturer.jpg', 'oem');
  await safeEmbedJpg('assets/catalog-images/5.custom-cold-chain-rigid-series-family.jpg', 'pcm');
  await safeEmbedJpg('assets/catalog-images/hero-cooler-boxes.jpg', 'coolers');
  await safeEmbedJpg('assets/catalog-images/6.gel-ice-pack-supplier-cold-chain-shipping.jpg', 'gel');
  await safeEmbedJpg('assets/catalog-images/7.self-absorbing-ice-pack-sheet-manufacturer.jpg', 'water');
  await safeEmbedJpg('assets/catalog-images/hero-sld160.jpg', 'instant');
  await safeEmbedJpg('assets/catalog-images/hero-epp-vegetables.jpg', 'epp');

  // Pre-generate and embed 100% accurate, dedicated images for EACH individual model
  const modelThumbs = {};
  async function getOrCreateModelThumb(modelSpec) {
    const key = modelSpec.id || `${modelSpec.name}_${modelSpec.config || ''}_${modelSpec.extDim || ''}`;
    if (modelThumbs[key]) return modelThumbs[key];
    const svg = createModelSvg(modelSpec);
    const jpegBuf = await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toBuffer();
    const embedded = await doc.embedJpg(jpegBuf);
    modelThumbs[key] = embedded;
    return embedded;
  }

  // Landscape A4 orientation (841.89 x 595.28)
  const PAGE_WIDTH = 841.89;
  const PAGE_HEIGHT = 595.28;
  const MARGIN_LEFT = 36;
  const MARGIN_RIGHT = 36;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT; // 769.89

  let currentPage = null;
  let currentY = 0;
  const pages = [];

  function addNewPage(isCover = false) {
    currentPage = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
    pages.push({ page: currentPage, isCover });

    if (!isCover) {
      // Top navy bar
      currentPage.drawRectangle({
        x: 0,
        y: PAGE_HEIGHT - 22,
        width: PAGE_WIDTH,
        height: 22,
        color: rgb(0.04, 0.08, 0.16)
      });

      currentPage.drawText('COLDPACKPRO · OFFICIAL EXPORT PRODUCT CATALOG', {
        x: MARGIN_LEFT,
        y: PAGE_HEIGHT - 15,
        size: 7.5,
        font: fontBold,
        color: rgb(0.25, 0.8, 1.0)
      });

      const headerRight = 'https://coldpackpro.com · OEM & EXPORT SPECIFICATIONS';
      currentPage.drawText(headerRight, {
        x: PAGE_WIDTH - MARGIN_RIGHT - fontBold.widthOfTextAtSize(headerRight, 7.5),
        y: PAGE_HEIGHT - 15,
        size: 7.5,
        font: fontBold,
        color: rgb(0.8, 0.86, 0.94)
      });

      currentY = PAGE_HEIGHT - 38;
    } else {
      currentY = PAGE_HEIGHT;
    }

    return currentPage;
  }

  function addClickableLink(page, x, y, width, height, url) {
    const linkAnnotation = doc.context.obj({
      Type: 'Annot',
      Subtype: 'Link',
      Rect: [x, y, x + width, y + height],
      Border: [0, 0, 0],
      A: {
        Type: 'Action',
        S: 'URI',
        URI: PDFString.of(url)
      }
    });
    const linkRef = doc.context.register(linkAnnotation);
    page.node.addAnnot(linkRef);
  }

  // Section Header with Left-Aligned Photo & Vertically Center-Aligned Text
  function addSectionHeaderWithLeftImage(numberStr, titleStr, descStr, imgObj, pillColor = rgb(0.08, 0.42, 0.78)) {
    const hasImage = Boolean(imgObj);
    const imgW = hasImage ? 125 : 0;
    const imgH = hasImage ? 78 : 0;

    // Generous top clearance ensuring no overlap with tables/text above
    currentY -= 10;
    const startY = currentY;

    if (hasImage) {
      // Firmly left-aligned image
      const imgX = MARGIN_LEFT;
      const imgBottomY = startY - imgH;
      const imgCenterY = startY - (imgH / 2);

      // Clean photo frame border
      currentPage.drawRectangle({
        x: imgX - 1,
        y: imgBottomY - 1,
        width: imgW + 2,
        height: imgH + 2,
        color: rgb(0.85, 0.88, 0.92)
      });

      currentPage.drawImage(imgObj, {
        x: imgX,
        y: imgBottomY,
        width: imgW,
        height: imgH
      });

      // Text block on the right side of the left-aligned image
      const textX = MARGIN_LEFT + imgW + 16;
      const textW = CONTENT_WIDTH - imgW - 16;

      // Wrap description text
      const dLines = wrapText(descStr, fontRegular, 7.8, textW);

      // Calculate total text height to achieve exact vertical center alignment with the image centerline
      const titleH = 12;
      const gap = 5;
      const descH = dLines.length * 10.5;
      const totalTextH = titleH + gap + descH;

      // The top of the text block is placed so that the center of the text equals imgCenterY
      const textTopY = imgCenterY + (totalTextH / 2);
      const titleY = textTopY - 10; // Baseline for title text

      // Accent pill indicator
      currentPage.drawRectangle({
        x: textX,
        y: titleY - 2,
        width: 3.5,
        height: 12,
        color: pillColor
      });

      // Title
      currentPage.drawText(`${numberStr} · ${titleStr}`, {
        x: textX + 9,
        y: titleY,
        size: 10.5,
        font: fontBold,
        color: rgb(0.06, 0.12, 0.25)
      });

      // Description lines
      let descY = titleY - gap - 7;
      for (const dl of dLines) {
        currentPage.drawText(dl, {
          x: textX,
          y: descY,
          size: 7.8,
          font: fontRegular,
          color: rgb(0.28, 0.33, 0.40)
        });
        descY -= 10.5;
      }

      // Next content continues below both image and text with compact clean spacing
      currentY = Math.min(imgBottomY, descY) - 8;
    } else {
      // Text only section header
      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: startY - 2,
        width: 3.5,
        height: 12,
        color: pillColor
      });

      currentPage.drawText(`${numberStr} · ${titleStr}`, {
        x: MARGIN_LEFT + 9,
        y: startY,
        size: 10.5,
        font: fontBold,
        color: rgb(0.06, 0.12, 0.25)
      });
      let textY = startY - 13;

      const dLines = wrapText(descStr, fontRegular, 7.8, CONTENT_WIDTH);
      for (const dl of dLines) {
        currentPage.drawText(dl, {
          x: MARGIN_LEFT,
          y: textY,
          size: 7.8,
          font: fontRegular,
          color: rgb(0.3, 0.35, 0.42)
        });
        textY -= 10.5;
      }
      currentY = textY - 7;
    }
  }

  function addSubCategoryHeader(titleStr, subtitleStr) {
    currentY -= 2;
    currentPage.drawText(titleStr, {
      x: MARGIN_LEFT,
      y: currentY,
      size: 8.5,
      font: fontBold,
      color: rgb(0.08, 0.25, 0.5)
    });
    currentY -= 10.5;

    if (subtitleStr) {
      currentPage.drawText(subtitleStr, {
        x: MARGIN_LEFT,
        y: currentY,
        size: 7.2,
        font: fontItalic,
        color: rgb(0.4, 0.45, 0.52)
      });
      currentY -= 8.5;
    }
  }

  // Universal Table Renderer with Dedicated Model Image Thumbnails
  function renderTableWithThumbs(headers, rows, colWidths, options = {}) {
    const PADDING_X = 5;
    const PADDING_Y = 2;
    const FONT_SIZE = options.fontSize || 6.8;
    const LINE_HEIGHT = options.lineHeight || 8;
    const headerBg = options.headerBg || rgb(0.06, 0.16, 0.32);
    const THUMB_SIZE = 24; // 24x24 pt thumbnail

    function drawTableHeader() {
      const headerY = currentY - 14;
      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: headerY,
        width: CONTENT_WIDTH,
        height: 14,
        color: headerBg
      });

      let curX = MARGIN_LEFT;
      for (let i = 0; i < headers.length; i++) {
        const hText = headers[i];
        currentPage.drawText(hText, {
          x: curX + PADDING_X,
          y: headerY + 3.5,
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
      const rowItem = rows[rIdx];
      const thumbImg = rowItem.thumb || null;
      const rowData = rowItem.data || rowItem;

      const cellLines = [];
      let maxLinesInRow = 1;

      // Col 0 is Thumb (width = colWidths[0])
      // Col 1..N are rowData[0..N-1]
      for (let cIdx = 0; cIdx < rowData.length; cIdx++) {
        const text = String(rowData[cIdx] || '');
        const maxCellW = colWidths[cIdx + 1] - PADDING_X * 2;
        const font = cIdx === 0 ? fontBold : fontRegular;
        const lines = wrapText(text, font, FONT_SIZE, maxCellW);
        cellLines.push(lines);
        if (lines.length > maxLinesInRow) {
          maxLinesInRow = lines.length;
        }
      }

      const textHeight = maxLinesInRow * LINE_HEIGHT + PADDING_Y * 2;
      const minRowHeight = thumbImg ? THUMB_SIZE + 3 : 15;
      const rowHeight = Math.max(textHeight, minRowHeight);

      if (currentY - rowHeight < 36) {
        addNewPage(false);
        drawTableHeader();
      }

      const rowY = currentY - rowHeight;
      const bgColor = rIdx % 2 === 0 ? rgb(0.975, 0.985, 1.0) : rgb(1, 1, 1);

      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: rowY,
        width: CONTENT_WIDTH,
        height: rowHeight,
        color: bgColor,
        borderColor: rgb(0.85, 0.88, 0.93),
        borderWidth: 0.5
      });

      // Draw Col 0: Dedicated Model Thumbnail
      let curX = MARGIN_LEFT;
      if (thumbImg) {
        const tX = curX + (colWidths[0] - THUMB_SIZE) / 2;
        const tY = rowY + (rowHeight - THUMB_SIZE) / 2;
        currentPage.drawImage(thumbImg, {
          x: tX,
          y: tY,
          width: THUMB_SIZE,
          height: THUMB_SIZE
        });
      }

      // Border after thumb
      currentPage.drawLine({
        start: { x: curX + colWidths[0], y: rowY },
        end: { x: curX + colWidths[0], y: currentY },
        thickness: 0.5,
        color: rgb(0.85, 0.88, 0.93)
      });
      curX += colWidths[0];

      // Draw remaining columns
      for (let cIdx = 0; cIdx < rowData.length; cIdx++) {
        const lines = cellLines[cIdx];
        const font = cIdx === 0 ? fontBold : fontRegular;
        const textColor = cIdx === 0 ? rgb(0.08, 0.16, 0.32) : rgb(0.2, 0.25, 0.32);

        let lineY = currentY - PADDING_Y - (LINE_HEIGHT - 1.5);
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

        if (cIdx < rowData.length - 1) {
          currentPage.drawLine({
            start: { x: curX + colWidths[cIdx + 1], y: rowY },
            end: { x: curX + colWidths[cIdx + 1], y: currentY },
            thickness: 0.5,
            color: rgb(0.85, 0.88, 0.93)
          });
        }

        curX += colWidths[cIdx + 1];
      }

      currentY = rowY;
    }

    currentY -= 5;
  }

  // Plain Table (without Col 0 thumb)
  function renderPlainTable(headers, rows, colWidths, options = {}) {
    const PADDING_X = 6;
    const PADDING_Y = 2.5;
    const FONT_SIZE = options.fontSize || 6.8;
    const LINE_HEIGHT = options.lineHeight || 8;
    const headerBg = options.headerBg || rgb(0.06, 0.16, 0.32);

    function drawTableHeader() {
      const headerY = currentY - 14;
      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: headerY,
        width: CONTENT_WIDTH,
        height: 14,
        color: headerBg
      });

      let curX = MARGIN_LEFT;
      for (let i = 0; i < headers.length; i++) {
        const hText = headers[i];
        currentPage.drawText(hText, {
          x: curX + PADDING_X,
          y: headerY + 3.5,
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

      if (currentY - rowHeight < 36) {
        addNewPage(false);
        drawTableHeader();
      }

      const rowY = currentY - rowHeight;
      const bgColor = rIdx % 2 === 0 ? rgb(0.975, 0.985, 1.0) : rgb(1, 1, 1);

      currentPage.drawRectangle({
        x: MARGIN_LEFT,
        y: rowY,
        width: CONTENT_WIDTH,
        height: rowHeight,
        color: bgColor,
        borderColor: rgb(0.85, 0.88, 0.93),
        borderWidth: 0.5
      });

      let curX = MARGIN_LEFT;
      for (let cIdx = 0; cIdx < row.length; cIdx++) {
        const lines = cellLines[cIdx];
        const font = cIdx === 0 ? fontBold : fontRegular;
        const textColor = cIdx === 0 ? rgb(0.08, 0.16, 0.32) : rgb(0.2, 0.25, 0.32);

        let lineY = currentY - PADDING_Y - (LINE_HEIGHT - 1.5);
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
            color: rgb(0.85, 0.88, 0.93)
          });
        }

        curX += colWidths[cIdx];
      }

      currentY = rowY;
    }

    currentY -= 5;
  }

  // =========================================================================
  // PAGE 1: EXECUTIVE COVER PAGE (LANDSCAPE A4 - NO COVER IMAGE PER REQUEST)
  // =========================================================================
  addNewPage(true);

  // Top header navy block
  currentPage.drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - 140,
    width: PAGE_WIDTH,
    height: 140,
    color: rgb(0.04, 0.08, 0.16)
  });

  // Top cyan brand accent line
  currentPage.drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - 5,
    width: PAGE_WIDTH,
    height: 5,
    color: rgb(0.25, 0.82, 1.0)
  });

  currentPage.drawText('GUANGZHOU QTOP COLD CHAIN SCIENCES CO., LTD.', {
    x: MARGIN_LEFT,
    y: PAGE_HEIGHT - 32,
    size: 11,
    font: fontBold,
    color: rgb(0.25, 0.82, 1.0)
  });

  currentPage.drawText('COLDPACKPRO · EXPORT PACKAGING CATALOG', {
    x: MARGIN_LEFT,
    y: PAGE_HEIGHT - 60,
    size: 23,
    font: fontBold,
    color: rgb(1, 1, 1)
  });

  currentPage.drawText('Complete B2B Product Line: Coolers, Gel Ice Packs, PCM Bricks, Hydration Sheets, Instant Packs, EPP Shippers & Custom Tooling', {
    x: MARGIN_LEFT,
    y: PAGE_HEIGHT - 80,
    size: 9.5,
    font: fontRegular,
    color: rgb(0.78, 0.86, 0.96)
  });

  // Five trust credential pills
  const badges = [
    'DIRECT MANUFACTURER',
    'ISO 9001:2015 CERTIFIED',
    'CNAS AIR & SEA SAFETY',
    'SGS & MSDS CERTIFIED',
    'WORLDWIDE B2B EXPORT'
  ];
  let bX = MARGIN_LEFT;
  for (const b of badges) {
    const bW = fontBold.widthOfTextAtSize(b, 7.5) + 14;
    currentPage.drawRectangle({
      x: bX,
      y: PAGE_HEIGHT - 118,
      width: bW,
      height: 18,
      color: rgb(0.08, 0.22, 0.42),
      borderColor: rgb(0.2, 0.5, 0.85),
      borderWidth: 0.8
    });
    currentPage.drawText(b, {
      x: bX + 7,
      y: PAGE_HEIGHT - 106,
      size: 7.5,
      font: fontBold,
      color: rgb(0.4, 0.85, 1.0)
    });
    bX += bW + 7;
  }

  // Cover Main Body: Two-column grid with Series Index & Sourcing Highlights
  const coverBodyTop = PAGE_HEIGHT - 160;

  // Left column: Series Directory
  const col1X = MARGIN_LEFT;
  const col1W = 370;

  currentPage.drawRectangle({
    x: col1X,
    y: 110,
    width: col1W,
    height: coverBodyTop - 110,
    color: rgb(0.97, 0.985, 1.0),
    borderColor: rgb(0.78, 0.86, 0.96),
    borderWidth: 1
  });

  currentPage.drawText('COMPLETE EXPORT PRODUCT DIRECTORY:', {
    x: col1X + 16,
    y: coverBodyTop - 24,
    size: 11,
    font: fontBold,
    color: rgb(0.06, 0.16, 0.35)
  });

  const seriesCoverList = [
    { num: 'SERIES 01', title: 'Commercial Cooler Boxes & Heavy-Duty Shippers', desc: 'Rotomolded LLDPE & PU foam (6L–1000L). Medical, grocery, marine & hotel.' },
    { num: 'SERIES 02', title: 'PCM Rigid Phase Change Ice Bricks', desc: 'Eutectic salt/polymer (-21°C to +18°C). Non-hazardous dry ice replacement.' },
    { num: 'SERIES 03', title: 'Gel Ice Packs (Flexible Multi-Layer Pouches)', desc: '100g to 1000g food-grade SAP gel. Puncture-resistant multi-track PA/PE film.' },
    { num: 'SERIES 04', title: 'Water-Activated Cooling Sheets (Flat Shipped)', desc: 'Ships 100% dry and ultra-thin, saving 95% inbound ocean freight. 4 to 24 cells.' },
    { num: 'SERIES 05', title: 'Instant Cold Packs (Endothermic Rapid Reaction)', desc: 'Instant 0°C in <3 seconds without pre-freezing. Emergency medical & field backup.' },
    { num: 'SERIES 06', title: 'EPP Foam Boxes (Expanded Polypropylene)', desc: 'Lightweight circular packaging (45–65 g/L). Cuts 75% tare weight, 5+ yrs reuse.' },
    { num: 'SERIES 07', title: 'OEM / ODM Custom Tooling & Thermal Chamber Validation', desc: 'Private mold fabrication in 7-10 days, custom chemistry, empirical lab test reports.' }
  ];

  let scY = coverBodyTop - 46;
  for (const s of seriesCoverList) {
    currentPage.drawRectangle({
      x: col1X + 16,
      y: scY - 1,
      width: 3.5,
      height: 11,
      color: rgb(0.08, 0.42, 0.78)
    });
    currentPage.drawText(`${s.num} · ${s.title}`, {
      x: col1X + 24,
      y: scY,
      size: 8.5,
      font: fontBold,
      color: rgb(0.08, 0.18, 0.32)
    });
    scY -= 12;

    currentPage.drawText(s.desc, {
      x: col1X + 24,
      y: scY,
      size: 7.5,
      font: fontRegular,
      color: rgb(0.35, 0.42, 0.5)
    });
    scY -= 17;
  }

  // Right column: Factory Capabilities & Key Benefits
  const col2X = col1X + col1W + 16;
  const col2W = CONTENT_WIDTH - col1W - 16;

  currentPage.drawRectangle({
    x: col2X,
    y: 110,
    width: col2W,
    height: coverBodyTop - 110,
    color: rgb(0.97, 0.985, 1.0),
    borderColor: rgb(0.78, 0.86, 0.96),
    borderWidth: 1
  });

  currentPage.drawText('DIRECT FACTORY MANUFACTURING ADVANTAGES:', {
    x: col2X + 16,
    y: coverBodyTop - 24,
    size: 11,
    font: fontBold,
    color: rgb(0.06, 0.16, 0.35)
  });

  const factoryBenefits = [
    { title: 'Direct Guangzhou Source Pricing', desc: 'Save 40% to 65% on per-unit costs compared to US/EU distributors.' },
    { title: 'Precision Phase Change Formulations (-21°C to +25°C)', desc: 'High latent heat polymer & eutectic salt formulations engineered for bio-pharma, vaccine, frozen, chilled, and CRT thermal stability.' },
    { title: '100% Export Documentation', desc: 'English CNAS Air & Sea Transport Identification Reports and SDS provided with every order.' },
    { title: 'Rapid Sample & Tooling Turnaround', desc: 'Standard samples dispatch within 48h; private aluminum mold tooling in 7-10 days.' },
    { title: 'Flexible Delivery Timeline', desc: 'In-stock models dispatch in 3-7 days; custom models by mutual agreement.' }
  ];

  let fbY = coverBodyTop - 46;
  for (const fb of factoryBenefits) {
    currentPage.drawText(`• ${fb.title}`, {
      x: col2X + 16,
      y: fbY,
      size: 8.5,
      font: fontBold,
      color: rgb(0.08, 0.42, 0.78)
    });
    fbY -= 12;

    const bLines = wrapText(fb.desc, fontRegular, 7.5, col2W - 32);
    for (const bl of bLines) {
      currentPage.drawText(bl, {
        x: col2X + 28,
        y: fbY,
        size: 7.5,
        font: fontRegular,
        color: rgb(0.35, 0.42, 0.5)
      });
      fbY -= 11;
    }
    fbY -= 5;
  }

  // Cover Bottom Contact Strip
  currentPage.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: 95,
    color: rgb(0.04, 0.08, 0.16)
  });

  currentPage.drawText('COLDPACKPRO GUANGZHOU HEADQUARTERS & GLOBAL SALES DESK', {
    x: MARGIN_LEFT,
    y: 72,
    size: 9.5,
    font: fontBold,
    color: rgb(0.25, 0.8, 1.0)
  });

  currentPage.drawText('• Factory Address: No. 18 Tianhe District / Panyu Manufacturing Hub, Guangzhou, Guangdong, China', {
    x: MARGIN_LEFT,
    y: 56,
    size: 8,
    font: fontRegular,
    color: rgb(0.8, 0.88, 0.95)
  });

  currentPage.drawText('• Key Contact: Mr. Yang   |   Mobile / WhatsApp / WeChat: +86 13925109703   |   Email: info@coldpackpro.com', {
    x: MARGIN_LEFT,
    y: 42,
    size: 8,
    font: fontBold,
    color: rgb(0.9, 0.95, 1.0)
  });

  const catUrlText = '• Digital Catalog & PI Tool: https://coldpackpro.com/catalog   (Click to open online catalog)';
  currentPage.drawText(catUrlText, {
    x: MARGIN_LEFT,
    y: 26,
    size: 8,
    font: fontBold,
    color: rgb(0.3, 0.85, 1.0)
  });
  // Add clickable hyperlink annotation for the catalog URL on the cover
  addClickableLink(currentPage, MARGIN_LEFT, 22, 450, 14, 'https://coldpackpro.com/catalog');

  currentPage.drawText('• Order Lead Time & Dispatch: In-stock items ship in 3–7 days; custom & OEM products scheduled by mutual agreement.', {
    x: MARGIN_LEFT,
    y: 12,
    size: 7.5,
    font: fontRegular,
    color: rgb(0.7, 0.8, 0.9)
  });

  // =========================================================================
  // PAGE 2: TEMPERATURE MATRIX & SERIES 01 MEDICAL COOLERS
  // =========================================================================
  addNewPage(false);

  addSectionHeaderWithLeftImage(
    'TEMPERATURE MATRIX',
    'Master Cold-Chain Zone Selector & Application Guide',
    'Engineered to help procurement managers, logistics engineers, and export coordinators instantly identify the exact packaging configuration and coolant chemistry for target payload temperatures.',
    null
  );

  const matrixHeaders = [
    'Target Temperature Zone',
    'Recommended Packaging Solution',
    'Phase Point',
    'Cold Hold Duration',
    'Key Payload Applications'
  ];
  const matrixColWidths = [150, 180, 85, 95, 259.89];
  const matrixRows = [
    [
      'Ultra-Low Cryogenic (-78°C / Dry Ice Alt)',
      'HP-320L Dry Ice Cooler + Sub-Zero Rigid PCM Bricks',
      '-78.5°C to -21°C',
      '72 – 120 Hours',
      'Cryogenic biologics, clinical trial specimens, dry-ice elimination for DTC air freight.'
    ],
    [
      'Deep Frozen (-21°C to -15°C)',
      'EPP Foam Box / HP Heavy Cooler + XLD-600 (-21°C Bricks)',
      '-21°C Plateau',
      '48 – 96 Hours',
      'Frozen wagyu, sashimi tuna, ice cream, biologics, export seafood cargo.'
    ],
    [
      'Strict Chilled (2°C to 8°C Pharma)',
      'HP Medical Cooler Boxes + XLH-500 (+4°C Anti-Freeze Bricks)',
      '+4°C Plateau',
      '36 – 72 Hours',
      'Vaccines, insulin, diagnostic reagents, blood plasma, lab samples (UN2814).'
    ],
    [
      'Controlled Room Temp (15°C to 25°C)',
      'EPP Insulated Shippers + CRT Phase Change Buffers (+22°C)',
      '+20°C to +22°C',
      '48 – 72 Hours',
      'Monoclonal antibodies, temperature-sensitive oral tablets, cosmetics.'
    ],
    [
      'Last-Mile Fresh Grocery & Foodservice',
      'HP-8L to HP-100L Delivery Coolers + High-Density Gel Packs',
      '0°C / -10°C Formulations',
      '12 – 24 Hours',
      'Urban fresh groceries, restaurant banquet transfers, bakery, meal kits.'
    ]
  ];

  renderPlainTable(matrixHeaders, matrixRows, matrixColWidths);

  // SERIES 01: COMMERCIAL COOLER BOXES & HEAVY-DUTY SHIPPERS
  addSectionHeaderWithLeftImage(
    'SERIES 01',
    'Commercial Cooler Boxes & Heavy-Duty Insulated Shippers',
    'Manufactured with food-grade virgin LLDPE rotationally molded shells and high-density closed-cell PU foam. Left-aligned product visuals for each model row below.',
    images.coolers,
    rgb(0.08, 0.42, 0.78)
  );

  const coolerHeadersWithThumb = [
    'Visual',
    'Model',
    'Capacity',
    'External Dim (L×W×H)',
    'Internal Dim (L×W×H)',
    'Tare Wt',
    'Hold Time',
    'Recommended Applications'
  ];
  const coolerColWidthsWithThumb = [38, 52, 54, 98, 98, 44, 58, 227.89];

  // 1.1 Medical & Vaccine Cold Chain Series
  addSubCategoryHeader(
    '1.1 Medical & Vaccine Cold Chain Series (HP-6L to HP-65L)',
    'Validated for strict 2°C to 8°C pharmaceutical cold chains, clinical blood transfers & vaccine distribution.'
  );

  const medicalCoolerSpecs = [
    { name: 'HP-6L', category: 'medical', capacity: '6 Liters', extDim: '320 × 230 × 240 mm', intDim: '260 × 170 × 160 mm', weight: '1.8 kg', hold: '24 – 36h', app: 'Portable vaccine transport, insulin carriers, blood tubes.' },
    { name: 'HP-12L', category: 'medical', capacity: '12 Liters', extDim: '390 × 280 × 290 mm', intDim: '320 × 210 × 210 mm', weight: '2.6 kg', hold: '36 – 48h', app: 'Clinical trials, diagnostic pathology transfer, lab reagents.' },
    { name: 'HP-17L', category: 'medical', capacity: '17 Liters', extDim: '440 × 310 × 320 mm', intDim: '360 × 240 × 240 mm', weight: '3.2 kg', hold: '48 – 60h', app: 'Medical courier distribution, biological sample kits.' },
    { name: 'HP-20L', category: 'medical', capacity: '20 Liters', extDim: '470 × 330 × 340 mm', intDim: '390 × 260 × 260 mm', weight: '3.8 kg', hold: '48 – 60h', app: 'Hospital pharmacy dispatch, clinical pathology shipments.' },
    { name: 'HP-33L', category: 'medical', capacity: '33 Liters', extDim: '540 × 370 × 370 mm', intDim: '460 × 300 × 290 mm', weight: '5.1 kg', hold: '60 – 72h', app: 'Regional vaccine redistribution, multi-day specimen transit.' },
    { name: 'HP-35L', category: 'medical', capacity: '35 Liters', extDim: '560 × 380 × 385 mm', intDim: '475 × 310 × 300 mm', weight: '5.5 kg', hold: '72 – 84h', app: 'Pharma export air freight, diagnostic laboratory logistics.' },
    { name: 'HP-50L', category: 'medical', capacity: '50 Liters', extDim: '640 × 420 × 420 mm', intDim: '540 × 340 × 330 mm', weight: '7.2 kg', hold: '72 – 96h', app: 'Bulk biopharmaceutical inter-city distribution.' },
    { name: 'HP-65L', category: 'medical', capacity: '65 Liters', extDim: '710 × 450 × 440 mm', intDim: '600 × 370 × 350 mm', weight: '9.0 kg', hold: '96 – 120h', app: 'Heavy hospital bulk medicine & plasma container logistics.' }
  ];

  const medicalCoolerRows = [];
  for (const m of medicalCoolerSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    medicalCoolerRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.intDim, m.weight, m.hold, m.app]
    });
  }
  renderTableWithThumbs(coolerHeadersWithThumb, medicalCoolerRows, coolerColWidthsWithThumb);

  // =========================================================================
  // PAGE 3: COMMERCIAL DELIVERY & MARINE FISHERY COOLERS
  // =========================================================================
  addNewPage(false);

  // 1.2 Commercial Fresh Delivery
  addSubCategoryHeader(
    '1.2 Commercial Fresh-Food & Grocery Delivery Series (HP-8L to HP-100L)',
    'Built for daily multi-drop urban delivery, e-commerce fresh food logistics & refrigerated courier fleets.'
  );

  const deliveryCoolerSpecs = [
    { name: 'HP-8L', category: 'delivery', capacity: '8 Liters', extDim: '340 × 240 × 260 mm', intDim: '280 × 180 × 180 mm', weight: '1.9 kg', hold: '4 – 8h', app: 'DTC chocolate, pastry & small fresh parcel couriers.' },
    { name: 'HP-14L', category: 'delivery', capacity: '14 Liters', extDim: '410 × 290 × 300 mm', intDim: '340 × 220 × 220 mm', weight: '2.7 kg', hold: '6 – 10h', app: 'Chilled steaks, dairy cheeses & premium fruit baskets.' },
    { name: 'HP-28L', category: 'delivery', capacity: '28 Liters', extDim: '500 × 350 × 360 mm', intDim: '420 × 280 × 270 mm', weight: '4.2 kg', hold: '8 – 12h', app: 'Meal-kit delivery boxes, restaurant grocery replenishment.' },
    { name: 'HP-66L', category: 'delivery', capacity: '66 Liters', extDim: '690 × 440 × 430 mm', intDim: '580 × 360 × 340 mm', weight: '8.5 kg', hold: '12 – 24h', app: 'Supermarket cold chain van logistics, fresh poultry bulk.' },
    { name: 'HP-80L', category: 'delivery', capacity: '80 Liters', extDim: '760 × 470 × 460 mm', intDim: '640 × 390 × 360 mm', weight: '10.5 kg', hold: '24h', app: 'Central kitchen to store bulk refrigerated delivery.' },
    { name: 'HP-88L', category: 'delivery', capacity: '88 Liters', extDim: '800 × 490 × 470 mm', intDim: '680 × 400 × 370 mm', weight: '11.8 kg', hold: '24 – 36h', app: 'Commercial seafood, meat wholesale distribution.' },
    { name: 'HP-100L', category: 'delivery', capacity: '100 Liters', extDim: '850 × 520 × 500 mm', intDim: '720 × 430 × 390 mm', weight: '13.2 kg', hold: '36h', app: 'Extra-large commercial frozen cargo & pallet staging.' }
  ];

  const deliveryCoolerRows = [];
  for (const m of deliveryCoolerSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    deliveryCoolerRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.intDim, m.weight, m.hold, m.app]
    });
  }
  renderTableWithThumbs(coolerHeadersWithThumb, deliveryCoolerRows, coolerColWidthsWithThumb);

  // 1.3 Marine Fishery & Stackable Series
  addSubCategoryHeader(
    '1.3 Marine Fishery & Interlocking Stackable Series (HP-65L to HP-1000L)',
    'Heavy rotomolded commercial fishery containers & interlocking warehouse racking coolers.'
  );

  const marineStackSpecs = [
    { name: 'HP-300L', category: 'marine', capacity: '300 Liters', extDim: '1050 × 720 × 740 mm', intDim: '930 × 600 × 600 mm', weight: '26 kg', hold: '120h+', app: 'Offshore catch, dockside tuna staging, fishery vessels.' },
    { name: 'HP-630L', category: 'marine', capacity: '630 Liters', extDim: '1230 × 1030 × 850 mm', intDim: '1110 × 910 × 690 mm', weight: '45 kg', hold: '144h+', app: 'Forklift-ready heavy marine & aquaculture bulk storage.' },
    { name: 'HP-660L', category: 'marine', capacity: '660 Liters', extDim: '1250 × 1040 × 880 mm', intDim: '1120 × 920 × 710 mm', weight: '48 kg', hold: '144h+', app: 'Large-volume seafood & fresh-food distribution container.' },
    { name: 'HP-800L', category: 'marine', capacity: '800 Liters', extDim: '1450 × 1050 × 920 mm', intDim: '1310 × 920 × 740 mm', weight: '58 kg', hold: '168h+', app: 'Commercial seafood, tuna, salmon logistics & aquaculture.' },
    { name: 'HP-1000L', category: 'marine', capacity: '1,000 Liters', extDim: '1550 × 1150 × 1020 mm', intDim: '1400 × 1000 × 820 mm', weight: '72 kg', hold: '168h+', app: 'Industrial fish processing, sea container bulk storage.' },
    { name: 'HP-65L (Stk)', category: 'stackable', capacity: '65 Liters', extDim: '710 × 455 × 445 mm', intDim: '600 × 370 × 350 mm', weight: '9.2 kg', hold: '96h', app: 'Interlocking warehouse racking & vehicle stacking.' },
    { name: 'HP-110L (Stk)', category: 'stackable', capacity: '110 Liters', extDim: '880 × 540 × 520 mm', intDim: '750 × 440 × 410 mm', weight: '14.5 kg', hold: '120h', app: 'Industrial pallet-compatible interlocking stacking.' }
  ];

  const marineStackRows = [];
  for (const m of marineStackSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    marineStackRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.intDim, m.weight, m.hold, m.app]
    });
  }
  renderTableWithThumbs(coolerHeadersWithThumb, marineStackRows, coolerColWidthsWithThumb);

  // =========================================================================
  // PAGE 4: STAINLESS FOODSERVICE, OUTDOOR & SERIES 02 PCM BRICKS
  // =========================================================================
  addNewPage(false);

  // 1.4 Stainless Foodservice & Outdoor Series (Strictly excluding HP-30TL)
  addSubCategoryHeader(
    '1.4 Hotel 304 Stainless Foodservice & Outdoor Catering Series (HP-9L to HP-90L)',
    'Food-grade 304 stainless steel insulated vats, Gastronorm pan coolers & rugged outdoor picnic boxes.'
  );

  const hotelOutdoorSpecs = [
    { name: 'HP-16L (SS)', category: 'hotel', capacity: '16 Liters', extDim: '360 × 360 × 380 mm', intDim: '280 dia × 280 mm', weight: '4.1 kg', hold: '8 – 12h', app: '304 Stainless-Steel Insulated Hot/Cold Foodservice Vat.' },
    { name: 'HP-20L (SS)', category: 'hotel', capacity: '20 Liters', extDim: '380 × 380 × 420 mm', intDim: '300 dia × 310 mm', weight: '4.8 kg', hold: '8 – 12h', app: 'Commercial kitchen prep, buffet hot soup & cold sauce vat.' },
    { name: 'HP-30L (SS)', category: 'hotel', capacity: '30 Liters', extDim: '420 × 420 × 470 mm', intDim: '340 dia × 360 mm', weight: '6.2 kg', hold: '8 – 12h', app: 'Hotel banqueting, airline kitchen & catering foodservice.' },
    { name: 'HP-50L (SS)', category: 'hotel', capacity: '50 Liters', extDim: '480 × 480 × 560 mm', intDim: '390 dia × 440 mm', weight: '9.8 kg', hold: '10 – 14h', app: 'Heavy institutional foodservice, central kitchen logistics.' },
    { name: 'HP-90L', category: 'hotel', capacity: '90 Liters', extDim: '790 × 490 × 480 mm', intDim: '670 × 400 × 370 mm', weight: '12.5 kg', hold: '12 – 16h', app: 'Gastronorm pan compatible foodservice insulated cooler.' },
    { name: 'HP-9L', category: 'outdoor', capacity: '9 Liters', extDim: '350 × 245 × 270 mm', intDim: '290 × 190 × 190 mm', weight: '2.1 kg', hold: '24h', app: 'Compact outdoor food, canned beverage and road trip storage.' },
    { name: 'HP-22L', category: 'outdoor', capacity: '22 Liters', extDim: '470 × 330 × 350 mm', intDim: '395 × 260 × 260 mm', weight: '3.9 kg', hold: '48h', app: 'Outdoor dining, cold beer/wine, camping meals and BBQ storage.' },
    { name: 'HP-32L', category: 'outdoor', capacity: '32 Liters', extDim: '540 × 375 × 380 mm', intDim: '450 × 300 × 280 mm', weight: '5.4 kg', hold: '72h', app: 'Family camping, picnic cookouts, weekend yachting and fishing.' },
    { name: 'HP-52L', category: 'outdoor', capacity: '52 Liters', extDim: '650 × 430 × 430 mm', intDim: '550 × 340 × 330 mm', weight: '7.8 kg', hold: '96h', app: 'Large outdoor catering, corporate banquets and beverage cooling.' }
  ];

  const hotelOutdoorRows = [];
  for (const m of hotelOutdoorSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    hotelOutdoorRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.intDim, m.weight, m.hold, m.app]
    });
  }
  renderTableWithThumbs(coolerHeadersWithThumb, hotelOutdoorRows, coolerColWidthsWithThumb);

  // =========================================================================
  // PAGE 5: SERIES 02 PCM RIGID BRICKS & SERIES 03 GEL ICE PACKS
  // =========================================================================
  addNewPage(false);

  // SERIES 02: PCM RIGID PHASE CHANGE BRICKS
  addSectionHeaderWithLeftImage(
    'SERIES 02',
    'Phase Change Material (PCM) Rigid Ice Bricks',
    'Engineered with virgin food-grade HDPE shells, internal anti-bulging pillars, and ultrasonic friction hermetic welds. Formulated for exact phase transition plateaus (-21°C, -16°C, -11°C, 0°C, +5°C, +18°C) to replace dry ice and eliminate sweating damage.',
    images.pcm,
    rgb(0.08, 0.42, 0.78)
  );

  const pcmHeaders = [
    'Visual',
    'Model No.',
    'Net Weight',
    'Dimensions (L×W×H)',
    'Phase Transition Point',
    'Shell Architecture',
    'Key Applications & Compatibility'
  ];
  const pcmColWidths = [38, 55, 48, 95, 90, 88, 355.89];

  const pcmSpecs = [
    { name: 'XLD-200', category: 'pcm', capacity: '200 g', extDim: '165 × 95 × 20 mm', temp: '0°C / -10°C / -16°C', shell: 'Slim Ribbed Shell', app: 'Fast freezing ribs; parcel express mailers & fresh fruit boxes.' },
    { name: 'XLD-400', category: 'pcm', capacity: '400 g', extDim: '185 × 130 × 25 mm', temp: '0°C / +5°C / -16°C', shell: 'Dual Internal Pillars', app: 'Clinical diagnostic test kits, pharmaceutical chilled shippers.' },
    { name: 'XLD-600', category: 'pcm', capacity: '600 g', extDim: '215 × 145 × 30 mm', temp: '-21°C / -25°C Subzero', shell: 'Heavy Ultrasonic Weld', app: 'Dry-ice replacement for export wagyu, sashimi & bio-reagents.' },
    { name: 'XLD-1000', category: 'pcm', capacity: '1000 g', extDim: '280 × 190 × 30 mm', temp: '-21°C Deep Freeze', shell: 'Through-Hole Tie Points', app: 'Extended cold buffer for master shippers & wholesale parcels.' },
    { name: 'XLH-500', category: 'pcm', capacity: '500 g', extDim: '240 × 170 × 25 mm', temp: '+2°C to +8°C Anti-Freeze', shell: 'Flat Wall Profile', app: 'Vaccine vials, monoclonal antibodies & anti-freeze clinical kits.' },
    { name: 'XLH-800', category: 'pcm', capacity: '800 g', extDim: '295 × 190 × 30 mm', temp: '-16°C / -10°C Frozen', shell: 'Wall Lining Slab', app: 'Direct fit for HP-17L & HP-35L medical cooler box side walls.' },
    { name: 'XLH-1200', category: 'pcm', capacity: '1200 g', extDim: '330 × 220 × 35 mm', temp: '-21°C Deep Subzero', shell: 'Reinforced Grid Slab', app: 'Pallet-level bulk shippers, air freight frozen meat containers.' },
    { name: 'XLH-1600', category: 'pcm', capacity: '1600 g', extDim: '380 × 260 × 35 mm', temp: '-21°C / 0°C Ultra-Latent', shell: 'Industrial Grade HDPE', app: 'Seafood dockside transfer, bulk tuna holding & intermodal cargo.' }
  ];

  const pcmRows = [];
  for (const m of pcmSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    pcmRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.temp, m.shell, m.app]
    });
  }
  renderTableWithThumbs(pcmHeaders, pcmRows, pcmColWidths);

  // SERIES 03: GEL ICE PACKS (CONTINUOUS ON PAGE 5)
  addSectionHeaderWithLeftImage(
    'SERIES 03',
    'Gel Ice Packs (Flexible Multi-Layer Cooling Pouches)',
    'High-efficiency cold-chain gel pouches formulated with food-grade non-toxic sodium polyacrylate (SAP) and encased in heavy-duty co-extruded nylon/polyethylene (PA/PE) puncture-resistant barrier films.',
    images.gel,
    rgb(0.08, 0.42, 0.78)
  );

  const gelHeaders = [
    'Visual',
    'Model No.',
    'Net Weight',
    'Dimensions (L×W)',
    'Film Thickness',
    'Formulation Temp',
    'Packaging Yield / Applications'
  ];
  const gelColWidths = [38, 55, 48, 90, 85, 88, 365.89];

  const gelSpecs = [
    { name: 'XLD-150', category: 'gel', capacity: '150 g', extDim: '200 × 80 mm', film: 'Food-Grade PE Film', temp: '2°C ~ 8°C (Sub-zero on request)', app: '150 pcs/ctn. Food contact safe, non-toxic coolant, pharma & meal kits.' },
    { name: 'XLD-250C', category: 'gel', capacity: '250 g', extDim: '170 × 105 mm', film: 'Nylon / PE Composite', temp: '0°C (Hold 24–36 Hours)', app: '80 pcs/ctn. Requires freezer <-10°C >=15h. Fresh steaks, farm boxes.' },
    { name: 'XLD-500C', category: 'gel', capacity: '500 g', extDim: '215 × 135 mm', film: 'Nylon / PE Composite', temp: '0°C (Hold 24–36 Hours)', app: '40 pcs/ctn. Requires freezer <-10°C >=15h. Bulk seafood & meat.' },
    { name: 'XLD-250D10Y', category: 'gel', capacity: '250 g', extDim: '170 × 105 mm', film: 'Nylon / PE Composite', temp: '-10°C (Hold 24–36 Hours)', app: '80 pcs/ctn. Requires freezer <-20°C >=15h. Frozen pastries & foods.' },
    { name: 'XLD-500D10Y', category: 'gel', capacity: '500 g', extDim: '215 × 135 mm', film: 'Nylon / PE Composite', temp: '-10°C (Hold 24–36 Hours)', app: '40 pcs/ctn. Requires freezer <-20°C >=15h. Frozen fish & meats.' },
    { name: 'XLD-250D25Y', category: 'gel', capacity: '250 g', extDim: '170 × 105 mm', film: 'Nylon / PE Composite', temp: '-25°C (Hold 24–36 Hours)', app: '80 pcs/ctn. Deep freezer <-35°C >=15h. Ice cream & biologicals.' },
    { name: 'XLD-500D25Y', category: 'gel', capacity: '500 g', extDim: '215 × 135 mm', film: 'Nylon / PE Composite', temp: '-25°C (Hold 24–36 Hours)', app: '40 pcs/ctn. Deep freezer <-35°C >=15h. Deep-freeze vaccine transport.' },
    { name: 'NWIP-250', category: 'gel', capacity: '250 g', extDim: '200 × 120 mm', film: 'Non-Woven + PE Film', temp: '2°C ~ 8°C Anti-Condensation', app: '50 pcs/ctn. Anti-sweat non-woven outer layer prevents surface moisture.' },
    { name: 'XLD-300', category: 'gel', capacity: '300 g', extDim: '130 × 190 mm', film: 'High-Barrier PA/PE', temp: '2°C ~ 8°C (Sub-zero on request)', app: 'Commercial grocery deliveries, deli cuts, chilled meal boxes.' },
    { name: 'XLD-400', category: 'gel', capacity: '400 g', extDim: '150 × 205 mm', film: 'High-Barrier PA/PE', temp: '2°C ~ 8°C (Sub-zero on request)', app: '35 pcs/ctn. Reagents, IVD diagnostics & blood sample shippers.' },
    { name: 'XLD-500', category: 'gel', capacity: '500 g', extDim: '220 × 170 mm', film: 'Heavy PA/PE Co-extrusion', temp: '2°C ~ 8°C (Sub-zero on request)', app: '30 pcs/ctn. Bulk meat distribution & wholesale seafood shippers.' },
    { name: 'XLD-1000', category: 'gel', capacity: '1000 g', extDim: '200 × 300 mm', film: 'Reinforced Co-extrusion', temp: '2°C ~ 8°C (Sub-zero on request)', app: '15 pcs/ctn. Master shipping carton thermal buffer & freight crates.' },
    { name: 'ZHB-1300', category: 'gel', capacity: '1240 g', extDim: '385 × 200 × 28 mm', film: 'Heavy Composite Shell', temp: '2°C ~ 8°C (Sub-zero on request)', app: '10 pcs/ctn. Heavy cold containers, multi-day cold cargo shield.' }
  ];

  const gelRows = [];
  for (const m of gelSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    gelRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.film, m.temp, m.app]
    });
  }
  renderTableWithThumbs(gelHeaders, gelRows, gelColWidths);

  // =========================================================================
  // PAGE 6: SERIES 04 WATER-ACTIVATED SHEETS & SERIES 05 INSTANT COLD PACKS
  // =========================================================================
  addNewPage(false);

  // SERIES 04: WATER-ACTIVATED COOLING SHEETS
  addSectionHeaderWithLeftImage(
    'SERIES 04',
    'Self-Absorbing & Water-Activated Cooling Sheets (ZXD Series)',
    'Revolutionary dry-shipped cold chain sheets. Ships 100% dry and flat, slashing international ocean container freight costs by 95%. Simply soak in clean water for 3 to 5 minutes to hydrate super-absorbent polymer cells, then freeze flat.',
    images.water,
    rgb(0.08, 0.42, 0.78)
  );

  const waterHeaders = [
    'Visual',
    'Model No.',
    'Configuration',
    'Sheet Dimensions',
    'Dry Weight',
    'Hydrated Weight',
    'Key Applications & Wrap Usage'
  ];
  const waterColWidths = [38, 55, 80, 95, 60, 75, 366.89];

  const waterSpecs = [
    { name: 'ZXD-35', category: 'water', capacity: '1 Single Cell', extDim: '72 × 65 mm', dry: '4 g (Dry)', hyd: '~35 g (Hydrated)', app: 'Compact vials, diagnostic sample wraps & micro parcel mailers.' },
    { name: 'ZXD-100', category: 'water', capacity: 'Narrow Strip', extDim: '145 × 65 mm', dry: '8 g (Dry)', hyd: '~100 g (Hydrated)', app: 'Express parcel mailers, confectionery & compact pharmaceutical wraps.' },
    { name: 'ZXD-250', category: 'water', capacity: 'Standard Sheet', extDim: '130 × 115 mm', dry: '15 g (Dry)', hyd: '~250 g (Hydrated)', app: 'Chilled beef cuts, poultry steaks, farm basket delivery packages.' },
    { name: 'ZXD-420', category: 'water', capacity: '12 Cells Flexible', extDim: '290 × 195 mm', dry: '24 g (Dry)', hyd: '~420 g (Hydrated)', app: '12-cell grid sheet. Wraps easily around seafood cartons & bottles.' },
    { name: 'ZXD-850', category: 'water', capacity: '24 Cells Matrix', extDim: '390 × 290 mm', dry: '42 g (Dry)', hyd: '~850 g (Hydrated)', app: '24-cell full matrix sheet. Perimeter lining for oyster crates.' },
    { name: 'ZXD-1200', category: 'water', capacity: '12 Cells Heavy', extDim: '390 × 290 mm', dry: '65 g (Dry)', hyd: '~1200 g (Hydrated)', app: '12 heavy cells. High-capacity thermal hold for intermodal freight.' },
    { name: 'ZXD-1620', category: 'water', capacity: '9 Cells Jumbo', extDim: '390 × 290 mm', dry: '85 g (Dry)', hyd: '~1620 g (Hydrated)', app: '9 jumbo cells. Thermal ballast for large chilled freight shippers.' }
  ];

  const waterRows = [];
  for (const m of waterSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    waterRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.dry, m.hyd, m.app]
    });
  }
  renderTableWithThumbs(waterHeaders, waterRows, waterColWidths);

  // SERIES 05: INSTANT COLD PACKS (CONTINUOUS ON PAGE 6)
  addSectionHeaderWithLeftImage(
    'SERIES 05',
    'Instant Cooling Ice Packs (SLD-160 Rapid Activation <3s)',
    'Single-use emergency cold packs that activate instantly without refrigeration. Squeezing ruptures an internal liquid pouch, triggering an endothermic reaction that drops temperature to 0°C within 3 seconds.',
    images.instant,
    rgb(0.08, 0.42, 0.78)
  );

  const instantHeaders = [
    'Visual',
    'Model No.',
    'Net Weight',
    'Dimensions (L×W)',
    'Core Chemistry',
    'Cold Duration',
    'Key Applications & Emergency Scenarios'
  ];
  const instantColWidths = [38, 55, 50, 90, 95, 80, 361.89];

  const instantSpecs = [
    { name: 'SLD-160', category: 'instant', capacity: '160 g', extDim: '120 × 195 mm', chem: 'Medical PE / Endothermic Salt', dur: 'Instant drop in 3s (30–60m)', app: 'Single-use crush to activate. Clinical courier rescue & trauma first-aid.' }
  ];

  const instantRows = [];
  for (const m of instantSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    instantRows.push({
      thumb,
      data: [m.name, m.capacity, m.extDim, m.chem, m.dur, m.app]
    });
  }
  renderTableWithThumbs(instantHeaders, instantRows, instantColWidths);

  // =========================================================================
  // PAGE 7: SERIES 06 EPP FOAM BOXES, SERIES 07 OEM & DIRECT SALES DESK
  // =========================================================================
  addNewPage(false);

  // SERIES 06: EPP FOAM BOXES
  addSectionHeaderWithLeftImage(
    'SERIES 06',
    'EPP High-Density Foam Boxes (Lightweight Circular Shippers)',
    'Features: 1. Lightweight & high-density; 2. Superior thermal retention with ice packs & PCM bricks; 3. Commercial-grade thickened material, multi-year reusable; 4. High impact, drop & crush resistance vs. traditional EPS; 5. 100% non-toxic, odorless, food-safe & eco-friendly recyclable; 6. Multi-tier interlocking stackable design.',
    images.epp,
    rgb(0.08, 0.42, 0.78)
  );

  const eppHeaders = [
    'Visual',
    'Model No.',
    'Capacity',
    'External Dim',
    'Internal Dim',
    'Tare Wt',
    'Wall / Config',
    'Color & Application'
  ];
  const eppColWidths = [36, 50, 45, 98, 98, 44, 98, 200.89];

  const eppSpecs = [
    { name: 'EPP-8L', category: 'epp', capacity: '8 Liters', extDim: '370 x 270 x 155 mm', intDim: '330 x 230 x 120 mm', weight: '0.12 kg', wall: '20 mm', config: 'Bare Box', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-9L', category: 'epp', capacity: '9 Liters', extDim: '325 x 225 x 270 mm', intDim: '275 x 150 x 215 mm', weight: '0.15 kg', wall: '25 mm', config: 'With Hinge', color: 'Blue lid + Orange body', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-15L', category: 'epp', capacity: '15 Liters', extDim: '367 x 306 x 280 mm', intDim: '304 x 244 x 195 mm', weight: '0.25 kg', wall: '30 mm', config: 'With Hinge', color: 'Grey / Pink / Yellow', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-16L', category: 'epp', capacity: '16 Liters', extDim: '475 x 267 x 210 mm', intDim: '420 x 210 x 165 mm', weight: '0.18 kg', wall: '25 mm', config: 'With Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-18L', category: 'epp', capacity: '18 Liters', extDim: '390 x 262 x 310 mm', intDim: '330 x 210 x 260 mm', weight: '0.68 kg', wall: '26-30 mm', config: 'With Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-27L', id: 'EPP-27L-bare', category: 'epp', capacity: '27 Liters', extDim: '685 x 470 x 180 mm', intDim: '605 x 405 x 113 mm', weight: '1.45 kg', wall: '30 mm', config: 'Bare Box', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-27L', id: 'EPP-27L-clear', category: 'epp', capacity: '27 Liters', extDim: '587 x 380 x 266 mm', intDim: '507 x 301 x 205 mm', weight: '1.45 kg', wall: '40 mm', config: 'Clear Lid', color: 'Pink', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-31L', id: 'EPP-31L-pan', category: 'epp', capacity: '31 Liters', extDim: '587 x 380 x 266 mm', intDim: '527 x 320 x 185 mm', weight: '1.35 kg', wall: '30 mm', config: 'With Food Pan', color: 'Grey / Blue', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-31L', id: 'EPP-31L-clear', category: 'epp', capacity: '31 Liters', extDim: '587 x 380 x 266 mm', intDim: '527 x 320 x 185 mm', weight: '1.35 kg', wall: '30 mm', config: 'Clear Lid', color: 'Pink', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-34L', category: 'epp', capacity: '34 Liters', extDim: '600 x 400 x 255 mm', intDim: '540 x 340 x 185 mm', weight: '1.35 kg', wall: '30 mm', config: 'With Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-37L', category: 'epp', capacity: '37 Liters', extDim: '515 x 390 x 330 mm', intDim: '450 x 330 x 250 mm', weight: '1.35 kg', wall: '30-35 mm', config: 'Bare Box', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-43L', category: 'epp', capacity: '43 Liters', extDim: '490 x 380 x 395 mm', intDim: '430 x 320 x 315 mm', weight: '1.42 kg', wall: '30 mm', config: 'With Handle & Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-45L', category: 'epp', capacity: '45 Liters', extDim: '690 x 470 x 240 mm', intDim: '610 x 390 x 190 mm', weight: '1.69 kg', wall: '30 mm', config: 'Bare Box', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-62L', category: 'epp', capacity: '62 Liters', extDim: '555 x 445 x 395 mm', intDim: '495 x 385 x 325 mm', weight: '1.76 kg', wall: '30 mm', config: 'With Handle & Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-65L', category: 'epp', capacity: '65 Liters', extDim: '687 x 470 x 330 mm', intDim: '615 x 395 x 270 mm', weight: '2.02 kg', wall: '30 mm', config: 'Bare Box', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-78L', category: 'epp', capacity: '78 Liters', extDim: '620 x 510 x 425 mm', intDim: '540 x 430 x 335 mm', weight: '2.84 kg', wall: '40 mm', config: 'With Handle & Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-81L', category: 'epp', capacity: '81 Liters', extDim: '660 x 520 x 380 mm', intDim: '596 x 456 x 315 mm', weight: '2.34 kg', wall: '30 mm', config: 'With Handle & Hinge', color: 'Blue / Pink / Yellow', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-102L', category: 'epp', capacity: '102 Liters', extDim: '710 x 610 x 380 mm', intDim: '630 x 530 x 305 mm', weight: '3.02 kg', wall: '40 mm', config: 'With Handle & Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-108L', category: 'epp', capacity: '108 Liters', extDim: '660 x 520 x 480 mm', intDim: '600 x 460 x 390 mm', weight: '2.72 kg', wall: '30 mm', config: 'With Handle & Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-137L', category: 'epp', capacity: '137 Liters', extDim: '720 x 610 x 480 mm', intDim: '640 x 530 x 405 mm', weight: '3.73 kg', wall: '40 mm', config: 'With Handle & Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' },
    { name: 'EPP-172L', category: 'epp', capacity: '172 Liters', extDim: '710 x 610 x 580 mm', intDim: '630 x 530 x 515 mm', weight: '3.85 kg', wall: '40 mm', config: 'With Handle & Hinge', color: 'Grey', app: 'Fresh food delivery / camping / picnic / fast food delivery' }
  ];

  const eppRows = [];
  for (const m of eppSpecs) {
    const thumb = await getOrCreateModelThumb(m);
    eppRows.push({
      thumb,
      data: [
        m.name,
        m.capacity,
        m.extDim,
        m.intDim,
        m.weight,
        `${m.wall} | ${m.config}`,
        `${m.color} | ${m.app}`
      ]
    });
  }
  renderTableWithThumbs(eppHeaders, eppRows, eppColWidths);

  // SERIES 07: OEM CUSTOM TOOLING & SERVICES (CONTINUOUS ON PAGE 7)
  addSectionHeaderWithLeftImage(
    'SERIES 07',
    'OEM / ODM Custom Tooling & Thermal Formulation Engineering',
    'From private-label branding to clean-sheet mold design and specialized eutectic chemical synthesis, ColdPackPro operates full in-house tooling workshops, climate validation chambers, and automated production lines in Guangzhou.',
    images.oem,
    rgb(0.08, 0.42, 0.78)
  );

  const oemHeaders = [
    'Custom Engineering Service',
    'Factory Capabilities & Scope',
    'Lead Time / Turnaround',
    'Deliverables'
  ];
  const oemColWidths = [150, 240, 120, 259.89];

  const oemRows = [
    [
      'Private Mold Tooling',
      'Blow molding, rotational molding & EPP aluminum tooling for custom sizes & internal cavities.',
      '7 – 10 Business Days',
      '3D CAD step files, prototype molds, first-article samples.'
    ],
    [
      'Eutectic PCM Formulation',
      'Targeted phase change formulations from -40°C to +37°C tailored to specific payload criteria.',
      '5 – 7 Business Days',
      'DSC enthalpy curves, freeze/thaw cycle stability reports.'
    ],
    [
      'Thermal Chamber Validation',
      'Calibrated environmental simulation chambers (-30°C to +50°C) with multi-channel data loggers.',
      '3 – 5 Business Days',
      'Empirical lab test / CNAS certified thermal hold decay profiles.'
    ],
    [
      'Brand & Graphic Customization',
      'Multi-color gravure film printing, embossed logo tooling, bespoke outer cartons & barcodes.',
      'Included in Production',
      'Export master cartons, barcode labelling, multi-lingual text.'
    ]
  ];

  renderPlainTable(oemHeaders, oemRows, oemColWidths);

  // Dual card block: Left is Certifications, Right is Ordering & Contact
  currentY -= 6;
  const cardH = 92;
  const finalCardY = currentY - cardH;
  const leftCardW = 370;
  const rightCardW = CONTENT_WIDTH - leftCardW - 14;

  // Left card: Certifications & QA
  currentPage.drawRectangle({
    x: MARGIN_LEFT,
    y: finalCardY,
    width: leftCardW,
    height: cardH,
    color: rgb(0.04, 0.08, 0.16),
    borderColor: rgb(0.2, 0.5, 0.8),
    borderWidth: 1
  });

  currentPage.drawText('EXPORT COMPLIANCE & QA CERTIFICATIONS:', {
    x: MARGIN_LEFT + 12,
    y: currentY - 14,
    size: 8.5,
    font: fontBold,
    color: rgb(0.25, 0.8, 1.0)
  });

  const certLines = [
    '• CNAS Air Transport Report: Certified non-restricted cargo.',
    '• CNAS Sea Freight Report: Standard container dispatch.',
    '• Safety Data Sheets (SDS): 16-section GHS safety documentation.',
    '• Eco-Friendly SAP Coolant Formulation: SGS & MSDS certified safe material.'
  ];
  let clY = currentY - 26;
  for (const cl of certLines) {
    currentPage.drawText(cl, {
      x: MARGIN_LEFT + 12,
      y: clY,
      size: 7,
      font: fontRegular,
      color: rgb(0.85, 0.9, 0.96)
    });
    clY -= 11.5;
  }

  // Right card: Key Contact Person & Clickable Links
  const rCardX = MARGIN_LEFT + leftCardW + 14;
  currentPage.drawRectangle({
    x: rCardX,
    y: finalCardY,
    width: rightCardW,
    height: cardH,
    color: rgb(0.04, 0.08, 0.16),
    borderColor: rgb(0.2, 0.5, 0.8),
    borderWidth: 1
  });

  currentPage.drawText('COLDPACKPRO GUANGZHOU DIRECT SALES DESK:', {
    x: rCardX + 12,
    y: currentY - 14,
    size: 8.5,
    font: fontBold,
    color: rgb(0.25, 0.8, 1.0)
  });

  currentPage.drawText('• Key Contact: Mr. Yang   |   Mobile/WhatsApp/WeChat: +86 13925109703', {
    x: rCardX + 12,
    y: currentY - 26,
    size: 7.5,
    font: fontBold,
    color: rgb(0.95, 0.98, 1.0)
  });

  currentPage.drawText('• Email: info@coldpackpro.com   |   Factory: Guangzhou, Guangdong, China', {
    x: rCardX + 12,
    y: currentY - 37.5,
    size: 7,
    font: fontRegular,
    color: rgb(0.85, 0.92, 1.0)
  });

  const catLinkText = '• Digital Catalog & PI Tool: https://coldpackpro.com/catalog  (Click to open)';
  currentPage.drawText(catLinkText, {
    x: rCardX + 12,
    y: currentY - 49,
    size: 7.2,
    font: fontBold,
    color: rgb(0.35, 0.85, 1.0)
  });
  // Clickable URL Annotation
  addClickableLink(currentPage, rCardX + 12, currentY - 52, 280, 12, 'https://coldpackpro.com/catalog');

  currentPage.drawText('• Order Lead Time & MOQ: In-stock items ship in 3–7 days;', {
    x: rCardX + 12,
    y: currentY - 60.5,
    size: 7,
    font: fontBold,
    color: rgb(0.9, 0.95, 1.0)
  });

  currentPage.drawText('  Custom & OEM private-label orders scheduled per mutual agreement.', {
    x: rCardX + 12,
    y: currentY - 71,
    size: 6.8,
    font: fontItalic,
    color: rgb(0.75, 0.85, 0.95)
  });

  currentY = finalCardY - 8;

  // Second pass: Draw running footers on non-cover pages
  const totalPages = pages.length;
  for (let i = 0; i < totalPages; i++) {
    const pObj = pages[i];
    if (pObj.isCover) continue;

    const page = pObj.page;
    page.drawLine({
      start: { x: MARGIN_LEFT, y: 24 },
      end: { x: PAGE_WIDTH - MARGIN_RIGHT, y: 24 },
      thickness: 0.5,
      color: rgb(0.8, 0.85, 0.9)
    });

    page.drawText('Guangzhou QTOP Cold Chain Sciences Co., Ltd. · Export Cold-Chain Packaging Catalog', {
      x: MARGIN_LEFT,
      y: 14,
      size: 7,
      font: fontRegular,
      color: rgb(0.4, 0.45, 0.5)
    });

    const pageStr = `Page ${i + 1} of ${totalPages}`;
    page.drawText(pageStr, {
      x: PAGE_WIDTH - MARGIN_RIGHT - fontBold.widthOfTextAtSize(pageStr, 7),
      y: 14,
      size: 7,
      font: fontBold,
      color: rgb(0.4, 0.45, 0.5)
    });
  }

  const pdfBytes = await doc.save();
  const targetPath1 = path.join(__dirname, '..', 'assets', 'ColdPackPro-Full-Product-Catalog.pdf');
  const targetPath2 = path.join(__dirname, '..', 'assets', 'ColdPackPro-Catalog.pdf');

  fs.writeFileSync(targetPath1, pdfBytes);
  fs.writeFileSync(targetPath2, pdfBytes);

  console.log(`Successfully generated Landscape B2B Full Product Catalog PDF (${totalPages} pages, ${pdfBytes.length} bytes)`);
  console.log('Saved to:');
  console.log('1.', targetPath1);
  console.log('2.', targetPath2);
}

generateFullCatalogPdf().catch(err => {
  console.error('Error generating catalog PDF:', err);
  process.exit(1);
});
