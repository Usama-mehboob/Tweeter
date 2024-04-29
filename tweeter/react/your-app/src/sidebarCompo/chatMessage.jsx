// import { useEffect, useState } from "react"
// import io from "socket.io-client"
// const socket = io.connect("http://localhost:3002")

// function ChatMessage(){
//     const [message, setMessage] = useState("")
//     const [messageReceive, setMessageReceived ] = useState("")
//     const [room, setRoom] = useState("")

// //    const SendMessage =() =>{
// //     socket.emit("send_message", {message})
// //    }

//    const joinRoom = () =>{
//     if(room != ""){
//         socket.emit("join_room", room)
//     }
//    }

//    const SendMessage = () =>{
//     socket.emit("send_message", {message, room})
//    }
//    useEffect(()=>{
//     socket.on("recieve_message", (data)=>{
//         // alert(data.message)
//         // Recieve msg from server
//        setMessageReceived(data.message)
  
//         return ()=>{
//             socket.off("connect")
//         }
//     })
//   },[socket])

//     return(
//     <>
//     <div class="max-w-md mx-auto p-4">
//          <div class="mb-4">
//           <input type="text" placeholder="Enter your Number" class="flex-1 border border-gray-300 p-2 rounded-l-md  text-black " onChange={(event)=>{
//                 setRoom(event.target.value)
//             }} />
//             <button class="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={()=>{
//                 joinRoom()
//             }}>Send</button>
//         </div>
//         <div class="mb-4">
//             <p class="font-bold">User Name</p>
//         </div>
        
//         <div id="chatBody" class="border border-gray-300 p-4 h-48 overflow-y-auto mb-4  text-white ">
//             {messageReceive}
//         </div>
      
//         <div class="flex">
//             <input type="text" placeholder="Enter your message" class="flex-1 border border-gray-300 p-2 rounded-l-md  text-black " onChange={(event)=>{
//                 setMessage(event.target.value)
//             }} />
//             <button class="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={()=>{
//                 SendMessage()
//             }}>Send</button>
//         </div>
//     </div>
   
    
//     </>
//     )
//  }

//  export default  ChatMessage;
import { useEffect, useState } from "react";
import io from "socket.io-client";
// Specify the path to socket.io explicitly
const socket = io("http://localhost:3002");

function ChatMessage() {
    const [message, setMessage] = useState("");
    const [messageReceive, setMessageReceived] = useState("");
    const [room, setRoom] = useState("");

    // useEffect(() => {
        

    //     // Event listeners for socket.io events
    //     socket.on("connect", () => {
    //         console.log("Connected to socket.io server");
    //     });

    //     socket.on("disconnect", () => {
    //         console.log("Disconnected from socket.io server");
    //     });

    //     socket.on("recieve_message", (data) => {
    //         setMessageReceived(data.message);
    //     });

    //     return () => {
    //         // Clean up event listeners when component unmounts
    //         socket.disconnect();
    //     };
    // }, []); // Empty dependency array ensures the effect runs only once on component mount

    const sendMessage = () => {
        socket.emit("send_message", { message, room });
    };

    const joinRoom = () => {
        if (room !== "") {
            socket.emit("join_room", room);
        }
    };

    return (
        <>
            <div className="max-w-md mx-auto p-4">
                <div className="mb-4">
                    <input type="text" placeholder="Enter room name" className="flex-1 border border-gray-300 p-2 rounded-l-md text-black" onChange={(event) => setRoom(event.target.value)} />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={joinRoom}>Join</button>
                </div>
                <div className="mb-4">
                    <p className="font-bold">User Name</p>
                </div>
                <div id="chatBody" className="border border-gray-300 p-4 h-48 overflow-y-auto mb-4 text-white">
                    {messageReceive}
                </div>
                <div className="flex">
                    <input type="text" placeholder="Enter your message" className="flex-1 border border-gray-300 p-2 rounded-l-md text-black" onChange={(event) => setMessage(event.target.value)} />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </>
    );
}

export default ChatMessage;
