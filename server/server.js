import express from "express";
const app = express();
import routes from "./routes/index.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 8000;

app.use(routes);

// port listen
app.listen(port, () => {
  console.log(`APP is running at port ${port}`);
});
