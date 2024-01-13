var fs = require("fs");
fs.appendFile("text3.txt", "Hello Galaxy!", (err) => {
  if (err) throw err;
  console.log("Saved!");
});
