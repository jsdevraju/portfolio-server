import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import Portfolio from "../models/portfolioSchema.js";

// Create Portfolio
export const createPortfolio = catchAsyncError(async (req, res, next) => {
  const portfolio = new Portfolio(req.body);

  await portfolio.save();

  res.status(200).json({
    message: "Successfully",
    portfolio,
  });
});

// Get All Portfolio
export const getAllPortfolio = catchAsyncError(async (req, res, next) => {
  const portfolio = await Portfolio.find({});

  res.status(200).json({
    message: "Successfully",
    portfolio,
  });
});

//Get Single Portfolio
export const singlePortfolio = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const portfolio = await Portfolio.findById(id);
  if (!portfolio) return next(new ErrorHandler("Not Found", 400));

  res.status(200).json({
    message: "Successfully",
    portfolio,
  });
});

// Update Portfolio
export const updatePortfolio = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const portfolio = await Portfolio.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useUpdateAndModify: true,
  });
  if (!portfolio) return next(new ErrorHandler("Not Found", 400));

  res.status(200).json({
    message: "Update Successfully",
    portfolio
  });
});

//Delete Portfolio
export const deletePortfolio = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const portfolio = await Portfolio.findById(id);
  if (!portfolio) return next(new ErrorHandler("Not Found", 400));

  await portfolio.remove();

  res.status(200).json({
    message: "Delete Successfully",
  });
});

// Adding Like Features
export const addReact = catchAsyncError(async (req, res, next) => {
  const { portId } = req.params;
  const portfolio = await Portfolio.findById(portId);

  //check if post or user exist. If any of these is undefined throw an error.
  if (!portfolio) return next(new ErrorHandler("Bad request", 404));
  //else push the userid to the post reactedBy user array.
  portfolio?.reactBy?.push("like add");
  // save document
  await portfolio.save();
  res.status(200).json({
    success: true,
    portfolio,
  });
});

// Add Comment Features
export const addComment = catchAsyncError(async (req, res, next) => {
  const { portId } = req.params;
  const text = req.body.text;
  let portfolio = await Portfolio.findById(portId);

  //check if post or user exist. If any of these is undefined throw an error.
  if (!portfolio) return next(new ErrorHandler("Bad request", 404));

  //else push the userid to the post reactedBy user array.
  portfolio?.comments?.push(text);
  await portfolio.save();

  res.status(200).json({
    success: true,
    portfolio,
  });
});
