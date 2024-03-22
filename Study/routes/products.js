import express from "express";
import Products from "../models/products.js";
import ProductValidate from "../middlewares/products-joi.js";
const router = express.Router();
router.get("/", async (req, res) => {
  const products = await Products.find();
  res.status(200).json(products);
});
router.post("/", ProductValidate, async (req, res) => {
  Products.create(req.body).then((products) => res.send(products));
});
router.delete("/:id", (req, res) => {
  Products.deleteOne({ _id: req.params.id }).then((data) => res.send(data));
});
router.put("/:id", async (req, res) => {
  await Products.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Update thành công" });
});
export default router;
