// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="#home" className="text-xl font-bold text-blue-600">
            BookStore
          </a>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-200">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-200">About</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition duration-200">Features</a>
          <a href="#products" className="text-gray-600 hover:text-blue-600 transition duration-200">Products</a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center py-4">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition duration-200 py-2">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition duration-200 py-2">About</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition duration-200 py-2">Features</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition duration-200 py-2">Products</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
