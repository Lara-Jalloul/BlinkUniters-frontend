import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [data, setData] = useState([
    { content: "", name: "", image_path: "", picture: "" },
  ]);

  useEffect(() => {
    fetch("/aboutus")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setData(jsonRes));
  }, []);

  return (
    <>
      <div class="about-section">
        <div class="inner-container">
          <h1>About Us</h1>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            velit ducimus, enim inventore earum, eligendi nostrum pariatur
            necessitatibus eius dicta a voluptates sit deleniti autem error eos
            totam nisi neque voluptates sit deleniti autem error eos totam nisi
            neque. batata
          </p>
          <div class="skills">
            <span>Lara</span>
            <span>Rania</span>
            <span>Bassam</span>
          </div>
        </div>
      </div>
      {/* {data.map((data,index) => {
      
    })} */}
    </>
  );
}

export default About;
