const Sequelize = require('sequelize');
const dbConfig = require('../config/config.json');
const env = "dev";
const db = dbConfig[env];

const sequelize = new Sequelize(
    db.database,
    db.username,
    db.password,
    db.dialectInfo,
);

const dbs = {};
dbs.Sequelize = Sequelize;
dbs.sequelize = sequelize;
dbs.employee = require('../models/employee')(sequelize, Sequelize);


module.exports = dbs;