// server/index.js

const express = require("express");
const cors = require("cors");
const {
  letters,
  getRandomRound,
  getRandomPictureRound,
  buildImageUrl,
  getRandomWordForLetter,
} = require("./letters");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// פונקציה שעוזרת למפות טווח לשמות אותיות
function getAllowedLettersFromRange(range) {
  switch (range) {
    case "A-F":
      return ["A", "B", "C", "D", "E", "F"];
    case "G-L":
      return ["G", "H", "I", "J", "K", "L"];
    case "M-R":
      return ["M", "N", "O", "P", "Q", "R"];
    case "S-Z":
      return ["S", "T", "U", "V", "W", "X", "Y", "Z"];
    case "X":
      return ["X"];
    default:
      return null;
  }
}

app.get("/api/letters", (req, res) => {
  res.json(letters);
});
app.get("/api/game/round", (req, res) => {
  const { range } = req.query;
  const allowedLetters = getAllowedLettersFromRange(range);
  const round = getRandomRound(allowedLetters);
  res.json(round);
});
app.get("/api/game/another-word", (req, res) => {
  const { letter } = req.query;

  if (!letter) {
    return res.status(400).json({ error: "letter query param is required" });
  }

  const upper = letter.toUpperCase();

  const letterObj = letters.find((l) => l.letter === upper);
  if (!letterObj) {
    return res.status(404).json({ error: "letter not found" });
  }

  const randomWord =
    letterObj.words[Math.floor(Math.random() * letterObj.words.length)];

  return res.json({
    letter: randomWord.letter,
    exampleWord: randomWord.text,
    exampleHebrew: randomWord.hebrew,
    exampleImage: buildImageUrl(randomWord.imageId),
  });
});
app.get("/api/game/picture-round", (req, res) => {
  const { range } = req.query;
  const allowedLetters = getAllowedLettersFromRange(range);
  const round = getRandomPictureRound(allowedLetters);
  res.json(round);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
