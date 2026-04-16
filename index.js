const http = require("http");
const path = require("path");
const fs = require("fs");

const httpServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world");
  }
});

const PORT = process.env.PORT || 5050;

httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT} ...`);
});
