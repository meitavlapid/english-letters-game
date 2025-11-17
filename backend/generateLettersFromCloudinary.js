// server/generateLettersFromCloudinary.js
require("dotenv").config();
const { v2: cloudinary } = require("cloudinary");

// 1. קונפיגורציה מה־.env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// helper – הופך public_id לאות, מילה, ו-imageId
function fromPublicId(publicId) {
  // לדוגמה: "english-letters/apple_b85rt9"
  const parts = publicId.split("/");
  const fileName = parts[parts.length - 1]; // "apple_b85rt9"
  const base = fileName.split("_")[0]; // "apple"

  const letter = base[0].toUpperCase(); // A
  const text = base.charAt(0).toUpperCase() + base.slice(1); // "Apple"

  return {
    letter,
    text,
    imageId: publicId, // נשמור את כל ה־public_id כולל התיקייה
  };
}

async function run() {
  try {
    // 2. חיפוש כל התמונות בתיקייה english-letters
    const res = await cloudinary.search
      .expression("folder:english-letters/*")
      .max_results(500)
      .execute();

    const resources = res.resources || [];

    // 3. ממפים אות → רשימת מילים
    const byLetter = {};

    for (const r of resources) {
      const { letter, text, imageId } = fromPublicId(r.public_id);

      if (!byLetter[letter]) byLetter[letter] = [];
      byLetter[letter].push({ text, imageId });
    }

    // 4. מסדרים את המערך לפי סדר אותיות
    const letters = Object.keys(byLetter)
      .sort()
      .map((letter) => ({
        letter,
        words: byLetter[letter],
      }));

    // 5. מדפיסים לקונסול קוד JS מוכן ל־letters.js
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

