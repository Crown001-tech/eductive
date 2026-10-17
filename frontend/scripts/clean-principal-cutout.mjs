import { Jimp } from "jimp";

async function createPrincipalCutout() {
  const inputPath = "C:/Users/USER/.gemini/antigravity-ide/brain/926611e8-c4ab-48c1-9e85-2c7e2a0b97b4/nigerian_school_principal_tablet_1792233646360.jpg";
  const outputPath = "c:/Users/USER/Desktop/Eductive/frontend/public/images/principal-teacher-transparent.png";

  console.log("Loading image:", inputPath);
  const image = await Jimp.read(inputPath);
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const data = image.bitmap.data;

  console.log(`Original image size: ${w}x${h}`);

  // Helper to check if a pixel is studio background
  // Studio backdrop is white/light grey (R>200, G>200, B>200, low saturation)
  function isBackgroundPixel(x, y) {
    const idx = (y * w + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const diff = max - min;

    return min > 200 && diff < 25;
  }

  // Visited array
  const isBg = new Uint8Array(w * h);
  const queue = new Int32Array(w * h * 2);
  let head = 0;
  let tail = 0;

  function pushQueue(x, y) {
    queue[tail++] = x;
    queue[tail++] = y;
    isBg[y * w + x] = 1;
  }

  // Seed flood fill from top, left, and right borders (not bottom because person stands at bottom)
  for (let x = 0; x < w; x++) {
    if (isBackgroundPixel(x, 0)) pushQueue(x, 0);
  }
  for (let y = 0; y < h; y++) {
    if (isBackgroundPixel(0, y)) pushQueue(0, y);
    if (isBackgroundPixel(w - 1, y)) pushQueue(w - 1);
  }

  console.log("Initial seed points:", tail / 2);

  // Flood fill algorithm
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (head < tail) {
    const cx = queue[head++];
    const cy = queue[head++];

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const npos = ny * w + nx;
        if (!isBg[npos] && isBackgroundPixel(nx, ny)) {
          isBg[npos] = 1;
          queue[tail++] = nx;
          queue[tail++] = ny;
        }
      }
    }
  }

  console.log(`Flood fill complete. Background pixels: ${tail / 2} out of ${w * h} (${Math.round((tail / 2) / (w * h) * 100)}%)`);

  // Apply transparency and anti-aliasing edge blend
  let minX = w, maxX = 0, minY = h, maxY = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pos = y * w + x;
      const idx = pos * 4;

      if (isBg[pos] === 1) {
        data[idx + 3] = 0;
      } else {
        // Track bounding box of subject
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        // Anti-aliasing / defringing on boundary
        let bgNeighbors = 0;
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            if (isBg[ny * w + nx] === 1) bgNeighbors++;
          }
        }

        if (bgNeighbors > 0) {
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const min = Math.min(r, g, b);

          if (min > 190) {
            data[idx + 3] = Math.max(0, 255 - Math.round((min - 190) * 3.5));
          }
        }
      }
    }
  }

  console.log(`Bounding box: x[${minX}, ${maxX}] y[${minY}, ${maxY}] -> width: ${maxX - minX + 1}, height: ${maxY - minY + 1}`);

  // Crop image tightly to subject with small 5px padding
  const pad = 5;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(w - cropX, (maxX - minX + 1) + pad * 2);
  const cropH = Math.min(h - cropY, (maxY - minY + 1) + pad * 2);

  console.log(`Cropping to ${cropW}x${cropH} at (${cropX}, ${cropY})`);
  image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });

  console.log("Writing transparent PNG to:", outputPath);
  await image.write(outputPath);
  console.log("Principal clean cutout finished successfully!");
}

createPrincipalCutout().catch(console.error);
