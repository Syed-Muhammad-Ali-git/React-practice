import React, { useState, useRef, useEffect } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
import HandleForgot from "./HandleForgot.js";
import useHandleSignin from "./HandleSignin.js";

const Login_form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [message, setMessage] = useState("");

  const emailRef = useRef();
  const passRef = useRef();
  const { handleSignIn } = useHandleSignin();

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

  //  Login button (saves to localStorage and navigates to home)

  const handleLoginClick = () => {
    const result = handleSignIn(email, password);
    if (result.success) {
      setMessage(result.message);
      setEmail("");
      setPassword("");
    } else {
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

            {/* Login Button & Forgot Password */}
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={handleLoginClick}
              >
                sign in
              </MDBBtn>

              <a
                className="text-muted"
                style={{ cursor: "pointer" }}
                onClick={handleForgotPassword}
              >
                Forgot password?
              </a>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login_form;
