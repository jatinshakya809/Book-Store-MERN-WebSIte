import { User } from "../models/userSchema.js";
import bycrpt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(401).json({
        message: "Fill all fields",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "Already registered",
        success: false,
      });
    }
    const saltRound = 10;
    const hashedPassword = await bycrpt.hash(password, saltRound);

    const createdUser = new User({ fullname, email, password: hashedPassword });

    await createdUser.save();
    return res.status(201).json({
      message: "User Successfully created",
      success: true,
      user: {
        id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("error in signup controller", error);
    return res.status(500).json({
      message: "Internal Error",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const isMatch = await bycrpt.compare(password, user.password);

    if (!isMatch || !user) {
      return res.status(402).json({
        message: "Invalid Credentials",
        success: false,
      });
    } else {
      return res.status(200).json({
        message: "Successfully Logged in",
        success: true,
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error in LOGIN controller", error);
    return res.status(500).json({
      message: "Internal Error",
      success: false,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(402).json({
        message: "User not found",
        success: false,
      });
    }

    if (password.length < 6) {
      return res.status(402).json({
        message: "Password should be 6 Character long",
        success: false,
      });
    }

    const hashpass = await bycrpt.hash(password, 10);

    const updatedUser = await User.findOneAndUpdate(
      {
        email,
      },
      {
        password: hashpass || user.password,
        fullname: fullname || user.fullname,
      },
      { new: true }
    );
    return res.status(200).json({
      message: "User Updated Successfully",
      success: true,
      updatedUser,
    });
  } catch (error) {
    console.log("Error in updateUser Controller", error);
    return res.status(500).json({
      message: "Internal Error",
      success: false,
      error,
    });
  }
};
