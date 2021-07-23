import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./News.css";

function News() {
  return (
    <>
      <div className="News_page">
        <div className="container">
          <h1 className="heading-1">Now United</h1>
          <div className="Slide">
            <AliceCarousel
              autoPlay="true"
              autoPlayStrategy="none"
              infinite="true"
              autoPlayInterval="3000"
              autoHeight="true"
            >
              <img
                src="https://festivalteen.com.br/wp-content/uploads/2019/09/now-united-turne-brasil-e1569264544589.jpg"
                className="slider_photo"
                alt="img"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Now_United_%D0%BD%D0%B0_%D1%84%D0%B8%D0%BD%D0%B0%D0%BB%D0%B5_%D0%93%D0%BE%D0%BB%D0%BE%D1%81._%D0%94%D0%B5%D1%82%D0%B8_5.jpg"
                className="slider_photo"
                alt="img"
              />
              <img
                src="https://i.ytimg.com/vi/mvL259MrQoY/maxresdefault.jpg"
                className="slider_photo"
                alt="img"
              />
            </AliceCarousel>
          </div>
          <div className="sub-heading">
            <p className="importent"></p>
          </div>
          <div className="main">
            <div className="home">
              <div className="left">
                <h2 className="heading-2">Latest News</h2>
              </div>
              <div className="right">
                <div className="lists">
                  <div className="list">
                    <a href=" ">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzEIqXwpqoqicBoEmylR1Ot0W7He2CfMNaw&usqp=CAU"
                        alt="photo 1"
                      />
                    </a>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                  <div className="list">
                    <a href=" ">
                      <img
                        src="https://static.billboard.com/files/media/2019-PEPSI-FTLOI-NOW-UNITED-bb-1548-compressed.jpg"
                        alt="photo 2"
                      />
                    </a>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                  <div className="list">
                    <a href=" ">
                      <img
                        src="https://asdafnews.com/wp-content/uploads/2020/12/Now-United-Band-1-780x470.jpg"
                        alt="photo 3"
                      />
                    </a>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                  <div className="list">
                    <a href=" ">
                      <img
                        src="https://imagevars.gulfnews.com/2019/11/27/Now-United_16eab7342ec_large.jpg"
                        alt="photo 4"
                      />
                    </a>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <br></br>
            <br></br>
          </div>
        </div>

        <div className="container">
          <h1 className="heading-1">Black Pink</h1>
          <div className="Slide">
            <AliceCarousel
              autoPlay="true"
              autoPlayStrategy="none"
              infinite="true"
              autoPlayInterval="2000"
              autoHeight="true"
            >
              <img
                src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/BPTHESHOW_2ND_F_HORI.jpg"
                className="slider_photo"
                alt="img"
              />
              <img
                src="https://static.billboard.com/files/2020/09/01-Blackpink-press-cr-YG-Entertainment-2020-billboard-1548-1599834837-1024x677.jpg"
                className="slider_photo"
                alt="img"
              />
              <img
                src="https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/people/blackpink-la-pop-coreenne-a-l-assaut-du-monde-1696593/27659153-1-fre-FR/Blackpink-la-pop-coreenne-a-l-assaut-du-monde.jpg"
                className="slider_photo"
                alt="img"
              />
            </AliceCarousel>
          </div>
          <div className="sub-heading">
            <p className="importent"></p>
          </div>
          <div className="main">
            <div className="home">
              <div className="left">
                <h2 className="heading-2">Latest News</h2>
              </div>
              <div className="right">
                <div className="lists">
                  <div className="list">
                    <img
                      src="https://cdn.vox-cdn.com/thumbor/tGtV0V7TdG_YhIYryArZBpHrhA0=/0x0:1020x471/1200x800/filters:focal(429x155:591x317)/cdn.vox-cdn.com/uploads/chorus_image/image/67461649/Screen_Shot_2020_09_23_at_5.19.10_PM.0.png"
                      alt="photo 1"
                    />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                  <div className="list">
                    <img
                      src="https://dailytargum.imgix.net/images/ca4e4458-fb5f-4e3d-b231-fe5bf5f06273.jpg"
                      alt="photo 2"
                    />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                  <div className="list">
                    <img
                      src="https://d15kbsmiqz0zlr.cloudfront.net/wp-content/uploads/2020/08/becoming-blackpink-featured-scaled.jpg"
                      alt="photo 3"
                    />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                  <div className="list">
                    <img
                      src="https://www.udiscovermusic.com/wp-content/uploads/2020/09/BLACKPINK-Getty-Images-1142488730-copy.jpg"
                      alt="photo 4"
                    />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Odio, veritatis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
