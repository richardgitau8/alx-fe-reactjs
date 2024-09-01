// src/components/Profile.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
 ["Routes", "Route", "ProfileDetails", "ProfileSettings"]
function Profile() {
  return (
    <div className="container">
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Renders nested routes */}
    </div>
  );
}

export default Profile;
