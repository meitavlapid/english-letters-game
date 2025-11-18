import React, { useEffect, useState, useRef } from "react";
import "./PictureGameScreen.css";

function PictureGameScreen({
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
  unit,
}) {
  const isCorrect = feedback === "correct";
  const isWrong = feedback === "wrong";

  const [showOverlay, setShowOverlay] = useState(false);
  const [hasHeardWord, setHasHeardWord] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setHasHeardWord(false);
  }, [round?.letter, round?.correctIndex]);

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
    return (
      <div className="picture-root picture-root--loading">Loading game…</div>
    );
  }

  const correctOption = round.options[round.correctIndex];

  function handleListenWord() {
    if (!correctOption) return;

    const utterance = new SpeechSynthesisUtterance(correctOption.text);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
    setHasHeardWord(true);
  }

  function renderOptionLabel(opt) {
    if (!opt || !opt.text) return null;

    const word = opt.text;
    const upper = word.toUpperCase();

    if ((unit === "X" || unit === "X-only") && opt.letter === "X") {
      const idx = upper.lastIndexOf("X");
      if (idx === -1) {
        return (
          <>
            <span className="picture-option-btn__label-first">{word[0]}</span>
            {word.slice(1)}
          </>
        );
      }

      return (
        <>
          {word.slice(0, idx)}
          <span className="picture-option-btn__label-first">{word[idx]}</span>
          {word.slice(idx + 1)}
        </>
      );
    }

    return (
      <>
        <span className="picture-option-btn__label-first">{word[0]}</span>
        {word.slice(1)}
      </>
    );
  }

  return (
    <div className={`picture-root ${isWrong ? "shake" : ""}`}>
      <div className="picture-card">
        <div className="picture-header">
          <button type="button" onClick={onHome} className="picture-home-btn">
            🏠 Home
          </button>

          <div className="picture-title-block">
            <div className="picture-title-en">Picture Match</div>
            <div className="picture-title-he">התאמת תמונה לצליל האות</div>
          </div>

          <div className="picture-score">
            Score <span className="picture-score__value">{score}</span>
          </div>
        </div>
        <div className="picture-instruction-en">
          Listen to the letter sound and choose the picture that starts with it.
        </div>
        <div className="picture-instruction-he">
          מקשיבים לצליל של האות, ובוחרים את התמונה שמתחילה באותו צליל.
        </div>
        <button
          onClick={onPlayLetterSound}
          className="picture-listen-letter-btn"
        >
          <span className="picture-listen-letter-btn__icon">▶</span>
          Listen to the sound
        </button>
        <div className="picture-options-grid">
          {round.options.map((opt, index) => {
            let borderClass = "";
            if (isCorrect && index === round.correctIndex) {
              borderClass = "picture-option-btn--correct";
            } else if (isWrong && index === round.correctIndex) {
              borderClass = "picture-option-btn--correct-hint";
            }

            if (!opt || !opt.text) {
              console.warn("Missing text on option:", opt);
              return null;
            }

            return (
              <button
                key={opt.text + index}
                type="button"
                onClick={() => {
                  if (!canProceed) {
                    onOptionClick(index);
                  }
                }}
                className={`picture-option-btn ${borderClass} ${
                  canProceed ? "picture-option-btn--disabled" : ""
                }`}
              >
                <img
                  src={opt.imageUrl}
                  alt={opt.text}
                  className="picture-option-btn__image"
                />
                <div className="picture-option-btn__label">
                  {renderOptionLabel(opt)}
                </div>
              </button>
            );
          })}
        </div>
        {canProceed && (
          <div className="picture-after-correct">
            <button
              type="button"
              onClick={handleListenWord}
              className="picture-listen-word-btn"
            >
              🔊 Listen to the word: {correctOption?.text}
            </button>

            {hasHeardWord && (
              <button
                type="button"
                onClick={onNext}
                className="picture-next-btn"
              >
                Next ➜
              </button>
            )}
          </div>
        )}
      </div>
      {showOverlay && (
        <>
          {isCorrect && <Confetti />}
          <div className="picture-overlay">
            <div className="picture-overlay__box">
              <div className="picture-overlay__emoji">
                {isCorrect ? "😊" : "❌"}
              </div>
              <div
                className={`picture-overlay__text ${
                  isCorrect
                    ? "picture-overlay__text--success"
                    : "picture-overlay__text--error"
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
    <div className="picture-confetti-layer">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="picture-confetti-piece"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${0.9 + Math.random()}s`,
            backgroundColor: `hsl(${Math.random() * 360}deg, 80%, 60%)`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default PictureGameScreen;
