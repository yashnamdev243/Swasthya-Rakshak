import React from 'react';
import hospitalimg from "../../assets/view-building-with-cartoon-style-architecture.png"
import missionimg from "../../assets/vecteezy_3d-target-icon-or-target-symbol-with-arrow_47492152.png"
import teamimg from "../../assets/portrait-3d-doctors-hospital-attire.png"
import whychooseimg from "../../assets/ddb6577c8c17bebf6d113769a9bcbc4d.png"
import Layout from '../../Layout/Layout';
import Footer from "../../Layout/Footer";

import './Aboutus.css'; // CSS file for styling and animations

const Aboutus = () => {
    return (
        <Layout>
<h3 className='about-head' >"Transforming lives through accessible, innovative, and compassionate healthcare excellence."

</h3>
<p className="welcome-subtext">
                              Join us in our mission to safeguard your health with care, innovation, and commitment.
                          </p>
            <div className="Introduction-container">
                <img src={hospitalimg} alt="Hospital" className="hospital-image" />
                <div className="introduction-section">
                    <div className="intro-card">
                        <h2>Introduction</h2>
                        Swasthya Rakshak, established in 2025, is a leading organization dedicated to improving community health. Its mission is to provide affordable and accessible healthcare services, ensuring quality medical care for everyone. Guided by the motto, "Your Health, Our Priority," it strives to make a positive impact on people's lives.
                    </div>
                </div>

            </div>
            <div className="mission-vision">
                <div className="mission-vision-section">
                    <div className="mission-vision-card">
                        <h2>Mission & Vision</h2>
                        <strong>Mission:</strong> Swasthya Rakshak is committed to providing accessible, affordable, and high-quality healthcare services, aiming to improve the health and well-being of communities across the country. <hr></hr>
                        <strong>Vision:</strong> To create a world where healthcare is available to all, ensuring a healthier, happier, and more sustainable future for everyone.
                    </div>
                </div>
                <img src={missionimg} alt="Mission Image" className="mission-image" />
            </div>
            <div className='our-team-container'>
                <img src={teamimg} alt="Team Image" className="team-image" />
                <div className="our-team-section">
                    <div className="our-team-card">
                        <h2>Our Team</h2>
                        Swasthya Rakshak is powered by a team of dedicated healthcare professionals committed to providing the best care. Our doctors, nurses, and support staff work together to ensure excellent service and care for all. Together, we are focused on making healthcare accessible and improving the lives of the communities we serve.
                    </div>
                </div>
            </div>

            <div className="why-choose-container">
                <div className="why-choose-section">
                    <div className="why-choose-card">
                        <h2>Why Choose Swasthya Rakshak?</h2>
                        Swasthya Rakshak stands out for its trusted doctors and specialists, simple and fast appointment process, 24x7 support, and commitment to confidentiality and data security. We ensure personalized care with a focus on making healthcare reliable and accessible. Choose us for a seamless healthcare experience you can trust.
                    </div>
                </div>
                <img src={whychooseimg} alt="Why Choose Image" className="why-choose-image" />
            </div>
            <Footer />

        </Layout>
    );
};

export default Aboutus;
