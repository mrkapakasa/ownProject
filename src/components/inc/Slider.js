import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
//import SliderImage from '../images/prec.jpg';
import bgImage from '../images/bg.jpg';

function SliderWithOverlay() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full z-0">
        <img
          src={bgImage}
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h6 className="text-4xl font-extrabold text-yellow-500">
          Welcome to <br /> KAPREC TECH COMPANY, 
        </h6>
        <span className="text-lg text-4xl font-sembold text-black bg-white bg-opacity-50 p-4 rounded-md shadow-lg whitespace-nowrap">
        The Home Where You Can Access Origianal And High Quality Products.
        </span>
      </div>

      {/* Get Started Button */}
      <button
        className="absolute bottom-20 right-4 z-20 bg-blue-400 text-white text-lg font-semibold py-2 px-4 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
        onClick={() => navigate('/login')} // Navigate to the login page
      >
        Get Started
      </button>
    </div>
  );
}

export default SliderWithOverlay;
