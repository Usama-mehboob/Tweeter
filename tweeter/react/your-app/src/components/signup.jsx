function  Sigup ({setLogin}) {
   
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
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" type="text" placeholder="username" required />   
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                    Password  
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" type="password" placeholder="username" required />      
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                   Confirm Password  
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" type="password" placeholder="username" required /> 
                <label className="text-xl text-gray-600 my-2 fotn-semibold">
                   Role 
                </label>    
                <input className="p-2 border-2 border-gray-300 focus:outline-none rounded-md bg-white" type="text" placeholder="username" required />
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
              <button className=" text-xl bg-gray-600 focus:oultine-none focus-border-transparent">
                   Login
              </button>
            </div>

          </div>

        </div>

       </div>
    
    </>
    );

}

export default Sigup;