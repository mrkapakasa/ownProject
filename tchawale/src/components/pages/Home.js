import React from 'react';
import Slider from '../inc/Slider';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <main className="bg-blue-50 min-h-screen flex flex-col items-center justify-start">


<section className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-yellow-100 p-2 rounded-lg shadow hover:shadow-lg transition">
    <h2 className="text-lg font-semibold text-yellow-700">Student Resources</h2>
    <p className="text-sm text-black-800">Find assignments, study materials, and more.</p>
    <Link 
      to="/student-resources" 
      className="mt-4 inline-block bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-800 transition"
    >
      Explore Resources
    </Link>
  </div>


  <div className="bg-yellow-100 p-2 rounded-lg shadow hover:shadow-lg transition">
  <h2 className="text-lg font-semibold text-yellow-700">Teacher Portal</h2>
  <p className="text-sm text-black-800">Access lesson plans and grading tools.</p>
  
  {/* Button to navigate to Teacher's Portal */}
  <Link
    to="/teachers-portal" // Route to Teacher's Portal page
    className="mt-4 inline-block bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-800 transition"
  >
    Explore Portal
  </Link>
</div>

<div className="bg-yellow-100 p-2 rounded-lg shadow hover:shadow-lg transition">
  <h2 className="text-lg font-semibold text-yellow-700">Parent Dashboard</h2>
  <p className="text-sm text-black-800">View student progress and school updates.</p>
  <Link
    to="/parent-dashboard" // Route to Parent Dashboard
    className="mt-4 inline-block bg-yellow-700 text-white text-sm font-medium py-2 px-4 rounded hover:bg-green-800 transition"
  >
    View Results
  </Link>
</div>
   
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <Slider />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white w-full py-4 text-center">
        <p className="text-sm">© Primary School Portal. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

export default Home;
