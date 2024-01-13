var fs = require("fs");
fs.writeFile("text3.txt", "Hello Universe!", (err) => {
  if (err) throw err;
  console.log("Saved!");
});
