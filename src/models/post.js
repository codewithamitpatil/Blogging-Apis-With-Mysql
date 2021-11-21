
// exports post model
module.exports = (sequelize, DataTypes) => {

    const Post = sequelize.define("post", {
      
        pid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        }
     
    })

    return Post;

}