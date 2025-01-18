

// import React, { useState } from 'react';
// import './Doctors.css';
// import Layout from '../../Layout/Layout';
// // Import images
// import doctor1 from '../../assets/19e7d647915ec2db2cc54178b44bad4d.png';
// import doctor2 from '../../assets/transparent-glasses-young-female-doctor-with-serious-expression65ee80a19eb183.12780541171012931.png';
// import doctor3 from '../../assets/transparent-stethoscope-female-nurse-with-stethoscope-listening-to-heartbe65fa55cf417a89.35696303.png';
// import doctor4 from '../../assets/vecteezy_3d-target-icon-or-target-symbol-with-arrow_47492152.png';
// import doctor9 from '../../assets/transparent-doctors-day-cartoon-doctor-with-glasses-and-white-coat65d806f5e3b747.1020546517086563739327.png';

// const doctorsData = [
//   {
//     id: 1,
//     name: 'Dr. Alice Johnson',
//     specialization: 'Cardiologist',
//     images: doctor1,
//     description: 'Dr. Alice is a renowned cardiologist with 10 years of experience in treating heart diseases.',
//   },
//   {
//     id: 2,
//     name: 'Dr. Bob Smith',
//     specialization: 'Dermatologist',
//     images: doctor2,
//     description: 'Dr. Bob specializes in skincare treatments and has authored multiple research papers on dermatology.',
//   },
//   {
//     id: 3,
//     name: 'Dr. Clara Lee',
//     specialization: 'General Consultant',
//     images: doctor3,
//     description: 'Dr. Clara provides expert consultations for various general health concerns.',
//   },
//   {
//     id: 4,
//     name: 'Dr. David Kim',
//     specialization: 'Emergency Medicine',
//     images: doctor4,
//     description: 'Dr. David excels in emergency medical care, providing life-saving treatments under critical conditions.',
//   }
//   ,
//   // Add more data for demonstration
//   { id: 5, name: 'Dr. Eva Green', specialization: 'Neurologist', images: doctor4, description: 'Specialist in neurology.' },
//   { id: 6, name: 'Dr. Frank White', specialization: 'Pediatrician', images: doctor3, description: 'Expert in child health.' },
//   { id: 7, name: 'Dr. Grace Hall', specialization: 'Orthopedic', images: doctor2, description: 'Expert in bone health.' },
//   { id: 8, name: 'Dr. Harry Ford', specialization: 'Psychologist', images: doctor1, description: 'Mental health expert.' },
//   { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },
//   { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },
//   { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },


//   { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },
// ];

// const Doctors = () => {


//   const [showAppointmentModal, setShowAppointmentModal] = useState(false);
//   const [showDoctorDetails, setShowDoctorDetails] = useState(null);

//   const openAppointmentModal = () => setShowAppointmentModal(true);
//   const closeAppointmentModal = () => setShowAppointmentModal(false);

//   const openDoctorDetails = (doctor) => setShowDoctorDetails(doctor);
//   const closeDoctorDetails = () => setShowDoctorDetails(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const doctorsPerPage = 4;

//   const indexOfLastDoctor = currentPage * doctorsPerPage;
//   const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//   const currentDoctors = doctorsData.slice(indexOfFirstDoctor, indexOfLastDoctor);

//   const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);

//   const nextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <Layout>
//       <div className="doctors-page">
//         <h1 className="page-title">Our Doctors</h1>
//         <div className="doctors-container">
//           {currentDoctors.map((doctor) => (
//             <div className="doctor-card" key={doctor.id}>
//               <img src={doctor.images} alt={doctor.name} className="doctor-images" />
//               <h3 className="doctor-name">{doctor.name}</h3>
//               <p className="doctor-specialization">{doctor.specialization}</p>
//               <div className="doctor-card-buttons">
//                 <button className="view-button" onClick={() => openDoctorDetails(doctor)}>
//                   View
//                 </button>
//                 <button className="appointment-button" onClick={openAppointmentModal}>
//                   Book Appointment
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>


//         {showAppointmentModal && (
//           <div className="modal-overlay" onClick={closeAppointmentModal}>
//             <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
//               <h2>Book Appointment</h2>
//               <form>
//                 <label>
//                   Full Name:
//                   <input type="text" placeholder="Enter your full name" required />
//                 </label>
//                 <label>
//                   Email Address:
//                   <input type="email" placeholder="Enter your email" required />
//                 </label>
//                 <label>
//                   Doctor's Name:
//                   <input type="text" value={showDoctorDetails?.name || ''} readOnly />
//                 </label>
//                 <label>
//                   Appointment Date:
//                   <input type="date" required />
//                 </label>
//                 <label>
//                   Appointment Time:
//                   <input type="time" required />
//                 </label>
//                 <button type="submit" className="submit-button">
//                   Confirm Appointment
//                 </button>
//               </form>
//               <button className="close-button" onClick={closeAppointmentModal}>
//                 Close
//               </button>
//             </div>
//           </div>
//         )}


//         {showDoctorDetails && (
//           <div className="modal-overlay" onClick={closeDoctorDetails}>
//             <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
//               <h2>{showDoctorDetails.name}</h2>
//               <p><strong>Specialization:</strong> {showDoctorDetails.specialization}</p>
//               <p>{showDoctorDetails.description}</p>
//               <button className="close-button" onClick={closeDoctorDetails}>
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Pagination Controls */}
//         <div className="pagination-controls">
//           <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button">
//             Previous
//           </button>
//           <span className="page-info">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-button">
//             Next
//           </button>
//         </div>
//       </div>

//     </Layout>
//   );
// };

// export default Doctors;





















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Layout from "../../Layout/Layout";
// import Skeleton from "react-loading-skeleton";
// import { Modal, Button, Form, Row, Col } from "react-bootstrap"; // Import Bootstrap components
// import "./Doctors.css"; // Importing the CSS file

// const Doctors = () => {
//   const [doctorsData, setDoctorsData] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null); // State to manage the selected doctor
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false); // State for appointment booking modal
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // State for doctor profile modal
//   const [formData, setFormData] = useState({
//     fullName: "",
//     gender: "",
//     phoneNumber: "",
//     email: "",
//     preferredDoctor: "",
//     appointmentDate: "",
//     timeSlot: "",
//     reasonForVisit: "",
//   });

//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   useEffect(() => {
//     const fetchDoctorsData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/doctors");
//         setDoctorsData(response.data);
//         setFilteredDoctors(response.data); // Set filteredDoctors to the fetched data initially
//       } catch (error) {
//         console.error("Error fetching doctors data:", error);
//       }
//       finally {
//         setIsLoading(false); // Stop loading after data fetch
//       }
//     };

//     fetchDoctorsData();
//   }, []);

//   // Function to open the booking modal
//   const handleOpenBookingModal = (doctor) => {
//     setSelectedDoctor(doctor);
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       preferredDoctor: doctor.full_name,
//     }));
//     setIsBookingModalOpen(true);
//   };

//   // Function to close the booking modal
//   const handleCloseBookingModal = () => {
//     setIsBookingModalOpen(false);
//     setSelectedDoctor(null);
//     setFormData({
//       fullName: "",
//       gender: "",
//       phoneNumber: "",
//       email: "",
//       preferredDoctor: "",
//       appointmentDate: "",
//       timeSlot: "",
//       reasonForVisit: "",
//     });
//   };

//   // Function to handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   // Function to submit the appointment form
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     const appointmentData = {
//       full_name: formData.fullName,
//       gender: formData.gender,
//       phone_number: formData.phoneNumber,
//       email_address: formData.email,
//       preferred_doctor: formData.preferredDoctor,
//       appointment_date: formData.appointmentDate,
//       time_slot: formData.timeSlot,
//       reason_for_visit: formData.reasonForVisit,
//       status: "Pending",
//     };

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/appointments",
//         appointmentData
//       );
//       console.log("Appointment successfully booked:", response.data);
//       handleCloseBookingModal();
//       alert("Appointment booked successfully!");
//     } catch (error) {
//       console.error("Error booking appointment:", error);
//       alert("Failed to book appointment. Please try again.");
//     }
//   };

//   // Function to open the profile modal with selected doctor details
//   const handleOpenProfileModal = (doctor) => {
//     setSelectedDoctor(doctor);
//     setIsProfileModalOpen(true);
//   };

//   // Function to close the profile modal
//   const handleCloseProfileModal = () => {
//     setIsProfileModalOpen(false);
//     setSelectedDoctor(null);
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//       const doctorsPerPage = 4;
  
//     const indexOfLastDoctor = currentPage * doctorsPerPage;
//      const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//      const currentDoctors = doctorsData.slice(indexOfFirstDoctor, indexOfLastDoctor);
  
//      const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);
  
//      const nextPage = () => {
//        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//      };
  
//     const prevPage = () => {
//       if (currentPage > 1) setCurrentPage(currentPage - 1);
//      };

//   return (
//     <Layout>
//       <div className="doctors-container">
//         <h1 className="doctors-title">Our Doctors</h1>
//         <div className="doctors-grid">
//           {isLoading
//             ? Array.from({ length: 4 }).map((_, index) => (
//               <div key={index} className="doctor-card">
//                 <Skeleton height={150} width={150} className="doctor-images" />
//                 <h3 className="doctor-name">
//                   <Skeleton width="60%" />
//                 </h3>
//                 <p className="doctor-detail">
//                   <Skeleton width="80%" />
//                 </p>
//                 <p className="doctor-detail">
//                   <Skeleton width="70%" />
//                 </p>
//                 <p className="doctor-detail">
//                   <Skeleton width="50%" />
//                 </p>
//                 <div className="card-buttons">
//                   <Skeleton height={40} width="40%" />
//                 </div>
//               </div>
//             ))
//             : filteredDoctors.map((doctor, index) => (
//               <div key={index} className="doctor-card">
//                 <img
//                   src={`http://localhost:3000/uploads/${doctor.profile_picture}`}
//                   alt={`${doctor.full_name}'s profile`}
//                   className="doctor-images"
//                 />
//                 <h3 className="doctor-name">{doctor.full_name}</h3>
//                 <p className="doctor-detail">
//                   <strong>Specialization:</strong> {doctor.specialization}
//                 </p>
//                 <p className="doctor-detail">
//                   <strong>Qualifications:</strong> {doctor.qualifications}
//                 </p>
//                 <p className="doctor-detail">
//                   <strong>Experience:</strong> {doctor.years_of_experience}{" "}
//                   years
//                 </p>
//                 <div className="card-buttons">
//                   <button
//                     className="button"
//                     onClick={() => handleOpenProfileModal(doctor)}
//                   >
//                     View Profile
//                   </button>
//                   <button
//                     className="button"
//                     onClick={() => handleOpenBookingModal(doctor)}
//                   >
//                     Book Appointment
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>

//         {/* Profile Modal */}
//         {isProfileModalOpen && selectedDoctor && (
//           <Modal show={isProfileModalOpen} onHide={handleCloseProfileModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Doctor Profile</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <img
//                 src={`http://localhost:3000/uploads/${selectedDoctor.profile_picture}`}
//                 alt={`${selectedDoctor.full_name}'s profile`}
//                 className="modal-image"
//               />
//               <h2>{selectedDoctor.full_name}</h2>
//               <p>
//                 <strong>Specialization:</strong> {selectedDoctor.specialization}
//               </p>
//               <p>
//                 <strong>Qualifications:</strong> {selectedDoctor.qualifications}
//               </p>
//               <p>
//                 <strong>Experience:</strong> {selectedDoctor.years_of_experience} years
//               </p>
//               <p>
//                 <strong>Description:</strong> {selectedDoctor.description || "No description available for this doctor."}
//               </p>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleCloseProfileModal}>
//                 Close
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         )}

//         {/* Booking Modal */}
//         {isBookingModalOpen && (
//           <Modal show={isBookingModalOpen} onHide={handleCloseBookingModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>Book Appointment</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <Form onSubmit={handleFormSubmit}>
//                 <Row className="mb-3">
//                   <Col md={6}>
//                     <Form.Group controlId="formFullName">
//                       <Form.Label>Full Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="fullName"
//                         value={formData.fullName}
//                         onChange={handleInputChange}
//                         placeholder="Enter your full name"
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="formGender">
//                       <Form.Label>Gender</Form.Label>
//                       <Form.Control
//                         as="select"
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleInputChange}
//                         required
//                       >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Row className="mb-3">
//                   <Col md={6}>
//                     <Form.Group controlId="formPhoneNumber">
//                       <Form.Label>Phone Number</Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="phoneNumber"
//                         value={formData.phoneNumber}
//                         onChange={handleInputChange}
//                         placeholder="Enter your phone number"
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="formEmail">
//                       <Form.Label>Email</Form.Label>
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         placeholder="Enter your email address"
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Row className="mb-3">
//                   <Col md={6}>
//                     <Form.Group controlId="formAppointmentDate">
//                       <Form.Label>Date</Form.Label>
//                       <Form.Control
//                         type="date"
//                         name="appointmentDate"
//                         value={formData.appointmentDate}
//                         onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Group controlId="formTimeSlot">
//                       <Form.Label>Time Slot</Form.Label>
//                       <Form.Control
//                         as="select"
//                         name="timeSlot"
//                         value={formData.timeSlot}
//                         onChange={handleInputChange}
//                         required
//                       >
//                         <option value="">Select Time Slot</option>
//                         <option value="9:00 AM">9:00 AM</option>
//                         <option value="10:00 AM">10:00 AM</option>
//                         <option value="11:00 AM">11:00 AM</option>
//                         <option value="2:00 PM">2:00 PM</option>
//                         <option value="4:00 PM">4:00 PM</option>
//                       </Form.Control>
//                     </Form.Group>
//                   </Col>
//                 </Row>

//                 <Form.Group controlId="formReasonForVisit" className="mb-3">
//                   <Form.Label>Reason for Visit</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     name="reasonForVisit"
//                     value={formData.reasonForVisit}
//                     onChange={handleInputChange}
//                     placeholder="Explain the reason for your visit"
//                     required
//                   />
//                 </Form.Group>

//                 <div className="d-flex justify-content-between">
//                   <Button variant="primary" type="submit">
//                     Submit
//                   </Button>
//                   <Button variant="secondary" onClick={handleCloseBookingModal}>
//                     Cancel
//                   </Button>
//                 </div>
//               </Form>
//             </Modal.Body>
//           </Modal>
//         )}
//       </div>

      
//         {/* Pagination Controls */}
//          <div className="pagination-controls">
//            <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button">
//              Previous
//           </button>
//          <span className="page-info">
//             Page {currentPage} of {totalPages}
//           </span>
//            <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-button">
//              Next
//          </button>
//          </div>

//     </Layout>
//   );
// };

// export default Doctors;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../Layout/Layout";
import Skeleton from "react-loading-skeleton";
import { Modal, Button, Form, Row, Col } from "react-bootstrap"; // Import Bootstrap components
import "./Doctors.css"; // Importing the CSS file

const Doctors = () => {
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
        setDoctorsData(response.data);
        setFilteredDoctors(response.data); // Set filteredDoctors to the fetched data initially
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
      finally {
        setIsLoading(false); // Stop loading after data fetch
      }
    };

    fetchDoctorsData();
  }, []);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctorsData.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const totalPages = Math.ceil(doctorsData.length / doctorsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

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
        <h1 className="doctors-title">Our Doctors</h1>
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
            : currentDoctors.map((doctor, index) => (
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
                    <strong>Experience:</strong> {doctor.years_of_experience} years
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

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
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

export default Doctors;
