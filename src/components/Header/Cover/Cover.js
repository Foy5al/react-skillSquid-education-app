import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Cover = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 gap-2'>
            <div className='flex items-center text-left p-3'>
                <span>
                    <h1 className='lg:font-medium text-4xl md:font-normal text-2xl'>People expect to be bored by <span className='text-sky-500/100'>eLearning</span> let's show them it doesn't have to be like that!  </h1>
                    <p className="text-blue-500">Our course is rated excellent by over 4,000 people</p> <Rating className='rating'
                        initialRating={5}
                        readonly
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        fractions={2}
                    />
                    <br /><br />
                    <p>Today, more than 2500 people have already studied at our university in various fields: programming, Networking, IOT and Web-development</p>
                    <br /><br />
                    <Link to='/courses' className='bg-sky-500/100 p-2 sm:m-2 text-white rounded-lg mx-2'>Try For Free</Link>
                    <Link to="/price" className='hover:bg-sky-500/100 hover:text-white border border-sky-500/100 p-2 sm:m-2 text-sky-500/100 rounded-lg mx-2'>See Pricing Plans</Link>
                </span>
            </div>

            <div className=''>
                <img src="https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=996&t=st=1648400415~exp=1648401015~hmac=3428a76c6c840b6af87f13cadcec3e5540685f8ddcda92bf4c42a4a7b03838a7https://www.freepik.com/free-vector/focused-tiny-people-reading-books_8609147.htm#query=student%20vector&position=5&from_view=search" alt="" />
            </div>

        </div>
    );
};

export default Cover;