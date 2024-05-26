import { Book } from "../models/bookSchema.js";
import { HindiBook } from "../models/hindiBookSchema.js";

export const createBook = async (req, res) => {
  try {
    const data = req.body;

    // if (!name || !price || !category || !image || !title) {
    //   return res.status(401).json({
    //     message: "Fill all field",
    //     success: false,
    //   });
    // }

    await Book.insertMany(data);

    return res.status(200).json({
      message: "Successfully created",
      success: true,
    });
  } catch (error) {
    console.log("error in create book", error);
    return res.status(500).json({
      message: "error in create book",
      error,
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json({
      message: "Get book succesfull",
      book,
    });
  } catch (error) {
    console.log("error in get book", error);
    res.status(500).json({
      message: "error",
      success: false,
      error,
    });
  }
};

export const createHindiBook = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    await HindiBook.insertMany(data);

    return res.status(200).json({
      message: "Successfully created",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    return res.status(500).json({
      success: false,
      message: "internal error in hindi book create",
    });
  }
};
export const getHindiBook = async (req, res) => {
  try {
    const Hindibook = await HindiBook.find();
    res.status(200).json({
      message: "Get book succesfull",
      Hindibook,
    });
  } catch (error) {
    console.log("error in get book", error);
    res.status(500).json({
      message: "error",
      success: false,
      error,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(500).json({
        message: "Cannot get Book",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Your Book",
      success: true,
      book,
    });
  } catch (error) {
    console.log("error in get book", error);
    return res.status(500).json({
      message: "error",
      success: false,
      error,
    });
  }
};
