var fs = require("fs");
var img;
fs.readFile("DOM.png", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
