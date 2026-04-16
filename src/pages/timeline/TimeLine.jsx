import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../components/dataContext/DataContext';
import callImg from "../../assets/call.png"
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import useFriends from '../../components/useFriends/useFriends';
import { FadeLoader } from 'react-spinners';
import { FaChevronDown } from 'react-icons/fa';


const TimeLine = () => {
    const { loading } = useFriends()
    const { calls, texts, videos, timeline, formateDate } = useContext(DataContext)

    const [sortingType, setSortingType] = useState("all");
    console.log(sortingType);
    const allItems = [
        ...calls.map(call => ({ ...call, type: "call" })),
        ...texts.map(text => ({ ...text, type: "text" })),
        ...videos.map(video => ({ ...video, type: "video" }))
    ];

    let filteredList = allItems;
    if (sortingType === "call") {
        filteredList = [...allItems].filter(item => item.type === "call")
    }
    if (sortingType === "text") {
        filteredList = [...allItems].filter(item => item.type === "text")
    }
    if (sortingType === "video") {
        filteredList = [...allItems].filter(item => item.type === "video")
    }
    if (sortingType === "all") {
        filteredList = allItems
    }




    return (
        <div className='mt-20 w-9/12 mx-auto mb-40'>
            <h1 className='text-5xl font-bold mb-5'>Timeline</h1>
            <div className="dropdown dropdown-start mb-8">
                <div tabIndex={0} role="button" className="btn m-1 flex gap-20">Filter Timeline <FaChevronDown /></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-58 p-2 shadow-sm">
                    <li onClick={() => setSortingType("all")}><a>All</a></li>
                    <li onClick={() => setSortingType("call")}><a>Call</a></li>
                    <li onClick={() => setSortingType("text")}><a>Text</a></li>
                    <li onClick={() => setSortingType("video")}><a>Video</a></li>
                </ul>
            </div>
            {

                loading ? <div className='mt-10 flex justify-center items-center'><FadeLoader height={40} margin={20} radius={10} width={10} color='#5b77d4' className='mx-auto' /></div>
                    :
                    timeline.length === 0 ?
                        <div className='border-2 border-gray-400 rounded-xl  py-10 mt-15'>
                            <h1 className='text-center text-4xl font-bold text-gray-500'>No Data Found</h1>
                        </div>
                        : <div className='space-y-4'>
                            {
                                filteredList.map((item, index) => <div key={index} className='flex items-center gap-4 border border-gray-200 rounded-xl shadow-lg p-5 '>
                                    <div>
                                        <img src={item.type === "call" ? callImg : item.type === "text" ? textImg : videoImg} alt="" />
                                    </div>
                                    <div>
                                        <h1><span className='text-xl'>{item.type === "call" ? "Call" : item.type === "text" ? "Text" : "Video"}</span> <span className='text-gray-400 ml-2 font-semibold'>with {item.name}</span></h1>
                                        <p className='text-gray-400 font-medium'>{formateDate}</p>
                                    </div>
                                </div>)
                            }
                        </div>
            }
        </div>
    );
};

export default TimeLine;