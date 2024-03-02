import pool from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const signupDetails = req.body;
    console.log(signupDetails);
    const emailCheckQuery = "SELECT * FROM signup WHERE email = $1";
    const emailCheckResult = await pool.query(emailCheckQuery, [
      signupDetails.email,
    ]);

    if (emailCheckResult.rows.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already taken" });
    }

    const enPassword = await bcrypt.hash(signupDetails.password, 8);
    await pool.query(
      `INSERT INTO signup 
      (name,username, phone, email, gender, address, password) 
      VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        signupDetails.name,
        null,
        null,
        signupDetails.email,
        null,
        null,
        enPassword,
      ]
    );

    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error("Error in Signup: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }

  // const signupDetails = req.body;
  // const enPassword = bcrypt.hash(signupDetails.password, 8);

  //
  // await pool.query(
  //   `INSERT INTO signup
  //   (firstname,lastname,phonenumber,email,housenumber,street,city,userstate,userpassword,confirmpassword)
  //   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
  //   [
  //     signupDetails.firstName,
  //     signupDetails.lastName,
  //     signupDetails.phoneNumber,
  //     signupDetails.email,
  //     signupDetails.houseNumber,
  //     signupDetails.street,
  //     signupDetails.city,
  //     signupDetails.state,
  //     signupDetails.password,
  //     signupDetails.confirmPassword,
  //   ]
  // );
};

export const signin = async (req, res) => {
  try {
    const { userInput, userPassword } = req.body;
    const enUserPassword = await bcrypt.hash(userPassword, 8);
    console.log(enUserPassword, userPassword, userInput);
    const dbQuery =
      "SELECT * FROM signup WHERE username = $1 OR email = $1 OR phone = $1";
    const dbResult = await pool.query(dbQuery, [userInput]);

    if (dbResult.rows.length === 0) {
      res.status(401).json({ success: false, message: "User not found" });
      console.log("user not found");
    } else {
      // const storedPassword = dbResult.rows[0].password;
      bcrypt.compare(userPassword, dbResult.rows[0].password, (err, result) => {
        if (err) {
          console.error("Error during password comparison:", err);
          return;
        }
        if (result) {
          const userid = dbResult.rows[0].userid;
          const email = dbResult.rows[0].email;
          // console.log({ userId, email })
          const token = jwt.sign({ userid, email }, "00000", {
            expiresIn: "1h",
          });
          // console.log(token);
          res.status(201).json({
            success: true,
            message: "Authentication succesfull",
            token: token,
          });
          console.log("login done");
        } else {
          res
            .status(402)
            .json({ success: false, message: "Invalid password", token });
          console.log("password wrong");
        }
      });
    }
  } catch (error) {
    console.error("Error in Authentication: ", error);
    console.log("Error in Authentication: ");
  }
  //after this change
  // const value = await pool.query(
  //   `SELECT EXISTS(SELECT 1 FROM signup WHERE email=$1 AND password=$2)`,
  //   [userInput, password]
  // );
  // console.log(value.rows[0].exists);
  // if (value.rows[0].exists) {
  //   index = await pool.query(`SELECT userid FROM signup WHERE email=$1`, [
  //     email,
  //   ]);
  //   index = index.rows[0].userid;
  //   console.log(index);
  //   res.json({ message: true });
  // } else {
  //   res.json({ message: false });
  // }
};
