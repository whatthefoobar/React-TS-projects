import { useState } from "react";

const Hex = () => {
  const [color, setColor] = useState("#f1f5f8");
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };

  const randomHexColor = () => {
    console.log(color);
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[getRandomNumber()];
    }

    setColor(hexColor);
  };
  return (
    <main
      style={{
        backgroundColor: color,
      }}
    >
      <div className="container">
        <h2>
          background color : <span className="color">{color}</span>
        </h2>
        <button className="btn btn-hero" id="btn" onClick={randomHexColor}>
          click me
        </button>
      </div>
    </main>
  );
};

export default Hex;
