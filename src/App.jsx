import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/Login-Signup/LoginForm.jsx";
import SignupForm from "./components/Login-Signup/SignupForm.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
//import PatientForm from './Patient/PatientForm.jsx';
import Services from "./components/Services/Services.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Aboutus from "./components/About us/Aboutus.jsx";
import Doctors from './components/Doctors/Doctors.jsx';
import Doctor_manage from "./components/Manage-Account/Doctor-manage/Doctor_manage.jsx";
import Staff from "./components/Manage-Account/Staff-manage/Staff.jsx";
//import Patient from './components/Manage-Account/Patient-manage/PatientManage.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import PatientManage from "./components/Manage-Account/Patient-manage/PatientManage.jsx";
import NotificationPage from "./Layout/Notification/NotificationPage.jsx";
import AccountPage from "./components/Account/AccountPage.jsx";
import Appointment from "./components/Manage-Account/Appointment-manage/Appointment.jsx";
import Patientupdate from "./components/Manage-Account/Patient-manage/Patientupdate.jsx";
import PatientCRUD from "./components/Manage-Account/Patient-manage/PatientCRUD.jsx";
import Cardiologist from "./components/Specialist Categories/Cardilologist/Cardiologist.jsx";
import Pediatrician from "./components/Specialist Categories/Pediatrician/Pediatrician.jsx";
import Dentist from "./components/Specialist Categories/Dentist/Dentist.jsx";
  
 


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/patient" element={<PatientForm />} /> */}
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route
            path="/patient-manage"
            element={<PatientManage />}
          />
          <Route path="/staff-manage" element={<Staff />} />
          <Route
            path="/doctor-manage"
            element={<Doctor_manage />}
          />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/accounts" element={<AccountPage />} />
          <Route path="/appointments-manage" element={<Appointment />} />
          <Route path="/patient-update" element={<Patientupdate />} />
          <Route path="/manage-patients" element={<PatientCRUD />} />
          <Route path="/cardiologist" element={<Cardiologist />} />
          <Route path="/pediatrician" element={<Pediatrician />} />
          <Route path="/dentist" element={<Dentist />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
