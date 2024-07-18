import express from "express";
const Router = express.Router();
import { singin, signUp } from "../controller/authController.js";

Router.post("/signin", singin);

Router.post("/signUp", signUp);

export default Router;
