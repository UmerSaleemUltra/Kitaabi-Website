// src/components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m-3-7a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
            <p className="text-center text-gray-600">
              Explore a vast collection of books across genres. There's something for every reader!
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
            <p className="text-center text-gray-600">
              Get great deals and discounts on your favorite titles. Reading doesn't have to be expensive!
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m0 0v4m0-4V8"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Community Reviews</h3>
            <p className="text-center text-gray-600">
              Read and share reviews with our community to find the best reads and recommendations.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-center text-gray-600">
              Enjoy quick delivery times so you can dive into your new book as soon as possible.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m-3-7a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Expert Recommendations</h3>
            <p className="text-center text-gray-600">
              Get personalized suggestions based on your reading preferences and interests.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-4 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
            <p className="text-center text-gray-600">
              Our dedicated support team is here to help with any questions or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
