import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/6956922/pexels-photo-6956922.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="About Us"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Welcome to our platform! We are dedicated to providing high-quality products and excellent customer service. Our mission is to deliver value and satisfaction to our customers through a seamless shopping experience.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 2025, we have grown from a small startup to a trusted brand serving customers worldwide. Our team is passionate about curating the best products and ensuring that every purchase brings joy to your life.
            </p>
            <button className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
