import React, { useState } from "react";

// 02B: Two student cards
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create StudentCard with name and course props. Render two cards with different names and courses.

function StudentCard({ name, course }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Course: {course}</p>
      <hr />
    </div>
  );
}

export default function Exercise02B() {
  return (
    <main>
      <StudentCard name="Ana" course="IT" />
      <StudentCard name="Leo" course="CS" />
    </main>
  );
}
