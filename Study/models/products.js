import mongoose from "mongoose";
import { Schema } from "mongoose";
const ProductsShema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    gender: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
export default mongoose.model("Products", ProductsShema);
