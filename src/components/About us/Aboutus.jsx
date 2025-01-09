import React from 'react';
import hospitalimg from "../../assets/f990586c95c040a891d1ac9e818c19f9.png"
import Layout from '../../Layout/Layout';

import './Aboutus.css'; // CSS file for styling and animations

const Aboutus = () => {
    return (
        <Layout>
            <div className="dashboard-container">
                <div className="welcome-section">
                    <h1 className="welcome-text">
                        "Welcome to Swasthya Rakshak, your trusted partner in health and well-being!"
                    </h1>
                    <p className="welcome-subtext">
                        Join us in our mission to safeguard your health with care, innovation, and commitment.
                    </p>
                </div>
            </div>
            <div className="Introduction-container">
                <img src={hospitalimg} alt="Hospital" className="hospital-image" />
                <div className="introduction-section">
                    <div className="intro-card">
                        Swasthya Rakshak, established in 2010, is a leading organization dedicated to improving community health. Its mission is to provide affordable and accessible healthcare services, ensuring quality medical care for everyone. Guided by the motto, "Your Health, Our Priority," it strives to make a positive impact on people's lives.
                    </div>
                </div>

            </div>

        </Layout>
    );
};

export default Aboutus;
