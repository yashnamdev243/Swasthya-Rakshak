// import React, { useState } from 'react';
// import './Navbar.css';

// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="navbar-brand">Swasthya Rakshak</div>
//             <ul className="navbar-links">


//                 <li><a href="/dashboard">Home</a></li>
//                 <li><a href="/about">About us</a></li>
//                 <li><a href="/services">Services</a></li>
//                 <li><a href="/doctors">Doctors</a></li>


//                 {/* Dropdown menu for "Manage account" */}
//                 <li className="dropdown " >
//                     <a href="#" onClick={toggleDropdown}>Manage Account</a>
//                     {isDropdownOpen && (
//                         // <ul className="dropdown-menu">
//                         //     <li><a href="/doctor-manage">Doctor Manage</a></li>
//                         //     <li><a href="/staff-manage">Staff Manage</a></li>
//                         //     <li><a href="/patient-manage">Patient Manage</a></li>
//                         // </ul>

//                         <ul
//                             className="dropdown-menu"
//                             style={{
//                                 listStyle: 'none',
//                                 margin: '15px 0',
//                                 padding: '0',
//                                 backgroundColor: '#ffffff',
//                                 border: '1px solid #ddd',
//                                 borderRadius: '5px',
//                                 boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                                 width: '100px',

//                             }}
//                         >
//                             <li
//                                 style={{
//                                     padding: '1px 2px',
//                                     borderBottom: '1px solid #ddd',
//                                 }}
//                             >
//                                 <a
//                                     href="/doctor-manage"
//                                     style={{
//                                         textDecoration: 'none',
//                                         color: '#333',
//                                         display: 'block',
//                                         borderRadius: '3px',
//                                         transition: 'background-color 0.3s',
//                                     }}
//                                     onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
//                                     onMouseLeave={(e) => e.target.style.backgroundColor = ''}
//                                 >
//                                     Doctor Manage
//                                 </a>
//                             </li>
//                             <li
//                                 style={{
//                                     padding: '1px 2px',
//                                     borderBottom: '1px solid #ddd',
//                                 }}
//                             >
//                                 <a
//                                     href="/staff-manage"
//                                     style={{
//                                         textDecoration: 'none',
//                                         color: '#333',
//                                         display: 'block',
//                                         borderRadius: '3px',
//                                         transition: 'background-color 0.3s',
//                                     }}
//                                     onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
//                                     onMouseLeave={(e) => e.target.style.backgroundColor = ''}
//                                 >
//                                     Staff Manage
//                                 </a>
//                             </li>
//                             <li
//                                 style={{
//                                     padding: '1px 2px',
//                                 }}
//                             >
//                                 <a
//                                     href="/patient-manage"
//                                     style={{
//                                         textDecoration: 'none',
//                                         color: '#333',
//                                         display: 'block',
//                                         borderRadius: '3px',
//                                         transition: 'background-color 0.3s',
//                                     }}
//                                     onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
//                                     onMouseLeave={(e) => e.target.style.backgroundColor = ''}
//                                 >
//                                     Patient Manage
//                                 </a>
//                             </li>
//                         </ul>

//                     )}
//                 </li>


//             </ul>
//         </nav>
//     );
// };
// export default Navbar;





// import React, { useState } from 'react';
// import './Navbar.css';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// const Navbar = () => {
//     const [isSecondaryNavbarVisible, setIsSecondaryNavbarVisible] = useState(false);

//     const toggleSecondaryNavbar = () => {
//         setIsSecondaryNavbarVisible(!isSecondaryNavbarVisible);
//     };

//     return (
//         <>
//             <nav className="navbar">
//                 <div className="navbar-brand">Swasthya Rakshak</div>
//                 <ul className="navbar-links">
//                     <li><a href="/dashboard">Home</a></li>
//                     <li><a href="/about">About us</a></li>
//                     <li><a href="/services">Services</a></li>
//                     <li><a href="/doctors">Doctors</a></li>
//                 </ul>
//                 <button
//                     className="toggle-navbar-button"
//                     onClick={toggleSecondaryNavbar}
//                     style={{
//                         marginLeft: 'auto',
//                         padding: '10px',
//                         backgroundColor: 'transparent',
//                         color: '#007bff',
//                         border: 'none',
//                         borderRadius: '5px',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     {isSecondaryNavbarVisible ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
//                 </button>
//             </nav>

//             {isSecondaryNavbarVisible && (
//           <div className='items'>
//                     <nav className="secondary-navbar-links" style={{
//                         display: 'flex',
//                         listStyle: 'none',
//                         margin: 0,
//                         padding: 0,
//                     }}>
//                         <nav className="navbar-link" style={{}}>
//                             <li ><a href="/doctor-manage"> <button className="check-doctor-btn" >Doctor Manage    </button>
// </a></li>
//                             <li><a href="/staff-manage"><button className="check-doctor-btn" >Staff Manage  </button></a></li>
//                             <li><a href="/patient-manage"> <button className="check-doctor-btn" >Patient Manage  </button></a></li>
//                             <li><a href="/patient-manage"> <button className="check-doctor-btn" >
//       Check Appointment
//         </button>
//         </a></li>
//                         </nav>
//                     </nav>
//                     </div>
                
//             )}
//         </>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import './Navbar.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
    const [isSecondaryNavbarVisible, setIsSecondaryNavbarVisible] = useState(false);

    const toggleSecondaryNavbar = () => {
        setIsSecondaryNavbarVisible(!isSecondaryNavbarVisible);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-brand">Swasthya Rakshak</div>
                <ul className="navbar-links">
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    {/* <li><a href="/doctors">Doctors</a></li> */}
                    <li><a href="/notification">Notification</a></li>
                    <li><a href="/accounts">Account</a></li>
                </ul>
                <button
                    className="toggle-navbar-button"
                    onClick={toggleSecondaryNavbar}
                >
                    {isSecondaryNavbarVisible ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
                </button>
            </nav>

            {isSecondaryNavbarVisible && (
                <div className="secondary-navbar">
                    <ul className="secondary-navbar-links">
                        <li><a href="/doctor-manage"><button className="action-btn">Doctor Manage</button></a></li>
                        <li><a href="/staff-manage"><button className="action-btn">Staff Manage</button></a></li>
                        <li><a href="/patient-manage"><button className="action-btn">Patient Manage</button></a></li>
                        <li><a href="/appointments"><button className="action-btn">Check Appointment</button></a></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
