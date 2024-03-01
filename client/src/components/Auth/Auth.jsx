import React, { useState } from "react";
import "./auth.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { useRecoilState } from "recoil";
import { toggleAuthAtom } from "../../recoil/atom/toggleAuthAtom";

export default function App() {
  const [type, setType] = useRecoilState(toggleAuthAtom);
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container1 " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="App">
      {/* <h2 className="h2">Sign in/up Form</h2> */}
      <div className={containerClass}>
        <SignUp />
        <SignIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="h1">Welcome Back!</h1>
              <p className="p">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost button"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="h1">Hello, Friend!</h1>
              <p className="p">
                Enter your personal details and start journey with us
              </p>
              <button
                className="ghost button"
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
