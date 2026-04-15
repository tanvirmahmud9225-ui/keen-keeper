import React, { useContext } from 'react';
import { DataContext } from '../../components/dataContext/DataContext';
import callImg from "../../assets/call.png"
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import useFriends from '../../components/useFriends/useFriends';
import { FadeLoader } from 'react-spinners';


const TimeLine = () => {
    const { loading } = useFriends()
    const { calls, texts, videos } = useContext(DataContext)
    const timeline = [...calls, ...texts, ...videos]






    return (
        <div className='mt-20 w-9/12 mx-auto mb-900'>
            <h1 className='text-5xl font-bold mb-5'>Timeline</h1>
            {

                loading ? <div className='mt-10 flex justify-center items-center'><FadeLoader height={40} margin={20} radius={10} width={10} color='#5b77d4' className='mx-auto' /></div>
                    :
                    timeline.length === 0 ?
                        <div className='border-2 border-gray-400 rounded-xl  py-10 mt-15'>
                            <h1 className='text-center text-4xl font-bold text-gray-500'>No Data Found</h1>
                        </div>
                        : <div className='space-y-4'>
                            {
                                calls.map((call, index) => <div key={index} className='flex items-center gap-4 border border-gray-200 rounded-xl shadow-lg p-5 '>
                                    <div>
                                        <img src={callImg} alt="" />
                                    </div>
                                    <div>
                                        <h1><span className='text-xl'>Call</span> <span className='text-gray-400 ml-2 font-semibold'>with {call.name}</span></h1>
                                        <p className='text-gray-400 font-medium'>March, 19, 2026</p>
                                    </div>
                                </div>)
                            }
                            {
                                texts.map((text, index) => <div key={index} className='flex items-center gap-4 border border-gray-200 rounded-xl shadow-lg p-5 '>
                                    <div>
                                        <img src={textImg} alt="" />
                                    </div>
                                    <div>
                                        <h1><span className='text-xl'>Text</span> <span className='text-gray-400 ml-2 font-semibold'>with {text.name}</span></h1>
                                        <p className='text-gray-400 font-medium'>March, 19, 2026</p>
                                    </div>
                                </div>)
                            }
                            {
                                videos.map((video, index) => <div key={index} className='flex items-center gap-4 border border-gray-200 rounded-xl shadow-lg p-5 '>
                                    <div>
                                        <img src={videoImg} alt="" />
                                    </div>
                                    <div>
                                        <h1><span className='text-xl'>Video</span> <span className='text-gray-400 ml-2 font-semibold'>with {video.name}</span></h1>
                                        <p className='text-gray-400 font-medium'>March, 19, 2026</p>
                                    </div>
                                </div>)
                            }
                        </div>
            }
        </div>
    );
};

export default TimeLine;