import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
