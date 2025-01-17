

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
//               <button className="view-button" onClick={() => openDoctorDetails(doctor)}>
//                 View
//               </button>
//               <button className="appointment-button" onClick={openAppointmentModal}>
//                 Book Appointment
//               </button>
//               </div>
//             </div>
//           ))}
//         </div>


//       {showAppointmentModal && (
//   <div className="modal-overlay" onClick={closeAppointmentModal}>
//     <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
//       <h2>Book Appointment</h2>
//       <form>
//         <label>
//           Full Name:
//           <input type="text" placeholder="Enter your full name" required />
//         </label>
//         <label>
//           Email Address:
//           <input type="email" placeholder="Enter your email" required />
//         </label>
//         <label>
//           Doctor's Name:
//           <input type="text" value={showDoctorDetails?.name || ''} readOnly />
//         </label>
//         <label>
//           Appointment Date:
//           <input type="date" required />
//         </label>
//         <label>
//           Appointment Time:
//           <input type="time" required />
//         </label>
//         <button type="submit" className="submit-button">
//           Confirm Appointment
//         </button>
//       </form>
//       <button className="close-button" onClick={closeAppointmentModal}>
//         Close
//       </button>
//     </div>
//   </div>
// )}


//       {showDoctorDetails && (
//         <div className="modal-overlay" onClick={closeDoctorDetails}>
//           <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
//             <h2>{showDoctorDetails.name}</h2>
//             <p><strong>Specialization:</strong> {showDoctorDetails.specialization}</p>
//             <p>{showDoctorDetails.description}</p>
//             <button className="close-button" onClick={closeDoctorDetails}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}

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
// import "./Doctors.css"; // Importing the CSS file

// const Doctors = () => {
//   const [doctorsData, setDoctorsData] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]);

//   useEffect(() => {
//     const fetchDoctorsData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/doctors");
//         setDoctorsData(response.data);
//         setFilteredDoctors(response.data); // Set filteredDoctors to the fetched data initially
//       } catch (error) {
//         console.error("Error fetching doctors data:", error);
//       }
//     };

//     fetchDoctorsData();
//   }, []);

//   return (
//     <Layout>
//       <div className="doctors-container">
//         <h1 className="doctors-title">Our Doctors</h1>
//         <div className="doctors-grid">
//           {filteredDoctors.map((doctor, index) => (
//             <div key={index} className="doctor-card">
//               <img
//                 src={`http://localhost:3000/uploads/${doctor.profile_picture}`}
//                 alt={`${doctor.full_name}'s profile`}
//                 className="doctor-images"
//               />
//               <h3 className="doctor-name">{doctor.full_name}</h3>
//               <p className="doctor-detail">
//                 <strong>Specialization:</strong> {doctor.specialization}
//               </p>
//               <p className="doctor-detail">
//                 <strong>Qualifications:</strong> {doctor.qualifications}
//               </p>
//               <p className="doctor-detail">
//                 <strong>Experience:</strong> {doctor.years_of_experience} years
//               </p>
//               <div className="card-buttons">
//                 <button
//                   className="button"
//                   onClick={() => alert(`Viewing profile for ${doctor.full_name}`)}
//                 >
//                   View Profile
//                 </button>
//                 <button
//                   className="button book-button"
//                   onClick={() =>
//                     alert(`Booking an appointment with ${doctor.full_name}`)
//                   }
//                 >
//                   Book Appointment
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </Layout>
//   );
// };

// export default Doctors;




import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../Layout/Layout";
import "./Doctors.css"; // Importing the CSS file

const Doctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State to manage the selected doctor
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal visibility

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/doctors");
        setDoctorsData(response.data);
        setFilteredDoctors(response.data); // Set filteredDoctors to the fetched data initially
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };

    fetchDoctorsData();
  }, []);

  // Function to open the modal with selected doctor details
  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <Layout>
      <div className="doctors-container">
        <h1 className="doctors-title">Our Doctors</h1>
        <div className="doctors-grid">
          {filteredDoctors.map((doctor, index) => (
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
                  onClick={() => handleViewProfile(doctor)}
                >
                  View Profile
                </button>
                <button
                  className="button book-buttons"
                  onClick={() =>
                    alert(`Booking an appointment with ${doctor.full_name}`)
                  }
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing doctor details */}
        {isModalOpen && selectedDoctor && (
          <div className="modal-overlay">
            <div className="modal-contents">
              <span className="modal-close" onClick={handleCloseModal}>
                &times;
              </span>
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
                <strong>Experience:</strong>{" "}
                {selectedDoctor.years_of_experience} years
              </p>
              <p>
                <strong>Description:</strong> {selectedDoctor.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Doctors;
