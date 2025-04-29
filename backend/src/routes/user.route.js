import express from "express";
import { logout, registerUser, userLogin } from "../controllers/user.controller.js";
import { verifyJWt } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(userLogin);

router.route("/logout").post(verifyJWt, logout);


export default router;
