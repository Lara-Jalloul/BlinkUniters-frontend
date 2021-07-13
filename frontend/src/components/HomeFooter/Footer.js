import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <hr className="Footer_hrLine" />
      <div className="Home_Footer">
        <fieldset className="footer_fieldset fieldset_ black_pink">
          <legend className="footer_legend legend_black_pink">
            Black Pink
          </legend>
          <div className="now_united_footer">
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
        </fieldset>
        <fieldset className="footer_fieldset fieldset_now_united">
          <legend className="footer_legend legend_now_united">
            Now United
          </legend>

          <div className="black_pink_footer">
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
        </fieldset>
      </div>
    </>
  );
}
