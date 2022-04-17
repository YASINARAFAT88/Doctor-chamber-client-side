import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='footer text-center my-2'>
            <p>Copyright © {year}</p>
        </footer>
    );
};

export default Footer;