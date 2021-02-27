const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);
//Export model
module.exports = mongoose.model("Blog", blogSchema);
