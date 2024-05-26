import mongoose, { Types } from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bookName: {
    type: String,
    required: true,
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
