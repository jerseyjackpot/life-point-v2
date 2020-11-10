let seedfile = require('../db/affirmSeed.json');
const db = require("../models");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lifepoint', {useNewUrlParser: true});
seedfile = seedfile.map( doc => {
    delete doc.id
    return doc;
});
// console.log(seedfile[0]);
for (let i=0; i<seedfile.length; i++){
    db.Affirmation.create(seedfile[i])
.then((data) => {
  console.log(data);
})
}


