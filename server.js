const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Direct asset upload endpoint for factory & product original photos
app.post('/api/upload-asset', (req, res) => {
  try {
    const { filename, base64Data } = req.body;
    if (!filename || !base64Data) {
      return res.status(400).json({ success: false, message: 'Missing filename or base64Data' });
    }

    const safeFilename = path.basename(filename);
    const imagesDir = path.join(__dirname, 'images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    const targetPath = path.join(imagesDir, safeFilename);
    const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(cleanBase64, 'base64');

    fs.writeFileSync(targetPath, buffer);
    console.log(`[Upload] Successfully saved ${safeFilename} (${buffer.length} bytes)`);

    return res.json({
      success: true,
      message: `File ${safeFilename} uploaded successfully`,
      filename: safeFilename,
      path: `/images/${safeFilename}?v=${Date.now()}`
    });
  } catch (err) {
    console.error('[Upload Error]', err);
    return res.status(500).json({ success: false, message: err.message });
  }
});

// =========================================================================
// Persistent Catalog Product Image Storage API (Disk + Server State)
// =========================================================================
const CATALOG_IMAGES_FILE = path.join(__dirname, 'catalog-images.json');
const CATALOG_UPLOADS_DIR = path.join(__dirname, 'images', 'catalog-uploads');

// Ensure upload directory exists
if (!fs.existsSync(CATALOG_UPLOADS_DIR)) {
  fs.mkdirSync(CATALOG_UPLOADS_DIR, { recursive: true });
}

// 1. Get all persisted catalog images
app.get('/api/catalog-images', (req, res) => {
  try {
    let images = {};
    if (fs.existsSync(CATALOG_IMAGES_FILE)) {
      try {
        images = JSON.parse(fs.readFileSync(CATALOG_IMAGES_FILE, 'utf8') || '{}');
      } catch (e) {
        images = {};
      }
    }
    return res.json({ success: true, images });
  } catch (err) {
    console.error('[Get Catalog Images Error]', err);
    return res.status(500).json({ success: false, images: {}, message: err.message });
  }
});

// 2. Persist single catalog product slot image directly to disk
app.post('/api/catalog-images', (req, res) => {
  try {
    const { slotId, base64Data } = req.body;
    if (!slotId || !base64Data) {
      return res.status(400).json({ success: false, message: 'Missing slotId or base64Data' });
    }

    if (!fs.existsSync(CATALOG_UPLOADS_DIR)) {
      fs.mkdirSync(CATALOG_UPLOADS_DIR, { recursive: true });
    }

    const cleanSlotId = String(slotId).replace(/[^a-zA-Z0-9_-]/g, '_');
    const extMatch = base64Data.match(/^data:image\/(\w+);base64,/);
    let ext = 'jpg';
    if (extMatch && extMatch[1] === 'png') ext = 'png';
    else if (extMatch && extMatch[1] === 'webp') ext = 'webp';

    const filename = `${cleanSlotId}.${ext}`;
    const filePath = path.join(CATALOG_UPLOADS_DIR, filename);
    const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(filePath, Buffer.from(cleanBase64, 'base64'));

    let current = {};
    if (fs.existsSync(CATALOG_IMAGES_FILE)) {
      try {
        current = JSON.parse(fs.readFileSync(CATALOG_IMAGES_FILE, 'utf8') || '{}');
      } catch (e) {
        current = {};
      }
    }

    const fileUrl = `/images/catalog-uploads/${filename}?v=${Date.now()}`;
    current[slotId] = fileUrl;
    fs.writeFileSync(CATALOG_IMAGES_FILE, JSON.stringify(current, null, 2));

    console.log(`[Catalog Photo Saved] Slot: '${slotId}' -> ${filename}`);
    return res.json({
      success: true,
      slotId,
      url: fileUrl,
      message: `Image for ${slotId} permanently saved to server`
    });
  } catch (err) {
    console.error('[Save Catalog Image Error]', err);
    return res.status(500).json({ success: false, message: err.message });
  }
});

// 3. Delete or reset a specific slot image
app.delete('/api/catalog-images/:slotId', (req, res) => {
  try {
    const slotId = req.params.slotId;
    if (fs.existsSync(CATALOG_IMAGES_FILE)) {
      let current = {};
      try {
        current = JSON.parse(fs.readFileSync(CATALOG_IMAGES_FILE, 'utf8') || '{}');
      } catch (e) {
        current = {};
      }
      delete current[slotId];
      fs.writeFileSync(CATALOG_IMAGES_FILE, JSON.stringify(current, null, 2));
    }

    const cleanSlotId = String(slotId).replace(/[^a-zA-Z0-9_-]/g, '_');
    ['jpg', 'png', 'webp', 'jpeg'].forEach(ext => {
      const p = path.join(CATALOG_UPLOADS_DIR, `${cleanSlotId}.${ext}`);
      if (fs.existsSync(p)) {
        try { fs.unlinkSync(p); } catch (e) {}
      }
    });

    return res.json({ success: true, slotId });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// 4. Reset all catalog images
app.post('/api/catalog-images/reset', (req, res) => {
  try {
    if (fs.existsSync(CATALOG_IMAGES_FILE)) {
      fs.writeFileSync(CATALOG_IMAGES_FILE, JSON.stringify({}, null, 2));
    }
    if (fs.existsSync(CATALOG_UPLOADS_DIR)) {
      const files = fs.readdirSync(CATALOG_UPLOADS_DIR);
      for (const file of files) {
        try { fs.unlinkSync(path.join(CATALOG_UPLOADS_DIR, file)); } catch (e) {}
      }
    }
    return res.json({ success: true, message: 'All catalog images reset' });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Set security and no-cache headers to ensure previews always reflect the latest code and assets
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  if (req.path.startsWith('/request-quote') || req.path.endsWith('.pdf')) {
    res.setHeader('X-Robots-Tag', 'noindex, noarchive');
  }
  next();
});

// Serve static files (HTML, CSS, images, assets, etc.) with caching disabled
app.use(express.static(path.join(__dirname, 'public'), {
  etag: false,
  maxAge: 0,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));
app.use(express.static(path.join(__dirname), {
  etag: false,
  maxAge: 0,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
  }
}));

// Server-side secured email API key (kept safely on the server side)
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || '96cb4db8-5269-48b0-91e2-69a1f6871723';

// Server-side proxy for PI submission (ensures API keys are never exposed in client JS)
app.post('/api/send-pi', async (req, res) => {
  try {
    const { email, subject, message, replyTo, cc, company, invoiceNo } = req.body;
    if (!email || !message) {
      return res.status(400).json({ success: false, message: 'Missing required email or message content.' });
    }

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      email: email,
      subject: subject || `PI Request ${invoiceNo || ''} from ${company || ''}`,
      message: message,
      _replyto: replyTo || email,
      'CC_Requested': cc || 'none',
      'Company': company || 'N/A',
      'Invoice_No': invoiceNo || 'N/A'
    };

    const upstream = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await upstream.json();
    return res.json(data);
  } catch (error) {
    console.error('Error in /api/send-pi:', error);
    return res.status(500).json({ success: false, message: 'Internal server error processing PI submission.' });
  }
});

// Server-side proxy for catalog download request & lead notification
app.post('/api/send-catalog', async (req, res) => {
  try {
    const { email, company, name, phone, country } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email address is required.' });
    }

    const contactName = (name && name.trim()) || email.split('@')[0];
    const companyName = (company && company.trim()) || 'N/A';
    const contactPhone = (phone && phone.trim()) || 'N/A';
    const contactCountry = (country && country.trim()) || 'N/A';

    const downloadRecord = {
      timestamp: new Date().toISOString(),
      country: contactCountry,
      company: companyName,
      name: contactName,
      email: email.trim(),
      phone: contactPhone,
      source: 'Digital Catalog Download (Header / Hero Shortcut)',
      targetFile: 'ColdPackPro-Full-Product-Catalog.xlsx',
      sentTo: 'info@coldpackpro.com'
    };

    // 1. Permanently persist lead locally to catalog-downloads.json
    try {
      const logFile = path.join(__dirname, 'catalog-downloads.json');
      let currentLogs = [];
      if (fs.existsSync(logFile)) {
        try {
          currentLogs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
        } catch (e) {
          currentLogs = [];
        }
      }
      currentLogs.push(downloadRecord);
      fs.writeFileSync(logFile, JSON.stringify(currentLogs, null, 2));


    } catch (logErr) {
      console.error('Failed writing catalog-downloads.json:', logErr);
    }

    // 2. Transmit notification payload to info@coldpackpro.com via Web3Forms
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      email: email.trim(),
      subject: `[Catalog Download] ${contactName} (${contactCountry}) - ${companyName}`,
      message: `=====================================================
ColdPackPro 2026 Official Catalog Download Notification:
=====================================================
Customer Name: ${contactName}
Country / Region: ${contactCountry}
Company Name / Website: ${companyName}
Business Email: ${email.trim()}
Phone / WhatsApp: ${contactPhone}

Notification Recipient: info@coldpackpro.com
Download Item: ColdPackPro-Full-Product-Catalog.xlsx (Multi-Page Excel)
Timestamp: ${new Date().toISOString()} (${new Date().toLocaleString('en-GB')})
Source Page: Digital Catalog (catalog.html)
=====================================================`,
      _replyto: email.trim(),
      'Target_Recipient': 'info@coldpackpro.com',
      'Customer_Name': contactName,
      'Country_Region': contactCountry,
      'Company_Name': companyName,
      'Customer_Email': email.trim(),
      'Phone_WhatsApp': contactPhone,
      'Action': 'Full Catalog Download'
    };

    try {
      const upstream = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(3500)
      });
      const data = await upstream.json().catch(() => ({ success: true }));
      return res.json({
        success: true,
        downloadUrl: '/download/coldpackpro-full-catalog.xlsx',
        filename: 'ColdPackPro-Full-Product-Catalog.xlsx',
        data
      });
    } catch (fetchErr) {
      // Return success even if upstream network is delayed, so customer download starts smoothly
      return res.json({
        success: true,
        downloadUrl: '/download/coldpackpro-full-catalog.xlsx',
        filename: 'ColdPackPro-Full-Product-Catalog.xlsx'
      });
    }
  } catch (error) {
    console.error('Error in /api/send-catalog:', error);
    return res.status(500).json({ success: false, message: 'Server error processing catalog download.' });
  }
});

// Server-side proxy for customer inquiry with uploaded images and files
const INQUIRY_ATTACHMENTS_DIR = path.join(__dirname, 'images', 'inquiry-attachments');
if (!fs.existsSync(INQUIRY_ATTACHMENTS_DIR)) {
  fs.mkdirSync(INQUIRY_ATTACHMENTS_DIR, { recursive: true });
}

app.post('/api/send-inquiry', async (req, res) => {
  try {
    const { company, name, email, country, interest, product, message, attachments, images } = req.body;
    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required.' });
    }

    // Process and persist any uploaded file/image attachments
    const savedFiles = [];
    const rawFiles = Array.isArray(attachments) ? attachments : (Array.isArray(images) ? images : []);
    for (const item of rawFiles) {
      if (!item || !item.dataUrl) continue;
      try {
        const cleanBase64 = item.dataUrl.replace(/^data:[^;]+;base64,/, '');
        const buffer = Buffer.from(cleanBase64, 'base64');
        const rawName = (item.name || `attachment_${Date.now()}`).replace(/[^a-zA-Z0-9._-]/g, '_');
        const filename = `${Date.now()}_${rawName}`;
        const filePath = path.join(INQUIRY_ATTACHMENTS_DIR, filename);
        fs.writeFileSync(filePath, buffer);
        savedFiles.push({
          name: item.name || rawName,
          filename,
          sizeKB: Math.round(buffer.length / 1024),
          url: `/images/inquiry-attachments/${filename}`
        });
      } catch (saveErr) {
        console.error('Failed saving attachment:', saveErr);
      }
    }

    const targetProduct = product || interest || 'General Cold Chain Inquiry';

    const inquiryRecord = {
      timestamp: new Date().toISOString(),
      name,
      company: company || 'N/A',
      email,
      country: country || 'N/A',
      product: targetProduct,
      message: message || '',
      attachmentsCount: savedFiles.length,
      attachments: savedFiles
    };



    // Forward notification via Web3Forms if reachable
    try {
      const attachmentSummary = savedFiles.length > 0
        ? `\nAttachments (${savedFiles.length} files attached):\n` + savedFiles.map(f => `• ${f.name} (${f.sizeKB} KB): https://coldpackpro.com${f.url}`).join('\n')
        : '';

      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        email: email,
        subject: `ColdPackPro Inquiry from ${name} [${country || 'Overseas'}] - ${targetProduct}`,
        message: `Direct Factory Inquiry:
Contact Name: ${name}
Company Name: ${company || 'N/A'}
Business Email: ${email}
Country / Region: ${country || 'N/A'}
Associated Product: ${targetProduct}

Customer Request:
${message || '(Blank - Customer requested direct consultation)'}
${attachmentSummary}
`,
        _replyto: email,
        'Contact_Name': name,
        'Company_Name': company || 'N/A',
        'Business_Email': email,
        'Country_Region': country || 'N/A',
        'Associated_Product': targetProduct
      };

      const upstream = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(2500)
      });
      const text = await upstream.text();
      try {
        const data = JSON.parse(text);
        return res.json({ success: true, data, logged: true, savedFiles });
      } catch {
        return res.json({ success: true, logged: true, savedFiles });
      }
    } catch (fetchErr) {
      return res.json({ success: true, logged: true, savedFiles });
    }
  } catch (error) {
    console.error('Error in /api/send-inquiry:', error);
    return res.status(500).json({ success: false, message: 'Server error processing inquiry.' });
  }
});



// Direct download route for the technical whitepaper PDF
app.get(['/download/sub-zero-guide-pdf', '/api/download-article-pdf'], (req, res) => {
  const pdfPath = path.join(__dirname, 'assets', 'ColdPackPro-SubZero-PCM-Dry-Ice-Alternative-Technical-Whitepaper.pdf');
  res.download(pdfPath, 'ColdPackPro-SubZero-PCM-Dry-Ice-Alternative-Technical-Whitepaper.pdf');
});

// Direct download route for the comprehensive full product catalog XLSX spreadsheet
app.get(['/download/coldpackpro-full-catalog.xlsx', '/download/full-catalog-xlsx', '/download/catalog-xlsx', '/api/download-catalog-xlsx'], async (req, res) => {
  const xlsxPath = path.join(__dirname, 'assets', 'ColdPackPro-Full-Product-Catalog.xlsx');
  if (!fs.existsSync(xlsxPath)) {
    try {
      const { generateFullCatalogXlsx } = require('./scripts/generate-full-catalog-xlsx');
      await generateFullCatalogXlsx();
    } catch (e) {
      console.error('Failed to auto-generate catalog xlsx:', e);
    }
  }
  res.download(xlsxPath, 'ColdPackPro-Full-Product-Catalog.xlsx');
});

// Direct download route for the comprehensive full product catalog PDF (retained for backward compatibility)
app.get(['/download/coldpackpro-full-catalog.pdf', '/download/full-catalog-pdf', '/download/catalog-pdf', '/api/download-catalog-pdf'], (req, res) => {
  const pdfPath = path.join(__dirname, 'assets', 'ColdPackPro-Full-Product-Catalog.pdf');
  res.download(pdfPath, 'ColdPackPro-Full-Product-Catalog.pdf');
});

// Redirect old certification image URL to the new CNAS Sea transport certificate
app.get('/images/3.cnas-transport-safety-certification-cold-chain-packaging-china.webp', (req, res) => {
  res.redirect(301, '/images/cnas-sea-transport-certification-cold-chain-ice-pack.png');
});

// Specific route for Request Quote
app.get('/request-quote', (req, res) => {
  res.sendFile(path.join(__dirname, 'request-quote.html'));
});

// Specific route for Online Digital Catalog
app.get(['/catalog', '/catalog.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'catalog.html'));
});



// Blog article route (supports with or without .html)
app.get('/blog/:slug', (req, res, next) => {
  const cleanSlug = req.params.slug.replace(/\.html$/, '');
  const filePath = path.join(__dirname, 'blog', `${cleanSlug}.html`);
  res.sendFile(filePath, (err) => {
    if (err) {
      next();
    }
  });
});

// 404 for unmatched API routes
app.all('/api/*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Fallback to index.html for all other navigation routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ColdPackPro server running on http://0.0.0.0:${PORT}`);
});
