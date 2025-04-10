import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <a href="/">
            <img src={logo} alt="Logo" className="footer-logo" />
          </a>
          <p className="footer-subtext">In the spirit of "Ideas Worth Spreading", TED has created TEDx, which is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxJUET where x = independently organized TED event.</p>
        </div>
        <div className="footer-right">
        <ul className="footer-links">
            <li><a href="/about">About</a></li>
            <li><a href="/speakers">Speakers</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/event">Event</a></li>
            <li><a href="/contac-us">Contact</a></li>
        </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TEDxJUET. SOMEONE Advertising Agency</p>
      </div>
    </footer>
  );
};

export default Footer;
