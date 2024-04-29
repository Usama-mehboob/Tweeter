import { BiHomeCircle } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { HiOutlineHashtag } from "react-icons/hi";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdBookmarkAdded } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";



function SideBar({changeOption}){
    return(
    <>

<div className="w-1/3  ">
                <div className="my-4 ">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-9 m-auto  r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><FaXTwitter /></svg>
                </div>
                <div className="flex items-end flex-col">
                    <ul className="flex flex-col text-2xl space-y-3 px-12 font-bold" >
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full" onClick={()=>{
                           changeOption("MainBar") 
                        }}> <span><BiHomeCircle /></span>Home</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full " onClick={()=>{
                            changeOption("Explore")
                        }}><span><HiOutlineHashtag /></span>Explore</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full " onClick={()=>{
                            changeOption("Notification")
                        }}><span><IoNotifications /></span>Notification</li>
                        <li className="flex justify-startitems-center gap-3 w-fit   hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full " onClick={()=>{
                            changeOption("")
                        }}><span><MdBookmarkAdded /></span>Bookmarks</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full " onClick={()=>{
                            changeOption("Message")
                        }}><span><TbMessageCircle2Filled /></span>Messages</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full "onClick={()=>{
                            changeOption("Profile")
                        }} ><span><CgProfile /></span>Profile</li>
                        <li className="flex justify-start items-center gap-3 w-fit  hover:bg-gray-800 hover: cursor-pointer px-5 py-2 hover: rounded-full " onClick={()=>{
                            changeOption("")
                        }}><span><BiHomeCircle /></span>more</li>
                        <li>
                            <div className="w-full text-center my-2">
                                <button className="bg-blue-600 px-9 text-2xl text-white rounded-full">Post</button>
                            </div>
                        </li>
                    </ul>
                   
                </div>
            </div>
    </>
    )
 }

 export default  SideBar;