const http = require("http");
server = http.createServer((req, res) => {
  console.log(`Ứng dụng đang chạy với port 3000`);
});
server.listen(3000);
