
const {Sequelize, DataTypes} = require('sequelize');

// importing logger
const logger = require('../logger/logger');

// import mysql connection
const  sequelize = require('../db/mysql_init');


// import config
const { resync } = require('../config/index');

sequelize.authenticate()
.then(() => {
    console.log('connected..')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.author = require('./author.js')(sequelize, DataTypes)
db.post = require('./post.js')(sequelize, DataTypes)


db.sequelize.sync({ force: resync})
.then(() => {
  
    logger.info({
        message:`yes re-sync done!`,
        Function:"sync()",
        File:"models/index.js",
        Purpose: "To check mysql is started  or not",
    });

});


// 1 to Many Relation

db.author.hasMany(db.post, {
    foreignKey: 'author',
    as: 'author'
})

// exports
module.exports = db







