import React, { useState } from "react";

// 03A: Attendance counter
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Use useState(0) for an attendance count. Show “Present: 0” when the page first loads.

export default function Exercise03A() {
  const [present, setPresent] = useState(0);

  return (
    <main>
      <p>Present: {present}</p>
    </main>
  );
}