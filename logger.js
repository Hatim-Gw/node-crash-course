const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: crypto.randomUUID(), msg });
  }
}

module.exports = Logger;
