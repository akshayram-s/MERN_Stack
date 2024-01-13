var fs = require("fs");

//Delete the file mynewfile2.txt:
fs.unlink("text5.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
