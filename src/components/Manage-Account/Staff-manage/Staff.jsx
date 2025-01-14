import React, { useEffect, useState } from 'react';
import Layout from '../../../Layout/Layout';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'; // Import axios
import './Staff.css'; // Assuming you will create a similar CSS file

const Staff = () => {
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newStaff, setNewStaff] = useState({
        fullName: '',
        position: '',
        department: '',
        phoneNo: '',
        dateOfBirth: '',
        dateOfJoining: '',
        gender: '',
        workStatus: '',
        emailId: '',
        profilePicture: null, // For file upload
        qualifications: '',
    });

    const [showModal, setShowModal] = useState(false);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStaff((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setNewStaff((prevState) => ({
            ...prevState,
            profilePicture: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in newStaff) {
            formData.append(key, newStaff[key]);
        }

        try {
            const response = await axios.post('http://localhost:3000/api/staff', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('New staff member added:', response.data);
            setStaff([...staff, response.data]); // Optionally, add new staff to the list
            setNewStaff({
                fullName: '',
                position: '',
                department: '',
                phoneNo: '',
                dateOfBirth: '',
                dateOfJoining: '',
                gender: '',
                workStatus: '',
                emailId: '',
                profilePicture: null,
                qualifications: '',
            }); // Reset form after submission
            setShowModal(false); // Close modal after submission
        } catch (err) {
            setError('Failed to add staff member: ' + err.message);
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
            <div className="staff-list-container">
                <h2>Staff List</h2>

                {/* Add Staff Button */}
                <Button variant="primary" onClick={handleShowModal}>Add Staff</Button>

                {/* Staff Form Modal */}
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Staff</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="fullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="fullName"
                                            value={newStaff.fullName}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="position">
                                        <Form.Label>Position</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="position"
                                            value={newStaff.position}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="department">
                                        <Form.Label>Department</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="department"
                                            value={newStaff.department}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="emailId">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="emailId"
                                            value={newStaff.emailId}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="phoneNo">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="phoneNo"
                                            value={newStaff.phoneNo}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="qualifications">
                                        <Form.Label>Qualifications</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="qualifications"
                                            value={newStaff.qualifications}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="dateOfBirth">
                                        <Form.Label>Date of Birth</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="dateOfBirth"
                                            value={newStaff.dateOfBirth}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="dateOfJoining">
                                        <Form.Label>Date of Joining</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="dateOfJoining"
                                            value={newStaff.dateOfJoining}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="gender"
                                            value={newStaff.gender}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="workStatus">
                                        <Form.Label>Work Status</Form.Label>
                                        <Form.Control
                                            as="select"
                                            name="workStatus"
                                            value={newStaff.workStatus}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="profilePicture">
                                <Form.Label>Profile Picture</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="profilePicture"
                                    onChange={handleFileChange}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit">Add Staff</Button>
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
