
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/outline';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Toggle menu function for mobile screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      style={{
        backgroundColor: darkMode ? "#2d3748" : "#f7fafc", // Light mode: #f7fafc, dark mode: #2d3748
        color: darkMode ? "#ffffff" : "#1a202c", // Light mode: #1a202c, dark mode: #ffffff
      }}
      className="fixed top-0 w-full z-50 shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          Amrin Reihana
        </motion.div>

        {/* Hamburger Icon (for small screens) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl p-2 rounded-full"
            style={{
              backgroundColor: darkMode ? "#4a5568" : "#edf2f7", // Set background color based on darkMode
              color: darkMode ? "#ffffff" : "#1a202c", // Set icon color based on darkMode
            }}
          >
            {/* Toggle between hamburger and close icons */}
            {isMenuOpen ? (
              <FaTimes
                style={{
                  color: darkMode ? "#ffffff" : "#1a202c", // Change color based on darkMode
                }}
              />
            ) : (
              <FaBars
                style={{
                  color: darkMode ? "#ffffff" : "#1a202c", // Change color based on darkMode
                }}
              />
            )}
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex items-center space-x-6 absolute lg:static left-0 top-full lg:top-auto w-full lg:w-auto px-6 py-4 lg:p-0 flex-col lg:flex-row`}
          style={{
            backgroundColor: darkMode ? "#2d3748" : "#f7fafc", // Dropdown background color
            color: darkMode ? "#ffffff" : "#1a202c", // Dropdown text color
          }}
        >
          <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-6">
            {["About", "Education", "Skills", "Projects", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="hover:text-gray-400 lg:hover:text-gray-600"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item}
                  </a>
                </motion.li>
              )
            )}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: darkMode ? "#4a5568" : "#edf2f7", // dark:bg-gray-700, light:bg-gray-200
              color: darkMode ? "#ffffff" : "#1a202c", // dark:text-white, light:text-gray-900
            }}
            className="p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-500" /> // Sun icon for dark mode
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-800" /> // Moon icon for light mode
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
