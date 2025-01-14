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


                <li><a href="/dashboard">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/doctors">Doctors</a></li>


                {/* Dropdown menu for "Manage account" */}
                <li className="dropdown " >
                    <a href="#" onClick={toggleDropdown}>Manage Account</a>
                    {isDropdownOpen && (
                        // <ul className="dropdown-menu">
                        //     <li><a href="/doctor-manage">Doctor Manage</a></li>
                        //     <li><a href="/staff-manage">Staff Manage</a></li>
                        //     <li><a href="/patient-manage">Patient Manage</a></li>
                        // </ul>

                        <ul
                            className="dropdown-menu"
                            style={{
                                listStyle: 'none',
                                margin: '15px 0',
                                padding: '0',
                                backgroundColor: '#ffffff',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                width: '100px',

                            }}
                        >
                            <li
                                style={{
                                    padding: '1px 2px',
                                    borderBottom: '1px solid #ddd',
                                }}
                            >
                                <a
                                    href="/doctor-manage"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#333',
                                        display: 'block',
                                        borderRadius: '3px',
                                        transition: 'background-color 0.3s',
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                                >
                                    Doctor Manage
                                </a>
                            </li>
                            <li
                                style={{
                                    padding: '1px 2px',
                                    borderBottom: '1px solid #ddd',
                                }}
                            >
                                <a
                                    href="/staff-manage"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#333',
                                        display: 'block',
                                        borderRadius: '3px',
                                        transition: 'background-color 0.3s',
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                                >
                                    Staff Manage
                                </a>
                            </li>
                            <li
                                style={{
                                    padding: '1px 2px',
                                }}
                            >
                                <a
                                    href="/patient-manage"
                                    style={{
                                        textDecoration: 'none',
                                        color: '#333',
                                        display: 'block',
                                        borderRadius: '3px',
                                        transition: 'background-color 0.3s',
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                                >
                                    Patient Manage
                                </a>
                            </li>
                        </ul>

                    )}
                </li>


            </ul>
        </nav>
    );
};

export default Navbar;
