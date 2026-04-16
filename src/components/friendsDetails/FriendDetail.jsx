import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../useFriends/useFriends';
import { GridLoader } from 'react-spinners';
import { RiDeleteBinFill } from 'react-icons/ri';
import { FaArchive } from 'react-icons/fa';
import { PiBellSimpleZBold } from 'react-icons/pi';
import { LuPhoneCall, LuVideo } from 'react-icons/lu';
import { MdMessage } from 'react-icons/md';
import { DataContext } from '../dataContext/DataContext';

const FriendDetail = ({ params }) => {

    const { id } = useParams()
    const { friends, loading } = useFriends()
    const { handleCalls, handleText, handleVideos, formateDate } = useContext(DataContext)

    const expectFriends = friends.find(friend => friend.id === parseInt(id));

    // const { name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = expectFriends;







    return (
        <div className='mb-10'>
            {
                loading ? <div className='mt-10 flex justify-center items-center'><GridLoader size={30} color='#5b77d4' className='mx-auto' /></div> :
                    <div className='w-9/12 mx-auto  mt-10 grid grid-cols-1 lg:grid-cols-6 grid-rows-2 justify-between gap-5'>

                        <div className='border border-gray-300 p-5 shadow-lg rounded-xl lg:col-span-2 lg:row-span-2 flex flex-col justify-center'>
                            <div className='flex justify-center items-center mb-2'>
                                <img src={expectFriends.picture} alt="" className='w-30 h-30 rounded-full ' />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-2'>
                                <h1 className='text-xl font-semibold'>{expectFriends.name}</h1>
                                <p className={`text-white badge ${expectFriends.status === "overdue" && "bg-amber-300"} ${expectFriends.status === "almost due" && "bg-amber-700"} ${expectFriends.status === "on-track" && "bg-red-600"}`} >{expectFriends.status}</p>
                                <p className='flex gap-2'>
                                    {
                                        expectFriends.tags.map((tag, index) => <span key={index} className='badge badge-success'>{tag}</span>)
                                    }
                                </p>
                                <p className='text-center text-gray-500 italic'>"{expectFriends.bio}"</p>
                                <p className='text-gray-500'>Preferred: email</p>
                            </div>
                        </div>


                        <div className='lg:col-span-4 grid lg:grid-cols-3 gap-5 '>
                            <div className=' flex justify-center items-center flex-col gap-3 py-3 rounded-xl shadow-lg border border-gray-300'>
                                <h1 className='text-4xl font-bold'>{expectFriends.days_since_contact}</h1>
                                <p className='text-gray-400 text-xl'>Days Since Contact</p>
                            </div>
                            <div className=' flex justify-center items-center flex-col gap-3 py-3 rounded-xl shadow-lg border border-gray-300'>
                                <h1 className='text-4xl font-bold'>{expectFriends.goal}</h1>
                                <p className='text-gray-500 text-xl'>Goal (Days)</p>
                            </div>
                            <div className=' flex justify-center items-center flex-col gap-3 py-3 rounded-xl shadow-lg border border-gray-300'>
                                <h1 className='text-4xl font-bold'>{formateDate}</h1>
                                <p className='text-gray-500 text-xl'>Next Due</p>
                            </div>
                        </div>
                        <div className='shadow-lg border border-gray-200 rounded-xl lg:col-span-4 flex justify-between items-center p-5'>
                            <div className='space-y-3'>
                                <h1 className='text-3xl font-bold'>Relationship Goal</h1>
                                <p className='text-2xl'><span className='text-gray-500'>Connect every</span> <span className='font-bold'>30 days</span></p>
                            </div>
                            <div>
                                <button className='btn'>Edit</button>
                            </div>
                        </div>



                        <div className=' space-y-3 lg:col-span-2 row-span-3'>
                            <div className='border border-gray-300  py-3 shadow-lg rounded-xl flex justify-center'>
                                <p className='flex items-center gap-2 font-bold text-lg'><PiBellSimpleZBold /> <span>Snooze 2 Weeks</span> </p>
                            </div>
                            <div className='border border-gray-300 py-3 shadow-lg rounded-xl flex justify-center'>
                                <p className='flex items-center gap-2 font-bold text-lg'><FaArchive /> <span>Archive</span></p>
                            </div>
                            <div className='border border-gray-300 py-3 shadow-lg rounded-xl flex justify-center'>
                                <p className='flex items-center gap-2 font-bold text-lg'><RiDeleteBinFill /> <span>Delete</span></p>
                            </div>
                        </div>
                        <div className=' bg-base-200 rounded-xl lg:col-span-4  shadow-lg p-5'>
                            <h1 className='text-2xl font-bold mb-4 text-gray-400'>Quick Check-In</h1>
                            <div className='flex flex-wrap gap-5'>
                                <div
                                    onClick={() => handleCalls(expectFriends)}
                                    className='flex-1 flex justify-center items-center flex-col gap-3 py-4 rounded-xl border border-gray-300 cursor-pointer btn h-full'>
                                    <LuPhoneCall className='text-3xl' />
                                    <h1 className='text-3xl font-bold'>Call</h1>
                                </div>
                                <div
                                    onClick={() => handleText(expectFriends)}
                                    className='flex-1 flex justify-center items-center flex-col gap-3 py-4 rounded-xl border border-gray-300 cursor-pointer btn h-full'>
                                    <MdMessage className='text-3xl' />
                                    <h1 className='text-3xl font-bold'>Text</h1>
                                </div>
                                <div
                                    onClick={() => handleVideos(expectFriends)}
                                    className='flex-1 flex justify-center items-center flex-col gap-3 py-4 rounded-xl border border-gray-300 cursor-pointer btn h-full'>
                                    <LuVideo className='text-3xl' />
                                    <h1 className='text-3xl font-bold'>Video</h1>
                                </div>
                            </div>
                        </div>


                    </div>
            }
        </div>
    );
};

export default FriendDetail;