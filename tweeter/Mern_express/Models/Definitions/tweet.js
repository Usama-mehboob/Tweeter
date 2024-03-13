const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Tweet extends  Model{};

Tweet.init({
    tweetId : {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    tweetText: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    paranoid:true,
    sequelize
});

module.exports = Tweet;