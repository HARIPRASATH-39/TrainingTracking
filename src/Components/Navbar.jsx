import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>Training Tracking</h3>
      <ul className="nav-links">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/login"> LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
