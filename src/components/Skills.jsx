import React from "react";

const Skills = ({ darkMode }) => {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "Tailwind CSS",
    "Node.js",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "Git",
  ];

  return (
    <section
      id="skills"
      className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} py-20`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Skills</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"} px-6 py-3 rounded-lg`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;



