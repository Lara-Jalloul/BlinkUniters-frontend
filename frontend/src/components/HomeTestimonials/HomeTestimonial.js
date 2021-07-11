import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomeTestimonial.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function HomeTestimonial(props) {
  return (
    <div className="testimonial_box">
      <AliceCarousel responsive={"responsive"} animationType="fadeout">
        <div className="Home_testimonial">
          <h3>{props[0].writer_name}</h3>
          <FaQuoteLeft className="quotation-left" />

          <p>{props[0].comment}</p>
          <FaQuoteRight className="quotation-right" />
        </div>
        <div className="Home_testimonial">
          <h3>{props[1].writer_name}</h3>
          <FaQuoteLeft className="quotation-left" />

          <p>{props[1].comment}</p>
          <FaQuoteRight className="quotation-right" />
        </div>
      </AliceCarousel>
    </div>
  );
}
