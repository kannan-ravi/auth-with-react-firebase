import userimage from "../assets/user-image.png";
import usericon from "../assets/user-icon.png";
import lockicon from "../assets/lock-icon.png";
import googleicon from "../assets/google-icon.png";

import React from "react";
import { Link } from "react-router-dom";

import { UserAuth } from "../context/UserContext";

const SignUp = () => {
  const { handleRegisterUser, setEmail, setPassword, userWithGoogle } =
    UserAuth();

  return (
    <section className="auth-container">
      <img src={userimage} alt="User Image" className="user-image" />

      <form className="auth-form" onSubmit={handleRegisterUser}>
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
          RESIGTER
        </button>
      </form>

      <p className="or-text">OR</p>

      <button onClick={userWithGoogle} className="google-button">
        <img src={googleicon} alt="Google Icon" />
        <p>Continue with Google</p>
      </button>
      <p className="bottom-text">
        Already Have Account <Link to="/login">Login</Link>
      </p>
    </section>
  );
};

export default SignUp;
