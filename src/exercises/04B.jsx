import React, { useState } from "react";

// 04B: Choose a greeting
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Show “Morning” and “Evening” buttons. Clicking either button changes a line of text to “Good morning!” or “Good evening!”.

export default function Exercise04B() {
  const [greeting, setGreeting] = useState("");

  return (
    <main>
      <button onClick={() => setGreeting("Good morning!")}>Morning</button>
      <button onClick={() => setGreeting("Good evening!")}>Evening</button>
      {greeting && <p>{greeting}</p>}
    </main>
  );
}