import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "SSC",
    institution: "Wanless Highschool, Sangli",
    year: "2017",
    icon: <FaSchool className="text-4xl text-gray-500" />,
  },
  {
    degree: "HSC",
    institution: "Wanless Highschool, Sangli",
    year: "2019",
    icon: <FaSchool className="text-4xl text-gray-500" />,
  },
  {
    degree: "Diploma in Robotics & Mechatronics",
    institution: "IDEMI, Mumbai",
    year: "2022",
    icon: <FaUniversity className="text-4xl text-gray-500" />,
  },
  {
    degree: "B.E in Elctronics & Computer Science",
    institution: "SIES GST, Navi Mumbai",
    year: "pursuing",
    icon: <FaUniversity className="text-4xl text-gray-500" />,
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-semibold text-gray-800 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <div className="relative flex flex-col items-center">
          <div className="absolute inset-0 flex flex-col items-center">
            <div className="border-l-2 border-gray-300 h-full"></div>
          </div>
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative bg-white p-6 rounded-lg shadow-lg mb-10 w-full max-w-4xl flex items-start  ${
                index === educationData.length - 1 ? "mb-0" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="absolute left-[-24px] top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-gray-200 p-1 text-white rounded-full">
                {edu.icon}
              </div>
              <div className="ml-16">
                <h3 className="text-xl font-bold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-lg text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
