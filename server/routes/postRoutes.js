import express from "express";
const Router = express.Router();
import { signin, signUp } from "../controller/authController.js";
import { addTransaction } from "../controller/addTransaction.js";
Router.post("/signin", signin);

Router.post("/signUp", signUp);

Router.post("/addtrans", addTransaction);

Router.post("/addcatagory", (req, res) => {
  const { label } = req.body;
  console.log(label);
  res.send("added");
});
export default Router;
