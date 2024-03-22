import mongoose from "mongoose";
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
const Bookmodel = mongoose.model("books", Book);
export default Bookmodel;
