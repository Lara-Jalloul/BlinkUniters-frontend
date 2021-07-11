import React from "react";
import AliceCarousel from "react-alice-carousel";
import image1 from "./HomeImages/5.jpg";
import image2 from "./HomeImages/4.jpg";
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomeSlider.css";
export default function HomeSlider() {
  return (
    <div className="Slider">
      <AliceCarousel
        autoPlay="true"
        autoPlayStrategy="none"
        infinite="true"
        autoPlayInterval="2000"
        // animationType="fadeout"
        autoHeight="true"
        // paddingLeft="1"
      >
        <img src={image1} className="slider_img" alt="img" />
        <img src={image2} className="slider_img" alt="img" />
      </AliceCarousel>
    </div>
  );
}
