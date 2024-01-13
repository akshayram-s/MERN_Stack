const mongoose = require("mongoose");

const answerschema = new mongoose.Schema(
  {
    answer: [{ type: String }],
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    questionid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "questions",
    },
  },
  { timestamps: true }
);

const answermodel = mongoose.model("answer", answerschema);
module.exports = answermodel;
