import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./HomeTestimonial.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function HomeTestimonial() {
  const [data, setData] = useState([{ writer_name: "", Comment: "" }]);

  useEffect(() => {
    fetch("/testimonials")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        console.log("json", jsonRes);
        setData(jsonRes);
      });
  }, []);

  return (
    <>
      <div className="testimonial_box">
        <AliceCarousel responsive={"responsive"} animationType="fadeout">
          {data.map((data, index) => (
            <div className="Home_testimonial" key={index}>
              <h3>{data.writer_name}</h3>
              <FaQuoteLeft className="quotation-left" />
              <p>{data.comment}</p>
              <FaQuoteRight className="quotation-right" />
            </div>
          ))}
        </AliceCarousel>
      </div>
      ;
    </>
  );
}
