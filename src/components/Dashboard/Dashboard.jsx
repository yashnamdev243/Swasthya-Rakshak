import React from 'react';
import Layout from '../../Layout/Layout';
import DashbordImg from '../../assets/transparent-doctors-day-young-man-in-lab-coat-smiling65d839306ccbf5.1193297517086692324456.png';
import './Dashboard.css'; // External CSS

const Dashboard = () => {
    return (
        <Layout>
            <div className="dashboard-container">
                <div className="dashboard-heading">
                    <h2>Welcome to the Swasthya Rakshak Dashboard</h2>
                    <p>Your management hub for a healthier tomorrow</p>
                </div>
                <div className="dashboard-image">
                    <img
                        src={DashbordImg}
                        alt="Hospital Dashboard"
                    />
                </div>
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <h3>Total Patients</h3>
                        <p>200</p>
                    </div>
                    <div className="stat-card">
                        <h3>Doctors Available</h3>
                        <p>15</p>
                    </div>
                    <div className="stat-card">
                        <h3>Staff Members</h3>
                        <p>50</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
