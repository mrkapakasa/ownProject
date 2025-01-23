import React from 'react';

function SliderWithOverlay() {
  return (
    <div className="relative h-full">

      {/* Centered Text */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center pt-16">
  <h6 className="text-4xl font-extrabold text-yellow-500 mb-4">
    Welcome to <br /> TCHAWALE L.E.A. School Portal.
  </h6>
  <span className="text-lg text-2xl font-semibold text-black bg-white bg-opacity-50 p-4 rounded-md shadow-lg">
    Seeking and building a Learning Community of Model TEACHERS, PUPILS, and MANAGERS <br /> 
    who Learn from each other, Teach each other, and together build a higher Quality Education.
  </span>
</div>

  
    </div>
  );
}

export default SliderWithOverlay;
