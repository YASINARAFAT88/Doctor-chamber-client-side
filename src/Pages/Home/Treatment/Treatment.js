import React from 'react';
import './Treatment.css'


const Treatment = ({treatment}) => {
    const {img, name, description} = treatment;
    return (
        <div className='treatment-cart'>

            <img  src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>{description}</p>
            
            <button className='see-detail'>Detail {name}</button>
        </div>
    );
};

export default Treatment;