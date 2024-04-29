// import { useEffect, useState } from "react";

// function notification({item}){
//     <div className="w-1/4 h-2/6 p-2">
//     <div className="w-full h-full bg-gray-300 shadow-lg p-2">
//         <div className="w-full h-2/6">
//         <p className="text-gray-900 font-normal text-md">{item.userName}</p>
//         <p className="text-gray-900 font-normal text-md">{item.Role.rolename}   </p>
//         <p className="text-gray-900 font-normal text-md">{item.Address.addressNo}</p>
//         </div>
//         <div className="w-full flex justify-end gap-2 self-end items-end">
//             <button className="bg-blue-300" 
//             onClick={()=>{
//                void editProduct()
//             }}>Edit</button>
//             <button className="bg-blue-300" 
//              onClick={()=>{void deleteProduct()}}
//             >Delete</button>
//         </div>
//     </div>
// </div>    
// }

function Notification(){
    // const [noti, setNoti] = useState([  ])
    // const getAllNotification = async () => {
    //     try {
    //         const { data: notification } = await axios.get("http://localhost:3001/user/getAllNotification"); 
    //         setNoti(notification.response);
    //     } catch (error) {
    //         return error("Error getting tweets:", error);
    //     }
    // };

    // useEffect(()=>{
    //     void getAllNotification();
    // }, [])

    return(
    <>
    {/* <div className="h-[calc(100vh - 100px)] overflow-y-auto">
                        <div className="w-full h-1/2 text-white">
                            {noti != null ? (
                                <>
                                    {noti.map((item, index) =>{
                                        // console.log("item", item ,"index", index)
                                    return  < notification item={item} key={index} />
                                     })}
                                </>
                            ):(
                                <>
                                    <p>Notification is not Available</p>
                                </>
                            )
                            }
                        </div>
     </div> */}
    <p>Notification Page</p>
    </>
    )
 }

 export default  Notification;