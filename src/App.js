import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/inc/NavBar';
import Home from './components/pages/Home';
import Contact from './components/pages/ContactUs';
import Login from './components/pages/Login';
import Products from './components/pages/Products';
import Setting from './components/pages/Setting'; // Ensure this file exists
import Signup from './components/pages/Signup';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* NavBar is sticky for mobile and desktop */}
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </div>
        {/* Footer with adjusted spacing */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-4">
          © 2025 Kaprec-Development. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
