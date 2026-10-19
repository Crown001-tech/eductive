const { Jimp } = require("jimp");
const fs = require("fs");
const path = require("path");

// Ensure directories exist
const publicDir = path.join(__dirname, "..", "public");
const iconsDir = path.join(publicDir, "icons");
const appDir = path.join(__dirname, "..", "src", "app");

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 1. Create crisp public/favicon.svg
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#094337" />
      <stop offset="100%" stop-color="#041F19" />
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3DDC97" />
      <stop offset="100%" stop-color="#12A26B" />
    </linearGradient>
    <filter id="beaconGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#3DDC97" flood-opacity="0.6"/>
    </filter>
  </defs>
  <!-- Forest Green Tile -->
  <rect width="64" height="64" rx="16" fill="url(#bgGrad)" />
  <rect width="60" height="60" x="2" y="2" rx="14" fill="none" stroke="#12A26B" stroke-width="1.2" stroke-opacity="0.35" />

  <!-- EDUCTIVE Geometric E Monogram -->
  <!-- Vertical Spine -->
  <rect x="15" y="15" width="8" height="34" rx="4" fill="#FFFFFF" />
  
  <!-- Top Bar (Emerald) -->
  <rect x="15" y="15" width="28" height="8" rx="4" fill="url(#emeraldGrad)" />
  
  <!-- Middle Bar (White) -->
  <rect x="15" y="28" width="18" height="7" rx="3.5" fill="#FFFFFF" opacity="0.95" />
  
  <!-- Bottom Bar (Emerald) -->
  <rect x="15" y="41" width="26" height="8" rx="4" fill="url(#emeraldGrad)" />

  <!-- Synchronized Beacon Dot -->
  <circle cx="47" cy="31.5" r="4" fill="#3DDC97" filter="url(#beaconGlow)" />
  <circle cx="47" cy="31.5" r="6.5" fill="none" stroke="#3DDC97" stroke-width="1" opacity="0.5" />
</svg>
`;

fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgContent);
fs.writeFileSync(path.join(appDir, "icon.svg"), svgContent);
console.log("Created favicon.svg and app/icon.svg");

// Unsigned 32-bit color helper for Jimp setPixelColor
function toColor(r, g, b, a = 255) {
  return (((r & 0xff) << 24) | ((g & 0xff) << 16) | ((b & 0xff) << 8) | (a & 0xff)) >>> 0;
}

// Function to draw the EDUCTIVE icon
function drawEductiveIcon(size, isMaskable = false) {
  const img = new Jimp({ width: size, height: size, color: 0x00000000 });
  const cornerRadius = isMaskable ? 0 : size * 0.22;
  const half = size / 2;

  // Colors
  const bgTop = [9, 67, 55, 255];     // #094337
  const bgBottom = [4, 31, 25, 255];   // #041F19
  const borderEmerald = toColor(18, 162, 107, 100);
  const whiteColor = toColor(255, 255, 255, 255);
  const emeraldColor = toColor(61, 220, 151, 255); // #3DDC97

  // Helper: check if point (x, y) is inside rounded rectangle
  function isInsideRoundedRect(x, y, w, h, r) {
    if (r <= 0) return true;
    if (x >= r && x <= w - r) return true;
    if (y >= r && y <= h - r) return true;
    const cx = x < r ? r : w - r;
    const cy = y < r ? r : h - r;
    const dx = x - cx;
    const dy = y - cy;
    return dx * dx + dy * dy <= r * r;
  }

  // Draw background
  for (let y = 0; y < size; y++) {
    const t = y / size;
    const r = Math.round(bgTop[0] * (1 - t) + bgBottom[0] * t);
    const g = Math.round(bgTop[1] * (1 - t) + bgBottom[1] * t);
    const b = Math.round(bgTop[2] * (1 - t) + bgBottom[2] * t);
    const color = toColor(r, g, b, 255);

    for (let x = 0; x < size; x++) {
      if (isInsideRoundedRect(x, y, size, size, cornerRadius)) {
        img.setPixelColor(color, x, y);
      }
    }
  }

  // Subtle border if not maskable
  if (!isMaskable && size >= 32) {
    const bOffset = Math.max(1, Math.round(size * 0.02));
    for (let y = bOffset; y < size - bOffset; y++) {
      for (let x = bOffset; x < size - bOffset; x++) {
        const outer = isInsideRoundedRect(x, y, size, size, cornerRadius);
        const inner = isInsideRoundedRect(x - bOffset, y - bOffset, size - 2 * bOffset, size - 2 * bOffset, cornerRadius - bOffset);
        if (outer && !inner) {
          img.setPixelColor(borderEmerald, x, y);
        }
      }
    }
  }

  // Calculate layout geometry for the "E" Monogram
  const scale = isMaskable ? 0.70 : 0.86;
  const sX = (1 - scale) * half;
  const sY = (1 - scale) * half;

  const leftSpineX1 = Math.round(sX + size * scale * 0.23);
  const leftSpineX2 = Math.round(sX + size * scale * 0.35);
  const topY1 = Math.round(sY + size * scale * 0.23);
  const topY2 = Math.round(sY + size * scale * 0.35);
  const bottomY1 = Math.round(sY + size * scale * 0.64);
  const bottomY2 = Math.round(sY + size * scale * 0.76);
  const midY1 = Math.round(sY + size * scale * 0.44);
  const midY2 = Math.round(sY + size * scale * 0.55);

  const topX2 = Math.round(sX + size * scale * 0.68);
  const midX2 = Math.round(sX + size * scale * 0.54);
  const bottomX2 = Math.round(sX + size * scale * 0.65);

  const beaconCX = Math.round(sX + size * scale * 0.74);
  const beaconCY = Math.round(sY + size * scale * 0.495);
  const beaconRadius = Math.max(2, Math.round(size * scale * 0.065));

  // Draw Left vertical spine (White)
  for (let y = topY1; y <= bottomY2; y++) {
    for (let x = leftSpineX1; x <= leftSpineX2; x++) {
      img.setPixelColor(whiteColor, x, y);
    }
  }

  // Draw Top bar (Emerald)
  for (let y = topY1; y <= topY2; y++) {
    for (let x = leftSpineX1; x <= topX2; x++) {
      img.setPixelColor(emeraldColor, x, y);
    }
  }

  // Draw Middle bar (White)
  for (let y = midY1; y <= midY2; y++) {
    for (let x = leftSpineX1; x <= midX2; x++) {
      img.setPixelColor(whiteColor, x, y);
    }
  }

  // Draw Bottom bar (Emerald)
  for (let y = bottomY1; y <= bottomY2; y++) {
    for (let x = leftSpineX1; x <= bottomX2; x++) {
      img.setPixelColor(emeraldColor, x, y);
    }
  }

  // Draw Synchronized Telemetry Beacon Dot
  for (let y = beaconCY - beaconRadius - 2; y <= beaconCY + beaconRadius + 2; y++) {
    for (let x = beaconCX - beaconRadius - 2; x <= beaconCX + beaconRadius + 2; x++) {
      const dx = x - beaconCX;
      const dy = y - beaconCY;
      const d2 = dx * dx + dy * dy;
      if (d2 <= beaconRadius * beaconRadius) {
        img.setPixelColor(emeraldColor, x, y);
      }
    }
  }

  return img;
}

// Convert a 32x32 PNG buffer into a valid .ico file buffer
function pngToIco(pngBuffer) {
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // 1 Image

  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(32, 0);  // Width
  icoEntry.writeUInt8(32, 1);  // Height
  icoEntry.writeUInt8(0, 2);   // Color palette
  icoEntry.writeUInt8(0, 3);   // Reserved
  icoEntry.writeUInt16LE(1, 4); // Color planes
  icoEntry.writeUInt16LE(32, 6); // Bits per pixel
  icoEntry.writeUInt32LE(pngBuffer.length, 8); // Size of image data
  icoEntry.writeUInt32LE(22, 12); // Offset to image data (6 + 16 = 22)

  return Buffer.concat([icoHeader, icoEntry, pngBuffer]);
}

async function main() {
  console.log("Generating EDUCTIVE brand icons and PWA assets...");

  // Generate 512x512
  const icon512 = drawEductiveIcon(512, false);
  await icon512.write(path.join(iconsDir, "icon-512.png"));
  console.log("Generated icon-512.png");

  // Generate 512x512 maskable
  const iconMaskable512 = drawEductiveIcon(512, true);
  await iconMaskable512.write(path.join(iconsDir, "icon-maskable-512.png"));
  console.log("Generated icon-maskable-512.png");

  // Generate 192x192
  const icon192 = drawEductiveIcon(192, false);
  await icon192.write(path.join(iconsDir, "icon-192.png"));
  console.log("Generated icon-192.png");

  // Generate 192x192 maskable
  const iconMaskable192 = drawEductiveIcon(192, true);
  await iconMaskable192.write(path.join(iconsDir, "icon-maskable-192.png"));
  console.log("Generated icon-maskable-192.png");

  // Generate Apple Touch Icon 180x180
  const appleIcon = drawEductiveIcon(180, false);
  await appleIcon.write(path.join(publicDir, "apple-touch-icon.png"));
  console.log("Generated apple-touch-icon.png");

  // Generate 32x32
  const icon32 = drawEductiveIcon(32, false);
  await icon32.write(path.join(publicDir, "favicon-32x32.png"));
  console.log("Generated favicon-32x32.png");

  // Generate 16x16
  const icon16 = drawEductiveIcon(16, false);
  await icon16.write(path.join(publicDir, "favicon-16x16.png"));
  console.log("Generated favicon-16x16.png");

  // Generate favicon.ico using 32x32 PNG
  const png32Buffer = await icon32.getBuffer("image/png");
  const icoBuffer = pngToIco(png32Buffer);

  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);
  console.log("Replaced public/favicon.ico and app/favicon.ico with EDUCTIVE brand icon");

  console.log("All icons generated successfully!");
}

main().catch(console.error);
