import React, { useState } from "react";

// 04C: Cheer counter
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Show a button labeled “Cheer”. Each click increases a count. When the count reaches three, also show “Great support!”.

export default function Exercise04C() {
  const [count, setCount] = useState(0);

  const handleCheer = () => {
    setCount(previous => previous + 1);
  };

  return (
    <main>
      <p>Cheer Count: {count}</p>
      <button onClick={handleCheer}>Cheer</button>
      {count >= 3 && <p>Great support!</p>}
    </main>
  );
}
