require("dotenv").config();
const { v2: cloudinary } = require("cloudinary");
// 1. קונפיגורציה מה־.env

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function fromPublicId(publicId) {
  const parts = publicId.split("/");
  const fileName = parts[parts.length - 1]; 
  const base = fileName.split("_")[0]; 
  const letter = base[0].toUpperCase(); 
  const text = base.charAt(0).toUpperCase() + base.slice(1); 

  return {
    letter,
    text,
    imageId: publicId, 
  };
}

async function run() {
  try {
    const res = await cloudinary.search
      .expression("folder:english-letters/*")
      .max_results(500)
      .execute();

    const resources = res.resources || [];
    const byLetter = {};
    for (const r of resources) {
      const { letter, text, imageId } = fromPublicId(r.public_id);
      if (!byLetter[letter]) byLetter[letter] = [];
      byLetter[letter].push({ text, imageId });
    }

    const letters = Object.keys(byLetter)
      .sort()
      .map((letter) => ({
        letter,
        words: byLetter[letter],
      }));

    console.log(`const letters = ${JSON.stringify(letters, null, 2)};\n`);

    console.log(`function getRandomRound(allowedLetters) {
  let pool = letters;

  if (Array.isArray(allowedLetters) && allowedLetters.length > 0) {
    pool = letters.filter((l) => allowedLetters.includes(l.letter));
  }

  const correctLetter = pool[Math.floor(Math.random() * pool.length)];

  const otherLetters = pool
    .filter((l) => l.letter !== correctLetter.letter)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  const options = [
    correctLetter.letter,
    ...otherLetters.map((l) => l.letter),
  ].sort(() => 0.5 - Math.random());

  const randomWord =
    correctLetter.words[
      Math.floor(Math.random() * correctLetter.words.length)
    ];

  return {
    letter: correctLetter.letter,
    exampleWord: randomWord.text,
    exampleImage: buildImageUrl(randomWord.imageId),
    options,
  };
}

const CLOUDINARY_BASE = "https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload";

function buildImageUrl(id) {
  return \`\${CLOUDINARY_BASE}/\${id}.jpg\`;
}

module.exports = { letters, getRandomRound };`);
  } catch (err) {
    console.error("Error:", err);
  }
}

run();

