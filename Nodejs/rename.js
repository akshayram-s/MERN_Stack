var fs = require("fs");

fs.rename("myrenamedfile.txt", "renamedfile.txt", function (err) {
  try {
    if (err) throw err;
    else console.log("File Renamed!");
  } catch (err) {
    console.log("Some error occurred!");
    console.log(err);
  }
});
