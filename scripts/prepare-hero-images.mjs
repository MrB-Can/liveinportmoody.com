import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import sharp from "sharp";

const downloads = path.join(os.homedir(), "Downloads");
const outputDir = path.join(process.cwd(), "public/images/hero");
const phaseOneOutputDir = path.join(process.cwd(), "public/images/phase1");

const files = [
  {
    source: "IMG_7313.jpeg",
    fallbacks: ["LPM_hero.png"],
    dest: "port-moody-hero-original.jpg",
    outputDir,
    width: 2800,
    quality: 82,
  },
  {
    source: "spring_morning_by_the_tranquil_lake.png",
    dest: "port-moody-hero-spring.jpg",
    outputDir,
    width: 2800,
    quality: 82,
  },
  {
    source: "serene_lakeside_morning_scene.png",
    dest: "port-moody-hero-summer.jpg",
    outputDir,
    width: 2800,
    quality: 82,
  },
  {
    source: "DSC04252",
    fallbacks: ["DSC04248"],
    dest: "port-moody-community-building.jpg",
    outputDir: phaseOneOutputDir,
    width: 2000,
    quality: 78,
    matchByBasename: true,
  },
  {
    source: "DSC04266",
    dest: "port-moody-forest-path.jpg",
    outputDir: phaseOneOutputDir,
    width: 2000,
    quality: 78,
    matchByBasename: true,
  },
  {
    source: "DSC04272",
    dest: "port-moody-regional-view.jpg",
    outputDir: phaseOneOutputDir,
    width: 2000,
    quality: 78,
    matchByBasename: true,
  },
  {
    source: "DSC04275",
    dest: "port-moody-hillside-homes.jpg",
    outputDir: phaseOneOutputDir,
    width: 2000,
    quality: 78,
    matchByBasename: true,
  },
  {
    source: "DSC04279",
    dest: "port-moody-residential-greenery.jpg",
    outputDir: phaseOneOutputDir,
    width: 2000,
    quality: 78,
    matchByBasename: true,
  },
  {
    source: "DSC04283",
    dest: "port-moody-residential-detail.jpg",
    outputDir: phaseOneOutputDir,
    width: 2000,
    quality: 78,
    matchByBasename: true,
  },
];

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveDownload(source, fallbacks = []) {
  const allowedExtensions = new Set([".jpg", ".jpeg", ".png"]);
  const entries = await fs.readdir(downloads);
  const sources = [source, ...fallbacks];

  for (const candidate of sources) {
    const basenameMatch = entries
      .filter((entry) => path.basename(entry, path.extname(entry)).toLowerCase() === candidate.toLowerCase())
      .filter((entry) => allowedExtensions.has(path.extname(entry).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0];

    if (basenameMatch) return path.join(downloads, basenameMatch);

    const exactPath = path.join(downloads, candidate);
    if (await exists(exactPath)) return exactPath;
  }

  const ext = path.extname(source);
  const base = path.basename(source, ext);
  const suffixedMatch = entries
    .filter((entry) => {
      const entryExt = path.extname(entry);
      const entryBase = path.basename(entry, entryExt);
      return (
        entryExt.toLowerCase() === ext.toLowerCase() &&
        new RegExp(`^${base.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} \\(\\d+\\)$`).test(entryBase)
      );
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))[0];

  if (suffixedMatch) return path.join(downloads, suffixedMatch);

  throw new Error(`Missing source file in ${downloads}: ${source}`);
}

await fs.mkdir(outputDir, { recursive: true });
await fs.mkdir(phaseOneOutputDir, { recursive: true });

const missing = [];
for (const file of files) {
  let sourcePath;
  try {
    sourcePath = await resolveDownload(file.source, file.fallbacks);
  } catch {
    missing.push(file.source);
    continue;
  }

  const destPath = path.join(file.outputDir, file.dest);

  await sharp(sourcePath)
    .resize({ width: file.width, withoutEnlargement: true })
    .jpeg({ quality: file.quality, progressive: true })
    .toFile(destPath);

  console.log(`Created ${destPath}`);
}

if (missing.length > 0) {
  console.error(`Missing source files in ${downloads}:`);
  for (const source of missing) console.error(`- ${source}`);
  process.exitCode = 1;
}
