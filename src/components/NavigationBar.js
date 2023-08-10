import React, { useState } from 'react';
import { Link } from "react-scroll";

const NavigationBar = () => {

const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    return (
        <div className="navWrapper" id="nav">
            <div className="brand">pramudev</div>
            <ul>
                <li className='navlink'>
                    <Link to="home" spy={true} smooth={true}>Home</Link>
                </li>
                <li className='navlink'>
                    <Link to="skills" spy={true} smooth={true}>Skills</Link>
                </li>
                <li className='navlink'>
                    <Link to="about" spy={true} smooth={true}>About</Link>
                </li>
                <li className='navlink'>
                    <Link to="projects" spy={true} smooth={true}>Projects</Link>
                </li>
                <li className='navlink'>
                    <Link to="contact" spy={true} smooth={true}>Contact</Link>
                </li>
                <li className="dropdown">
                    <button className="dropdown-btn" onClick={toggleDropdown}>=</button>
                        {isDropdownOpen && (
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to="home" spy={true} smooth={true}>Home</Link>
                                </li>
                                <li>
                                    <Link to="skills" spy={true} smooth={true}>Skills</Link>
                                </li>
                                <li>
                                    <Link to="about" spy={true} smooth={true}>About</Link>
                                </li>
                                <li>
                                    <Link to="projects" spy={true} smooth={true}>Projects</Link>
                                </li>
                                <li>
                                    <Link to="contact" spy={true} smooth={true}>Contact</Link>
                                </li>
                            </ul>
                        )}
                </li>
            </ul>
        </div>
    );
}

export default NavigationBar