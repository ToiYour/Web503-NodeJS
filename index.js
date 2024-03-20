import express from "express";
import RouterBooks from "./routers/index.js";
const app = express();
const port = 3000;
app.use(express.json());
app.use("/books", RouterBooks);
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
//
