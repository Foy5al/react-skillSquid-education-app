import React from 'react';
import { Link } from 'react-router-dom';

const Enrolled = () => {

    return (
        <div className='container mx-auto'>
            <img className='thanks-img' src="https://img.freepik.com/free-vector/thank-you-banner-poster-sticker-concept-geometric-memphis-style-with-text-thank-you_136321-1815.jpg?w=1380" alt="Thank you !" />
            <h4 className='text-lg'>You Have Successfully Enroll the course</h4>
            <br />
            <button className='bg-sky-500 p-2 sm:m-2 text-white rounded-lg mx-2'><Link className='p-3' to='/home'>Back to Home</Link></button>
        </div >
    );
};

export default Enrolled;