import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomeTestimonial.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function HomeTestimonial(props) {
  console.log(props);
  return (
    <div className="testimonial_box">
      <AliceCarousel responsive={"responsive"} animationType="fadeout">
        <div className="Home_testimonial">
          <h3>BASSAM HAMDAR</h3>
          <FaQuoteLeft className="quotation-left" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            perferendis doloremque culpa quas deserunt. Tempora maxime
            voluptates nisi harum aperiam nostrum in enim necessitatibus
            accusamus, dicta fugit ex. Maiores unde exercitationem nihil
            blanditiis a delectus nemo deleniti odio magnam suscipit
            dignissimos, assumenda qui at dolore, officia accusamus, perferendis
            sequi. Delectus!
          </p>
          <FaQuoteRight className="quotation-right" />
        </div>
        <div className="Home_testimonial">
          <h3>JOSEPH HARMANDRIAN</h3>
          <FaQuoteLeft className="quotation-left" />

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium aliquid ex numquam doloribus fugit sint? Molestiae
            nesciunt aliquid, ipsa ducimus sapiente quibusdam omnis temporibus
            vitae non. Tenetur dolore sed, nostrum deserunt a architecto non
            rerum quia sapiente porro neque iure!
          </p>
          <FaQuoteRight className="quotation-right" />
        </div>
      </AliceCarousel>
    </div>
  );
}
