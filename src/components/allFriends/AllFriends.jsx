import React from 'react';
import useFriends from '../useFriends/useFriends';
import FriendCard from '../friendsCard/FriendCard';
import { HashLoader } from 'react-spinners';

const AllFriends = () => {

    const { friends, loading } = useFriends()


    return (
        <div>
            {
                loading ? <HashLoader size={80} color='#5b77d4' className='mx-auto mt-10' /> : <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        friends.map((friend, index) => <FriendCard key={index} friend={friend} />)
                    }
                </div>
            }
        </div>
    );
};

export default AllFriends;