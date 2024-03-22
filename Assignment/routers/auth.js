import express from "express";
import AuthValidate from "../Joi/auth.js";
import AuthShema from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
router.post("/register", AuthValidate, async (req, res) => {
  try {
    const isEmail = await AuthShema.find({ email: req.body.email });
    console.log(isEmail.length);
    if (isEmail.length === 0) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const data = await AuthShema.create(req.body);
      res.send(data);
    } else {
      res.send({ message: "Email bạn đăng ký đã tồn tại" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
router.post("/login", AuthValidate, async (req, res) => {
  try {
    const user = await AuthShema.findOne({ email: req.body.email });
    if (!user) {
      res.send({ message: "Email bạn chưa đăng ký" });
    } else {
      let isLogin = await bcrypt.compare(req.body.password, user.password);
      if (isLogin) {
        let token = jwt.sign(user.email, "Nguyễn Huy Tới");
        res.send({ message: "Đăng nhập thành công", user: user, token });
      } else {
        res.send({
          message: "Bạn nhập sai mật khẩu rồi bạn cố gắng nhớ lại xem",
        });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
export default router;
