import React, { useState } from "react";

// 02C: Score badge
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Create ScoreBadge with student and points props. Render one badge for Ana with 18 points and another for Leo with 15 points. Change only the passed props to try new values.

function ScoreBadge({ student, points }) {
  return (
    <p>
      {student}: {points} points
    </p>
  );
}

export default function Exercise02C() {
  return (
    <main>
      <ScoreBadge student="Ana" points={18} />
      <ScoreBadge student="Leo" points={15} />
    </main>
  );
}
