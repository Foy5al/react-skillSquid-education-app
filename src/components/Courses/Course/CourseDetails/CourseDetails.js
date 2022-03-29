import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useData from '../../../../hooks/useData';
import Details from './Details/Details';

const CourseDetails = () => {
    const { courseId } = useParams();
    const data = useData();
    let loadedData = data[0];
    const [courseData, setcourseData] = useState([]);
    console.log(data.length, loadedData.length);

    // check the data that come from btn click if match found then update the setcoursedata state
    useEffect(() => {
        if (loadedData.length > 0) {
            const course = data[0]?.find(course => course._id === parseInt(courseId));
            console.log(course);
            setcourseData(course)
        }
        else {
            console.log('waitting for data')
        }

    }, [data]);

    return (
        <div className='container text-center'>
            <h1 className='font-bold text-3xl'>All you need to know about our course</h1>
            <Details course={courseData}></Details>
        </div>
    );
};

export default CourseDetails;