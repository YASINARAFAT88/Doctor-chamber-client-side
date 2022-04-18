import React from 'react';
import './Home.css'
import Treatments from '../Treatments/Treatments';
import img from './bag4.png'
import doctor from './doctor_1.png'
import SignUp from '../../Login/SignUp/SignUp';

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
                    <p>The Department of Obstetrics Gynaecology of Amar Chamber provides comprehensive services to women in the treatment and of the day! </p>
                    <button className='btnn'>Visite</button>
                </div>
                <div className="doctot-img">
                    <img src={doctor} alt="" />
                </div>
                </div>
            </div>
            <Treatments></Treatments>
            <h1 className="treatment-title">Sign Up Please!!</h1>
            <div className='signup'>
                <div className='form'>
                    <SignUp></SignUp>
                </div>
                <div>
                   <img src={doctor} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;