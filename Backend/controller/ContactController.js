import { Contact } from "../models/ContactSchema.js";
export const createContactMessage = async (req, res) => {
  try {
    const { name, number, email, bookName } = req.body;

    if (!name || !number || !email || !bookName) {
      return res.status(401).json({
        message: "Please fill all details",
        success: false,
      });
    }

    const messages = await Contact.create({
      name,
      number,
      email,
      bookName,
    });
    if (!messages) {
      return res.status(401).json({
        message: "Please try after some time",
        success: false,
      });
    } else {
      return res.status(200).json({
        message: "Thanks for contacting us",
        success: true,
        messages: {
          Name: messages.name,
          number: messages.number,
          email: messages.email,
          bookName: messages.bookName,
        },
      });
    }
  } catch (error) {
    console.log("Error in Contact message", error);
    return res.status(500).json({
      message: "Internal error",
      success: false,
    });
  }
};
