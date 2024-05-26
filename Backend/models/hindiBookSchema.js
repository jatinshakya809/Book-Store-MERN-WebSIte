import mongoose from "mongoose";

const HindiBookSchema = new mongoose.Schema({
  bookname: String,
  price: Number,
  id: Number,
  category: String,
  image: String,
  title: String,
});

export const HindiBook = mongoose.model("HindiBook", HindiBookSchema);
