import pool from "../database/db.js";

export const logIn = async (req, res) => {
  try {
    const { gmail, password } = req.body;
    console.log(gmail);
    console.log(password);
    const signIn = await pool.query(
      "INSERT INTO useraccountdetails (usergmail,userpassword) VALUES ($1,$2)",
      [gmail, password]
    );
  } catch (error) {
    console.error(error);
  }
};

export const signUp = (req, res) => {};
