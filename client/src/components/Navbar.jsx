import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";
import Logo from "../assets/logo1.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const fileID = "1ZgDqOlkmewTzJZqy5xRSd-Lk5gAy1rubU1SRcGmyZqc";
    const downloadLink = `https://docs.google.com/document/d/${fileID}/export?format=docx`;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img className="logo" src={Logo} height='60px' width='65px' alt="Logo" />
            </div>
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
                {isMenuOpen && <span className="close-btn" onClick={toggleMenu}>×</span>}
            </div>
            <div className={`navigations ${isMenuOpen ? 'active' : ''}`}>
                <NavLink id="navigator" to="/" title='About Us'>About Us</NavLink>
                <NavLink id="navigator" to="/achievements" title='Achievements'>Achievements</NavLink>
                <NavLink id="navigator" to="/members" title='Members'>Members</NavLink>
                <a id="navigator" href={downloadLink} title='Letter of Assurance'>LOA</a>
            </div>
        </div>
    );
}

export default Navbar;
