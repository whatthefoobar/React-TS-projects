import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Hex from "./components/Hex/Hex";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/hex" element={<Hex />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
