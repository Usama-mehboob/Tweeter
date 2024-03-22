import axios from "axios";
import { useEffect, useState } from "react";
import Select  from "react-select";

function  Sigup ({setLogin}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const [address, setAddress] = useState("");
    // const [roleId, setRoleId] = useState("");   
    // const [roles, setRoles] = useState("");

    // const getRoles = async  () =>{
    //   const {data} = await axios.get("http://localhost:3001/user/getRole");
    //   if(data.error){
    //     return alert ("No Roles exit")
    //   }
        
    //   let  roleDropDown = []

    //   data.response.map((roles)=>{
    //     const roleValues = {
    //       label: roles.rolename,
    //       value: roles.roleId   
    //     }
    //     console.log(roles)
    //     roleDropDown.push(roleValues);
    //   })
    //   console.log(data.response)
    //   setRoles(roleDropDown);
    // }

    const sigup = async () =>{
      const {data} = await axios.post("http://localhost:3001/user/createUser",  {
        userName, password,
      }, 
      // {
      //   withCredentials: true
      // }
      )
      console.log(data)
        if(data.error){
          return alert  ("Unable to create User")
        }
        alert  (" create User SuccessFully")
         return setLogin(true)
    }
    // useEffect(()=>{
    //   void getRoles();
    // }, [])

    return(
    <>
     <div className="w-full h-full flex justify-center">
        <div className="w-1/4 h-full py-4 flex items-center ">
          <div className="w-full h-5/5 py-4 bg-white rounded-md"> 
            <div className="flex h-1/6 justify-center"> 
                <h1 className="text-gray-600 font-semibold">Sign up</h1>
            </div>
            <div className="h-4/6 flex flex-col p-4 ">
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                    Username  
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" type="text" placeholder="username" required 
                onChange={(e) =>{
                  setUserName(e.target.value)
                }}/>   
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                    Password  
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" type="password" placeholder="password" required
                onChange={(e) =>{
                  setPassword(e.target.value)
                }} />      
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                  Confirm Password 
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" type="password" placeholder="address" required 
                //  onChange={(e) =>{
                //   setAddress(e.target.value)}}
                /> 
                {/* <label className="text-xl text-gray-600 my-2 fotn-semibold">
                   Role 
                </label>    
                <Select className="rounded-md w-64 text-gray-500 focus: outline-none "
                 isSearchable ={true} 
                 options={roles}
                 onChange = {(selectedOption)=>{
                  setRoleId(selectedOption.value)
                 }}
                 placeholder="Select role" /> */}
                <p className="bg-black-600">
                  {"Already have an account ?"} <span className="hover: text-blue-700 hover:underline cursor-pointer "
                    onClick={() =>{
                      setLogin(true)
                    }}
                  >
                    Go to LogIn</span>
                </p>                
            </div>
            <div className="  h-1/6  flex justify-center items-end  ">
              <button 
              disabled={!(userName, password)}
              className=" text-xl bg-gray-600 focus:oultine-none focus-border-transparent"
              onClick={()=>{
                void sigup()
              }}>
                 Sign Up
              </button>
            </div>

          </div>

        </div>

       </div>
    
    </>
    );

}

export default Sigup;