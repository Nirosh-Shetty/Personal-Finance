import pool from "../database/db.js";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";

const generatedOTP = Math.floor(10000 + Math.random() * 90000);

export const emailcheck = async (req, res) => {
  const { email } = req.body;

  const dbQuery = "SELECT * FROM users WHERE email = $1";
  try {
    const dbResult = await pool.query(dbQuery, [email]);
    if (dbResult.rows.length === 0) {
      res.status(404).json({ message: "Email not found" });
      return;
    }
    sendOTP(email, generatedOTP);
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
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
  console.log(generatedOTP);
  try {
    if (generatedOTP && generatedOTP.toString() === otp) {
      console.log("otp verified");
      res.status(201).json({ message: "otp verified successfully" });
      return;
    }
    console.log("not verified");
    res.status(401).json({ message: "Invalid OTP" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const changePassword = async (req, res) => {
  const { checkpassword, email } = req.body;
  console.log(checkpassword, email);
  const enPassword = await bcrypt.hash(checkpassword, 8);
  const updateQuery = `
  UPDATE users
  SET password = $1
  WHERE email = $2
  `;

  try {
    await pool.query(updateQuery, [enPassword, email]);
    console.log("done");
    res.status(200).json({ message: "password updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
