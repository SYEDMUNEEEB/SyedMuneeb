import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaDatabase, FaNodeJs, FaChartBar, FaServer } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-center">
      <h1 className="text-4xl mb-8">About Me</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        I am Syed Muneeb, a Full Stack Web Developer specializing in the MERN stack. I love building applications that solve real-world problems and provide users with a delightful experience.
      </p>
      <h2 className="text-2xl mb-4">Skills</h2>
      <div className="flex flex-wrap justify-center">
        <SkillBadge icon={<FaHtml5 />} name="HTML" color="bg-red-500" />
        <SkillBadge icon={<FaCss3Alt />} name="CSS" color="bg-blue-500" />
        <SkillBadge icon={<FaJs />} name="JavaScript" color="bg-yellow-500" />
        <SkillBadge icon={<FaBootstrap />} name="Bootstrap" color="bg-purple-500" />
        <SkillBadge icon={<FaReact />} name="React" color="bg-blue-400" />
        <SkillBadge icon={<FaChartBar />} name="Chart.js" color="bg-green-500" />
        <SkillBadge icon={<FaDatabase />} name="MongoDB" color="bg-yellow-400" />
        <SkillBadge icon={<FaNodeJs />} name="Node.js" color="bg-green-600" />
        <SkillBadge icon={<FaServer />} name="Express.js" color="bg-gray-500" />
        <SkillBadge icon={<FaServer />} name="Socket.io" color="bg-indigo-500" />
      </div>
    </section>
  );
};

const SkillBadge = ({ icon, name, color }) => {
  return (
    <div className={`flex items-center ${color} text-white font-semibold py-1 px-4 rounded-full m-2`}>
      {icon}
      <span className="ml-2">{name}</span>
    </div>
  );
};

export default About;
