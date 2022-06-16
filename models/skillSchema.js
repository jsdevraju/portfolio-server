import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    platforms:{type:Array, required:true, trim:true},
    languages:{type:Array, required:true, trim:true},
    markups:{type:Array, required:true, trim:true},
    datatransport:{type:Array, required:true, trim:true},
    sqldb:{type:Array, required:true, trim:true},
    nosqldb:{type:Array, required:true, trim:true},
    cache:{type:Array, required:true, trim:true},
    backend:{type:Array, required:true, trim:true},
    frontend:{type:Array, required:true, trim:true},
    mobileapp:{type:Array, required:true, trim:true},
    desktopapp:{type:Array, required:true, trim:true},
    webservice:{type:Array, required:true, trim:true},
    coluds:{type:Array, required:true, trim:true},
    misc:{type:Array, required:true, trim:true},
})

export default mongoose.model("Skill", skillSchema)