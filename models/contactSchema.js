import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  subject: { type: String, required: true, trim: true },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: [50, "Message at least 50 characters"],
    maxlength: [400, "Message is too bigger 400 characters is limited"],
  },
});

export default mongoose.model("Contact", contactSchema);
