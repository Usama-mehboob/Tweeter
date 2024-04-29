const  sequelize = require("../bin/dbConnection");

const USERS = require("./Definitions/users");
const TWEET = require("./Definitions/tweet");
const COMMENT = require('./Definitions/comments');
// const CHAT = require("./Definitions/chat");
// const MessageThread = require("./Definitions/messageThread");
const Notification = require("./Definitions/notification");



//user and tweet relations
USERS.hasMany(TWEET, { foreignKey: 'userId' });
TWEET.belongsTo(USERS, { foreignKey: 'userId' });


//user and comment relation 
// USERS.hasMany(COMMENT, { foreignKey: 'userId' });
// COMMENT.belongsTo(USERS, { foreignKey: 'userId' });

// USERS.hasMany(CHAT, { foreignKey: 'userId' }); 
// CHAT.belongsTo(USERS, { foreignKey: 'userId' });

// MessageThread.hasMany(CHAT, {foreignKey:'messageThreadId'});
// CHAT.belongsTo(MessageThread, {foreignKey:'messageThreadId'});

TWEET.hasMany(Notification, {foreignKe:"tweetId"}); // One tweet can have multiple comments
Notification.belongsTo(TWEET, {foreignKe:"tweetId"}); 


const models = {
    users: USERS,
    tweet: TWEET,
    Comment: COMMENT,
    // chat: CHAT
    Notification: Notification
};

const db ={};
db.sequelize = sequelize;   
models.sequelize = models;


module.exports = {db, models};