import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">BlinkUniters</h3>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/testimonials" className="home">
          <li>Home</li>
        </Link>
        <Link to="/bands" className="bands">
          <li>Bands</li>
        </Link>
        <Link to="/news" className="news">
          <li>News</li>
        </Link>
        <Link to="/faq" className="faq">
          <li>FAQ</li>
        </Link>
        <Link to="/aboutus" className="about">
          <li>About Us</li>
        </Link>
        <Link to="/contactus" className="contact">
          <li>Contact Us</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
