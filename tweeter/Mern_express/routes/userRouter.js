const routes = require("express").Router();
const userRouter = require("../Controller/userController");
routes.get("/getuser", (req, res) => {
    res.send("Get All user Api");
});

// routes.post("/createRole", userRouter.createRole);
// routes.post("/getRole", userRouter.getRole);
routes.post("/createUser", userRouter.createUser);
routes.get("/getAllUser", userRouter.getAllUser);
routes.delete("/deleteUser", userRouter.deleteUser);
routes.patch("/recoverUser", userRouter.recoverUser);
routes.put("/updateUser", userRouter.updatedUser);

routes.post("/createTweet", userRouter.createTweet);
routes.get("/getAllTweet", userRouter.getTweet);
routes.delete("/deleteTweet", userRouter.deleteTweet);
routes.put("/updateTweet", userRouter.updatedTweet);





module.exports = routes;

// const routes = require("express").Router();

// routes.get("/getuser", (req, res) =>{
//     res.send("Get all user api")
// })

// module.exports = routes;