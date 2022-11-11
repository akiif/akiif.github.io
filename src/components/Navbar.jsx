import React from 'react'
import Logo from './Logo';

function Navbar() {
    return (
        <nav>
            <Logo />
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