import React from 'react';
import './Home.css'
import Treatments from '../Treatments/Treatments';
import img from './bag4.png'
import doctor from './doctor_1.png'

const Home = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="banner">
                <div className="medicine">
                    <img src={img} alt="" />
                </div>
                <div className="content">
                    <h2>Doctor chamber</h2>
                    <p>The Department of Obstetrics Gynaecology of Amar Hospital provides comprehensive services to women in the treatment and management of </p>
                    <button className='btnn'>Visite</button>
                </div>
                <div className="doctot-img">
                    <img src={doctor} alt="" />
                </div>
                </div>
            </div>
            <Treatments></Treatments>
        </div>
    );
};

export default Home;