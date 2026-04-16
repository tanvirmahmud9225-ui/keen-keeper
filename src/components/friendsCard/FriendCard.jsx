import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {

    const { id, name, picture, days_since_contact, status, tags } = friend;


    return (
        <Link to={`/friendsDetails/${id}`} className='border border-gray-300 p-5 shadow-lg rounded-3xl hover:scale-105 ease-linear duration-120'>
            <div className='flex justify-center items-center'>
                <img src={picture} alt="" className='w-30 h-30 rounded-full ' />
            </div>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-gray-500'>{days_since_contact}d ago</p>
                <p className='flex gap-2'>
                    {
                        tags.map((tag, index) => <span key={index} className='badge badge-success'>{tag}</span>)
                    }
                </p>
                <p className={`text-white badge ${status === "overdue" && "bg-amber-300"} ${status === "almost due" && "bg-amber-700"} ${status === "on-track" && "bg-red-600"}`} >{status}</p>
            </div>
        </Link>
    );
};

export default FriendCard;