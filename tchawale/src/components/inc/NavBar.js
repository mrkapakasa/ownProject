import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-blue-600 text-white">
    {/* Navbar content */}
  
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Easiest way of operating your School!! 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"  
        >  
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-links">
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link active">
                Home
              </Link> 
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link active">
                Login/SignUp
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/products" className="nav-link active">
                Products
              </Link>  
              </li>
            <li className="navbar-item">
              <Link to="/settings" className="nav-link">
                Settings
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;