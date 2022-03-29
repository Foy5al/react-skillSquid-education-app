import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Pricing = () => {
    const history = useHistory();
    const enrolledbtn = () => {
        history.push('/enrolled')
    }
    return (
        <div className='bg-sky-100 p-5'>
            <h1 className='text-4xl font-bold p-5'>Pricing Plans</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-between">

                <div className='bg-white rounded-lg relative overflow-hidden bg-no-repeat bg-cover max-w-sm p-3 shadow hover:shadow-lg hover:shadow-sky-600/50 hover:rounded-lg mx-auto'>
                    <h3 className='mt-5 font-semibold'>Yearly subscription</h3>
                    <p className='text-gray-500'>All the basics for starting a new course</p>
                    <br />
                    <h1 className='font-bold text-4xl'>$180<small className='font-normal text-base'>/Year</small></h1>
                    <br />
                    <button onClick={() => { enrolledbtn() }} className='bg-blue-600 p-2 sm:m-2 text-white rounded mx-2'>Buy Now</button>
                    <hr />
                    <br />
                    <p className='font-semibold'>What's Inclueded</p>
                    <ul>
                        <li className="text-gray-600">24/7 online support</li>
                        <li className="text-gray-600">zoom metting access</li>
                        <li className="text-gray-600">All premium courses access</li>
                        <li className="text-gray-600">Job Placement Support</li>
                    </ul>
                </div>

                <div className='bg-white rounded-lg relative overflow-hidden bg-no-repeat bg-cover max-w-sm p-3 shadow hover:shadow-lg hover:shadow-sky-600/50 hover:rounded-lg mx-auto'>
                    <h3 className='mt-5 font-semibold'>Monthly subscription</h3>
                    <p className='text-gray-500'>All the basics for starting a new course</p>
                    <br />
                    <h1 className='font-bold text-4xl'>$20<small className='font-normal text-base'>/mo</small></h1>
                    <br />
                    <button onClick={() => { enrolledbtn() }} className='bg-blue-600 p-2 sm:m-2 text-white rounded mx-2'>Buy Now</button>
                    <hr />
                    <br />
                    <p className='font-semibold'>What's Inclueded</p>
                    <ul>
                        <li className="text-gray-600">24/7 online support</li>
                        <li className="text-gray-600">zoom metting access</li>
                        <li className="text-gray-600">All premium courses access</li>

                    </ul>
                </div>
                <div className='bg-white rounded-lg relative overflow-hidden bg-no-repeat bg-cover max-w-sm p-3 shadow hover:shadow-lg hover:shadow-sky-600/50 hover:rounded-lg mx-auto'>
                    <h3 className='mt-5 font-semibold'>Daily subscription</h3>
                    <p className='text-gray-500'>All the basics for starting a new course</p>
                    <br />
                    <h1 className='font-bold text-4xl'>$5<small className='font-normal text-base'>/day</small></h1>
                    <br />
                    <button onClick={() => { enrolledbtn() }} className='bg-blue-600 p-2 sm:m-2 text-white rounded mx-2'>Buy Now</button>
                    <hr />
                    <br />
                    <p className='font-semibold'>What's Inclueded</p>
                    <ul>
                        <li className="text-gray-600">online support</li>
                        <li className="text-gray-600">problem solving</li>
                        <li className="text-gray-600">Free seminar link</li>

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Pricing;