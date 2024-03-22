import joi from "joi";
const BookJoi = joi.object({
  title: joi.string().required().messages({
    "any.required": "Tên là bắt buộc",
    "string.empty": "Tên không được  bỏ trống",
  }),
  description: joi.string().required().messages({
    "any.required": "Mô tả là bắt buộc",
    "string.empty": "Mô tả không được  bỏ trống",
  }),
  image: joi.string().required().messages({
    "any.required": "Ảnh là bắt buộc",
    "string.empty": "Ảnh không được  bỏ trống",
  }),
  author: joi.string().required().messages({
    "any.required": "Tác giá là bắt buộc",
    "string.empty": "Tác giá không được  bỏ trống",
  }),
  category: joi.string().required().messages({
    "any.required": "Loại sách là bắt buộc",
    "string.empty": "Loại sách không được  bỏ trống",
  }),
});
const BookValidate = (req, res, next) => {
  const { error } = BookJoi.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((e) => e.message);
    return res.status(404).json({ message: Errors });
  }
  next();
};
export default BookValidate;
