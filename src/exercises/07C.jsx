import React, { useState } from "react";

// 07C: Event sign up
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make a simple sign-up form with a name and a number of seats. Require a nonempty name and 1 to 4 seats. Show a helpful error or “Registered: [name] for [seats] seat(s).”

export default function EventSignUp() {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const seatCount = Number(seats);

    if (name.trim() === "") {
      setMessage("Please enter a valid name.");
    } else if (isNaN(seatCount) || seatCount < 1 || seatCount > 4) {
      setMessage("Please enter a number of seats between 1 and 4.");
    } else {
      setMessage(`Registered: ${name.trim()} for ${seatCount} seat(s).`);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>
            Seats (1-4):{" "}
            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Sign Up
        </button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}