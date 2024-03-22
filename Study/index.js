import express from "express";
import cors from "cors";
import "dotenv/config";
import ConnectDB from "./database/connect.js";
import ProductRouter from "./routes/products.js";
ConnectDB();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/products", ProductRouter);
app.listen(port, () => {
  console.log(`Listen on port http://localhost:${port}`);
});
