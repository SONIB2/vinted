import React from "react";

function Section({ title, description, buttonText, imageUrl }) {
  return (
    <div className="section">
      <img src={imageUrl} alt={title} />
      <div className="section-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
}

export default Section;
