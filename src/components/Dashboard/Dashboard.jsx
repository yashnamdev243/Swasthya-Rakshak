import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import DashbordImg from '../../assets/c0a9d3ce8c41bf587cf6c62388f4461e.png';
import Doctorimg from "../../assets/transparent-doctors-day-cartoon-doctor-with-glasses-and-white-coat65d806f5e3b747.1020546517086563739327.png";
import Staffimg from "../../assets/transparent-stethoscope-female-nurse-with-stethoscope-listening-to-heartbe65fa55cf417a89.35696303.png";
import Patientimg from "../../assets/6eeca84f7ec1a58b2b88d33b5dbd7e93.png";
import Facilitiesimage from "../../assets/transparent-sick-room-hospital-room-medical-supplies-isometric-clean-hospital-room-with-medical-supplies-organize661c4707612889.45712943.png";
import './Dashboard.css'; // Ensure to update the CSS for attractive design

const Dashboard = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        preferredDoctor: '',
        appointmentDate: '',
        timeSlot: '',
        reasonForVisit: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Appointment booked:', formData);
    };

    return (
        <Layout>
            <div className="dashboard-container">
                {/* Left Side - Image */}
                <div className="dashboard-image">
                    <img
                        src={DashbordImg}
                        alt="Doctor Smiling"
                        className="dashboard-image-style"
                    />
                </div>

                {/* Right Side - Content */}
                <div className="dashboard-content">
                    <h2>Health is the Real Wealth</h2>
                    <p>
                        Swasthya Rakshak is your trusted partner for better health. We provide expert guidance, reliable tools, and personalized care to simplify health management. Stay informed, connect with professionals, and take proactive steps toward a healthier, happier life. Together, let’s ensure a brighter future for you and your loved ones.
                    </p>
                </div>
            </div>

            {/* Cards Section */}
            <div className="card-container">
                {/* Card 1 - Doctor */}
                <div className="card">
                    <img src={Doctorimg} alt="Doctor" />
                    <h3>Doctor</h3>
                    <p>Our expert doctors are here to provide the best healthcare services.</p>
                </div>

                {/* Card 2 - Patient */}
                <div className="card">
                    <img src={Patientimg} alt="Patient" />
                    <h3>Patient</h3>
                    <p>Our patients receive personalized care and attention for a better experience.</p>
                </div>

                {/* Card 3 - Staff */}
                <div className="card">
                    <img src={Staffimg} alt="Staff" />
                    <h3>Staff</h3>
                    <p>Our dedicated staff members ensure smooth operations and excellent service.</p>
                </div>
            </div>

            {/* New Section for Hospital Facilities */}
            <div className="facilities-container">
                <div className="facilities-content">
                    <h2>Our State-of-the-Art Hospital Facilities</h2>
                    <p>
                        At Swasthya Rakshak, we prioritize your health and comfort with advanced medical technology and expert care. From emergency services to specialized treatments, our skilled doctors, nurses, and professionals provide personalized, compassionate care to meet all your healthcare needs, ensuring a safe, comfortable experience.
                    </p>
                </div>

                <div className="facilities-image">
                    <img
                        src={Facilitiesimage}
                        alt="Hospital Facilities"
                        className="facilities-image-style"
                    />
                </div>
            </div>

            {/* Book Appointment Section - Animated Card */}
            <div className="appointment-section">


                <div className="appointment-form-container">
                    <form onSubmit={handleSubmit} className="appointment-form">
                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="fullName" className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    required
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reasonForVisit" className="form-label">Reason for Visit</label>
                                <textarea
                                    id="reasonForVisit"
                                    name="reasonForVisit"
                                    value={formData.reasonForVisit}
                                    onChange={handleChange}
                                    placeholder="Explain the reason for your visit"
                                    required
                                    className="form-input"
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-column">
                            <div className="form-group">
                                <label htmlFor="preferredDoctor" className="form-label">Preferred Doctor</label>
                                <select
                                    id="preferredDoctor"
                                    name="preferredDoctor"
                                    value={formData.preferredDoctor}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                >
                                    <option value="">Select Doctor</option>
                                    <option value="Dr. A">Dr. A</option>
                                    <option value="Dr. B">Dr. B</option>
                                    <option value="Dr. C">Dr. C</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="appointmentDate" className="form-label">Date</label>
                                <input
                                    type="date"
                                    id="appointmentDate"
                                    name="appointmentDate"
                                    value={formData.appointmentDate}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="timeSlot" className="form-label">Time Slot</label>
                                <select
                                    id="timeSlot"
                                    name="timeSlot"
                                    value={formData.timeSlot}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                >
                                    <option value="">Select Time Slot</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                </select>
                            </div>


                            <button type="submit" className="appointment-submit-btn">
                                Book Appointment
                            </button>
                        </div>

                    </form>
                </div>
                <div className="appointment-left">
                    <h2>Book Your Appointment with Swasthya Rakshak!</h2>
                    <p>
                        Take control of your health by booking an appointment with our trusted doctors. Choose your preferred doctor, date, and time, and we’ll ensure a smooth and personalized healthcare experience. Quick, easy, and dedicated to your well-being—schedule your appointment now for better health!
                    </p>
                </div>
            </div>



        </Layout>
    );
};

export default Dashboard;
