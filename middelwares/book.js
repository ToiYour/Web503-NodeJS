import Joi from "joi";
const BookJoi = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Tên là bắt buộc",
    "string.empty": "Tên không được để trống",
  }),
  price: Joi.number().required().min(1000).messages({
    "any.required": "Giá là bắt buộc",
    "number.empty": "Giá không được để trống",
    "number.base": "Giá phải là số",
    "number.min": "Giá phải ít nhất là {#limit}",
  }),
  description: Joi.string().required().messages({
    "any.required": "Mô tả là bắt buộc",
    "string.empty": "Mô tả không được để trống",
  }),
  image: Joi.string().required().messages({
    "any.required": "Hình ảnh là bắt buộc",
    "string.empty": "Hình ảnh không được để trống",
  }),
  author: Joi.string().required().messages({
    "any.required": "Tác giả là bắt buộc",
    "string.empty": "Tác giả không được để trống",
  }),
});
const BookValidate = (req, res, next) => {
  const { error } = BookJoi.validate(req.body, { abortEarly: false });
  if (error) {
    let listError = error?.details.map((e) => e.message);
    res.send({ status: false, message: listError.join(", ") });
  } else {
    next();
  }
};
export default BookValidate;
