import pool from "../database/db.js";

let index = null;



export const signUp = async (req, res) => {
  const signupDet = req.body;
  await pool.query(
    `INSERT INTO signup 
    (firstname,lastname,phonenumber,email,housenumber,street,city,userstate,userpassword,confirmpassword) 
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[
    signupDet.firstName,
    signupDet.lastName,
    signupDet.phoneNumber,
    signupDet.email,
    signupDet.houseNumber,
    signupDet.street,
    signupDet.city,
    signupDet.state,
    signupDet.password,
    signupDet.confirmPassword]
   );
};

export const signin = async (req, res) => {
  const {email,password} = req.body;
  console.log(password);
  
 const value = await pool.query(`SELECT EXISTS(SELECT 1 FROM signup WHERE email=$1 AND userpassword=$2)`,[email,password]);
 console.log(value.rows[0].exists);
if (value.rows[0].exists)
{ 
  index = await pool.query(`SELECT userid FROM signup WHERE email=$1`,[email]);
  index = index.rows[0].userid;
  console.log(index);
  res.json({"message":true});
} else{
  res.json({"message":false});
}
};
