import React from 'react';
import About from '../About/About';
import Courses from '../Courses/Courses';
import Cover from '../Header/Cover/Cover';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <About></About>
            <Courses></Courses>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;