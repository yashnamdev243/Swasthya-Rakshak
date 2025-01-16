// import React, { useState } from 'react';
// import './AccountPage.css';
// import Layout from '../../Layout/Layout';

// const AccountPage = () => {
//     const [user, setUser] = useState({
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         phone: '123-456-7890',
//         address: '123 Main St, Springfield, USA',
//     });

//     const handleEdit = (field, value) => {
//         setUser((prev) => ({ ...prev, [field]: value }));
//     };

//     return (
//         <Layout>

//         <div className="account-page">
//             <h1 className="account-title">My Account</h1>
//             <div className="account-card">
//                 <div className="account-field">
//                     <label>Name:</label>
//                     <span>{user.name}</span>
//                 </div>
//                 <div className="account-field">
//                     <label>Email:</label>
//                     <span>{user.email}</span>
//                 </div>
//                 <div className="account-field">
//                     <label>Phone:</label>
//                     <span>{user.phone}</span>
//                 </div>
//                 <div className="account-field">
//                     <label>Address:</label>
//                     <span>{user.address}</span>
//                 </div>
//                 <button className="edit-btn" onClick={() => handleEdit('name', 'Jane Doe')}>
//                     Edit Name
//                 </button>
//                 <button className="logout-btn">Logout</button>
//             </div>
//         </div>
//         </Layout>

//     );
// };

// export default AccountPage;



// import React, { useState, useEffect } from 'react';
// import './AccountPage.css';
// import Layout from '../../Layout/Layout';

// const AccountPage = () => {
//     const [user, setUser] = useState(null);
    

//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleEdit = (field, value) => {
//     setUser((prev) => ({ ...prev, [field]: value }));
//   };

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//     document.body.classList.toggle('dark-mode', !isDarkMode);
//   };

//   const handleProfilePictureChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setUser((prev) => ({ ...prev, profilePicture: imageUrl }));
//     }
//   };

//   useEffect(() => {
//     // Fetch user data from localStorage
//     const userData = JSON.parse(localStorage.getItem('user'));
//     if (userData) {
//       setUser(userData);
//     }
//   }, []);
//   if (!user) {
//     return <p>Loading...</p>; // Show loading message while fetching data
//   }
//   return (
//     <Layout>
//       <div className="account-page">
//         <h1 className="account-title">My Account</h1>
//         <div className="account-card">
//           <div className="profile-picture-container">
//             <img
//               src={user.profilePicture}
//               alt="Profile"
//               className="profile-picture"
//             />
//             <label className="profile-picture-upload">
//               Change
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleProfilePictureChange}
//               />
//             </label>
//           </div>
//           <div className="account-field">
//             <label>Name:</label>
//             <span>{user.name}</span>
//           </div>
//           <div className="account-field">
//             <label>Email:</label>
//             <span>{user.email}</span>
//           </div>
//           <div className="account-field">
//             <label>Phone:</label>
//             <span>{user.phone}</span>
//           </div>
//           <div className="account-field">
//             <label>Address:</label>
//             <span>{user.address}</span>
//           </div>
//           <button className="edit-btn" onClick={() => handleEdit('name', 'Jane Doe')}>
//             Edit Name
//           </button>
//           <button className="settings-btn">
//             Manage Notifications
//           </button>
//           <button className="theme-toggle-btn" onClick={toggleTheme}>
//             Toggle to {isDarkMode ? 'Light' : 'Dark'} Mode
//           </button>
//           <button className="logout-btn">Logout</button>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AccountPage;



// import React, { useState, useEffect } from 'react';
// import './AccountPage.css';
// import Layout from '../../Layout/Layout';

// const AccountPage = () => {
//     const [user, setUser] = useState(null);
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const [isEditing, setIsEditing] = useState({}); // Tracks which fields are being edited
//     const [showSettings, setShowSettings] = useState(false); // Toggle for settings menu

//     const handleEdit = (field, value) => {
//         setUser((prev) => ({ ...prev, [field]: value }));
//     };

//     const toggleTheme = () => {
//         setIsDarkMode((prevMode) => !prevMode);
//         document.body.classList.toggle('dark-mode', !isDarkMode);
//     };

//     const handleProfilePictureChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setUser((prev) => ({ ...prev, profilePicture: imageUrl }));
//         }
//     };

//     const toggleEdit = (field) => {
//         setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
//     };

//     const handleSave = (field) => {
//         toggleEdit(field);
//         // Save updated data to localStorage
//         localStorage.setItem('user', JSON.stringify(user));
//     };

//     const toggleSettings = () => {
//         setShowSettings((prev) => !prev);
//     };

//     useEffect(() => {
//         // Fetch user data from localStorage
//         const userData = JSON.parse(localStorage.getItem('user'));
//         if (userData) {
//             setUser(userData);
//         }
//     }, []);

//     if (!user) {
//         return <p>Loading...</p>; // Show loading message while fetching data
//     }

//     return (
//         <Layout>
//             <div className="account-page">
//                 <h1 className="account-title">My Account</h1>
//                 <div className="account-card">
//                     {/* Profile Picture */}
//                     <div className="profile-picture-container">
//                         <img
//                             src={user.profilePicture}
//                             alt="Profile"
//                             className="profile-picture"
//                         />
//                         <label className="profile-picture-upload">
//                             Change
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleProfilePictureChange}
//                             />
//                         </label>
//                     </div>

//                     {/* Editable Fields */}
//                     {['name', 'email', 'phone', 'address'].map((field) => (
//                         <div className="account-field" key={field}>
//                             <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
//                             {isEditing[field] ? (
//                                 <input
//                                     type="text"
//                                     value={user[field] || ''}
//                                     onChange={(e) => handleEdit(field, e.target.value)}
//                                     onBlur={() => handleSave(field)} // Save changes on blur
//                                 />
//                             ) : (
//                                 <>
//                                     <span>{user[field]}</span>
//                                     <button
//                                         className="edit-btn"
//                                         onClick={() => toggleEdit(field)}
//                                     >
//                                         Edit
//                                     </button>
//                                 </>
//                             )}
//                         </div>
//                     ))}

//                     {/* Settings Button */}
//                     <button className="settings-btn" onClick={toggleSettings}>
//                         {showSettings ? 'Close Settings' : 'Settings'}
//                     </button>

//                     {/* Settings Dropdown */}
//                     {showSettings && (
//                         <div className="settings-menu">
//                             <div className="settings-item">
//                                 <label>Manage Notifications:</label>
//                                 <button className="action-btn">Manage</button>
//                             </div>
//                             <div className="settings-item">
//                                 <label>Theme:</label>
//                                 <button
//                                     className="action-btn"
//                                     onClick={toggleTheme}
//                                 >
//                                      {isDarkMode ? 'Light' : 'Dark'} Mode
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     {/* Logout Button */}
//                     <button className="logout-btn">Logout</button>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default AccountPage;



// import React, { useState, useEffect } from 'react';
// import './AccountPage.css';
// import Layout from '../../Layout/Layout';

// const AccountPage = () => {
//     const [user, setUser] = useState(null);
//     const [isDarkMode, setIsDarkMode] = useState(false);
//     const [isEditing, setIsEditing] = useState(false); // Toggle for all fields
//     const [showSettings, setShowSettings] = useState(false); // Toggle for settings menu

//     const handleEdit = (field, value) => {
//         setUser((prev) => ({ ...prev, [field]: value }));
//     };

//     const toggleTheme = () => {
//         setIsDarkMode((prevMode) => !prevMode);
//         document.body.classList.toggle('dark-mode', !isDarkMode);
//     };

//     const handleProfilePictureChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const imageUrl = URL.createObjectURL(file);
//             setUser((prev) => ({ ...prev, profilePicture: imageUrl }));
//         }
//     };

//     const toggleEditAll = () => {
//         setIsEditing((prev) => !prev); // Toggle editing for all fields
//     };

//     const handleSaveAll = () => {
//         // Save updated data to localStorage
//         localStorage.setItem('user', JSON.stringify(user));
//         setIsEditing(false); // Exit edit mode after saving
//     };

//     const toggleSettings = () => {
//         setShowSettings((prev) => !prev);
//     };

//     useEffect(() => {
//         // Fetch user data from localStorage
//         const userData = JSON.parse(localStorage.getItem('user'));
//         if (userData) {
//             setUser(userData);
//         }
//     }, []);

//     if (!user) {
//         return <p>Loading...</p>; // Show loading message while fetching data
//     }

//     return (
//         <Layout>
//             <div className="account-page">
//                 <h1 className="account-title">My Account</h1>
//                  {/* Settings Button */}
//                  <button className="settings-btn" onClick={toggleSettings}>
//                         {showSettings ? 'Close Settings' : 'Settings'}
//                     </button>

//                     {/* Settings Dropdown */}
//                     {showSettings && (
//                         <div className="settings-menu">
//                             <div className="settings-item">
//                                 <label> Notifications:</label>
//                                 <button className="action-btn">Manage</button>
//                             </div>
//                             <div className="settings-item">
//                                 <label>Theme:</label>
//                                 <button
//                                     className="action-btn"
//                                     onClick={toggleTheme}
//                                 >
//                                     {isDarkMode ? 'Light' : 'Dark'} Mode
//                                 </button>
//                             </div>
//                         </div>
//                     )}
//                 <div className="account-card">
//                     {/* Profile Picture */}
//                     <div className="profile-picture-container">
//                         <img
//                             src={user.profilePicture}
//                             alt="Profile"
//                             className="profile-picture"
//                         />
//                         <label className="profile-picture-upload">
//                             Change
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleProfilePictureChange}
//                             />
//                         </label>
//                     </div>


//                     {/* Editable Fields */}
//                     {['name', 'email', 'phone', 'address'].map((field) => (
//                         <div className="account-field" key={field}>
//                             <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
//                             {isEditing ? (
//                                 <input
//                                     type="text"
//                                     value={user[field] || ''}
//                                     onChange={(e) => handleEdit(field, e.target.value)}
//                                 />
//                             ) : (
//                                 <span>{user[field]}</span>
//                             )}
//                         </div>
//                     ))}

//                     {/* Edit All Button */}
//                     <button className="edit-btn" onClick={toggleEditAll}>
//                         {isEditing ? 'Save All' : 'Edit All'}
//                     </button>

                   

//                     {/* Save All Changes Button */}
//                     {isEditing && (
//                         <button className="save-all-btn" onClick={handleSaveAll}>
//                             Save All
//                         </button>
//                     )}

//                     {/* Logout Button */}
//                     <button className="logout-btn">Logout</button>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default AccountPage;






import React, { useState, useEffect } from 'react';
import './AccountPage.css';
import Layout from '../../Layout/Layout';
import { FaSun, FaMoon, FaBell, FaRegBell } from 'react-icons/fa'; // Import icons from react-icons

const AccountPage = () => {
    const [user, setUser] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false); // For notifications toggle
    const [isEditing, setIsEditing] = useState(false); // Toggle for all fields
    const [showSettings, setShowSettings] = useState(false); // Toggle for settings menu

    const handleEdit = (field, value) => {
        setUser((prev) => ({ ...prev, [field]: value }));
    };

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setUser((prev) => ({ ...prev, profilePicture: imageUrl }));
        }
    };

    const toggleEditAll = () => {
        setIsEditing((prev) => !prev); // Toggle editing for all fields
    };

    const handleSaveAll = () => {
        // Save updated data to localStorage
        localStorage.setItem('user', JSON.stringify(user));
        setIsEditing(false); // Exit edit mode after saving
    };

    const toggleSettings = () => {
        setShowSettings((prev) => !prev);
    };

    const toggleNotifications = () => {
        setIsNotificationsEnabled((prev) => !prev); // Toggle notification setting
    };

    useEffect(() => {
        // Fetch user data from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
        }
    }, []);

    if (!user) {
        return <p>Loading...</p>; // Show loading message while fetching data
    }

    return (
        <Layout>
            <div className="account-page">
                <h1 className="account-title">My Account</h1>
                
                {/* Settings Button */}
                <button className="settings-btn" onClick={toggleSettings}>
                    {showSettings ? 'Close Settings' : 'Settings'}
                </button>

                {/* Settings Dropdown */}
                {showSettings && (
                    <div className="settings-menu">
                        <div className="settings-item">
                            <label>Notifications:</label>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={isNotificationsEnabled}
                                    onChange={toggleNotifications}
                                />
                                <span className="slider round"></span>
                            </label>
                            {/* <span>{isNotificationsEnabled ? <FaBell /> : <FaRegBell />} </span> */}
                        </div>
                        <div className="settings-item">
                            <label>Theme:</label>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={isDarkMode}
                                    onChange={toggleTheme}
                                />
                                <span className="slider round"></span>
                            </label>
                            {/* <span>{isDarkMode ? <FaSun /> : <FaMoon />} </span> */}
                        </div>
                    </div>
                )}

                <div className="account-card">
                    {/* Profile Picture */}
                    <div className="profile-picture-container">
                        <img
                            src={user.profilePicture}
                            alt="Profile"
                            className="profile-picture"
                        />
                        <label className="profile-picture-upload">
                            Change
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePictureChange}
                            />
                        </label>
                    </div>

                    {/* Editable Fields */}
                    {['name', 'email', 'phone', 'address'].map((field) => (
                        <div className="account-field" key={field}>
                            <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={user[field] || ''}
                                    onChange={(e) => handleEdit(field, e.target.value)}
                                />
                            ) : (
                                <span>{user[field]}</span>
                            )}
                        </div>
                    ))}

                    {/* Edit All Button */}
                    <button className="edit-btn" onClick={toggleEditAll}>
                        {isEditing ? 'Save All' : 'Edit All'}
                    </button>

                    {/* Save All Changes Button */}
                    {isEditing && (
                        <button className="save-all-btn" onClick={handleSaveAll}>
                            Save All
                        </button>
                    )}

                    {/* Logout Button */}
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
        </Layout>
    );
};

export default AccountPage;
