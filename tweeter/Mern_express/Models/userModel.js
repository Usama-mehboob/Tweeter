const { Op } = require("sequelize");
const {models} = require("./index");

module.exports = {
    createTweet: async (body)=>{
        try{
            const tweet = await models.tweet.create({...body});
            return{
                response: tweet,
            }
        }catch(error){
            return{
                error: error.message,
            }
        }
    },

    getTweet : async () =>{
        try{
           const tweet = await models.tweet.findAll();
            return{
                response: tweet,
            }
        }catch(error){
            return{
                error: error.message
            }
        }
    },

    deleteTweet: async (userId)=>{
        try {
            const deletedTweet = await models.tweet.destroy({
                // This is and operator if you want check both condition then use it 
                // where: {
                //     userId:  1,
                //     userName: "user1"
                // }
                where: {
                    userId:  userId,
                }
            })
            return{
                responce: deletedTweet,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
    updatetweet: async (body, userId)=>{
        try {
           const updatedTweet = await models.users.update({
            ...body,
           },
           {
            where:{
               userId: userId,
            },
           });
            return{
                responce: updatedTweet,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },

    // creatAddress: async (body)=>{
    //     try {
    //         const creatAddress = await models.address.create({...body})
    //         return{
    //             responce: creatAddress,
    //         }
    //     } catch (error) {
    //         return{
    //             error: error.message,
    //         }
    //     }
    // },


    creatUser: async (body)=>{
        try {
            const creatUser = await models.users.create({...body})
            return{
                responce: creatUser,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
    getuserByUsername: async (userName) =>{
        try {
           const user = await models.users.findOne({
            where:{
                userName :  userName,
            }
           });
            return{
                responce: user,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
    getAllUser: async ()=>{
        try {
            const getAllUser = await models.users.findAll({
                // This code is use for when you dont show some data like password and other you can see below 
                // attributes:{
                //     attributes:["userId", "userName"],
                //     exclude:["password", "createdAt"     ]
                // },
                attributes:["userId", "userName"],
                include:[
                    // {
                    //     model: models.address,
                    //     attributes:["addressId", "addressNo"]
                    // },
                    {
                        model: models.tweet,
                        attributes:["tweetId", "tweetText"]
                    }
                ]
            })
            return{
                responce: getAllUser,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
    // getuserByUsername: async (userName) =>{
    //     try {
    //        const user = await models.users.findOne({
    //         where:{
    //             userName :  userName,
    //         }
    //        });
    //         return{
    //             responce: user,
    //         }
    //     } catch (error) {
    //         return{
    //             error: error.message
    //         }
    //     }
    // },

    deleteUser: async (userId)=>{
        try {
            const deletedUser = await models.users.destroy({
                // This is and operator if you want check both condition then use it 
                // where: {
                //     userId:  1,
                //     userName: "user1"
                // }
                where: {
                    userId:  userId,
                }
            })
            return{
                responce: deletedUser,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
    recoverUser: async ( )=>{
        try {
           const updatedUser = await models.users.update({
            deletedAt : null,
           },
           {
            where:{
                deletedAt: {
                    [Op.ne]: null,
                },
            },
                paranoid: false
           });
            return{
                responce: updatedUser,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },

    updateUser: async (body, userId)=>{
        try {
           const updatedUser = await models.users.update({
            ...body,
           },
           {
            where:{
               userId: userId,
            },
           });
            return{
                responce: updatedUser,
            }
        } catch (error) {
            return{
                error: error.message
            }
        }
    },
    
}