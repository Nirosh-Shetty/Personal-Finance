import express from "express";
import { authoriseMiddleware } from "../middleware/authoriseMiddleware.js";
import { updateProfile } from "../controller/updateProfile.js";
const router = express.Router();

router.put("/profileupdated", authoriseMiddleware, updateProfile);

export default router;
