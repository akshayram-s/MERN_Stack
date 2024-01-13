var fs = require("fs");
function demo(err, data) {
  if (err) throw err;
  else {
    fs.appendFile("text4.txt", data, () => {
      console.log("done");
    });
  }
}
fs.readFile("text1.txt", demo);
fs.readFile("text2.txt", demo);
fs.readFile("text3.txt", demo);
