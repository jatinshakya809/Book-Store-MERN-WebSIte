import express from "express";
import { login, signup, updateUser } from "../controller/userController.js";

const router = express.Router();

router.route("/signup").post(signup);

router.route("/login").post(login);

router.route("/updateUser").put(updateUser);

export default router;
