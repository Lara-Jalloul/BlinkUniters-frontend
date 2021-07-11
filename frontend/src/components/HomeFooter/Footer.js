import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <hr className="Footer_hrLine" />
      <div className="Home_Footer">
        <a href="https://www.instagram.com/">
          <FaInstagram className="React_Icon" />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook className="React_Icon" />
        </a>
        <a href="https://www.twitter.com/">
          <FaTwitter className="React_Icon" />
        </a>
      </div>
    </>
  );
}
