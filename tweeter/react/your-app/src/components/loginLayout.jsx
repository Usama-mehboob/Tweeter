import { useState } from "react";
import axios from "axios";



function  Login ({setLogin}) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const login = async() =>{
    // console.log("userName", userName);
    // console.log("password", password);
    const {data} = await axios.post("http://localhost:3001/authUser/login", {
      userName,
      password,
    });
    console.log("useranem", userName, "passwoed", password)
    localStorage.setItem('user_token',data.token);
    // console.log("data-yser", data, "username", userName )
    if(<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      
    </body>
    </html>data){
      return alert("Invalid Credientials")
    }
    return alert("Logged in successfully")

  }

   
    return(
    <>
       <div className="w-full h-full flex justify-center">
        <div className="w-1/4 h-full py-4 flex items-center ">
          <div className="w-full h-3/5 bg-white rounded-md"> 
            <div className="flex h-1/5 justify-center"> 
                <h1 className="text-gray-600 font-semibold flex justify" > Login</h1>
            </div>
            <div className="h-3/5 flex flex-col p-4 ">
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                    UserName  
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" 
                type="text" placeholder="userName" required 
                onChange={(event) =>{
                  setUserName(event.target.value)
                }} />   
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                    Password  
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" 
                type="password" placeholder="password" required 
                onChange={(event)=>{
                    setPassword(event.target.value)
                  
                }}/>  
                <p className="bg-black-600">
                  {"Don't have an account ?"} <span className="hover: text-blue-700 hover:underline cursor-pointer "
                    onClick={() =>{
                      setLogin(false)
                    }}
                  >
                    Go to Signup</span>
                </p>          
            </div>
            <div className="flex justify-center" >
              <button className=" text-xl bg-gray-600 focus:oultine-none focus-border-transparent" onClick={login}>
                   Login
              </button>
            </div>

          </div>

        </div>

       </div>
    </> 
    );

}

export default Login;