import React from 'react'
import Layout from '../../Layout/Layout'
import offlineconsultation from "../../assets/c0a9d3ce8c41bf587cf6c62388f4461e.png"
import onlineconsultation from "../../assets/72abed91e94df20cf803e8bf536e5f0c.png"
import specialists from "../../assets/19e7d647915ec2db2cc54178b44bad4d.png"
import bloodtest from "../../assets/istockphoto-1346546916-612x612-removebg-preview.png"
import dentist from "../../assets/smiling-dentist-character-holding-tooth-showing-thumbs-up-3d-style-isolated-generative-ai_422666-4672-removebg-preview.png"
import pediatrician from "../../assets/360_F_1045887904_QX0ZX58JBoNrMfsapxtiDxbfqSIjqhab-removebg-preview.png"
import cardiologist from "../../assets/360_F_743426379_mV4iIexdUg81VLYGRHEGX1TK9U4DLJ8d-removebg-preview (1).png"
import './Services.css' // Make sure to create this CSS file for styling
import fullbody from "../../assets/pngegg.png"
import xray from "../../assets/kisspng-nuclear-medicine-radiology-medical-diagnosis-thera-5b1893fa0ae272.5315767215283374020446.png"
import Diabetes from "../../assets/2020-04-18-19-07-56_diabetic-health.jpg"
import emergency from "../../assets/kisspng-computer-icons-tree-service-business-24-hours-5abe8923f1d828.3003047015224363879906.png"
import ambulance from "../../assets/101621237cb0616aca6162e8c521a043.png"
import nearbyhospitals from "../../assets/kisspng-singapore-map-stock-photography-singapore-map-5b29fe93b34190.0329701115294788037343.png"
import GeneralConsultations from "../../assets/kisspng-health-medicine-clip-art-5b123c5029fc08.429779301527921744172.png"
import SpecializedCare from "../../assets/pngtree-chongyang-festival-to-help-the-elderly-walk-babysitter-in-blue-uniform-png-image_3801931.jpg"
import EmergencySupport from "../../assets/—Pngtree—cartoon first aid rescuers and_7404354.png"
import Footer from "../../Layout/Footer";


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
                        <img src= {GeneralConsultations}  alt="General Consultation" className="General-image" />

                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Specialized Care</h3>
                        <p>We provide expert care in various medical fields, ensuring specialized attention to your unique health needs.</p>
                        <img src= {SpecializedCare}  alt="General Consultation" className="General-image" />

                    </div>
                    <div className="service-card">
                        <h3 className="service-title">Emergency Support</h3>
                        <p>In case of emergencies, we offer round-the-clock medical support to ensure you're never alone in a crisis.</p>
                        <img src= {EmergencySupport}  alt="General Consultation" className="General-image" />

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
                        <img src={onlineconsultation} alt="Online Consultation" className="mode-image" />
                        <h3 className="mode-title">Online Consultation  </h3>
                        <p>Choose video or audio calls for a consultation from the comfort of your home.</p>
                    </div>
                    <div className="mode-card">
                        <img src= {offlineconsultation}  alt="Offline Consultation" className="mode-image" />
                        <h3 className="mode-title">Offline Consultation  </h3>
                        <p>Visit our clinics for in-person consultations with our doctors.</p>
                    </div>
                </div>

                {/* Specialist Categories */}
                <h3 className="specialist-heading">Specialist Categories  </h3>
                <p className='Specialist-Categories-description'> Specialist Categories encompass Cardiologists, Pediatricians, and Dentists, along with Dermatologists, Neurologists, Psychiatrists, Orthopedic Surgeons, and Oncologists. These experts address diverse health concerns, including heart, child health, dental, skin, mental health, cancer, hormonal, and musculoskeletal conditions, ensuring specialized care.</p>
                <div className="specialist-categories">
                    <div className="specialist-card">
                        <img src={cardiologist} alt="Cardiologist" className="specialist-image" />
                        <h4>  (Cardiologist)</h4>
                    </div>
                  
                    <div className="specialist-card">
                        <img src={pediatrician} alt="Pediatrician" className="specialist-image" />
                        <h4> (Pediatrician)</h4>
                    </div>
                    <div className="specialist-card">
                        <img src={dentist}  alt="Dentist" className="specialist-image" />
                        <h4>  (Dentist)</h4>
                    </div>
                    <div className="specialist-card">
                        <img src={specialists}  alt="Other Specialists" className="specialist-image" />
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
                        <img src={bloodtest} alt="Blood Test" className="test-image" />
                        <h3>Blood Test</h3>
                    </div>
                    <div className="test-card">
                        <img src={Diabetes} alt="Diabetes and Cholesterol Test" className="test-image" />
                        <h3>Diabetes and Cholesterol Tests</h3>
                    </div>
                    <div className="test-card">
                        <img src={fullbody} alt="Full Body Checkup" className="test-image" />
                        <h3>Full Body Checkup</h3>
                    </div>
                    <div className="test-card">
                        <img src={xray} alt="ECG and X-ray" className="test-image" />
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
                        <img src={emergency} alt="Emergency Consultation" className="emergency-image" />
                        <h3>24x7 Emergency Doctor Consultation</h3>
                        <p>Our experienced doctors are available around the clock for emergency consultations. Get expert advice and treatment when you need it most.</p>
                    </div>

                    {/* Ambulance Booking */}
                    <div className="emergency-card">
                        <img src={ambulance} alt="Ambulance Booking" className="emergency-image" />
                        <h3>Ambulance Booking</h3>
                        <p>In case of an emergency, you can quickly book an ambulance. Our fleet of ambulances ensures fast response and safe transport to the hospital.</p>
                    </div>

                    {/* Nearby Hospitals */}
                    <div className="emergency-card">
                        <img src={nearbyhospitals} alt="Nearby Hospitals" className="emergency-image" />
                        <h3>Quick Access to Nearby Hospitals</h3>
                        <p>In case of urgent medical needs, we help you connect with nearby hospitals and clinics for immediate care.</p>
                    </div>
                </div>
            </div>
            <Footer />

        </Layout>
    )
}

export default Services;
