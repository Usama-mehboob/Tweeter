const { Op } = require("sequelize");
const {models} = require("./index");

module.exports = {
    // createRole: async (body)=>{
    //     try{
    //         const role = await models.role.create({...body});
    //         return{
    //             response: role,
    //         }
    //     }catch(error){
    //         return{
    //             error: error.message,
    //         }
    //     }
    // },

    // getRole: async () =>{
    //     try{
    //        const role = await models.role.findAll();
    //         return{
    //             response: role,
    //         }
    //     }catch(error){
    //         return{
    //             error: error.message
    //         }
    //     }
    // },

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
                    {
                        model: models.address,
                        attributes:["addressId", "addressNo"]
                    },
                    {
                        model: models.role,
                        attributes:["roleId", "rolename"]
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