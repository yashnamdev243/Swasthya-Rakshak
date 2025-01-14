// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../../../Layout/Layout';
// import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
// import './PatientManage.css';

// const PatientManage = () => {
//     const [patientsData, setPatientsData] = useState([]);
//     const [showAddPatientForm, setShowAddPatientForm] = useState(false);
//     const [newPatient, setNewPatient] = useState({
//         full_name: '',
//         date_of_birth: '',
//         gender: '',
//         address: '',
//         emergency_contact: '',
//         medical_history: '',
//         reason_for_visit: '',
//         admit_date: '',
//         disease: '',
//         profile_picture: null, // Replaced image with profile_picture
//     });

//     // Fetch patients data from the API
//     useEffect(() => {
//         const fetchPatientsData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/patients');
//                 // const response = await axios.get('http://192.168.46.246:5000/api/patients');
//                 if (response.data.success) {
//                     setPatientsData(response.data.data);  // Adjusting to correct response structure
//                 } else {
//                     console.error('Error fetching data:', response.data.message);
//                 }
//             } catch (error) {
//                 console.error('Error fetching patients data:', error);
//             }
//         };

//         fetchPatientsData();
//     }, []);


//     // Handle Add Patient button click
//     const handleAddPatient = () => {
//         setShowAddPatientForm(true); // Show the form
//     };

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewPatient({ ...newPatient, [name]: value });
//     };

//     // Handle image file input change
//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setNewPatient({ ...newPatient, profile_picture: file });  // Replaced image with profile_picture
//         }
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('full_name', newPatient.full_name);
//         formData.append('date_of_birth', newPatient.date_of_birth);
//         formData.append('gender', newPatient.gender);
//         formData.append('address', newPatient.address);
//         formData.append('emergency_contact', newPatient.emergency_contact);
//         formData.append('medical_history', newPatient.medical_history);
//         formData.append('reason_for_visit', newPatient.reason_for_visit);
//         formData.append('admit_date', newPatient.admit_date);
//         formData.append('disease', newPatient.disease);
//         if (newPatient.profile_picture) {
//             formData.append('profile_picture', newPatient.profile_picture);  // Replaced image with profile_picture
//         }

//         try {
//             // const response = await axios.post('http://localhost:3000/api/patients', formData, {
//             const response = await axios.post('http://192.168.46.246:5000/api/patients', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('Patient added:', response.data);
//             setPatientsData([...patientsData, response.data]);
//             setShowAddPatientForm(false); // Close the form
//         } catch (error) {
//             console.error('Error adding patient:', error);
//         }
//     };

//     return (
//         <Layout>
//             <div className="patient-list-container">
//                 {/* Add Patient Button */}
//                 <button className="add-patient-btn" onClick={handleAddPatient}>
//                     Add Patient
//                 </button>

//                 <h2>Patient Details</h2>

//                 {/* Bootstrap Modal for Add Patient Form */}
//                 <Modal show={showAddPatientForm} onHide={() => setShowAddPatientForm(false)}
//                     className='custom-modal'
//                 >
//                     <Modal.Header closeButton>
//                         <Modal.Title>Add New Patient</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body  >
//                         <Form onSubmit={handleSubmit} >
//                             {/* Three Inputs in a Row */}
//                             <Row className="mb-4">
//                                 <Col md={4}>
//                                     <Form.Group controlId="formFullName">
//                                         <Form.Label>Full Name</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="full_name"
//                                             value={newPatient.full_name}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formDateOfBirth">
//                                         <Form.Label>Date of Birth</Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             name="date_of_birth"
//                                             value={newPatient.date_of_birth}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formGender">
//                                         <Form.Label>Gender</Form.Label>
//                                         <Form.Control
//                                             as="select"
//                                             name="gender"
//                                             value={newPatient.gender}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         >
//                                             <option value="">Select Gender</option>
//                                             <option value="Male">Male</option>
//                                             <option value="Female">Female</option>
//                                             <option value="Other">Other</option>
//                                         </Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             <Row className="mb-4">
//                                 <Col md={4}>
//                                     <Form.Group controlId="formAddress">
//                                         <Form.Label>Address</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="address"
//                                             value={newPatient.address}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formEmergencyContact">
//                                         <Form.Label>Emergency Contact</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="emergency_contact"
//                                             value={newPatient.emergency_contact}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formMedicalHistory">
//                                         <Form.Label>Medical History</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="medical_history"
//                                             value={newPatient.medical_history}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             <Row className="mb-4">
//                                 <Col md={4}>
//                                     <Form.Group controlId="formReasonForVisit">
//                                         <Form.Label>Reason for Visit</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="reason_for_visit"
//                                             value={newPatient.reason_for_visit}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formAdmitDate">
//                                         <Form.Label>Admit Date</Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             name="admit_date"
//                                             value={newPatient.admit_date}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formDisease">
//                                         <Form.Label>Disease</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="disease"
//                                             value={newPatient.disease}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             {/* Image Upload */}
//                             <Row className="mb-4">
//                                 <Col md={12}>
//                                     <Form.Group controlId="formProfilePicture">
//                                         <Form.Label>Profile Picture</Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             name="profile_picture"
//                                             onChange={handleImageChange}
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             {/* Add/Cancel Buttons */}
//                             <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
//                                 <Button variant="primary" type="submit" className="btn-submit">
//                                     Add Patient
//                                 </Button>
//                                 <Button variant="secondary" onClick={() => setShowAddPatientForm(false)} className="btn-cancel">
//                                     Cancel
//                                 </Button>
//                             </div>
//                         </Form>
//                     </Modal.Body>
//                 </Modal>


//                 {patientsData.length > 0 ? (
//                     <table className="patients-table">
//                         <thead>
//                             <tr>
//                                 <th>Profile Picture</th>
//                                 <th>Name</th>
//                                 <th>Date of Birth</th>
//                                 <th>Gender</th>
//                                 <th>Address</th>
//                                 <th>Emergency Contact</th>
//                                 <th>Medical History</th>
//                                 <th>Reason for Visit</th>
//                                 <th>Admit Date</th>
//                                 <th>Disease</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {patientsData.map((patient, index) => (
//                                 <tr key={index}>
//                                     <td>
//                                         {patient.profile_picture && (
//                                             <img
//                                                 src={`http://192.168.46.246:5000/uploads/${patient.profile_picture}`}  // Ensure the image path is correct
//                                                 alt={patient.full_name}
//                                                 className="patient-image"
//                                                 style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                                             />
//                                         )}
//                                     </td>
//                                     <td>{patient.full_name}</td>
//                                     <td>{new Date(patient.date_of_birth).toLocaleDateString()}</td>
//                                     <td>{patient.gender}</td>
//                                     <td>{patient.address}</td>
//                                     <td>{patient.emergency_contact}</td>
//                                     <td>{patient.medical_history}</td>
//                                     <td>{patient.reason_for_visit}</td>
//                                     <td>{new Date(patient.admit_date).toLocaleDateString()}</td>
//                                     <td>{patient.disease}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <p>No patient data available.</p>
//                 )}
//             </div>
//         </Layout>
//     );
// };

// export default PatientManage;














// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../../../Layout/Layout';
// import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
// import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
// import 'react-loading-skeleton/dist/skeleton.css'; // Import the CSS for Skeleton
// import './PatientManage.css';

// const PatientManage = () => {
//     const [patientsData, setPatientsData] = useState([]);
//     const [showAddPatientForm, setShowAddPatientForm] = useState(false);
//     const [newPatient, setNewPatient] = useState({
//         full_name: '',
//         date_of_birth: '',
//         gender: '',
//         address: '',
//         emergency_contact: '',
//         medical_history: '',
//         reason_for_visit: '',
//         admit_date: '',
//         disease: '',
//         profile_picture: null,
//     });
//     const [loading, setLoading] = useState(true); // New loading state for skeleton

//     // Fetch patients data from the API
//     useEffect(() => {
//         const fetchPatientsData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/patients');
//                 // const response = await axios.get('http://192.168.46.246:5000/api/patients');
//                 if (response.data.success) {
//                     setPatientsData(response.data.data); // Adjusting to correct response structure
//                 } else {
//                     console.error('Error fetching data:', response.data.message);
//                 }
//             } catch (error) {
//                 console.error('Error fetching patients data:', error);
//             } finally {
//                 setLoading(false); // Set loading to false after data fetch is complete
//             }
//         };

//         fetchPatientsData();
//     }, []);


//     // Handle Add Patient button click
//     const handleAddPatient = () => {
//         setShowAddPatientForm(true); // Show the form
//     };

//     // Handle form input changes
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewPatient({ ...newPatient, [name]: value });
//     };

//     // Handle image file input change
//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setNewPatient({ ...newPatient, profile_picture: file });
//         }
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('full_name', newPatient.full_name);
//         formData.append('date_of_birth', newPatient.date_of_birth);
//         formData.append('gender', newPatient.gender);
//         formData.append('address', newPatient.address);
//         formData.append('emergency_contact', newPatient.emergency_contact);
//         formData.append('medical_history', newPatient.medical_history);
//         formData.append('reason_for_visit', newPatient.reason_for_visit);
//         formData.append('admit_date', newPatient.admit_date);
//         formData.append('disease', newPatient.disease);
//         if (newPatient.profile_picture) {
//             formData.append('profile_picture', newPatient.profile_picture);
//         }

//         try {
//             const response = await axios.post('http://localhost:3000/api/patients', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log('Patient added:', response.data);
//             setPatientsData([...patientsData, response.data]);
//             setShowAddPatientForm(false); // Close the form
//         } catch (error) {
//             console.error('Error adding patient:', error);
//         }
//     };

//     return (
//         <Layout>
//             <div className="patient-list-container">
//                 {/* Add Patient Button */}
//                 <button className="add-patient-btn" onClick={handleAddPatient}>
//                     Add Patient
//                 </button>

//                 <h2 className="heading">Patient Details</h2>

//                 {/* Bootstrap Modal for Add Patient Form */}
//                 <Modal show={showAddPatientForm} onHide={() => setShowAddPatientForm(false)}
//                     className='custom-modal'>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Add New Patient</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form onSubmit={handleSubmit}>
//                             <Row className="mb-4">
//                                 <Col md={4}>
//                                     <Form.Group controlId="formFullName">
//                                         <Form.Label>Full Name</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="full_name"
//                                             value={newPatient.full_name}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formDateOfBirth">
//                                         <Form.Label>Date of Birth</Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             name="date_of_birth"
//                                             value={newPatient.date_of_birth}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formGender">
//                                         <Form.Label>Gender</Form.Label>
//                                         <Form.Control
//                                             as="select"
//                                             name="gender"
//                                             value={newPatient.gender}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         >
//                                             <option value="">Select Gender</option>
//                                             <option value="Male">Male</option>
//                                             <option value="Female">Female</option>
//                                             <option value="Other">Other</option>
//                                         </Form.Control>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             <Row className="mb-4">
//                                 <Col md={4}>
//                                     <Form.Group controlId="formAddress">
//                                         <Form.Label>Address</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="address"
//                                             value={newPatient.address}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formEmergencyContact">
//                                         <Form.Label>Emergency Contact</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="emergency_contact"
//                                             value={newPatient.emergency_contact}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formMedicalHistory">
//                                         <Form.Label>Medical History</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="medical_history"
//                                             value={newPatient.medical_history}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             <Row className="mb-4">
//                                 <Col md={4}>
//                                     <Form.Group controlId="formReasonForVisit">
//                                         <Form.Label>Reason for Visit</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="reason_for_visit"
//                                             value={newPatient.reason_for_visit}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formAdmitDate">
//                                         <Form.Label>Admit Date</Form.Label>
//                                         <Form.Control
//                                             type="date"
//                                             name="admit_date"
//                                             value={newPatient.admit_date}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                                 <Col md={4}>
//                                     <Form.Group controlId="formDisease">
//                                         <Form.Label>Disease</Form.Label>
//                                         <Form.Control
//                                             type="text"
//                                             name="disease"
//                                             value={newPatient.disease}
//                                             onChange={handleInputChange}
//                                             required
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             {/* Image Upload */}
//                             <Row className="mb-4">
//                                 <Col md={12}>
//                                     <Form.Group controlId="formProfilePicture">
//                                         <Form.Label>Profile Picture</Form.Label>
//                                         <Form.Control
//                                             type="file"
//                                             name="profile_picture"
//                                             onChange={handleImageChange}
//                                             className="form-control-custom"
//                                         />
//                                     </Form.Group>
//                                 </Col>
//                             </Row>

//                             {/* Add/Cancel Buttons */}
//                             <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
//                                 <Button variant="primary" type="submit" className="btn-submit">
//                                     Add Patient
//                                 </Button>
//                                 <Button variant="secondary" onClick={() => setShowAddPatientForm(false)} className="btn-cancel">
//                                     Cancel
//                                 </Button>
//                             </div>
//                         </Form>
//                     </Modal.Body>
//                 </Modal>

//                 {/* Table Structure (even if data is loading) */}
//                 <table className="patients-table">
//                     <thead>
//                         <tr>
//                             <th>Profile Picture</th>
//                             <th>Name</th>
//                             <th>Date of Birth</th>
//                             <th>Gender</th>
//                             <th>Address</th>
//                             <th>Emergency Contact</th>
//                             <th>Medical History</th>
//                             <th>Reason for Visit</th>
//                             <th>Admit Date</th>
//                             <th>Disease</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {patientsData.length === 0 ? (
//                             // Skeleton Loader when no patient data is loaded
//                             <>
//                                 {[...Array(5)].map((_, index) => (
//                                     <tr key={index}>
//                                         <td><Skeleton circle={true} height={50} width={50} /></td>
//                                         <td><Skeleton width={150} /></td>
//                                         <td><Skeleton width={100} /></td>
//                                         <td><Skeleton width={80} /></td>
//                                         <td><Skeleton width={200} /></td>
//                                         <td><Skeleton width={150} /></td>
//                                         <td><Skeleton width={150} /></td>
//                                         <td><Skeleton width={150} /></td>
//                                         <td><Skeleton width={100} /></td>
//                                         <td><Skeleton width={100} /></td>
//                                     </tr>
//                                 ))}
//                             </>
//                         ) : (
//                             // Actual Patient Data
//                             patientsData.length > 0 ? (
//                                 patientsData.map((patient, index) => (
//                                     <tr key={index}>
//                                         <td>
//                                             {patient.profile_picture ? (
//                                                 <img
//                                                     src={`http://localhost:3000/uploads/${patient.profile_picture}`} // Ensure the image path is correct
//                                                     alt={patient.full_name}
//                                                     className="patient-image"
//                                                     style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                                                 />
//                                             ) : (
//                                                 <span>No Image</span>
//                                             )}
//                                         </td>
//                                         <td>{patient.full_name}</td>
//                                         <td>{new Date(patient.date_of_birth).toLocaleDateString()}</td>
//                                         <td>{patient.gender}</td>
//                                         <td>{patient.address}</td>
//                                         <td>{patient.emergency_contact}</td>
//                                         <td>{patient.medical_history}</td>
//                                         <td>{patient.reason_for_visit}</td>
//                                         <td>{new Date(patient.admit_date).toLocaleDateString()}</td>
//                                         <td>{patient.disease}</td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 // Message when no data is available
//                                 <tr>
//                                     <td colSpan="10">No patient data available.</td>
//                                 </tr>
//                             )
//                         )}
//                     </tbody>
//                 </table>


//             </div>
//         </Layout>
//     );
// };

// export default PatientManage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../Layout/Layout';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton'; // Import the Skeleton component
import 'react-loading-skeleton/dist/skeleton.css'; // Import the CSS for Skeleton
import './PatientManage.css';

const PatientManage = () => {
    const [patientsData, setPatientsData] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [showAddPatientForm, setShowAddPatientForm] = useState(false);
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
    const [loading, setLoading] = useState(true); // New loading state for skeleton
    const [searchTerm, setSearchTerm] = useState(''); // Search term state

    // Fetch patients data from the API
    useEffect(() => {
        const fetchPatientsData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/patients');
                if (response.data.success) {
                    setPatientsData(response.data.data); // Adjusting to correct response structure
                    setFilteredPatients(response.data.data); // Initially setting filteredPatients
                } else {
                    console.error('Error fetching data:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching patients data:', error);
            } finally {
                setLoading(false); // Set loading to false after data fetch is complete
            }
        };

        fetchPatientsData();
    }, []);

    // Handle Search Term Change
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        // Filter patients by name
        const filtered = patientsData.filter(patient =>
            patient.full_name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredPatients(filtered); // Update filtered patients list
    };

    // Handle Add Patient button click
    const handleAddPatient = () => {
        setShowAddPatientForm(true); // Show the form
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPatient({ ...newPatient, [name]: value });
    };

    // Handle image file input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewPatient({ ...newPatient, profile_picture: file });
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('full_name', newPatient.full_name);
        formData.append('date_of_birth', newPatient.date_of_birth);
        formData.append('gender', newPatient.gender);
        formData.append('address', newPatient.address);
        formData.append('emergency_contact', newPatient.emergency_contact);
        formData.append('medical_history', newPatient.medical_history);
        formData.append('reason_for_visit', newPatient.reason_for_visit);
        formData.append('admit_date', newPatient.admit_date);
        formData.append('disease', newPatient.disease);
        if (newPatient.profile_picture) {
            formData.append('profile_picture', newPatient.profile_picture);
        }

        try {
            const response = await axios.post('http://localhost:3000/api/patients', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Patient added:', response.data);
            setPatientsData([...patientsData, response.data]);
            setShowAddPatientForm(false); // Close the form
        } catch (error) {
            console.error('Error adding patient:', error);
        }
    };

    return (
        <Layout>
            <div className="patient-list-container">
                {/* Search Bar */}
                <div className="search-bar">
                    <Form.Control
                        type="text"
                        placeholder="Search by Patient Name"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </div>

                {/* Add Patient Button */}
                <button className="add-patient-btn" onClick={handleAddPatient}>
                    Add Patient
                </button>

                <h2 className="heading">Patient Details</h2>

                {/* Bootstrap Modal for Add Patient Form */}
                <Modal show={showAddPatientForm} onHide={() => setShowAddPatientForm(false)}
                    className='custom-modal'>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Patient</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-4">
                                <Col md={4}>
                                    <Form.Group controlId="formFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="full_name"
                                            value={newPatient.full_name}
                                            onChange={handleInputChange}
                                            required
                                            className="form-control-custom"
                                        />
                                    </Form.Group>
                                </Col>
                                {/* Additional form fields... */}
                            </Row>

                            {/* Add/Cancel Buttons */}
                            <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
                                <Button variant="primary" type="submit" className="btn-submit">
                                    Add Patient
                                </Button>
                                <Button variant="secondary" onClick={() => setShowAddPatientForm(false)} className="btn-cancel">
                                    Cancel
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>

                {/* Table Structure (even if data is loading) */}
                <table className="patients-table">
                    <thead>
                        <tr>
                            <th>Profile Picture</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Emergency Contact</th>
                            <th>Medical History</th>
                            <th>Reason for Visit</th>
                            <th>Admit Date</th>
                            <th>Disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.length === 0 ? (
                            // Skeleton Loader when no patient data is loaded
                            <>
                                {[...Array(5)].map((_, index) => (
                                    <tr key={index}>
                                        <td><Skeleton circle={true} height={50} width={50} /></td>
                                        <td><Skeleton width={150} /></td>
                                        <td><Skeleton width={100} /></td>
                                        <td><Skeleton width={80} /></td>
                                        <td><Skeleton width={200} /></td>
                                        <td><Skeleton width={150} /></td>
                                        <td><Skeleton width={150} /></td>
                                        <td><Skeleton width={150} /></td>
                                        <td><Skeleton width={100} /></td>
                                        <td><Skeleton width={100} /></td>
                                    </tr>
                                ))}
                            </>
                        ) : (
                            // Actual Patient Data
                            filteredPatients.map((patient, index) => (
                                <tr key={index}>
                                    <td>
                                        {patient.profile_picture ? (
                                            <img
                                                src={`http://localhost:3000/uploads/${patient.profile_picture}`} // Ensure the image path is correct
                                                alt={patient.full_name}
                                                className="patient-image"
                                                style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <span>No Image</span>
                                        )}
                                    </td>
                                    <td>{patient.full_name}</td>
                                    <td>{new Date(patient.date_of_birth).toLocaleDateString()}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.address}</td>
                                    <td>{patient.emergency_contact}</td>
                                    <td>{patient.medical_history}</td>
                                    <td>{patient.reason_for_visit}</td>
                                    <td>{new Date(patient.admit_date).toLocaleDateString()}</td>
                                    <td>{patient.disease}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default PatientManage;

