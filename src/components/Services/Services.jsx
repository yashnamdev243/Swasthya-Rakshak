import React from 'react'
import Layout from '../../Layout/Layout'
import './Services.css' // Make sure to create this CSS file for styling

const Services = () => {
    return (
        <Layout>
            <div className="services-container">
                <h1 className="services-heading">We Provide Solutions for All Your Healthcare Needs</h1>
                <p className="services-description">
                    At Swasthya Rakshak, we offer a comprehensive range of healthcare services designed to meet all of your health requirements. Whether you're looking for general consultations, specialized care, or emergency support, we are here to help. Our dedicated team ensures that you receive the best care possible, every time.
                </p>

                <div className="services-cards">
                    <div className="service-card">
                        <h3 className="service-title">General Consultations</h3>
                        <p>Our general consultations cover a wide variety of health concerns, from routine check-ups to preventive care.</p>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Specialized Care</h3>
                        <p>We provide expert care in various medical fields, ensuring specialized attention to your unique health needs.</p>
                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Emergency Support</h3>
                        <p>In case of emergencies, we offer round-the-clock medical support to ensure you're never alone in a crisis.</p>
                    </div>
                </div>
            </div>
            <div className="doctor-consultation-container">
                <h2 className="doctor-consultation-heading">Doctor Consultation </h2>
                <p className="doctor-consultation-description">
                    Get expert consultation with our specialists and general physicians. You can choose from online or offline consultations based on your convenience.
                </p>

                {/* Modes of Consultation */}
                <div className="consultation-modes">
                    <div className="mode-card">
                        <img src="/images/online-consultation.png" alt="Online Consultation" className="mode-image" />
                        <h3 className="mode-title">Online Consultation  </h3>
                        <p>Choose video or audio calls for a consultation from the comfort of your home.</p>
                    </div>
                    <div className="mode-card">
                        <img src="/images/offline-consultation.png" alt="Offline Consultation" className="mode-image" />
                        <h3 className="mode-title">Offline Consultation  </h3>
                        <p>Visit our clinics for in-person consultations with our doctors.</p>
                    </div>
                </div>

                {/* Specialist Categories */}
                <h3 className="specialist-heading">Specialist Categories  </h3>
                <div className="specialist-categories">
                    <div className="specialist-card">
                        <img src="/images/cardiologist.png" alt="Cardiologist" className="specialist-image" />
                        <h4>  (Cardiologist)</h4>
                    </div>
                    <div className="specialist-card">
                        <img src="/images/dermatologist.png" alt="Dermatologist" className="specialist-image" />
                        <h4> (Dermatologist)</h4>
                    </div>
                    <div className="specialist-card">
                        <img src="/images/pediatrician.png" alt="Pediatrician" className="specialist-image" />
                        <h4> (Pediatrician)</h4>
                    </div>
                    <div className="specialist-card">
                        <img src="/images/dentist.png" alt="Dentist" className="specialist-image" />
                        <h4>  (Dentist)</h4>
                    </div>
                    <div className="specialist-card">
                        <img src="/images/other-specialists.png" alt="Other Specialists" className="specialist-image" />
                        <h4>  (Other Specialists)</h4>
                    </div>
                </div>
            </div>
            <div className="health-checkups-container">
                <h2 className="health-checkups-heading">Health Checkups</h2>
                <p className="health-checkups-description">
                    We offer a wide range of health checkup packages and diagnostic tests to ensure your well-being. From routine blood tests to full body checkups, our comprehensive packages are designed to meet all your health needs.
                </p>

                {/* Offered Tests */}
                <div className="offered-tests">
                    <div className="test-card">
                        <img src="/images/blood-test.png" alt="Blood Test" className="test-image" />
                        <h3>Blood Test</h3>
                    </div>
                    <div className="test-card">
                        <img src="/images/diabetes-cholesterol-test.png" alt="Diabetes and Cholesterol Test" className="test-image" />
                        <h3>Diabetes and Cholesterol Tests</h3>
                    </div>
                    <div className="test-card">
                        <img src="/images/full-body-checkup.png" alt="Full Body Checkup" className="test-image" />
                        <h3>Full Body Checkup</h3>
                    </div>
                    <div className="test-card">
                        <img src="/images/ecg-xray.png" alt="ECG and X-ray" className="test-image" />
                        <h3>ECG, X-ray, and More</h3>
                    </div>
                </div>

                {/* Home Sample Collection */}
             
            </div>
            <div className="emergency-services-container">
                <h2 className="emergency-services-heading">Emergency Services</h2>
                <p className="emergency-services-description">
                    At Swasthya Rakshak, we understand that emergencies require immediate attention. Our 24x7 emergency services ensure that you have access to doctors, ambulances, and nearby hospitals whenever you need them the most.
                </p>

                {/* Emergency Services Row */}
                <div className="emergency-services-row">
                    {/* Emergency Consultation */}
                    <div className="emergency-card">
                        <img src="/images/emergency-consultation.png" alt="Emergency Consultation" className="emergency-image" />
                        <h3>24x7 Emergency Doctor Consultation</h3>
                        <p>Our experienced doctors are available around the clock for emergency consultations. Get expert advice and treatment when you need it most.</p>
                    </div>

                    {/* Ambulance Booking */}
                    <div className="emergency-card">
                        <img src="/images/ambulance-booking.png" alt="Ambulance Booking" className="emergency-image" />
                        <h3>Ambulance Booking</h3>
                        <p>In case of an emergency, you can quickly book an ambulance. Our fleet of ambulances ensures fast response and safe transport to the hospital.</p>
                    </div>

                    {/* Nearby Hospitals */}
                    <div className="emergency-card">
                        <img src="/images/nearby-hospitals.png" alt="Nearby Hospitals" className="emergency-image" />
                        <h3>Quick Access to Nearby Hospitals</h3>
                        <p>In case of urgent medical needs, we help you connect with nearby hospitals and clinics for immediate care.</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Services;
