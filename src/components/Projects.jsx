import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import youtube from "../assets/youtube.png";
import flashcard from "../assets/flashcard.png";
import entertainment from "../assets/entertainment.png";

const projects = [
  {
    name: "Entertainment App",
    src: entertainment,
    live: "https://entertainment-app-tau-one.vercel.app/",
    github: "https://github.com/Sanket-k-Ghorpade/Entertainment_App.git",
  },
  {
    name: "FlashCard Generator",
    src: flashcard,
    live: "https://flashcard-generator-rho.vercel.app/",
    github: "https://github.com/Sanket-k-Ghorpade/flashcard-generator.git",
  },
  {
    name: "Youtube Subscribers",
    src: youtube,
    live: "https://youtube-subscribers-flame.vercel.app/",
    github: "https://github.com/Sanket-k-Ghorpade/youtube-subscribers.git",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const element = document.getElementById("projects");
    if (element) {
      const rect = element.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    }
  };

  useEffect(() => {
    checkVisibility(); // Check visibility on mount

    window.addEventListener("scroll", checkVisibility); // Add scroll event listener
    return () => window.removeEventListener("scroll", checkVisibility); // Clean up event listener
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-12 flex items-center"
    >
      <div className="container mx-auto px-6 md:px-4">
        <motion.h1
          className="text-4xl md:text-3xl font-bold mb-12 text-gray-800 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((p, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden group"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={p.src}
                  alt={`Project-${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    >
                      Live Link
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {p.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
