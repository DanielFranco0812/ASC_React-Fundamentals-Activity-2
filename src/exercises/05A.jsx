import React, { useState } from "react";

// 05A: Room status
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Set const isOpen = true. Show “Room open” when true and “Room closed” when false. Try both values.

export default function Exercise05A() {
  const isOpen = true; 

  return (
    <main>
      <p>{isOpen ? "Room open" : "Room closed"}</p>
    </main>
  );
}