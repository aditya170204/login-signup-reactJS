import axios from "axios";
import React, { useState } from "react";

const RegisterPage = () => {
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function handleRegister() {
    try {
      const { data } = await axios.post(
        "https://revo-reality-api.onrender.com/api/auth/register",
        values
      );
      alert("User registered successfully!");
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("An error occurred");
    }
  }

  return (
    <div>
      <div>
        <h2>Register Page</h2>
        <div>
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <p>Email</p>
          <input
            type="email"
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
          <button style={{ backgroundColor: "green" }} onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
