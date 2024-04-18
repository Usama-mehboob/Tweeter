const routes = require("express").Router();
const userRouter = require("../Controller/userController");


routes.get("/getuser", (req, res) => {
    res.send("Get All user Api");
});


routes.post("/createThread", userRouter.createThread);
routes.get("/getAllThread", userRouter.getAllThread);
routes.delete("/deleteThread", userRouter.deleteThread);
// routes.put("/updateTweet", userRouter.updatedTweet);


module.exports = routes;

