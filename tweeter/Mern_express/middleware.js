const {verify} = require("jsonwebtoken")
require("dotenv").config()


module.exports ={
    midlleWare : async (req, res, next) =>{
        try {
            if(req.cookies.Token == undefined || null){
                return res.send({
                    error: "Unauthorized Person"
                })
            }

            verify (req.cookies.Token, process.env.SECRET , (error, user)=>{
                if (error){
                    return res.send({
                        error: "Unauthorized Person"
                    })
                }
                next();
            } )
        } catch (error) {
            return res.send({
                error: error.message
            })
        }
    }
}