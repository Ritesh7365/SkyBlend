import sharp from "sharp";
import fs from "fs";
import path from "path";

const src = "_photo_extract";
const dest = "public/photos";
fs.mkdirSync(dest, { recursive: true });
fs.mkdirSync("public/team", { recursive: true });

async function out(name, pipeline) {
  const jpgPath = path.join(dest, `${name}.jpg`);
  await pipeline.jpeg({ quality: 88, mozjpeg: true }).toFile(jpgPath);
  await sharp(jpgPath).webp({ quality: 84 }).toFile(path.join(dest, `${name}.webp`));
  console.log("ok", name);
}

const exteriorMeta = await sharp(path.join(src, "04-factory-exterior.jpg")).metadata();
const top = Math.round(exteriorMeta.height * 0.1);
const height = Math.round(exteriorMeta.height * 0.7);

await out(
  "01-office",
  sharp(path.join(src, "01-office.jpg"))
    .rotate()
    .resize(1800, 1200, { fit: "cover", position: "centre" })
    .modulate({ brightness: 1.04, saturation: 1.05 })
    .sharpen({ sigma: 0.9 }),
);

await out(
  "02-quality-control-development",
  sharp(path.join(src, "02-quality-control-development.jpg"))
    .rotate()
    .resize(1800, 1200, { fit: "cover", position: "centre" })
    .modulate({ brightness: 1.05, saturation: 1.06 })
    .sharpen({ sigma: 0.9 }),
);

await out(
  "03-godown-shop-floor",
  sharp(path.join(src, "03-godown-shop-floor.jpg"))
    .rotate()
    .resize(1400, 1750, { fit: "cover", position: "centre" })
    .modulate({ brightness: 1.06, saturation: 1.04 })
    .sharpen({ sigma: 0.85 }),
);

await out(
  "04-factory-exterior",
  sharp(path.join(src, "04-factory-exterior.jpg"))
    .rotate()
    .extract({ left: 0, top, width: exteriorMeta.width, height })
    .resize(2000, 1125, { fit: "cover", position: "centre" })
    .modulate({ brightness: 1.05, saturation: 1.08 })
    .sharpen({ sigma: 0.8 }),
);

// Hero crop — more cinematic
await sharp(path.join(dest, "04-factory-exterior.jpg"))
  .resize(2400, 1350, { fit: "cover", position: "centre" })
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(path.join(dest, "hero-factory.jpg"));
await sharp(path.join(dest, "hero-factory.jpg"))
  .webp({ quality: 86 })
  .toFile(path.join(dest, "hero-factory.webp"));

await sharp(path.join(src, "headshot_portrait.jpg"))
  .rotate()
  .resize(900, 1125, { fit: "cover", position: "top" })
  .sharpen({ sigma: 0.7 })
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/team/hiteshbhai-patel.jpg");

await sharp(path.join(src, "headshot_square.jpg"))
  .rotate()
  .resize(700, 700, { fit: "cover", position: "top" })
  .sharpen({ sigma: 0.7 })
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/team/hiteshbhai-patel-square.jpg");

await sharp("public/team/hiteshbhai-patel.jpg")
  .png({ quality: 90 })
  .toFile("public/team/hiteshbhai-patel.png");

console.log("all done");
