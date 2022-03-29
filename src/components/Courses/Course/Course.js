import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Course = (props) => {
    const history = useHistory();
    const { _id, title, rating, icon, hours, lecture } = props.course;
    const { name } = props.course.instractor;
    const { full, monthly } = props.course.price;

    const courseDetailsbtnhandle = id => {
        history.push(`/course/details/${id}`)
    }
    return (

        <div className="bg-white rounded-lg relative overflow-hidden bg-no-repeat bg-cover max-w-sm p-3 shadow hover:shadow-lg hover:shadow-sky-600/50 hover:rounded-lg mx-auto">
            <div className='grid grid-row-2 gap-4 place-content-between'>
                <img className='iconimg' src={icon} alt="" />
                <h3 className='text-xl font-medium'>{title}</h3>
                <span>
                    <Rating className='rating'
                        initialRating={rating}
                        readonly
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        fractions={2}
                    />
                    <p className='text-gray-600'>by: {name}</p>
                    <p className='text-gray-600'>{lecture} lectures ({hours} Hours)</p>
                </span>
                <p className='bg-sky-100 font-medium rounded-lg'>${full} for full course / ${monthly} per month susbscription</p>
                <span>
                    <Link className='bg-sky-500 p-3 sm:m-2 text-white rounded-lg mx-2' to="/price">Enroll The Course</Link>
                    <button onClick={() => { courseDetailsbtnhandle(_id) }} className='rounded-lg p-3 sm:m-2 border hover:border-sky-500 '>Course Details</button>
                </span>
            </div>
        </div>
    );
};

export default Course;