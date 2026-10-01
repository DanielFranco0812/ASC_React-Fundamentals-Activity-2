import React, { useState } from "react";

// 06C: Completed tasks
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create four task objects with id, label, and done values. Show only tasks where done is true. Also show how many completed tasks there are.

export default function CompletedTasks() {
  const tasks = [
    { id: 1, label: "Submit QA Report", done: false },
    { id: 2, label: "Design Wireframes", done: false },
    { id: 3, label: "Build React Components", done: false },
    { id: 4, label: "Fix Database Bug", done: false }
  ];

  const completed = tasks.filter(task => task.done);

  return (
    <main>
      
      <p>Completed Tasks: {completed.length}</p>

     
      <ul>
        {completed.map(task => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
    </main>
  );
}
