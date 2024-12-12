import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    points: Number,
    dueDate: Date,
    availableDate: Date,
    availableUntil: Date,
  },
  { collection: "assingments" }
);
export default courseSchema;
