import React, { useEffect, useState } from "react";
import Footer from "./HomeFooter/Footer";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeCards from "./HomeCards/HomeCards";
import HomeTestimonial from "./HomeTestimonials/HomeTestimonial";
function Home() {
  const [data, setData] = useState([{ writer_name: "", Comment: "" }]);

  useEffect(() => {
    fetch("/testimonials")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        setData(jsonRes);
      });
  }, []);

  return (
    <div>
      <HomeSlider />
      <HomeCards />
      <HomeTestimonial {...data} />
      <Footer />
    </div>
  );
}

export default Home;
