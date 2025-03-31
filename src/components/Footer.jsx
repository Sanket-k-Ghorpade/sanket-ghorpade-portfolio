import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Sanket Ghorpade. All rights
            reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Sanket-k-Ghorpade"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <FaGithub className="text-3xl hover:text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/sanket-ghorpade-70a988251/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <FaLinkedin className="text-3xl hover:text-gray-300" />
          </a>
          <a
            href="https://www.instagram.com/sanketghorpade_9/#"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125"
          >
            <FaInstagram className="text-3xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
