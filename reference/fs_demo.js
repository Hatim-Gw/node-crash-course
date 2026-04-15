const fs = require("fs");

const path = require("path");

/*
fs.mkdir(__dirname + "/test", (err) => {
  if (err) throw err;
  console.log("directory created successfully");
});
*/

// create a file and write data to it

fs.writeFile(__dirname + "/test/hello.txt", "hello world test", (error) => {
  if (error) throw error;

  console.log("file created and data written successfully");
  // append data to the file

  fs.appendFile(
    __dirname + "/test/hello.txt",
    "\nExtra data is appended",
    (error) => {
      if (error) throw error;
      console.log("appended data written successfully");
    },
  );
});

//read data from the file

fs.readFile(__dirname + "/test/hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
