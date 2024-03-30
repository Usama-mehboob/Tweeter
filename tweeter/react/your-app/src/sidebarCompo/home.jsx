import MainBar from "../components/mainbar";
import Explore from "./explore";
import Message from "./message";

 function Home({option}){
    return(
    <>

        <div className="w-full">
           {option == "MainBar" && <MainBar/>} 
           {option == "Explore" && <Explore/>} 
           {option == "Message" && <Message/>} 
        </div>
    </>
    )
 }

 export default  Home;