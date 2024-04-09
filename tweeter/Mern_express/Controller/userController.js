const userService = require("../service/userService");
const joi = require("joi");

const createTweetSchema = joi.object().keys({
    userName: joi.string().required(),
    // userId: joi.string().required(),
    tweetText:  joi.string()
})

const deleteUserSchema = joi.object().keys({
    userId: joi.string().min(1).required()
})

const updatedUserSchema = joi.object().keys({
    userName: joi.string().required()
})

const getTweetSchema = joi.object().keys({
    rolename: joi.string().required()
})

const deleteTweetSchema = joi.object().keys({
    userId: joi.string().min(1).required()
})

const updatedTweetSchema = joi.object().keys({
    userName: joi.string().required()
})


// const getAllUserchema = joi.object().keys({
//     userName: joi.string().required()
// })


const createUserSchema = joi.object().keys({
    userName: joi.string().required(),
    tweetText:  joi.string(),
    password: joi.string().required(),//pattern(new RegExp("^[a-zA-Z0-9]{3, 30}$")),
    // confirmPassword: joi.ref("password"),
    // address: joi.string().required(),
    // roleId: joi.string().required(),
})

module.exports = {
   createTweet: async (req, res)=>{
       
    try{
        const validate = await createTweetSchema.validateAsync(req.body)
        const tweet = await userService.createTweet(validate);
        if(tweet.error){
            return res.send({
                error: tweet.error
            })
        }
        return res.send({
            response: tweet.response
        })
    }catch(error){
        return res.send({
            error: error.message
        })
    }    
    },


    getTweet: async (req, res)=>{

        try{
            const validate = await getTweetSchema.validateAsync()
            const   tweet = await userService.getTweets(validate);
            console.log(req.user);
            if(tweet.error){
                return res.send({
                    error: tweet.error
                })
            }
            return res.send({
                response: tweet.response,
                user: req.user ?? null
            })
        }catch(error){
            return res.send({
                error: error.message
            })
        }    
    },

    deleteTweet: async (req, res)=>{
        try {
            const validate = await deleteTweetSchema.validateAsync(req.query);
            const deletedTweet = await userService.deleteTweet(validate);
            if (deletedTweet.error){
                return res.send({
                    error: deletedTweet.error
                })
              }
              return res.send({
                response: deletedTweet.response
              })
           
        } catch (error) {
            return res.send({
                error: error.message
            })
        }
    },


    updatedTweet: async (req, res)=>{
        try {
            const validate = await updatedTweetSchema.validateAsync(req.body)
           const updatedTweet = await userService.updatedTweet(validate);
           if (updatedTweet.error){
            return res.send({
                error: updatedTweet.error
            })
          }
          return res.send({
            response: updatedTweet.response
          })
            
        } catch (error) {
            return res.send({
                error: error.message
            })
        }
    },

    createUser: async (req, res)=>{
        try {
            const validate = await createUserSchema.validateAsync(req.body);
            const createUser = await userService.createUser(validate);
            if(createUser.error){
                return res.send({
                    error: createUser.error
                })
            }
            return res.send({
                response:  createUser.response
            })
        } catch (error) {
            return res.send({
                error: error.message
            })   
        }
    },
    getAllUser: async (req, res)=>{
    

        try{
        // const validate = await getAllUserchema.validateAsync()
        // const getUser = await userService.getAllUser(validate);
        const getUser = await userService.getAllUser();
            if(getUser.error){
                return res.send({
                    error: getUser.error
                })
            }
            return res.send({
                response: getUser.response
            })
        }catch(error){
            return res.send({
                error: error.message
            })
        }    
    },
    deleteUser: async (req, res)=>{
        try {
            const validate = await deleteUserSchema.validateAsync(req.query);
            const deletedUser = await userService.deleteUser(validate);
            if (deletedUser.error){
                return res.send({
                    error: deletedUser.error
                })
              }
              return res.send({
                response: deletedUser.response
              })
           
        } catch (error) {
            return res.send({
                error: error.message
            })
        }
    },

    recoverUser: async (req, res)=>{
        try {
           const updatedUser = await userService.recoverUser();
           if (updatedUser.error){
            return res.send({
                error: updatedUser.error
            })
          }
          return res.send({
            response: updatedUser.response
          })
            
        } catch (error) {
            return res.send({
                error: error.message
            })
        }
    },

    updatedUser: async (req, res)=>{
        try {
            const validate = await updatedUserSchema.validateAsync(req.body)
           const updatedUser = await userService.updatedUser(validate);
           if (updatedUser.error){
            return res.send({
                error: updatedUser.error
            })
          }
          return res.send({
            response: updatedUser.response
          })
            
        } catch (error) {
            return res.send({
                error: error.message
            })
        }
    },
}