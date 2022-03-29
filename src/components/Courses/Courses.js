import React from 'react';
import CourseList from './CourseList/CourseList';

const Courses = () => {
    return (
        <div className='bg-sky-100 mb-3 pb-2'>
            <h1 className='font-semibold text-3xl'>Our Courses</h1>
            <div className='container mx-auto my-5'>
                <CourseList></CourseList>
            </div>
        </div>
    );
};

export default Courses;