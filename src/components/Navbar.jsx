import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Sanket Ghorpade
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#skills"
            className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Contact
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-700"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={`md:hidden text-2xl ${
            isOpen ? "text-gray-300" : "text-gray-500"
          }`}
          onClick={toggleDropdown}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-800 text-white flex flex-col items-center pt-8 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button Inside Mobile Menu */}
        <button
          aria-label="Close menu"
          className="absolute top-4 right-4 text-3xl text-gray-300"
          onClick={toggleDropdown}
        >
          ✖
        </button>

        <ul className="space-y-4 mt-12">
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors text-xl"
              onClick={toggleDropdown}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors text-xl"
              onClick={toggleDropdown}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-gray-300 hover:text-white transition-colors text-xl"
              onClick={toggleDropdown}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors text-xl"
              onClick={toggleDropdown}
            >
              Contact
            </a>
          </li>
          {/* Resume Button in Mobile Menu */}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-gray-300 hover:text-white transition-colors text-xl"
              onClick={toggleDropdown}
            >
              Resume
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Navbar;
