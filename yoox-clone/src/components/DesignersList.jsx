import React from "react";

function DesignersList() {
  const designers = [
    "DOLCE&GABBANA", "MAISON MARGIELA", "MARNI", "VERSACE", "ALEXANDER MCQUEEN",
    "BALMAIN", "BALENCIAGA", "VALENTINO GARAVANI", "BRUNELLO CUCINELLI", "BOTTEGA VENETA"
  ];

  return (
    <div className="designers-list">
      <h3>DESIGNERS</h3>
      <ul>
        {designers.map((designer, index) => (
          <li key={index}>{designer}</li>
        ))}
      </ul>
      <button>VIEW ALL</button>
    </div>
  );
}

export default DesignersList;
