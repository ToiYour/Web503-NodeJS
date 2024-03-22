import Joi from "joi";
const ProductsJoi = Joi.object({
  name: Joi.string().required().empty().messages({
    "any.required": "Tên không để trống",
    "string.required": "Tên không đúng định dạng",
  }),
  age: Joi.number().required().empty().min(1).messages({
    "any.required": "Tuổi không để trống",
    "number.required": "Tuổi không đúng định dạng",
  }),
  gender: Joi.string().required().empty().min(1).messages({
    "any.required": "Giới tính không để trống",
    "string.required": "Giới tính không đúng định dạng",
  }),
});
const ProductValidate = (req, res, next) => {
  const { error } = ProductsJoi.validate(req.body, { abortEarly: false });
  if (error) {
    res.send({ status: false, message: error });
  } else {
    next();
  }
};
export default ProductValidate;
