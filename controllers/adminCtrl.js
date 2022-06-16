import Admin from "../models/adminSchema.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

//When Admin Is Need to login
export const adminLogin = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({email});

  if(!admin) return next(new ErrorHandler("You are not admin", 400));

  if(admin._doc.password !== password) return next(new ErrorHandler("You are not admin", 400));

  const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  const { password:myPassword, ...adminInfo } = admin._doc;

  res.cookie("token", token).status(200).json({
    message: "Login Successfully",
    token,
    adminInfo,
  });
});

// When Admin Need to logout
export const adminLogout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null).status(200).json({
    message: "Logged Out Successfully",
    token: null,
    adminInfo:null,
  });
});
