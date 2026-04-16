const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`Called Listener: ${data.id}: ${data.msg}`);
});

logger.log("hello imit");
