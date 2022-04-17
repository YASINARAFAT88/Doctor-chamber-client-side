import React from 'react';
import { Link, useParams } from 'react-router-dom';

const SeeTreatment = () => {
    const {treatmentId} = useParams();
    return (
        <div>
            <h2>This is SeeTreatment {treatmentId}</h2>
           <div className="text-center">
           <Link to="/checkout">
                <button className="btn btn-success">Please CheackOut</button>
            </Link>
           </div>
        </div>
    );
};

export default SeeTreatment;