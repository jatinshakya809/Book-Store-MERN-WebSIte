import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  bookname: String,
  price: Number,
  id: Number,
  category: String,
  image: String,
  title: String,
});

export const Book = mongoose.model("Book", bookSchema);
