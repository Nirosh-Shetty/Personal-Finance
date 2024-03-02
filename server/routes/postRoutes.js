import express from "express";
const Router = express.Router();
import { signin, signUp } from "../controller/authController.js";
import { addTransaction } from "../controller/addTransaction.js";
import { authoriseMiddleware } from "../middleware/authoriseMiddleware.js";
Router.post("/signin", signin);

Router.post("/signUp", signUp);

Router.post("/addtransaction", authoriseMiddleware, addTransaction);

// Router.post("/addcatagory", (req, res) => {
//   const { label } = req.body;
//   console.log(label);
//   res.send("added");
// });

export default Router;
