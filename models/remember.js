const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Model for the "remember to" table
// module.exports = function(sequelize, DataTypes) {
//   const Remember = sequelize.define("Remember", {
//     one: { type: DataTypes.STRING },
//     two: { type: DataTypes.STRING },
//     three: { type: DataTypes.STRING },
//     four: { type: DataTypes.STRING },
//     five: { type: DataTypes.STRING }
//   });
//     // Remember is associated with the journal it is submitted with
//   Remember.associate = function(models) {
//     Remember.belongsTo(models.Journal, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };
//   return Remember;
// };


const rememberSchema = new Schema({
  one: { type: String },
  two: { type: String },
  three: { type: String },
  four: { type: String },
  five: { type: String },  
});

const Remember = mongoose.model("Remember", rememberSchema);
module.exports = Remember