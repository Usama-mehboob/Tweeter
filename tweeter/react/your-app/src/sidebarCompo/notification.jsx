import axios from 'axios'
import { useEffect, useState } from "react";

function MapNotification({item}){
    
 console.log("item", item) 
   return(
    <>
    <div className="w-full h-auto p-2 bg-white rounded-lg shadow-lg my-4">
    <div className="p-4 flex justify-between items-center">
        <p className="text-gray-900 font-semibold text-lg">{item.notificationText}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Reply</button>
    </div>
</div>

   </>
   )   
}

function Notification(){
    const [noti, setNoti] = useState([  ])
    const getAllNotification = async () => {
        try {
            const { data: notification } = await axios.get("http://localhost:3001/user/getAllNotification"); 
            setNoti(notification.response);
        } catch (error) {
            return error("Error getting tweets:", error);
        }
    };

    useEffect(()=>{
        void getAllNotification();
    }, [])

    return(
    <>
     <div className="h-[calc(100vh - 100px)] overflow-y-auto">
                        <div className="w-full h-1/2 text-white">
                            {noti != null ? (
                                <>
                                    {noti.map((item, index) =>{
                                        // console.log("item", item ,"index", index)
                                    return  < MapNotification item={item} key={index} />
                                     })}
                                </>
                            ):(
                                <>
                                    <p>Notification is not Available</p>
                                </>
                            )
                            }
                        </div>
     </div> 
    {/* <p>Notification Page</p> */}
    </>
    )
 }

 export default  Notification;