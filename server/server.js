import express from "express";
const app = express();
import routes from "./routes/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./database/db.js";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 8000;

app.use(routes);

// app.post("/signup",async (req,res)=>{
//   const signupDet = req.body;
//   await pool.query(
//     `INSERT INTO signup
//     (firstname,lastname,phonenumber,email,housenumber,street,city,userstate,userpassword,confirmpassword)
//     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,[
//     signupDet.firstName,
//     signupDet.lastName,
//     signupDet.phoneNumber,
//     signupDet.email,
//     signupDet.houseNumber,
//     signupDet.street,
//     signupDet.city,
//     signupDet.state,
//     signupDet.password,
//     signupDet.confirmPassword]
//    );
// // })

// app.post("/signin",async (req,res)=>{
//   const {email,password} = req.body;
//   console.log(password);

//  const value = await pool.query(`SELECT EXISTS(SELECT 1 FROM users WHERE email=$1 AND userpassword=$2)`,[email,password]);
//  console.log(value.rows[0].exists);
// if (value.rows[0].exists)
// {
//   index = await pool.query(`SELECT userid FROM users WHERE email=$1`,[email]);
//   index = index.rows[0].userid;
//   console.log(index);
// } else{
//   res.json({"message":false});
// }

// });

// port listen
app.listen(port, () => {
  console.log(`APP is running at port ${port}`);
});
