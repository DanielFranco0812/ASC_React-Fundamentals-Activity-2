import React, { useState } from "react";

// 07A: Live name greeting
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create an input labeled “Your name”. As the user types, display “Hello, [name]!” below it.

export default function LiveGreeting() {
  const [name, setName] = useState("");

  return (
    <main>
      <label>
        Your name:{" "}
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      
      {name && <p>Hello, {name}!</p>}
    </main>
  );
}
