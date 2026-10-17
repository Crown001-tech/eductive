import { Jimp } from "jimp";

async function createCleanCutout() {
  const inputPath = "C:/Users/USER/.gemini/antigravity-ide/brain/926611e8-c4ab-48c1-9e85-2c7e2a0b97b4/celebrating_students_hero_1792180429721.jpg";
  const outputPath = "c:/Users/USER/Desktop/Eductive/frontend/public/images/celebrating-students.png";

  console.log("Loading image:", inputPath);
  const image = await Jimp.read(inputPath);
  const w = image.bitmap.width;
  const h = image.bitmap.height;
  const data = image.bitmap.data;

  console.log(`Image size: ${w}x${h}`);

  // Helper to check if a pixel is studio background
  // Studio backdrop is light neutral grey/white (R>190, G>190, B>190, low saturation)
  function isBackgroundPixel(x, y) {
    const idx = (y * w + x) * 4;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const diff = max - min;

    // Neutral studio background check: light and non-colorful
    return min > 195 && diff < 28;
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

  // Seed flood fill from all 4 borders
  for (let x = 0; x < w; x++) {
    if (isBackgroundPixel(x, 0)) pushQueue(x, 0);
    if (isBackgroundPixel(x, h - 1)) pushQueue(x, h - 1);
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

  // Now apply alpha:
  // Pure background -> alpha = 0
  // Also clean up any edge pixels (defringe)
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const pos = y * w + x;
      const idx = pos * 4;

      if (isBg[pos] === 1) {
        // 100% transparent
        data[idx + 3] = 0;
      } else {
        // Check if adjacent to background for smooth edge anti-aliasing
        let bgNeighbors = 0;
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
            if (isBg[ny * w + nx] === 1) bgNeighbors++;
          }
        }

        if (bgNeighbors > 0) {
          // Defringe: if it's very light on the edge, blend alpha
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];
          const min = Math.min(r, g, b);

          if (min > 185) {
            data[idx + 3] = Math.max(0, 255 - Math.round((min - 185) * 3));
          }
        }
      }
    }
  }

  console.log("Writing to:", outputPath);
  await image.write(outputPath);
  console.log("Clean cutout finished successfully!");
}

createCleanCutout().catch(console.error);
