const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const affirmationSchema = new Schema({
  quote: { type: String }
});
const Affirmation = mongoose.model("Affirmation", affirmationSchema);
module.exports = Affirmation;