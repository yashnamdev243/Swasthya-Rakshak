import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/Login-Signup/LoginForm.jsx';
import SignupForm from './components/Login-Signup/SignupForm.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import PatientForm from './Patient/PatientForm.jsx';
import Services from './components/Services/Services.jsx';
import Contact from './components/Contact/Contact.jsx';
import Aboutus from './components/About us/Aboutus.jsx';
import Doctors from './components/Doctors/Doctors.jsx';
import Doctor_manage from './components/Manage-Account/Doctor-manage/Doctor_manage.jsx';
import Staff from './components/Manage-Account/Staff-manage/Staff.jsx';
import Patient from './components/Manage-Account/Patient-manage/PatientManage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/patient" element={<PatientForm />} /> */}
          <Route path='/about' element={<Aboutus />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/patient-manage' element={<Patient />} />
          <Route path='/staff-manage' element={<Staff />} />
          <Route path='/doctor-manage' element={<Doctor_manage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
