import express from "express";
import RouterBooks from "./routers/index.js";
import mongoose from "mongoose";
// import morgan from "morgan";
const app = express();
const port = 3000;
// app.use(morgan("combined"));
app.use(express.json());
try {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Web503_NodeJS")
    .then(() => console.log("Connect DB Successfully"));
} catch (error) {
  console.log(`Connect DB Not Successfully`);
}

app.use("/books", RouterBooks);
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
//
