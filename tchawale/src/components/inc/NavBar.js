import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <div className="text-lg font-bold">
  School Portal
</div>


        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>

        {/* Links */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col sm:flex sm:flex-row sm:items-center w-full sm:w-auto sm:space-x-4 mt-4 sm:mt-0`}
        >
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-300 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white hover:text-gray-300 font-medium"
              >
                Login/SignUp
              </Link>
            </li>
            
            <li>
              <Link
                to="/settings"
                className="text-white hover:text-gray-300 font-medium"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-300 font-medium"
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
