import React, { useState } from 'react';
import './Sidebar.css';
import {
    FaTachometerAlt, FaUser, FaCalendarAlt, FaUserMd, FaUsers, FaCogs,
    FaFileInvoice, FaBox, FaList, FaSignInAlt, FaBuilding, FaMoneyCheck, FaHistory
} from 'react-icons/fa';

const Sidebar = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        if (openSection === section) {
            setOpenSection(null); // Close section if it's already open
        } else {
            setOpenSection(section); // Open the clicked section
        }
    };

    return (
        <div className="sidebar">
            <ul className="sidebar-links">
                {/* Dashboard */}
                <li><a href="/dashboard" className='dashbord'><FaTachometerAlt /> Dashboard</a></li>

                {/* Patient Management */}
                <li>
                    <a href="#" className="sidebar-section-title" onClick={() => toggleSection('patientManagement')}>
                        <FaUser /> Patient Management
                    </a>
                    {openSection === 'patientManagement' && (
                        <ul>
                            <li><a href="/patients"><FaUser /> Manage Patients</a></li>
                            <li><a href="/patients/add"><FaSignInAlt /> Add Patient</a></li>
                            <li><a href="/patients/list"><FaList /> Patient List</a></li>
                            <li><a href="/patients/history"><FaHistory /> Patient History</a></li>
                        </ul>
                    )}
                </li>

                {/* Doctor Management */}
                <li>
                    <a href="#" className="sidebar-section-title" onClick={() => toggleSection('doctorManagement')}>
                        <FaUserMd /> Doctor Management
                    </a>
                    {openSection === 'doctorManagement' && (
                        <ul>
                            <li><a href="/doctors"><FaUserMd /> Manage Doctors</a></li>
                            <li><a href="/doctors/add"><FaSignInAlt /> Add Doctor</a></li>
                            <li><a href="/doctors/list"><FaList /> Doctor List</a></li>
                            <li><a href="/doctors/schedule"><FaCalendarAlt /> Doctor Schedule</a></li>
                        </ul>
                    )}
                </li>

                {/* Staff Management */}
                <li>
                    <a href="#" className="sidebar-section-title" onClick={() => toggleSection('staffManagement')}>
                        <FaUsers /> Staff Management
                    </a>
                    {openSection === 'staffManagement' && (
                        <ul>
                            <li><a href="/staff"><FaUsers /> Manage Staff</a></li>
                            <li><a href="/staff/add"><FaSignInAlt /> Add Staff</a></li>
                            <li><a href="/staff/list"><FaList /> Staff List</a></li>
                            <li><a href="/staff/assign"><FaUsers /> Assign Roles</a></li>
                        </ul>
                    )}
                </li>

                {/* Appointment Management */}
                <li>
                    <a href="#" className="sidebar-section-title" onClick={() => toggleSection('appointmentManagement')}>
                        <FaCalendarAlt /> Appointment Management
                    </a>
                    {openSection === 'appointmentManagement' && (
                        <ul>
                            <li><a href="/appointments"><FaCalendarAlt /> Manage Appointments</a></li>
                            <li><a href="/appointments/new"><FaSignInAlt /> New Appointment</a></li>
                            <li><a href="/appointments/list"><FaList /> Appointment List</a></li>
                            <li><a href="/appointments/calendar"><FaCalendarAlt /> Appointment Calendar</a></li>
                        </ul>
                    )}
                </li>

                {/* Department Management */}
                <li>
                    <a href="#" className="sidebar-section-title" onClick={() => toggleSection('departmentManagement')}>
                        <FaBuilding /> Department Management
                    </a>
                    {openSection === 'departmentManagement' && (
                        <ul>
                            <li><a href="/departments"><FaBuilding /> Manage Departments</a></li>
                            <li><a href="/departments/add"><FaSignInAlt /> Add Department</a></li>
                            <li><a href="/departments/list"><FaList /> Department List</a></li>
                        </ul>
                    )}
                </li>

                {/* Billing Management */}
                <li>
                    <a href="#" className="sidebar-section-title" onClick={() => toggleSection('billingManagement')}>
                        <FaFileInvoice /> Billing Management
                    </a>
                    {openSection === 'billingManagement' && (
                        <ul>
                            <li><a href="/billing"><FaFileInvoice /> Manage Billing</a></li>
                            <li><a href="/billing/invoice"><FaFileInvoice /> Generate Invoice</a></li>
                            <li><a href="/billing/history"><FaFileInvoice /> Billing History</a></li>
                            <li><a href="/billing/payment"><FaMoneyCheck /> Payment Status</a></li>
                        </ul>
                    )}
                </li>

                {/* Inventory Management */}
                <li>
                    <a href="#" className="sidebar-section-title" onClick={() => toggleSection('inventoryManagement')}>
                        <FaBox /> Inventory Management
                    </a>
                    {openSection === 'inventoryManagement' && (
                        <ul>
                            <li><a href="/inventory"><FaBox /> Manage Inventory</a></li>
                            <li><a href="/inventory/add"><FaSignInAlt /> Add Inventory</a></li>
                            <li><a href="/inventory/history"><FaHistory /> Inventory History</a></li>
                            <li><a href="/inventory/list"><FaList /> Inventory List</a></li>
                            <li><a href="/inventory/stock"><FaBox /> Stock Status</a></li>
                        </ul>
                    )}
                </li>

                {/* Settings */}
                <li><a href="/settings"><FaCogs /> General Settings</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
