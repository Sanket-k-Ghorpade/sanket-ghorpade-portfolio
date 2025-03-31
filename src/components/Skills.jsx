import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql, SiJquery } from "react-icons/si";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "ReactJS", icon: <FaReact size={40} /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={40} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
  { name: "jQuery", icon: <SiJquery size={40} /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const element = document.getElementById("skills");
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
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-12 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Skills
        </h2>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">
            Frontend
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <span className="text-xl font-semibold text-gray-700 mt-2">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Backend</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {skill.icon}
                <span className="text-xl font-semibold text-gray-700 mt-2">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
