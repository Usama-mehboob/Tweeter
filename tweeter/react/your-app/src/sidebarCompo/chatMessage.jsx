import { useEffect, useState } from "react"
import io from "socket.io-client"
const socket = io.connect("http://localhost:3002")

function ChatMessage(){
    const [message, setMessage] = useState("")
    const [messageReceive, setMessageReceived ] = useState("")
    const [room, setRoom] = useState("")

   const SendMessage =() =>{
    socket.emit("send_message", {message})
   }

   const joinRoom = () =>{
    if(room != ""){
        socket.emit("join_room", room)
    }
   }

   const sendMessage = () =>{
    socket.emit("send_message", {message, room})
   }
   useEffect(()=>{
    socket.on("recieve_message", (data)=>{
        // alert(data.message)
        // Recieve msg from server
       setMessageReceived(data.message)
  
        return ()=>{
            socket.off("connect")
        }
    })
  },[socket])

    return(
    <>
    <div class="max-w-md mx-auto p-4">
         <div class="mb-4">
          <input type="text" placeholder="Enter your Number" class="flex-1 border border-gray-300 p-2 rounded-l-md  text-black " onChange={(event)=>{
                setRoom(event.target.value)
            }} />
            <button class="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={()=>{
                joinRoom()
            }}>Send</button>
        </div>
        <div class="mb-4">
            <p class="font-bold">User Name</p>
        </div>
        
        <div id="chatBody" class="border border-gray-300 p-4 h-48 overflow-y-auto mb-4  text-white ">
            {messageReceive}
        </div>
      
        <div class="flex">
            <input type="text" placeholder="Enter your message" class="flex-1 border border-gray-300 p-2 rounded-l-md  text-black " onChange={(event)=>{
                setMessage(event.target.value)
            }} />
            <button class="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={()=>{
                SendMessage()
            }}>Send</button>
        </div>
    </div>
   
    
    </>
    )
 }

 export default  ChatMessage;