// src/components/GameScreen.jsx
import React, { useState, useEffect, useRef } from "react";
import "./GameScreen.css";

// מדגישים את האות בתוך המילה – בהתחלה לרוב האותיות, בסוף ב-X
function highlightLetterInWord(letter, word) {
  if (!letter || !word) return word;

  const upperWord = word.toUpperCase();
  const target = letter.toUpperCase();

  const index =
    target === "X" ? upperWord.lastIndexOf(target) : upperWord.indexOf(target);

  if (index === -1) return word;

  return (
    <>
      {word.slice(0, index)}
      <span className="example-word__highlight">{word[index]}</span>
      {word.slice(index + 1)}
    </>
  );
}

function ExampleWordCard({
  letter,
  exampleWord,
  exampleHebrew,
  exampleImage,
  visible,
  onAnotherWord,
  onHeardExampleWord,
}) {
  const [showHebrew, setShowHebrew] = useState(false);

  if (!visible) return null;

  const isX = letter === "X";

  return (
    <div className="example-card">
      <div className="example-card__title-en">
        {isX
          ? "Example word (listen to the ending sound):"
          : "Example word (listen to the beginning sound):"}
      </div>
      <div className="example-card__title-he">
        {isX
          ? "מילה לדוגמה — מקשיבים לצליל בסוף המילה"
          : "מילה לדוגמה — מקשיבים לצליל בתחילת המילה"}
      </div>

      <div className="example-card__word-wrapper">
        <div className="example-card__word-en">
          {highlightLetterInWord(letter, exampleWord)}
        </div>

        {exampleHebrew && !showHebrew && (
          <button
            type="button"
            onClick={() => setShowHebrew(true)}
            className="example-card__he-button"
          >
            הצג בעברית
          </button>
        )}

        {exampleHebrew && showHebrew && (
          <div className="example-card__word-he">{exampleHebrew}</div>
        )}
      </div>

      {exampleImage && (
        <img
          src={exampleImage}
          alt={exampleWord}
          className="example-card__image"
        />
      )}

      <button
        type="button"
        onClick={() => {
          const utterance = new SpeechSynthesisUtterance(exampleWord);
          utterance.lang = "en-US";
          window.speechSynthesis.speak(utterance);

          if (onHeardExampleWord) {
            onHeardExampleWord();
          }
        }}
        className="example-card__listen-btn"
      >
        🔊 Listen to the word
      </button>

      {onAnotherWord && (
        <button
          type="button"
          onClick={onAnotherWord}
          className="example-card__another-btn"
        >
          🔁 עוד מילה לאות הזאת
        </button>
      )}
    </div>
  );
}

function GameScreen({
  round,
  isLoading,
  score,
  streak,
  feedback,
  canProceed,
  onHome,
  onPlayLetterSound,
  onOptionClick,
  onNext,
  onAnotherWord,
}) {
  const isCorrect = feedback === "correct";
  const isWrong = feedback === "wrong";

  const [stage, setStage] = useState("intro"); // intro | choice
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasHeardWord, setHasHeardWord] = useState(false); // 👈 שמעו את המילה
  const audioRef = useRef(null);

  // ראונד חדש → חוזרים ל-intro ומאפסים שמיעת מילה
  useEffect(() => {
    setStage("intro");
    setHasHeardWord(false);
  }, [round?.letter]);

  // תשובה נכונה → מתחיל "שלב המילה", נחייב האזנה לפני Next
  useEffect(() => {
    if (feedback === "correct") {
      setHasHeardWord(false);
    }
  }, [feedback]);

  // פידבק → אוברליי + סאונד
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    if (feedback === "correct" || feedback === "wrong") {
      setShowOverlay(true);

      const audioSrc =
        feedback === "correct" ? "/sounds/success.wav" : "/sounds/error.wav";

      const audio = new Audio(audioSrc);
      audioRef.current = audio;
      audio.play().catch(() => {});

      if (feedback === "correct") {
        const overlayTimer = setTimeout(() => {
          setShowOverlay(false);
        }, 1300);

        const stopSoundTimer = setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }, 1300);

        return () => {
          clearTimeout(overlayTimer);
          clearTimeout(stopSoundTimer);
        };
      }

      return;
    }

    if (feedback === "") {
      setShowOverlay(false);
    }
  }, [feedback]);

  if (isLoading || !round) {
    return <div className="game-root game-root--loading">Loading game…</div>;
  }

  const upper = round.letter;
  const lower = round.letter.toLowerCase();

  return (
    <div className={`game-root ${isWrong ? "shake" : ""}`}>
      <div className="game-card">
        {/* Header */}
        <div className="game-header">
          <button type="button" onClick={onHome} className="game-home-btn">
            🏠 Home
          </button>

          <div className="game-title-block">
            <div className="game-title-en">Letter Sound</div>
            <div className="game-title-he">צלילי אותיות — האזנה וזיהוי</div>
          </div>

          <div className="game-score">
            Score <span className="game-score__value">{score}</span>
          </div>
        </div>
        {/* שלב 1: אות + האזנה */}
        {stage === "intro" && (
          <>
            <div className="game-letter-box">
              <span className="game-letter-box__upper">{upper}</span>
              <span className="game-letter-box__lower">{lower}</span>
            </div>

            <button
              onClick={() => {
                onPlayLetterSound();
                setStage("choice");
              }}
              className="game-listen-btn"
            >
              <span className="game-listen-btn__icon">▶</span>
              Listen to the sound
            </button>

            <div className="game-intro-text-he">
              מקשיבים לצליל של האות, ואז נבחר איזו אות שמענו.
            </div>
          </>
        )}

        {/* שלב 2: בחירת אות */}
        {stage === "choice" && (
          <>
            <div className="game-question-en">Which letter did you hear?</div>
            <div className="game-question-he">איזו אות שמעת?</div>

            <button
              type="button"
              onClick={() => {
                setStage("intro");
              }}
              className="game-back-letter-btn"
            >
              ⬅ Back to the letter (🔊 hear again)
            </button>

            <div className="game-options">
              {round.options.map((opt) => {
                const isCorrectOption = opt === round.letter;

                let extraClass = "";
                if (isCorrect && isCorrectOption) {
                  extraClass = "game-option-btn--correct";
                } else if (isWrong && isCorrectOption) {
                  extraClass = "game-option-btn--correct-hint";
                }

                return (
                  <button
                    key={opt}
                    onClick={() => {
                      if (!canProceed) {
                        onOptionClick(opt);
                      }
                    }}
                    className={`game-option-btn ${extraClass} ${
                      canProceed ? "game-option-btn--disabled" : ""
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* מילה לדוגמה אחרי תשובה נכונה */}
        <ExampleWordCard
          letter={round.letter}
          exampleWord={round.exampleWord}
          exampleHebrew={round.exampleHebrew}
          exampleImage={round.exampleImage}
          visible={feedback === "correct"}
          onAnotherWord={onAnotherWord}
          onHeardExampleWord={() => setHasHeardWord(true)}
        />

        {/* Next רק אחרי תשובה נכונה + שמיעת המילה + בלי אוברליי */}
        {canProceed && hasHeardWord && !showOverlay && (
          <button type="button" onClick={onNext} className="game-next-btn">
            Next ➜
          </button>
        )}
      </div>

      {/* אוברליי הצלחה/טעות */}
      {showOverlay && (
        <>
          {isCorrect && <Confetti />}
          <div className="game-overlay">
            <div className="game-overlay__box">
              <div className="game-overlay__emoji">
                {isCorrect ? "😊" : "❌"}
              </div>
              <div
                className={`game-overlay__text ${
                  isCorrect
                    ? "game-overlay__text--success"
                    : "game-overlay__text--error"
                }`}
              >
                {isCorrect ? "הצלחת!" : "נסה שוב"}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 20 });

  return (
    <div className="confetti-layer">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.9 + Math.random()}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default GameScreen;
