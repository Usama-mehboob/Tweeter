const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class CHAT extends  Model{};

CHAT.init({
    ChatId : {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    senderId: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    chatText: {
        type: DataTypes.STRING,
        // allowNull: false
    }
},{
    timestamps: true,
    paranoid:true,
    sequelize
});

module.exports = CHAT;