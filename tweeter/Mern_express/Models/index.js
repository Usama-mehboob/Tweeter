const  sequelize = require("../bin/dbConnection");

const USERS = require("./Definitions/users");
const Tweet = require("./Definitions/tweet");

//relation  datbase connection 
Address.hasOne(USERS, {foreignKey: "addressId"});
USERS.belongsTo(Address, {foreignKey: "addressId"});

Role.hasMany(USERS, {foreignKey: "roleId"});
USERS.belongsTo(Role, {foreignKey: "roleId"});

userCourses.hasMany(USERS, {foreignKey: "userCourseId"});
USERS.belongsTo(userCourses, {foreignKey: "userCourseId"});
userCourses.hasMany(Courses, {foreignKey: "userCourseId"});
Courses.belongsTo(userCourses, {foreignKey: "userCourseId"})


const models = {
    users: USERS,
    tweet: Tweet,
};

const db ={};
db.sequelize = sequelize;   
models.sequelize = models;


module.exports = {db, models};