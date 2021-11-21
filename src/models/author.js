
// exports author model
module.exports = (sequelize, DataTypes) => {

    const Author = sequelize.define("author", {
 
        aid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
     
    })

    return Author;

}