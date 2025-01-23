import React from "react";
// Import the image file
import bg1Image from '../images/bg1.jpg'; // Adjust the path if needed
import developerImage from '../images/dev.jpg';

function ContactUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-4"
      style={{
        // Use bg1Image for background
        backgroundImage: `url(${bg1Image})`,
      }}
    >
      <div className="max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg mt-8 p-6 relative">
        {/* Developer's Image on Top */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <img
            src={developerImage} // Use imported developer image
            alt="Developer"
            className="w-32 h-32 rounded-full shadow-lg border-4 border-white"
          />
        </div>

        <div className="flex flex-col items-center mt-16">
          {/* Developer Information */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            About the Developer
          </h1>
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            I am <span className="font-bold text-black"> Precious Kapakasa</span>, the developer of this website. I
            am a passionate web developer and currently a third-year student at
            the <span className="font-semibold text-blue-700">University of Malawi</span>.
            As part of my academic and personal growth, I strive to create innovative,
            user-friendly, and visually appealing web applications.
          </p>

          <p className="text-gray-700 text-lg text-center mt-4 leading-relaxed">
            This project was built with the latest web technologies, including
            React.js and Tailwind CSS, to ensure a seamless and dynamic user experience.
            My goal is to deliver high-quality solutions, paying close attention to detail
            and implementing clean, maintainable, and scalable code.
          </p>

          {/* Contact Information */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-center text-black mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              Email: <a href="mailto:your.email@example.com" className="text-blue-500 underline">kapakasaprecious79@gmail.com</a>
            </p>
            <p className="text-gray-600">
              Phone: <a href="tel:+1234567890" className="text-blue-500 underline">(+265) 882 074 522 | 991 348 530</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
