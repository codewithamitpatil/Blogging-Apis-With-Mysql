
const {Sequelize, DataTypes} = require('sequelize');

// import mysql connection
const  sequelize = require('../db/mysql_init');


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

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation

db.author.hasMany(db.post, {
    foreignKey: 'author',
    as: 'author'
})




module.exports = db





// const sequelize = new Sequelize(
//     dbConfig.DB,
//     dbConfig.USER,
//     dbConfig.PASSWORD, {
//         host: dbConfig.HOST,
//         dialect: dbConfig.dialect,
//         operatorsAliases: false,

//         pool: {
//             max: dbConfig.pool.max,
//             min: dbConfig.pool.min,
//             acquire: dbConfig.pool.acquire,
//             idle: dbConfig.pool.idle

//         }
//     }
// )















