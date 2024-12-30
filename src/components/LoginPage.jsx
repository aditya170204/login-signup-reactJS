import axios from "axios";
import React, { useState } from "react";
import API from "../Api";

const LoginPage = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function handleLogin() {
    try {
      const response = await axios.post(`${API}auth/login`, values);
      const { data } = response;

      if (data?.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isloggedIn", true);
        location.href = "/dashboard";
      } else {
        alert("Invalid login response. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert(
        error?.response?.data?.message || "Login failed. Please try again."
      );
    }
  }
  function handleSignUp() {
    location.href = "/registeruser";
  }

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <p>Email</p>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <p>Password</p>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button style={{ backgroundColor: "blue" }} onClick={handleLogin}>
          Login
        </button>
        <br />
        <br />
        <button style={{ backgroundColor: "#3E7B27" }} onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
