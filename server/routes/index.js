import express from "express";
import postRoutes from "./postRoutes.js";
import getRoutes from "./getRoutes.js";
const router = express.Router();

router.use("/api", postRoutes);
router.use("/api", getRoutes);

export default router;
