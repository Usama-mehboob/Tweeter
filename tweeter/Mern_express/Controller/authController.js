const joi = require("joi");
const authService = require("../service/authService")

const loginSchema = joi.object().keys({
    userName : joi.string().required(),
    password: joi.string().required(),
    // array : joi.array().items()
})


const logOutschema = joi.object().keys({
    username: joi.string().min(5).required(),
    password: joi.number().min(7).required()
})

const signInSchema = joi.object().keys({
    username: joi.string().required,
    password: joi.string().required,
    Email: joi.string().required
})

module.exports = {
    login : async (req, res) => {
        try{
            const validate  = await loginSchema.validateAsync(req.body);
            const loginResponse = await authService.login(validate);
            
            if (loginResponse.error){
                return res.send ({
                    error: loginResponse.error
                });
            }
            // const token = sign(loginResponse.responce, process.env.SECRET, { expiresIn: '1h' });
            res.cookie("Token", loginResponse.responce, {maxAge: 900000000, httpOnly: true})
            console.log('loginResponse.req',loginResponse.req)
            return res.send({
                response: true,
                token: loginResponse.responce,
                user: loginResponse.user,
          
            });
            
        }catch(error){
            return   res.send({
                 error: error.message
             }); 
             
        }
    },
user : async (req,res) => {

}
//     maxNumArray:async(req, res) =>{
//         try{
//             const validate = await loginSchema.validateAsync(req.body)
//             const verifyArray = await authService.maxNumArray(validate)

//             if(verifyArray.error){
//                return res.send({
//                 error: error.message
//                })
//             }

//             return res.send({
//                 reponse: verifyArray.response,
//                 maxvalue:verifyArray.max,
//             })
        
//         }catch(error){
//         return   res.send({
//              message: "error",
//              error: error.message
//          }); 
         
//         }
//     },

//     logOut: async (req, res) =>{
//        try{
//         const validate = await logOutschema.validateAsync(req.body);

//         const logOutResponce =  authService.logOut(validate)

//         if(logOutResponce.error){
//             return res.send({
//                 response: logOutResponce.error
//             }); 
//         }
//        return res.send({
//             data: validate,
//             response: logOutResponce.response
//             // message: "usser is logout",
//             // data: validate
//         });
//        }catch(error){
//         return res.send({
//             message: "error",
//             error: error.message
//         })
//        }
//     },

//     signIn: async (req, res)=>{
//         try{
//             const validate = await signInSchema.validateAsync(req.body);
//             const verifySignIn = authService.SignIn(validate)

//             if(verifySignIn.error){
//                 return res.send({
//                     responce: signIn.error
//                 })
//             }
//             return res.send({
//                 response: signIn.responce
//             })

//         }catch(error){
//             return res.send({
//                 message: "error",
//                 error: error.message
//         })


//     }
// }
}