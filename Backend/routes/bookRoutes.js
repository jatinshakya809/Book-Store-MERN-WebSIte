import express from "express";
import {
  createBook,
  createHindiBook,
  getBook,
  getBookById,
  getHindiBook,
} from "../controller/bookController.js";

const router = express.Router();

router.route("/get").get(getBook);

router.route("/hindi").get(getHindiBook);

router.route("/create").post(createBook);

router.route("/create/hindi").post(createHindiBook);

router.route("/get/:id").get(getBookById);

export default router;
