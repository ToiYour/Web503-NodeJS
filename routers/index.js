import express from "express";
import Book from "../models/book.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  try {
    const books = await Book.create(req.body);
    res.send({
      status: true,
      message: "Thêm thành công",
      books,
    });
  } catch (error) {
    console.log(error);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const books = await Book.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.send({
      status: true,
      message: "Cập nhập thành công",
      books,
    });
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const books = await Book.deleteOne({ _id: req.params.id });
    res.send({
      status: true,
      message: "Xoá  thành công",
      books,
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
