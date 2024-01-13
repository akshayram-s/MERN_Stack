var mongoose = require("mongoose");
const questionSchema = new mongoose.Schema({
  category: String,
  answer: String,
});
const questions = mongoose.model("Questions", questionSchema);

const userSchema = new mongoose.Schema({
  name: String,
  userID: { type: String, required: true },
  email: String,
  password: String,
  about: String,
});
const users = mongoose.model("Users", userSchema);
module.exports = [questions, users];
