import React, { useEffect, useState } from "react";
import Footer from "./HomeFooter/Footer";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeCards from "./HomeCards/HomeCards";
import HomeTestimonial from "./HomeTestimonials/HomeTestimonial";
import "./Home.css";
function Home() {
  const [data, setData] = useState([{ writer_name: "", Comment: "" }]);

  useEffect(() => {
    fetch("/")
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        }
      })
      .then((jsonRes) => {
        setData(jsonRes);
      });
  }, []);

  return (
    <div className="Home_page ">
      <HomeSlider />
      <HomeCards />
      <HomeTestimonial />
      <Footer />
    </div>
  );
}

export default Home;
