import Experience from '../models/exprienceSchema.js';
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";


export const createExperience = catchAsyncError(async(req, res, next) =>{
    const experience = new Experience(req.body);

    await experience.save();

    res.status(200).json({
        message:"Experience Create Successfully",
        experience
    })
})

export const getExperience = catchAsyncError(async(req, res, next) =>{
    const experience = await Experience.find();

    res.status(200).json({
        message:"true",
        experience
    })
})

export const updateExperience = catchAsyncError(async(req, res, next) =>{
    const { id } = req.params;

    const experience = await Experience.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useUpdateAndModify: true,
      });

    if(!experience) return next(new ErrorHandler("Not Found", 400));

    await experience.save()

    res.status(200).json({
        message:"Update Successfully",
        experience
    })
})