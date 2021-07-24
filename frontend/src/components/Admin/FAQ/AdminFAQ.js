import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import "./AdminFAQ.css";
import AdminDelFAQ from "./AdminDelFAQ";
export default function AdminFAQ() {
  const [message, setMessage] = useState();
  const [input, setInput] = useState({
    question: "",
    answer: "",
  });
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const FAQ = {
      question: input.question,
      answer: input.answer,
    };
    try {
      await axios.post("/admin/addFAQ", FAQ, config).then((res) => {
        console.log("res", res);

        if (res) {
          setMessage("Question & answer has been added");
          setTimeout(() => {
            setMessage("");
          }, 5000);
        }
      });
    } catch (error) {
      console.log("error: ", error);
      if (error.response) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 10000);
      }
    }
  };

  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
  }, [history]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <>
      <div className="Admin-FAQ">
        <h1>admin FAQ </h1>
        <button onClick={handleLogout}>log out</button>

        <form className="FAQ-form">
          <textarea
            onChange={handleChange}
            type="text"
            name="question"
            className="FAQ-question"
            value={input.question}
          ></textarea>
          <textarea
            onChange={handleChange}
            name="answer"
            className="FAQ-answer"
            value={input.answer}
          ></textarea>
          <button type="submit" onClick={handleClick}>
            Add
          </button>
        </form>
        <div className="errorAndMessage">
          {error && <span style={{ color: "red" }}>{error}</span>}
          {message && <span style={{ color: "red" }}>{message}</span>}
        </div>
      </div>
      <AdminDelFAQ />
    </>
  );
}
