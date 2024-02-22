import pool from "../database/db.js";

export const signin = async (req, res) => {
  // res.send("signin post checking");
  try {
    const { email, password } = req.body;
    // await pool.query();
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (req, res) => {
  try {
    const signupDet = req.body;
    await pool.query(
      `INSERT INTO signup 
      (firstname,lastname,phonenumber,email,housenumber,street,city,userstate,userpassword,confirmpassword) 
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [
        signupDet.firstName,
        signupDet.lastName,
        signupDet.phoneNumber,
        signupDet.email,
        signupDet.houseNumber,
        signupDet.street,
        signupDet.city,
        signupDet.state,
        signupDet.password,
        signupDet.confirmPassword,
      ]
    );
  } catch (error) {
    console.log(` in signin : ${error}`);
  }
};
