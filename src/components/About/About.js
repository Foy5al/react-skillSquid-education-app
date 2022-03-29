import React, { useEffect, useState } from 'react';
import AboutService from './AboutService/AboutService';

const About = () => {
    const [icons, setIcons] = useState([]);
    // load local data for about section
    useEffect(() => {
        fetch('../../../fakedata/fakeDataOne.json')
            .then(resp => resp.json())
            .then(data => setIcons(data))
    }, []);
    return (
        <div className='container mx-auto my-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    icons.map(icon => <AboutService key={icon._id} icon={icon}></AboutService>)
                }
            </div>

        </div>
    );
};

export default About;