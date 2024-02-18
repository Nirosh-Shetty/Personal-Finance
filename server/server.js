import express from "express";
const app = express();
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 8000;

app.use("/api/auth", authRoutes);
// app.post("/api/auth/login", (req, res) => {
//   res.status(200).send("login done");
// });

// port listen
app.listen(port, () => {
  console.log(`APP is running at port ${port}`);
});

// testin
