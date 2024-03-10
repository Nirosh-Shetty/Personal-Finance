import pool from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const signupDetails = req.body;
    console.log(signupDetails);
    const emailCheckQuery = "SELECT * FROM users WHERE email = $1";
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
      `INSERT INTO users 
      (name, email, password) 
      VALUES ($1, $2, $3)`,
      [signupDetails.name, signupDetails.email, enPassword]
    );

    const userIdObj = await pool.query(`SELECT userid FROM users WHERE email=$1`,[signupDetails.email]); 
    const userId = userIdObj.rows[0].userid;
    console.log(userId);
    const insertCategoriesQuery = `
    INSERT INTO categories (userid, category_name, type)
    VALUES
      (${userId}, '🍔 Food', 'expense'),
      (${userId}, '🛺 Transport', 'expense'),
      (${userId}, '🧘🏻‍♂ Health', 'expense'),
      (${userId}, '💶 Salary', 'income'),
      (${userId}, '🏆 Reward', 'income');
  `;
    await pool.query(insertCategoriesQuery);

    res.status(201).json({ success: true, message: "Signup successful" });
  } catch (error) {
    console.error("Error in Signup: ", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const signin = async (req, res) => {
  try {
    const { userInput, userPassword } = req.body;
    const enUserPassword = await bcrypt.hash(userPassword, 8);
    console.log(enUserPassword, userPassword, userInput);
    const dbQuery =
      "SELECT * FROM users WHERE username = $1 OR email = $1 OR phone = $1";
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
            expiresIn: "5h",
          });
          // console.log(token);
          res.status(201).json({
            success: true,
            message: "Authentication succesfull",
            token,
          });
          console.log("login done");
        
        } else {
          res.status(402).json({ success: false, message: "Invalid password" });
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
  //   `SELECT EXISTS(SELECT 1 FROM users WHERE email=$1 AND password=$2)`,
  //   [userInput, password]
  // );
  // console.log(value.rows[0].exists);
  // if (value.rows[0].exists) {
  //   index = await pool.query(`SELECT userid FROM users WHERE email=$1`, [
  //     email,
  //   ]);
  //   index = index.rows[0].userid;
  //   console.log(index);
  //   res.json({ message: true });
  // } else {
  //   res.json({ message: false });
  // }
};

export const pagesAuth = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) res.status(405).json({ message: "unauthorised!!!" });
  jwt.verify(token, "00000", (err, user) => {
    if (err) {
      return res.status(406).json({ message: "forbidden!!!!!" });
    }
    res.status(201).json({ message: "sucesfully authorised" });
  });
};
