const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    blog: { type: Schema.Types.ObjectId, ref: "Blog" },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
//Export model
module.exports = mongoose.model("Comment", commentSchema);
