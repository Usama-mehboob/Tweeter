const routes = require("express").Router();
const authController = require('../Controller/authController')


routes.post("/login", authController.login)
// routes.post("/max", authController.maxNumArray)
// routes.post("/logOut", authController.logOut)
// routes.post("signIn", authController.signIn)

module.exports = routes;    