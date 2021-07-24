import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Bands.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Bands() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("/bands")
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
      <div className="container">
        <div className="title_wrapper">
          <div className="reactLogo">
            <img src="assets/now.jpg" alt="" />
          </div>
        </div>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="assets/diarra.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/lamar.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/sabina.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/shivani.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/sofya.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/any.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/noah.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/krystian.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/bailey.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/hina.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/heyoon.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/sina.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/joalin.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/josh.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/savannah.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/nour.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/melanie.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/alex.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="slides">
        <div className="slides__container">
          <div className="slide" id="nowUnited">
            <h2>Brief Overview</h2>

            <p>
              {/* {datas[datas.length - 1] && datas[datas.length - 1].info} */}
              Now United (sometimes abbreviated as NU) is an international teen
              pop music group formed in Los Angeles, California in August 2017
              by Idols creator Simon Fuller. The group was officially launched
              in mid-2018. Originally the group consisted of 14 members from 14
              different countries. Now the group consists of 18 members, each
              representing a different country and nationality from around the
              world.
            </p>
          </div>
        </div>
      </div>

      <div className="popular-songs">
        <h1 className="popular">The Most Popular Songs</h1>
        <div className="video-container">
          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/Q6-tYpWp0Ck"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/n_EVldaWng0"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />

          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/O7wEsZpyrCQ"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/fTbYpSIF22s"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
        </div>
      </div>

      <div className="container">
        <div className="title_wrapper">
          <div className="reactLogo">
            <img src="assets/blackpink.jpg" alt="" />
          </div>
        </div>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="assets/Jennie.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/Jisoo.jpeg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/Roseanne.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/Lalisa.jpeg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="slides">
        <div className="slides__container">
          <div className="slide" id="blackPink">
            <h2>Brief Overview</h2>

            <p>
              Blackpink is a South Korean girl group formed by YG Entertainment,
              consisting of members Jisoo, Jennies, Rosé, and Lisa. The group
              debuted in August 2016 with their single album Square One, which
              featured "Whistle" and "Boombayah". "The meaning of BLACKPINK aims
              to contradict the common perception of the color pink," the
              statement read. "Pink is commonly used to portray prettiness, but
              BLACKPINK actually means to say that 'Pretty isn’t everything.' It
              also symbolizes that they are a team that encompasses not only
              beauty, but also great talent."
            </p>
          </div>
        </div>
      </div>

      <div className="popular-songs">
        <h1 className="popular">The Most Popular Songs</h1>
        <div className="video-container">
          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/ioNng23DkIM"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/2S24-y0Ij3Y"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />

          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/Amq-qlqbjYA"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
          <ReactPlayer
            className="react-player"
            width="300px"
            height="240px"
            controls
            url="https://youtu.be/dyRsYk0LyA8"
            controls
            onReady={() => console.log("onReady callback")}
            onStart={() => console.log("onStart callback")}
            onPause={() => console.log("onPause callback")}
            onEnded={() => console.log("onEnded callback")}
            onError={() => console.log("onError callback")}
          />
        </div>
      </div>
    </>
  );
}
