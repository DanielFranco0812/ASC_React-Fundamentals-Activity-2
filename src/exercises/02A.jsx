import React, { useState } from "react";

// 02A: Greeting by name
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create a Greeting component that accepts a name prop. Render it from the exercise component with name="Ana".

function Greeting({ name }) {
  return <p>Hello, {name}!</p>;
}

export default function Exercise02A() {
  return (
    <main>
      <Greeting name="Ana" />
    </main>
  );
}
