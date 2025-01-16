// // import React, { useState } from 'react';
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import Layout from "../../Layout/Layout";
// import DashbordImg from "../../assets/c0a9d3ce8c41bf587cf6c62388f4461e.png";
// import Doctorimg from "../../assets/transparent-doctors-day-cartoon-doctor-with-glasses-and-white-coat65d806f5e3b747.1020546517086563739327.png";
// import Staffimg from "../../assets/transparent-stethoscope-female-nurse-with-stethoscope-listening-to-heartbe65fa55cf417a89.35696303.png";
// import Patientimg from "../../assets/6eeca84f7ec1a58b2b88d33b5dbd7e93.png";
// import Facilitiesimage from "../../assets/transparent-sick-room-hospital-room-medical-supplies-isometric-clean-hospital-room-with-medical-supplies-organize661c4707612889.45712943.png";
// import "./Dashboard.css"; // Ensure to update the CSS for attractive design
// import Appoinmentimage from "../../assets/transparent-glasses-young-female-doctor-with-serious-expression65ee80a19eb183.12780541171012931.png";
// const Dashboard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [doctorsData, setDoctorsData] = useState([]);

//   useEffect(() => {
//     const fetchDoctorsData = async () => {
//       try {
//         // const response = await axios.get("http://localhost:3000/api/doctors");
//         const response = await axios.get(
//           "http://192.168.46.246:3001/api/doctors"
//         );

//         setDoctorsData(response.data);
//       } catch (error) {
//         console.error("Error fetching doctors data:", error);
//       }
//     };
//     fetchDoctorsData();
//   }, []);
//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   // Form data state
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     reasonForVisit: "",
//     preferredDoctor: "",
//     appointmentDate: "",
//     timeSlot: "",
//   });
//   // const [formData, setFormData] = useState({
//   //     fullName: '',
//   //     phoneNumber: '',
//   //     email: '',
//   //     preferredDoctor: '',
//   //     appointmentDate: '',
//   //     timeSlot: '',
//   //     reasonForVisit: ''
//   // });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Appointment booked:", formData);
//     setIsModalOpen(false);
//   };
//   const handleCloseModal = () => {
//     // Logic to close the modal
//     setIsModalOpen(false); // Assuming `isModalOpen` is managed by a state
//   };

//   return (
//     <Layout>
//       <div className="dashboard-container">
//         {/* Left Side - Image */}
//         <div className="dashboard-image">
//           <img
//             src={DashbordImg}
//             alt="Doctor Smiling"
//             className="dashboard-image-style"
//           />
//         </div>

//         {/* Right Side - Content */}
//         <div className="dashboard-content">
//           <h2>Health is the Real Wealth</h2>
//           <p>
//             Swasthya Rakshak is your trusted partner for better health. We
//             provide expert guidance, reliable tools, and personalized care to
//             simplify health management. Stay informed, connect with
//             professionals, and take proactive steps toward a healthier, happier
//             life. Together, let’s ensure a brighter future for you and your
//             loved ones.
//           </p>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="card-container">
//         {/* Card 1 - Doctor */}
//         <div className="card">
//           <img src={Doctorimg} alt="Doctor" />
//           <h3>Doctor</h3>
//           <p>Available Doctors : {doctorsData.length}</p>{" "}
//           {/* Display total number of doctors */}
//         </div>

//         {/* Card 2 - Patient */}
//         <div className="card">
//           <img src={Patientimg} alt="Patient" />
//           <h3>Patient</h3>
//         </div>

//         {/* Card 3 - Staff */}
//         <div className="card">
//           <img src={Staffimg} alt="Staff" />
//           <h3>Staff</h3>
//         </div>
//       </div>

//       {/* New Section for Hospital Facilities */}

//       <div className="facilities-container">
//         <div className="facilities-content">
//           <h2>Our State-of-the-Art Hospital Facilities</h2>
//           <p>
//             At Swasthya Rakshak, we prioritize your health and comfort with
//             advanced medical technology and expert care. From emergency services
//             to specialized treatments, our skilled doctors, nurses, and
//             professionals provide personalized, compassionate care to meet all
//             your healthcare needs, ensuring a safe, comfortable experience.
//           </p>
//         </div>

//         <div className="facilities-image">
//           <img
//             src={Facilitiesimage}
//             alt="Hospital Facilities"
//             className="facilities-image-style"
//           />
//         </div>
//       </div>

//       {/* Book Appointment Section - Animated Card */}
//       <div className="appointment-section">
//         <div className="Appoinment-image">
//           <img
//             src={Appoinmentimage}
//             alt="Hospital Facilities"
//             className="Appoinment-image-style"
//           />
//         </div>
//         {/* <div className="appointment-form-container">
//                     <form onSubmit={handleSubmit} className="appointment-form">
//                         <div className="form-column">
//                             <div className="form-group">
//                                 <label htmlFor="fullName" className="form-label">Full Name</label>
//                                 <input
//                                     type="text"
//                                     id="fullName"
//                                     name="fullName"
//                                     value={formData.fullName}
//                                     onChange={handleChange}
//                                     placeholder="Enter your full name"
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//                                 <input
//                                     type="text"
//                                     id="phoneNumber"
//                                     name="phoneNumber"
//                                     value={formData.phoneNumber}
//                                     onChange={handleChange}
//                                     placeholder="Enter your phone number"
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="email" className="form-label">Email Address</label>
//                                 <input
//                                     type="email"
//                                     id="email"
//                                     name="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="Enter your email address"
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="reasonForVisit" className="form-label">Reason for Visit</label>
//                                 <textarea
//                                     id="reasonForVisit"
//                                     name="reasonForVisit"
//                                     value={formData.reasonForVisit}
//                                     onChange={handleChange}
//                                     placeholder="Explain the reason for your visit"
//                                     required
//                                     className="form-input"
//                                 ></textarea>
//                             </div>
//                         </div>

//                         <div className="form-column">
//                             <div className="form-group">
//                                 <label htmlFor="preferredDoctor" className="form-label">Preferred Doctor</label>
//                                 <select
//                                     id="preferredDoctor"
//                                     name="preferredDoctor"
//                                     value={formData.preferredDoctor}
//                                     onChange={handleChange}
//                                     required
//                                     className="form-input"
//                                 >
//                                     <option value="">Select Doctor</option>
//                                     <option value="Dr. A">Dr. A</option>
//                                     <option value="Dr. B">Dr. B</option>
//                                     <option value="Dr. C">Dr. C</option>
//                                 </select>
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="appointmentDate" className="form-label">Date</label>
//                                 <input
//                                     type="date"
//                                     id="appointmentDate"
//                                     name="appointmentDate"
//                                     value={formData.appointmentDate}
//                                     onChange={handleChange}
//                                     required
//                                     className="form-input"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="timeSlot" className="form-label">Time Slot</label>
//                                 <select
//                                     id="timeSlot"
//                                     name="timeSlot"
//                                     value={formData.timeSlot}
//                                     onChange={handleChange}
//                                     required
//                                     className="form-input"
//                                 >
//                                     <option value="">Select Time Slot</option>
//                                     <option value="9:00 AM">9:00 AM</option>
//                                     <option value="10:00 AM">10:00 AM</option>
//                                     <option value="11:00 AM">11:00 AM</option>
//                                     <option value="2:00 PM">2:00 PM</option>
//                                     <option value="4:00 PM">4:00 PM</option>
//                                 </select>
//                             </div>


//                             <button type="submit" className="appointment-submit-btn">
//                                 Submit
//                             </button>
//                         </div>

//                     </form>
//                 </div> */}

//         <div className="appointment-left">
//           <h2>Book Your Appointment with Swasthya Rakshak!</h2>
//           <p>
//             Take control of your health by booking an appointment with our
//             trusted doctors. Choose your preferred doctor, date, and time, and
//             we’ll ensure a smooth and personalized healthcare experience. Quick,
//             easy, and dedicated to your well-being—schedule your appointment now
//             for better health!
//             {/* <button type="submit" className="appointment-open-btn">
//                         Book Appointment </button> */}
//             {/* Button to open modal */}
//             <button
//               type="button"
//               className="appointment-open-btn"
//               onClick={toggleModal}
//             >
//               Book Appointment
//             </button>
//           </p>
//           {/* Modal */}
//           {/* {isModalOpen && (
//         <div className="appointment-form-container">
//           <form onSubmit={handleSubmit} className="appointment-form">

//             <div className="form-column">

//               <div className="form-group">

//                 <label htmlFor="fullName" className="form-label">Full Name</label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   required
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   required
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="email" className="form-label">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email address"
//                   required
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="reasonForVisit" className="form-label">Reason for Visit</label>
//                 <textarea
//                   id="reasonForVisit"
//                   name="reasonForVisit"
//                   value={formData.reasonForVisit}
//                   onChange={handleChange}
//                   placeholder="Explain the reason for your visit"
//                   required
//                   className="form-input"
//                 ></textarea>
//               </div>
//             </div>

//             <div className="form-column">
//               <div className="form-group">
//                 <label htmlFor="preferredDoctor" className="form-label">Preferred Doctor</label>
//                 <select
//                   id="preferredDoctor"
//                   name="preferredDoctor"
//                   value={formData.preferredDoctor}
//                   onChange={handleChange}
//                   required
//                   className="form-input"
//                 >
//                   <option value="">Select Doctor</option>
//                   <option value="Dr. A">Dr. A</option>
//                   <option value="Dr. B">Dr. B</option>
//                   <option value="Dr. C">Dr. C</option>
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="appointmentDate" className="form-label">Date</label>
//                 <input
//                   type="date"
//                   id="appointmentDate"
//                   name="appointmentDate"
//                   value={formData.appointmentDate}
//                   onChange={handleChange}
//                   required
//                   className="form-input"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="timeSlot" className="form-label">Time Slot</label>
//                 <select
//                   id="timeSlot"
//                   name="timeSlot"
//                   value={formData.timeSlot}
//                   onChange={handleChange}
//                   required
//                   className="form-input"
//                 >
//                   <option value="">Select Time Slot</option>
//                   <option value="9:00 AM">9:00 AM</option>
//                   <option value="10:00 AM">10:00 AM</option>
//                   <option value="11:00 AM">11:00 AM</option>
//                   <option value="2:00 PM">2:00 PM</option>
//                   <option value="4:00 PM">4:00 PM</option>
//                 </select>
//               </div>

//               <button type="submit" className="appointment-submit-btn">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//                    )} */}
//           {isModalOpen && (
//             <div className="appointment-form-container">
//               <div className="form-header">
//                 <h2>New Appointment</h2>

//                 {/* Cancel Icon */}
//                 <button
//                   type="button"
//                   className="close-icon"
//                   onClick={handleCloseModal}
//                   aria-label="Close"
//                 >
//                   &times; {/* Or use an icon from a library */}
//                 </button>
//               </div>
//               <form onSubmit={handleSubmit} className="appointment-form">
//                 <div className="form-column">
//                   <div className="form-group">
//                     <label htmlFor="fullName" className="form-label">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       placeholder="Enter your full name"
//                       required
//                       className="form-input"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="gender" className="form-label">
//                       Gender
//                     </label>
//                     <select
//                       id="gender"
//                       name="gender"
//                       value={formData.gender}
//                       onChange={handleChange}
//                       required
//                       className="form-input"
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="phoneNumber" className="form-label">
//                       Phone Number
//                     </label>
//                     <input
//                       type="text"
//                       id="phoneNumber"
//                       name="phoneNumber"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       placeholder="Enter your phone number"
//                       required
//                       className="form-input"
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="email" className="form-label">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="Enter your email address"
//                       required
//                       className="form-input"
//                     />
//                   </div>
//                 </div>

//                 <div className="form-column">
//                   <div className="form-group">
//                     <label htmlFor="preferredDoctor" className="form-label">
//                       Preferred Doctor
//                     </label>
//                     <select
//                       id="preferredDoctor"
//                       name="preferredDoctor"
//                       value={formData.preferredDoctor}
//                       onChange={handleChange}
//                       required
//                       className="form-input"
//                     >
//                       <option value="">Select Doctor</option>
//                       <option value="Dr. A">Dr. A</option>
//                       <option value="Dr. B">Dr. B</option>
//                       <option value="Dr. C">Dr. C</option>
//                     </select>
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="appointmentDate" className="form-label">
//                       Date
//                     </label>
//                     <input
//                       type="date"
//                       id="appointmentDate"
//                       name="appointmentDate"
//                       value={formData.appointmentDate}
//                       onChange={handleChange}
//                       required
//                       className="form-input"
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="timeSlot" className="form-label">
//                       Time Slot
//                     </label>
//                     <select
//                       id="timeSlot"
//                       name="timeSlot"
//                       value={formData.timeSlot}
//                       onChange={handleChange}
//                       required
//                       className="form-input"
//                     >
//                       <option value="">Select Time Slot</option>
//                       <option value="9:00 AM">9:00 AM</option>
//                       <option value="10:00 AM">10:00 AM</option>
//                       <option value="11:00 AM">11:00 AM</option>
//                       <option value="2:00 PM">2:00 PM</option>
//                       <option value="4:00 PM">4:00 PM</option>
//                     </select>
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="reasonForVisit" className="form-label">
//                       Reason for Visit
//                     </label>
//                     <textarea
//                       id="reasonForVisit"
//                       name="reasonForVisit"
//                       value={formData.reasonForVisit}
//                       onChange={handleChange}
//                       placeholder="Explain the reason for your visit"
//                       required
//                       className="form-input"
//                     ></textarea>
//                   </div>
//                   <button type="submit" className="appointment-submit-btn">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import hospitalimg from "../../assets/view-building-with-cartoon-style-architecture.png"
// import Layout from "../../Layout/Layout";
// import DashbordImg from "../../assets/c0a9d3ce8c41bf587cf6c62388f4461e.png";
// import Doctorimg from "../../assets/transparent-doctors-day-cartoon-doctor-with-glasses-and-white-coat65d806f5e3b747.1020546517086563739327.png";
// import Staffimg from "../../assets/transparent-stethoscope-female-nurse-with-stethoscope-listening-to-heartbe65fa55cf417a89.35696303.png";
// import Patientimg from "../../assets/6eeca84f7ec1a58b2b88d33b5dbd7e93.png";
// import Facilitiesimage from "../../assets/transparent-sick-room-hospital-room-medical-supplies-isometric-clean-hospital-room-with-medical-supplies-organize661c4707612889.45712943.png";
// import "./Dashboard.css"; // Ensure to update the CSS for attractive design
// import Appoinmentimage from "../../assets/transparent-glasses-young-female-doctor-with-serious-expression65ee80a19eb183.12780541171012931.png";
// import Footer from "../../Layout/Footer";
// import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

// const Dashboard = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [doctorsData, setDoctorsData] = useState([]);
//   const [patientsData, setPatientsData] = useState([]);
//   const [staffsData, setstaffsData] = useState([]);


//   useEffect(() => {
//     const fetchDoctorsData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/doctors");
//         setDoctorsData(response.data); // Assuming response.data is an array
//       } catch (error) {
//         console.error("Error fetching doctors data:", error);
//       }
//     };

//     const fetchPatientsData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/patients");
//         // Check the structure of response.data
//         if (Array.isArray(response.data)) {
//           setPatientsData(response.data); // Directly set if it's an array
//         } else if (response.data.data && Array.isArray(response.data.data)) {
//           setPatientsData(response.data.data); // Handle nested data
//         } else {
//           console.error("Unexpected response structure for patients data:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching patients data:", error);
//       }
//     };

//     const fetchstaffsData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/staff");
//         // Check the structure of response.data
//         if (Array.isArray(response.data)) {
//           setstaffsData(response.data); // Directly set if it's an array
//         } else if (response.data.data && Array.isArray(response.data.data)) {
//           setstaffsData(response.data.data); // Handle nested data
//         } else {
//           console.error("Unexpected response structure for staff data:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching staff data:", error);
//       }
//     };

//     fetchDoctorsData();
//     fetchPatientsData();
//     fetchstaffsData();
//   }, []);
//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   // Form data state
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     reasonForVisit: "",
//     preferredDoctor: "",
//     appointmentDate: "",
//     timeSlot: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Appointment booked:", formData);
//     setIsModalOpen(false);
//   };
//   const handleCloseModal = () => {
//     // Logic to close the modal
//     setIsModalOpen(false); // Assuming `isModalOpen` is managed by a state
//   };

//   return (
//     <Layout>
//         <div className="about-container">
//                       <div className="welcome-section">
//                           <h1 className="welcome-text">
//                               "Welcome to Swasthya Rakshak, your trusted partner in health and well-being!"
//                           </h1>
                          
//                       </div>
//                   </div>
//       <div className="dashboard-container">
//         {/* Left Side - Image */}
//         <div className="dashboard-image">
//           <img src={DashbordImg} alt="Doctor Smiling" className="dashboard-image-style" />
//         </div>

//         {/* Right Side - Content */}
//         <div className="dashboard-content">
//           <h2>Health is the Real Wealth</h2>
//           <p>
//             Swasthya Rakshak is your trusted partner for better health. We
//             provide expert guidance, reliable tools, and personalized care to
//             simplify health management. Stay informed, connect with
//             professionals, and take proactive steps toward a healthier, happier
//             life. Together, let’s ensure a brighter future for you and your
//             loved ones.
//           </p>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="card-container">
//         {/* Card 1 - Doctor */}
//         <div className="card">
//           <img src={Doctorimg} alt="Doctor" />
//           <h3>Doctor</h3>
//           <p>Available Doctors: {doctorsData.length}</p> {/* Display total number of doctors */}
//         </div>

//         {/* Card 2 - Patient */}
//         <div className="card">
//           <img src={Patientimg} alt="Patient" />
//           <h3>Patient</h3>
//           <p>Registered Patients: {patientsData.length}</p> {/* Display total number of patients */}
//         </div>

//         {/* Card 3 - Staff */}
//         <div className="card">
//           <img src={Staffimg} alt="Staff" />
//           <h3>Staff</h3>
//           <p>Registered Staff: {staffsData.length}</p> 
//         </div>
//       </div>

//       {/* Other Sections */}
//       <div className="facilities-container">
//         <div className="facilities-content">
//           <h2>Our State-of-the-Art Hospital Facilities</h2>
//           <p>
//             At Swasthya Rakshak, we prioritize your health and comfort with
//             advanced medical technology and expert care. From emergency services
//             to specialized treatments, our skilled doctors, nurses, and
//             professionals provide personalized, compassionate care to meet all
//             your healthcare needs, ensuring a safe, comfortable experience.
//           </p>
//         </div>

//         <div className="facilities-image">
//           <img
//             src={Facilitiesimage}
//             alt="Hospital Facilities"
//             className="facilities-image-style"
//           />
//         </div>
//       </div>

//       {/* Book Appointment Section - Animated Card */}
//       <div className="appointment-section">
//         <div className="Appoinment-image">
//           <img
//             src={Appoinmentimage}
//             alt="Hospital Facilities"
//             className="Appoinment-image-style"
//           />
//         </div>

//         <div className="appointment-left">
//           <h2>Book Your Appointment with Swasthya Rakshak!</h2>
//           <p>
//             Take control of your health by booking an appointment with our
//             trusted doctors. Choose your preferred doctor, date, and time, and
//             we’ll ensure a smooth and personalized healthcare experience. Quick,
//             easy, and dedicated to your well-being schedule your appointment now
//             for better health!

//             <button
//               className="appointment-open-btn"
//               onClick={toggleModal}
//             >
//               Book Appointment
//             </button>
//           </p>

//         {/* Bootstrap Modal for New Appointment Form */}
// <Modal show={isModalOpen} onHide={handleCloseModal} className="custom-modal">
//   <Modal.Header closeButton>
    
//     <Modal.Title>New Appointment</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <Form onSubmit={handleSubmit}>
//       <Row className="mb-4">
//         {/* Full Name */}
//         <Col md={6}>
//           <Form.Group controlId="formFullName">
//             <Form.Label>Full Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//               required
//               className="form-control-custom"
//             />
//           </Form.Group>
//         </Col>
//         {/* Gender */}
//         <Col md={6}>
//           <Form.Group controlId="formGender">
//             <Form.Label>Gender</Form.Label>
//             <Form.Control
//               as="select"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className="form-control-custom"
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         {/* Phone Number */}
//         <Col md={6}>
//           <Form.Group controlId="formPhoneNumber">
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               placeholder="Enter your phone number"
//               required
//               className="form-control-custom"
//             />
//           </Form.Group>
//         </Col>
//         {/* Email */}
//         <Col md={6}>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email Address</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email address"
//               required
//               className="form-control-custom"
//             />
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         {/* Preferred Doctor */}
//         <Col md={6}>
//           <Form.Group controlId="formPreferredDoctor">
//             <Form.Label>Preferred Doctor</Form.Label>
//             <Form.Control
//               as="select"
//               name="preferredDoctor"
//               value={formData.preferredDoctor}
//               onChange={handleChange}
//               required
//               className="form-control-custom"
//             >
//               <option value="">Select Doctor</option>
//               <option value="Dr. A">Dr. A</option>
//               <option value="Dr. B">Dr. B</option>
//               <option value="Dr. C">Dr. C</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//         {/* Appointment Date */}
//         <Col md={6}>
//           <Form.Group controlId="formAppointmentDate">
//             <Form.Label>Date</Form.Label>
//             <Form.Control
//               type="date"
//               name="appointmentDate"
//               value={formData.appointmentDate}
//               onChange={handleChange}
//               required
//               className="form-control-custom"
//             />
//           </Form.Group>
//         </Col>
//       </Row>

//       <Row className="mb-4">
//         {/* Time Slot */}
//         <Col md={6}>
//           <Form.Group controlId="formTimeSlot">
//             <Form.Label>Time Slot</Form.Label>
//             <Form.Control
//               as="select"
//               name="timeSlot"
//               value={formData.timeSlot}
//               onChange={handleChange}
//               required
//               className="form-control-custom"
//             >
//               <option value="">Select Time Slot</option>
//               <option value="9:00 AM">9:00 AM</option>
//               <option value="10:00 AM">10:00 AM</option>
//               <option value="11:00 AM">11:00 AM</option>
//               <option value="2:00 PM">2:00 PM</option>
//               <option value="4:00 PM">4:00 PM</option>
//             </Form.Control>
//           </Form.Group>
//         </Col>
//         {/* Reason for Visit */}
//         <Col md={6}>
//           <Form.Group controlId="formReasonForVisit">
//             <Form.Label>Reason for Visit</Form.Label>
//             <Form.Control
//               as="textarea"
//               name="reasonForVisit"
//               value={formData.reasonForVisit}
//               onChange={handleChange}
//               placeholder="Explain the reason for your visit"
//               required
//               className="form-control-custom"
//             />
//           </Form.Group>
//         </Col>
//       </Row>

//       {/* Submit and Cancel Buttons */}
//       <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
//         <Button variant="primary" type="submit" className="btn-submit">
//           Submit
//         </Button>
//         <Button variant="secondary" onClick={handleCloseModal} className="btn-cancel">
//           Cancel
//         </Button>
//       </div>
//     </Form>
//   </Modal.Body>
// </Modal>


       
//         </div>
//       </div>
   

// <Footer />
//     </Layout>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../Layout/Layout";
import DashbordImg from "../../assets/c0a9d3ce8c41bf587cf6c62388f4461e.png";
import Doctorimg from "../../assets/transparent-doctors-day-cartoon-doctor-with-glasses-and-white-coat65d806f5e3b747.1020546517086563739327.png";
import Staffimg from "../../assets/transparent-stethoscope-female-nurse-with-stethoscope-listening-to-heartbe65fa55cf417a89.35696303.png";
import Patientimg from "../../assets/6eeca84f7ec1a58b2b88d33b5dbd7e93.png";
import Facilitiesimage from "../../assets/transparent-sick-room-hospital-room-medical-supplies-isometric-clean-hospital-room-with-medical-supplies-organize661c4707612889.45712943.png";
import "./Dashboard.css";
import Appoinmentimage from "../../assets/transparent-glasses-young-female-doctor-with-serious-expression65ee80a19eb183.12780541171012931.png";
import Footer from "../../Layout/Footer";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctorsData, setDoctorsData] = useState([]);
  const [patientsData, setPatientsData] = useState([]);
  const [staffsData, setstaffsData] = useState([]);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/doctors");
        setDoctorsData(response.data);
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };

    const fetchPatientsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/patients");
        if (Array.isArray(response.data)) {
          setPatientsData(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setPatientsData(response.data.data);
        } else {
          console.error("Unexpected response structure for patients data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching patients data:", error);
      }
    };

    const fetchstaffsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/staff");
        if (Array.isArray(response.data)) {
          setstaffsData(response.data);
        } else if (response.data.data && Array.isArray(response.data.data)) {
          setstaffsData(response.data.data);
        } else {
          console.error("Unexpected response structure for staff data:", response.data);
        }
      } catch (error) {
        console.error("Error fetching staff data:", error);
      }
    };

    fetchDoctorsData();
    fetchPatientsData();
    fetchstaffsData();
  }, []);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    reasonForVisit: "",
    preferredDoctor: "",
    appointmentDate: "",
    timeSlot: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send to the API
    const appointmentData = {
      full_name: formData.fullName,
      gender: formData.gender,
      phone_number: formData.phoneNumber,
      email_address: formData.email,
      preferred_doctor: formData.preferredDoctor,
      appointment_date: formData.appointmentDate,
      time_slot: formData.timeSlot,
      reason_for_visit: formData.reasonForVisit,
      status: "Pending", // Default status
    };

    try {
      // Send the POST request to the API
      const response = await axios.post("http://localhost:3000/api/appointments", appointmentData);
      console.log("Appointment successfully booked:", response.data);
      setIsModalOpen(false); // Close the modal after successful submission
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <Layout>
      <div className="about-container">
        <div className="welcome-section">
          <h1 className="welcome-text">
            "Welcome to Swasthya Rakshak, your trusted partner in health and well-being!"
          </h1>
        </div>
      </div>

      <div className="dashboard-container">
        {/* Left Side - Image */}
        <div className="dashboard-image">
          <img src={DashbordImg} alt="Doctor Smiling" className="dashboard-image-style" />
        </div>

        {/* Right Side - Content */}
        <div className="dashboard-content">
          <h2>Health is the Real Wealth</h2>
          <p>
            Swasthya Rakshak is your trusted partner for better health. We
            provide expert guidance, reliable tools, and personalized care to
            simplify health management. Stay informed, connect with
            professionals, and take proactive steps toward a healthier, happier
            life. Together, let’s ensure a brighter future for you and your
            loved ones.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="card-container">
        {/* Card 1 - Doctor */}
        <div className="card">
          <img src={Doctorimg} alt="Doctor" />
          <h3>Doctor</h3>
          <p>Available Doctors: {doctorsData.length}</p>
        </div>

        {/* Card 2 - Patient */}
        <div className="card">
          <img src={Patientimg} alt="Patient" />
          <h3>Patient</h3>
          <p>Registered Patients: {patientsData.length}</p>
        </div>

        {/* Card 3 - Staff */}
        <div className="card">
          <img src={Staffimg} alt="Staff" />
          <h3>Staff</h3>
          <p>Registered Staff: {staffsData.length}</p>
        </div>
      </div>

      {/* Book Appointment Section */}
      <div className="appointment-section">
        <div className="Appoinment-image">
          <img src={Appoinmentimage} alt="Appointment" className="Appoinment-image-style" />
        </div>

        <div className="appointment-left">
          <h2>Book Your Appointment with Swasthya Rakshak!</h2>
          <p>
            Take control of your health by booking an appointment with our trusted doctors.
            Choose your preferred doctor, date, and time, and we’ll ensure a smooth and personalized healthcare experience. 
            Quick, easy, and dedicated to your well-being. Schedule your appointment now!
            <button className="appointment-open-btn" onClick={toggleModal}>Book Appointment</button>
          </p>
        </div>
      </div>

      {/* Bootstrap Modal for New Appointment Form */}
      <Modal show={isModalOpen} onHide={handleCloseModal} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>New Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
              {/* Full Name */}
              <Col md={6}>
                <Form.Group controlId="formFullName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              {/* Gender */}
              <Col md={6}>
                <Form.Group controlId="formGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
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
              {/* Phone Number */}
              <Col md={6}>
                <Form.Group controlId="formPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
              {/* Email */}
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              {/* Preferred Doctor */}
              <Col md={6}>
                <Form.Group controlId="formPreferredDoctor">
                  <Form.Label>Preferred Doctor</Form.Label>
                  <Form.Control
                    as="select"
                    name="preferredDoctor"
                    value={formData.preferredDoctor}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. A">Dr. A</option>
                    <option value="Dr. B">Dr. B</option>
                    <option value="Dr. C">Dr. C</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              {/* Appointment Date */}
              <Col md={6}>
                <Form.Group controlId="formAppointmentDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              {/* Time Slot */}
              <Col md={6}>
                <Form.Group controlId="formTimeSlot">
                  <Form.Label>Time Slot</Form.Label>
                  <Form.Control
                    as="select"
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="form-control-custom"
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
              {/* Reason for Visit */}
              <Col md={6}>
                <Form.Group controlId="formReasonForVisit">
                  <Form.Label>Reason for Visit</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="reasonForVisit"
                    value={formData.reasonForVisit}
                    onChange={handleChange}
                    placeholder="Explain the reason for your visit"
                    required
                    className="form-control-custom"
                  />
                </Form.Group>
              </Col>
            </Row>

   {/* Submit and Cancel Buttons */}
       <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
         <Button variant="primary" type="submit" className="btn-submit">
           Submit
         </Button>
         <Button variant="secondary" onClick={handleCloseModal} className="btn-cancel">
           Cancel
         </Button>
       </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </Layout>
  );
};

export default Dashboard;
