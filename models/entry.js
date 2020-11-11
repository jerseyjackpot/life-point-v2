const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    
        mood: { type: Number, required: true },
        medication: { type: Boolean },
        hoursSleep: { type: Number },
        minutesExercise: { type: Number },
        minutesNapping: { type: Number },
        servingsCaffeine: { type: Number },
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
        menstruation: { type: Boolean },

    
        gratefulEntryOne:
        {
          type: String,
        },
        gratefulEntryTwo: {
          type: String,
        },
        gratefulEntryThree: {
          type: String,
        },
        gratefulEntryFour: {
          type: String,
        },
        gratefulEntryFive: {
          type: String,
        },

        journalEntry: { type: String },
        journalEntryDate: { type: Date, default: Date.now }, 
        userId: {type: Schema.Types.ObjectId},


        remember: [
            { type: String }
        ]
 
});

const Entry = mongoose.model("Entry", EntrySchema);
module.exports = Entry;