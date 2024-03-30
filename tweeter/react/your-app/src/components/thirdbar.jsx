function ThirdBar(){
    return(
    <>

<div className="w-full ">
                <div className="m-3 " >
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
    </>
    )
 }

 export default  ThirdBar;