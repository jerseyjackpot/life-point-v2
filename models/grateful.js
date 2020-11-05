const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `grateful` array in User.js
const gratefulSchema = new Schema({
  one:
  {
    type: String,
  },
  two: {
    type: String,
  },
  three: {
    type: String,
  },
  four: {
    type: String,
  },
  five: {
    type: String,
  },
});

const Grateful = mongoose.model("Grateful", gratefulSchema);

module.exports = Grateful;