import React, { useEffect, useState } from 'react';
import Layout from '../../../Layout/Layout';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import Skeleton from 'react-loading-skeleton'; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import skeleton styles
import './Appointment.css'; // Assuming you will create a similar CSS file

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerms, setSearchTerms] = useState(""); // Search input state

    const [newAppointment, setNewAppointment] = useState({
        full_name: '',
        gender: '',
        phone_number: '',
        email_address: '',
        preferred_doctor: '',
        appointment_date: '',
        time_slot: '',
        reason_for_visit: '',
        status: 'Pending', // Default status
    });

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/appointments');
                const data = await response.json();
                setAppointments(data);
                setFilteredAppointments(data); // Initially set filteredAppointments to all appointments
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    // Handle search input change
    const handleSearched = (e) => {
        const value = e.target.value;
        setSearchTerms(value);

        // Filter the appointments based on search terms
        const filtered = appointments.filter((appointment) =>
            appointment.full_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredAppointments(filtered); // Update filtered appointments
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAppointment((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Post the new appointment
            const response = await axios.post('http://localhost:3000/api/appointments', newAppointment);
            console.log('New appointment added:', response.data);
            
            // Add the new appointment to the existing appointments list
            setAppointments((prevAppointments) => [...prevAppointments, response.data]);
            setFilteredAppointments((prevFilteredAppointments) => [...prevFilteredAppointments, response.data]);
    
            // Reset form after submission
            setNewAppointment({
                full_name: '',
                gender: '',
                phone_number: '',
                email_address: '',
                preferred_doctor: '',
                appointment_date: '',
                time_slot: '',
                reason_for_visit: '',
                status: 'Pending',
            });
    
            setShowModal(false); // Close modal after submission
        } catch (err) {
            setError('Failed to add appointment: ' + err.message);
        }
    };

    return (
        <Layout>
            <div className="appointment-list-container">
                <h2 className="heading">Appointments</h2>

                {/* Search Bar */}
                <div className="search-bar">
                    <Form.Control
                        type="text"
                        placeholder="Search by Appointment Name"
                        value={searchTerms}
                        onChange={handleSearched}
                        className="search-input"
                    />
                </div>

                {/* Appointment Table */}
                <table className="appointment-table">
                    <thead>
                        <tr>
                            <th> ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Gender</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                            <th>Preferred Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            // Display skeleton loaders if data is loading
                            Array(5)
                                .fill()
                                .map((_, index) => (
                                    <tr key={index}>
                                        <td><Skeleton width={100} /></td>
                                        <td><Skeleton width={150} /></td>
                                        <td><Skeleton width={120} /></td>
                                        <td><Skeleton width={80} /></td>
                                        <td><Skeleton width={80} /></td>
                                        <td><Skeleton width={150} /></td>
                                        <td><Skeleton width={100} /></td>
                                        <td><Skeleton width={120} /></td>
                                        <td><Skeleton width={180} /></td>
                                        <td><Skeleton width={150} /></td>
                                    </tr>
                                ))
                        ) : (
                            filteredAppointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.id}</td>
                                    <td>{appointment.full_name}</td>
                                    <td>{new Date(appointment.appointment_date).toLocaleDateString()}</td>
                                    <td>{appointment.time_slot}</td>
                                    <td>{appointment.status}</td>
                                    <td>{appointment.reason_for_visit}</td>
                                    <td>{appointment.gender}</td> {/* Display Gender */}
                                    <td>{appointment.phone_number}</td> {/* Display Phone Number */}
                                    <td>{appointment.email_address}</td> {/* Display Email Address */}
                                    <td>{appointment.preferred_doctor}</td> {/* Display Preferred Doctor */}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

            </div>
        </Layout>
    );
};

export default Appointment;
