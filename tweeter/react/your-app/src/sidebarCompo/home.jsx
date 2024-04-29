import MainBar from "../components/mainbar";
import ChatRoom from "./ChatRoom";
import Explore from "./explore";
import Profile from "./profile";
import  Notification from "./notification";

 function Home({option}){
    return(
    <>
        <div className="w-full">
           {option == "MainBar" && <MainBar/>} 
           {option == "Explore" && <Explore/>} 
           {option == "Message" && <ChatRoom/>} 
           {option == "Profile" && <Profile/>}
           {option == "Notification" && <Notification/>}
        </div>
    </>
    )

 }

 export default  Home;