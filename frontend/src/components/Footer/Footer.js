import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="Home-Footer">
      <a href="">
        <FaTwitter />
      </a>
      <a href="">
        <FaFacebook />
      </a>
      <a href="">
        <FaInstagram />
      </a>
    </div>
  );
}
