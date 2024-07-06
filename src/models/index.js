const dbConfig = require("../config/database.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.config.DB, dbConfig.config.USER, dbConfig.config.PASSWORD, {
  host: dbConfig.config.HOST,
  port: dbConfig.config.PORT,
  dialect: dbConfig.config.dialect,

  pool: {
    max: dbConfig.config.pool.max,
    min: dbConfig.config.pool.min,
    acquire: dbConfig.config.pool.acquire,
    idle: dbConfig.config.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./model.js")(sequelize, Sequelize);

module.exports = db;