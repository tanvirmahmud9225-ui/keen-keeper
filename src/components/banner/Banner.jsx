import React, { useContext } from 'react';
import useFriends from '../useFriends/useFriends';
import { DataContext } from '../dataContext/DataContext';

const Banner = () => {

    const { friends } = useFriends();
    const { timeline } = useContext(DataContext)



    return (
        <div className='w-9/12 mx-auto'>
            <div className='my-20 text-center space-y-6'>
                <h1 className='lg:text-6xl text-3xl font-bold'>Friends to keep close in your life</h1>
                <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.</p>
                <button className='btn bg-green-900 text-white font-semibold'><span className='text-lg'>+</span> <span className='ml-2'>Add a Friend</span></button>
            </div>
            <div className='my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center py-8  border border-gray-200 shadow-lg rounded-xl space-y-3 cursor-pointer hover:scale-105 ease-linear duration-120'>
                    <h1 className='text-4xl font-bold'>{friends.length}</h1>
                    <p className='text-xl text-gray-500 '>Total Friends</p>
                </div>
                <div className='text-center py-8  border border-gray-200 shadow-lg rounded-xl space-y-3 cursor-pointer hover:scale-105 ease-linear duration-120'>
                    <h1 className='text-4xl font-bold'>3</h1>
                    <p className='text-xl text-gray-500 '>On Track</p>
                </div>
                <div className='text-center py-8  border border-gray-200 shadow-lg rounded-xl space-y-3 cursor-pointer hover:scale-105 ease-linear duration-120'>
                    <h1 className='text-4xl font-bold'>6</h1>
                    <p className='text-xl text-gray-500 '>Need Attention</p>
                </div>
                <div className='text-center py-8  border border-gray-200 shadow-lg rounded-xl space-y-3 cursor-pointer hover:scale-105 ease-linear duration-120'>
                    <h1 className='text-4xl font-bold'>{timeline.length}</h1>
                    <p className='text-xl text-gray-500 '>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;