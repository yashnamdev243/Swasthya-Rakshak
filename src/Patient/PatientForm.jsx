
import Layout from '../Layout/Layout';
import React, { useState } from 'react';
import './PatientForm.css';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

const PatientForm = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    full_name: '',
    date_of_birth: '',
    gender: '',
    address: '',
    phone_number: '',
    emergency_contact: '',
    medical_history: '',
    reason_for_visit: '',
    admit_date: '',
    disease: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!validatePhoneNumber(formData.phone_number) || !validatePhoneNumber(formData.emergency_contact)) {
      setError('Please enter valid 10-digit phone numbers.');
      return;
    }

    // Reset error message
    setError('');

    // Add unique ID to the patient
    const newPatient = { ...formData, id: uuidv4() };

    setPatients((prevPatients) => [...prevPatients, newPatient]);

    // Reset form data
    setFormData({
      full_name: '',
      date_of_birth: '',
      gender: '',
      address: '',
      phone_number: '',
      emergency_contact: '',
      medical_history: '',
      reason_for_visit: '',
      admit_date: '',
      disease: ''
    });

    setShowModal(false); // Close modal after submit
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this patient?')) {
      setPatients(patients.filter((patient) => patient.id !== id));
    }
  };

  return (
    <Layout>
      <div className="container">
        <h2>Patient Management</h2>
        <button className="add-patient-btn" onClick={() => setShowModal(true)}>
          Add Patient
        </button>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Emergency Contact</th>
              <th>Medical History</th>
              <th>Reason for Visit</th>
              <th>Admit Date</th>
              <th>Disease</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.full_name}</td>
                <td>{patient.date_of_birth}</td>
                <td>{patient.gender}</td>
                <td>{patient.address}</td>
                <td>{patient.phone_number}</td>
                <td>{patient.emergency_contact}</td>
                <td>{patient.medical_history}</td>
                <td>{patient.reason_for_visit}</td>
                <td>{patient.admit_date}</td>
                <td>{patient.disease}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(patient.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal show">
            <div className="modal-content" style={{ width: "40%" }}>
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
              <h3>Add Patient</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name:</label>
                  <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Date of Birth:</label>
                  <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Gender:</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Address:</label>
                  <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input type="tel" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Emergency Contact:</label>
                  <input type="tel" name="emergency_contact" value={formData.emergency_contact} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Medical History:</label>
                  <textarea name="medical_history" value={formData.medical_history} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group">
                  <label>Reason for Visit:</label>
                  <input type="text" name="reason_for_visit" value={formData.reason_for_visit} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Admit Date:</label>
                  <input type="date" name="admit_date" value={formData.admit_date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Disease:</label>
                  <input type="text" name="disease" value={formData.disease} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PatientForm;
