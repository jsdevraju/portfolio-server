import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import Project from '../models/projectSchema.js';

//Create Project
export const createProject = catchAsyncError(async(req, res, next) =>{
    const project = new Project(req.body);

    await project.save();

    res.status(200).json({
        message:"Create Project Successfully",
        project
    })
})

// get Project 
export const getProject = catchAsyncError(async(req, res, next) =>{
    const project = await Project.find();

    res.status(200).json({
        message:"true",
        project
    })
})

// Update Project
export const updateProject = catchAsyncError(async(req, res, next) =>{
    const { id } = req.params;
    
    const project = await Project.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        useUpdateAndModify: true,
      });
    if(!project) return next(new ErrorHandler("Not Found", 400));

    res.status(200).json({
        message:"Update Project",
        project
    })
})