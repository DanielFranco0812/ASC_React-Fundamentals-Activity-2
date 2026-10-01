import React, { useState } from "react";

// 06B: Book titles
// Read this exercise in the student handout, then replace the placeholder below.
// Task: Make an array of at least three book objects with unique id and title values. Display their titles in a list.

export default function Exercise06B() {
  const books = [
    {id: 1, title: "clean code"},
    {id: 2, title: "The pragmatic programmer"},
    {id: 3, title: "you don't know js"}
  ];
  
  
  return (
    <main>
      <ul>
        {books.map(book => 
        <li key={book.id}>{book.title}</li>


        )}
      </ul>
    </main>
  );
}
