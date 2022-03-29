import React from 'react';
import Rating from 'react-rating';
const Details = (props) => {
    const { title, icon, rating, hours, lecture, courseDetails, instractor, price } = props?.course;
    console.log(props);
    return (
        <div className="bg-white rounded-lg relative overflow-hidden bg-no-repeat bg-cover max-w-xl p-3 mt-5 mb-5 shadow hover:shadow-lg hover:shadow-sky-600/50 hover:rounded-lg mx-auto">
            <div>
                <img className='iconimg' src={icon} alt="" />
                <h3 className='text-xl font-medium'>{title}</h3>
                <Rating className='rating'
                    initialRating={rating}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    fractions={2}
                />
                <p className='text-blue-600'>{lecture} lectures ({hours} Hours)</p>
                <p><span className='font-medium text-lg'>You will learn:</span> {courseDetails}</p>
            </div>

            <div className='grid grid-cols-2 gap-4 place-content-between'>

                <div className='mt-5 bg-sky-100 rounded-lg p-1'>
                    <h1 className='text-xl font-medium'>Course Host</h1>
                    <span>
                        <img className='rounded-full iconimg' src={instractor?.img} alt="" />
                        <h3 className='text-lg font-medium text-sky-500'>{instractor?.name}</h3>
                        <p>{instractor?.designation}</p>
                    </span>
                </div>
                <span>
                    <p className='mt-5 p-2 bg-sky-100 font-medium rounded-lg'>${price?.full} for full course / ${price?.monthly} per month susbscription</p>
                    <button className='mt-5  bg-sky-500 hover:bg-sky-600 p-3 text-white rounded-lg mx-2'>Enroll Now</button>
                </span>

            </div>
        </div>
    );
};

export default Details;