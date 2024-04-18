const userModel = require("../Models/userModel");
const {v4: uuid} = require("uuid");
const hash = require("bcryptjs")

module.exports = {

    //Create tweet
    createTweet: async (body) =>{
        try{
            body.tweetId = uuid();
           const createdTweet = await userModel.createTweet(body);
           if(createdTweet.error){
            return{
                error: createdTweet.error,
            }
           }
           return{
            response: createdTweet.response
           }
        }catch(error){
            return {
                error: error.message
            }
        }
    },

    

    getTweets: async ()=>{
        try{
          const gettweet = await userModel.getTweet();
          if (gettweet.error){
            return{
                error: gettweet.error
            }
          }
          return{
            response: gettweet.response
          }
        }catch(error){
           return{
            error: error.message
           }
        }
    },

    deleteTweet: async (query)=>{
        try {
            const deletedTweet = await userModel.deleteTweet(query.userId);
            if (deletedTweet.error){
                return{
                    error: deletedTweet.error
                }
              }
              return{
                response: deletedTweet.responce
              }
           
        } catch (error) {
            return{
                error: error.message
            }
        }
    },

    updatedTweet: async (body)=>{
        try {
           const updatedtweet = await userModel.updatetweet(body, body.userId);
           if (updatedtweet.error){
            return{
                error: updatedtweet.error
            }
          }
          return{
            response: updatedtweet.responce
          }
            
        } catch (error) {
            return{
                error: error.message
            }
        }
    },


        // Create Chat 
    createChat: async (body) =>{
        try{
            body.userId = uuid();
           const createdChat = await userModel.createChat(body);
           if(createdChat.error){
            return{
                error: createdChat.error,
            }
           }
           return{
            response: createdChat.response
           }
        }catch(error){
            return {
                error: error.message
            }
        }
    },

    

    getAllChat: async ()=>{
        try{
          const getAllThread = await userModel.getAllThread();
          if (getAllThread.error){
            return{
                error: getAllThread.error
            }
          }
          return{
            response: getAllThread.response
          }
        }catch(error){
           return{
            error: error.message
           }
        }
    },

    deleteChat: async (query)=>{
        try {
            const deletedChat = await userModel.deleteChat(query.userId);
            if (deletedChat.error){
                return{
                    error: deletedChat.error
                }
              }
              return{
                response: deletedChat.responce
              }
           
        } catch (error) {
            return{
                error: error.message
            }
        }
    },

     // Create Thread

    createThread : async (body) =>{
        try{
            body.userId = uuid();
           const createdThread = await userModel.createThread(body);
           if(createdThread.error){
            return{
                error: createdThread.error,
            }
           }
           return{
            response: createdThread.response
           }
        }catch(error){
            return {
                error: error.message
            }
        }
    },

    

    getAllThread: async ()=>{
        try{
          const getAllThread = await userModel.getAllThread();
          if (getAllThread.error){
            return{
                error: getAllThread.error
            }
          }
          return{
            response: getAllThread.response
          }
        }catch(error){
           return{
            error: error.message
           }
        }
    },

    deleteThread: async (query)=>{
        try {
            const deletedThread = await userModel.deleteThread(query.userId);
            if (deletedThread.error){
                return{
                    error: deletedThread.error
                }
              }
              return{
                response: deletedThread.responce
              }
           
        } catch (error) {
            return{
                error: error.message
            }
        }
    },

    //Create User

    createUser : async (body)=>{
        try {
            const Tweet = {
                tweetId : uuid(),
                tweet: body.tweetId,
            }
            console.log("tweet", Tweet)

            const creatTweet= await userModel.createTweet(Tweet);
                if(creatTweet.error){
                    return{
                        error: creatTweet.error
                    }
                }
                console.log("tweet", creatTweet)


            const isUser = await userModel.getuserByUsername(body.userName);
            if(isUser.error || isUser.responce){
                return{
                    error: "User with this userName already exist",
                };
            }
                
            const user = {
                userId: uuid(),
                userName: body.userName,
                password: body.password, 
                // roleId: body.roleId,
                tweetId: Tweet.tweetId
            }

            const createUser = await userModel.creatUser(user)
            if(createUser.error){
                return{
                    error: createUser.error,
                }
            }
            delete createUser.responce.dataValues.password;
            return{
                response: createUser.responce
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },

    getAllUser: async ()=>{
        try{
          const getAllUser = await userModel.getAllUser();
          if (getAllUser.error){
            return{
                error: getAllUser.error
            }
          }
          return{
            response: getAllUser.responce
          }
        }catch(error){
            return{
                error: error.message
            }
        }
    },
    deleteUser: async (query)=>{
        try {
            const deletedUser = await userModel.deleteUser(query.userId);
            if (deletedUser.error){
                return{
                    error: deletedUser.error
                }
              }
              return{
                response: deletedUser.responce
              }
           
        } catch (error) {
            return{
                error: error.message
            }
        }
    },

    recoverUser: async ( )=>{
        try {
           const updatedUser = await userModel.recoverUser();
           if (updatedUser.error){
            return{
                error: updatedUser.error
            }
          }
          return{
            response: updatedUser.responce
          }
            
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
    updatedUser: async (body)=>{
        try {
           const updatedUser = await userModel.updateUser(body, body.userId);
           if (updatedUser.error){
            return{
                error: updatedUser.error
            }
          }
          return{
            response: updatedUser.responce
          }
            
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
}