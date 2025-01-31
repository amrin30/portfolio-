
import React from "react";
import { motion } from "framer-motion";

const Education = ({ darkMode }) => {
  const educationData = [
    {
      degree: "Computer and Communication Engineering",
      institution: "Panimalar Engineering College",
      year: "2020 - 2024",
    },
    {
      degree: "S.S.K.V Matric Higher Secondary School",
      institution: "HSC",
      year: "2019 - 2020",
    },
    {
      degree: "S.S.K.V Matric Higher Secondary School",
      institution: "SSLC",
      year: "2017 - 2018",
    },
  ];

  return (
    <section
      id="education"
      className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} py-20`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Education
        </h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} p-6 rounded-lg shadow-lg`}
            >
              <h3 className={`${darkMode ? "text-white" : "text-gray-900"} text-xl font-bold`}>
                {edu.degree}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {edu.institution}
              </p>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {edu.year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
