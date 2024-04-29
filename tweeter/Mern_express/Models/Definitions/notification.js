const {Model, DataTypes} = require("sequelize");
const  sequelize = require("../../bin/dbConnection");


class Notification extends Model {}


Notification.init({
    tweetId : {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    notificationText: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
}, {
    timestamps: true,
    paranoid: true,
    sequelize,
});


module.exports = Notification;

