const fs = require("fs");
var writeableStream = fs.createWriteStream("text2.txt");
for (let i = 0; i < 10; i++) {
  writeableStream.write(
    "\nThis is demo file to test writable stream which is used to write to a file."
  );
}
writeableStream.end();
