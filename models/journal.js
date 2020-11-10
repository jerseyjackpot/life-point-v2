const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  entryText: { type: String },
  date: { type: String, default: Date.now } 
});

const Journal = mongoose.model('Journal', journalSchema);
module.exports = Journal;