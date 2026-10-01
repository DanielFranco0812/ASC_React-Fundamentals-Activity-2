import React, { useState } from "react";

// 07B: Name form
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a form with a name input and Submit button. When submitted, show “Please enter a name.” if it is empty or only spaces. Otherwise show “Saved: [name]”.

export default function NameForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setMessage("Please enter a name.");
    } else {
      setMessage(`Saved: ${name.trim()}`);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}