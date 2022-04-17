import React from 'react';
import './Treatment.css'


const Treatment = ({treatment}) => {
    const {img, name, description} = treatment;
    return (
        <div className='treatment-cart'>

            <img  src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>{description}</p>
            
            <button className='see-detail'>Detail {name}</button>
        </div>
    );
};

export default Treatment;