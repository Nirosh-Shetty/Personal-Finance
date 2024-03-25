import express from "express";
const router = express.Router();
import { signin, signUp, pagesAuth } from "../controller/authController.js";
import { addTransaction } from "../controller/addTransaction.js";
import { authoriseMiddleware } from "../middleware/authoriseMiddleware.js";
import { homeData, statsData, getuserdata } from "../controller/getData.js";
import { emailcheck, otpVerify } from "../controller/forgotPassword.js";

router.post("/signin", signin);

router.post("/signUp", signUp);

router.post("/addtransaction", authoriseMiddleware, addTransaction);

router.post("/homedata", authoriseMiddleware, homeData);

router.post("/statsdata", authoriseMiddleware, statsData);

router.post("/getuserdata", authoriseMiddleware, getuserdata);

router.post("/pagesauth", pagesAuth);

router.post("/forgot/emailcheck", emailcheck);

router.post("/forgot/otpverify", otpVerify);

// router.prototype('/updatepfp',UpdatePfp)

// router.post("/addcatagory", (req, res) => {
//   const { label } = req.body;
//   console.log(label);
//   res.send("added");
// });

export default router;
