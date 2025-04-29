import express from "express";
import { registerUser, userLogin } from "../controllers/user.controller.js";
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(userLogin);

export default router;
