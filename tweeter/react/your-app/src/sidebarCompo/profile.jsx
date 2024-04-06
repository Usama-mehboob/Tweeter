import { IoMdArrowRoundBack } from "react-icons/io";


function Profile(){
    return(
    <>
    <div className="w-[50%]"> 
        
        <div >

        <div className="flex items-center">
            <div className="p-2 rounded-full hover:bg-gray-300">
                <IoMdArrowRoundBack/>
            </div>
            <div>
                <h1 className="text-xl">Usama</h1>
                <p>10 Posts</p>

            </div>
        </div>

            <img src="https://media.istockphoto.com/id/1366634948/nl/foto/background-of-confetti-in-the-air-celebration-in-the-city.jpg?s=612x612&w=0&k=20&c=v0VvlpqzqKtW4KDwQAibrpmgwdtlVLEFASpWag6c9bk=" alt="Banner" />
        </div>
    </div> 
    </>
    )
 }

 export default  Profile;