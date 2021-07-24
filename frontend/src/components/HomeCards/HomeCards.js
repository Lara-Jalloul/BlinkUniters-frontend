import React from "react";
import image1 from "./images/Now_United.jpg";
import image2 from "./images/Black_Pink.jpg";
import "./HomeCards.css";
import { Link } from "react-router-dom";

export default function HomeCards() {
  return (
    <div className="Home_Cards">
      <div className="Now_United">
        <a href="/bands#nowUnited">
          <img src={image1} className="card_img" alt="img" />
        </a>
        <h2 className="band_name">NOW UNITED</h2>
      </div>
      <div className="Black_Pink">
        <a href="/bands#blackPink">
          <img src={image2} className="card_img" alt="img" />
        </a>
        <h2 className="band_name">BLACK PINK</h2>
      </div>
    </div>
  );
}
