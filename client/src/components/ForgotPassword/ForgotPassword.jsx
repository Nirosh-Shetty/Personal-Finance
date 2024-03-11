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

const ForgotPassword = () => {
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
        <Password placeholder={"Enter a New Password"} displayState={true} />
        <Password placeholder={"Confirm Password"} displayState={false} />
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
          // color="success"
        >
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
