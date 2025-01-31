// import React from "react";
// import { motion } from "framer-motion";
// import img1 from "./trust.png";
// import img2 from "./rbac.png";
// import img3 from "./weather.png";
// import img4 from "./movie.png";
// import img5 from "./game.png";
// import img6 from "./translator.png"

// const Projects = ({ darkMode }) => {
//   const projects = [
//     {
//       title: "Trust App",
//       description:
//         "A full-stack food donation platform that enables users to donate surplus food to charitable trusts, allowing trusts to accept or reject donations while an admin dashboard ensures efficient and transparent management.",
//       image: img1,
//       techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "MUI"],
//       link: "https://github.com/amrin30/Global-Trust.git",
//     },
//     {
//       title: "Role Based Access Control Admin Page",
//       description:
//         "The RBAC UI allows admins to assign roles and permissions to users, ensuring secure and efficient access control to system resources.",
//       image: img2,
//       techStack: ["React.js", "JavaScript", "CSS", "Node.js", "MongoDB"],
//       link: "https://github.com/amrin30/RABC.git",
//     },
//     {
//       title: "Weather API",
//       description:
//         "The Weather API provides real-time weather data, including temperature, humidity, and forecasts for any location.",
//       image: img3,
//       techStack: ["React.js", "JavaScript"],
//       link: "https://weather-api-seven-tawny.vercel.app",
//     },
//     {
//       title: "Movie API",
//       description:
//         "The Movie API provides information about movies, including details like title, release date, cast, ratings.",
//       image: img4,
//       techStack: ["React.js", "JavaScript"],
//       link: "https://movie-iota-green.vercel.app",
//     },
//     {
//       title: "Connecting Game",
//       description:
//         "The Connecting Game challenges players to connect four dots in a row, either horizontally, vertically, or diagonally, to win the game.",
//       image: img5,
//       techStack: ["HTML", "CSS", "JavaScript"],
//       link: "https://game-cyan-three.vercel.app",
//     },
//     {
//       title: "Language Translator",
//       description:
//         "The Language Translator translates text from one language to another, helping users understand and communicate in different languages.",
//       image: img6,
//       techStack: ["React.js", "JavaScript"],
//       link: "https://trans-lator.vercel.app/",  
//     },
//   ];

//   const handleButtonClick = (url) => {
//     window.open(url, "_blank");
//   };

//   return (
//     <section
//       id="projects"
//       style={{
//         backgroundColor: darkMode ? "#2d3748" : "#f7fafc", // dark:bg-gray-800, light:bg-gray-100
//         color: darkMode ? "#ffffff" : "#1a202c", // dark:text-white, light:text-gray-900
//       }}
//       className="py-20"
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
//           My Projects
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05 }}
//               className={`${
//                 darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
//               } p-6 rounded-lg shadow-lg`}
//             >
//               {/* Project Image */}
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />

//               {/* Project Title */}
//               <h3 className="text-xl font-bold">
//                 {project.title}
//               </h3>

//               {/* Project Description */}
//               <p className="mt-2">
//                 {project.description}
//               </p>

//               {/* Tech Stack Badges */}
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {project.techStack.map((tech, i) => (
//                   <span
//                     key={i}
//                     className={`px-3 py-1 text-sm rounded-full ${
//                       darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* View Project Button */}
//               <button
//                 onClick={() => handleButtonClick(project.link)}
//                 className={`mt-4 w-full py-2 rounded-lg transition ${
//                   darkMode
//                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                     : "bg-blue-500 text-white hover:bg-blue-600"
//                 }`}
//               >
//                 View Project
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from "react";
import { motion } from "framer-motion";
import img1 from "./trust.png";
import img2 from "./rbac.png";
import img3 from "./weather.png";
import img4 from "./movie.png";
import img5 from "./game.png";
import img6 from "./translator.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Trust App",
      description:
        "A full-stack food donation platform that enables users to donate surplus food to charitable trusts, allowing trusts to accept or reject donations while an admin dashboard ensures efficient and transparent management.",
      image: img1,
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "MUI"],
      link: "https://github.com/amrin30/Global-Trust.git",
    },
    {
      title: "Role Based Access Control Admin Page",
      description:
        "The RBAC UI allows admins to assign roles and permissions to users, ensuring secure and efficient access control to system resources.",
      image: img2,
      techStack: ["React.js", "JavaScript", "CSS", "Node.js", "MongoDB"],
      link: "https://github.com/amrin30/RABC.git",
    },
    {
      title: "Weather API",
      description:
        "The Weather API provides real-time weather data, including temperature, humidity, and forecasts for any location.",
      image: img3,
      techStack: ["React.js", "JavaScript"],
      link: "https://weather-api-seven-tawny.vercel.app",
    },
    {
      title: "Movie API",
      description:
        "The Movie API provides information about movies, including details like title, release date, cast, ratings.",
      image: img4,
      techStack: ["React.js", "JavaScript"],
      link: "https://movie-iota-green.vercel.app",
    },
    {
      title: "Connecting Game",
      description:
        "The Connecting Game challenges players to connect four dots in a row, either horizontally, vertically, or diagonally, to win the game.",
      image: img5,
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://connecting-game.vercel.app/",
    },
    {
      title: "Language Translator",
      description:
        "The Language Translator translates text from one language to another, helping users understand and communicate in different languages.",
      image: img6,
      techStack: ["React.js", "JavaScript"],
      link: "https://trans-lator.vercel.app/",  
    },
  ];

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#2d3748" : "#f7fafc", // dark:bg-gray-800, light:bg-gray-100
        color: darkMode ? "#ffffff" : "#1a202c", // dark:text-white, light:text-gray-900
      }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }} 
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
              } p-6 rounded-lg shadow-lg transition-all`} 
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              {/* Project Title */}
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="mt-2">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-sm rounded-full ${
                      darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Button */}
              <button
                onClick={() => handleButtonClick(project.link)}
                className={`mt-4 w-full py-2 rounded-lg transition ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                View Project
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
