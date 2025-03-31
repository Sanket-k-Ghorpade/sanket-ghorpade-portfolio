import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 flex flex-col items-center justify-center py-12"
    >
      <div className="text-center mb-8 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          I’d love to hear from you! Feel free to reach out through any of the
          methods below:
        </p>
        <div className="bg-white shadow-lg rounded-xl max-w-lg sm:w-full px-4 sm:px-8 py-8 mx-auto">
          <div className="flex items-center mb-6">
            <FaPhoneAlt className="text-3xl text-gray-600 mr-4" />
            <p className="text-lg flex flex-col sm:flex-row ">
              <span className="pr-2 hidden sm:inline-block">Phone: </span>{" "}
              <a
                href="tel:+919518932559"
                className="hover:text-gray-600 transition-colors"
              >
                +91 9518932559
              </a>
            </p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-3xl text-gray-600 mr-4" />
            <p className="text-lg  flex flex-col sm:flex-row ">
              <span className="pr-2 hidden sm:inline-block">Email: </span>{" "}
              <a
                href="mailto:sanketghorpade009@gmail.com"
                className="hover:text-gray-600 transition-colors"
              >
                sanketghorpade009@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
