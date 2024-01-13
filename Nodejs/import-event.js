const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("demo", () => {
  console.log("This is a callback function");
});
emitter.emit("demo");
emitter.emit("demo");
/*
1)lightweight single threaded
2)event driven
3)we perform multitasking in node.js using asynchronous programming
*/
