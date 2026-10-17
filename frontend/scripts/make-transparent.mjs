import { Jimp } from "jimp";

async function processImage() {
  const inputPath = "C:/Users/USER/.gemini/antigravity-ide/brain/926611e8-c4ab-48c1-9e85-2c7e2a0b97b4/hero_students_teacher_1792175539865.jpg";
  const outputPath = "c:/Users/USER/Desktop/Eductive/frontend/public/images/hero-students-teacher.png";

  console.log("Reading image:", inputPath);
  const image = await Jimp.read(inputPath);

  const width = image.bitmap.width;
  const height = image.bitmap.height;
  console.log(`Dimensions: ${width}x${height}`);

  // Flood fill or pixel color distance to pure white
  image.scan(0, 0, width, height, (x, y, idx) => {
    const r = image.bitmap.data[idx + 0];
    const g = image.bitmap.data[idx + 1];
    const b = image.bitmap.data[idx + 2];

    // Compute lightness / proximity to white (255, 255, 255)
    // Studio white background is typically R>238, G>238, B>238
    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const diff = maxVal - minVal;

    // Neutral white/grey background check
    if (minVal > 242 && diff < 12) {
      // Pure white studio backdrop -> 100% transparent
      image.bitmap.data[idx + 3] = 0;
    } else if (minVal > 225 && diff < 14) {
      // Soft antialiased edge feathering
      const t = (minVal - 225) / (242 - 225);
      image.bitmap.data[idx + 3] = Math.round(255 * (1 - t));
    }
  });

  console.log("Writing transparent PNG to:", outputPath);
  await image.write(outputPath);
  console.log("Done!");
}

processImage().catch(console.error);
