const userService = require("../service/userService");
const joi = require("joi");

const createRoleSchema = joi.object().keys({
    rolename: joi.string().required()
})

const deleteUserSchema = joi.object().keys({
    userId: joi.string().min(1).required()
})

const updatedUserSchema = joi.object().keys({
    userName: joi.string().required()
})

const getRoleSchema = joi.object().keys({
    rolename: joi.string().required()
})

// const getAllUserchema = joi.object().keys({
//     userName: joi.string().required()
// })


const createUserSchema = joi.object().keys({
    userName: joi.string().required(),
    password: joi.string().required(),//pattern(new RegExp("^[a-zA-Z0-9]{3, 30}$")),
    // confirmPassword: joi.ref("password"),
    address: joi.string().required(),
    roleId: joi.string().required(),
})

module.exports = {
   createRole: async (req, res)=>{
    const validate = await createRoleSchema.validateAsync(req.body)
    const role = await userService.createRole(validate);

    try{
        if(role.error){
            return res.send({
                error: role.error
            })
        }
        return res.send({
            response: role.response
        })
    }catch(error){
        return res.send({
            error: error.message
        })
    }    
    },
    getRole: async (req, res)=>{

        try{
            const validate = await getRoleSchema.validateAsync()
            const   role = await userService.getRole(validate);
            if(role.error){
                return res.send({
                    error: role.error
                })
            }
            return res.send({
                response: role.response
            })
        }catch(error){
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