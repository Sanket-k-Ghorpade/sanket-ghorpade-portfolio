import React, { useEffect, useState } from "react";
import sanket from "../assets/sanket.jpeg";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const element = document.getElementById("about-section");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    checkVisibility(); // Check visibility on mount

    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility); // Clean up event listener
  }, []);

  return (
    <section
      id="about-section"
      className="relative py-12 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 flex justify-center items-center overflow-hidden min-h-screen"
    >
      <div className="container mx-auto px-6 md:px-4 flex flex-col-reverse gap-8 md:gap-2 md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="flex flex-col items-center md:items-start w-full md:w-1/2 p-6 bg-white rounded-lg shadow-xl transform transition-transform duration-500 ease-in-out"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-lg text-gray-600 text-center md:text-left">
            Passionate Full Stack Developer skilled in crafting dynamic,
            responsive web applications. Adept in both front-end and back-end
            technologies, I bring a comprehensive approach to creating seamless
            user experiences and robust server-side solutions. I am dedicated to
            continuous learning and innovation, always exploring the latest
            industry trends and best practices to enhance my skill set and stay
            ahead in a rapidly evolving field.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={sanket}
            alt="Sanket"
            className="w-48 h-48 md:w-80 md:h-80 rounded-full shadow-xl border-4 border-white"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
