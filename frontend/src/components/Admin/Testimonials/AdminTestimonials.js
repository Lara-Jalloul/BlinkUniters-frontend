import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./AdminTestimonials.css";
import axios from "axios";
import TestimonialsTable from "./TestimonialsTable";

export default function AdminTestimonials() {
  const [message, setMessage] = useState();
  const [input, setInput] = useState({
    writer_name: "",
    Comment: "",
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
    const testimonials = {
      writer_name: input.writer_name,
      comment: input.comment,
    };
    try {
      await axios
        .post("/admin/addTestimonials", testimonials, config)
        .then((res) => {
          console.log("res", res);

          if (res) {
            setMessage("testimonial has been added");
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
    <div className="Admin-testimonials">
      <h1>admin Testimonials </h1>
      <button onClick={handleLogout}>log out</button>
      <form className="testimonials-form">
        <input
          onChange={handleChange}
          type="text"
          name="writer_name"
          className="testimonial-writer"
          value={input.writer_name}
        />
        <textarea
          onChange={handleChange}
          name="comment"
          className="testimonials-textarea"
          value={input.comment}
        ></textarea>
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
      <div className="errorAndMessage">
        {error && <span style={{ color: "red" }}>{error}</span>}
        {message && <span style={{ color: "red" }}>{message}</span>}
      </div>
      <TestimonialsTable data={input.writer_name} />
    </div>
  );
}
