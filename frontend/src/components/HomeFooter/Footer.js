import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="Home_Footer">
      <a href="https://www.instagram.com/">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/">
        <FaFacebook />
      </a>
      <a href="https://www.twitter.com/">
        <FaTwitter />
      </a>
    </div>
  );
}
