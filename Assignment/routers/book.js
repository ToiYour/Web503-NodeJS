import express from "express";
import BookShema from "../models/book.js";
import BookValidate from "../Joi/book.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const data = await BookShema.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    if (req.params.id.length < 24) {
      return res
        .status(404)
        .json({ message: "Id bạn tìm kiếm phải ít nhất 24 ký tự" });
    } else if (req.params.id.length > 24) {
      return res
        .status(404)
        .json({ message: "Id bạn tìm kiếm vượt quá 24 ký tự" });
    } else {
      const data = await BookShema.findById(req.params.id);
      if (!data) {
        return res.status(404).json({
          message: "Không tìm thấy sách nào khớp với ID bạn tìm kiếm",
        });
      }
      res.send(data);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/", BookValidate, async (req, res) => {
  try {
    const response = await BookShema.create(req.body);
    if (!response) {
      return res.status(404).json({ message: "Thêm sách mới thất bại" });
    }
    res.send(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/:id", BookValidate, async (req, res) => {
  try {
    if (req.params.id.length < 24) {
      return res
        .status(404)
        .json({ message: "Id bạn tìm kiếm phải ít nhất 24 ký tự" });
    } else if (req.params.id.length > 24) {
      return res
        .status(404)
        .json({ message: "Id bạn tìm kiếm vượt quá 24 ký tự" });
    } else {
      const data = await BookShema.findByIdAndUpdate(req.params.id, req.body);
      if (!data) {
        return res.status(404).json({
          message: "Không tìm thấy sách nào khớp với ID bạn tìm kiếm",
        });
      }
      res.send({ message: "Cập nhập thành công" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    if (req.params.id.length < 24) {
      return res
        .status(404)
        .json({ message: "Id bạn tìm kiếm phải ít nhất 24 ký tự" });
    } else if (req.params.id.length > 24) {
      return res
        .status(404)
        .json({ message: "Id bạn tìm kiếm vượt quá 24 ký tự" });
    } else {
      const data = await BookShema.deleteOne({ _id: req.params.id });
      if (data.deletedCount == 0) {
        return res.status(404).json({
          message: "Không tìm thấy sách nào khớp với ID bạn tìm kiếm",
        });
      }
      res.send({ message: "Xoá thành công" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export default router;
