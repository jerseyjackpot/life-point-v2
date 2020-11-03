"use strict";
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
// configure index.js to read environment variables to read from a .env file
require('dotenv').config();
console.log(process.env.NODE_ENV);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const sequelize = config.use_env_variable ? new Sequelize(process.env[config.use_env_variable], config) : new Sequelize(config.database, config.username, config.password, config);
let db = {sequelize, Sequelize};
db = fs.readdirSync(__dirname)
  .filter(file => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
  .reduce( (db, file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
    return db;
  }, db);
Object.keys(db).forEach(modelName => {
  db[modelName].associate ? db[modelName].associate(db) : false;
});
module.exports = db;