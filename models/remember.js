const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rememberSchema = new Schema({
  one: { type: String },
  two: { type: String },
  three: { type: String },
  four: { type: String },
  five: { type: String },
});

const Remember = mongoose.model("Remember", rememberSchema);
module.exports = Remember