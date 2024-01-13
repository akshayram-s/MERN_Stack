//asynchronous or non blocking programming
//event-driven

setTimeout(() => {
  console.log("hello 3");
}, Math.ceil(10 * Math.random()));
setTimeout(() => {
  console.log("hello 2");
}, Math.ceil(10 * Math.random()));
setTimeout(() => {
  console.log("hello 1");
}, Math.ceil(10 * Math.random()));
