import React from 'react';

function Footer() {
    return (
        <footer className='colored-section'>
            <div className="footer-socials">
                <p className='footer-item'><a href="https://github.com/akiif/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a></p>
                <p className='footer-item'><a href="https://www.linkedin.com/in/akif-mohammed/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></p>
                <p className='footer-item'><a href="https://twitter.com/akiif_m/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></p>
                <p className='footer-item'><a href="https://www.instagram.com/akiif.m/" className="footer-link link-hover" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></p>
            </div>
            <p className="copyright">© {new Date().getFullYear()} Akif Mohammed</p>
        </footer>
    );
}

export default Footer;