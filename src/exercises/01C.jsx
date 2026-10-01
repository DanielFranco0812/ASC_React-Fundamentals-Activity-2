import React, { useState } from "react";

// 01C: Simple profile
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Declare const studentName = "Mina" and const course = "IT" inside the component. Display both values in JSX. Change studentName and confirm the screen changes.

export default function Exercise01C() {
  const studentName = "Mina"; 
  const course = "IT";

  return (
    <main>
      <h1>Student Profile</h1>
      
      <p>Name: {studentName}</p>
      <p>Course: {course}</p>
    </main>
  );
}
