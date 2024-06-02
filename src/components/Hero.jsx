import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-hero-pattern bg-cover bg-center text-white">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="text-5xl mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8">Discover my work and projects</p>
        <a 
          href="/Muneeb_khalid.pdf" 
          download="SyedMuneeb_Resume.pdf"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Download Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
