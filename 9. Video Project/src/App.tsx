import React from "react";

import preloader from "./assets/preloader.gif";
// import video from "./assets/video.mp4";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* preloader */}
      <div className="preloader">
        <img src={preloader} alt="preloader" className="preloader__item" />
      </div>
      {/* header  */}
      <header>
        <video
          src={video}
          width="600"
          height="300"
          controls
          muted
          autoPlay
          loop
          className="video-container"
        />
        {/* <video controls muted autoPlay loop className="video-container">
          <source src={video} type="video/mp4" />
        </video> */}
        <h1>video project</h1>
        {/* video switch  */}
        <button className="switch-btn">
          <span>play</span>
          <span>pause</span>
          <span className="switch"></span>
        </button>
      </header>
    </div>
  );
}

export default App;
