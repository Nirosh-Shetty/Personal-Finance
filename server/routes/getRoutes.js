import express from "express";
const router = express.Router();

router.get("/transaction", (req, res) => {
  res.send("chehking transaction get request");
});

router.get("/profile", (req, res) => {});

// Router.get('/home')

export default router;
