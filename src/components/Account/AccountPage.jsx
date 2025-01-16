import React, { useState } from 'react';
import './AccountPage.css';
import Layout from '../../Layout/Layout';

const AccountPage = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Springfield, USA',
    });

    const handleEdit = (field, value) => {
        setUser((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <Layout>

        <div className="account-page">
            <h1 className="account-title">My Account</h1>
            <div className="account-card">
                <div className="account-field">
                    <label>Name:</label>
                    <span>{user.name}</span>
                </div>
                <div className="account-field">
                    <label>Email:</label>
                    <span>{user.email}</span>
                </div>
                <div className="account-field">
                    <label>Phone:</label>
                    <span>{user.phone}</span>
                </div>
                <div className="account-field">
                    <label>Address:</label>
                    <span>{user.address}</span>
                </div>
                <button className="edit-btn" onClick={() => handleEdit('name', 'Jane Doe')}>
                    Edit Name
                </button>
                <button className="logout-btn">Logout</button>
            </div>
        </div>
        </Layout>

    );
};

export default AccountPage;
