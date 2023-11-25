// Navbar.js

import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router

import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="path/to/logo.png" alt="Logo" className="logo-img" />
          GwAO
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/About" className="nav-link">
            About
          </Link>
          <Link to="/Blog" className="nav-link">
            Blog
          </Link>
          <Link to="/Post" className="nav-link">
            Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
