import React from 'react';
import react, { useEffect, useState } from 'react'
import Treatment from '../Treatment/Treatment';
import './Treatments.css'

const Treatments = () => {
    const [treatments, setTreatments] = useState([]);
    useEffect(()=>{
        fetch('Treatment.json')
        .then(res => res.json())
        .then(data => setTreatments(data))
    },[])

    return (
        <div>
            <h1 className="treatment-title">All Treatments</h1>
          <div className="treatment-container">
          {
               treatments.map(treatment => <Treatment
               key={treatment.id}
               treatment={treatment}
               ></Treatment>)
           }
          </div>
        </div>
    );
};

export default Treatments;