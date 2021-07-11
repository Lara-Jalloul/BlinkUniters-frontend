import React from "react";
import Footer from "./HomeFooter/Footer";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeCards from "./HomeCards/HomeCards";
function Home() {
  return (
    <div>
      Home Page Slider Cards
      <HomeSlider />
      <HomeCards />
      <Footer />
    </div>
  );
}

export default Home;
