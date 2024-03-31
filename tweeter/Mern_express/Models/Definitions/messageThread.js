const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class MessageThread extends  Model{};

MessageThread.init({
    messageThreadId : {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },

    senderId: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    receiverId:{
        type: DataTypes.STRING,
    }
},{
    timestamps: true,
    paranoid:true,
    sequelize
});

module.exports = MessageThread;