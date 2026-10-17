import { Jimp } from "jimp";

async function processStudents() {
  const inputPath = "C:/Users/USER/.gemini/antigravity-ide/brain/926611e8-c4ab-48c1-9e85-2c7e2a0b97b4/celebrating_students_hero_1792180429721.jpg";
  const outputPath = "c:/Users/USER/Desktop/Eductive/frontend/public/images/celebrating-students.png";

  console.log("Reading celebrating students image:", inputPath);
  const image = await Jimp.read(inputPath);

  const width = image.bitmap.width;
  const height = image.bitmap.height;
  console.log(`Dimensions: ${width}x${height}`);

  // Corner/edge background sample color (studio white is typically ~248-255)
  image.scan(0, 0, width, height, (x, y, idx) => {
    const r = image.bitmap.data[idx + 0];
    const g = image.bitmap.data[idx + 1];
    const b = image.bitmap.data[idx + 2];

    const minVal = Math.min(r, g, b);
    const maxVal = Math.max(r, g, b);
    const diff = maxVal - minVal;

    // Studio backdrop threshold
    if (minVal > 240 && diff < 15) {
      // 100% transparent
      image.bitmap.data[idx + 3] = 0;
    } else if (minVal > 220 && diff < 18) {
      // Smooth anti-aliased edge feathering
      const t = (minVal - 220) / (240 - 220);
      image.bitmap.data[idx + 3] = Math.round(255 * (1 - t * t));
    }
  });

  console.log("Writing transparent PNG to:", outputPath);
  await image.write(outputPath);
  console.log("Successfully created celebrating-students.png!");
}

processStudents().catch(console.error);
