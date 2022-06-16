import jwt from "jsonwebtoken";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import Admin from "../models/adminSchema.js";

export const authAdmin = catchAsyncError(async (req, res, next) => {
  const token =
    req.headers.authorization?.split("Bearer ")[1] || req.cookies.token;

  if (!token) return next(new ErrorHandler("Invalid authorization token", 400));

  const decoedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await Admin.findById(decoedData.id);
  next();
});
