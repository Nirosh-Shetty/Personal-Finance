import pool from "../database/db.js";

export const signin = async (req, res) => {
  // res.send("signin post checking");
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    const signIn = await pool.query(
      "INSERT INTO useraccountdetails (usergmail,userpassword) VALUES ($1,$2)",
      [email, password]
    );
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (req, res) => {
  res.send("signup post checkin");
};
