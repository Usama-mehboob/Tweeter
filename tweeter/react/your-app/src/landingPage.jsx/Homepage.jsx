import { useState } from "react";
import SideBar from "../components/Sidebar";
import MainBar from "../components/mainbar";
import ThirdBar from "../components/thirdbar";
import Home from "../sidebarCompo/home";



function LandingHome (){
    const [options, setOptions ] = useState("MainBar");
    const changeOption = (newOption) =>{
        setOptions(newOption)
    }

    return(
        <>
    
       <div className="flex container mx-auto h-full bg-black text-white">
             {/* <div className="flex w-full h-full "> */}
                 <SideBar changeOption={changeOption}/>
                <Home  option={options}/>
             {/* </div>      */}
                <ThirdBar/>
        </div>  
     </>    
    )
}

export default LandingHome;