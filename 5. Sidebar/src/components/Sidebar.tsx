import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

interface IProps {
  isClicked: boolean;
  closeSidebar: () => void;
}

const Sidebar = ({ isClicked, closeSidebar }: IProps) => {
  const sidebarClass = isClicked === false ? "sidebar" : "sidebar show-sidebar";
  return (
    <aside className={sidebarClass}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="" />
        <button className="close-btn" onClick={closeSidebar}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      {/* links  */}
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
    </aside>
  );
};

export default Sidebar;
