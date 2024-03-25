import express from "express";
const router = express.Router();
import { authoriseMiddleware } from "../middleware/authoriseMiddleware.js";
import { updateProfile } from "../controller/updateProfile.js";
import { changePassword } from "../controller/forgotPassword.js";

import { upload, handleFileUpload } from "../middleware/mutler.js";

router.put(
  "/profileupdated",
  [authoriseMiddleware, upload.single("pfp"), handleFileUpload],
  updateProfile
);
router.put("/changepassword", changePassword);

export default router;
