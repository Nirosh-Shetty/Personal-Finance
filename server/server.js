import express from "express";
const app = express();
import routes from "./routes/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./database/db.js"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 8000;
let index = null;

app.use(routes);
// app.post("/api/auth/login", (req, res) => {
//   res.status(200).send("login done");
// });



app.post("/signup",async (req,res)=>{
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
})

app.post("/signin",async (req,res)=>{
  const {email,password} = req.body;
 const value = await pool.query(`SELECT EXISTS(SELECT 1 FROM signup WHERE userpassword=$1)`,[password]);
 console.log(value.rows[0].exists);
//  if (value.rows[0].exists)
//  { 
// }
index = await pool.query(`SELECT userid FROM signup WHERE userpassword=$1`,[password]);
console.log(index);
});



// port listen
app.listen(port, () => {
  console.log(`APP is running at port ${port}`);
});
