const userService = require("../service/userService");
const joi = require("joi");

    // Tweet Schema 

    const createTweetSchema = joi.object().keys({
        userName: joi.string().required(),
        // userId: joi.string().required(),
        tweetText:  joi.string()
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

    //Create Chat Schema 

    const createChatSchema = joi.object().keys({
        // userName: joi.string().required(),
        userId: joi.string().required(),
        chatText:  joi.string()
    })


    const getAllChatSchema = joi.object().keys({
        rolename: joi.string().required()
    })

    const deleteChatSchema = joi.object().keys({
        userId: joi.string().min(1).required()
    })

   //Create Thread Schema 

   const createThreadSchema = joi.object().keys({
    userName: joi.string().required(),
    // userId: joi.string().required(),
    tweetText:  joi.string()
    })


    const getAllThreadSchema = joi.object().keys({
        rolename: joi.string().required()
    })

    const deleteThreadSchema = joi.object().keys({
        userId: joi.string().min(1).required()
    })

    
    //User Schema 

    const createUserSchema = joi.object().keys({
        userName: joi.string().required(),
        tweetText:  joi.string(),
        password: joi.string().required(),//pattern(new RegExp("^[a-zA-Z0-9]{3, 30}$")),
       
    })

    const deleteUserSchema = joi.object().keys({
        userId: joi.string().min(1).required()
    })
    
    const updatedUserSchema = joi.object().keys({
        userName: joi.string().required()
    })

    // const getAllUserchema = joi.object().keys({
        //     userName: joi.string().required()
        // })
    
module.exports = {

    //Creat Tweet 

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

    // Create Chat 

    creatChat: async (req, res)=>{
       
        try{
            const validate = await createChatSchema.validateAsync(req.body)
            const chat = await userService.createChat(validate);
            console.log("chat", chat)
            if(chat.error){
                return res.send({
                    error: chat.error
                })
            }
            return res.send({
                response: chat.response
            })
        }catch(error){
            return res.send({
                error: error.message
            })
        }    
        },
    
    
        getAllChat : async (req, res)=>{
    
            try{
                const validate = await getAllChatSchema.validateAsync()
                const   chat = await userService.getAllChat(validate);
                // console.log(req.user);
                if(chat.error){
                    return res.send({
                        error: chat.error
                    })
                }
                return res.send({
                    response: chat.response,
                    user: req.user ?? null
                })
            }catch(error){
                return res.send({
                    error: error.message
                })
            }    
        },
    
        deleteChat: async (req, res)=>{
            try {
                const validate = await deleteChatSchema.validateAsync(req.query);
                const deletedChat = await userService.deleteChat(validate);
                if (deletedChat.error){
                    return res.send({
                        error: deletedChat.error
                    })
                  }
                  return res.send({
                    response: deletedChat.response
                  })
               
            } catch (error) {
                return res.send({
                    error: error.message
                })
            }
        },
    
    
      //Create Thread

      createThread: async (req, res)=>{
       
        try{
            const validate = await createThreadSchema.validateAsync(req.body)
            const Thread = await userService.createThread(validate);
            if(Thread.error){
                return res.send({
                    error: Thread.error
                })
            }
            return res.send({
                response: Thread.response
            })
        }catch(error){
            return res.send({
                error: error.message
            })
        }    
        },
    
    
        getAllThread: async (req, res)=>{
    
            try{
                const validate = await getAllThreadSchema.validateAsync()
                const   thread = await userService.getAllThread(validate);
                // console.log(req.user);
                if(thread.error){
                    return res.send({
                        error: thread.error
                    })
                }
                return res.send({
                    response: thread.response,
                    user: req.user ?? null
                })
            }catch(error){
                return res.send({
                    error: error.message
                })
            }    
        },
    
        deleteThread: async (req, res)=>{
            try {
                const validate = await deleteThreadSchema.validateAsync(req.query);
                const deletedThread = await userService.deleteThread(validate);
                if (deletedThread.error){
                    return res.send({
                        error: deletedThread.error
                    })
                  }
                  return res.send({
                    response: deletedThread.response
                  })
               
            } catch (error) {
                return res.send({
                    error: error.message
                })
            }
        },
    
    //Create User 

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
    getUser: async (req, res)=>{
    

        try{
        // const validate = await getAllUserchema.validateAsync()
        // const getUser = await userService.getAllUser(validate);
        const getUser = req.user;
            // if(getUser.error){
            //     return res.send({
            //         error: getUser.error
            //     })
            // }
            return res.send({
                response: getUser
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