import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  let history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/admin");
    }
  }, [history]);
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
    const credentials = {
      email: input.email,
      password: input.password,
    };
    try {
      await axios.post("/login", credentials, config).then((response) => {
        console.log(response.data.token);
        const { token } = response.data.token;
        localStorage.setItem("token", token);
      });
      history.push("/admin");
    } catch (error) {
      console.log("error", error);
      if (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 10000);
      }
    }
  };
  return (
    <div className="login">
      <div className="greeting">
        <h2>Hello Admin</h2>
        <h3>please login</h3>
      </div>
      <div className="main_input">
        <form action="" className="input">
          <label htmlFor="email" className="label_login">
            Admin Email:
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="name"
            placeholder="Enter email"
            value={input.email}
          />
          <label htmlFor="password" className="label_login">
            Password:
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            className="pass"
            placeholder="Enter password"
            value={input.password}
          />
          <button onClick={handleClick} type="submit" className="login_button">
            Login
          </button>
        </form>
        {error && (
          <span className="error" style={{ color: "red" }}>
            {error}
          </span>
        )}
      </div>
    </div>
  );
}
