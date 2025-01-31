

// import React from "react";
// import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin } from "react-icons/fa"; 
// import { IoMail } from "react-icons/io5"; 
// import myPhoto from "./Amrin_photo.jpg"; 

// const Hero = ({ darkMode }) => {
//   return (
//     <section
//       id="hero"
//       className={`${
//         darkMode ? "h-screen bg-gray-900 text-white" : "bg-white text-gray-900"
//       } h-screen flex items-center justify-center`}
//     >
//       <div className="text-center mt-13">
       
//         <motion.img
//           src={myPhoto}
//           alt="Amrin Reihana S"
//           className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         />

        
//         <h1 className="text-4xl font-bold mb-3">Amrin Reihana S</h1>
//         <p className="text-xl mb-4">MERN Stack Developer</p>

       
//         <div className="flex justify-center space-x-6">
//           <a
//             href="https://github.com/amrin30"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-3xl"
//             style={{
//               color: darkMode ? "white" : "black", 
//             }}
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/amrin-reihana-s-81b862251"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-3xl"
//             style={{
//               color: darkMode ? "white" : "black", 
//             }}
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="mailto:amrinreihana@gmail.com"
//             className="text-3xl"
//             style={{
//               color: darkMode ? "white" : "black", 
//             }}
//           >
//             <IoMail />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion"; // Importing framer-motion for animations
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import myPhoto from "./Amrin_photo.jpg";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="hero"
      className={`${
        darkMode ? "h-screen bg-gray-900 text-white" : "bg-white text-gray-900"
      } h-screen flex items-center justify-center`}
    >
      <div className="text-center mt-13">
        {/* Profile Image with animation */}
        <motion.img
          src={myPhoto}
          alt="Amrin Reihana S"
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Name and Title with animation */}
        <motion.h1
          className="text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Amrin Reihana S
        </motion.h1>
        <motion.p
          className="text-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          MERN Stack Developer
        </motion.p>

        {/* Social Media Icons with animation */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          
          <a
            href="https://github.com/amrin30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            style={{
              color: darkMode ? "white" : "black", 
            }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amrin-reihana-s-81b862251"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl"
            style={{
              color: darkMode ? "white" : "black", 
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:amrinreihana@gmail.com"
            className="text-3xl"
            style={{
              color: darkMode ? "white" : "black", 
            }}
          >
            <IoMail />
          </a>
     
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
