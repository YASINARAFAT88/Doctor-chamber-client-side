import React from 'react';
import { useParams } from 'react-router-dom';

const SeeTreatment = () => {
    const {treatmentId} = useParams();
    return (
        <div>
            <h2>This is SeeTreatment {treatmentId}</h2>
        </div>
    );
};

export default SeeTreatment;