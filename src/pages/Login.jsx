import UserImage from "../assets/user-image.png";
import usericon from "../assets/user-icon.png";
import lockicon from "../assets/lock-icon.png";


import React from "react";
import { Link } from "react-router-dom";

import { UserAuth } from "../context/UserContext";

const Login = () => {
  const { handleLogin, setEmail, setPassword } = UserAuth();

  

  return (
    <section className="auth-container">
      <img src={UserImage} alt="User Image" className="user-image" />

      <form className="auth-form" onSubmit={handleLogin}>
        <div className="auth-email">
          <img src={usericon} alt="user-con" className="auth-icon" />
          <input
            type="email"
            className="auth-input"
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
        </div>

        <div className="auth-password">
          <img
            src={lockicon}
            alt="Password Lock Icon Image"
            className="auth-icon"
          />
          <input
            type="password"
            className="auth-input"
            placeholder="PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="auth-button">
          LOGIN
        </button>

        <p className="bottom-text">
          New User? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
