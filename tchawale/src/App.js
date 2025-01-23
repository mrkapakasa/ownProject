import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/inc/NavBar';
import Home from './components/pages/Home';
import Contact from './components/pages/ContactUs';
import Login from './components/pages/Login';
import Products from './components/pages/Products';
import Signup from './components/pages/Signup';
import StudentResources from './components/pages/StudentResources';
import TeachersPortal from './components/pages/TeachersPortal';
import ParentDashboard from './components/pages/ParentDashboard';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/student-resources" element={<StudentResources />} /> 
        <Route path="/teachers-portal" element={<TeachersPortal />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
