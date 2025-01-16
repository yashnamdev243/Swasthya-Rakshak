// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../../../Layout/Layout";
// import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// import "./DoctorManage.css";

// const DoctorManage = () => {
//   const [doctorsData, setDoctorsData] = useState([]);
//   const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
//   const [newDoctor, setNewDoctor] = useState({
//     full_name: "",
//     specialization: "",
//     qualifications: "",
//     years_of_experience: "",
//     phone_number: "",
//     email_address: "",
//     consultation_fees: "",
//     hospital_clinic_address: "",
//     working_hours: "",
//     emergency_contact_number: "",
//     room_number: "",
//     profile_picture: "", // Profile picture will be handled by file input
//   });

//   // Fetch doctors data from the API
//   useEffect(() => {
//     const fetchDoctorsData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/doctors");
//         // const response = await axios.get("http://192.168.46.246:3001/api/doctors");

//         setDoctorsData(response.data);
//       } catch (error) {
//         console.error("Error fetching doctors data:", error);
//       }
//     };

//     fetchDoctorsData();
//   }, []);

//   // Handle Add Doctor button click
//   const handleAddDoctor = () => {
//     setShowAddDoctorForm(true); // Show the form
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewDoctor({ ...newDoctor, [name]: value });
//   };

//   // Handle profile picture change
//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     setNewDoctor({ ...newDoctor, profile_picture: file });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Example validation
//     if (!newDoctor.full_name || !newDoctor.specialization) {
//       alert("Please fill all required fields.");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       Object.keys(newDoctor).forEach((key) => {
//         formData.append(key, newDoctor[key]);
//       });

//       const response = await axios.post(
//         "http://localhost:3000/api/doctors",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );
//       console.log("Doctor added:", response.data);
//       setDoctorsData([...doctorsData, response.data]);
//       setShowAddDoctorForm(false);
//     } catch (error) {
//       console.error("Error adding doctor:", error.response.data);
//     }
//   };


//   return (
//     <Layout>
//       <div className="doctor-list-container">
//         {/* Add Doctor Button */}
//         <button className="add-doctor-btn" onClick={handleAddDoctor}>
//           Add Doctor
//         </button>

//         <h2>Doctor Details</h2>

//         {/* Bootstrap Modal for Add Doctor Form */}
//         <Modal
//           show={showAddDoctorForm}
//           onHide={() => setShowAddDoctorForm(false)}
//           className="custom-modal"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Add New Doctor</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form onSubmit={handleSubmit}>
//               {/* Three Inputs in a Row */}
//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formFullName">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="full_name"
//                       value={newDoctor.full_name}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formSpecialization">
//                     <Form.Label>Specialization</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="specialization"
//                       value={newDoctor.specialization}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formQualifications">
//                     <Form.Label>Qualifications</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="qualifications"
//                       value={newDoctor.qualifications}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formExperience">
//                     <Form.Label>Years of Experience</Form.Label>
//                     <Form.Control
//                       type="number"
//                       name="years_of_experience"
//                       value={newDoctor.years_of_experience}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formPhoneNumber">
//                     <Form.Label>Phone Number</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="phone_number"
//                       value={newDoctor.phone_number}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formEmail">
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control
//                       type="email"
//                       name="email_address"
//                       value={newDoctor.email_address}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formConsultationFees">
//                     <Form.Label>Consultation Fees</Form.Label>
//                     <Form.Control
//                       type="number"
//                       name="consultation_fees"
//                       value={newDoctor.consultation_fees}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formHospitalAddress">
//                     <Form.Label>Hospital Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="hospital_clinic_address"
//                       value={newDoctor.hospital_clinic_address}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formWorkingHours">
//                     <Form.Label>Working Hours</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="working_hours"
//                       value={newDoctor.working_hours}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formEmergencyContact">
//                     <Form.Label>Emergency Contact</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="emergency_contact_number"
//                       value={newDoctor.emergency_contact_number}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formRoomNumber">
//                     <Form.Label>Room Number</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="room_number"
//                       value={newDoctor.room_number}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formProfilePicture">
//                     <Form.Label>Profile Picture</Form.Label>
//                     <Form.Control
//                       type="file"
//                       name="profile_picture"
//                       onChange={handleProfilePictureChange}
//                       accept="image/*"
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Add/Cancel Buttons */}
//               <div
//                 className="d-flex justify-content-between"
//                 style={{ gap: "10px" }}
//               >
//                 <Button variant="primary" type="submit" className="btn-submit">
//                   Add Doctor
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   onClick={() => setShowAddDoctorForm(false)}
//                   className="btn-cancel"
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </Form>
//           </Modal.Body>
//         </Modal>

//         {doctorsData.length > 0 ? (
//           <table className="doctors-table">
//             <thead>
//               <tr>
//                 <th>Profile</th>
//                 <th>Name</th>
//                 <th>Specialization</th>
//                 <th>Qualifications</th>
//                 <th>Experience</th>
//                 <th>Phone</th>
//                 <th>Email</th>
//                 <th>Fees</th>
//                 <th>Address</th>
//                 <th>Working Hours</th>
//                 <th>Emergency Contact</th>
//                 <th>Room</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {doctorsData.map((doctor, index) => (
//                 <tr key={index}>
//                   <td>
//                     <img
//                       src={`http://192.168.46.246:3001/uploads/${doctor.profile_picture}`}
//                       alt="Profile"
//                       className="doctor-image"
//                     />
//                   </td>
//                   <td>{doctor.full_name}</td>
//                   <td>{doctor.specialization}</td>
//                   <td>{doctor.qualifications}</td>
//                   <td>{doctor.years_of_experience} years</td>
//                   <td>{doctor.phone_number}</td>
//                   <td>{doctor.email_address}</td>
//                   <td>₹{doctor.consultation_fees}</td>
//                   <td>{doctor.hospital_clinic_address}</td>
//                   <td>{doctor.working_hours}</td>
//                   <td>{doctor.emergency_contact_number}</td>
//                   <td>{doctor.room_number}</td>
//                   <td>{doctor.profile_status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No doctor data available.</p>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default DoctorManage;



import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../Layout/Layout";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS
import "./DoctorManage.css";

const DoctorManage = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search input state

  const [newDoctor, setNewDoctor] = useState({
    full_name: "",
    specialization: "",
    qualifications: "",
    years_of_experience: "",
    phone_number: "",
    email_address: "",
    consultation_fees: "",
    hospital_clinic_address: "",
    working_hours: "",
    emergency_contact_number: "",
    room_number: "",
    profile_picture: "", // Profile picture will be handled by file input
  });

  // Fetch doctors data from the API
  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/doctors");
        // const response = await axios.get("http://192.168.46.246:3001/api/doctors");

        setDoctorsData(response.data);
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };

    fetchDoctorsData();
  }, []);
     // Handle search input change
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

   const filtered = doctorsData.filter((doctor) =>
     doctor.full_name.toLowerCase().includes(value.toLowerCase())
  );
    setFilteredDoctors(filtered);
  };


  // Handle Add Doctor button click
  const handleAddDoctor = () => {
    setShowAddDoctorForm(true); // Show the form
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setNewDoctor({ ...newDoctor, profile_picture: file });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(newDoctor).forEach((key) => {
        formData.append(key, newDoctor[key]);
      });

      const response = await axios.post(
        "http://localhost:3000/api/doctors",
        // "http://192.168.46.246:3001/api/doctors",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setDoctorsData([...doctorsData, response.data]);
      setShowAddDoctorForm(false); // Close the form
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <Layout>
 <div className="doctor-list-container">
 <h2 className="heading">Doctor Details</h2>

        {/* Search Bar */}
        <div className="search-bar">
        <Form.Control
        
          type="text"
          placeholder="Search by Doctor Name"
         value={searchTerm}
         onChange={handleSearch}
         className="search-input"
         />
      </div>        {/* Add Doctor Button */}
        <button className="add-doctor-btn" onClick={handleAddDoctor}>
          Add Doctor
        </button>


        {/* Bootstrap Modal for Add Doctor Form */}
        <Modal
          show={showAddDoctorForm}
          onHide={() => setShowAddDoctorForm(false)}
          className="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Doctor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              {/* Form inputs here */}
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="full_name"
                      value={newDoctor.full_name}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formSpecialization">
                    <Form.Label>Specialization</Form.Label>
                    <Form.Control
                      type="text"
                      name="specialization"
                      value={newDoctor.specialization}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formQualifications">
                    <Form.Label>Qualifications</Form.Label>
                    <Form.Control
                      type="text"
                      name="qualifications"
                      value={newDoctor.qualifications}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formExperience">
                    <Form.Label>Years of Experience</Form.Label>
                    <Form.Control
                      type="number"
                      name="years_of_experience"
                      value={newDoctor.years_of_experience}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone_number"
                      value={newDoctor.phone_number}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email_address"
                      value={newDoctor.email_address}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formConsultationFees">
                    <Form.Label>Consultation Fees</Form.Label>
                    <Form.Control
                      type="number"
                      name="consultation_fees"
                      value={newDoctor.consultation_fees}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formHospitalAddress">
                    <Form.Label>Hospital Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="hospital_clinic_address"
                      value={newDoctor.hospital_clinic_address}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formWorkingHours">
                    <Form.Label>Working Hours</Form.Label>
                    <Form.Control
                      type="text"
                      name="working_hours"
                      value={newDoctor.working_hours}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="formEmergencyContact">
                    <Form.Label>Emergency Contact</Form.Label>
                    <Form.Control
                      type="text"
                      name="emergency_contact_number"
                      value={newDoctor.emergency_contact_number}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formRoomNumber">
                    <Form.Label>Room Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="room_number"
                      value={newDoctor.room_number}
                      onChange={handleInputChange}
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="formProfilePicture">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      name="profile_picture"
                      onChange={handleProfilePictureChange}
                      accept="image/*"
                      className="form-control-custom"
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Add/Cancel Buttons */}
              <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
                <Button variant="primary" type="submit" className="btn-submit">
                  Add Doctor
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setShowAddDoctorForm(false)}
                  className="btn-cancel"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Show skeleton table structure while data is loading */}
        {doctorsData.length === 0 ? (
          <div className="loading-skeleton">
            <table className="doctors-table">
              <thead>
                <tr>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Specialization</th>
                  <th>Qualifications</th>
                  <th>Experience</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Fees</th>
                  <th>Address</th>
                  <th>Working Hours</th>
                  <th>Emergency Contact</th>
                  <th>Room</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, index) => (
                  <tr key={index}>
                    <td><Skeleton circle={true} height={40} width={40} /></td>
                    <td><Skeleton width={150} /></td>
                    <td><Skeleton width={100} /></td>
                    <td><Skeleton width={100} /></td>
                    <td><Skeleton width={50} /></td>
                    <td><Skeleton width={120} /></td>
                    <td><Skeleton width={150} /></td>
                    <td><Skeleton width={80} /></td>
                    <td><Skeleton width={150} /></td>
                    <td><Skeleton width={100} /></td>
                    <td><Skeleton width={120} /></td>
                    <td><Skeleton width={80} /></td>
                    <td><Skeleton width={100} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <table className="doctors-table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Qualifications</th>
                <th>Experience</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Fees</th>
                <th>Address</th>
                <th>Working Hours</th>
                <th>Emergency Contact</th>
                <th>Room</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {doctorsData.map((doctor, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={`http://localhost:3000/uploads/${doctor.profile_picture}`}
                      alt="Profile"
                      className="doctor-image"
                    />
                  </td>
                  <td>{doctor.full_name}</td>
                  <td>{doctor.specialization}</td>
                  <td>{doctor.qualifications}</td>
                  <td>{doctor.years_of_experience} years</td>
                  <td>{doctor.phone_number}</td>
                  <td>{doctor.email_address}</td>
                  <td>₹{doctor.consultation_fees}</td>
                  <td>{doctor.hospital_clinic_address}</td>
                  <td>{doctor.working_hours}</td>
                  <td>{doctor.emergency_contact_number}</td>
                  <td>{doctor.room_number}</td>
                  <td>{doctor.profile_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Layout>
  );
};

export default DoctorManage;



// ========================================================================


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Layout from "../../../Layout/Layout";
// import { Modal, Button, Form, Row, Col } from "react-bootstrap";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import "./DoctorManage.css";

// const DoctorManage = () => {
//   const [doctorsData, setDoctorsData] = useState([]);
//   const [filteredDoctors, setFilteredDoctors] = useState([]); // For filtering based on search
//   const [searchTerm, setSearchTerm] = useState(""); // Search input state
//   const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
//   const [newDoctor, setNewDoctor] = useState({
//     full_name: "",
//     specialization: "",
//     qualifications: "",
//     years_of_experience: "",
//     phone_number: "",
//     email_address: "",
//     consultation_fees: "",
//     hospital_clinic_address: "",
//     working_hours: "",
//     emergency_contact_number: "",
//     room_number: "",
//     profile_picture: "",
//   });

//   // Fetch doctors data from the API
//   useEffect(() => {
//     const fetchDoctorsData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/doctors");
//         setDoctorsData(response.data);
//         setFilteredDoctors(response.data); // Initialize filtered list
//       } catch (error) {
//         console.error("Error fetching doctors data:", error);
//       }
//     };

//     fetchDoctorsData();
//   }, []);

//   // Handle search input change
//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     const filtered = doctorsData.filter((doctor) =>
//       doctor.full_name.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredDoctors(filtered);
//   };

//   // Handle Add Doctor button click
//   const handleAddDoctor = () => {
//     setShowAddDoctorForm(true);
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewDoctor({ ...newDoctor, [name]: value });
//   };

//   // Handle profile picture change
//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     setNewDoctor({ ...newDoctor, profile_picture: file });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       Object.keys(newDoctor).forEach((key) => {
//         formData.append(key, newDoctor[key]);
//       });

//       const response = await axios.post(
//         "http://localhost:3000/api/doctors",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setDoctorsData([...doctorsData, response.data]);
//       setFilteredDoctors([...doctorsData, response.data]); // Update filtered data
//       setShowAddDoctorForm(false);
//     } catch (error) {
//       console.error("Error adding doctor:", error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="doctor-list-container">
//         {/* Search Bar */}
//         <div className="search-bar-container">
//           <input
//             type="text"
//             placeholder="Search by name..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="search-bar"
//           />
//         </div>

//         {/* Add Doctor Button */}
//         <button className="add-doctor-btn" onClick={handleAddDoctor}>
//           Add Doctor
//         </button>

//         <h2 className="heading">Doctor Details</h2>


//         {/* Bootstrap Modal for Add Doctor Form */}
//         <Modal
//           show={showAddDoctorForm}
//           onHide={() => setShowAddDoctorForm(false)}
//           className="custom-modal"
//         >
//           <Modal.Header closeButton>
//             <Modal.Title>Add New Doctor</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form onSubmit={handleSubmit}>
//               {/* Form inputs here */}
//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formFullName">
//                     <Form.Label>Full Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="full_name"
//                       value={newDoctor.full_name}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formSpecialization">
//                     <Form.Label>Specialization</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="specialization"
//                       value={newDoctor.specialization}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formQualifications">
//                     <Form.Label>Qualifications</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="qualifications"
//                       value={newDoctor.qualifications}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formExperience">
//                     <Form.Label>Years of Experience</Form.Label>
//                     <Form.Control
//                       type="number"
//                       name="years_of_experience"
//                       value={newDoctor.years_of_experience}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formPhoneNumber">
//                     <Form.Label>Phone Number</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="phone_number"
//                       value={newDoctor.phone_number}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formEmail">
//                     <Form.Label>Email Address</Form.Label>
//                     <Form.Control
//                       type="email"
//                       name="email_address"
//                       value={newDoctor.email_address}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formConsultationFees">
//                     <Form.Label>Consultation Fees</Form.Label>
//                     <Form.Control
//                       type="number"
//                       name="consultation_fees"
//                       value={newDoctor.consultation_fees}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formHospitalAddress">
//                     <Form.Label>Hospital Address</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="hospital_clinic_address"
//                       value={newDoctor.hospital_clinic_address}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formWorkingHours">
//                     <Form.Label>Working Hours</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="working_hours"
//                       value={newDoctor.working_hours}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row className="mb-3">
//                 <Col md={4}>
//                   <Form.Group controlId="formEmergencyContact">
//                     <Form.Label>Emergency Contact</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="emergency_contact_number"
//                       value={newDoctor.emergency_contact_number}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formRoomNumber">
//                     <Form.Label>Room Number</Form.Label>
//                     <Form.Control
//                       type="text"
//                       name="room_number"
//                       value={newDoctor.room_number}
//                       onChange={handleInputChange}
//                       required
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col md={4}>
//                   <Form.Group controlId="formProfilePicture">
//                     <Form.Label>Profile Picture</Form.Label>
//                     <Form.Control
//                       type="file"
//                       name="profile_picture"
//                       onChange={handleProfilePictureChange}
//                       accept="image/*"
//                       className="form-control-custom"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               {/* Add/Cancel Buttons */}
//               <div className="d-flex justify-content-between" style={{ gap: "10px" }}>
//                 <Button variant="primary" type="submit" className="btn-submit">
//                   Add Doctor
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   onClick={() => setShowAddDoctorForm(false)}
//                   className="btn-cancel"
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </Form>
//           </Modal.Body>
//         </Modal>
//         {/* The modal code remains unchanged */}

//         {/* Show skeleton table structure while data is loading */}
//         {filteredDoctors.length === 0 ? (
//           <div className="loading-skeleton">
//             {/* Skeleton code remains unchanged */}
//           </div>
//         ) : (
//           <table className="doctors-table">
//             <thead>
//               <tr>
//                 <th>Profile</th>
//                 <th>Name</th>
//                 <th>Specialization</th>
//                 <th>Qualifications</th>
//                 <th>Experience</th>
//                 <th>Phone</th>
//                 <th>Email</th>
//                 <th>Fees</th>
//                 <th>Address</th>
//                 <th>Working Hours</th>
//                 <th>Emergency Contact</th>
//                 <th>Room</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//                 {[...Array(5)].map((_, index) => (
//                   <tr key={index}>
//                     <td><Skeleton circle={true} height={40} width={40} /></td>
//                     <td><Skeleton width={150} /></td>
//                     <td><Skeleton width={100} /></td>
//                     <td><Skeleton width={100} /></td>
//                     <td><Skeleton width={50} /></td>
//                     <td><Skeleton width={120} /></td>
//                     <td><Skeleton width={150} /></td>
//                     <td><Skeleton width={80} /></td>
//                     <td><Skeleton width={150} /></td>
//                     <td><Skeleton width={100} /></td>
//                     <td><Skeleton width={120} /></td>
//                     <td><Skeleton width={80} /></td>
//                     <td><Skeleton width={100} /></td>
//                   </tr>
//                 ))}
//               </tbody>
//             <tbody>
//               {filteredDoctors.map((doctor, index) => (
//                 <tr key={index}>
//                   <td>
//                     <img
//                       src={`http://localhost:3000/uploads/${doctor.profile_picture}`}
//                       alt="Profile"
//                       className="doctor-image"
//                     />
//                   </td>
//                   <td>{doctor.full_name}</td>
//                   <td>{doctor.specialization}</td>
//                   <td>{doctor.qualifications}</td>
//                   <td>{doctor.years_of_experience} years</td>
//                   <td>{doctor.phone_number}</td>
//                   <td>{doctor.email_address}</td>
//                   <td>₹{doctor.consultation_fees}</td>
//                   <td>{doctor.hospital_clinic_address}</td>
//                   <td>{doctor.working_hours}</td>
//                   <td>{doctor.emergency_contact_number}</td>
//                   <td>{doctor.room_number}</td>
//                   <td>{doctor.profile_status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </Layout>
//   );
// };

// export default DoctorManage;
