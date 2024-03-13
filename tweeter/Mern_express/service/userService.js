const userModel = require("../Models/userModel");
const {v4: uuid} = require("uuid");
const hash = require("bcryptjs")

module.exports = {
    createRole: async (body) =>{
        try{
            body.roleId = uuid();
           const role = await userModel.createRole(body);
           if(role.error){
            return{
                error: role.error,
            }
           }
           return{
            response: role.response
           }
        }catch(error){
            return {
                error: error.message
            }
        }
    },

    getRole: async ()=>{
        try{
          const role = await userModel.getRole();
          if (role.error){
            return{
                error: role.error
            }
          }
          return{
            response: role.response
          }
        }catch(error){
           return{
            error: error.message
           }
        }
    },

    createUser : async (body)=>{
        try {
            const address = {
                addressId : uuid(),
                address: body.address,
            }

            const creatAddress = await userModel.creatAddress(address);
                if(creatAddress.error){
                    return{
                        error: creatAddress.error
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
                roleId: body.roleId,
                addressId: address.addressId
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