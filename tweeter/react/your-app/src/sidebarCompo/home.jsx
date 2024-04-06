import MainBar from "../components/mainbar";
import Explore from "./explore";
import Message from "./message";
import Profile from "./profile";

 function Home({option}){
    return(
    <>
        <div className="w-full">
           {option == "MainBar" && <MainBar/>} 
           {option == "Explore" && <Explore/>} 
           {option == "Message" && <Message/>} 
           {option == "Profile" && <Profile/>}
        </div>
    </>
    )

 }

 export default  Home;