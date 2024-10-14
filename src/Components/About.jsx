// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          About Us
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          At Kitaabi, we believe that reading opens up new worlds and enhances the human experience. Our mission is to provide a vast selection of books to inspire readers of all ages and interests.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          Founded in 2024, Kitaabi started as a small online shop and has grown into a vibrant community of book lovers. We are committed to offering affordable prices, excellent customer service, and a user-friendly shopping experience.
        </p>
        <p className="text-lg text-gray-700 text-center mb-6">
          Join us on this journey of discovery, and let’s explore the magic of books together!
        </p>
        <div className="flex justify-center mt-8">
          <a
            href="#products"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
