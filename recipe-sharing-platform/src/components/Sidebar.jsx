// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-80 bg-gray-100 p-4 h-screen fixed top-0 left-0">
      {/* Logo */}
      <div className="text-center mb-6">
        <img
          src="/images/logo.png"
          alt="Big Sinia"
          className="w-32 mx-auto mb-4"
        />
      </div>

      {/* User Account */}
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <img
            src="/images/user-icon.png"
            alt="User Icon"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-semibold">User Account</h2>
            <button className="block mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
            <button className="block mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Sign Up</button>
            <button className="block mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Favorites</button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Categories</h3>
        <select className="w-full bg-white border border-gray-300 rounded-lg p-2">
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Desserts</option>
          <option>Baking</option>
          <option>Salads</option>
          <option>Soups</option>
          <option>Drinks</option>
        </select>
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/blog" className="text-blue-500 hover:underline">Blog</a>
          </li>
          <li>
            <a href="/about-us" className="text-blue-500 hover:underline">About Us</a>
          </li>
          <li>
            <a href="/contact-us" className="text-blue-500 hover:underline">Contact Us</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
