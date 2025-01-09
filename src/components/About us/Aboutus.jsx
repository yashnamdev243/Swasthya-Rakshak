import React from 'react';
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

        </Layout>
    );
};

export default Aboutus;
