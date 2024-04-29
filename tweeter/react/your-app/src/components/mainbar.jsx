import axios from "axios"
import { useEffect, useState } from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { FaThumbsUp, FaHeart, FaLaugh } from "react-icons/fa";




function Tweets({item, userData, updateTweetList}){
    // console.log("item", item)
    const [commentText, setCommentText] = useState(""); // Define commentText state variable here
    const [reactions, setReactions] = useState({ like: 0, love: 0 });


    const deleteTweet = async () =>{
        const {data} = await axios.delete("http://localhost:3001/user/deleteTweet", {
            params:{
                userId: userData.userId,
            },
        })
        console.log("data", data)
        alert("user Tweet deleted")
        if(data.error || !data.response){
            return console.log(" Unable to delete products")
        }
        return updateTweetList();
    }
    
    const handleReaction = (reactionType) => {
        // Update the count of the reaction
        setReactions((prevReactions) => ({
            ...prevReactions,
            [reactionType]: prevReactions[reactionType] + 1,
        }));
    };

    const handleComment = async (tweetId) => {
        // Implement your comment creation logic here
        console.log("Comment:", commentText, "for Tweet ID:", tweetId);
        // Reset comment text
        setCommentText("");
    };


    return (
        <div className="w-full">
        <div className="min-height: 100px;">
            <div style={{ minHeight: '150px' }} className="max-w-lg bg-white shadow-md rounded-lg overflow-hidden m-4">
                <div className="p-4 flex flex-col">
                    <p className="text-lg text-gray-600 font-bold">{userData.userName}</p>
                    <div>
                        <p className="text-sm text-gray-600 mt-2">
                            <span className="text-lg font-bold"> Tweet Text:</span> {item.tweetText}
                        </p>
                    </div>
                    {/* Reaction and comment section */}
                    <div className="flex items-center justify-between mt-4">
                        {/* Reaction button */}
                        <div className="flex items-center space-x-2">
                            <button
                                className="flex items-center justify-center w-8 h-8 bg-gray-200  text-black rounded-full"
                                onClick={() => handleReaction('like')}
                            >
                                <FaThumbsUp />
                                <span className="ml-1">{reactions.like}</span>
                            </button>
                            <button
                                className="flex items-center justify-center w-8 h-8 bg-gray-200 text-black rounded-full"
                                onClick={() => handleReaction('love')}
                            >
                                <FaHeart />
                                <span className="ml-1">{reactions.love}</span>
                            </button>
                          <button   className="flex items-center justify-center w-13 h-8 bg-red-500 text-white rounded-full"
                              onClick={() => deleteTweet()} >
                                delete 
                          </button>
                        </div>
                        {/* Comment input */}
                        <div className="flex items-center">
                            <input
                                className="w-full h-7 text-sm bg-gray-200 text-black rounded-md px-2 outline-none"
                                type="text"
                                placeholder="Add a comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <button
                                className="ml-2 bg-blue-600 px-2 py-1 text-white rounded-md text-sm"
                                onClick={() => handleComment(item.id)} // Pass tweet ID here
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                    {/* Comments section */}
                    <div className="mt-2">
                        {/* Render comments here */}
                        {/* For example, render comments from item.comments */}
                        {item.comments && item.comments.map((comment, index) => (
                            <div key={index} className="text-sm text-gray-600 mt-1">{comment}</div>
                        ))}
                    </div>
                </div>
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
  
    const fetchUserData = async () => {

      try {
        // token = localStorage.getItem("user_token");
        const response = await axios.get("http://localhost:3001/user/getUserToken",{
            headers: {
                Authorization: `Bearer ${token}`
             },
            });
            setUserData(response.data.response);
        //   console.log("responseData", response.data.response)
        //   console.log("responseData", response.data.response.userName)
        //   console.log("responseData", response.data.response.userId)
        } catch (error) {
            console.error("Error fetching user data:", error);
      }
      
    };
    
    useEffect(() => {
        fetchUserData();  
    }, [token]);
    
    
    
    
    const createTweets = async () => { // Receive userId as an argument
        await fetchUserData();
        console.log("responseData 1", userData)

            const { data } = await axios.post("http://localhost:3001/user/createTweet",{ userName: userData.userName, tweetText: tweetText },{
            });
            console.log("create-tweetafter", data); // Move console.log here
            if(data.error){
                return alert("Unable to create Tweet")
            }
            alert  (" create Tweet SuccessFully")
            setTweetText("");
            setTweets(prevTweets => [data.response, ...prevTweets]);
            void getAlltweets()
            // setTweets(prevTweets => [data.response, ...prevTweets]);
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
            return error("Error getting tweets:", error);
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
                                        // console.log("item", item ,"index", index)
                                    return  < Tweets item={item} key={index} userData={userData} updateTweetList={getAlltweets}/>
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