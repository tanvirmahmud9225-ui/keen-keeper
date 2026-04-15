import React, { useEffect, useState } from 'react';



const useFriends = () => {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data.json')
            const data = await res.json();

            setTimeout(() => {
                setFriends(data)
                setLoading(false)
            }, 200);
        }

        fetchData()
    }, [])


    return { friends, loading }
};

export default useFriends;