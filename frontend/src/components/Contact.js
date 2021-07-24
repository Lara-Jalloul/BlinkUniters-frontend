import React, {useState } from "react";
import "./Contact.css";
// let name = document.getElementById('name');
// let email = document.getElementById('email');
// let message = document.getElementById('message');

// function Contact() 

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Send");
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const emailData = {
      name,
      email,
      message,
    };
    console.log("submitted values", emailData);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  // const [data, setData] = useState([
  //   { location: "", phoneNumber: "", email: "" },
  // ]);
  // const [status, setStatus] = useState("Send");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   const { name, email, message } = e.target.elements;
  //   let details = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   };
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(details),
  //   });
  //   setStatus("Send");
  //   let result = await response.json();
  //   alert(result.status);
  // };

  // useEffect(() => {
  //   fetch("/contactus")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //     })
  //     .then((jsonRes) => setData(jsonRes));
  // }, []);

  return (
    <section id="contact">
      <h1 className="section-header">
        Got a question?<br></br> <br></br>We would love to hear from you. Send
        us a message and we will respond as soon as possible.
      </h1>
      <div className="contact-wrapper">
        {/* Left contact page */}
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          className="form-horizontal"
        >
          <div className="form-group">
            <div className="nametext">
              <label htmlfor="name">Full name</label>
              <br></br>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                // name="name"
                required
              />
            </div>
            <br></br>
          </div>
          <div className="form-group">
          <div className="nametext">
              <label htmlfor="email">Email address</label>
              <br></br>
              <input
                value={email}
                onChange={handleEmailChange}
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
          <div className="nametext">
          <textarea
            value={message}
            onChange={handleMessageChange}
            className="form-control"
            rows={5}
            placeholder="MESSAGE"
            name="message"
            required
            defaultValue={""}
          />
           </div>
          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <i className="fa fa-paper-plane" />
              <span className="send-text">{status}</span>
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
                src="data:image/png;base64,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"
                alt="facebook"
                className="contact_img"
              ></img>
            </a>
            <a href="https://github.com/Codi-B07">
              <img
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="github"
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
