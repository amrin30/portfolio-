import React from "react";
import { motion } from "framer-motion";

const Footer = ({ darkMode }) => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-700"} py-6`} 
    >
      <div className="container mx-auto px-4 text-center">
        <p>&copy;Built by Amrin Reihana. The source code is available on GitHub.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
