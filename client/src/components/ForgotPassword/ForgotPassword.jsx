import React from "react";
import "./forgotPassword.css";
import OTPInput from "./OtpInput";
import LockIcon from "@mui/icons-material/Lock";
import Input from "@mui/material/Input";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Password from "./Password";
import Email from "./Email";

import { password } from "../../recoil/atom/password";
import { useRecoilState } from "recoil";

import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [pass, setPass] = useRecoilState(password);

  const handleSubmit = () => {
    if (pass.password && pass.email && pass.password === pass.confirmPassword) {
      const checkpassword = pass.password;
      const email = pass.email;
      fetch("http://localhost:8000/api/changepassword", {
        method: "PUT", // or "POST" depending on your server implementation
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checkpassword, email }),
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response.message);
            return;
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          navigate("/auth");
        })
        .catch((error) => {
          console.log("error while changing pass ", error);
        });
    } else {
      alert("passwords are not matching");
    }
  };
  return (
    <div className="forgot-main">
      <div className="inside-forgot-main">
        <div className="top-text">
          <h1>
            <LockIcon style={{ scale: "2", margin: "0 15px" }} />
            Reclaim Your Access
          </h1>
          <p>
            Lost access to your account? Fear not! We'll assist you in resetting
            your password...
          </p>
        </div>
        <Email />

        <OTPInput />
        <Password
          placeholder={"Enter a New Password"}
          displayState={true}
          name={"password"}
        />
        <Password
          placeholder={"Confirm Password"}
          displayState={false}
          name={"confirmPassword"}
        />
        <Button
          variant="contained"
          sx={{
            marginTop: "10px",
            padding: "12px",
            width: "85%",
            fontSize: "1.2rem",
            fontWeight: "bold",
            // marginTop: "10px",
          }}
          onClick={handleSubmit}
          // color="success"
        >
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
