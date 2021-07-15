import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1 className="signin_text">Sign-In</h1>
        <form className="signin_form">
          <h5>Email Address</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="signin_button"
            type="submit"
            onClick={(e) => signin(e)}
          >
            Sign in
          </button>
        </form>
        <div className="register_container">
          <h5 className="register_text">New to Amazon Clone ???</h5>
          <button className="register_button" onClick={(e) => register(e)}>
            Create Your Amazon Clone Account with this email and password
          </button>
        </div>
        <p className="privacy_statement">
          By Signing in or Registering, you agree to Amazon Clone's Conditions
          of Use and Privacy Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
