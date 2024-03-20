import express from "express";
import Book from "../models/book.js";
import BookValidate from "../middelwares/book.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.send(books);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.id });
    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Không tìm thấy sản phẩm nào khớp với ID",
      });
    }
    res.send(book);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Đã xảy ra lỗi khi truy vấn dữ liệu",
    });
  }
});
router.post("/", BookValidate, async (req, res) => {
  try {
    const books = await Book.create(req.body);
    res.send({
      status: true,
      message: "Thêm thành công",
      books,
    });
  } catch (error) {
    console.log(error.message);
  }
});
router.put("/:id", BookValidate, async (req, res) => {
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
    res.send({
      status: false,
      message: "Không tìm thấy sản phẩm nào khớp với ID",
    });
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
    res.send({
      status: false,
      message: "Không tìm thấy sản phẩm nào khớp với ID",
    });
  }
});

export default router;
