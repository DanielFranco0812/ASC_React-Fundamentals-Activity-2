import React, { useState } from "react";

// 03C: Score with a limit
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a score that starts at 0. Each click adds 5, but the score must never go above 20. Add a reset button.

export default function Exercise03C() {
  const [score, setScore] = useState(0);

  const handleAdd = () => {
    setScore(previous => Math.min(previous + 5, 20));
  };

  const handleReset = () => {
    setScore(0);
  };

  return (
    <main>
      <p>Score: {score}</p>
      <button onClick={handleAdd}>Add 5</button>
      <button onClick={handleReset}>Reset</button>
    </main>
  );
}
