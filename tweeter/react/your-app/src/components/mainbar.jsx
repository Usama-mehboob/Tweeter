import axios from "axios"
import { useEffect, useState } from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";




function Tweets({item}){
    return (
    <div className="w-full">
      <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden m-4">
        <div className="p-4">
          <p className="text-lg text-gray-600  font-bold"> {item.userName}</p>
          <p className="text-sm text-gray-600 mt-2">Tweet Text: {item.tweetText}</p>
          {/* Render other properties as needed */}
        </div>
      </div>
    </div>

      );

}

function MainBar(){
    const [Tweet, setTweets] = useState([]);
    const [tweetText, setTweetText] = useState("");
    const [userData, setUserData] = useState("");
    

    let token = localStorage.getItem("user_token");
    // console.log("Response data local:", token );
   
     
    const fetchUserData = async () => {

      try {
        // token = localStorage.getItem("user_token");
        const response = await axios.get("http://localhost:3001/user/getUserToken",{
            headers: {
                Authorization: `Bearer ${token}`
             },
          });
         setUserData(response.data.response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }

    };
    
    useEffect(() => {
        fetchUserData();  
    }, [token]);
     
    
    
    
    const createTweets = async () => { // Receive userId as an argument
        
            const { data } = await axios.post("http://localhost:3001/user/createTweet",{ userName: userData.userName },{
              headers: {
                  Authorization: `Bearer ${token}`
               },
            });
            console.log("create-tweetafter", data); // Move console.log here
            if(data.error){
                return alert("Unable to create User")
            }
            alert  (" create Tweet SuccessFully")
            // return setLogin(true)
    };  


    const getAlltweets = async () => {
        try {
            token = localStorage.getItem("user_token");
            const { data: Tweets } = await axios.get("http://localhost:3001/user/getAllTweet",{
            headers: {
              Authorization: `Bearer ${token}`
               },
            }); 
            setTweets(Tweets.response);
        } catch (error) {
            console.error("Error getting tweets:", error);
        }
    };

    useEffect(()=>{
        void getAlltweets();
    }, [])


    return(
    <>
     <div className="w-full  border border-white border-y-black">
                    <div className="flex p-3 relative">
                        <div className="absolute w-12  h-1 rounded-full bg-blue-700 bottom-0 left-[20%]"></div>
                        <div className="w-1/2 flex justify-center font-bold text-lg">For-you</div>
                        <div className="w-1/2 flex justify-center font-bold text-lg">Following</div>
                        <div className="mx-2 my-2"><span><IoSettingsOutline /></span></div>
                    </div>
                    <div className="h-[1px] w-full bg-gray-700" />

                    <div className="flex gap-[2rem] my-3">
                        <div className=" px-5 py-2   ">
                            <img className ="border rounded-full" src="https://pbs.twimg.com/profile_images/1771632575930335232/AqwZY4Wl_normal.png"  style={{ width: '45px', height: '45px' }}  alt="profile" />
                        </div>
                         <div>
                            <div className="flex items-center">
                            <input
                                className="w-full h-7 my-5 text-xl bg-black text-white outline-none"
                                type="text"
                                placeholder="What is happening"
                                value={tweetText}
                                onChange={(e) => setTweetText(e.target.value)}
                            />
                                {/* <input className="w-full h-7 my-5 text-xl bg-black text-white  outline-none" type="text" placeholder="What is happening"/> */}
                                <button className="bg-blue-600 px-4 text-xl text-white rounded-full" onClick={()=>{
                                   void  createTweets()
                                   
                                }}>Post</button> 
                            </div>
                            <div className="text-blue-600 flex items-center gap-3">
                            <span className=""><FaGlobeAmericas /></span>
                            <span>Everyone can reply</span>

                        </div>
                        <div className="h-[1px] w-full bg-gray-700" />
                        <div className="flex gap-3 my-2 text-xl text-blue-600">
                            <span className="cursor-pointer"><FaImage /></span>
                            <span className="cursor-pointer"><MdOutlineGifBox /></span>
                            <span className="cursor-pointer"><MdEmojiEmotions /></span>
                        </div>
                        </div>
                    </div>
                    
                <div className="h-[1px] w-full bg-gray-700" />

                <div className="h-[calc(100vh - 100px)] overflow-y-auto">
                        <div className="w-full h-1/2 text-white">
                            {Tweet != null ? (
                                <>
                                    {Tweet.map((item, index) =>{
                                        console.log("item", item ,"index", index)
                                    return  < Tweets item={item} key={index}/>
                                     })}
                                </>
                            ):(
                                <>
                                    <p>Tweets is no Available</p>
                                </>
                            )
                            }
                        </div>
                    </div>
                
            </div>  
    
    </>
    )
 }

 export default  MainBar;