const  sequelize = require("../bin/dbConnection");

const USERS = require("./Definitions/users");
const TWEET = require("./Definitions/tweet");
const COMMENT = require('./Definitions/comments')


//user and tweet relations
USERS.hasMany(TWEET, { foreignKey: 'userId' });
TWEET.belongsTo(USERS, { foreignKey: 'userId' });


//user and comment relation 
USERS.hasMany(COMMENT, { foreignKey: 'userId' });
COMMENT.belongsTo(USERS, { foreignKey: 'userId' });



const models = {
    users: USERS,
    tweet: TWEET,
    Comment: COMMENT
};

const db ={};
db.sequelize = sequelize;   
models.sequelize = models;


module.exports = {db, models};