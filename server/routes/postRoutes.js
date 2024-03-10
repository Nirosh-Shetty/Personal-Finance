import express from "express";
const router = express.Router();
import { signin, signUp ,pagesAuth} from "../controller/authController.js";
import { addTransaction } from "../controller/addTransaction.js";
import { authoriseMiddleware } from "../middleware/authoriseMiddleware.js";
import { getData, getuserdata } from "../controller/getData.js";
router.post("/signin", signin);

router.post("/signUp", signUp);

router.post("/addtransaction", authoriseMiddleware, addTransaction);

router.post("/getdata", authoriseMiddleware, getData);

router.post("/getuserdata", authoriseMiddleware, getuserdata);

router.post("/pagesauth", pagesAuth);
// router.post("/addcatagory", (req, res) => {
//   const { label } = req.body;
//   console.log(label);
//   res.send("added");
// });

export default router;
