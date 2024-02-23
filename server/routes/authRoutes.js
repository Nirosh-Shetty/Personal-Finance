import express from "express";
const Router = express.Router();
import { signin, signUp } from "../controller/authController.js";

Router.post("/signin", signin);

Router.post("/signUp", signUp);



export default Router;
