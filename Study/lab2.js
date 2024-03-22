import express from "express";
const app = express();
const port = 4000;
app.use(express.json());
let products = [
  {
    id: 1,
    title: "An apple mobile which is nothing like apple",
    duration: "12:05",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
  },
  {
    id: 2,
    title: "Samsung Universe 9",
    duration: "10:25",
    thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
  },
  {
    id: 3,
    title: "Samsung Galaxy Book",
    duration: "06:51",

    thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
  },
];
app.get("/videos", (req, res) => {
  const key = req.query.search;
  if (key) {
    const product = products.filter((product) => product.title.includes(key));
    res.send(product || "Sản phẩm không tồn tại với từ khoá bạn tìm kiếm");
  } else {
    res.json(products);
  }
});
app.get("/videos/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === +id);
  res.send(product || "Sản phẩm không tồn tại với ID bạn tìm kiếm");
});
app.post("/videos", (req, res) => {
  products.push(req.body);
  res.send(products);
});
app.listen(port, () => {
  console.log(`Đang chạy với http://localhost:${port}`);
});
