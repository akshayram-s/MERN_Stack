const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("demo", (name) => {
  console.log("This is callback on demo for", name);
});

setTimeout(() => {
  emitter.emit("demo", "Sachin");
}, Math.ceil(10 * Math.random()));
setTimeout(() => {
  emitter.emit("demo", "Saurav");
}, Math.ceil(10 * Math.random()));
setTimeout(() => {
  emitter.emit("demo", "Rahul");
}, Math.ceil(10 * Math.random()));
