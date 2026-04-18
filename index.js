const http = require("http");
const path = require("path");
const fs = require("fs");

const httpServer = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;

        res.setHeader("Content-Type", "text/html");
        res.end(content);
      },
    );
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) throw err;

        res.setHeader("Content-Type", "text/html");
        res.end(content);
      },
    );
  }
});

const PORT = process.env.PORT || 5050;

httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT} ...`);
});
