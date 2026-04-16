import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='text-center h-[80vh] flex flex-col justify-center gap-5'>
            <h1 className='text-[11rem] font-extrabold'>Oops!</h1>
            <p className='text-4xl font-extrabold'>404 - Page Not Found</p>
            <p>The page you are looking for might have been removed <br />
                had its name changed or is temporarily unavailable.</p>
            <Link to={`/`} className='btn btn-primary w-50 mx-auto btn-lg'>
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFound;