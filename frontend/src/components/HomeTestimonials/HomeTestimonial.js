import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomeTestimonial.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function HomeTestimonial() {
  return (
    <>
      <div className="testimonial_box">
        <AliceCarousel
          responsive={"responsive"}
          // autoPlay="true"
          // autoPlayStrategy="none"
          // infinite="true"
          // autoPlayInterval="2000"
          animationType="fadeout"
          // autoHeight="true"
          // paddingLeft="1"
        >
          <div className="Home_testimonial">
            <h3>bassam</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias,
              reiciendis.
            </p>
          </div>
          <div className="Home_testimonial">
            <h3>bassam</h3>
            <FaQuoteLeft className="quotation-left" />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              hic autem aspernatur distinctio corrupti ipsa odio repellendus
              tempora iusto libero, aut dolor molestiae quos quaerat asperiores
              dolorum dolorem. Reprehenderit distinctio libero eaque mollitia
              neque modi rerum, similique placeat ea earum, alias totam! Quos
              laudantium, commodi voluptatibus recusandae consequatur quidem
              nostrum.
            </p>
            <FaQuoteRight className="quotation-right" />
          </div>
        </AliceCarousel>
      </div>
      <br />
    </>
  );
}
