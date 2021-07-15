import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Admin() {
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
    <div>
      <h1>admin page</h1>
      <button onClick={handleLogout}>log out</button>
    </div>
  );
}
