import React, { useState, useEffect } from "react";
import Line from "./components/Line"
import "./styles/App.css";
import Keyboard from "./components/Keyboard";
import PuzzleStore from "./store/PuzzleStore";

function App() {
  useEffect(() => {
    PuzzleStore.init();
  }, []);
  return (
    <div className="Main">
      <h1 className="Header">Wordle Game</h1>
      {new Array(6).fill(0).map((_, index) => (
        <Line key={index} word={"tests"} guess={"tests"} isGuessed={true} />
      ))}
      <h1>Won/Lost</h1>
      <Keyboard />
      word: {PuzzleStore.word}
    </div>

  );
}

export default App;
