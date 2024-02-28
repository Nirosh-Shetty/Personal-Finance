import express from "express";
import authRoutes from "./authRoutes.js";
import getRoutes from "./getRoutes.js";
const router = express.Router();

router.use("/api/auth", authRoutes);
router.use("/api", getRoutes);

export default router;
