const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: crypto.randomUUID(), msg });
  }
}

// module.exports = Logger;

const logger = new Logger();

logger.on("message", (data) => {
  console.log(`Called Listener: ${data.id}: ${data.msg}`);
});

logger.log("hello imit");
