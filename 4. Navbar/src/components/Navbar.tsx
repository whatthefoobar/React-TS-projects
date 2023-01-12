import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        {/* nav header  */}
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* links */}
        <ul className="links">
          <li>
            <Link to="/">home</Link>
            {/* <a href="index.html">home</a> */}
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/services">services</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        {/* social media  */}
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-sketch"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
