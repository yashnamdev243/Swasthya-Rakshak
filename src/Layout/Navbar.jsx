import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Swasthya Rakshak </div>
            <ul className="navbar-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li class="dropdown">
                    <a href="/contact" class="dropdown-toggle">Manage Account</a>
                    <ul class="dropdown-menu">
                        <li><a href="/doctor"> Doctor Manage</a></li>
                        <li><a href="/staff"> Staff Manage</a></li>
                        <li><a href="/patient"> Patient Manage</a></li>
                    </ul>
                </li>

            </ul> 
        </nav>
    );
};

export default Navbar;
