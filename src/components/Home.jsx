import React from 'react';
import Header from "./Header";
import bitmoji from '../images/bitmoji.png';

function Home() {
    return (
        <div className="home">
            <div className="header-with-links">
                <Header />
                <div className="header-social-links">
                    <p className="header-social-item"><a href="https://github.com/akiif/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></p>
                    <p className="header-social-item"><a href="https://www.linkedin.com/in/akif-mohammed/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></p>
                    <p className="header-social-item"><a href="https://twitter.com/akiif_m/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></p>
                    <p className="header-social-item"><a href="https://www.instagram.com/akiif.m/" className="header-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></p>
                </div>
            </div>
            <img src={bitmoji} alt="bitmoji with hey" className='bitmoji-img shake-img' />
        </div>
    );
}

export default Home;