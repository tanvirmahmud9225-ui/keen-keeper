import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { DataContext } from '../../components/dataContext/DataContext';
import useFriends from '../../components/useFriends/useFriends';
import { HashLoader } from 'react-spinners';

const Stats = () => {
    const { loading } = useFriends()
    const { calls, texts, videos } = useContext(DataContext)
    // #region Sample data
    const data = [
        { name: 'Call', value: calls.length, fill: '#0088FE' },
        { name: 'Text', value: texts.length, fill: '#00C49F' },
        { name: 'Video', value: videos.length, fill: '#FFBB28' },
    ];

    // #endregion

    return (
        <div className='w-9/12 mx-auto pt-20 mb-200'>
            {
                loading ? <HashLoader size={80} color='#5b77d4' className='mx-auto mt-10' /> : <div>
                    <h1 className='text-6xl font-bold mb-10'>Friendship Analytics</h1>
                    <div className='border border-gray-200 shadow-lg flex flex-col justify-center items-center py-5 px-5 rounded-lg'>
                        <div className='w-full'>
                            <h1 className='text-2xl mb-5 '>By Interaction Type</h1>
                        </div>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '40vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                            />

                            <Tooltip />
                            <Legend />

                        </PieChart>
                    </div>
                </div>
            }
        </div>
    );
};

export default Stats;