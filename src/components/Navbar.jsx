// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-500 p-4 border-b border-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-3xl font-semibold">Travel World</Link>
      <div className="flex space-x-4">
        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
        <Link to="/signup" className="text-white hover:text-gray-200">Sign Up</Link>
        <Link to="/signin" className="text-white hover:text-gray-200">Sign In</Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
