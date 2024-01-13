const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userID: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    about: { type: String },
    category: [{ type: String }],
  },
  { timestamps: true }
);
const usersmodel = mongoose.model("Users", userSchema);
module.exports = usersmodel;
