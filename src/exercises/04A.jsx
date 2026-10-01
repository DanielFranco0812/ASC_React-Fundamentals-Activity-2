import React, { useState } from "react";

// 04A: Thank you button
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Display a button labeled “Say thanks”. When clicked, show “Thank you!” on the page.

export default function Exercise04A() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Thank you!");
  };

  return (
    <main>
      <button onClick={handleClick}>Say thanks</button>
      {message && <p>{message}</p>}
    </main>
  );
}
