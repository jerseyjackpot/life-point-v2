const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  entry: { type: String },
  date: { type: String }
});

const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;