import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

import useHandleSignin from "./HandleSignin";
import HandleForgot from "./HandleForgot.js";
import { useAuth } from "../../context/authUtils";

const Login_form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");

  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const { register } = useAuth();

  // Autofocus on email input on page load
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const getEmail = (e) => setEmail(e.target.value);
  const getPassword = (e) => setPassword(e.target.value);

  // show password
  const togglePassword = (e) => {
    e.stopPropagation();
    setShowPass((prev) => !prev);
  };

  //  Register with validation
  const handleRegister = () => {
    if (email.trim() === "" || password.trim() === "") {
      setMessage("Please enter both email and password");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    const result = register(email, password);
    setMessage(result.message);
    if (result.success) {
      setEmail("");
      setPassword("");
      // Navigate to home after registration
      navigate("/");
    }
  };

  const { handleSignIn } = useHandleSignin();

  //  Sign-in button
  const handleSignInClick = () => {
    const result = handleSignIn(email, password);
    if (result && result.message) {
      setMessage(result.message);
    }
  };

  //  Forgot password button
  const handleForgotPassword = () => {
    HandleForgot({ email, setPassword, setShowPass, passRef });
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow className="g-0">
        {/* Left Side: Form */}
        <MDBCol md="6" className="mb-5">
          <div className="d-flex flex-column ms-md-5 me-md-5 px-3">
            <div className="text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h4 className="mt-3 mb-5 pb-1">We are The Lotus Team</h4>
            </div>

            <p className="fw-bold text-center mb-4">
              Please login to your account
            </p>

            {message && <p className="text-center text-danger">{message}</p>}

            {/* Email Input */}
            <MDBInput
              ref={emailRef}
              wrapperClass="mb-4"
              label="Email address"
              type="email"
              value={email}
              onChange={getEmail}
              onKeyDown={(e) => {
                if (e.key === "Enter") passRef.current.focus();
              }}
            />

            {/* Password Input */}
            <div className="position-relative mb-4">
              <MDBInput
                ref={passRef}
                label="Password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={getPassword}
              />
              <MDBIcon
                fas
                icon={showPass ? "eye-slash" : "eye"}
                onClick={togglePassword}
                className="position-absolute end-0 top-50 translate-middle-y me-4"
                style={{
                  cursor: "pointer",
                  color: "#6c757d",
                  fontSize: "1.1rem",
                }}
              />
            </div>

            {/* Sign-in Button & Forgot Password */}
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={handleSignInClick}
              >
                Sign in
              </MDBBtn>

              <a
                className="text-muted"
                style={{ cursor: "pointer" }}
                onClick={handleForgotPassword}
              >
                Forgot password?
              </a>
            </div>

            {/* Register Section */}
            <div className="d-flex flex-row flex-wrap align-items-center justify-content-center text-center pb-4 mb-4">
              <p className="mb-2 mb-md-0">Don't have an account?</p>
              <MDBBtn
                outline
                color="danger"
                className="mx-2 my-2"
                onClick={handleRegister}
              >
                Register
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        {/* Right Side: Info Panel */}
        <MDBCol md="6" className="mb-5">
          <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a company</h4>
              <p className="small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login_form;
