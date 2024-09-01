import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <nav>
        <Link to="details">Profile Details</Link> | 
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Profile;
