const mongoose = require("mongoose");
const questionschema = new mongoose.Schema(
  {
    question: { type: String },
    category: { type: String },
    userID: { type: String, unique: true },
  },
  { timestamps: true }
);

const questionmodel = mongoose.model("questions", questionschema);
module.exports = questionmodel;
