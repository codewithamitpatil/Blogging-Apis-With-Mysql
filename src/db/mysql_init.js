
const Sequelize = require('sequelize');

// importing logger
const logger = require('../logger/logger');

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
    },
    logging: (msg) =>{
      logger.info({
        message:msg,
        Function:"db",
        File:"mysql_init.js",
        Purpose: "To print mysql logs",
        })
    },
});


// exports
module.exports = db;