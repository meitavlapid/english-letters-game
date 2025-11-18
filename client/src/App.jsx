import { useEffect, useState } from "react";
import HomeScreen from "./components/HomeScreen";
import GameScreen from "./components/GameScreen";
import PictureGameScreen from "./components/PictureGameScreen";

const API_BASE = "https://english-letters-game.onrender.com";

function App() {
  const [round, setRound] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState("home");
  const [unit, setUnit] = useState("A-F");
  const [canProceed, setCanProceed] = useState(false);
  const [mode, setMode] = useState("letter");

  useEffect(() => {
    if (screen === "game") {
      loadNewRound();
    }
  }, [screen, unit, mode]);

  async function loadNewRound() {
    setIsLoading(true);
    setFeedback("");
    setCanProceed(false);

    try {
      const params = new URLSearchParams();
      if (unit) {
        params.set("range", unit);
      }

      const endpoint =
        mode === "picture" ? "/api/game/picture-round" : "/api/game/round";

      const res = await fetch(`${API_BASE}${endpoint}?${params.toString()}`);

      if (!res.ok) {
        throw new Error("Failed to load round");
      }
      const data = await res.json();
      setRound(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  function playLetterSound() {
    if (!round) return;

    const utterance = new SpeechSynthesisUtterance(round.letter);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
  }

  function handleOptionClick(choice) {
    if (!round) return;
    if (canProceed) return;

    let isRight = false;

    if (mode === "letter") {
      isRight = choice === round.letter;
    } else if (mode === "picture") {
      isRight = choice === round.correctIndex;
    }

    if (isRight) {
      setFeedback("correct");
      setScore((prev) => prev + 1);
      setStreak((prev) => Math.min(prev + 1, 3));
      setCanProceed(true);
    } else {
      setFeedback("wrong");
      setStreak(0);
      setTimeout(() => {
        setFeedback("");
      }, 700);
    }
  }

  function handleNextRound() {
    loadNewRound();
  }

  // מסך פתיחה
  if (screen === "home") {
    return (
      <HomeScreen
        unit={unit}
        onUnitChange={setUnit}
        mode={mode}
        onModeChange={setMode}
        onStart={() => {
          setScore(0);
          setStreak(0);
          setScreen("game");
        }}
      />
    );
  }

  // מסך המשח
  if (mode === "picture") {
    return (
      <PictureGameScreen
        round={round}
        isLoading={isLoading}
        score={score}
        streak={streak}
        feedback={feedback}
        canProceed={canProceed}
        onHome={() => setScreen("home")}
        onPlayLetterSound={playLetterSound}
        onOptionClick={handleOptionClick}
        onNext={handleNextRound}
        unit={unit}
      />
    );
  }

  // מצב אות
  return (
    <GameScreen
      round={round}
      isLoading={isLoading}
      score={score}
      streak={streak}
      feedback={feedback}
      canProceed={canProceed}
      onHome={() => setScreen("home")}
      onPlayLetterSound={playLetterSound}
      onOptionClick={handleOptionClick}
      onNext={handleNextRound}
    />
  );
}

export default App;
