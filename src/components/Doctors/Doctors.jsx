// import React from 'react'
// import Layout from '../../Layout/Layout'
// import Footer from '../../Layout/Footer'

// const Doctors = () => {
//   return (
//     <Layout>
//       <div>Doctors</div>
//       <Footer/>
//     </Layout>
//   )
// }

// export default Doctors


// import React from 'react';
// import Layout from '../../Layout/Layout';
// import Footer from '../../Layout/Footer';
// import './Doctors.css';

// const doctorsData = [
//   { name: 'Dr. John Doe', specialization: 'Cardiologist' },
//   { name: 'Dr. Sarah Smith', specialization: 'Dermatologist' },
//   { name: 'Dr. Michael Brown', specialization: 'Orthopedic Surgeon' },
//   { name: 'Dr. Emily Davis', specialization: 'Neurologist' },
//   { name: 'Dr. William Johnson', specialization: 'Pediatrician' },
//   { name: 'Dr. Sophia Wilson', specialization: 'Gynecologist' },
// ];

// const Doctors = () => {
//   return (
//     <Layout>
//       <div className="doctors-page">
//         <h1 className="doctors-title">Meet Our Doctors</h1>
//         <div className="doctors-grid">
//           {doctorsData.map((doctor, index) => (
//             <div className="doctor-card" key={index}>
//               <div className="doctor-card-header">
//                 <img
//                   // src={`https://via.placeholder.com/150?text=${doctor.name.split(' ')[0]}`}
//                   src='src\assets\—Pngtree—cartoon first aid rescuers and_7404354.png'
//                   alt={doctor.name}
//                   className="doctor-avatar"
//                 />
//               </div>
//               <div className="doctor-card-body">
//                 <h3 className="doctor-name">{doctor.name}</h3>
//                 <p className="doctor-specialization">{doctor.specialization}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </Layout>
//   );
// };

// export default Doctors;




// import React from 'react';
// import Layout from '../../Layout/Layout';
// import Footer from '../../Layout/Footer';
// import './Doctors.css';

// const doctorsData = [
//   {
//     name: 'Dr. John Doe',
//     specialization: ['Cardiologist', 'General Consultation'],
//     image: 'https://picsum.photos/300/200?random=1', // Placeholder image
//   },
//   {
//     name: 'Dr. Sarah Smith',
//     specialization: ['Dermatologist'],
//     image: 'https://picsum.photos/300/200?random=2', // Placeholder image
//   },
//   {
//     name: 'Dr. Michael Brown',
//     specialization: ['Orthopedic Surgeon', 'Emergency Care'],
//     image: 'https://picsum.photos/300/200?random=3', // Placeholder image
//   },
//   {
//     name: 'Dr. Emily Davis',
//     specialization: ['Neurologist', 'Emergency Care'],
//     image: 'https://picsum.photos/300/200?random=4', // Placeholder image
//   },
//   {
//     name: 'Dr. William Johnson',
//     specialization: ['Pediatrician', 'General Consultation'],
//     image: 'https://picsum.photos/300/200?random=5', // Placeholder image
//   },
//   {
//     name: 'Dr. Sophia Wilson',
//     specialization: ['Gynecologist'],
//     image: 'https://picsum.photos/300/200?random=6', // Placeholder image
//   },
// ];

// const Doctors = () => {
//   return (
//     <Layout>
//       <div className="doctors-page">
//         <h1 className="doctors-title">Our Dedicated Doctors</h1>
//         <div className="doctors-grid">
//           {doctorsData.map((doctor, index) => (
//             <div className="doctor-card" key={index}>
//               <div className="doctor-card-header">
//                 <img
//                   src={doctor.image}
//                   alt={doctor.name}
//                   className="doctor-avatar"
//                 />
//               </div>
//               <div className="doctor-card-body">
//                 <h3 className="doctor-name">{doctor.name}</h3>
//                 <ul className="doctor-specialization">
//                   {doctor.specialization.map((spec, idx) => (
//                     <li key={idx}>{spec}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </Layout>
//   );
// };

// export default Doctors;




// import React, { useState } from 'react';
// import Layout from '../../Layout/Layout';
// import Footer from '../../Layout/Footer';
// import './Doctors.css';

// const doctorsData = [
//   {
//     name: 'Dr. John Doe',
//     specialization: ['Cardiologist', 'General Consultation'],
//     image: 'https://picsum.photos/300/200?random=1',
//     description: 'Dr. John Doe is a leading Cardiologist with 15 years of experience in treating cardiovascular diseases.',
//   },
//   {
//     name: 'Dr. Sarah Smith',
//     specialization: ['Dermatologist'],
//     image: 'https://picsum.photos/300/200?random=2',
//     description: 'Dr. Sarah Smith specializes in skin health and dermatological treatments with 10 years of expertise.',
//   },
//   {
//     name: 'Dr. Michael Brown',
//     specialization: ['Orthopedic Surgeon', 'Emergency Care'],
//     image: 'https://picsum.photos/300/200?random=3',
//     description: 'Dr. Michael Brown is an Orthopedic Surgeon known for his expertise in joint replacement surgeries.',
//   },
//   {
//     name: 'Dr. Emily Davis',
//     specialization: ['Neurologist', 'Emergency Care'],
//     image: 'https://picsum.photos/300/200?random=4',
//     description: 'Dr. Emily Davis has extensive experience in neurology, specializing in stroke management and epilepsy.',
//   },
//   {
//     name: 'Dr. William Johnson',
//     specialization: ['Pediatrician', 'General Consultation'],
//     image: 'https://picsum.photos/300/200?random=5',
//     description: 'Dr. William Johnson is a compassionate Pediatrician with a focus on child health and wellness.',
//   },
//   {
//     name: 'Dr. Sophia Wilson',
//     specialization: ['Gynecologist'],
//     image: 'https://picsum.photos/300/200?random=6',
//     description: 'Dr. Sophia Wilson is a dedicated Gynecologist with expertise in women’s reproductive health.',
//   },
// ];

// const Doctors = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState({});

//   const handleAppointmentClick = (doctor) => {
//     setModalContent({ type: 'appointment', doctor });
//     setShowModal(true);
//   };

//   const handleViewClick = (doctor) => {
//     setModalContent({ type: 'view', doctor });
//     setShowModal(true);
//   };

//   const closeModal = () => setShowModal(false);

//   return (
//     <Layout>
//       <div className="doctors-page">
//         <h1 className="doctors-title">Our Expert Doctors</h1>
//         <div className="doctors-grid">
//           {doctorsData.map((doctor, index) => (
//             <div className="doctor-card" key={index}>
//               <img src={doctor.image} alt={doctor.name} className="doctor-avatar" />
//               <h3 className="doctor-name">{doctor.name}</h3>
//               <ul className="doctor-specialization">
//                 {doctor.specialization.map((spec, idx) => (
//                   <li key={idx}>{spec}</li>
//                 ))}
//               </ul>
//               <div className="doctor-actions">
//                 <button onClick={() => handleAppointmentClick(doctor)} className="btn btn-appointment">Book Appointment</button>
//                 <button onClick={() => handleViewClick(doctor)} className="btn btn-view">View Details</button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {showModal && (
//           <div className="modal-overlay" onClick={closeModal}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//               <button className="modal-close" onClick={closeModal}>X</button>
//               {modalContent.type === 'appointment' && (
//                 <div className="modal-content">
//                   <h2>Book Appointment with {modalContent.doctor.name}</h2>
//                   <form className="appointment-form">
//                     <label>
//                       Your Name:
//                       <input type="text" placeholder="Enter your name" required />
//                     </label>
//                     <label>
//                       Your Email:
//                       <input type="email" placeholder="Enter your email" required />
//                     </label>
//                     <label>
//                       Appointment Date:
//                       <input type="date" required />
//                     </label>
//                     <button type="submit" className="btn btn-submit">Submit</button>
//                   </form>
//                 </div>
//               )}
//               {modalContent.type === 'view' && (
//                 <div className="modal-content">
//                   <h2>{modalContent.doctor.name}</h2>
//                   <img src={modalContent.doctor.image} alt={modalContent.doctor.name} className="modal-image" />
//                   <p>{modalContent.doctor.description}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </Layout>
//   );
// };

// export default Doctors;





// import React, { useState } from 'react';
// import './Doctors.css';
// import Layout from '../../Layout/Layout';
// // import Footer from '../../Layout/Footer'
// import doctor1 from '../../assets/19e7d647915ec2db2cc54178b44bad4d.png';
// import doctor2 from '../../assets/19e7d647915ec2db2cc54178b44bad4d.png';
// import doctor3 from '../../assets/19e7d647915ec2db2cc54178b44bad4d.png';
// import doctor4 from '../../assets/19e7d647915ec2db2cc54178b44bad4d.png';


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
// description: 'Dr. David excels in emergency medical care, providing life-saving treatments under critical conditions.',
//   },
// ];

// const Doctors = () => {
//   const [showAppointmentModal, setShowAppointmentModal] = useState(false);
//   const [showDoctorDetails, setShowDoctorDetails] = useState(null);

//   const openAppointmentModal = () => setShowAppointmentModal(true);
//   const closeAppointmentModal = () => setShowAppointmentModal(false);

//   const openDoctorDetails = (doctor) => setShowDoctorDetails(doctor);
//   const closeDoctorDetails = () => setShowDoctorDetails(null);

//   return (
//    <Layout>

//     <div className="doctors-page">
//       <h1 className="page-title">Our Doctors</h1>
//       <div className="doctors-container">
//         {doctorsData.map((doctor) => (
//           <div className="doctor-card" key={doctor.id}>
//             <img src={doctor.images} alt={doctor.name} className="doctor-images" />
//             <h3 className="doctor-name">{doctor.name}</h3>
//             <p className="doctor-specialization">{doctor.specialization}</p>
//             <div className="doctor-card-buttons">
//               <button className="view-button" onClick={() => openDoctorDetails(doctor)}>
//                 View
//               </button>
//               <button className="appointment-button" onClick={openAppointmentModal}>
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showAppointmentModal && (
//         <div className="modal-overlay" onClick={closeAppointmentModal}>
//           <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
//             <h2>Book Appointment</h2>
//             <form>
//               <label>
//                 Name:
//                 <input type="text" placeholder="Enter your name" />
//               </label>
//               <label>
//                 Date:
//                 <input type="date" />
//               </label>
//               <label>
//                 Time:
//                 <input type="time" />
//               </label>
//               <button type="submit" className="submit-button">
//                 Confirm
//               </button>
//             </form>
//             <button className="close-button" onClick={closeAppointmentModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}

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
//     </div>
//       {/* <Footer /> */}
//        </Layout>
//   );
// };

// export default Doctors;



import React, { useState } from 'react';
import './Doctors.css';
import Layout from '../../Layout/Layout';
// Import images
import doctor1 from '../../assets/19e7d647915ec2db2cc54178b44bad4d.png';
import doctor2 from '../../assets/transparent-glasses-young-female-doctor-with-serious-expression65ee80a19eb183.12780541171012931.png';
import doctor3 from '../../assets/transparent-stethoscope-female-nurse-with-stethoscope-listening-to-heartbe65fa55cf417a89.35696303.png';
import doctor4 from '../../assets/vecteezy_3d-target-icon-or-target-symbol-with-arrow_47492152.png';
import doctor9 from '../../assets/transparent-doctors-day-cartoon-doctor-with-glasses-and-white-coat65d806f5e3b747.1020546517086563739327.png';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Alice Johnson',
    specialization: 'Cardiologist',
    images: doctor1,
    description: 'Dr. Alice is a renowned cardiologist with 10 years of experience in treating heart diseases.',
  },
  {
    id: 2,
    name: 'Dr. Bob Smith',
    specialization: 'Dermatologist',
    images: doctor2,
    description: 'Dr. Bob specializes in skincare treatments and has authored multiple research papers on dermatology.',
  },
  {
    id: 3,
    name: 'Dr. Clara Lee',
    specialization: 'General Consultant',
    images: doctor3,
    description: 'Dr. Clara provides expert consultations for various general health concerns.',
  },
  {
    id: 4,
    name: 'Dr. David Kim',
    specialization: 'Emergency Medicine',
    images: doctor4,
    description: 'Dr. David excels in emergency medical care, providing life-saving treatments under critical conditions.',
  }
  ,
  // Add more data for demonstration
  { id: 5, name: 'Dr. Eva Green', specialization: 'Neurologist', images: doctor4, description: 'Specialist in neurology.' },
  { id: 6, name: 'Dr. Frank White', specialization: 'Pediatrician', images: doctor3, description: 'Expert in child health.' },
  { id: 7, name: 'Dr. Grace Hall', specialization: 'Orthopedic', images: doctor2, description: 'Expert in bone health.' },
  { id: 8, name: 'Dr. Harry Ford', specialization: 'Psychologist', images: doctor1, description: 'Mental health expert.' },
  { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },
  { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },
  { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },
  
  
  { id: 9, name: 'Dr. William Osler', specialization: 'Pathologists', images: doctor9, description: 'Medical expert specializing in the study and diagnosis of diseases through laboratory analysis of blood, tissue, and other bodily fluids.' },
];

const Doctors = () => {
  

  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showDoctorDetails, setShowDoctorDetails] = useState(null);

  const openAppointmentModal = () => setShowAppointmentModal(true);
  const closeAppointmentModal = () => setShowAppointmentModal(false);

  const openDoctorDetails = (doctor) => setShowDoctorDetails(doctor);
  const closeDoctorDetails = () => setShowDoctorDetails(null);

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

  return (
    <Layout>
      <div className="doctors-page">
        <h1 className="page-title">Our Doctors</h1>
        <div className="doctors-container">
          {currentDoctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.images} alt={doctor.name} className="doctor-images" />
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialization">{doctor.specialization}</p>
              <div className="doctor-card-buttons">
              <button className="view-button" onClick={() => openDoctorDetails(doctor)}>
                View
              </button>
              <button className="appointment-button" onClick={openAppointmentModal}>
                Book Appointment
              </button>
              </div>
            </div>
          ))}
        </div>

        {/* {showAppointmentModal && (
        <div className="modal-overlay" onClick={closeAppointmentModal}>
          <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
            <h2>Book Appointment</h2>
            <form>
              <label>
                Name:
                <input type="text" placeholder="Enter your name" />
              </label>
              <label>
                Date:
                <input type="date" />
              </label>
              <label>
                Time:
                <input type="time" />
              </label>
              <button type="submit" className="submit-button">
                Confirm
              </button>
            </form>
            <button className="close-button" onClick={closeAppointmentModal}>
              Close
            </button>
          </div>
        </div>
      )} */}
      {showAppointmentModal && (
  <div className="modal-overlay" onClick={closeAppointmentModal}>
    <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
      <h2>Book Appointment</h2>
      <form>
        <label>
          Full Name:
          <input type="text" placeholder="Enter your full name" required />
        </label>
        <label>
          Email Address:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <label>
          Doctor's Name:
          <input type="text" value={showDoctorDetails?.name || ''} readOnly />
        </label>
        <label>
          Appointment Date:
          <input type="date" required />
        </label>
        <label>
          Appointment Time:
          <input type="time" required />
        </label>
        <button type="submit" className="submit-button">
          Confirm Appointment
        </button>
      </form>
      <button className="close-button" onClick={closeAppointmentModal}>
        Close
      </button>
    </div>
  </div>
)}


      {showDoctorDetails && (
        <div className="modal-overlay" onClick={closeDoctorDetails}>
          <div className="modal-contents" onClick={(e) => e.stopPropagation()}>
            <h2>{showDoctorDetails.name}</h2>
            <p><strong>Specialization:</strong> {showDoctorDetails.specialization}</p>
            <p>{showDoctorDetails.description}</p>
            <button className="close-button" onClick={closeDoctorDetails}>
              Close
            </button>
          </div>
        </div>
      )}

        {/* Pagination Controls */}
        <div className="pagination-controls">
          <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button">
            Previous
          </button>
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-button">
            Next
          </button>
        </div>
      </div>

    </Layout>
  );
};

export default Doctors;
