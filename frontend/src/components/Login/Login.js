import React, { useState } from "react";
import "./Login.css";
export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    const credentials = {
      email: input.email,
      password: input.password,
    };
    console.log("creden", credentials);
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
          <button onClick={handleClick} className="login_button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
