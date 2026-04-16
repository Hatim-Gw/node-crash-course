const http = require("http");

http
  .createServer((req, res) => {
    res.write("hello world");
    res.end();
  })
  .listen(5050, () => {
    console.log("server is running ...");
  });
