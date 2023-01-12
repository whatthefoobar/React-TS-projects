import { useState } from "react";
import "./App.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  let modalClass =
    isClicked === false ? "modal-overlay" : "modal-overlay open-modal";

  const openModal = () => {
    console.log("open modal");
    setIsClicked(true);
  };

  const closeModal = () => {
    console.log("close modal");
    setIsClicked(false);
  };

  return (
    <div className="App">
      {/* hero  */}
      <header className="hero">
        <div className="banner">
          <h1>modal project</h1>
          <button className="btn modal-btn" onClick={openModal}>
            open modal
          </button>
        </div>
      </header>
      {/* modal  */}
      <div className={modalClass}>
        <div className="modal-container">
          <h3>modal content</h3>
          <button className="close-btn" onClick={closeModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
