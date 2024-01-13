var fs = require("fs");
var readableStream = fs.createReadStream("text1.txt");
var data = "";
//readable event executes before data event everything else is same.
readableStream.on("readable", function () {
  while ((chunk = readableStream.read()) != null) {
    data += chunk;
  }
});

readableStream.on("end", function () {
  console.log(data);
});
