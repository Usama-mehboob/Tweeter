const routes = require("express").Router();
const userRouter = require("../Controller/userController");


routes.get("/getuser", (req, res) => {
    res.send("Get All user Api");
});



routes.post("/createChat", userRouter.creatChat);
routes.get("/getAllChat", userRouter.getAllChat);
routes.delete("/deleteChat", userRouter.deleteChat);
// routes.put("/updateTweet", userRouter.updatedTweet);





module.exports = routes;

