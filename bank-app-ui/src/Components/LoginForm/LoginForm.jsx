import React, { useState } from "react";
import "./LoginForm.css";
import { FaRegUser, FaLock } from "react-icons/fa";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLoginRequest = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:1025/banking-service/authenticator/loginRequest", {
        headers: {
          username: username,
          password: password,
        },
      })
      .then(
        (loginResponse) => {
          let loginData = loginResponse.data;
          axios.defaults.headers = {
            username: loginData.username,
            password: loginData.password,
          };
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("userID", loginResponse.data);
          console.log(loginData);

          window.location.href = "/update";
        },
        (error) => console.log(error)
      );
  };

  return (
    <div className="main-LoginForm">
      <form onSubmit={submitLoginRequest} target="#">
        <h1>LogIn</h1>
        <div className="userInput">
          <FaRegUser className="icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="userInput">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <div className="forgotPassword">
          <label>
            <a href="#"> Forgot Password</a>
          </label>
        </div>
        <button type="submit">Login</button>

        <div className="register">
          Don't have an account <a href="/register"> Register</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
