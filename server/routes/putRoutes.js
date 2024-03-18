import express from "express";
import { authoriseMiddleware } from "../middleware/authoriseMiddleware.js";
import { updateProfile } from "../controller/updateProfile.js";
import { changePassword } from "../controller/forgotPassword.js";
const router = express.Router();

router.put("/profileupdated", authoriseMiddleware, updateProfile);
router.put("/changepassword", changePassword);

export default router;
