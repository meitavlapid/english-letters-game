import "./HomeScreen.css";

function HomeScreen({ unit, onUnitChange, onStart, mode, onModeChange }) {
  return (
    <div className="home-root">
      <div className="home-card">
        <div className="home-badge">Early English</div>

        <h1 className="home-title">Letter&nbsp;Sound&nbsp;Game</h1>

        <p className="home-description">
          במשחק הזה הילדים מקשיבים לצליל של <strong>אות אחת</strong> ובוחרים את
          האות הנכונה או את <strong>התמונה</strong> שמתחילה באותה אות. זה מתאים
          למפגשים ראשונים לגמרי עם אנגלית.
        </p>

        <div className="home-mode-box">
          <div className="home-label-he">בחר/י מצב משחק:</div>
          <div className="home-mode-options">
            {[
              { id: "letter", label: "🎧 בחר/י את האות" },
              { id: "picture", label: "🖼️ בחר/י את התמונה" },
            ].map((opt) => {
              const isActive = mode === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onModeChange(opt.id)}
                  className={
                    "home-chip-btn " + (isActive ? "home-chip-btn--active" : "")
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="home-unit-box">
          <div className="home-label-he">בחר/י טווח אותיות לשיעור:</div>

          <div className="home-unit-options">
            {["A-F", "G-L", "M-R", "S-Z", "X"].map((range) => {
              const isActive = unit === range;
              return (
                <button
                  key={range}
                  type="button"
                  onClick={() => onUnitChange(range)}
                  className={
                    "home-chip-btn home-chip-btn--range " +
                    (isActive ? "home-chip-btn--active" : "")
                  }
                >
                  {range}
                </button>
              );
            })}
          </div>
        </div>

        <div className="home-tip-box">
          טיפ : אפשר לעצור אחרי כל סיבוב, לשאול יחד{" "}
          <span className="home-tip-italic">
            “What words do we know with this letter?”
          </span>{" "}
          ולחבר לעולם של הילדים.
        </div>

        <button type="button" onClick={onStart} className="home-start-btn">
          ▶ Start
        </button>

        <div className="home-footer-note">
          אפשר תמיד לחזור למסך הזה ולפתוח "שיעור" חדש.
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
