const  sequelize = require("../bin/dbConnection");

const USERS = require("./Definitions/users");
const TWEET = require("./Definitions/tweet");
const COMMENT = require('./Definitions/comments');
const CHAT = require("./Definitions/chat");
const MessageThread = require("./Definitions/messageThread");


//user and tweet relations
USERS.hasMany(TWEET, { foreignKey: 'userId' });
TWEET.belongsTo(USERS, { foreignKey: 'userId' });


//user and comment relation 
USERS.hasMany(COMMENT, { foreignKey: 'userId' });
COMMENT.belongsTo(USERS, { foreignKey: 'userId' });

USERS.hasMany(CHAT, { foreignKey: 'userId' }); 
CHAT.belongsTo(USERS, { foreignKey: 'userId' });

MessageThread.hasMany(CHAT, {foreignKey:'messageThreadId'});
CHAT.belongsTo(MessageThread, {foreignKey:'messageThreadId'});




const models = {
    users: USERS,
    tweet: TWEET,
    Comment: COMMENT,
    chat: CHAT
};

const db ={};
db.sequelize = sequelize;   
models.sequelize = models;


module.exports = {db, models};