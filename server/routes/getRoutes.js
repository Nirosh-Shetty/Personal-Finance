import express from "express";
const router = express.Router();

router.get("/profile", (req, res) => {});

router.get("/getpage", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) res.status(405).json({ message: "unauthorised!!!" });
  jwt.verify(token, "00000", (err, user) => {
    if (err) {
      res.status(406).json({ message: "forbidden!!!!!" });
    }
    res.status(201).json({ message: "diaplay page" });
  });
});

export default router;
