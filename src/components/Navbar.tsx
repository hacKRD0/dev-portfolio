import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Use Material Design icons for dark/light mode
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { NavbarProps } from '../types/types';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaRegWindowClose } from 'react-icons/fa';

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-800">
      {/* Container for consistent width alignment */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-bold italic text-gray-800 dark:text-gray-100 font-serif hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Keshava Rajavaram
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors
                   ${isActive ? 'font-semibold text-gray-900 dark:text-white' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Dark Mode Toggle (Rectangular Button) */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-3 py-2 border border-gray-300 dark:border-gray-600 
                         rounded-md bg-white dark:bg-gray-700
                         text-gray-800 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                /* If currently dark, show "light mode" icon */
                <MdLightMode className="w-5 h-5" />
              ) : (
                /* If currently light, show "dark mode" icon */
                <MdDarkMode className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md 
                         text-gray-600 dark:text-gray-200 
                         hover:text-gray-900 dark:hover:text-white
                         focus:outline-none"
              onClick={handleMenuToggle}
            >
              {isOpen ? (
                /* Close Icon (X) */
                <FaRegWindowClose className="w-6 h-6 fill-gray-900 dark:fill-gray-100" />
              ) : (
                /* Hamburger Icon */
                <GiHamburgerMenu className="w-6 h-6 fill-gray-900 dark:fill-gray-100" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 py-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium
                   text-gray-600 dark:text-gray-200
                   hover:text-gray-900 dark:hover:text-white
                   ${isActive ? 'font-semibold text-gray-900 dark:text-white' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Dark Mode Toggle in Mobile Menu (Rectangular Button) */}
            <button
              onClick={() => {
                toggleDarkMode();
                setIsOpen(false);
              }}
              className="w-1/8 text-left mt-2 px-3 py-2 border border-gray-300 dark:border-gray-600 
                         rounded-md bg-white dark:bg-gray-700
                         text-gray-800 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors
                         "
              aria-label="Toggle Dark Mode (Mobile)"
            >
              {darkMode ? (
                /* If currently dark, show "light mode" icon */
                <MdLightMode className="w-5 h-5" />
              ) : (
                /* If currently light, show "dark mode" icon */
                <MdDarkMode className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
