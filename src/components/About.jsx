import React from "react";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      style={{
        backgroundColor: darkMode ? "#2d3748" : "#f7fafc", // dark:bg-gray-800, light:bg-gray-100
        color: darkMode ? "#ffffff" : "#1a202c", // dark:text-white, light:text-gray-900
      }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          Passionate Frontend Developer and Visual Designer with expertise in
          building intuitive, accessible, and visually appealing web
          applications. Skilled in crafting seamless user experiences by
          blending design aesthetics with modern web technologies. Committed to
          continuous learning and solving real-world challenges through
          technology.
        </p>
      </div>
    </section>
  );
};

export default About;
