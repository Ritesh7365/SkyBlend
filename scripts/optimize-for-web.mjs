import sharp from "sharp";
import fs from "fs";

const targets = [
  { in: "public/photos/hero-branded.jpg", out: "public/photos/hero-branded.jpg", w: 1920, h: 1080, q: 72 },
  { in: "public/photos/04-factory-exterior.jpg", out: "public/photos/04-factory-exterior.jpg", w: 1400, h: 875, q: 72 },
  { in: "public/photos/01-office.jpg", out: "public/photos/01-office.jpg", w: 1200, h: 750, q: 72 },
  { in: "public/photos/02-quality-control-development.jpg", out: "public/photos/02-quality-control-development.jpg", w: 1200, h: 750, q: 72 },
  { in: "public/photos/03-godown-shop-floor.jpg", out: "public/photos/03-godown-shop-floor.jpg", w: 1000, h: 1250, q: 72 },
  { in: "public/team/hiteshbhai-patel.jpg", out: "public/team/hiteshbhai-patel.jpg", w: 480, h: 600, q: 78 },
  { in: "public/team/prasanta-maharana.jpg", out: "public/team/prasanta-maharana.jpg", w: 480, h: 600, q: 78 },
  { in: "public/logo.png", out: "public/logo.png", w: 320, h: 260, q: 80, png: true },
];

for (const t of targets) {
  if (!fs.existsSync(t.in)) {
    console.log("skip missing", t.in);
    continue;
  }
  const img = sharp(t.in).rotate().resize(t.w, t.h, { fit: "cover", position: "centre" });
  if (t.png) {
    await img.png({ quality: t.q, compressionLevel: 9 }).toFile(t.out + ".tmp");
  } else {
    await img.jpeg({ quality: t.q, mozjpeg: true, progressive: true }).toFile(t.out + ".tmp");
  }
  fs.renameSync(t.out + ".tmp", t.out);
  const webp = t.out.replace(/\.(jpg|png)$/i, ".webp");
  if (!t.png) {
    await sharp(t.out).webp({ quality: Math.max(t.q - 4, 60) }).toFile(webp);
  }
  const size = fs.statSync(t.out).size;
  console.log("ok", t.out, Math.round(size / 1024) + "KB");
}

// delete unused bulky assets
const unused = [
  "public/photos/hero-branded-source.png",
  "public/photos/hero-source.png",
  "public/photos/hero-factory.jpg",
  "public/photos/hero-factory.webp",
  "public/photos/hero-plant-v2.jpg",
  "public/photos/hero-plant-v2.webp",
  "public/team/hiteshbhai-patel.png",
  "public/team/hiteshbhai-patel-square.jpg",
  "public/team/prasanta-maharana-source.png",
];
for (const f of unused) {
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log("removed", f);
  }
}

console.log("done");
