import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginForm.css'; // External CSS

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate(); // Initialize useNavigate hook

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', userData);

      if (response.status === 200) {
        alert("Login successful!");
        // Redirect user to the dashboard
        navigate('/dashboard'); // Redirect to dashboard
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>

        <div className="form-group">
          <label htmlFor="email">
            <i className="fas fa-envelope"></i> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            <i className="fas fa-lock"></i> Password
          </label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-toggle`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Login</button>

        <div className="signup-link">
          <p>
            Don't have an account? <a href="/signup">Signup here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
