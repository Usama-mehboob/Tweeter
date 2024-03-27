const userModel = require("../Models/userModel");
const {v4: uuid} = require("uuid");
const hash = require("bcryptjs")

module.exports = {
    createTweet: async (body) =>{
        try{
            body.roleId = uuid();
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

    createUser : async (body)=>{
        try {
            const Tweet = {
                tweetId : uuid(),
                tweetId: body.tweetId,
            }

            const creatTweet= await userModel.createTweet(Tweet);
                if(creatTweet.error){
                    return{
                        error: creatTweet.error
                    }
                }


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