import express from "express";
import { createContactMessage } from "../controller/ContactController.js";

const router = express.Router();

router.route("/create").post(createContactMessage);

export default router;
