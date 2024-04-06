import { useState } from "react";
import SideBar from "../components/Sidebar";
import MainBar from "../components/mainbar";
import ThirdBar from "../components/thirdbar";
import Home from "../sidebarCompo/home";
// import { ScrollView } from "react-native";



function LandingHome (){
    const [options, setOptions ] = useState("MainBar");
    const changeOption = (newOption) =>{
        setOptions(newOption)
    }

    return(
        <>
    
       <div className="flex container mx-auto h-full bg-black text-white">
                 <SideBar changeOption={changeOption}/>
                  <Home  option={options}/>
                 <ThirdBar/>

                 {/* <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <div className="flex container mx-auto h-full bg-black text-white">
                      
                        <Home option={options} />
                       
                    </div>
                </ScrollView>
                <ThirdBar /> */}
        </div>  
     </>    
    )
}

export default LandingHome;