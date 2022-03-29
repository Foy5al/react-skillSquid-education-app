import React from 'react';

const AboutService = (props) => {
    const { title, details, icon } = props.icon;
    return (
        <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs p-3 hover:text-white hover:bg-sky-500 hover:rounded-lg mx-auto">
            <div>
                <img className='iconimg' src={icon} alt="" />
                <h1 className='font-medium text-2xl'>{title}</h1>
                <p>{details}</p>
            </div>
        </div>
    );
};

export default AboutService;