const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class COMMENT extends  Model{};

COMMENT.init({
    // tweetId : {
    //     primaryKey: true,
    //     type: DataTypes.STRING(255),
    // },
    commentText: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true,
    paranoid:true,
    sequelize
});

module.exports = COMMENT;