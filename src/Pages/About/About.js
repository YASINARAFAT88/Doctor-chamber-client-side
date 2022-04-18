import React from 'react';
import './About.css'
import img from './my-pic.jpg'

const About = () => {
    return (
        <div className='about'>
            <h2 className='fw-bold'>I'm introduce Aboute My Self</h2>
            <img className='my-pic' style={{width: "250px"}} src={img} alt="" />
            <h4 className='fw-bold'>Md.Yasin Arafat</h4>
            <p>This year i will Dedicated 2022 just to learn web develoment , i'm Learning At Html css bootstrap javascript ind react js, i will leave everything behind and move forward , In sha allah, 
            And This is my 2022 Oath..</p>
        </div>
    );
};

export default About;