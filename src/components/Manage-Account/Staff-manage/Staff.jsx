import React, { useEffect, useState } from 'react';
import Layout from '../../../Layout/Layout';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import './Staff.css'; // Assuming you will create a similar CSS file

const Staff = () => {
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAddStaffForm, setShowAddStaffForm] = useState(false);
    const [newStaff, setNewStaff] = useState({
        fullName: '',
        position: '',
        department: '',
        emailId: '',
        phoneNo: '',
        dateOfBirth: '',
        dateOfJoining: '',
        gender: '',
        workStatus: '',
        qualifications: '',
        profilePicture: null,
    });

    useEffect(() => {
        const fetchStaffData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/staff');
                if (!response.ok) {
                    throw new Error('Failed to fetch staff data');
                }
                const data = await response.json();
                setStaff(data.data || data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchStaffData();
    }, []);

    const handleAddStaff = () => {
        setShowAddStaffForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStaff({ ...newStaff, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewStaff({ ...newStaff, profilePicture: file });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(newStaff).forEach((key) => {
            if (newStaff[key]) formData.append(key, newStaff[key]);
        });

        try {
            const response = await fetch('http://localhost:3000/api/staff', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setStaff([...staff, data]);
            setShowAddStaffForm(false);
        } catch (err) {
            console.error('Error adding staff:', err);
        }
    };

    if (loading) {
        return <Layout><div>Loading...</div></Layout>;
    }

    if (error) {
        return <Layout><div>Error: {error}</div></Layout>;
    }

    return (
        <Layout>
            <div className="staff-list-container">
                <button className="add-staff-btn" onClick={handleAddStaff}>Add Staff</button>
                <h2>Staff List</h2>

                {/* Modal for Add Staff */}
                <Modal show={showAddStaffForm} onHide={() => setShowAddStaffForm(false)} className="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Staff</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group controlId="formFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="fullName"
                                            value={newStaff.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control-custom"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group controlId="formPosition">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="position"
                                            value={newStaff.position}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control-custom"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Add other fields similarly */}

                            {/* Image Upload */}
                            <Row className="mb-4">
                                <Col md={12}>
                                    <Form.Group controlId="formProfilePicture">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="profilePicture"
                                            onChange={handleImageChange}
                                            className="form-control-custom"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <div className="d-flex justify-content-between" style={{ gap: '10px' }}>
                                <Button variant="primary" type="submit" className="btn-submit">Add Staff</Button>
                                <Button variant="secondary" onClick={() => setShowAddStaffForm(false)} className="btn-cancel">Cancel</Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* Table */}
                <table className="staff-table">
                    <thead>
                        <tr>
                            <th>Profile Picture</th>
                            <th>Full Name</th>
                            <th>Position</th>
                            <th>Department</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Date of Joining</th>
                            <th>Gender</th>
                            <th>Work Status</th>
                            <th>Qualifications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staff.map((staffMember) => (
                            <tr key={staffMember.id}>
                                <td>
                                    {staffMember.profilePicture ? (
                                        <img
                                            src={`http://localhost:3000/${staffMember.profilePicture}`}
                                            alt={staffMember.fullName}
                                            className='staff-image'
                                            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                        />
                                    ) : (
                                        <span>No Profile Picture</span>
                                    )}
                                </td>
                                <td>{staffMember.fullName}</td>
                                <td>{staffMember.position}</td>
                                <td>{staffMember.department}</td>
                                <td>{staffMember.emailId}</td>
                                <td>{staffMember.phoneNo}</td>
                                <td>{new Date(staffMember.dateOfBirth).toLocaleDateString()}</td>
                                <td>{new Date(staffMember.dateOfJoining).toLocaleDateString()}</td>
                                <td>{staffMember.gender}</td>
                                <td>{staffMember.workStatus}</td>
                                <td>{staffMember.qualifications}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Staff;
