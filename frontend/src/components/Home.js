import React from "react";
import Footer from "./HomeFooter/Footer";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeCards from "./HomeCards/HomeCards";
import HomeTestimonial from "./HomeTestimonials/HomeTestimonial";
function Home() {
  return (
    <div>
      Home Page Slider Cards
      <HomeSlider />
      <HomeCards />
      <HomeTestimonial />
      <Footer />
    </div>
  );
}

export default Home;
