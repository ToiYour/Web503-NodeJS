import mongoose from "mongoose";
try {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Web503_NodeJS")
    .then(() => console.log("Connect DB Successfully"));
} catch (error) {
  console.log(`Connect DB Not Successfully`);
}

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
