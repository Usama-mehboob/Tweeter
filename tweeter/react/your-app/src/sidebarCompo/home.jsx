import MainBar from "../components/mainbar";
import ChatRoom from "./ChatRoom";
import Explore from "./explore";
import Profile from "./profile";

 function Home({option}){
    return(
    <>
        <div className="w-full">
           {option == "MainBar" && <MainBar/>} 
           {option == "Explore" && <Explore/>} 
           {option == "Message" && <ChatRoom/>} 
           {option == "Profile" && <Profile/>}
        </div>
    </>
    )

 }

 export default  Home;