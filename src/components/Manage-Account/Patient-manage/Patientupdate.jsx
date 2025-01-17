// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../../../Layout/Layout';
// import './Patientupdate.css';

// const Patientupdate = () => {
//   const [patientsData, setPatientsData] = useState([]);
//   const [filteredPatients, setFilteredPatients] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPatientsData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/patients');
//         if (response.data.success) {
//           setPatientsData(response.data.data); // Assuming API returns an array under `data`
//           setFilteredPatients(response.data.data); // Initially setting filteredPatients
//         } else {
//           console.error('Error fetching data:', response.data.message);
//         }
//       } catch (error) {
//         console.error('Error fetching patients data:', error);
//       } finally {
//         setLoading(false); // Set loading to false after data fetch is complete
//       }
//     };

//     fetchPatientsData();
//   }, []);

//   const deletePatient = async (patientId) => {
//     try {
//       const response = await axios.delete(`http://localhost:3000/api/patients/${patientId}`);
//       if (response.data.success) {
//         // Filter out the deleted patient from the filteredPatients array
//         const updatedPatients = filteredPatients.filter(patient => patient.patient_id !== patientId);
//         setFilteredPatients(updatedPatients);
//         alert('Patient deleted successfully');
//       } else {
//         console.error('Error deleting patient:', response.data.message);
//       }
//     } catch (error) {
//       console.error('Error deleting patient:', error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="patient-update-container">
//         <h2>Patient Information</h2>
//         {loading ? (
//           <p>Loading patients data...</p>
//         ) : filteredPatients.length > 0 ? (
//           <div className="patient-grid">
//             {filteredPatients.map((patient, index) => (
//               <div key={index} className="patient-card">
//                 <h3>{patient.full_name}</h3>
//                 {patient.profile_picture && (
//                   <img
//                     src={`http://localhost:3000/uploads/${patient.profile_picture}`}
//                     alt={patient.full_name}
//                     className="profile-picture"
//                   />

//                 )}
//                 <p><strong>ID</strong> {patient.patient_id}</p>
//                 <p><strong>Date of Birth:</strong> {patient.date_of_birth}</p>
//                 <p><strong>Gender:</strong> {patient.gender}</p>
//                 <p><strong>Address:</strong> {patient.address}</p>
//                 <p><strong>Emergency Contact:</strong> {patient.emergency_contact}</p>
//                 <p><strong>Medical History:</strong> {patient.medical_history}</p>
//                 <p><strong>Reason for Visit:</strong> {patient.reason_for_visit}</p>
//                 <p><strong>Admit Date:</strong> {patient.admit_date}</p>
//                 <p><strong>Disease:</strong> {patient.disease}</p>
//                 <button
//                   className="delete-button"
//                   onClick={() => deletePatient(patient.patient_id)}
//                 >
//                   Delete Patient
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No patients found.</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default Patientupdate;




















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../Layout/Layout';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'; // Importing necessary components
import './Patientupdate.css';

const Patientupdate = () => {
  const [patientsData, setPatientsData] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [currentPatient, setCurrentPatient] = useState(null);
  const [updatedData, setUpdatedData] = useState({
    full_name: '',
    date_of_birth: '',
    gender: '',
    address: '',
    emergency_contact: '',
    medical_history: '',
    reason_for_visit: '',
    admit_date: '',
    disease: '',
    profile_picture: null
  });

  useEffect(() => {
    const fetchPatientsData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/patients');
        if (response.data.success) {
          setPatientsData(response.data.data);
          setFilteredPatients(response.data.data);
        } else {
          console.error('Error fetching data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching patients data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientsData();
  }, []);

  const handleUpdate = (patient) => {
    setCurrentPatient(patient);
    setUpdatedData({
      full_name: patient.full_name,
      date_of_birth: patient.date_of_birth,
      gender: patient.gender,
      address: patient.address,
      emergency_contact: patient.emergency_contact,
      medical_history: patient.medical_history,
      reason_for_visit: patient.reason_for_visit,
      admit_date: patient.admit_date,
      disease: patient.disease,
      profile_picture: null // Assuming you're updating the profile picture separately
    });
    setShowUpdateModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleImageChange = (e) => {
    setUpdatedData({ ...updatedData, profile_picture: e.target.files[0] });
  };

  const saveUpdatedPatient = async () => {
    try {
      const formData = new FormData();
      for (const key in updatedData) {
        formData.append(key, updatedData[key]);
      }

      const response = await axios.put(`http://localhost:3000/api/patients/${currentPatient.patient_id}`, formData);
      if (response.data.success) {
        const updatedPatients = filteredPatients.map(patient =>
          patient.patient_id === currentPatient.patient_id ? { ...patient, ...updatedData } : patient
        );
        setFilteredPatients(updatedPatients);
        setShowUpdateModal(false);
        alert('Patient updated successfully');
      } else {
        console.error('Error updating patient:', response.data.message);
      }
    } catch (error) {
      console.error('Error updating patient:', error);
    }
  };


  const deletePatient = async (patientId) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/patients/${patientId}`);
      if (response.data.success) {
        // Filter out the deleted patient from the filteredPatients array
        const updatedPatients = filteredPatients.filter(patient => patient.patient_id !== patientId);
        setFilteredPatients(updatedPatients);
        alert('Patient deleted successfully');
      } else {
        console.error('Error deleting patient:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };
  return (
    <Layout>
      <div className="patient-update-container">
        <h2>Patient Information</h2>
        {loading ? (
          <p>Loading patients data...</p>
        ) : filteredPatients.length > 0 ? (
          <div className="patient-grid">
            {filteredPatients.map((patient, index) => (
              <div key={index} className="patient-card">
                <h3>{patient.full_name}</h3>
                {patient.profile_picture && (
                  <img
                    src={`http://localhost:3000/uploads/${patient.profile_picture}`}
                    alt={patient.full_name}
                    className="profile-picture"
                  />
                )}
                <p><strong>ID:</strong> {patient.patient_id}</p>
                <p><strong>Date of Birth:</strong> {patient.date_of_birth}</p>
                <p><strong>Gender:</strong> {patient.gender}</p>
                <p><strong>Address:</strong> {patient.address}</p>
                <p><strong>Emergency Contact:</strong> {patient.emergency_contact}</p>
                <p><strong>Medical History:</strong> {patient.medical_history}</p>
                <p><strong>Reason for Visit:</strong> {patient.reason_for_visit}</p>
                <p><strong>Admit Date:</strong> {patient.admit_date}</p>
                <p><strong>Disease:</strong> {patient.disease}</p>
                <Button variant="danger" onClick={() => deletePatient(patient.patient_id)}>
                  Delete Patient
                </Button>
                <Button variant="primary" onClick={() => handleUpdate(patient)}>
                  Update Patient
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <p>No patients found.</p>
        )}
      </div>

      {/* Modal for updating patient */}
      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)} className="custom-modals">
        <Modal.Header closeButton>
          <Modal.Title>Update Patient Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row className="mb-4">
              <Col md={4}>
                <Form.Group controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="full_name"
                    value={updatedData.full_name}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formDateOfBirth">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="date_of_birth"
                    value={updatedData.date_of_birth}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={updatedData.gender}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={4}>
                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={updatedData.address}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formEmergencyContact">
                  <Form.Label>Emergency Contact</Form.Label>
                  <Form.Control
                    type="text"
                    name="emergency_contact"
                    value={updatedData.emergency_contact}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formMedicalHistory">
                  <Form.Label>Medical History</Form.Label>
                  <Form.Control
                    type="text"
                    name="medical_history"
                    value={updatedData.medical_history}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={4}>
                <Form.Group controlId="formReasonForVisit">
                  <Form.Label>Reason for Visit</Form.Label>
                  <Form.Control
                    type="text"
                    name="reason_for_visit"
                    value={updatedData.reason_for_visit}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formAdmitDate">
                  <Form.Label>Admit Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="admit_date"
                    value={updatedData.admit_date}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formDisease">
                  <Form.Label>Disease</Form.Label>
                  <Form.Control
                    type="text"
                    name="disease"
                    value={updatedData.disease}
                    onChange={handleInputChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Image Upload */}
            <Row className="mb-4">
              <Col md={12}>
                <Form.Group controlId="formProfilePicture">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="profile_picture"
                    onChange={handleImageChange}
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Add/Cancel Buttons */}
            <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
              <Button variant="primary" onClick={saveUpdatedPatient} className="btn-submit">
                Save Changes
              </Button>
              <Button variant="secondary" onClick={() => setShowUpdateModal(false)} className="btn-cancel">
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Layout>
  );
};

export default Patientupdate;
