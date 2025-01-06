import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Swasthya Rakshak</div>
            <ul className="navbar-links">

                {/* Dropdown menu for "Manage account" */}
                <li className="dropdown">
                    <a href="#" onClick={toggleDropdown}>Manage Account</a>
                    {isDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="/doctor-manage">Doctor Manage</a></li>
                            <li><a href="/staff-manage">Staff Manage</a></li>
                            <li><a href="/patient-manage">Patient Manage</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="/dashboard">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/contact">Services</a></li>
                <li><a href="/doctors">Doctores</a></li>
                <li><a href="/contact">Contact</a></li>

            </ul>
        </nav>
    );
};

export default Navbar;
