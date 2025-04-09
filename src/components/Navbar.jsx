import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <a href="/" className="navbar__logo-link">
        <div className="navbar__logo"></div>
      </a>

      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className={`navbar__links ${isOpen ? "active" : ""}`}>
        <li><a href="/about">About</a></li>
        <li><a href="/features">Speakers</a></li>
        <li><a href="/pricing">Team</a></li>
        <li><a href="/about">Event</a></li>
        <li><a href="/about">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
