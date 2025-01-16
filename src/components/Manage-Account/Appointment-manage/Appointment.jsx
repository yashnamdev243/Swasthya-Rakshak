import React, { useEffect, useState } from 'react';
import Layout from '../../../Layout/Layout';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import './Appointment.css'; // Assuming you will create a similar CSS file

const Appointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerms, setSearchTerms] = useState(""); // Search input state

    const [newAppointment, setNewAppointment] = useState({
        name: '',
        date: '',
        time: '',
        status: '',
        description: '',
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
            appointment.name.toLowerCase().includes(value.toLowerCase())
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
            const response = await axios.post('http://localhost:3000/api/appointments', newAppointment);
            console.log('New appointment added:', response.data);
            setAppointments([...appointments, response.data]); // Optionally, add new appointment to the list
            setNewAppointment({
                name: '',
                date: '',
                time: '',
                status: '',
                description: '',
            }); // Reset form after submission
            setShowModal(false); // Close modal after submission
        } catch (err) {
            setError('Failed to add appointment: ' + err.message);
        }
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    if (loading) {
        return <Layout><div>Loading...</div></Layout>;
    }

    if (error) {
        return <Layout><div>Error: {error}</div></Layout>;
    }

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

                {/* Add Appointment Button */}
                <button className="add-appointment-btn" onClick={handleShowModal}>Add Appointment</button>

                {/* Appointment Form Modal */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Appointment Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={newAppointment.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    value={newAppointment.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="time">
                                <Form.Label>Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="time"
                                    value={newAppointment.time}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="status">
                                <Form.Label>Status</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="status"
                                    value={newAppointment.status}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Canceled">Canceled</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="description"
                                    value={newAppointment.description}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Button type="submit">Add Appointment</Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* Table */}
                <table className="appointment-table">
                    <thead>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAppointments.map((appointment) => (
                            <tr key={appointment.id}>
                                <td>{appointment.id}</td>
                                <td>{appointment.name}</td>
                                <td>{new Date(appointment.date).toLocaleDateString()}</td>
                                <td>{appointment.time}</td>
                                <td>{appointment.status}</td>
                                <td>{appointment.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Appointment;
