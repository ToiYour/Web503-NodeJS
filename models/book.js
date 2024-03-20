import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/Web503_NodeJS");
const Book = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: Number,
    description: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Book", Book);
