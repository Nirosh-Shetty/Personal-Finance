import express from "express";
const router = express.Router();
import { signin, signUp } from "../controller/authController.js";
import { addTransaction } from "../controller/addTransaction.js";
import { authoriseMiddleware } from "../middleware/authoriseMiddleware.js";
import { getData } from "../controller/getData.js";

router.post("/signin", signin);

router.post("/signUp", signUp);

router.post("/addtransaction", authoriseMiddleware, addTransaction);

router.post("/getdata", authoriseMiddleware, getData);

// router.post("/addcatagory", (req, res) => {
//   const { label } = req.body;
//   console.log(label);
//   res.send("added");
// });

export default router;
