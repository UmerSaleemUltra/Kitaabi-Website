// src/components/Testimonials.js
import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    feedback: "This bookstore has changed my reading experience. The selection is amazing and the service is top-notch!",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Sample user image
  },
  {
    name: "Jane Smith",
    feedback: "I found exactly what I was looking for. The staff is very helpful and knowledgeable about their books!",
    image: "https://randomuser.me/api/portraits/women/1.jpg", // Sample user image
  },
  {
    name: "Alice Johnson",
    feedback: "A fantastic place for book lovers! I love the cozy atmosphere and the variety of genres available.",
    image: "https://randomuser.me/api/portraits/women/2.jpg", // Sample user image
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
              <p className="text-gray-600 italic">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
