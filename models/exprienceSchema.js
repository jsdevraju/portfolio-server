import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    company:{type:String, trim:true, required:true},
    joinYear:{type:String, trim:true, required:true},
    endYear:{type:String, trim:true, required:true},
    description:{type:String, trim:true, required:true},
    role:{type:String, trim:true, required:true},
})


export default mongoose.model("Experience", experienceSchema)