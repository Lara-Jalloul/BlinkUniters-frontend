import React, { useEffect, useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [data, setData] = useState([{ question: "", answer: "" }]);

  useEffect(() => {
    fetch("/faq")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setData(jsonRes));
  }, []);

  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">{data.question}</h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">{data.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;
