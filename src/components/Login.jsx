import React from "react";
import "../styles/Login.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { signup, login, logout, useAuth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    setLoading(true);
    // try {
    await signup(emailRef.current.value, passwordRef.current.value);

    navigate("/");

    // } catch {
    // alert("Error!");
    // }

    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Wrong Password!");
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>
          {" "}
          {loading || currentUser ? `Welcome ${currentUser?.email}` : "Sign in"}
        </h1>

        <form>
          <h5>E-mail</h5>
          <input ref={emailRef} placeholder="Email" type="text" />

          <h5>Password</h5>
          <input ref={passwordRef} type="password" placeholder="Password" />

          <button
            disabled={loading || currentUser}
            onClick={handleLogin}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Amazon Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>

        <button
          disabled={loading || currentUser}
          onClick={handleSignup}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
        <button
          className="login__registerButton"
          disabled={loading || !currentUser}
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
export default Login;
