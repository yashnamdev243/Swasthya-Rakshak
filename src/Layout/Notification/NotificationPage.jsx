import React, { useState } from 'react';
import './NotificationPage.css';
import Footer from "../../Layout/Footer";
import Layout from "../../Layout/Layout";

const NotificationPage = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'Appointment Reminder', message: 'Your appointment with Dr. Smith is scheduled for tomorrow at 10 AM.', read: false },
        { id: 2, title: 'New Test Result', message: 'Your lab test results are now available. Please check your reports.', read: false },
        { id: 3, title: 'Profile Update', message: 'Your profile information was updated successfully.', read: true },
    ]);

    const markAsRead = (id) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    const deleteNotification = (id) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    return (
        <Layout>

        <div className="notification-page">
            <h1 className="page-title">Notifications</h1>
            {notifications.length === 0 ? (
                <p className="no-notifications">You have no notifications.</p>
            ) : (
                <ul className="notification-list">
                    {notifications.map((notification) => (
                        <li
                            key={notification.id}
                            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                        >
                            <h2 className="notification-title">{notification.title}</h2>
                            <p className="notification-message">{notification.message}</p>
                            <div className="notification-actions">
                                {!notification.read && (
                                    <button
                                        className="mark-read-btn"
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        Mark as Read
                                    </button>
                                )}
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteNotification(notification.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
       
<Footer />
    </Layout> 
    );
};

export default NotificationPage;
