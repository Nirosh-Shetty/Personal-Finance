import pool from "../database/db.js";
import nodemailer from "nodemailer";

const genratedOTP = Math.floor(10000 + Math.random() * 90000);

export const emailcheck = async (req, res) => {
  const { email } = req.body;
  const dbQuery = "SELECT * FROM users WHERE email = $1";
  const dbResult = await pool.query(dbQuery, [email]);
  if (dbResult.rows.length === 0) {
    res.status(404).json({ message: "Email not found" });
    return;
  }
  sendOTP(email, genratedOTP);
};

function sendOTP(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "www.niroshshetty@gmail.com",
      pass: "qtwc fehj armu qbnt",
    },
  });

  const mailOptions = {
    from: "www.niroshshetty@gmail.com",
    to: email,
    subject: "Forgot Password OTP",
    text: `Your OTP for password reset is:
                  ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

export const otpVerify = (req, res) => {
  const { otp } = req.body;
  try {
    if (genratedOTP && genratedOTP === otp) {
      res.status(201).json({ message: "otp verified succesfully" });
      return;
    }
    res.status(401).json({ message: "Invalid OTP" });
  } catch (error) {
    console.log(error);
  }
};
