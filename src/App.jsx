import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/Login-Signup/LoginForm.jsx';
import SignupForm from './components/Login-Signup/SignupForm.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const App = () => {
  return (
    <Router>
      <div className="App">
       
 
        <Routes>
        
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
