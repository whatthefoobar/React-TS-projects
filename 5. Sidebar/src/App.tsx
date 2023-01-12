import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";

import Sidebar from "./components/Sidebar";

function App() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const showSidebar = () => {
    console.log("show sidebar");
    setIsClicked(true);
  };

  const closeSidebar = () => {
    console.log("close sidebar");
    setIsClicked(false);
  };

  return (
    <div className="App">
      <Router>
        <button className="sidebar-toggle" onClick={showSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <Sidebar isClicked={isClicked} closeSidebar={closeSidebar} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
