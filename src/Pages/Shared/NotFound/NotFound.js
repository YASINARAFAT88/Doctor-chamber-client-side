import React from 'react';
import img from './not-found.jpg';

const NotFound = () => {
    return (
        <div className='mx-auto'>
            <img className='w-50' src={img} alt="" />
            <h3 className='text-center'>Page Not Found</h3>
        </div>
    );
};

export default NotFound;