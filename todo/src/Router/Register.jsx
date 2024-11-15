// Registration.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    Navigate("/");
  };
  return (
    <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
