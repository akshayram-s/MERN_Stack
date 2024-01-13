var fs = require("fs");
fs.readFile("text1.txt", (err, data) => {
  if (err) {
    console.log("Some error occurred!");
  } else {
    console.log(data.toString());
  }
});
