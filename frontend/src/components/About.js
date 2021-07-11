import React, { useEffect, useState } from "react";
import "./About.css";
import icon from "./images/icon.jpg";


function About() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/aboutus")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {

        console.log(jsonRes);
        setDatas(jsonRes);
      });
  }, []);

  return (
    <>
      <div id="aboutImg" className="divHeadline">
        <h1 className="headline1">ABOUT US</h1>
      </div>

      <div id="about">
        <p className="text"> 

        {datas[datas.length-1] && datas[datas.length-1].content}

        {/* We are the "LRB team". This website helps the two bands "Now United" &
          "Black Pink" improve their online presence. It keepstheir fans up to
          date with new information. By posting their most recent news, bands
          can become more engaged with their fans. Furthermore, by using this
          website, you can view the most popular songs of the bands and their
          upcoming events. */}
          </p>

        <div className="row">
          <div className="col-md-4">
            <div className="box">
              {datas &&
              
                datas.map((data, index) => (
                  <div key={index}>
                    <div className="our-services lara">
                      <div className="icon">
                        {" "}
                        <img src={icon} alt="larapic" />{" "}
                      </div>
                      <h4>{data.details[0].name}</h4>
                      <p>{data.details[0].picture_content}</p>
                    </div>
                  </div>
                ))}
            </div>

            {/* <div className="col-md-4">
                <div className="box">
                  <div className="our-services rania">
                    <div className="icon">
                      {" "}
                      <img
                        src="https://cdn3.vectorstock.com/i/thumb-large/60/82/user-icon-white-silhouette-on-blue-round-vector-20326082.jpgg"
                        alt="raniapic"
                      />{" "}
                    </div>
                    <h4>Rania</h4>
                    <p>
                      Hello, my name is Rania. I'm a full-stack web developer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="our-services bassam">
                    <div className="icon">
                      {" "}
                      <img
                        src="https://cdn3.vectorstock.com/i/thumb-large/60/82/user-icon-white-silhouette-on-blue-round-vector-20326082.jpg"
                        alt="bassampic"
                      />{" "}
                    </div>
                    <h4>Bassam</h4>
                    <p>
                      Hello, my name is Bassam. I'm a full-stack web developer.{" "}
                    </p>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default About;
