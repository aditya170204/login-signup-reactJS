import axios from "axios";
import React, { useState } from "react";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState({ email: "", password: "" });

  // const changeMail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const changePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  async function handleLogin() {
    try {
      const { data } = await axios.post(
        "https://revo-reality-api.onrender.com/api/auth/login",
        values
      );

      console.log(data);
    } catch (error) {
      console.log(error);

      alert(error?.response?.data?.message);
    }
  }

  return (
    <div>
      <div>
        <h2>Login page</h2>
        <div>
          <p>email</p>
          <input
            type="text"
            placeholder="enter your email"
            id="loginemail"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <p>password</p>
          <input
            placeholder="enter your password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <br />
          <br />
          <button style={{ backgroundColor: "blue" }} onClick={handleLogin}>
            login
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default LoginPage;
