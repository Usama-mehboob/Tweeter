const bcrpyt = require("bcryptjs");
const userModel = require("../Models/userModel");
const {compare, hash} =require("bcryptjs");
const {sign} = require('jsonwebtoken');
require("dotenv").config();


    // function maxNumArray(arr){
    // max = arr[0]
    // for(i = 1; i <= arr.length; i++){
    //     if(max > arr[i]){
    //         return max
            
    //     }
    // }
    // return arr
    // }
           


module.exports = {
    login :async (body) =>{
        try {
           const user = await userModel.getuserByUsername(body.userName);
            //    console.log("user", user)
           if (user.error || user.responce == null ){
            return{
                error: "Invalid user Credentials"
            }
           }

           body.password = await hash(body.password, 10);

           const isValid = await compare(body.password, user.responce.dataValues.password );
           if (isValid.error){
            return{
                error: "Invalid Credentials"
            }
           }

           delete user.responce.dataValues.password
           const jwt =  sign(user, process.env.SECRET , {expiresIn: "10 h"} );
           return{
            responce: jwt,
            user
           };

           
           
        } catch (error) {
            return{
                error: error.message
            }
        }
        
    }

    // login: async (validate)=>{
    //     try{

    //         validate.password =  await bcrpyt.hash(validate.password, 10)
    //         return{
    //             response: validate,
    //         }
    //         // if (validate.username === "person1" && validate.password == "123456")  
    //     }catch(error){
    //         return{
    //             error: error.message
    //         }
    //     }
    // },


    

    // maxNumArray: async (validate) =>{
    //     try{
    //         validate = await maxNumArray(validate.array)   
    //         console.log(validate)
    //         // const maxvalue = max
    //         return{
    //             maxvalue:validate,
    //             response:validate
    //         }    
    //     }catch(error){
    //         return{
    //             error: error.message
    //         }
    //     }

        
    // },

    // logOut: (validate)=>{
    //     try{
    //         if(validate.username === "person2" && validate.password === "123456"){
    //             return{
    //                 responce: "true"
    //             }
    //         }
    //         return{
    //             responce: "false"
    //         }
    //     }catch(error){
    //         return{
    //             error: error.message
    //         }
    //     }
    // },

    // SignIn: (validate)=>{
    //     try{
    //         if(validate.username == "Sign-In-person" && validate.password == "1234567" && validate.Email == "KS@mail.com"){
    //             return{
    //                 responce: "true sign_In"
    //             }
    //         }
    //         return{
    //             responce: "false  Sign_in"
    //         }
    //     }catch(error){
    //         return{
    //             error: error.message
    //         }
    //     }

    // }
}