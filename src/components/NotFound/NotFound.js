import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='py-5'>
                <h1 className='text-blue-600 text-3xl font-bold text-right px-2 py-5 border-r-2 border-gray-400 '>404</h1>
            </div>
            <div className='text-left px-2 py-10'>
                <h1 className='text-blue-600 font-semibold text-3xl'>Page not found</h1>
                <p>Please check the URL in the address bar and try again.</p>
                <br />
                <button className='rounded-lg bg-blue-600 p-2 text-white'><Link to='./home'>Go Back home </Link></button>
            </div>
        </div>
    );
};

export default NotFound;