import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h4>color flipper</h4>
        <ul className="nav-links">
          <li>
            <Link to="/">Simple</Link>
            {/* <a href="index.html">simple</a> */}
          </li>
          <li>
            <Link to="/hex">Hex</Link>
            {/* <a href="hex.html">hex</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
