const {verify} = require("jsonwebtoken")
const jwt = require('jsonwebtoken');
require("dotenv").config()


module.exports ={
    midlleWare : async (req, res, next) =>{
        try {
            if(req.cookies.Token == undefined || null){
                return res.send({
                    error: "Unauthorized Person due to token is empty "
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
    },

    authMiddleware : (req, res, next) => {
        // Get the JWT token from the request headers or cookies
        let token = req.headers.authorization || req.cookies.Token;
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized: No token provided' });
        }
        token = token.split('Bearer')[1].trim();
        // console.log(token);
        try {
            // Decode the token
            const decodedToken = jwt.verify(token, process.env.SECRET);
            console.log('decodedToken',decodedToken);
            // Attach the user data to the request object
            req.user = decodedToken.responce;
    
            // Move to the next middleware
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
    }
}   