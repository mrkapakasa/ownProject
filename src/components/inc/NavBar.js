import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand */}
        <Link to="/" className="text-lg font-bold text-gray-800">
          Buy Cheap and High Quality Products from Us!!
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Links */}
        <div
          className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:items-center`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4 sm:mt-0">
            <li className="navbar-item">
              <Link
                to="/"
                className="nav-link text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/login"
                className="nav-link text-gray-700 hover:text-gray-900 font-medium"
              >
                Login/SignUp
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/products"
                className="nav-link text-gray-700 hover:text-gray-900 font-medium"
              >
                Products
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/settings"
                className="nav-link text-gray-700 hover:text-gray-900 font-medium"
              >
                Settings
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contact"
                className="nav-link text-gray-700 hover:text-gray-900 font-medium"
              >
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
