import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  img: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  buildDate: { type: String, required: true, trim: true },
  technology: { type: Array, required: true, trim: true },
  liveDemo:{ type: String, required: true, trim: true },
  category:{ type: String, required: true, trim: true },
  reactBy: [
    {
      type: String,
    },
  ],
  comments: [
    {
      type: String,
    },
  ],
});

export default mongoose.model("Portfolio", portfolioSchema);
