import React, { useState, useEffect } from "react";
import Line from "./components/Line"
import "./styles/App.css";
import Keyboard from "./components/Keyboard";
import PuzzleStore from "./store/PuzzleStore";

function App() {
  const [, setRefresh] = useState(0);
  useEffect(() => {
    PuzzleStore.init();

    const handleKeyUp = (e) => {
      PuzzleStore.handleKeyUp(e);
      setRefresh(r => r + 1);
    };
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    }
  }, []);
  return (
    <div className="Main">
      <h1 className="Header">Wordle Game</h1>
      {new Array(6).fill(0).map((_, index) => (
        <Line
          key={index}
          word={PuzzleStore.word}
          guess={PuzzleStore.guesses[index]}
          isGuessed={index < PuzzleStore.currentGuess}
        />
      ))}
      {PuzzleStore.Won && (
        <div className="Message">
          <h2>Congratulations! You won!</h2>
        </div>
      )}
      {PuzzleStore.Lose && (
        <div className="Message">
          <h2>Game Over! The word was: {PuzzleStore.word}</h2>
        </div>
      )}
      {PuzzleStore.Won || PuzzleStore.Lose ? (
        <button className="ResetButton" onClick={() => {
          PuzzleStore.init();
          setRefresh(r => r + 1);
        }}>
          Play Again
        </button>
      ) : null}
      <Keyboard />
      word: {PuzzleStore.word}
    </div>

  );
}

export default App;
