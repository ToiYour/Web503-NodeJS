import Joi from "joi";
const BookJoi = Joi.object({
  name: Joi.string().required().empty().messages({
    "any.required": "Tên không để trống",
    "string.required": "Tên không đúng định dạng",
  }),
  price: Joi.number().required().empty().min(1000).messages({
    "any.required": "Giá không để trống",
    "number.required": "Giá không đúng định dạng",
  }),
  description: Joi.string().required().empty().messages({
    "any.required": "Mô tả không để trống",
    "string.required": "Mô tả không đúng định dạng",
  }),
  image: Joi.string().required().empty().messages({
    "any.required": "Hình ảnh không để trống",
    "string.required": "Hình ảnh không đúng định dạng",
  }),
  author: Joi.string().required().empty().messages({
    "any.required": "Tác giả không để trống",
    "string.required": "Tác giả không đúng định dạng",
  }),
});
const BookValidate = (req, res, next) => {
  const { error } = BookJoi.validate({ ...req.body });
  if (error) {
    res.send({ status: false, message: error?.details[0]?.message });
    console.log();
  } else {
    next();
  }
};
export default BookValidate;
