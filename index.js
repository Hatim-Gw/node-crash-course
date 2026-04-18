const http = require("http");
const path = require("path");
const fs = require("fs");

const httpServer = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     (err, content) => {
  //       if (err) throw err;

  //       res.setHeader("Content-Type", "text/html");
  //       res.end(content);
  //     },
  //   );
  // }
  // if (req.url === "/api/users") {
  //   const users = [{ name: "hatim, age: 25" }, { name: "John, age: 30" }];

  //   res.setHeader("Content-Type", "application/json");
  //   res.end(JSON.stringify(users));
  // }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url,
  );
  let extname = path.extname(filePath);
  //checking content type
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "content-type": "text/html" });
            res.end(content, "utf8");
          },
        );
      }
    } else {
      res.writeHead(200, { "content-type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5050;

httpServer.listen(PORT, () => {
  console.log(`server is running on port ${PORT} ...`);
});
