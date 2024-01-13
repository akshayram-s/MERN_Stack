var fs = require("fs");
var readableStream = fs.createReadStream("text1.txt");
var data = "";

readableStream.on("data", function (chunk) {
  data += chunk;
});

readableStream.on("end", function () {
  console.log(data);
});
