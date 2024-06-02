import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="fixed w-full bg-gray-800 text-white p-4 flex justify-between items-center shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="text-2xl font-bold">Syed Muneeb </div>
      <nav>
        <a href="#projects" className="mx-2 hover:text-blue-400">Projects</a>
        <a href="#about" className="mx-2 hover:text-blue-400">About</a>
        <a href="#contact" className="mx-2 hover:text-blue-400">Contact</a>
      </nav>
    </motion.header>
  );
};

export default Header;
