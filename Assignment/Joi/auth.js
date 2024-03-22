import joi from "joi";
const Auth = joi.object({
  name: joi.string().required().messages({
    "any.required": "Tên là bắt buộc",
    "string.empty": "Tên không được bỏ trống",
  }),
  email: joi.string().email().required().messages({
    "any.required": "Tên là bắt buộc",
    "string.email": "Không đúng định dạng email",
    "string.empty": "Tên không được bỏ trống",
  }),
  password: joi.string().required().messages({
    "any.required": "Tên là bắt buộc",
    "string.empty": "Tên không được bỏ trống",
  }),
});
const AuthValidate = (req, res, next) => {
  const { error } = Auth.validate(req.body, { abortEarly: false });
  if (error) {
    const Errors = error.details.map((e) => e.message);
    return res.status(404).json({ message: Errors });
  }
  next();
};
export default AuthValidate;
