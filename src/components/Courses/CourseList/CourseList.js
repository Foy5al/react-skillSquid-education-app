import useData from '../../../hooks/useData';
import Course from '../Course/Course';

const CourseList = () => {
    // load local data from custom hook
    const courses = useData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses[0].map(course => <Course key={course._id} course={course}></Course>)
            }
        </div>
    );
};

export default CourseList;