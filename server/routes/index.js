import express from "express";

import postRoutes from "./postRoutes.js";
import putRoutes from "./putRoutes.js";
const router = express.Router();

router.use("/api", postRoutes);
router.use("/api", putRoutes);

export default router;
