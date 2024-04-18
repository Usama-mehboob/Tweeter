// import { useEffect } from "react";
// import {io} from "socket.io-client"
import ChatMessage from "./chatMessage";

// const socket = io("http://localhost:3001");

function ChatRoom(){
    // useEffect(()=>{
    //     socket.on("connect", ()=>{
    //         // Recieve msg from server
    //         socket.on("welcome", (data) =>{
    //             console.log("msg from server", data)
    //         })
    //         // sending msg to the server 
    //         socket.emit('msg', "Thaks for connection");

    //         return ()=>{
    //             socket.off("connect")
    //         }
    //     })
    // },[])
    return(
    <>
    {/* <p>message {supabase}</p> */}
        
        <ChatMessage/>
    
    </>
    )
 }

 export default  ChatRoom;