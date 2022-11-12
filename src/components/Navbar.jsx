import React from 'react'
import Logo from './Logo';

function Navbar() {
    return (
        <nav>
            <Logo />
            <input type="checkbox" name="" id="nav-check" />
            <label htmlFor="nav-check" className='nav-check-btn link-hover'><i className="fa-solid fa-bars"></i></label>
            <ul className='nav-ul'>
                <li className="nav-item">
                    <a href="#about" className="nav-link link-hover">ABOUT</a>
                </li>
                <li className="nav-item">
                    <a href="#skills" className="nav-link link-hover">SKILLS</a>
                </li>
                <li className="nav-item">
                    <a href="#projects" className="nav-link link-hover">PROJECTS</a>
                </li>
                {/* <li className="nav-item">
                    <a href="#contact" className="nav-link link-hover">CONTACT</a>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navbar;