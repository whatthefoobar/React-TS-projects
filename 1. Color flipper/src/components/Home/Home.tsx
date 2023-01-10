import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("#f1f5f8");
  const colors = [
    "green",
    "red",
    "rgba(133,122,200)",
    "#f15025",
    "yellow",
    "pink",
    "blue",
    "coral",
    "#333",
  ];

  const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length);
  };

  const randomColor = () => {
    console.log(color);
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    setColor(colors[randomNumber]);
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
        <button className="btn btn-hero" id="btn" onClick={randomColor}>
          click me
        </button>
      </div>
    </main>
  );
};

export default Home;
