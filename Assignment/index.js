import express from "express";
import mongoose from "mongoose";
import RouterBook from "./routers/book.js";
import RouterAuth from "./routers/auth.js";
const app = express();
const port = 3000;
app.use(express.json());
try {
  mongoose.connect("mongodb://127.0.0.1:27017/Assignment");
  console.log("Connect DB Succsessfully");
} catch (error) {
  console.log("Connect DB  False");
}
app.use("/posts", RouterBook);
app.use("/auth", RouterAuth);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
