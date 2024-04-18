require("dotenv").config();
const {Sequelize} = require("sequelize")
const mysql = require('mysql');
    
const database = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    port : process.env.DB_PORT,
    host : process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
});


// console.log(database);

database.authenticate().then((value)=>{
    console.log("Connect with database", value)
}).catch((error) =>{
    console.log('Db Error there',error.message)
});


module.exports = database;  