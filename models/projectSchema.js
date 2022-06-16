import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  project: { type: String, required: true, trim: true },
  complete: { type: String, required: true, trim: true },
  working: { type: String, required: true, trim: true },
  satisfied: { type: String, required: true, trim: true },
});

export default mongoose.model("Project", projectSchema);
