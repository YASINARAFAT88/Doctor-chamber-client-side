import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='footer text-center my-2'>
            <p><small>Dr. Md Rezoun Shafiullah is a MBBS MPH (Medicine) Post Graduate Fellowship on Migrant Refugee Health (PGFMRH-UK), He is available through (Online/Offline) chamber time 10:00 Pm to 6:00 Pm at Amar Hospital Ltd (Daffodil International University).</small></p>
            <p>Copyright © {year}</p>
        </footer>
    );
};

export default Footer;