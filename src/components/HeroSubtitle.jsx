import React, { useState, useEffect } from "react";
import "../App.css";

const HeroSubtitle = () => {
  const fullText =
    "Join x inspiring speakers and over a hundred guests — including innovators, entrepreneurs, and thought leaders from India — for a day of ideas worth spreading.";

  const words = fullText.split(" ");
  const [displayedWords, setDisplayedWords] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedWords((prev) => [...prev, words[index]]);
      index++;

      if (index === words.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-subtitle">
      {displayedWords.map((word, i) => (
        <span
          key={i}
          className="fade-word"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {word}&nbsp;
        </span>
      ))}
    </div>
  );
};

export default HeroSubtitle;
