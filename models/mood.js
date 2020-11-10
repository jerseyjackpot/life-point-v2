const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema({
  mood: { type: Number },
  medication: { type: Boolean },
  hoursSleep: { type: Number },
  minutesExercise: { type: Number },
  minutesNapping: { type: Number },
  servingsCaffiene: { type: Number },
  servingsAlcohol: { type: Number},
  hoursTV: { type: Number },
  showered: { type: Boolean },
  brushedTeeth: { type: Boolean },
  selfCare: { type: Boolean },
  minutesSocial: { type: Number },
  headache: { type: Boolean },
  nausea: { type: Boolean },
  exhaustion: { type: Boolean },
  insomnia: {type: Boolean },
  appetite: { type: Number },
  menstruation: { type: Boolean }
});

const Mood = mongoose.model("Mood", moodSchema);
module.exports = Mood;