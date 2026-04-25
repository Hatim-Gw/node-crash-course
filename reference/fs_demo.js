const fs = require("fs").promises;
const path = require("path");

const testDir = path.join(__dirname, "test");
const filePath = path.join(testDir, "hello.txt");

const runFsDemo = async () => {
  try {
    await fs.mkdir(testDir, { recursive: true });
    console.log("directory created successfully");

    await fs.writeFile(filePath, "hello world test");
    console.log("file created and data written successfully");

    await fs.appendFile(filePath, "\nExtra data is appended");
    console.log("appended data written successfully");

    const data = await fs.readFile(filePath, "utf8");
    console.log(data);

    await fs.unlink(filePath);
    console.log("file deleted successfully");

    await fs.rm(testDir);
    console.log("directory deleted successfully");
  } catch (err) {
    console.error("Filesystem demo failed:", err.message);
  }
};

runFsDemo();
