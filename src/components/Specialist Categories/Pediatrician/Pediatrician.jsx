

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../../Layout/Layout";
import Skeleton from "react-loading-skeleton";
import { Modal, Button, Form, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import "./Pediatrician.css"; // Importing the CSS file

const Pediatrician = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to manage the selected doctor
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false); // State for appointment booking modal
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // State for doctor profile modal
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phoneNumber: "",
    email: "",
    preferredDoctor: "",
    appointmentDate: "",
    timeSlot: "",
    reasonForVisit: "",
  });

  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/doctors");
        setDoctorsData(response.data); // Set all doctors data
        // Filter the doctors for Pediatricians only
        const pediatricians = response.data.filter(
          (doctor) => doctor.specialization === "Pediatrician"
        );
        setFilteredDoctors(pediatricians); // Update the filtered state with Pediatricians
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      } finally {
        setIsLoading(false); // Stop loading after data fetch
      }
    };

    fetchDoctorsData();
  }, []);

  // Function to open the booking modal
  const handleOpenBookingModal = (doctor) => {
    setSelectedDoctor(doctor);
    setFormData((prevFormData) => ({
      ...prevFormData,
      preferredDoctor: doctor.full_name,
    }));
    setIsBookingModalOpen(true);
  };

  // Function to close the booking modal
  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
    setFormData({
      fullName: "",
      gender: "",
      phoneNumber: "",
      email: "",
      preferredDoctor: "",
      appointmentDate: "",
      timeSlot: "",
      reasonForVisit: "",
    });
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to submit the appointment form
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      full_name: formData.fullName,
      gender: formData.gender,
      phone_number: formData.phoneNumber,
      email_address: formData.email,
      preferred_doctor: formData.preferredDoctor,
      appointment_date: formData.appointmentDate,
      time_slot: formData.timeSlot,
      reason_for_visit: formData.reasonForVisit,
      status: "Pending",
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/appointments",
        appointmentData
      );
      console.log("Appointment successfully booked:", response.data);
      handleCloseBookingModal();
      alert("Appointment booked successfully!");
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Please try again.");
    }
  };

  // Function to open the profile modal with selected doctor details
  const handleOpenProfileModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsProfileModalOpen(true);
  };

  // Function to close the profile modal
  const handleCloseProfileModal = () => {
    setIsProfileModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <Layout>
      <div className="doctors-container">
        <h1 className="doctors-title">Cardilologist-- Doctors</h1>
        <div className="doctors-grid">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="doctor-card">
                <Skeleton height={150} width={150} className="doctor-images" />
                <h3 className="doctor-name">
                  <Skeleton width="60%" />
                </h3>
                <p className="doctor-detail">
                  <Skeleton width="80%" />
                </p>
                <p className="doctor-detail">
                  <Skeleton width="70%" />
                </p>
                <p className="doctor-detail">
                  <Skeleton width="50%" />
                </p>
                <div className="card-buttons">
                  <Skeleton height={40} width="40%" />
                </div>
              </div>
            ))
            : filteredDoctors.map((doctor, index) => (
              <div key={index} className="doctor-card">
                <img
                  src={`http://localhost:3000/uploads/${doctor.profile_picture}`}
                  alt={`${doctor.full_name}'s profile`}
                  className="doctor-images"
                />
                <h3 className="doctor-name">{doctor.full_name}</h3>
                <p className="doctor-detail">
                  <strong>Specialization:</strong> {doctor.specialization}
                </p>
                <p className="doctor-detail">
                  <strong>Qualifications:</strong> {doctor.qualifications}
                </p>
                <p className="doctor-detail">
                  <strong>Experience:</strong> {doctor.years_of_experience}{" "}
                  years
                </p>
                <div className="card-buttons">
                  <button
                    className="button"
                    onClick={() => handleOpenProfileModal(doctor)}
                  >
                    View Profile
                  </button>
                  <button
                    className="button"
                    onClick={() => handleOpenBookingModal(doctor)}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Profile Modal */}
        {isProfileModalOpen && selectedDoctor && (
          <Modal show={isProfileModalOpen} onHide={handleCloseProfileModal}>
            <Modal.Header closeButton>
              <Modal.Title>Doctor Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={`http://localhost:3000/uploads/${selectedDoctor.profile_picture}`}
                alt={`${selectedDoctor.full_name}'s profile`}
                className="modal-image"
              />
              <h2>{selectedDoctor.full_name}</h2>
              <p>
                <strong>Specialization:</strong> {selectedDoctor.specialization}
              </p>
              <p>
                <strong>Qualifications:</strong> {selectedDoctor.qualifications}
              </p>
              <p>
                <strong>Experience:</strong> {selectedDoctor.years_of_experience} years
              </p>
              <p>
                <strong>Description:</strong> {selectedDoctor.description || "No description available for this doctor."}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseProfileModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}

        {/* Booking Modal */}
        {isBookingModalOpen && (
          <Modal show={isBookingModalOpen} onHide={handleCloseBookingModal}>
            <Modal.Header closeButton>
              <Modal.Title>Book Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formFullName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formGender">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        as="select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formPhoneNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formAppointmentDate">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formTimeSlot">
                      <Form.Label>Time Slot</Form.Label>
                      <Form.Control
                        as="select"
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Time Slot</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formReasonForVisit" className="mb-3">
                  <Form.Label>Reason for Visit</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="reasonForVisit"
                    value={formData.reasonForVisit}
                    onChange={handleInputChange}
                    placeholder="Explain the reason for your visit"
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="secondary" onClick={handleCloseBookingModal}>
                    Cancel
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </Layout>
  );
};

export default Pediatrician;

