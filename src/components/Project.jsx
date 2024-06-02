import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ title, description, link, image }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-200 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </motion.div>
  );
};

export default Project;
