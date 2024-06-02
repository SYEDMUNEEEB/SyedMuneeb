import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Syed Muneeb. All rights reserved.</p>
      <div className="mt-2 flex justify-center">
        <a href="https://github.com/SYEDMUNEEEB?tab=repositories" className="mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/syed-muneeb-27b49130a/" className="mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/syed_muneeb05/?igsh=ZGUzMzM3NWJiOQ%3D%3D" className="mx-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
