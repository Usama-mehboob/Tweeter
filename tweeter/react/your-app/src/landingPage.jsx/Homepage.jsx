import { BiHomeCircle } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineHashtag } from "react-icons/hi";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdBookmarkAdded } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";

function Home (){
    return(
        <>
     

       <div className="flex container mx-auto h-full bg-black text-white">

             {/* // Sidebar  */}


            <div className="w-[70%]  ">
                <div className="my-4 ">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 m-auto  r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><FaXTwitter /></svg>
                </div>
                <div className="flex justify-end">
                    <ul className="flex flex-col text-2xl space-y-3 px-12 font-bold" >
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "> <span><BiHomeCircle /></span>Home</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "><span><HiOutlineHashtag /></span>Explore</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "><span><IoNotifications /></span>Notification</li>
                        <li className="flex justify-startitems-center gap-3 w-fit   hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "><span><MdBookmarkAdded /></span>Bookmarks</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "><span><TbMessageCircle2Filled /></span>Messages</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "><span><CgProfile /></span>Profile</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "><span><BiHomeCircle /></span>more</li>
                    </ul>
                </div>
            </div>

            {/*  center Pooint */}

            <div className="w-full  border border-white border-y-black">
                <div className="flex p-3 relative">
                    <div className="absolute w-12  h-1 rounded-full bg-blue-700 bottom-0 left-[20%]"></div>
                    <div className="w-1/2 flex justify-center font-bold text-lg">For-you</div>
                    <div className="w-1/2 flex justify-center font-bold text-lg">Following</div>
                    <div className="mx-2 my-2"><span><IoSettingsOutline /></span></div>
                </div>
                <div className="h-[1px] w-full bg-gray-700" />

                <div className="flex gap-4 my-3">
                    <div className="m-2 ">
                        <img className ="border rounded-full" src="https://pbs.twimg.com/profile_images/1771632575930335232/AqwZY4Wl_normal.png" alt="profile" />
                    </div>
                        <div>
                            <input className="w-full h-7 my-5 text-xl bg-black text-white  outline-none" type="text" placeholder="What is happening" />
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
                
            </div>


          {/* //Third */}

            <div className="w-full  ">
                <div className="m-3">
                    <input type="text" className=" w-1/2 rounded-full bg-gray-900  text-white px-4 py-2" placeholder="Search" />
                </div>
                <div className=" w-1/2 m-3 bg-[#16181c] py-5 rounded-xl space-y-3">
                    <h1 className="text-xl font-bold px-3">What's Happening</h1>
                    <div className="p-3 hover:bg-gray-800 cursor-pointer px-3">
                        <div className=" text-sm  text-gray-700">Trending in Pakistan</div>
                        <div className="font-bold">#Orry</div>
                        <div className="text-sm  text-gray-700">23.4k posts of Pakistan</div>
                    </div>
                    <div className="p-3 hover:bg-gray-800 cursor-pointer px-3">
                        <div className=" text-sm  text-gray-700">Trending in Pakistan</div>
                        <div className="font-bold">#PTI</div>
                        <div className="text-sm  text-gray-700">23.4k posts of Pakistan</div>
                    </div>
                    <div className="p-3 hover:bg-gray-800 cursor-pointer px-3">
                        <div className=" text-sm  text-gray-700">For more details</div>
                        <div className="font-bold">#Subscribe</div>
                        <div className="text-sm  text-gray-700">23.4k posts of Pakistan</div>
                    </div>
                </div>
                <div className=" w-1/2 m-3 bg-[#16181c] py-5 rounded-xl space-y-3">
                    <h1 className="text-xl font-bold px-3">Who your'e Looking</h1>
                   
                    <div className="p-3 hover:bg-gray-800  px-3">
                        <div className="font-bold cursor-pointer">#Subscribe</div>
                        <div className="text-sm  text-gray-700">23.4k posts of Pakistan</div>
                    </div>
                        <div className="text-blue-600 underline my-5 px-3">Show more</div>   
                </div>
            </div>
            
        </div>
     
      
        </>
    )
}

export default Home;