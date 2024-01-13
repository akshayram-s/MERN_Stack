const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const [questions, users] = require("./schemas");
const jsonParser = bodyParser.json();
var app = express();
app.use(jsonParser);
mongoose
  .connect("mongodb://127.0.0.1:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
//Create
// const question = new userSchema({
//   category: "React",
//   answer: "React is used in front end",
// });
// question.save();
// const user = new users({
//   name: "Saurav",
//   userID: "saurav123",
//   email: "saurav@icc.com",
//   password: "hello",
//   about: "",
// });
// user.save();

//Read
/*async function start() {
  const users1 = await users.findOne(
    { userID: "sachin123" },
    "name userID email"
  );
  console.log(
    "%s %s is a %s.",
    JSON.stringify(users1.name),
    JSON.stringify(users1.userID),
    JSON.stringify(users1.email)
  );
}*/
// start();
// async function start() {
//   var all = await users.find({});
//   console.log(JSON.stringify(all));
// }

/*Update();
async function Update() {
  const res = await users.updateOne({ name: "Rahul" }, { password: "rahul90" });
}*/

// Delete();
// async function Delete() {
//   product = await users.deleteOne({ name: "Saurav" });
// }
