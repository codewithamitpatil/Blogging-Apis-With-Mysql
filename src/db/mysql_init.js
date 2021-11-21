
const Sequelize = require('sequelize');

// imorting config
const { dbName ,host ,dbUser ,dbPass } = require('../config');

const db = new Sequelize(dbName,dbUser,dbPass,{
    dialect:'mysql',
    host :host,
    port:3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


// exports
module.exports = db;