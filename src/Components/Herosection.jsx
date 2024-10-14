// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg mb-8">
            Explore thousands of books across various genres and find your perfect match!
          </p>
          <a
            href="#products"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Start Reading
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Wide Selection</h2>
            <p className="text-center">
              Choose from thousands of titles across all genres. There's something for everyone!
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Affordable Prices</h2>
            <p className="text-center">
              Enjoy great discounts and offers on your favorite books. Reading is for everyone!
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Community Reviews</h2>
            <p className="text-center">
              Read reviews from fellow readers and find the best books based on their recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
