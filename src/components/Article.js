import React from 'react';

function Article({ title, date, preview, minutesToRead }) {
    const formattedDate = date || "January 1, 1970"
  const renderMinutesToRead = () => {
    let emojis = "";
    if (minutesToRead < 30) {
      const coffeeCups = Math.ceil(minutesToRead / 5);
      emojis = "☕️".repeat(coffeeCups);
    } else {
      const bentoBoxes = Math.ceil(minutesToRead / 10);
      emojis = "🍱".repeat(bentoBoxes);
    }
    return emojis;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <span>{renderMinutesToRead()} {minutesToRead} min read</span>
    </article>
  );
}

export default Article;
