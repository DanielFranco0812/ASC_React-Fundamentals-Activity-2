import React, { useState } from "react";

// 06A: Names on the board
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make an array of three names and show them as list items using map().

export default function Exercise06A() {
 const names = ["Ana", "Leo", "Mina"];

  return (
    <main>
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
