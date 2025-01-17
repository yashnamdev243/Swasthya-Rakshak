
import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, Table } from 'react-bootstrap';
import Layout from '../../../Layout/Layout';
import './PatientCRUD.css';

const PatientCRUD = () => {
    // Static data for testing
    const staticData = [
        { _id: '1', full_name: 'John Doe', date_of_birth: '1990-01-01', gender: 'Male', address: '123 Street', emergency_contact: '1234567890' },
        { _id: '2', full_name: 'Jane Smith', date_of_birth: '1985-05-15', gender: 'Female', address: '456 Avenue', emergency_contact: '9876543210' },
        { _id: '3', full_name: 'Tom Brown', date_of_birth: '2000-09-20', gender: 'Male', address: '789 Boulevard', emergency_contact: '5551234567' },
    ];

    const [patientsData, setPatientsData] = useState(staticData);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newPatient, setNewPatient] = useState({
        full_name: '',
        date_of_birth: '',
        gender: '',
        address: '',
        emergency_contact: '',
        medical_history: '',
        reason_for_visit: '',
        admit_date: '',
        disease: '',
        profile_picture: null,
    });

    // Handle Add/Update Patient form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPatients = [...patientsData];
        if (selectedPatient) {
            // Update patient
            const index = updatedPatients.findIndex((patient) => patient._id === selectedPatient._id);
            updatedPatients[index] = { ...updatedPatients[index], ...newPatient };
        } else {
            // Add new patient
            newPatient._id = (patientsData.length + 1).toString();
            updatedPatients.push(newPatient);
        }
        setPatientsData(updatedPatients);
        setShowForm(false);
    };

    // Handle patient selection for editing
    const handleEditPatient = (patient) => {
        setSelectedPatient(patient);
        setNewPatient({ ...patient }); // Populate form with patient data
        setShowForm(true);
    };

    // Handle delete patient
    const handleDeletePatient = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this patient?');
        if (confirmDelete) {
            setPatientsData(patientsData.filter((patient) => patient._id !== id));
        }
    };

    return (
        <Layout>
            <div>
                <h2>Manage Patients</h2>
                {/* Patients list */}
                <Table striped bordered hover>
                    <thead className='thead'>
                        <tr>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Emergency Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientsData.map((patient) => (
                            <tr key={patient._id}>
                                <td>{patient.full_name}</td>
                                <td>{new Date(patient.date_of_birth).toLocaleDateString()}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.address}</td>
                                <td>{patient.emergency_contact}</td>
                                <td>
                                    <Button variant="warning" onClick={() => handleEditPatient(patient)}>Edit</Button>
                                    <Button variant="danger" onClick={() => handleDeletePatient(patient._id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Modal for Add/Edit Patient */}
                <Modal show={showForm} onHide={() => setShowForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedPatient ? 'Edit Patient' : 'Add Patient'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group controlId="formFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="full_name"
                                            value={newPatient.full_name}
                                            onChange={(e) => setNewPatient({ ...newPatient, full_name: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="gender"
                                            value={newPatient.gender}
                                            onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group controlId="formDOB">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="date_of_birth"
                                            value={newPatient.date_of_birth}
                                            onChange={(e) => setNewPatient({ ...newPatient, date_of_birth: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={newPatient.address}
                                            onChange={(e) => setNewPatient({ ...newPatient, address: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group controlId="formEmergencyContact">
                                        <Form.Label>Emergency Contact</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="emergency_contact"
                                            value={newPatient.emergency_contact}
                                            onChange={(e) => setNewPatient({ ...newPatient, emergency_contact: e.target.value })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group controlId="formProfilePicture">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="profile_picture"
                                            onChange={(e) => setNewPatient({ ...newPatient, profile_picture: e.target.files[0] })}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit">
                                {selectedPatient ? 'Update Patient' : 'Add Patient'}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </Layout>
    );
};

export default PatientCRUD;
