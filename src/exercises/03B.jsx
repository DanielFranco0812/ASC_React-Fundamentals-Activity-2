import React, { useState } from "react";

// 03B: Counter and reset
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Add one button that increases the attendance number by one and another that resets it to zero.

export default function Exercise03B() {
  const [present, setPresent] = useState(0);

  const handleAdd = () => {
    setPresent(previous => previous + 1);
  };

  const handleReset = () => {
    setPresent(0);
  };

  return (
    <main>
      <p>Present: {present}</p>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset}>Reset</button>
    </main>
  );
}
