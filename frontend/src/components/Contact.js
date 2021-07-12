import React, { useEffect, useState } from "react";
import "./Contact.css";

function Contact() {
  const [data, setData] = useState([
    { location: "", phoneNumber: "", email: "" },
  ]);

  useEffect(() => {
    fetch("/contactus")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setData(jsonRes));
  }, []);

  return (
    <section id="contact">
      <h1 className="section-header">
        Got a question?<br></br> <br></br>We would love to hear from you. Send
        us a message and we will respond as soon as possible.
      </h1>
      <div className="contact-wrapper">
        {/* Left contact page */}
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlfor="name">Full name</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                required
              />
            </div>
            <br></br>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <label htmlfor="email">Email address</label>
              <br></br>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                required
              />
            </div>
            <br></br>
          </div>
          <textarea
            className="form-control"
            rows={5}
            placeholder="MESSAGE"
            name="message"
            required
            defaultValue={""}
          />
          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <i className="fa fa-paper-plane" />
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>

        {/* Left contact page */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Beirut, Lebanon</span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:+961 78 940 942" title="Give me a call">
                    +961 78 940 942
                  </a>
                </span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:info@codi.tech" title="Send us an email">
                    info@codi.tech
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <a href="https://www.instagram.com/codi_tech/?hl=en">
              <img
                src="https://png.pngtree.com/element_our/md/20180626/md_5b321ca3631b8.jpg"
                alt="instagram"
                className="contact_img"
              ></img>
            </a>
            <a href="https://www.facebook.com/coditechlb/">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/facebook-icon-white-logo-png-transparent.png"
                className="contact_img"
              ></img>
            </a>
            <a href="https://github.com/Codi-B07">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                className="contact_img"
              ></img>
            </a>
          </ul>
          <hr />
          <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
