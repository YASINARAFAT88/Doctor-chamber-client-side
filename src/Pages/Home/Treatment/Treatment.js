import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Treatment.css'


const Treatment = ({treatment}) => {
    const {img, name, description, id} = treatment;
    const navigate = useNavigate();
    const navigateSeeTreatment = id =>{
    navigate(`treatment/${id}`)
    }
    return (
        <div className='treatment-cart'>

            <img  src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>{description}</p>
            
            <button onClick={()=> navigateSeeTreatment(id)} className='see-detail'>Detail {name}</button>
        </div>
    );
};

export default Treatment;